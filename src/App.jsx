import React, { useState } from "react";
import "./index.css";
import Forms from "./components/forms/Forms";
import Todolist from "./components/Todo/Todolist";
import { v1 as uuid } from "uuid";
import { Toaster } from "react-hot-toast";


const App = () => {
  let [state, setState] = useState({
    items: [],
    id: uuid(),
    trainer: "",
    course: "",
  });

  let handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    try {
      let newItem = {
        id: state.id,
        course: state.course,
        trainer: state.trainer,
      };

      let updatedItem = [...state.items, newItem];
      console.log(updatedItem);
      setState({
        items: updatedItem,
        id: uuid(),
        course: "",
        trainer: "",
      });
      console.log(state);
    } catch (error) {
      console.log(error);
    }
  };

  let handleDelete = (id) => {
    let filteredItem = state.items.filter((item) => item.id !== id);
    setState({ ...state, items: filteredItem });
  };

  let handleUpdate = (id) => {
    let editContent = state.items.filter((item) => item.id !== id);
    let selectedItem = state.items.find((item) => item.id === id);
    console.log(selectedItem);
    setState({
      items: editContent,
      course: selectedItem.course,
      trainer: selectedItem.trainer,
      id: id,
    });
  };
  let { items, id, course, trainer } = state;
  return (
    <div>
      <h1>Todo App</h1>
      <section id="mainBlock">
        <article>
          <Toaster />
          <main className="appMain">
            <Forms
              id={id}
              course={course}
              trainer={trainer}
              items={items}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
            <Todolist
              items={items}
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
            />
          </main>
        </article>
      </section>
    </div>
  );
};

export default App;
