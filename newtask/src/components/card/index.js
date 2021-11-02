import React from "react";
import { useParams } from "react-router-dom";
import './style.css';

const Card = () => {
  const id = useParams().id;
  const newarray= [
    {
      id: 1,
      name: "pink",
      img: "https://i.pinimg.com/564x/d1/a7/67/d1a767238ec823ea952981e388edc145.jpg",
    },
    {
      id: 2,
      name: "White",
      img: "https://i.pinimg.com/564x/44/80/f9/4480f9098dbd3734bb5f70dcbc0a3d15.jpg",
    },
    {
      id: 3,
      name: "Sky blue",
      img: " https://i.pinimg.com/564x/52/fb/2d/52fb2d0bbdf4c0d7652baccc7d0bb3bf.jpg",
    },

   
  ];

  const item = newarray.find((element) => element.id == id);
  {
    console.log(item.name);
  }

  return (
    <div className="oneitem">
      {item.name}
      <img src={item.img} alt="city" />
    </div>
  );
};

export default Card;
