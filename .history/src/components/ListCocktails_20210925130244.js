import axios from "axios";
import React, { Component } from "react";
import "./ListCocktails.scss";
import axios from "axios";

class componentName extends Component {
    componentDidMount(){
        let res = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita");
    }
  render() {
    return (
      <>
        <div className="container">
          <div className="product-cocktail">
            <img
              src=""
              alt=""
            />
            <p>magita</p>
            <p>Đây là cocktail mới nhât</p>
            <p>cách dùng: pha với nước</p>
          </div>
        </div>
      </>
    );
  }
}

export default componentName;
