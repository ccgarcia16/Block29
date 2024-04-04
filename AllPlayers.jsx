import { useState } from "react"
import PlayerCard from "./PlayerCard";
import { useEffect } from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import SinglePlayer from "./SinglePlayer";
import { useParams, useNavigate } from "react-router-dom";

const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/2402-FTB-ET-WEB-FT/players/`;

const AllPlayers = () => {
  const [playerList,setPlayerList] = useState([]);

  useEffect(() => {
    const retrievePlayers = async () => {
      try {
        const response = await fetch(API_URL)
        const result = await response.json();
        console.log(result.data.players)
        setPlayerList(result.data.players);
        console.log(playerList)
      } catch (error) {
        console.error(error);
      }
    };
    retrievePlayers();
  },[]);
  return (
    <>
      <h2>Puppybowl Players!</h2>
      {playerList.map((player) => {
        return <Link to={`/${player.id}`}>
          <PlayerCard key={player.id} player={player}/>
          </Link>;
      })
    }
    </>
  )
}

export default AllPlayers;