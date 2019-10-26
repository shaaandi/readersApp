import React, { useState } from "react";
import { withRouter, Link } from "react-router-dom";

import { useMutation } from "@apollo/react-hooks";
import { signup } from "../../mutations/auth";
import { fetchCurrentUser } from "../../queries/auth";

function Signup({ history }) {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [badge] = useState("READER");

  let [mutateSignup, { data, loading, error }] = useMutation(signup);

  if (loading) {
    return (
      <div class="progress">
        <div class="indeterminate"></div>
      </div>
    );
  }

  if (data) {
    history.push("/");
  }

  let errors = [];

  if (error) {
    errors = error.graphQLErrors.map(error => {
      return error.message;
    });
  }
  return (
    <div className="container">
      <div id="signupFormWrapper" className="row valign-center">
        <div className="col s12 m12 l12" id="auth-form-header">
          <h5 className="center-align">Signup to your Account</h5>
        </div>
        <div className="col s12 m12 l12 auth-oauth-wrapper">
          {/* rendering all the Oauth options here */}
          <div className="row ">
            <div className="col s6 m6 l6">
              <a
                id="auth-oauth-google"
                className="waves-effect waves-light btn oauth-btn"
                href="/auth/google"
              >
                Signup with Google
              </a>
            </div>
            <div className="col s6 m6 l6 ">
              <a
                id="auth-oauth-facebook"
                className="waves-effect waves-light btn oauth-btn"
                href="/auth/facebook"
              >
                Signup with Facebook
              </a>
            </div>
          </div>
        </div>
        <div className="col s12 m12 l12">
          <h6 className="center-align">Or</h6>
        </div>
        <div id="auth-form" className="col s12 m12 l12">
          <div className="row">
            <form
              onSubmit={e => {
                e.preventDefault();
                mutateSignup({
                  variables: {
                    input: {
                      username,
                      password,
                      badge
                    }
                  },
                  refetchQueries: [{ query: fetchCurrentUser }],
                  awaitRefetchQueries: true
                });
                setUsername("");
                setPassword("");
              }}
              className="col s12"
            >
              <div class="row">
                <div class="input-field col s12">
                  <input
                    onChange={e => setUsername(e.target.value)}
                    id="email"
                    type="text"
                    class="validate"
                    value={username}
                  />
                  <label for="email">Username</label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <input
                    onChange={e => setPassword(e.target.value)}
                    id="password"
                    type="password"
                    class="validate"
                    value={password}
                  />
                  <label for="password">Password</label>
                </div>
              </div>
              <div className="errors row">
                {errors.map(error => (
                  <div key={error} className="authErrors col s12 m12 l12">
                    {error}
                  </div>
                ))}
              </div>
              <button
                id="auth-form-submit"
                className="col s12 m12 l12 waves-effect waves-light btn"
              >
                Signup
              </button>
            </form>
            <div id="auth-form-link" className="col s12 m12 l12 center-align">
              <Link to="/auth/login">Already have a account ? Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Signup);
