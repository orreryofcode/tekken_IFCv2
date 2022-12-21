function Combos({ videoData }) {
  return (
    <section className='combos__container'>
      <div className='combos__container--inner'>
        <iframe
          className='combos__video'
          width='100%'
          height='547'
          src={videoData[0].combos}
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen></iframe>
      </div>
    </section>
  );
}

export default Combos;
