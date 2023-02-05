import axios from 'axios';
import coockies from 'js-cookie';

const lang = coockies.get("i18next") == undefined ? 'en' : coockies.get("i18next")


export default axios.create({
  baseURL: `${process.env.REACT_APP_API}/${lang}/api` 
});