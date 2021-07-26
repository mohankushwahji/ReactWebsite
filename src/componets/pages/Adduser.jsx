import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";

export default function Adduser() {
  let history = useHistory();
  const [state, setState] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });
  const handlerInput = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  // post Api call
  const handlerSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3001/post", state);
    history.push("/allusers");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 m-auto">
          <form method="post" onSubmit={handlerSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                onChange={handlerInput}
              />
            </div>

            <div className="form-group">
              <label>User Name</label>
              <input
                type="text"
                name="username"
                className="form-control"
                onChange={handlerInput}
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                name="email"
                className="form-control"
                onChange={handlerInput}
              />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input
                type="text"
                name="phone"
                className="form-control"
                onChange={handlerInput}
              />
            </div>

            <input type="submit" className="btn btn-primary" value="Add User" />
          </form>
        </div>
      </div>
    </div>
  );
}
