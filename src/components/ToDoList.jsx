import React, { Component } from "react";
import { TodoItem } from "./ToDoItem";

export class TodoList extends Component {
  state = {
    toDos: [
      {
        id: "14",
        title: "Сделать утреннюю зарядку",
        completed: true,
      },
      {
        id: "16",
        title: "Купить продукты",
        completed: false,
      },
      {
        id: "18",
        title: "Сделать домашнее задание",
        completed: false,
      },
      {
        id: "19",
        title: "Сходить в кино",
        completed: true,
      },
      {
        id: "20",
        title: "Позвонить другу",
        completed: false,
      },
    ],
  };

  constructor() {
    super();
    this.onDeleteButton = this.onDeleteButton.bind(this);
  }

  onDeleteButton = (id) => {
    this.setState({
      toDos: this.state.toDos.filter((item) => item.id !== id),
    });
  };

  render() {

    return (
      <>
        {this.state.toDos.map((toDo) =>
          <TodoItem key={toDo.id} info={toDo} but={this.onDeleteButton} />
        )}
      </>);

  }

}
