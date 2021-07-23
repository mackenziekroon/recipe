// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { fetchAllergens } from "../../reducers/allergies";

// // import {} from '../store'

// class Allergies extends Component {
//   constructor(props) {
//     super(props);
//     this.handleClick = this.handleClick.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//     // this.props.modifyAllergies({
//     //   id: allergyId,
//     //   selected: event.target.checked,
//     // });

//   handleSubmit() {
//     // this.props.saveSkills(this.props.match.params.ownerId, this.props.skills)
//     this.props.history.push("/recipes");
//   }

//   componentDidMount() {
//     // this.props.loadSkills(this.props.match.params.ownerId)
//     this.props.loadAllergens();
//   }

//   render() {

//     return (

//     );
//   }
// }

// const mapState = (state) => {
//   return {
//     allergens: state.allergens,
//   };
// };

// // const mapCandidateStateToProps = (state) => {
// //   return {
// //     displayName: "Select your skills",
// //     skills: state.selectedSkills,
// //     user: state.user,
// //   };
// // };

// const mapDispatch = (dispatch) => {
//   return {
//     loadAllergens: () => dispatch(fetchAllergens()),
//   };
// };

// // const mapCandidateDispatchToProps = (dispatch) => {
// //   return {
// //     loadSkills: (candidateId) => dispatch(getCandidateSkills(candidateId)),
// //     modifySkill: (skill) => dispatch(modifySkill(skill)),
// //     saveSkills: (candidateId, candidateSkills) =>
// //       dispatch(saveCandidateSkills(candidateId, candidateSkills)),
// //   };
// // };

// export default connect(mapState, mapDispatch)(Allergies);
