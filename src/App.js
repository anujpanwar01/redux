import Counter from "./components/Counter";
import { Fragment } from "react";
import { useSelector } from "react-redux"; //
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";

// import { authActions } from "./components/Auth";
function App() {
  const user = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Fragment>
      <Header />
      {!user ? <Auth /> : <UserProfile />} <Counter />
    </Fragment>
  );
}

export default App;
