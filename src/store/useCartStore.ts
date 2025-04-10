import { create } from 'zustand'
import { CartItem } from '@/types/cart'
import {
    getCartByEmail,
    addItem as addItemToFirestore,
    removeItem as removeItemFromFirestore
} from '@/firebase/firestoreShoppingCart'

type CartState = {
    items: CartItem[]
    loading: boolean

    // Metodos
    setItems: (items: CartItem[]) => void
    getItems: () => CartItem[]
    addItem: (item: CartItem, email: string) => Promise<void>
    removeItem: (id: string, email: string) => Promise<void>
    fetchCart: (email: string) => Promise<void>
    getTotal: () => number
}

export const useCartStore = create<CartState>((set, get) => ({
    items: [],
    loading: false,

    setItems: (items) => set({ items }),
    getItems: () => get().items,

    addItem: async (item, email) => {
        try {
            await addItemToFirestore(item, email)

            set((state) => {
                const existing = state.items.find((i) => i.id === item.id)
                if (existing) {
                    return {
                        items: state.items.map((i) =>
                            i.id === item.id ? { ...i, count: i.count + item.count } : i
                        ),
                    }
                }
                return { items: [...state.items, item] }
            })
        } catch (error) {
            console.error("Error adding item:", error)
            throw error
        }
    },

    removeItem: async (id, email) => {
        set({ loading: true })
        try {
            set((state) => ({
                items: state.items
                    .map((item) =>
                        item.id === id
                            ? (
                                item.count > 1
                                    ? { ...item, count: item.count - 1 }
                                    : null
                            )
                            : item
                    )
                    .filter((item): item is CartItem => item !== null),
            }))
            await removeItemFromFirestore(id, email)
            set({ loading: false })
        } catch (error) {
            set({ loading: false })
            console.error("Error removing item:", error)
            throw error
        }
    },

    fetchCart: async (email) => {
        set({ loading: true })
        try {
            const data = await getCartByEmail(email)
            set({ items: data, loading: false })
        } catch (error) {
            console.error("Error fetching cart:", error)
            set({ items: [], loading: false })
        }
    },

    getTotal: () => {
        return get().items.reduce((sum, item) => sum + (item.count * item.price), 0)
    }
}))