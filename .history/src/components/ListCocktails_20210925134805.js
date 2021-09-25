import axios from "axios";
import React, { Component } from "react";
import "./ListCocktails.scss";
class componentName extends Component {
  state = {
    listCocktail: [],
    name: "",
    loading: false,
  };

  handleOnChange = (e) => {
      this.setState({
          name: e.target.value
      })
  }

  handleSubmit = (e) =>{
      e.preventDefault();
      this.fetchingCoctail();
  }

  async fetchingCoctail(){
      this.setState({loading: true})
    let res = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.state.name}`
    );
    console.log("check data:", res.data.drinks);
    this.setState({
      listCocktail: res.data && res.data.drinks ? res.data.drinks : [],
      loading: false
    });
  }

  async componentDidMount() {
    this.fetchingCoctail();
  }

  render() {
    let { listCocktail, loading } = this.state;
    return (
      <>
        <div className="input">        
            <input type="text" onChange={(e)=>this.handleOnChange(e)} />
            <button onClick={(e)=>this.handleSubmit(e)}>SearchCoctails </button>
        </div>
        <div className="container">
          {!loading ? (
            listCocktail.map((item, index) => {
              return (
                <>
                  <div className="product-cocktail" key={item.id}>
                    <img src={item.strDrinkThumb} alt="" />
                    <p>
                      <span>Name cocktail: {item.strDrink}</span>
                    </p>
                    <p>
                      <span>Use: {item.strInstructions}</span>{" "}
                    </p>
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
