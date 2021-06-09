import postConfig from './PostConfig';

let postContainer = {};

for (var i = 0; i < postConfig.length; i++) {
  let post = postConfig[i];
  // Check if component is not already loaded then load it
  if (postContainer[post.year] === undefined){
    postContainer[post.year] = {}
  }
  if (postContainer[post.year][post.name] === undefined) {
    postContainer[post.year][post.name] = require(`${post.path}`).default;
  }
}

export default postContainer;
