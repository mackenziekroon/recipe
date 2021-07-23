import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { postCustomer } from "../../reducers/customer";
import { fetchAllergens } from "../../reducers/allergies";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Allergies from "./Allergies";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      childFirstName: "",
      childLastName: "",
      allergies: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.loadAllergens();
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleCheck(allergy, event) {
    this.setState((state) => ({
      allergies: this.state.allergies.includes(allergy)
        ? state.allergies.filter((c) => c !== allergy)
        : [...state.allergies, allergy],
    }));
  }

  async handleSubmit(event) {
    event.preventDefault();
    const customerData = {
      firstname: this.state.firstName,
      lastname: this.state.lastName,
      email: this.state.email,
      childfirstname: this.state.childFirstName,
      childlastname: this.state.childLastName,
      allergens: this.state.allergies,
    };

    this.props.addNewCustomer(customerData);
    console.log(customerData);
    this.props.history.push("/recipes");
  }

  render() {
    // const customerId = this.props.customer || " ";
    // console.log("customer", customerId);
    const allergens = this.props.allergens;
    const allergyArray = allergens.map((allergy) => allergy.name) || [];
    // console.log(allergyArray);
    const {
      firstName,
      lastName,
      email,
      childFirstName,
      childLastName,
    } = this.state;

    return (
      <div className="form-container">
        <h2>Please fill out your details</h2>
        <form className="form" onSubmit={this.handleSubmit}>
          <div>
            <div className="form-label"> First Name</div>
            <input
              type="text"
              name="firstName"
              onChange={this.handleChange}
              value={firstName}
              required
            />
          </div>
          <div>
            <div className="form-label"> Last Name</div>
            <input
              type="text"
              name="lastName"
              onChange={this.handleChange}
              value={lastName}
              required
            />
          </div>
          <div>
            <div className="form-label"> Email</div>
            <input
              type="text"
              name="email"
              onChange={this.handleChange}
              value={email}
              required
            />
          </div>
          <div>
            <div className="form-label"> Child's First Name</div>
            <input
              type="text"
              name="childFirstName"
              onChange={this.handleChange}
              value={childFirstName}
              required
            />
          </div>
          <div>
            <div className="form-label"> Child's Last Name</div>
            <input
              type="text"
              name="childLastName"
              onChange={this.handleChange}
              value={childLastName}
              required
            />
          </div>
          {/* <div> */}
          {/* <div> */}
          <h2 className="allergy-header">
            Please select all of your child's allergies
          </h2>
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
                        checked={this.state.allergies.includes(allergy.name)}
                        onChange={(event) =>
                          this.handleCheck(allergy.name, event)
                        }
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
            </FormControl>
          </div>
          {/* </div> */}
          {/* </div> */}

          <button className="submit-form-btn">Submit</button>
        </form>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    customer: state.customer,
    allergens: state.allergens,
  };
};

const mapDispatch = (dispatch) => {
  return {
    addNewCustomer: (customer) => dispatch(postCustomer(customer)),
    loadAllergens: () => dispatch(fetchAllergens()),
  };
};

export default connect(mapState, mapDispatch)(Form);
