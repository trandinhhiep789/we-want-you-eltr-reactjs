import React, { useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import maucv1 from "../../Asset/CV/maucv1.1.jpg";
import maucv2 from "../../Asset/CV/maucv2.2.jpg";
import maucv3 from "../../Asset/CV/maucv3.3.jpg";
import maucv4 from "../../Asset/CV/maucv4.4.jpg";
import maucv5 from "../../Asset/CV/maucv5.5.png";

import MauCV1 from "./MauCV1";
import MauCV2 from "./MauCV2";
import MauCV3 from "./MauCV3";
import MauCV4 from "./MauCV4";
import MauCV5 from "./MauCV5";

import { useDispatch, useSelector } from "react-redux";
import Header from "../Header/Header"
import {capNhatThongTinAction} from "../../Redux/Action/QuanLyNguoiDungActions"
import { GET_DETAIL_USER } from "../../Redux/Const/API";
import axios from "axios";

import * as ReactBootStrap from "react-bootstrap";

export default function QuanLyCV_CaNhan() {

  
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.stateUser.userLogin);
  // console.log("userLogin");
  // console.log(userLogin.data[0]._id);

  const [detail, setDetail] = useState([]);


  useEffect(() => {
    if(userLogin.data){
      const promise = axios({
        url: GET_DETAIL_USER + userLogin.data[0]._id,
        method: "GET",
      });
      promise.then((res) => {
        // console.log(res.data);
        setDetail(res.data.data);
      });
    }
  }, []);

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);

  const [cv1, setCv1] = useState(false);
  const [cv2, setCv2] = useState(false);
  const [cv3, setCv3] = useState(false);
  const [cv4, setCv4] = useState(false);
  const [cv5, setCv5] = useState(false);


  const dungMau1 = async () => {
    setCv1(true)
    setCv2(false)
    setCv3(false)
    setCv4(false)
    setCv5(false)

    if(userLogin.data){
      const newValues = {mauCvChinh: "1", user_id: userLogin.data[0]._id, colorCV:"xanhduong"}
      console.log(newValues)
      dispatch(await capNhatThongTinAction(newValues));
    }
  }
  
  const dungMau2 = async () => {
    setCv1(false)
    setCv2(true)
    setCv3(false)
    setCv4(false)
    setCv5(false)

    if(userLogin.data){
      const newValues = {mauCvChinh: "2", user_id: userLogin.data[0]._id, colorCV:"xanhduong"}
      console.log(newValues)
      dispatch(await capNhatThongTinAction(newValues));
    }
  }

  const dungMau3 = async () => {
    setCv1(false)
    setCv2(false)
    setCv3(true)
    setCv4(false)
    setCv5(false)

    if(userLogin.data){
      const newValues = {mauCvChinh: "3", user_id: userLogin.data[0]._id, colorCV:"xanhduong"}
      console.log(newValues)
      dispatch(await capNhatThongTinAction(newValues));
    }
  }

  const dungMau4 = async () => {
    setCv1(false)
    setCv2(false)
    setCv3(false)
    setCv4(true)
    setCv5(false)

    if(userLogin.data){
      const newValues = {mauCvChinh: "4", user_id: userLogin.data[0]._id, colorCV:"xanhduong"}
      console.log(newValues)
      dispatch(await capNhatThongTinAction(newValues));
    }
  }

  const dungMau5 = async () => {
    setCv1(false)
    setCv2(false)
    setCv3(false)
    setCv4(false)
    setCv5(true)

    if(userLogin.data){
      const newValues = {mauCvChinh: "5", user_id: userLogin.data[0]._id, colorCV:"xanhduong"}
      console.log(newValues)
      dispatch(await capNhatThongTinAction(newValues));
    }
  }

  return (
    <div>
      <div className="container mb-4  ">

      {/* Cập nhật thông tin cá nhân */}
      <div className=" p-4" style={{ marginTop: "50px" }}>
        <NavLink
          className="khungHinh p-3"
          to="/taocv"
          style={{
            textDecoration: "none",
            borderRadius: "10px",
            fontWeight: "500",
          }}
        >
          Cập nhật thông tin cá nhân
        </NavLink>
      </div>

      {/* Chọn CV Chính */}
      <div
        className="d-flex mt-4 xem1 text-center"
        style={{ flexWrap: "wrap" }}
      >
        {/* Danh sách CV */}

        {/* Mẫu CV Thanh Lịch */}

        <div className="chaCV1 ">
          <ReactBootStrap.Card
            className="m-4 khungHinh "
            style={{ width: "18rem" }}
          >
            <ReactBootStrap.Card.Img className="" variant="top" src={maucv1} />
            <ReactBootStrap.Card.Body>
              <ReactBootStrap.Card.Title className="">
                {cv1?<p style={{fontSize:"20px"}} className="text-white bg-success">CV CHÍNH <i className="ml-3 text-white fas fa-check-circle"></i></p>:<p>Mẫu CV Thanh Lịch</p>}
              </ReactBootStrap.Card.Title>
            </ReactBootStrap.Card.Body>
          </ReactBootStrap.Card>

          <div className="conCV1">
            <ReactBootStrap.Button
              className="nutCV1 khungHinh"
              variant=" "
              onClick={() => setShow1(true)}
            >
              XEM NHANH
            </ReactBootStrap.Button>
            <br></br> <br></br>
            <button onClick={dungMau1} className="nutDungCV1 khungHinh ">
              DÙNG MẪU NÀY
            </button>
          </div>

          <ReactBootStrap.Modal
            show={show1}
            onHide={() => setShow1(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <ReactBootStrap.Modal.Header closeButton>
              <ReactBootStrap.Modal.Title id="example-custom-modal-styling-title">
                Mẫu CV Thanh Lịch
              </ReactBootStrap.Modal.Title>
            </ReactBootStrap.Modal.Header>
            <ReactBootStrap.Modal.Body style={{ width: "100%" }}>
              {<MauCV1 {...detail}/>}
            </ReactBootStrap.Modal.Body>
          </ReactBootStrap.Modal>
        </div>

        {/* Mẫu CV Nổi Bật */}
        <div className="chaCV2">
          <ReactBootStrap.Card
            className="m-4 khungHinh  "
            style={{ width: "18rem" }}
          >
            <ReactBootStrap.Card.Img variant="top" src={maucv5} />
            <ReactBootStrap.Card.Body>
              <ReactBootStrap.Card.Title>
              {cv2?<p style={{fontSize:"20px"}} className="text-white bg-success">CV CHÍNH <i className="ml-3 text-white fas fa-check-circle"></i></p>:<p>Mẫu CV Nổi Bật</p>}
              </ReactBootStrap.Card.Title>
            </ReactBootStrap.Card.Body>
          </ReactBootStrap.Card>

          <div className="conCV2">
            <ReactBootStrap.Button
              className="nutCV2 khungHinh"
              variant=" "
              onClick={() => setShow5(true)}
            >
              XEM NHANH
            </ReactBootStrap.Button>
            <br></br> <br></br>
            <button onClick={dungMau2} className="nutDungCV2 khungHinh ">
              DÙNG MẪU NÀY
            </button>
          </div>

          <ReactBootStrap.Modal
            show={show5}
            onHide={() => setShow5(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <ReactBootStrap.Modal.Header closeButton>
              <ReactBootStrap.Modal.Title id="example-custom-modal-styling-title">
                Mẫu CV Nổi Bật
              </ReactBootStrap.Modal.Title>
            </ReactBootStrap.Modal.Header>
            <ReactBootStrap.Modal.Body style={{ width: "100%" }}>
              {<MauCV5 {...detail}/>}
            </ReactBootStrap.Modal.Body>
          </ReactBootStrap.Modal>
        </div>

        {/* Mẫu CV Chuyên Nghiệp */}
        <div className="chaCV3">
          <ReactBootStrap.Card
            className="m-4 khungHinh  "
            style={{ width: "18rem" }}
          >
            <ReactBootStrap.Card.Img variant="top" src={maucv2} />
            <ReactBootStrap.Card.Body>
              <ReactBootStrap.Card.Title>
              {cv3?<p style={{fontSize:"20px"}} className="text-white bg-success">CV CHÍNH <i className="ml-3 text-white fas fa-check-circle"></i></p>:<p>Mẫu CV Chuyên Nghiệp</p>}
              </ReactBootStrap.Card.Title>
            </ReactBootStrap.Card.Body>
          </ReactBootStrap.Card>

          <div className="conCV3">
            <ReactBootStrap.Button
              className="nutCV3 khungHinh"
              variant=" "
              onClick={() => setShow2(true)}
            >
              XEM NHANH
            </ReactBootStrap.Button>
            <br></br> <br></br>
            <button onClick={dungMau3} className="nutDungCV3 khungHinh ">
              DÙNG MẪU NÀY
            </button>
          </div>

          <ReactBootStrap.Modal
            show={show2}
            onHide={() => setShow2(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <ReactBootStrap.Modal.Header closeButton>
              <ReactBootStrap.Modal.Title id="example-custom-modal-styling-title">
                Mẫu CV Chuyên Nghiệp
              </ReactBootStrap.Modal.Title>
            </ReactBootStrap.Modal.Header>
            <ReactBootStrap.Modal.Body style={{ width: "100%" }}>
              {<MauCV2 {...detail}/>}
            </ReactBootStrap.Modal.Body>
          </ReactBootStrap.Modal>
        </div>

        {/* Mẫu CV Senior */}

        <div className="chaCV4">
          <ReactBootStrap.Card
            className="m-4 khungHinh  "
            style={{ width: "18rem" }}
          >
            <ReactBootStrap.Card.Img variant="top" src={maucv3} />
            <ReactBootStrap.Card.Body>
              <ReactBootStrap.Card.Title>
                {cv4?<p style={{fontSize:"20px"}} className="text-white bg-success">CV CHÍNH <i className="ml-3 text-white fas fa-check-circle"></i></p>:<p>Mẫu CV Senior</p>}
              </ReactBootStrap.Card.Title>
            </ReactBootStrap.Card.Body>
          </ReactBootStrap.Card>

          <div className="conCV4">
            <ReactBootStrap.Button
              className="nutCV4 khungHinh"
              variant=" "
              onClick={() => setShow3(true)}
            >
              XEM NHANH
            </ReactBootStrap.Button>
            <br></br> <br></br>
            <button onClick={dungMau4} className="nutDungCV4 khungHinh ">
              DÙNG MẪU NÀY
            </button>
          </div>

          <ReactBootStrap.Modal
            show={show3}
            onHide={() => setShow3(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <ReactBootStrap.Modal.Header closeButton>
              <ReactBootStrap.Modal.Title id="example-custom-modal-styling-title">
                Mẫu CV Senior
              </ReactBootStrap.Modal.Title>
            </ReactBootStrap.Modal.Header>
            <ReactBootStrap.Modal.Body style={{ width: "100%" }}>
              {<MauCV3 {...detail}/>}
            </ReactBootStrap.Modal.Body>
          </ReactBootStrap.Modal>
        </div>

        {/* Mẫu CV Hiện Đại */}

        <div className="chaCV5">
          <ReactBootStrap.Card
            className="m-4 khungHinh "
            style={{ width: "18rem" }}
          >
            <ReactBootStrap.Card.Img variant="top" src={maucv4} />
            <ReactBootStrap.Card.Body>
              <ReactBootStrap.Card.Title>
                {cv5?<p style={{fontSize:"20px"}} className="text-white bg-success">CV CHÍNH <i className="ml-3 text-white fas fa-check-circle"></i></p>:<p>Mẫu CV Hiện Đại</p>}
              </ReactBootStrap.Card.Title>
            </ReactBootStrap.Card.Body>
          </ReactBootStrap.Card>

          <div className="conCV5">
            <ReactBootStrap.Button
              className="nutCV5 khungHinh"
              variant=" "
              onClick={() => setShow4(true)}
            >
              XEM NHANH
            </ReactBootStrap.Button>
            <br></br> <br></br>
            <button onClick={dungMau5} className="nutDungCV5 khungHinh ">
              DÙNG MẪU NÀY
            </button>
          </div>

          <ReactBootStrap.Modal
            show={show4}
            onHide={() => setShow4(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <ReactBootStrap.Modal.Header closeButton>
              <ReactBootStrap.Modal.Title id="example-custom-modal-styling-title">
                Mẫu CV Hiện Đại
              </ReactBootStrap.Modal.Title>
            </ReactBootStrap.Modal.Header>
            <ReactBootStrap.Modal.Body style={{ width: "100%" }}>
              {<MauCV4 {...detail}/>}
            </ReactBootStrap.Modal.Body>
          </ReactBootStrap.Modal>
        </div>
      </div>
    </div>
  
    </div>
    );
}
