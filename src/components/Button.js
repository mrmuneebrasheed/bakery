import React from "react";
class Button extends React.Component {
  render() {
    const isSelected = this.props.isSelected(this.props.children);
    return (
      <button
        onClick={this.props.onClick}
        className={`${isSelected ? "btn btn-primary" : ""}`}
      >
        {this.props.children}
      </button>
    );
  }
}
export default Button;
