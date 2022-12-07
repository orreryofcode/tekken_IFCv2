import jpn from "../assets/Flag_of_Japan.svg.png";

function CharBio() {
  return (
    <div className='charInfo__bio-wrapper'>
      <div className='charInfo__bio'>
        <h4>Bio:</h4>
        <p className='charInfo__bio-details'>
          Jin Kazama is the son of Jun Kazama and Kazuya Mishima. During Jun's
          pregnancy, part of Kazuya's Devil, (which fled Kazuya when he was
          thrown into a volcano by his father) attempted to possess Jin, who
          inherited his father's Devil Gene. Jun managed to fight Devil off and
          hold it at bay throughout her pregnancy and Jin's childhood. Jun
          raised Jin in a remote location in the mountains of Yakushima, and
          trained him in the Kazama family's self-defense fighting style.
        </p>
      </div>

      <div className='charInfo__demographics'>
        <p>
          {" "}
          <span>Age:</span> 21
        </p>
        <p>
          {" "}
          <span>Nationality:</span>{" "}
          <span>
            <img src={jpn} alt='Japan' className='charInfo__natl' />
          </span>
        </p>
        <p>
          {" "}
          <span>Fighting Style:</span> Mishima/Kazama Karate
        </p>
      </div>
    </div>
  );
}

export default CharBio;
