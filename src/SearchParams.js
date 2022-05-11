import { useState, useEffect, useContext } from 'react';
import Results from "./Results";
import ThemeContext from './ThemeContext';
import useBreedList from './useBreedList';

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, setLocation] = useState("");
  const [animal, setAnimals] = useState("");
  const [breed, setBreed] = useState("");
  const [breeds] = useBreedList(animal);
  const [theme, setTheme] = useContext(ThemeContext);

  const [pets, setPets] = useState([]);

  useEffect(() => {
    requestPets();
  }, []);

  async function requestPets() {
    const res = await fetch (
      `https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();

    setPets(json.pets);
  }

  return (
    <div className="search-params">
      <form
        onSubmit={e => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target .value)}
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimals(e.target.value);
              setBreed("");
            }}
            onBlur={(e) => {
              setAnimals(e.target.value);
              setBreed("");
            }}
          >
            <option />
            {ANIMALS.map((a) => (
                <option key={a} value={a}>
                  {a}
                </option>
              )
            )}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={breed}
            onChange={(e) => {
              setBreed(e.target.value);
            }}
            onBlur={(e) => {
              setBreed(e.target.value);
            }}
          >
            <option />
            {breeds.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              )
            )}
          </select>
        </label>
        <label htmlFor='theme'>
          Theme
          <select
            value={theme}
            onChange={e => setTheme(e.target.value)}
            onBlur={e => setTheme(e.target.value)}
          >
            <option value="peru">Peru</option>
            <option value="chartreuse">Chartreuse</option>
            <option value="blanchedalmond">Blanched Almond</option>
            <option value="firebrick">Firebrick</option>
          </select>
        </label>
        <button style={{ backgroundColor: theme }}>Submit</button>
      </form>
      <Results pets={pets}/>
    </div>
  );
};

export default SearchParams;
