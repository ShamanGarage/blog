import React from 'react';
import ThumbnailContainer from "./../../ThumbnailContainer/ThumbnailContainer"


function Home(props){

return (  <div><h1>Home</h1><br/>
  <ThumbnailContainer entries={props.entries}/></div>)
}

export default Home
