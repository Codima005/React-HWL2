import React, { Component } from "react";

export class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.color = this.color.bind(this);
  }

  color = (change) => {
    let toDoClass;
    if (change) {
      toDoClass = "complete";
    } else {
      toDoClass = "inProgress";
    }

    return toDoClass;
  };

  render() {
    const { id, title, completed } = this.props.info;
    const onDelateBut = this.props.but;

    return (

      <div className="content">
        <ul>


          <li className={this.color(completed)}>{title}</li>
          <button onClick={() => onDelateBut(id)}>DONE</button>


        </ul>
      </div>
    );
  }
}