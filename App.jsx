import './App.css'
import AllPlayers from './AllPlayers'
import PlayerCard from './PlayerCard'
import NewPlayerForm from './NewPlayerForm'
import {Route,Routes} from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import SinglePlayer from './SinglePlayer';

const COHORT_NAME = `2402-FTB-ET-WEB-FT`;
const BASE_API = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT_NAME}`;

function App() {

  return (
    <>
      <Routes>
        <Route path="/:id" element={<SinglePlayer baseUrl={BASE_API}/>}/>
      </Routes>
        <NewPlayerForm baseUrl={BASE_API}/>
        <AllPlayers/>
    </>
  )
}

export default App
