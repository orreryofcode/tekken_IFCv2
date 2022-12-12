import CharacterSelect from "../components/CharacterSelect";

function Home() {
  return (
    <div className='home__container'>
      <div className='home__heading'>
        <h1>Welcome to the Iron Fist Companion</h1>
      </div>

      <CharacterSelect />
    </div>
  );
}

export default Home;
