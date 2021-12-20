import React, { useState } from "react";
import { toast } from "react-toastify";
import "./index.scss";
import { Button, Input } from "../";
import { useDispatch } from "react-redux";
import { searchPlanet } from "../../state/planetsReducer/actions";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Search = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [search, setSearch] = useState("");

  const handleSearch = async () => {
    if (search === "") return toast.error("Search with empty value");
    const request = `https://swapi.dev/api/planets/?search=${search}`;
    const { data, error } = await axios.get(request);
    if (error) console.log(error);
    if (data.results.length === 0) toast.error("Search without results");
    if (data) dispatch(searchPlanet(data.results));
    setSearch("");
  };

  const handleKeyPress = (event) => {
    const { charCode, type } = event;
    const enterPressed = type === "keypress" && charCode === 13;
    if (enterPressed) handleSearch();
  };

  if (pathname !== "/") return null;
  return (
    <div className="search">
      <Input
        value={search}
        onKeyPress={handleKeyPress}
        onChange={(e) => setSearch(e.target.value)}
        name="search"
      />
      <Button onClick={handleSearch} name={"Search"} />
    </div>
  );
};

export default Search;
