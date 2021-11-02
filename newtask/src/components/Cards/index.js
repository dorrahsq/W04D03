import React from "react";
import { useHistory } from "react-router-dom";
// import { Card } from "../card";
import './style.css';

const Cards = () => {
  let history = useHistory();
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

  const goInside = (id) => {
    console.log(id);
    history.push(`/card/${id}`);
  };

  return (
    <div className="allcards">
      {newarray.map((item, i) => {
        return (
          <div
            onClick={() => {
              goInside(item.id);
            }}
          >
            {/* {item.id} */}
           <h3>  {item.name} </h3>
            <img src={item.img} alt="city" />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
