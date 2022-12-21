function CharPortrait({ charImg }) {
  return (
    <div
      className='charInfo__portrait'
      style={{
        backgroundImage: `url(${charImg[0].img})`,
      }}></div>
  );
}

export default CharPortrait;
