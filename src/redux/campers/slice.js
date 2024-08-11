import { createSlice } from "@reduxjs/toolkit";
import { getCampers } from "./operations.js";
import { prepareFilters } from "../../service/serviceFuncs.js";

const initialState = {
  items: [],
  favItems: [],
  filters: {
    location: [],
    equipment: [],
    vehicleType: [],
  },
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const campersSlice = createSlice({
  name: "campers",
  initialState: initialState,
  reducers: {
    saveFavorite(state, action) {
      const camperId = action.payload;
      const index = state.favItems.findIndex((favId) => favId === camperId);
      if (index >= 0) {
        state.favItems.splice(index, 1);
      } else {
        state.favItems.push(camperId);
      }
    },
    setFilters(state, action) {
      const currentFilters = { ...state.filters };
      const index = currentFilters[action.payload.type].findIndex(
        (eq) => eq.key === action.payload.key
      );
      if (index >= 0) {
        currentFilters[action.payload.type][index].checked =
          !currentFilters[action.payload.type][index].checked;
      }

      state.filters = currentFilters;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCampers.pending, handlePending)
      .addCase(getCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
        state.filters = prepareFilters(action.payload);
      })
      .addCase(getCampers.rejected, handleRejected);
  },
});

export default campersSlice.reducer;
export const { saveFavorite, setFilters } = campersSlice.actions;
