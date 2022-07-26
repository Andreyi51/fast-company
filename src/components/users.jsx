import React, { useState } from "react";
import api from "../api";

const Users = () => {
  const [count, setCounter] = useState(12);

  const [data, setData] = useState(api.users.fetchAll());

  console.log(api.users.fetchAll());

  const formatCountUser = () => {
    return count === 0
      ? "Никто с тобой не тусанет"
      : `${count} человек тусанет с тобой сегодня`;
  };

  const getBageClasses = () => {
    let classes = "badge m-2 ";
    classes += count === 0 ? "bg-danger" : "bg-primary";
    return classes;
  };

  const handleDelete = () => {
    setCounter((prevState) => prevState - 1);
    console.log(count);
  };

  return (
    <>
      <span className={getBageClasses()}>{formatCountUser()}</span>
      <button className=" btn btn-primary btn-sm m-2" onClick={handleDelete}>
        Delete
      </button>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {data.map((data) => (
              <td>{data}</td>
            ))}
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Users;
