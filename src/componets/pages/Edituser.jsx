import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

export default function Edituser() {
  let history = useHistory();
  let { id } = useParams();
  const [state, setState] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
  });
  // use of hook
  useEffect(() => {
    loadUser();
  }, []);
  const handlerInput = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const { name, username, email, phone } = state;
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3001/post/${id}`);
    setState(res.data);
  };

  // put Api
  const handlerSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3001/post/${id}`, state);
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
                value={name}
                className="form-control"
                onChange={(e) => handlerInput(e)}
              />
            </div>

            <div className="form-group">
              <label>User Name</label>
              <input
                type="text"
                name="username"
                value={username}
                className="form-control"
                onChange={(e) => handlerInput(e)}
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                name="email"
                value={email}
                className="form-control"
                onChange={(e) => handlerInput(e)}
              />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input
                type="text"
                name="phone"
                value={phone}
                className="form-control"
                onChange={(e) => handlerInput(e)}
              />
            </div>

            <input
              type="submit"
              className="btn btn-primary"
              value="Edit User"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
