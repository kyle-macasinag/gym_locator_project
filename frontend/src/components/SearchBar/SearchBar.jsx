import {React, useState} from 'react';
import axios from 'axios';

var mySearch = ""

console.log("MY SEARCH", mySearch)

const SearchBar = () => {
  const [title, setTitle] = useState('');

const handleSubmit = (e) => {
  e.preventDefault();
  var search = { title };
  console.log("SEARCH:", search)
  mySearch = search
  return(search)
}

  return (
    <div className="create">
      <form onSubmit={handleSubmit}>
        <label>City Name:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button>Search!</button>
      </form>
    </div>
  );
}




export default SearchBar;

// const axios = require("axios");

const URL = 'https://google-location-data.p.rapidapi.com/search'




export const getGymsData = async () => {
  

    try {
        const {data} = await axios.get(URL, {

          params: {query: `Jiu Jitsu Gyms in ${mySearch}`,//Query will be interpolated
           isNumber: 'false',
            lang: 'en'},
            // bl_latitude: "11",
            // tr_latitude: "12",
            // bl_longitude: "109",
            // tr_longitude: "109",
          headers: {
             'rapidapi-auth': 'AIzaSyAIrHeTPljOYzhcZBiT3OfCgb80KdrbVGc',//NEEDS TO BECOME AN ENV VARIABLE
             'X-RapidAPI-Host': 'google-location-data.p.rapidapi.com',
             'X-RapidAPI-Key': '81093bc095mshb81ae5f8135eab3p102351jsna25df92c319c'//THIS ONE TOO MAYBE??
          }
        });

        return data;
    } catch (error) {
        console.log(error)
    }
}