import React from "react";
import "./styles.css";
import { css } from "emotion";
import Autocomplete from "./components/autocomplete";

const styles = {
  background: css({
    backgroundColor: "purple",
    width: 100,
    height: 100
  })
};

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Autocomplete />
      <div className={styles.background} />
    </div>
  );
}
