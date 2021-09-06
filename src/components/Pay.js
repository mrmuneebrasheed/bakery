import React from "react";
import Card from "./Card";
class Pay extends React.Component {
  constructor() {
    super();
    this.state = {
      basket: [],
      total: 0,
      totalTVA: 0,
      totalEcoTax: 0,
      totalTTA: 0,
    };
  }
  handleSelect(name, price) {
    const basket = this.state.basket;
    basket.push({ name: name, price: price, quantity: 1 });
    let total = 0,
      totalEcoTax = 0;
    this.state.basket.map((item) => {
      total += +item.price;
      totalEcoTax += 0.03;
      return "";
    });
    const totalTVA = (total / 100) * 20;
    const totalTTA = total + totalTVA + totalEcoTax;
    this.setState({
      basket: basket,
      total: total,
      totalEcoTax: totalEcoTax.toFixed(2),
      totalTVA: totalTVA.toFixed(2),
      totalTTA: totalTTA.toFixed(2),
    });
  }
  clearBasket() {
    this.setState({
      basket: [],
      total: 0,
      totalTVA: 0,
      totalEcoTax: 0,
      totalTTA: 0,
    });
  }
  handleSave() {
    this.props.saveHistory(this.state.basket);
  }
  render() {
    return (
      <>
        <div className="h2">Pay</div>
        <ul>
          {this.state.basket !== [] &&
            this.state.basket.map((item) => (
              <li className="h6">
                {item.name} x {item.quantity}
              </li>
            ))}
        </ul>
        <div>
          <p className="h5 text-end">Total: {this.state.total}</p>
          <p className="h5 text-end">TotalTVA: {this.state.totalTVA}</p>
          <p className="h5 text-end">TotalEcoTax: {this.state.totalEcoTax}</p>
          <p className="h5 text-end">TotalTTA: {this.state.totalTTA}</p>
        </div>
        <div className="d-flex justify-content-evenly flex-wrap">
          {this.props.list.map((item) => (
            <Card
              key={Math.random()}
              productName={item.name}
              price={item.price}
              onClick={this.handleSelect.bind(this)}
            ></Card>
          ))}
        </div>
        {this.props.list.length === 0 && <h5>No Items are available</h5>}
        <button
          onClick={this.clearBasket.bind(this)}
          className="btn btn-danger"
        >
          Clear
        </button>
        <button
          onClick={this.handleSave.bind(this)}
          className="btn btn-primary mx-2"
        >
          Save
        </button>
      </>
    );
  }
}
export default Pay;
