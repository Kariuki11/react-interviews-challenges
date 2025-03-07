import { useState, useEffect } from 'react';
import axios from 'axios';

const JokeFetcher = () => {
  const [joke, setJoke] = useState('');
  const [fetchJoke, setFetchJoke] = useState(false);

  const fetchJokeHandler = () => {
    setFetchJoke(!fetchJoke);
  };

  useEffect(() => {
    const getJoke = async () => {
      try {
        const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
        setJoke(`${response.data.setup} - ${response.data.punchline}`);
      } catch (error) {
        setJoke('Failed to fetch joke 😢');
      }
    };

    if (fetchJoke) {
      getJoke();
    }
  }, [fetchJoke]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 text-center">
      <h1 className="text-3xl font-bold mb-6">Random Joke Generator 😂</h1>
      <button
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-500 transition duration-300"
        onClick={fetchJokeHandler}
      >
        Get Joke
      </button>
      {joke && <p className="mt-6 text-xl text-gray-800">{joke}</p>}
    </div>
  );
};

export default JokeFetcher;
