import CharPortrait from "./CharPortrait";
import CharBio from "./CharBio";

function CharInfo() {
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
            <button className='charInfo__btns--btn'>Top Moves</button>
            <button className='charInfo__btns--btn'>Frame Data</button>
            <button className='charInfo__btns--btn'>Combos</button>
            <button className='charInfo__btns--btn'>Notable Players</button>
          </div>
          <CharBio />
        </div>
      </div>
    </>
  );
}

export default CharInfo;
