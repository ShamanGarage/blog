import React from 'react';
import { Link } from "react-router-dom";
import styles from "./EntryThumbnail.module.css"

function EntryThumbnail(props){
  let imgSrc = '"/posts/' +props.year + "/" +props.path + '/thumbnail.jpg"'

  return (
    <div className={styles.thumbnailContainer}>
    <div className={styles.thumbnail} style={{ backgroundImage:'url(' + imgSrc +')'}}></div>
    <Link className={styles.title} to={"/" + props.year + "/" + props.path}>{props.title}</Link>

  </div>)
}

export default EntryThumbnail;
