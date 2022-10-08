import React, { Component } from "react";
import "./cardList.css";
import Card from "../card/card";
export default class cardList extends Component {
  render() {
    const { monsters, anyThing } = this.props;
    return (
      <div className="card-list" style={{ padding: 30 }}>
        {monsters.map((monster) => {
          return <Card monster={monster} />;
        })}
      </div>
    );
  }
}
// https://robohash.org/2?set=set2&size=180x180
