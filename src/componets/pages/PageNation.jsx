import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import _ from "lodash";

export default function PageNation() {
  let pages = 0;
  const [userData, setState] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    loadUser(1);
  }, []);
  const loadUser = async (page) => {
    const res = await axios.get("https://reqres.in/api/users?page=" + page);
    setState(res.data.data);
    pages = userData.total_pages;
  };
  const pagination = (pageNo) => {
    setCurrentPage(pageNo);
    loadUser(pageNo);
  };
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-12 m-auto">
          {!userData ? (
            "No data found"
          ) : (
            <table className="table table-bordered shadow">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Avatar</th>
                </tr>
              </thead>
              <tbody>
                {userData.map((post, i) => (
                  <tr key={post.id}>
                    <td> {i + 1} </td>
                    <td> {post.first_name} </td>
                    <td> {post.last_name} </td>
                    <td> {post.email} </td>
                    <td>
                      <img
                        src={post.avatar}
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%",
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          <nav>
            <ul className="d-flex justify-content-center pagination">
              {[...Array(2)].map((x, i) => (
                <li
                  key={i + 1}
                  className={
                    i + 1 == currentPage ? "page-item active" : "page-item"
                  }
                >
                  <p className="page-link" onClick={() => pagination(i + 1)}>
                    {i + 1}
                  </p>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
