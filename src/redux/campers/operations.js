import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66b5904ab5ae2d11eb63e2b7.mockapi.io/";

export const getCampers = createAsyncThunk(
  "campers/getAll",
  async (_, thunkAPI) => {
    // console.log("thunkAPI: ", thunkAPI);
    try {
      const response = await axios.get(`Advert`, {
        params: {
          //for pagination
          // page: 1,
          // limit: 2,
          //for filtering
          // location: "Ukraine, Kharkiv",
        },
        headers: {
          "content-type": "application/json",
        },
      });
      //https://PROJECT_TOKEN.mockapi.io/tasks?page=1&limit=2
      //66b5904ab5ae2d11eb63e2b7.mockapi.io/Advert?page=1&limit=2&location=Ukraine,+Kharkiv
      // const response = await axios.get("/Advert");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
