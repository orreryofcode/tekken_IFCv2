import { Link } from "react-router-dom";
import {
  jin,
  bryan,
  king,
  nina,
  ak,
  akuma,
  alisa,
  anna,
  asuka,
  bob,
  chloe,
  claudio,
  dragunov,
  dvj,
  eddy,
  eliza,
  fahkumram,
  feng,
  ganryu,
  geese,
  gigas,
  heihachi,
  hwoarang,
  jack,
  josie,
  julia,
  katarina,
  kazumi,
  kazuya,
  kuma,
  kunimitsu,
  lars,
  law,
  lee,
  lei,
  leo,
  leroy,
  lidia,
  lili,
  marduk,
  miguel,
  negan,
  noctis,
  paul,
  raven,
  shaheen,
  steve,
  xiaoyu,
  yoshimitsu,
  zafina,
} from "../assets/character_portraits/images";

function CharacterSelect() {
  const characters = [
    { name: "Jin", ref: "jin", img: jin },
    { name: "Bryan", ref: "bryan", img: bryan },
    { name: "King", ref: "king", img: king },
    { name: "Nina", ref: "nina", img: nina },
    { name: "Armor King", ref: "ak", img: ak },
    { name: "Akuma", ref: "akuma", img: akuma },
    { name: "Alisa", ref: "Alisa", img: alisa },
    { name: "Anna", ref: "anna", img: anna },
    { name: "Asuka", ref: "asuka", img: asuka },
    { name: "Bob", ref: "bob", img: bob },
    { name: "Lucky Chloe", ref: "chloe", img: chloe },
    { name: "Claudio", ref: "claudio", img: claudio },
    { name: "Dragunov", ref: "dragunov", img: dragunov },
    { name: "Eliza", ref: "eliza", img: eliza },
    { name: "Fahkumram", ref: "fahkumram", img: fahkumram },
    { name: "Eddy", ref: "eddy", img: eddy },
    { name: "Devil Jin", ref: "dvj", img: dvj },
    { name: "Feng", ref: "feng", img: feng },
    { name: "Ganryu", ref: "ganryu", img: ganryu },
    { name: "Geese", ref: "geese", img: geese },
    { name: "Gigas", ref: "gigas", img: gigas },
    { name: "Heihachi", ref: "heihachi", img: heihachi },
    { name: "Hwoarang", ref: "hwoarang", img: hwoarang },
    { name: "Jack-7", ref: "jack", img: jack },
    { name: "Josie", ref: "josie", img: josie },
    { name: "Julia", ref: "julia", img: julia },
    { name: "Katarina", ref: "katarina", img: katarina },
    { name: "Kazumi", ref: "kazumi", img: kazumi },
    { name: "Kazuya", ref: "kazuya", img: kazuya },
    { name: "Kuma", ref: "kuma", img: kuma },
    { name: "Kunimitsu", ref: "kunimitsu", img: kunimitsu },
    { name: "Lars", ref: "lars", img: lars },
    { name: "Law", ref: "law", img: law },
    { name: "Lee", ref: "lee", img: lee },
    { name: "Lei", ref: "lei", img: lei },
    { name: "Leo", ref: "leo", img: leo },
    { name: "Leroy", ref: "leroy", img: leroy },
    { name: "Lidia", ref: "lidia", img: lidia },
    { name: "Lili", ref: "lili", img: lili },
    { name: "Marduk", ref: "marduk", img: marduk },
    { name: "Miguel", ref: "miguel", img: miguel },
    { name: "Negan", ref: "negan", img: negan },
    { name: "Noctis", ref: "noctis", img: noctis },
    { name: "Paul", ref: "paul", img: paul },
    { name: "Raven", ref: "raven", img: raven },
    { name: "Shaheen", ref: "shaheen", img: shaheen },
    { name: "Steve", ref: "steve", img: steve },
    { name: "Xiaoyu", ref: "xiaoyu", img: xiaoyu },
    { name: "Yoshimitsu", ref: "yoshimitsu", img: yoshimitsu },
    { name: "Zafina", ref: "zafina", img: zafina },
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
