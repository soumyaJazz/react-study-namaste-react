import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    console.log("constructor called");
    super(props);
    this.state = {
      name: "Loading",
      age: "Loading",
    };
  }

  //   api call is done here
  componentDidMount() {
    console.log("componentDidMount called");
    setTimeout(() => {
      this.setState({
        name: "Soumya k",
        age: "30",
      });
    }, 1000);
  }
  render() {
    console.log("render called");
    const { name, age } = this.state;
    return (
      <div>
        <p>Team Member:{name}</p>
        <p>Location:{age}</p>
      </div>
    );
  }

  componentDidUpdate() {
    console.log("componentDidUpdate called");
  }
}

export default UserClass;
