import React from "react";

class Add extends React.Component {
  constructor() {
    super();
    this.state = { productName: "", price: 1 };
  }

  updateProductName(event) {
    this.setState({ productName: event.target.value });
  }
  updatePrice(event) {
    this.setState({ price: event.target.value });
  }
  handleAddItem() {
    this.props.onAdd(this.state.productName, this.state.price);
  }
  render() {
    return (
      <>
        <div className="h3 bg-light my-3 p-2">Add Item</div>
        <div>
          <input
            className="col-10 p-2"
            onChange={this.updateProductName.bind(this)}
            placeholder="Item Name"
            type="text"
          ></input>
          <button
            onClick={this.handleAddItem.bind(this)}
            className="btn-primary col-2 p-2"
          >
            Add
          </button>
        </div>
        <div>
          <p className="h4 pt-2">{this.state.price} €</p>
          <input
            value={this.state.price}
            className="col-12 mt-4"
            onChange={this.updatePrice.bind(this)}
            type="range"
            min={1}
            max={10}
            step={0.1}
          ></input>
        </div>
      </>
    );
  }
}
export default Add;
