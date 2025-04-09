import { CartItem, ShoppingCart } from '@/types/cart'
import { db } from './config'
import { collection, getDocs, updateDoc, doc, deleteDoc, DocumentData, QuerySnapshot, query, orderBy, Timestamp, setDoc, getDoc, increment, where } from 'firebase/firestore'

// obtener cart por usuario
export const getCartByEmail = async (email: string): Promise<CartItem[]> => {
    try {
        // Referencia a la subcolección de items del usuario
        const itemsCollectionRef = collection(db, "carts", email, "items")
        const querySnapshot = await getDocs(itemsCollectionRef)

        const items: CartItem[] = []
        querySnapshot.forEach((doc) => {
            items.push({
                ...doc.data(),
                id: doc.id
            } as CartItem)
        })

        return items
    } catch (error) {
        console.error("Error getting items:", error)
        throw new Error(`Error getting data from Firebase: ${error}`)
    }
}

// Agregar un item al carrito
export const addItem = async (itemData: CartItem, userEmail: string): Promise<string> => {
    try {
        // Referencia a la subcolección de items
        const itemsCollectionRef = collection(db, "carts", userEmail, "items")

        // Usar el ID del producto como ID del documento
        const docRef = doc(itemsCollectionRef, itemData.id)

        // Comprobar si el item ya existe
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
            // El item ya existe, incrementar el contador
            const existingItem = docSnap.data() as CartItem
            const newCount = existingItem.count + itemData.count

            // Actualizar solo el contador
            await updateDoc(docRef, {
                count: newCount
            })
        } else {
            // El item no existe, guardar como nuevo
            await setDoc(docRef, {
                title: itemData.title,
                price: itemData.price,
                image: itemData.image,
                count: itemData.count
            })
        }

        return itemData.id
    } catch (error) {
        console.error("Error al añadir item:", error)
        throw new Error(`Error al añadir item: ${error}`)
    }
}

// Actualizar cantidad de un item
export const updateItemCount = async (itemId: string, newCount: number, userEmail: string): Promise<void> => {
    try {
        const itemRef = doc(db, "carts", userEmail, "items", itemId)
        await setDoc(itemRef, { count: newCount }, { merge: true })
    } catch (error) {
        console.error("Error al actualizar cantidad:", error)
        throw new Error(`Error al actualizar cantidad: ${error}`)
    }
}

// Eliminar un item del carrito
export const removeItem = async (itemId: string, userEmail: string): Promise<void> => {
    try {
        const itemRef = doc(db, "carts", userEmail, "items", itemId)

        // Obtener el item actual
        const docSnap = await getDoc(itemRef)

        if (docSnap.exists()) {
            const item = docSnap.data() as CartItem

            if (item.count > 1) {
                // Si hay más de 1, reducir el contador
                await updateDoc(itemRef, {
                    count: item.count - 1
                })
            } else {
                // Si solo queda 1, eliminar el item
                await deleteDoc(itemRef)
            }
        } else {
            console.log("El producto no existe en el carrito")
        }
    } catch (error) {
        console.error("Error al eliminar item:", error)
        throw new Error(`Error al eliminar item: ${error}`)
    }
}
