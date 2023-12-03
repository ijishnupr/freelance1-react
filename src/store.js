import { configureStore } from "@reduxjs/toolkit";
import brandReducer from './slice/brandslice'
import influencerslice from "./slice/influencerslice";
export default configureStore({
    reducer:{
        brand:brandReducer,
        influencer:influencerslice,
    }
})