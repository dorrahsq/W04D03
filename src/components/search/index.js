import React, { useState } from "react";
import { useHistory } from "react-router-dom";
const Search = () => {
  let history = useHistory();
  const [Search, setSearch] = useState("");
  const newarray = [
    {
      id: 1,
      name: "pink",
      img: "https://i.pinimg.com/564x/d1/a7/67/d1a767238ec823ea952981e388edc145.jpg",
      infav: false,
    },
    {
      id: 2,
      name: "White",
      img: "https://i.pinimg.com/564x/44/80/f9/4480f9098dbd3734bb5f70dcbc0a3d15.jpg",
      infav: false,
    },
    {
      id: 3,
      name: "Sky blue",
      img: " https://i.pinimg.com/564x/52/fb/2d/52fb2d0bbdf4c0d7652baccc7d0bb3bf.jpg",
      infav: false,
    },
  ];

  //   const vall =(e)=>{
  //     setSearch(e.target.value)
  //   }

  const goInside = (id) => {
    console.log(id);
    history.push(`/card/${id}`);
  };
  //hereee
  return (
    <div>
      <div>
        <input
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          type="text"
          placeholder="search for your fav color"
        />
      </div>

      <div className="allcards">
        {newarray
          .filter((item) => {
            if (Search == "") {
              return item;
            } else if (
              item.name.toLocaleLowerCase().includes(Search.toLocaleLowerCase)
            ) {
              console.log(item);
              return item;
            }
          })
          .map((item, i) => {
            return (
              <div>
                <div
                  onClick={() => {
                    goInside(item.id);
                  }}
                >
                  <h3> {item.name} </h3>
                  <img src={item.img} alt="city" />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Search;
