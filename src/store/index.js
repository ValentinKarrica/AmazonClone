import { configureStore } from "@reduxjs/toolkit";
import mainPageSlice from "./mainPage-slice"


const store = configureStore({reducer: {show: mainPageSlice.reducer} })

export default store;