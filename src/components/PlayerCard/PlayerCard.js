import React from "react";
import "./style.css";

// PlayerCard renders an image
class PlayerCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };

  }

  handleClick = () => {
    if (this.state.clicked) {
      alert('you lost');
    }
    this.props.updateCount();
    this.setState({ clicked: true })
  }

  render() {
    return (
      <div className="card w-25 " onClick={this.handleClick}>
        <img className="card-img" alt={this.props.name} src={this.props.image} />
        <div><h2>{this.state.clicked ? "true" : "false"}</h2></div>
      </div>
    )
  }
}

export default PlayerCard;