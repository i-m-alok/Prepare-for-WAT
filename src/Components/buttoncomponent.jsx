import React from "react";
import { useHistory } from "react-router-dom";
import Data from "../asset/data";

export default function ButtonComponent() {
  const history = useHistory();
  const handleClick = (value, words) => {
    console.log(words);
    history.push({
      pathname: `/set${value}`,
      state: words
    });
  };

  return (
    <div className="practice">
      {Data.map((item, index) => (
        <button
          key={index}
          type="button"
          className="set-btn"
          onClick={() => handleClick(item.id, item.words)}
        >
          Practice Set {item.id}
        </button>
      ))}
    </div>
  );
}
