import { Link } from "react-router-dom";
import { jin, bryan, king, nina } from "../assets/character_portraits/images";

function CharacterSelect() {
  const characters = [
    { name: "Jin", ref: "jin", img: jin },
    { name: "Bryan", ref: "bryan", img: bryan },
    { name: "King", ref: "king", img: king },
    { name: "Nina", ref: "nina", img: nina },
  ];

  return (
    <div className='characterSelect__container'>
      <div className='characterSelect__heading'>
        <h2>Select Your Character</h2>
      </div>

      <div className='characterSelect__list'>
        {characters.map((char, index) => (
          <Link to={`/fighters/${char.ref}`} key={index}>
            <div
              className='charInfo__portrait--select'
              style={{
                backgroundImage: `url(${char.img})`,
              }}>
              <span>{char.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CharacterSelect;
