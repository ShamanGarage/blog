import React, { useState, useEffect }from 'react';
import { useParams } from "react-router-dom";
import Helmet from "react-helmet";
import ReactMarkdown from 'react-markdown'
import './BlogEntry.css'



const useFetchTEXT = url => {
  const [data, setData] = useState("");

  useEffect(() => {  async function fetchData() {
      const response = await fetch(url);
      let text = await response.text();
      if (text.includes("<!DOCTYPE html>")){
        text = "No hemos encontrado nada...";
      }
      setData(text);
    };
    fetchData();},[url]);

  return data;
};


const useFetchJSON = url => {
  const [data, setData] = useState(null);

  useEffect(() => {  async function fetchData() {
      const response = await fetch(url);
      let json = {}
      try{
        json = await response.json();
      }catch (err){
        json = {"title": "Nada por aquí..."}
      }

        setData(json);
    };
    fetchData()},[url]);

  return data;
};


function BlogEntry(){
    let post = useParams().post;
    let date = useParams().date;
    let post_url = process.env.PUBLIC_URL + "/posts/" + date + "/" + post;
    const text = useFetchTEXT(post_url + "/post.md");
    const meta = useFetchJSON(post_url + "/meta.json");

    return (
      <div className="application">
      {meta?
        <Helmet>
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
          <meta name="keywords" cpntent={meta.keywords} />
        </Helmet>: null}
      <ReactMarkdown className="article"children={text ? text : "Cargando..."} />
      </div>
    )
}

export default BlogEntry;
