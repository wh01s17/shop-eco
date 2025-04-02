import { About } from "@/components/About";
import { BestSellers } from "@/components/BestSellers";
import { Shipping } from "@/components/Shipping";

export default function Home() {
  return (
    <div>
      <BestSellers />
      <About />
      <Shipping />
    </div>
  );
}
