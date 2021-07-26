import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [state, setState] = useState([]);
  useEffect(() => {
    loadUser();
  }, []);
  // save to localStorage
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state));
  }, [state]);

  // get Api
  const loadUser = async () => {
    const res = await axios.get("http://localhost:3001/post");
    setState(res.data);
  };

  // Delete user
  const handlerDelete = async (id) => {
    await axios.delete(`http://localhost:3001/post/${id}`);
    loadUser();
  };
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-12">
          <table className="table table-border shadow">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Name</th>
                <th>User Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Ation</th>
              </tr>
            </thead>
            <tbody>
              {state.map((pot, i) => (
                <tr key={pot.id}>
                  <td>{i + 1}</td>
                  <td>{pot.name}</td>
                  <td>{pot.username} </td>
                  <td>{pot.email}</td>
                  <td>{pot.phone}</td>
                  <td>
                    <Link
                      className="btn btn-primary"
                      to={`/edituser/${pot.id}`}
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-danger ml-2"
                      onClick={() => handlerDelete(pot.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
