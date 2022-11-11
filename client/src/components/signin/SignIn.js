import "./styles.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/homepage`;
    navigate(path);
  };

  const onSubmit = () => {
    if (email === "email@example.com" && password === "password") {
      routeChange();
    } else {
      setShow(true);
      console.log(show);
    }
  };

  return (
    <div>
      <div class="signin">
        <div class="title">Sign In</div>
        <div class="inputs">
          <div>
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              name="email"
              placeholder="Email Address"
            />
          </div>
          <div>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              name="password"
              placeholder="Password"
            />
          </div>
        </div>
        <div>
          <button
            onClick={onSubmit}
            class="button button-elevated"
            type="button">
            Sign In
          </button>
        </div>
        {show ? (
          <div class="login-fail">
            <p id="message">Your email address or password is incorrect.</p>
          </div>
        ) : (
          ""
        )}
        <div class="create">
          <Link to="/signup" id="create">
            Create New Account
          </Link>
        </div>
      </div>
    </div>
  );
}
