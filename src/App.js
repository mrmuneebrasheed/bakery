import React from "react";
import Button from "./components/Button";
import Add from "./components/Add";
import List from "./components/List";
import Pay from "./components/Pay";
import "bootstrap/dist/css/bootstrap.min.css";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activeTab: "Add",
      items: [],
    };
  }
  isSelected(value) {
    if (this.state.activeTab.toLowerCase() === value.toLowerCase()) {
      return true;
    } else return false;
  }
  selectActive(e) {
    this.setState({ activeTab: e.target.innerText });
  }
  addItem(productName, productPrice) {
    const items = [
      ...this.state.items,
      { name: productName, price: productPrice, id: Math.random() },
    ];
    this.setState({
      items: items,
      activeTab: "List",
    });
  }
  deleteItem(e) {
    let items = this.state.items;
    items = items.filter((item) => item.id !== +e.target.id);
    this.setState({ items: items });
  }
  render() {
    return (
      <div className="container bg-light p-5 my-5 col-4 border border-secondary">
        <div className="h1 p-3 text-dark border rounded text-center bg-info">
          Bakery
        </div>
        <Button
          isSelected={this.isSelected.bind(this)}
          onClick={this.selectActive.bind(this)}
        >
          Add
        </Button>
        <Button
          isSelected={this.isSelected.bind(this)}
          onClick={this.selectActive.bind(this)}
        >
          List
        </Button>
        <Button
          isSelected={this.isSelected.bind(this)}
          onClick={this.selectActive.bind(this)}
        >
          Pay
        </Button>
        {this.state.activeTab === "Add" && (
          <Add list={this.state.items} onAdd={this.addItem.bind(this)}></Add>
        )}
        {this.state.activeTab === "List" && (
          <List
            onClick={this.deleteItem.bind(this)}
            list={this.state.items}
          ></List>
        )}
        {this.state.activeTab === "Pay" && <Pay></Pay>}
      </div>
    );
  }
}
export default App;
