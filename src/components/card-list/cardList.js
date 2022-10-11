import React, { Component } from "react";
import "./cardList.css";
import Card from "../card/card";
const cardList = (props) => {
  const { monsters, anyThing } = props;
  <div className="card-list" style={{ padding: 30 }}>
    {monsters.map((monster) => {
      return <Card key={monster.id} monster={monster} />;
    })}
  </div>;
};
export default cardList;
// https://robohash.org/2?set=set2&size=180x180
