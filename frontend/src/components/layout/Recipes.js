import React from "react";
import { connect } from "react-redux";
import { fetchRecipes } from "../../reducers/recipes";

class Recipes extends React.Component {
  componentDidMount() {
    this.props.loadRecipes();
  }

  render() {
    const recipes = this.props.recipes;

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
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadRecipes: () => dispatch(fetchRecipes()),
  };
};

export default connect(mapState, mapDispatch)(Recipes);
