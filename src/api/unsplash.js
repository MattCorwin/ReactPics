import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 824a5bb4f5251e2dd73cff4f92c11f2d09f121aa65d0d2696b8b3a2128ccb6da"
  }
});
