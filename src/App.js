import React from "react";
import Button from "./components/Button";
import Add from "./components/Add";
import List from "./components/List";
import Pay from "./components/Pay";
import History from "./components/History";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activeTab: "Add",
      items: [],
      history: [],
    };
  }
  isSelected(e) {
    if (this.state.activeTab.toLowerCase() === e.toLowerCase()) {
      return true;
    } else return false;
  }
  selectActive(e) {
    this.setState({ activeTab: e.target.innerText });
  }
  addItem(productName, productPrice) {
    if (productName.trim() === "") return;
    let items = this.state.items;
    const isExisting = items.find((item) => item.name === productName);
    if (isExisting) {
      items.map((item) => {
        if (item.name === productName) return "";
        return "";
      });
    }
    if (!isExisting) {
      items.push({
        name: productName,
        price: productPrice,
        quantity: 0,
        id: Math.random(),
      });
    }
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
  saveHistory(basket) {
    const history = this.state.history;
    this.setState({ history: history.push(basket) });
  }
  render() {
    return (
      <div className="container bg-light p-5 my-5 col-4 border border-secondary">
        <div className="title h1 p-3 text-white border rounded text-center bg-info">
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
        <Button
          isSelected={this.isSelected.bind(this)}
          onClick={this.selectActive.bind(this)}
        >
          History
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
        {this.state.activeTab === "Pay" && (
          <Pay
            saveHistory={this.saveHistory.bind(this)}
            list={this.state.items}
          ></Pay>
        )}
        {this.state.activeTab === "History" && (
          <History history={this.state.history}></History>
        )}
      </div>
    );
  }
}
export default App;
