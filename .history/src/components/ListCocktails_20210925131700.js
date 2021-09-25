import axios from "axios";
import React, { Component } from "react";
import "./ListCocktails.scss";
class componentName extends Component {
  state = {
    listCocktail: [],
    name: "",
    loading: false,
  };
  async componentDidMount() {
    let res = await axios.get(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita"
    );
    console.log("check data:", res.data.drinks);
    this.setState({
      listCocktail: res.data && res.data.drinks ? res.data.drinks : [],
    });
  }
  render() {
    let { listCocktail, loading } = this.state;
    return (
      <>
        <div className="container">
          <div className="product-cocktail">
            {!loading ? (
              listCocktail.map((item, index) => {
                return (
                  <>
                    <div key={item.id}>
                      <img src="" alt="" />
                      <p>Tên cocktail: {item.strDrink}</p>
                      <p>Cách dùng: {item.strInstructions}</p>
                      <p>cách dùng: pha với nước</p>
                    </div>
                  </>
                );
              })
            ) : (
              <div>Loading...</div>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default componentName;
