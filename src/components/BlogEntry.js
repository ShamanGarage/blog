import React, { useState }from 'react';
import { useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown'
import './BlogEntry.css'

function BlogEntry(){
    let post = useParams().post;
    let date = useParams().date;
    const [text, setText] = useState("");


    function handleTextChange(input){
      if (input.includes("<!DOCTYPE html>"))
        setText("No hemos podido encontrar el post que buscas...")
      else
        setText(input);
    }

    fetch(process.env.PUBLIC_URL + "/posts/" + date + "/" + post + "/post.md").then(res => res.text()).then(textoChuli => handleTextChange(textoChuli))
    return <ReactMarkdown className="article"children={text} />
}

export default BlogEntry;
