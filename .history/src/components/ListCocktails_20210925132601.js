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
          
            {!loading ? (
              listCocktail.map((item, index) => {
                return (
                  <>
                   <div className="product-cocktail" key={item.id}>
                      <img src={item.strDrinkThumb} alt="" />
                      <p><span>Name cocktail:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</span></p>
                      <p><span>Use:</span> </p>
                    </div>
                  </>
                );
              })
            ) : (
              <div>Loading...</div>
            )}
        </div>
      </>
    );
  }
}

export default componentName;
