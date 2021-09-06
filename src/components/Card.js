import React from "react";
class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      image: "",
    };
  }
  componentDidMount() {
    fetch(
      `https://raw.githubusercontent.com/konexio/digitous-assest/main/bakery/${this.props.productName}.png`
    )
      .then((result) => result.blob())
      .then((result) => {
        const image = URL.createObjectURL(result);
        this.setState({ image: image });
      });
  }
  sendData() {
    this.props.onClick(this.props.productName, this.props.price);
  }
  render() {
    return (
      <button
        onClick={this.sendData.bind(this)}
        style={{ margin: "10px", width: "40%" }}
      >
        <img
          style={{
            objectFit: "contain",
            width: "100%",
            height: "20vh",
          }}
          width="100%"
          alt={this.props.productName}
          src={this.state.image}
        ></img>
      </button>
    );
  }
}
export default Card;
