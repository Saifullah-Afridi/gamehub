import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "932ed18418b848feb49ca7b323b885b7",
  },
});
