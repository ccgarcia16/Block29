import { useEffect, useState } from "react";

const SearchBar = ({playerList}) => {
  const [searchParam,setSearchParam] = useState("");

  return (
    <>
      <label>
        Search:
        <input
          type="text"
          placeholder="search"
        />
      </label>
    </>
  )
}

export default SearchBar