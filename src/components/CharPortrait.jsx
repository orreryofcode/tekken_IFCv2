function CharPortrait({ charImg }) {
  const portraitStyle = {
    backgroundImage: `url(${charImg[0].img})`,
    backgroundColor: `${charImg[0].bgcolor}`,
  };

  return <div className='charInfo__portrait' style={portraitStyle}></div>;
}

export default CharPortrait;
