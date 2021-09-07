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
  componentDidMount() {
    const basket = this.props.list;
    this.setState({ basket: basket });
  }
  handleSelect(name) {
    const basket = this.state.basket;
    basket.map((item) => {
      if (item.name === name) {
        item.quantity++;
      }
      return "";
    });
    let total = 0,
      totalEcoTax = +this.state.totalEcoTax;
    totalEcoTax += 0.03;
    this.state.basket.map((item) => {
      total += +item.price * item.quantity;
      return "";
    });
    const totalTVA = (total / 100) * 20;
    const totalTTA = total + totalTVA + totalEcoTax;
    this.setState({
      basket: basket,
      total: total.toFixed(2),
      totalEcoTax: totalEcoTax.toFixed(2),
      totalTVA: totalTVA.toFixed(2),
      totalTTA: totalTTA.toFixed(2),
    });
  }
  clearBasket() {
    const basket = [...this.state.basket];
    basket.map((item) => (item.quantity = 0));

    this.setState({
      basket: basket,
      total: 0,
      totalTVA: 0,
      totalEcoTax: 0,
      totalTTA: 0,
    });
  }
  handleSave() {
    console.log(this.state.basket);
    this.props.saveHistory(this.state.basket);
  }
  render() {
    return (
      <>
        <div className="h2">Pay</div>
        <ul>
          {this.state.basket !== [] &&
            this.state.basket.map(
              (item) =>
                item.quantity !== 0 && (
                  <li key={item.id} className="h6">
                    {item.quantity !== 0 &&
                      `${item.name.toLowerCase()} ${item.price}€ x ${
                        item.quantity
                      } = ${(item.price * item.quantity).toFixed(2)}€`}
                  </li>
                )
            )}
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
              key={item.id}
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
