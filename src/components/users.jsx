import React, { useState } from "react";
import api from "../api";

const Users = () => {
  const [data, setData] = useState(api.users.fetchAll());
  const count = data.length;
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

  const handleDelete = (id) => {
    setData(data.filter((item) => item._id !== id));
  };

  const renderUsers = () => {
    return (
      count !== 0 && (
        <span className={getBageClasses()}>{formatCountUser()}</span>
      )
    );
  };
  if (count == 0) {
    return <span className={getBageClasses()}>{formatCountUser()}</span>;
  }

  return (
    <>
      {renderUsers()}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качества</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился, раз</th>
            <th scope="col">Оценка</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item._id}>
                <td> {item.name} </td>
                <td>
                  {item.qualities.map((qual) => (
                    <span
                      key={qual._id}
                      className={`badge m-1 bg-${qual.color}`}
                    >
                      {qual.name}
                    </span>
                  ))}
                </td>
                <td>{item.profession.name}</td>
                <td>{item.completedMeetings}</td>
                <td>{item.rate}</td>
                <td>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Users;
