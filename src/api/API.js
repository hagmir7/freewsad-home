import axios from 'axios';
import coockies from 'js-cookie';




export default axios.create({
  baseURL: `${process.env.REACT_APP_API}/${coockies.get("i18next")}/api` 
});