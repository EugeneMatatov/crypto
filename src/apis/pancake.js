import axios from "axios";

export default axios.create({
  baseURL: "https://api.pancakeswap.info/api/v2/tokens",
});
