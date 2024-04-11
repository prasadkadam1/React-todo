import React, { Fragment } from "react";

const Todolist = ({ items, handleDelete, handleUpdate }) => {
  console.log(items);
  return (
    <div className="todoMain">
      <h2 className="courses">coures</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Coure</th>
            <th>Trainer</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {items.length > 0 &&
            items.map(({ id, course, trainer }) => {
              return (
                <Fragment key={id}>
                  <tr key={id}>
                    <td>{id.slice(0, 4)}</td>
                    <td>{course}</td>
                    <td>{trainer}</td>
                    <td className="buttonsComp">
                      <button
                        onClick={() => {
                          handleUpdate(id);
                        }}
                      >
                        update
                      </button>
                      <button
                        onClick={() => {
                          handleDelete(id);
                        }}
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                </Fragment>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Todolist;
