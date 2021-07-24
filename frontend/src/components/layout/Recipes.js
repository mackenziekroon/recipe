import React from "react";
import { connect } from "react-redux";
import { fetchRecipes } from "../../reducers/recipes";
import allergens from "../../reducers/allergies";

class Recipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allergies: [],
    };
  }
  componentDidMount() {
    this.props.loadRecipes();
  }

  render() {
    const allergens = this.props.allergens || [];
    const recipes = this.props.recipes;
    console.log(allergens);

    // function filter(recipes, allergens) {
    //   let filtered = [];
    //   for (let i = 0; i < recipes.length; i++) {
    //     if (recipes[i].allergens.length === 0) {
    //       filtered.push(recipes[i]);
    //     } else {
    //       if (recipes[i].allergens.length === 1) {
    //         if (!allergens.includes(recipes[i].allergens[0])) {
    //           filtered.push(recipes[i]);
    //         }
    //       } else {
    //         for (let j = 0; j < recipes[i].allergens.length; j++) {
    //           let allergy = {};
    //           allergy[recipes[i].allergens[j]] = false;
    //           for (let g = 0; g < input.length; g++) {
    //             if (!allergy.hasOwnProperty(recipes[i].allergens[j])) {
    //               console.log("here", recipes[i]);
    //               filtered.push(recipes[i]);
    //             }
    //           }
    //         }
    //       }
    //     }
    //   }
    //   return filtered;
    // }
    // let filteredRecipes = filter(recipes, allergens);
    // console.log(filteredRecipes);

    return (
      <div className="recipe-container">
        <h1 className="recipe-heading">Your Recipes</h1>
        <div className="recipe-list">
          {recipes.map((recipe) => (
            <h4 key={recipe.id}>{recipe.name}</h4>
          ))}
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    recipes: state.recipes,
    allergens: state.customer,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadRecipes: () => dispatch(fetchRecipes()),
  };
};

export default connect(mapState, mapDispatch)(Recipes);
