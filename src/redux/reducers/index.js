import {combineReducers} from "redux";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
// import missionReducer from "./missions/index"
import postsReducer from "./Posts"


const persistConfig = {
    key: "root",
    storage,
};

export const allReducers = {

    posts: postsReducer,

}

const reducer = combineReducers(allReducers);

export const persistedReducer = persistReducer(persistConfig, reducer);