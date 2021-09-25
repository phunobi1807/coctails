import axios from "axios";
import React, { Component } from "react";
import "./ListCocktails.scss";
class componentName extends Component {
    state = {
        listCocktail: [],
        name: ""
    }
     async componentDidMount(){
        let res = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita");
        console.log("check data:", res.data.drinks)
        this.setState({
            listCocktail: res.data && res.data.drinks ? res.data.drinks : []
        })
    }
  render() {
      let {listCocktail} = this.state
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
