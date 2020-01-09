import React, { useState, useCallback } from "react";
import "./autocomplete.css";
import { css } from "emotion";

const style = {
  autocomplete: css({
    position: "relative"
  }),
  optionsContainer: toggle =>
    css({
      backgroundColor: "#123456",
      position: "absolute",
      display: toggle ? "flex" : "none",
      left: 0,
      width: "100%",
      flexDirection: "column",
      border: "1px solid #808080"
    }),
  option: css({
    cursor: "pointer",
    textAlign: "left",
    padding: 5,
    width: "100%",
    "&:hover": {
      backgroundColor: "#777"
    }
  })
};

export default function Autocomplete({
  label = "Name",
  options = ["a", "b", "c"]
}) {
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState(null);
  const onFocus = useCallback(() => {
    setToggle(true);
  }, []);
  const onBlur = useCallback(() => {
    setTimeout(setToggle, 200, false);
  }, []);
  const onChange = useCallback(e => setValue(e.target.value), []);
  const onSelected = useCallback(e => {
    setValue(e.target.textContent);
  }, []);

  return (
    <div className="group">
      <input
        className="text"
        required
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
        value={value}
      />
      <span className="highlight" />
      <span className="bar" />
      <label>{label}</label>
      <div className={style.autocomplete}>
        <div className={style.optionsContainer(toggle)}>
          {options.map(option => (
            <div className={style.option} onClick={onSelected}>
              {option}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
