import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/250";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <div>
      <img
        className="food-img"
        src="https://upload.wikimedia.org/wikipedia/commons/3/31/Made20bacon.png"
        alt="bacon"
      />
      <img
        className="food-img"
        src="https://www.pizzarepublic.co.nz/images/900/550/banner-home-mob-pizza?h=7f9227ff"
        alt="pizza"
      />
      <img
        className="food-img"
        src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/spaghetti-puttanesca_1-1ce4e81.jpg?quality=90&resize=768,574"
        alt="pasta"
      />
      <br />
      <img src={img + "?grayscale"} />
    </div>
  </div>,
  document.getElementById("root")
);
