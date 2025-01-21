import {API_KEY} from "../consts";
import Loader from "./loader";

export default class CatsApi {
  async GetCats() {
    const loader = new Loader(`${API_KEY}`, "10");
    const response = await loader.get();

    return response;
  }
}
