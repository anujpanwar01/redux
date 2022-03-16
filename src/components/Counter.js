// import { Component } from "react";
// import { connect } from "react-redux"; //for class component

///////////////////////////////////////
import { useSelector, useDispatch } from "react-redux"; //for the functional components
import classes from "./Counter.module.css";
import { counterActions } from "./store/counterSlice";
const Counter = () => {
  //useDispatch give us the function baxk
  const dispatch = useDispatch();
  //take the data or state outside from the redux
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const increment = () => {
    dispatch(counterActions.increment());
  };
  const increase = () => {
    dispatch(counterActions.increase(5));
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show ? <div className={classes.value}>{counter}</div> : null}
      <div>
        <button onClick={increment}>increment</button>
        <button onClick={increase}>increment by 5</button>
        <button onClick={decrement}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

///////////////////////////////////////////////////////////////////////
/*
class Counters extends Component {
  /* increment(){
  this.props.increment();
  }
  we use the bind method to set to this
  ex-: <button onClick={increment.bind(this)}>increment</button>


  increment = () => {
    this.props.increment();
  };
  decrement = () => {
    this.props.decrement();
  };
  toggleCounterHandler() {}
  render() {
    const { increment, decrement, toggleCounterHandler } = this;
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={increment}>increment</button>
          <button onClick={decrement}>decrement</button>
        </div>
        <button onClick={toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}
//get data from the
const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "increment" }),
    decrement: () => dispatch({ type: "decrement" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counters);
*/

export default Counter;
