'use client'
import { useEffect, useState } from 'react'
import { useCartStore } from '@/store/useCartStore'
import { useShippingStore } from '@/store/useShippingStore'
import { useAuth } from '@/context/AuthContext'
import { getOrder, saveOrder } from '@/firebase/firestoreShoppingCart'
import { Loading } from '../ui/Loading'

export const Success = () => {
    const { clearCart, getItems, getTotal } = useCartStore()
    const { shippingData } = useShippingStore()
    const { currentUser } = useAuth()

    const [orderDetails, setOrderDetails] = useState<any>(null)

    useEffect(() => {
        // Guardar el resumen del pedido en Firebase
        if (currentUser?.email) {
            const orderData = {
                items: getItems(),
                total: getTotal(),
                shipping: shippingData,
            }

            saveOrder(orderData, currentUser.email)

            clearCart(currentUser.email)
        }

        // Obtener los datos del pedido guardado
        const fetchOrder = async () => {
            if (currentUser?.email) {
                const order = await getOrder(currentUser.email)
                setOrderDetails(order)
            }
        }

        fetchOrder()

    }, [currentUser?.email, getItems, getTotal, shippingData, clearCart])

    if (!orderDetails) {
        return <Loading />
    }

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-2xl mt-10">
            <div className="flex items-center gap-3 mb-6">
                <i className="ri-checkbox-circle-fill text-green-600 text-3xl"></i>
                <h1 className="text-3xl font-bold text-gray-800">Success</h1>
            </div>
            <p className="text-gray-600 mb-6">Your order was successfully placed!</p>

            <div className="space-y-6">
                <div>
                    <h2 className="text-xl font-semibold text-gray-700 mb-2">Order Summary</h2>
                    <ul className="divide-y divide-gray-200">
                        {orderDetails.items.map((item: any) => (
                            <li key={item.id} className="py-2 flex justify-between">
                                <span>{item.title} ({item.count}×)</span>
                                <span>${(item.price * item.count).toFixed(2)}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="border-t border-gray-200 pt-4">
                    <h3 className="text-lg font-medium text-gray-800">Total:</h3>
                    <p className="text-xl font-bold text-green-700">${orderDetails.total.toFixed(2)}</p>
                </div>

                <div className="border-t border-gray-200 pt-4">
                    <h3 className="text-lg font-medium text-gray-800 mb-2">Shipping Details</h3>
                    <div className="text-gray-600 space-y-1">
                        <p><span className="font-semibold">Name:</span> {orderDetails.shipping.fullName}</p>
                        <p><span className="font-semibold">Address:</span> {orderDetails.shipping.address}</p>
                        <p><span className="font-semibold">City:</span> {orderDetails.shipping.city}</p>
                        <p><span className="font-semibold">Country:</span> {orderDetails.shipping.country}</p>
                        <p><span className="font-semibold">Postal Code:</span> {orderDetails.shipping.postalCode}</p>
                        <p><span className="font-semibold">Region:</span> {orderDetails.shipping.region}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
