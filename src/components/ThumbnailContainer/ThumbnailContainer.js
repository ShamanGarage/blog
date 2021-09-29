import React from 'react';
import EntryThumbnail from "./EntryThumbnail/EntryThumbnail"

function ThumbnailContainer(props){
  let entries = props.entries
  return (entries.map(function(year_entries){
    let year = year_entries.year;
    return(year_entries.entries.map(entry => ( <EntryThumbnail key={entry.url + year} title={entry.title} year={year} path={entry.url} imgPath={entry.imgPath}/>)))
         })
)
}

export default ThumbnailContainer;
