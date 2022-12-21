function CharPortrait({ charImg }) {
  return (
    <div
      className='charInfo__portrait'
      style={{
        backgroundImage: `url(${charImg})`,
      }}></div>
  );
}

export default CharPortrait;
