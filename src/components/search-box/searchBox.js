import React, { Component } from "react";
import "./searchBox.css";
export default class searchBox extends Component {
  render() {
    return (
      <div>
        <input
          className={`search-box ${this.props.className}`}
          type={this.props.type}
          placeholder={this.props.placeholder}
          onChange={this.props.onChangeHandler}
        />
      </div>
    );
  }
}
