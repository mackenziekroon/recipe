import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { postCustomer } from "../../reducers/customer";
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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const customerData = {
      firstname: this.state.firstName,
      lastname: this.state.lastName,
      email: this.state.email,
      childfirstname: this.state.childFirstName,
      childlastname: this.state.childLastName,
    };

    this.props.addNewCustomer(customerData);
    console.log("after", customerData);
    // await this.props.history.push("/allergies");
  }

  render() {
    const {
      firstName,
      lastName,
      email,
      childFirstName,
      childLastName,
    } = this.state;
    return (
      <div className="form-container">
        <h3>Please fill out your details</h3>
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

          <button className="submit-form-btn">Next</button>

          <a href="allergies">
            <div>ButtonHERE</div>
          </a>
        </form>
        <Allergies />
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    customer: state.customer,
  };
};

const mapDispatch = (dispatch) => {
  return {
    addNewCustomer: (customer) => dispatch(postCustomer(customer)),
  };
};

export default connect(mapState, mapDispatch)(Form);
