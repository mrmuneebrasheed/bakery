import React from "react";
class History extends React.Component {
  render() {
    return (
      <div>
        {this.props.history.length === 0 && (
          <div className="h3 my-2">No History</div>
        )}
        {this.props.history.length !== 0 && (
          <div>
            {this.props.history.map((list, index) => (
              <ul
                key={Math.random()}
                className="m-3 row border rounded border-dark "
              >
                <li className="h4 text-danger">List: {index + 1}</li>
                {list.map((item) => (
                  <li key={item.id} className="h5">
                    {item.quantity !== 0 &&
                      `${item.name.toLowerCase()} ${item.price}€ x ${
                        item.quantity
                      } = ${(item.price * item.quantity).toFixed(2)}€`}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        )}
      </div>
    );
  }
}
export default History;
