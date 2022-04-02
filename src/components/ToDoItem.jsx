import React, { Component } from "react";

export class ToDoItem extends Component {
  constructor(props) {
    super(props);
    this.color = this.color.bind(this);
  }

  color = (change) => {
    let ToDoClass;
    if (change) {
      ToDoClass = "complete";
    } else {
      ToDoClass = "inProgress";
    }

    return ToDoClass;
  };

  render() {
    const info = this.props.info;
    const DelateBut = this.props.but;

    return (
      <>
        <div className="content">
          <ul>
            {info.map((el) => (
              <div key={el.id}>
                <li className={this.color(el.completed)}>{el.title}</li>
                <button onClick={() => DelateBut(el.id)}>DONE</button>
              </div>
            ))}
          </ul>
        </div>
      </>
    );
  }
}
