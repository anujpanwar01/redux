import classes from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "./store/authSlice";

const Header = () => {
  const user = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(authActions.logOut());
  };
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          <li>
            <a href="/">My Products</a>
          </li>
          <li>
            <a href="/">My Sales</a>
          </li>
          <li>
            <button onClick={logOut}>{!user ? "sign in" : "sign Out"}</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
