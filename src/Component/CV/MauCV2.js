import React, {useState} from "react";
import ReactHtmlParser from "react-html-parser";
import { useRef } from "react";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";

import { useDispatch, useSelector } from "react-redux";
import {capNhatThongTinAction} from "../../Redux/Action/QuanLyNguoiDungActions"

export default function MauCV2(detail) {
  const pdfExportComponent = useRef(null);

  const handleExportWithComponent = (event) => {
    pdfExportComponent.current.save();
  };

  const [value, setValue] = useState("xanhduong");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.stateUser.userLogin);

  //xét màu cho CV
  const setMauCV = (value) => {
    if (value == "xanhla") {
      return "xanhla";
    } else if (value == "cam") {
      return "cam";
    } else if (value == "do") {
      return "do";
    } else if (value == "xanhduong") {
      return "xanhduong";
    }
  };

  const setMauXanhDuong = () => {
    setValue("xanhduong")
  }
  const setMauXanh = () => {
    setValue("xanhla")
  }
  const setMauCam = () => {
    setValue("cam")
  }
  const setMauDo = () => {
    setValue("do")
  }

  const dungMau = async () => {
    if(userLogin.data){
      const newValues = {mauCvChinh: "3", user_id: userLogin.data[0]._id, colorCV: value}
      console.log(newValues)
      dispatch(await capNhatThongTinAction(newValues));
    }
  }


  return (
    <div className="container py-3 my-3  " style={{ width: "80%" }}>
      <button
        className="btn btn-outline-success my-4 mr-4 khungHinh"
        onClick={handleExportWithComponent}
      >
        Xuất file PDF
      </button>
      <span className="btn btn-success my-4 khungHinh mr-4" onClick={dungMau}>
        Dùng mẫu này
      </span> <br></br>
      <span className="btn p-2 my-4 mr-2 khungHinh " style={{backgroundColor: "blue",borderRadius:"50%"}} onClick={setMauXanhDuong}>
        
      </span>
      <span className="btn p-2 my-4 mr-2 khungHinh" style={{backgroundColor: "green",borderRadius:"50%"}} onClick={setMauXanh}>
        
      </span>
      <span className="btn p-2 my-4 mr-2 khungHinh" style={{backgroundColor: "orange",borderRadius:"50%"}} onClick={setMauCam}>
        
      </span>
      <span className="btn p-2 my-4 mr-2 khungHinh" style={{backgroundColor: "red",borderRadius:"50%"}} onClick={setMauDo}>
        
      </span>
      <PDFExport ref={pdfExportComponent} paperSize="A3">
        <div>
          <div className=" CV2 khungHinh d-flex">

            <div className={`headerCV2 text-white ${setMauCV(value)}`} style={{width:"40%"}}>
              <div className="imgCV2 ">
                <img
                  style={{
                    borderRadius: "30%",
                    height: "200px",
                    width: "200px",
                    margin: "0 auto",
                  }}
                  src={detail.imageUrl}
                  alt="avataCv"
                />
              </div>
              <div className="mt-3 mb-4">
                <h6 className="text-white">{detail.hoVaTen}</h6>
                <i>{detail.viTriUngTuyen}</i>
              </div>
                <hr></hr>

              <div className="my-4 ">
                <h6 className="text-white ">
                  {/* <i className="far fa-address-card "></i>  */}
                  THÔNG TIN LIÊN HỆ
                </h6>
                <div
                  className="text-left"
                  style={{ width: "90%", margin: "0 auto" }}
                >
                  <span>
                    {/* <i className="fas fa-user mx-3"></i>  */}
                    Nam
                  </span>
                  <br></br>
                  <span>
                    {/* <i className="fas fa-phone mx-3"></i>  */}
                    {detail.soDienThoai}
                  </span>
                  <br></br>
                  <span>
                    {/* <i className="far fa-envelope mx-3"></i>  */}
                    {detail.email}
                  </span>
                  <br></br>
                  <span>
                    {/* <i className="fas fa-map-marker-alt mx-3"></i>  */}
                    {detail.diaChi}
                  </span>
                  <br></br>
                </div>
              </div>

              <div
                className="my-4 "
                style={{ width: "90%", margin: "0 auto" }}
              >
                <h6 className="text-center text-white py-2">
                  {/* <i className="fas fa-bullseye"></i>  */}
                  MỤC TIÊU NGHỀ NGHIỆP
                </h6>
                <span className="p-3 w-100">{detail.mucTieuNgheNghiep}</span>
              </div>
              <div
                className="my-4  "
                style={{ width: "90%", margin: "0 auto" }}
              >
                <h6 className="text-center text-white">
                  {/* <i className="fas fa-thumbs-up"></i>  */}
                  KỸ NĂNG
                </h6>
                <span className="p-3 w-100">{detail.cacKiNang}</span>
              </div>

              <div
                className="my-4"
                style={{ width: "90%", margin: "0 auto" }}
              >
                <h6 className="text-center text-white">
                  {/* <i className="fas fa-thumbs-up"></i>  */}
                  HOẠT ĐỘNG
                </h6>
                <span className="p-3 w-100">{detail.hoatDong}</span>
              </div>

              <div
                className="my-4  "
                style={{ width: "90%", margin: "0 auto" }}
              >
                <h6 className="text-center text-white">
                  {/* <i className="fas fa-thumbs-up"></i>  */}
                  SỞ THÍCH
                </h6>
                <span className="p-3 w-100">{detail.soThich}</span>
              </div>

              <div
                className="my-4"
                style={{ width: "90%", margin: "0 auto" }}
              >
                <h6 className="text-center text-white">
                  {/* <i className="fas fa-thumbs-up"></i>  */}
                  NGƯỜI THAM CHIẾU
                </h6>
                <span className="p-3 w-100">{detail.nguoiThamChieu}</span>
              </div>
            </div>
            
            <div className="bodyCV2" style={{width:"60%"}}>
              <div style={{ width: "80%", margin: "0 auto" }}>
                <div className="mt-4 pt-4">
                  <h6 className="mauXanh">
                    {/* <i className="fas fa-graduation-cap"></i>  */}
                    HỌC VẤN
                  </h6>
                  <span className="text-left m-3 w-100">
                    {detail.tenTruong}
                  </span>
                </div>
              </div>
              <div style={{ width: "80%", margin: "0 auto" }}>
                <div className="my-4 ">
                  <h6 className="mauXanh">
                    {/* <i className="fas fa-briefcase"></i> */}
                    KINH NGHIỆM LÀM VIỆC
                  </h6>
                  <span className="text-left m-3 w-100">
                    {ReactHtmlParser(detail.kinhNghiemLamViec)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PDFExport>
    </div>
  );
}
