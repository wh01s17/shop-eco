import { CartItem } from '@/types/cart'
import { db } from './config'
import { collection, getDocs, updateDoc, doc, deleteDoc, setDoc, getDoc } from 'firebase/firestore'

// obtener cart por usuario
export const getCartByEmail = async (email: string): Promise<CartItem[]> => {
    try {
        const itemsCollectionRef = collection(db, "carts", email, "items")
        const querySnapshot = await getDocs(itemsCollectionRef)

        const items: CartItem[] = []
        querySnapshot.forEach((doc) => {
            items.push({
                ...doc.data(),
                id: doc.id
            } as CartItem)
        })

        console.log(items)

        return items
    } catch (error) {
        console.error("Error getting items:", error)
        return []
    }
}

// Agregar un item al carrito
export const addItem = async (itemData: CartItem, userEmail: string): Promise<string> => {
    try {
        const itemsCollectionRef = collection(db, "carts", userEmail, "items")
        const docRef = doc(itemsCollectionRef, itemData.id)

        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
            const existingItem = docSnap.data() as CartItem
            const newCount = existingItem.count + 1

            await updateDoc(docRef, {
                count: newCount
            })
        } else {
            await setDoc(docRef, {
                title: itemData.title,
                price: itemData.price,
                image: itemData.image,
                count: 1
            })
        }

        return itemData.id
    } catch (error) {
        console.error("Error al añadir item:", error)
        throw new Error(`Error al añadir item: ${error}`)
    }
}

// Eliminar un item del carrito
export const removeItem = async (itemId: string, userEmail: string): Promise<void> => {
    try {
        const itemRef = doc(db, "carts", userEmail, "items", itemId)

        const docSnap = await getDoc(itemRef)

        if (docSnap.exists()) {
            const item = docSnap.data() as CartItem

            if (item.count > 1) {
                await updateDoc(itemRef, {
                    count: item.count - 1
                })
            } else {
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
