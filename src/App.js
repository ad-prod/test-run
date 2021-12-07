import React, { Fragment, useState, useEffect } from "react";
import { Provider } from "react-redux";
import { ReduxRouter } from "redux-router";
import createStore from "./redux/createStore.dev";

// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import People from "./components/People";
// import Planets from "./components/Planets";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Container } from "@material-ui/core";
import "./App.css";

function App() {
  // const [people, setPeople] = useState([]);
  // const [planets, setPlanets] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   async function fetchPeople() {
  //     let res = await fetch("https://swapi.dev/api/people/");
  //     let data = await res.json();
  //     setPeople(data.results);
  //   }

  //   async function fetchPlanets() {
  //     let res = await fetch("https://swapi.dev/api/planets/");
  //     let data = await res.json();
  //     setPlanets(data.results);
  //   }

  //   fetchPeople();
  //   fetchPlanets();
  // }, []);

  const store = createStore();

  return (
    <Provider store={store}>
      <div>
        <ReduxRouter />
      </div>
    </Provider>
  );
}

export default App;
