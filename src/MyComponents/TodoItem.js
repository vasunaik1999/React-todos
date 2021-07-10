import React from "react";

export const TodoItem = ({ todo, onDelete }) => {
  return (
    <>
      <div>
        <h5>{todo.title}</h5>
        <p>{todo.desc}</p>
        <button className="btn btn-sm btn-danger" onClick={() => { onDelete(todo) }}>Delete</button>
      </div>
      <hr />
    </>
  );
};
