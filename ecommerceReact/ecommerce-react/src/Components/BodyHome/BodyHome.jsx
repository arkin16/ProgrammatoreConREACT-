import React from "react";
import CardProd from "../CardProd/CardProd";
import "./style.css";

export default function BodyHome() {
  const tmp = [1, 2, 3, 4, 5];
  const width = "25%";

  return (
    <>
      <div className="container-body">
        <div className="cardBody-container">
          <CardProd tmp={tmp} width={width} />
        </div>
      </div>
    </>
  );
}
