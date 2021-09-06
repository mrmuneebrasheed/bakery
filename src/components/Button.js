import React from "react";
class Button extends React.Component {
  render() {
    const isSelected = this.props.isSelected(this.props.children);
    return (
      <button
        onClick={this.props.onClick}
        className={`btn btn-outline-primary py-1 px-3 m-1 ${
          isSelected ? "btn-primary text-light" : ""
        } `}
      >
        {this.props.children}
      </button>
    );
  }
}
export default Button;
