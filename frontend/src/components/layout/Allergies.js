import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllergens } from "../../reducers/allergies";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

// import {} from '../store'

class Allergies extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick(allergyId, event) {
    console.log(event);
    // this.props.modifyAllergies({
    //   id: allergyId,
    //   selected: event.target.checked,
    // });
  }

  handleSubmit() {
    // this.props.saveSkills(this.props.match.params.ownerId, this.props.skills)
    this.props.history.push("/recipes");
  }

  componentDidMount() {
    // this.props.loadSkills(this.props.match.params.ownerId)
    this.props.loadAllergens();
  }

  render() {
    const allergens = this.props.allergens;
    return (
      <div className="form-container">
        <h2>Please select all of your child's allergies</h2>
        <div className="allergy-checklist">
          <FormControl component="fieldset">
            <FormLabel className="skills-box-container" component="legend">
              <div style={{ fontSize: "1.35rem" }}>
                {this.props.displayName}
              </div>
            </FormLabel>
            <div className="allergies-list">
              {allergens.map((allergy) => (
                <FormControlLabel
                  key={allergy.id}
                  control={
                    <Checkbox
                      style={{
                        color: "#214042",
                        //  transform: "scale(1.3)"
                      }}
                      checked={allergy.selected}
                      onChange={(event) => this.handleClick(allergy.id, event)}
                      name={allergy.name}
                      size="large"
                    />
                  }
                  label={
                    <span style={{ fontSize: "1.3rem" }}>{allergy.name}</span>
                  }
                />
              ))}
            </div>

            <button
              type="button"
              onClick={this.handleSubmit}
              className="submit-form-btn"
              style={{ padding: "15px 80px" }}
            >
              SUBMIT
            </button>
          </FormControl>
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    allergens: state.allergens,
  };
};

// const mapCandidateStateToProps = (state) => {
//   return {
//     displayName: "Select your skills",
//     skills: state.selectedSkills,
//     user: state.user,
//   };
// };

const mapDispatch = (dispatch) => {
  return {
    loadAllergens: () => dispatch(fetchAllergens()),
  };
};

// const mapCandidateDispatchToProps = (dispatch) => {
//   return {
//     loadSkills: (candidateId) => dispatch(getCandidateSkills(candidateId)),
//     modifySkill: (skill) => dispatch(modifySkill(skill)),
//     saveSkills: (candidateId, candidateSkills) =>
//       dispatch(saveCandidateSkills(candidateId, candidateSkills)),
//   };
// };

export default connect(mapState, mapDispatch)(Allergies);
