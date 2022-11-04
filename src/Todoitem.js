import React from "react";

const TodoiTitem = (props) => {
  const { items, delet } = props;
  let length = items.length;

  const ListItems = length ? (
    items.map((item) => {
      return (
        <div className="item" key={item.id}>
          <span>{item.name}</span>
          <button onClick={() => delet(item.id)}> Delete </button>
        </div>
      );
    })
  ) : (
    <p>lets create new list</p>
  );

  return <div className="container_list">{ListItems}</div>;
};
export default TodoiTitem;
