import React from "react";
class List extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <div className="h3 bg-white my-3 p-2 border rounded">Your Items</div>
          {this.props.list.length === 0 && <h5>Nothing to Show</h5>}
          {this.props.list.map((item) => (
            <li
              key={item.id}
              className="row h4 p-2 mt-2 border border-secondary"
            >
              <div className="text-white bg-secondary col-7">{item.name} </div>
              <div className="text-center text-white col-2 bg-primary p-1 border border-rounded">
                {item.price}€
              </div>
              <button
                id={item.id}
                onClick={this.props.onClick}
                className="col-3 btn btn-danger"
              >
                Remove Item
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default List;
