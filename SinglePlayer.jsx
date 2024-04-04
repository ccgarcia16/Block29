import AllPlayers from "./AllPlayers";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/2402-FTB-ET-WEB-FT/players/`;

const SinglePlayer = ({baseUrl}) => {
  const [player,setPlayer] = useState({})
  const {playerId} = useParams();
  const navigate = useNavigate();

  const fetchSinglePlayer = async () => {
    const response = await fetch(`${baseUrl}/players${playerId}`);
    const result = await response.json();
    setPlayer(result.data);
  }
console.log(player);
useEffect(()=>{
  fetchSinglePlayer()
},[playerId])

return (
  <>
    <h3>{player.name}</h3>
    <p>{player.breed}</p>
    <p>{player.id}</p>
  </>
)

}

export default SinglePlayer