import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Switch, Route } from "react-router-dom";
import Header from "./Component/Header/Header"
import MauCV1 from './Component/CV/MauCV1';
import MauCV2 from './Component/CV/MauCV2';
import MauCV3 from './Component/CV/MauCV3';
import MauCV4 from './Component/CV/MauCV4';
import MauCV5 from './Component/CV/MauCV5';
import TaoCV from './Component/CV/TaoCV';
import SignIn from './Component/Đăng nhập, Đăng kí/SignIn';
import QuanLyCV_CaNhan from './Component/CV/QuanLyCV_CaNhan';
import CapNhatThongTinCty from './Component/Business/CapNhatThongTinCty';
import TrangCaNhanCty from './Component/Business/TrangCaNhanCty';
import BaiDang from './Component/Business/BaiDang';
import Home from './Component/Home/Home';

function App() {
  return (
    <>
      
      <Route exact path="/" component={Home} />

      <Route exact path="/header" component={Header} />
      <Route exact path="/maucv1" component={MauCV1} />
      <Route exact path="/maucv2" component={MauCV2} />    
      <Route exact path="/maucv3" component={MauCV3} />    
      <Route exact path="/maucv4" component={MauCV4} />     
      <Route exact path="/maucv5" component={MauCV5} />  
      <Route exact path="/taocv" component={TaoCV} />  
      <Route exact path="/quanlycvcanhan" component={QuanLyCV_CaNhan} />  

      
      <Route exact path="/capnhatthongtincty" component={CapNhatThongTinCty} />  
      <Route exact path="/trangcanhancty" component={TrangCaNhanCty} />  
      <Route exact path="/baidang" component={BaiDang} />  
      
      <Route exact path="/signin" component={SignIn} />  
    </>
  );
}

export default App;
