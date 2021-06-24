import React from "react";
import { withRouter } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function randomColor() {
  return "#" + Math.floor(Math.random() * 0xffffff).toString(16);
}

const Login = withRouter(({ history }) => (
  <div className="container">
    <UserContext.Consumer>
      {({ login }) => (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            login(
              e.target.elements.emailValue.value,
              e.target.elements.colorValue.value
            );
            history.push("/chat");
          }}
          className="m-4"
        >
          <div>
            <label className="form-label">Color text</label>
            <input
              type="hidden"
              className="form-control"
              name="colorValue"
              value={randomColor()}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              name="emailValue"
              id="name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" id="password" />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn button">
              Submit
            </button>
          </div>
        </form>
      )}
    </UserContext.Consumer>
  </div>
));

export default Login;
