import React, { Component } from "react";
import { ToDoItem } from "./ToDoItem";

export class ToDoList extends Component {
  state = {
    ToDos: [
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
    this.DeleteButton = this.DeleteButton.bind(this);
  }

  DeleteButton = (id) => {
    this.setState({
      ToDos: this.state.ToDos.filter((item) => item.id !== id),
    });
  };

  render() {
    return <ToDoItem info={this.state.ToDos} but={this.DeleteButton} />;
  }
}
