import Image from "next/image";
import React from "react";

const Card = () => {
  return (
    <div className="max-w-md bg-white rounded-md overflow-hidden shadow-md">
      {/* Resim */}
      <div className="relative h-72">
        <Image
          src="https://placekitten.com/400/200"
          alt="Card Image"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Başlık */}
      <div className="p-4">
        <h2 className="text-xl font-bold">Card Başlığı</h2>
      </div>

      {/* Açıklama */}
      <div className="px-4 pb-2">
        <p className="text-gray-700">
          Bu bir card örneğidir. Tailwind CSS kullanılarak oluşturulmuştur.
        </p>
      </div>

      {/* Beğen Butonu */}
      <div className="px-4 pb-4 flex justify-between items-center">
        <button className="bg-blue-00 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
          Beğen
        </button>
        <span className="text-blue-700">12 Beğeni</span>
      </div>
    </div>
  );
};

export default Card;
