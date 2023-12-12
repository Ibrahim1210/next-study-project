"use client";
import Image from "next/image";


//destruction
const props={name:{firstName:"ibo"}}
const {name:{firstName:FIRST_NAME}}={name:{firstName:"ibo"}}
console.log(FIRST_NAME);
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

  return (
    <div className="bg-white rounded-md overflow-auto shadow-md w-2/5 ">
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
      <CardFavSection
        button_text={props.button_text}
        handleClick={props.handleClick}
        favcount={props.favcount}
      />
    </div>
  );
};

interface ICardFavSection {
  handleClick: () => string;
  button_text: string;
  favcount: number;
}

const CardFavSection = ({handleClick,button_text,favcount}: ICardFavSection) => {
  return (
    <div className="px-4 pb-4 flex justify-between items-center">
      <button
        onClick={handleClick}
        className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
      >
        {button_text}
      </button>
      <span className="text-blue-700">{favcount}</span>
    </div>
  );
};

export default Card;
