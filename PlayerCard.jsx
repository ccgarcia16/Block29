import AllPlayers from "./AllPlayers"


const PlayerCard = ({player}) => {
  return (
    <>
    <div>
      <h3>{player.name}</h3>
      <p>{player.breed}</p>
      <img src={player.imageUrl}/>
    </div>
    </>
  )
}

export default PlayerCard;
