import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CharInfo from "../components/CharInfo";

function Fighter() {
  const [frameData, setFrameData] = useState([]);
  const [charData, setCharData] = useState([]);

  const { id } = useParams();

  const fetchFrames = async () => {
    const response = await fetch(`../data/framedata/${id}.json`);
    const data = await response.json();
    setFrameData(data);
  };

  const fetchChar = async () => {
    const response = await fetch(`../data/characterdata/${id}.json`);
    const data = await response.json();
    setCharData(data);
  };

  useEffect(() => {
    fetchFrames();
    fetchChar();
  }, []);

  return (
    <div className='charInfo__wrapper'>
      {!!frameData && !!charData.length ? (
        <CharInfo frameData={frameData} charData={charData} />
      ) : (
        <>
          <h1>Hello</h1>
        </>
      )}
    </div>
  );
}

export default Fighter;
