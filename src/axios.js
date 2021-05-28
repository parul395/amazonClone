import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:5001/clone-4ca40/us-central1/api"
  //https://us-central1-clone-4ca40.cloudfunctions.net/api 
  //http://localhost:5001/clone-4ca40/us-central1/api",
   // the api url{cloud function}
});

export default instance;

