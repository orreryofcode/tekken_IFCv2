import { useState } from "react";
import CharPortrait from "./CharPortrait";
import CharBio from "./CharBio";
import KeyMoves from "../components/KeyMoves";
import SandW from "../components/SandW";
import TopMoves from "../components/TopMoves";
import FrameDataTable from "../components/FrameDataTable";
import Combos from "./Combos";

function CharInfo({ frameData, charData }) {
  const [dataToRender, setDataToRender] = useState("topMoves");
  const renderData = (e) => {
    e.preventDefault();
    setDataToRender(e.target.value);
  };

  const charStyle = {
    backgroundImage: `linear-gradient(to bottom, ${charData[0].color}, transparent)`,
    backgroundClip: "text",
  };

  return (
    <>
      <div className='charInfo__name--jpn'>
        <span style={charStyle}>{charData[0].namejp}</span>
      </div>
      <div className='charInfo__container'>
        <div>
          <CharPortrait charImg={charData} />
        </div>

        <div className='charInfo__details'>
          <div className='charInfo__name'>
            <h2>{charData[0].name}</h2>
          </div>

          <div className='charInfo__btns'>
            <button
              className='charInfo__btns--btn'
              onClick={renderData}
              value='topMoves'>
              Top Moves
            </button>
            <button
              className='charInfo__btns--btn'
              onClick={renderData}
              value='frameData'>
              Frame Data
            </button>
            <button
              className='charInfo__btns--btn'
              onClick={renderData}
              value='combos'>
              Combos
            </button>
            {/* <button
              className='charInfo__btns--btn'
              onClick={renderData}
              value='players'>
              Notable Players
            </button> */}
          </div>
          <CharBio charDetails={charData} />
        </div>
      </div>

      {dataToRender === "topMoves" && (
        <>
          <SandW /> <TopMoves /> <KeyMoves />
        </>
      )}
      {dataToRender === "frameData" && <FrameDataTable frameData={frameData} />}
      {dataToRender === "combos" && <Combos videoData={charData} />}
    </>
  );
}

export default CharInfo;
