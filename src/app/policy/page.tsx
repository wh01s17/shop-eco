import { Policy } from "@/components/Policy";

export default async function PolicyPage() {
    return (
        <Policy />
    )
}

export async function generateMetadata() {
    return {
        title: 'Policy',
        description: 'Shop-Eco Sustainability & Usage Policy'
    }
}
