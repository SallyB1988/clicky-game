import React from "react";
import "./style.css";

// PlayerCard renders an image
class PlayerCard extends React.Component {
  state = {
    clicked: false
  };

  handleClick = () => {
    console.log(`${this.props.name} was clicked.`);
    this.props.updateCount();
    this.setState({ clicked: true })
  }

  render() {
    return (
      <div className="card w-25 wrapper" onClick={this.handleClick}>
        <img className="card-img" alt={this.props.name} src={this.props.image} />
      </div>
    )
  }
}

export default PlayerCard;