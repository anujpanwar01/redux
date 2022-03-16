import classes from "./Auth.module.css";
import { useDispatch } from "react-redux";
import { authActions } from "./store/authSlice";
import { useState } from "react";

const Auth = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    setState(() => {
      return {
        ...state,
        [name]: value,
      };
    });
  };

  const dispatch = useDispatch();
  const logIn = () => {
    return state.email && state.password ? dispatch(authActions.logIn()) : null;
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={state.email}
              onChange={inputChangeHandler}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={state.password}
              onChange={inputChangeHandler}
            />
          </div>
          <button onClick={logIn}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
