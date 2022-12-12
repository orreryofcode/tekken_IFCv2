import { useState } from "react";

import CharPortrait from "./CharPortrait";
import CharBio from "./CharBio";
import KeyMoves from "../components/KeyMoves";
import SandW from "../components/SandW";
import TopMoves from "../components/TopMoves";
import FrameDataTable from "../components/FrameDataTable";

function CharInfo({ frameData }) {
  const [dataToRender, setDataToRender] = useState("topMoves");
  const renderData = (e) => {
    e.preventDefault();
    setDataToRender(e.target.value);
  };

  return (
    <>
      <div className='charInfo__name--jpn'>
        <span>風間仁</span>
      </div>
      <div className='charInfo__container'>
        <div>
          <CharPortrait />
        </div>

        <div className='charInfo__details'>
          <div className='charInfo__name'>
            <h1>Jin Kazama</h1>
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
            <button
              className='charInfo__btns--btn'
              onClick={renderData}
              value='players'>
              Notable Players
            </button>
          </div>
          <CharBio />
        </div>
      </div>

      {dataToRender === "topMoves" && (
        <>
          <SandW /> <TopMoves /> <KeyMoves />
        </>
      )}

      {dataToRender === "frameData" && <FrameDataTable frameData={frameData} />}
    </>
  );
}

export default CharInfo;
