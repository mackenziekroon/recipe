import React from "react";

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
    // await this.props.newCandidate({...this.state}, this.props.organization.id)
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      childFirstName: "",
      childLastName: "",
      allergies: [],
    });
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
      <div>
        <h1>Please fill out your details</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            First Name
            <input
              type="text"
              name="firstName"
              onChange={this.handleChange}
              value={firstName}
              required
            />
          </div>
          <div>
            Last Name
            <input
              type="text"
              name="lastName"
              onChange={this.handleChange}
              value={lastName}
              required
            />
          </div>
          <div>
            Email
            <input
              type="text"
              name="email"
              onChange={this.handleChange}
              value={email}
              required
            />
          </div>
          <div>
            Child's First Name
            <input
              type="text"
              name="childFirstName"
              onChange={this.handleChange}
              value={childFirstName}
              required
            />
          </div>
          <div>
            Child's Last Name
            <input
              type="text"
              name="childLastName"
              onChange={this.handleChange}
              value={childLastName}
              required
            />
          </div>
          <div>Allergies -> check list</div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;