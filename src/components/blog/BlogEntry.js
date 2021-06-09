import React from 'react';
import { useParams, Redirect } from "react-router-dom";
import PostContainer from './post/PostContainer.js';

function BlogEntry(){
    let post = useParams().post;
    let date = useParams().date;
    let post_route = date + "/" + post
    if (PostContainer[date] != undefined){
      let Component = PostContainer[date][post];
      if (Component != undefined)
        return (<Component />);
      return (<div>Nothing here {date}/{post}</div>);
    }else{
      return <Redirect  to={"/" + date} />
    }

}

export default BlogEntry
