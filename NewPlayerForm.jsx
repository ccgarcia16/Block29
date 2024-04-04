import { useState } from "react";

const NewPlayerForm = ({baseUrl}) => {
  const [name,setName] = useState("");
  const [breed,setBreed] = useState("");
  const [imageUrl,setImageUrl] = useState("");

  const newPlayer = async () => {
    try {
      const response = await fetch(`${baseUrl}/players`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          name,
          breed,
          imageUrl
        })
      });
      const result = await response.json();
      setName("")
      setBreed("")
      setImageUrl("")
    } catch (error) {
      console.log(error);
    }
  }

  const mySubmit = (event) => {
    event.preventDefault();
    newPlayer();
  }

  return (
    <>
      <h3>Add a New Player!</h3>
      {
        <form onSubmit={mySubmit}>
          <label>
            Player Name:
            <input type="text" id="name" value={name} onChange={(e)=>setName(e.target.value)}></input>
          </label>
          <br></br><br></br>
          <label>
            Player Breed:
            <input type="text" id="breed" value={breed} onChange={(e)=>setBreed(e.target.value)}></input>
          </label>
          <br></br><br></br>
          <label>
            Player Image URL:
            <input type="text" id="imageurl" value={imageUrl} onChange={(e)=>setImageUrl(e.target.value)}></input>
          </label>
          <br></br><br></br>
          <button>Submit</button>
        </form>
      }
    </>
  )
}

export default NewPlayerForm