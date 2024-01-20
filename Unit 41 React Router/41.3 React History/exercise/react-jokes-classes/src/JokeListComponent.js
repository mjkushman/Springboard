import React, { useState, useEffect } from "react";
import axios from "axios";

import JokeComponent from "./JokeComponent";
import "./JokeList.css";

/** List of jokes. */

const JokeListComponent = ({ numJokesToGet = 5 }) => {
  // declare state of jokes and isLoading
  const [jokes, setJokes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // console.log('isLoading',isLoading);



  /* at mount, get jokes if there are none */

useEffect(function() {
    // define function to retrieve jokes
    async function getJokes() {
      let seenJokes = new Set();
      let j = [...jokes] // creating a temporary array to collect jokes. When this reaches numJokesToGet, while loop will exit
      try {
        // load jokes one at a time, adding not-yet-seen jokes
        while (j.length < numJokesToGet) {
          // console.log("j length", j.length);
          
          /* retrieve jokes from API */
          let res = await axios.get("https://icanhazdadjoke.com", {
            headers: { Accept: "application/json" },
          });
          let { ...jokeRes } = res.data;
          // console.log('jokeRes',jokeRes); // the retrieved joke
          // check if we've seen this joke already
          if (!seenJokes.has(jokeRes.id)) {
            seenJokes.add(jokeRes.id);
            j.push({ ...jokeRes, votes: 0 }); // add this joke to the temporary jokes array j
          } else {
            // if this is a duplicate, state as much and don't add it to jokes
            console.log("duplicate found!");
          }
        }
        setJokes(j);
        setIsLoading(false); // change isLoading to false
      } catch (err) {
        console.error(err);
      }
    }
    if(jokes.length === 0) {getJokes()}
}, [jokes,numJokesToGet]) // dependancies for rerendering

  /* function to change vote for this id by delta (+1 or -1) */

  const vote = (id, delta) => {
    setJokes((jokes) =>
      jokes.map((j) => (j.id === id ? { ...j, votes: j.votes + delta } : j))
    );
  };
  
    /* empty joke list to trigger getJokes; set loading state true */

    function generateNewJokes() {
      setJokes([]);
      setIsLoading(true);
    }

  
  
  /* render: either loading spinner or list of sorted jokes. */

  let sortedJokes = [...jokes].sort((a, b) => b.votes - a.votes);

  const loadingSpinner = (
    <div className="loading">
      <i className="fas fa-4x fa-spinner fa-spin" />
    </div>
  );

  return isLoading ? (
    loadingSpinner
  ) : (
    <div className="JokeList">
      <button className="JokeList-getmore" onClick={generateNewJokes}>
        Get New Jokes
      </button>

      {sortedJokes.map((j) => (
        <JokeComponent
          text={j.joke}
          key={j.id}
          id={j.id}
          votes={j.votes}
          vote={vote}
        />
      ))}
    </div>
  );
};

export default JokeListComponent;
