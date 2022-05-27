import axios from "axios";


export default axios.create({
  baseURL: 'https://mean-stack-backend123.herokuapp.com/api',
  responseType: "json",
});


