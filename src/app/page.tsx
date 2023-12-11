import Card from "@/components/Card";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex bg-orange-200 min-h-screen flex-col items-center justify-between p-24">
      <Card image_url="https://placekitten.com/400/200"/>
    </main>
  );
}
