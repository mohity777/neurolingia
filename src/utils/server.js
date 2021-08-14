import Axios from "axios";
import { BASE_URL } from "./apiPath";

Axios.defaults.baseURL = BASE_URL;

export default class Api {
  static async get(path, extras) {
    try {
      const res = await Axios.post(path, extras);
      console.log(res);
      return res.data;
    } catch (err) {
      alert(err?.message || "Something Went wrong");
      console.log("Errrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr", err, err?.response);
      throw err;
    }
  }

  static async post(path, body, extras) {
    try {
      const res = await Axios.post(path, body, extras);
      console.log(res);
      return res.data;
    } catch (err) {
      alert(err?.message || "Something Went wrong");
      console.log("Errrrrrrrrrrrrrrrrrr", err, err?.response);
      throw err;
    }
  }
}
