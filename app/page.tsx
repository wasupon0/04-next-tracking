import Image from "next/image";
import Link from "next/link";
import AddToCard from "./components/AddToCard";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>hello world</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
    </main>
  );
}
