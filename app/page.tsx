import Image from "next/image";
import PromoSection from "./components/PromoSection";
import ShopByCategories from './components/ShopByCategories'

export default function Home() {
  return (
    <main>
      <PromoSection />
      <ShopByCategories/>
    </main>
  );
}
