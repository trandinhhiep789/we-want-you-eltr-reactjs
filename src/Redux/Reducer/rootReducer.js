import { combineReducers } from "redux";
import QuanLyNguoiDungReducer from "./QuanLyNguoiDungReducer"

export const rootReducer = combineReducers({
    stateUser : QuanLyNguoiDungReducer,
});
