"use client";
import Card from "@/components/Card";
import Image from "next/image";

export default function Home() {
  const handleClick = () => {
    console.log("click");
    return "ibrahim";
  };
  return (
    <div className="grid grid-col-2  gap-[2.75rem] bg-orange-200 ">
      <Card
        image_url="https://placekitten.com/400/200"
        card_title="cat"
        paragraph="lorem"
        handleClick={handleClick}
        button_text="Fallow"
        favcount={5}
      />
      <Card
        image_url="https://placekitten.com/400/200"
        card_title="cat"
        paragraph="lorem"
        handleClick={handleClick}
        button_text="Fallow"
        favcount={5}
      />
    </div>
  );
}


