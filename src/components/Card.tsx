"use client";
import Image from "next/image";

import React from "react";
//image url
// card basligi
// paragraph
// buttonText
// handle button click
// favcoun

interface ICard {
  image_url: string;
  card_title: string;
  paragraph: string;
  button_text: string;
  handleClick: () => string;
  favcount: number;
}

const Card = (props: ICard) => {
  console.log(props);

  return (
    <div className="bg-white rounded-md overflow-auto shadow-md w-64 mr-20">
      {/* Resim */}
      <div className="relative h-72">
        <Image
          src={props.image_url}
          alt="Card Image"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Başlık */}
      <div className="p-4">
        <h2 className="text-xl font-bold">{props.card_title}</h2>
      </div>

      {/* Açıklama */}
      <div className="px-4 pb-2">
        <p className="text-gray-700">{props.paragraph}</p>
      </div>

      {/* Beğen Butonu */}
      <div className="px-4 pb-4 flex justify-between items-center">
        <button
          onClick={props.handleClick}
          className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
        >
          {props.button_text}
        </button>
        <span className="text-blue-700">{props.favcount}</span>
      </div>
    </div>
  );
};

export default Card;
