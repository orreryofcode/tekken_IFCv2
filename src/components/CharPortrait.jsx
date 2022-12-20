function CharPortrait({ charImg }) {
  return (
    <div
      className='charInfo__portrait'
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, .4), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5) ), url(${charImg})`,
      }}></div>
  );
}

export default CharPortrait;
