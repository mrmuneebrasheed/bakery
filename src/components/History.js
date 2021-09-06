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
              <ul className="m-3 row border rounded border-dark ">
                <li className="h4 text-danger">List: {index + 1}</li>
                {list.map((item) => (
                  <li className="h5">
                    {item.name} {item.price}€
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
