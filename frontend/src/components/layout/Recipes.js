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
      <div>
        <h1>All Recipes</h1>
        {recipes.map((recipe) => (
          <h5 key={recipe.id}>{recipe.name}</h5>
        ))}
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
