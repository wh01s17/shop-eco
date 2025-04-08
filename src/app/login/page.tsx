import { Login } from "@/components/login/Login"

export default async function LoginPage() {
    return (
        <Login />
    )
}

export async function generateMetadata() {
    return {
        title: 'Login',
        description: 'Login Shop-Eco'
    }
}
