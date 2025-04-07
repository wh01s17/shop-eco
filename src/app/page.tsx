import { About } from "@/components/About";
import { BestSellers } from "@/components/products/BestSellers";
import { Container } from "@/components/layout/Container";
import { Shipping } from "@/components/Shipping";

export default function Home() {
  return (
    <Container>
      <BestSellers />
      <About />
      <Shipping />
    </Container>
  )
}
