import {pages} from '../controllers/index';

let content = document.getElementById("root");

const router = (route) => {
  content.innerHTML = "";
  switch (route) {
    case "#/": {
      return content.appendChild(pages.home());
    }
    case "#/posts":
      return content.appendChild(pages.post());
    case "#/products":
      return console.log("products!!!");
    default:
      return content.appendChild(pages.home());
  }
};

export { router };
