import axios from 'axios';
import coockies from 'js-cookie';

let lang = navigator.language.slice(0,2);

if(coockies.get("i18next")){
  lang = coockies.get("i18next");
  
}else if(lang !== 'ar' || lang !== 'en'){ 
  lang = 'en';
}


export default axios.create({
  baseURL: `${process.env.REACT_APP_API}/${lang}/api` 
});