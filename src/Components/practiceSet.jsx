import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const PracticeSet = (props) => {
  const history = useHistory();
  const words = (props.location && props.location.state) || [];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index >= words.length) {
      props.setCurrentIndex(0);
      history.push({
        pathname: `/`
      });
    }
  }, [index]);

  useEffect(() => {
    setIndex(props.currentIndex);
  }, [props.currentIndex]);
  return (
    <div className="word-container">
      {console.log(props.currentIndex)}
      <h1 className="word">{words[index]}</h1>
    </div>
  );
};
export default PracticeSet;
