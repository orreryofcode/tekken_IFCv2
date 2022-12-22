function CharBio({ charDetails }) {
  return (
    <div className='charInfo__bio-wrapper'>
      <div className='charInfo__bio'>
        <h3>Biography:</h3>
        <p className='charInfo__bio-details'>{charDetails[0].bio}</p>
      </div>

      <section className='charInfo__demographics'>
        <p>
          {" "}
          <span>Age:</span> {charDetails[0].age}
        </p>
        <p>
          {" "}
          <span>Nationality:</span>{" "}
          <span>
            <img
              src={charDetails[0].natl}
              alt={charDetails[0].natlalt}
              className='charInfo__natl'
              width='20'
              height='15'
            />
          </span>
        </p>
        <p>
          {" "}
          <span>Fighting Style:</span> {charDetails[0].style}
        </p>
      </section>
    </div>
  );
}

export default CharBio;
