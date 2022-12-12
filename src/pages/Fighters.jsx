import { useState, useEffect, useReducer } from "react";
import CharInfo from "../components/CharInfo";

function Fighters() {
  const [frameData, setFrameData] = useState(null);

  const fetchFrames = async () => {
    const response = await fetch("../data/jin.json");
    const data = await response.json();

    setFrameData(data);
  };

  useEffect(() => {
    fetchFrames();
  }, []);

  return (
    <div>
      <CharInfo frameData={frameData} />
    </div>
  );
}

export default Fighters;
