import React, {useState} from "react";
import ReactHtmlParser from "react-html-parser";
import { useRef } from "react";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";

import { useDispatch, useSelector } from "react-redux";
import {capNhatThongTinAction} from "../../Redux/Action/QuanLyNguoiDungActions"

export default function MauCV4(detail) {

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
      const newValues = {mauCvChinh: "4", user_id: userLogin.data[0]._id, colorCV: value}
      console.log(newValues)
      dispatch(await capNhatThongTinAction(newValues));
    }
  }

  return (
    <div className="container" style={{ width: "80%", margin:"0 auto" }}>
      <button className="btn btn-outline-success mr-4" onClick={handleExportWithComponent}>
        Xuất file PDF
      </button>
      <span className="btn btn-success my-4 khungHinh mr-4" onClick={dungMau}>
        Dùng mẫu này
      </span> <br></br>
      <span className="btn p-2 my-4 mr-2 khungHinh " style={{backgroundColor: "blue",borderRadius:"50%"}} onClick={setMauXanhDuong}>
        
      </span>
      <span className="btn p-2 my-4 mr-2 khungHinh" style={{backgroundColor: "green",borderRadius:"50%"}} onClick={setMauXanh}>
        
      </span>
      {/* <span className="btn p-2 my-4 mr-2 khungHinh" style={{backgroundColor: "orange",borderRadius:"50%"}} onClick={setMauCam}>
        
      </span>
      <span className="btn p-2 my-4 mr-2 khungHinh" style={{backgroundColor: "red",borderRadius:"50%"}} onClick={setMauDo}>
        
      </span> */}
      <PDFExport ref={pdfExportComponent} paperSize="A3">
      <div className="mauCV4 my-4 khungHinh">
        <div>
          <div className={`headerCV4 ${setMauCV(value)}`}>
            <div className="avatarAndName">
              {/* <img
                style={{ borderRadius: "30px" }}
                src="https://picsum.photos/id/1/200/200"
                alt="avataCv"
              /> */}
              <img
                style={{height:"200px", width:"200px"}}
                src={detail.imageUrl}
                alt="avataCv"
              />
              <div>
                <h6 className="text-white">{detail.hoVaTen}</h6>
                <i className="text-white">{detail.viTriUngTuyen}</i>
              </div>
            </div>
          </div>

          <div className="headerMiniCV4 p-4">
            <span>
              {/* <i className="fas fa-map-marker-alt mx-3"></i>  */}
              {detail.diaChi}
            </span>
            <span>
              {" "}
              {/* <i className="far fa-envelope mx-3"></i>  */}
              {detail.email}
            </span>
            <span>
              {/* <i className="fas fa-phone mx-3"></i> */}
              {detail.soDienThoai}
            </span>
          </div>
        </div>
        <div>
          <div className="m-4">
            <h6 className="mauXanh">MỤC TIÊU NGHỀ NGHIỆP</h6>
            {detail.mucTieuNgheNghiep}
          </div>

          <div className="d-flex">
            <div className="m-4" style={{ width: "50%" }}>
              <div>
                <h6 className="mauXanh">HỌC VẤN</h6>
                {detail.tenTruong}
              </div>

              <div className="my-4">
                <h6 className="mauXanh">HOẠT ĐỘNG</h6>
                {detail.hoatDong}
              </div>

              <div className="my-4">
                <h6 className="mauXanh">KĨ NĂNG</h6>
                {detail.cacKiNang}
              </div>
              <div className="my-4">
                <h6 className="mauXanh">SỞ THÍCH</h6>
                {detail.soThich}
              </div>
              <div className="my-4">
                <h6 className="mauXanh">NGƯỜI THAM CHIẾU</h6>
                {detail.nguoiThamChieu}
              </div>
            </div>
            <div style={{ width: "50%" }}>
              <div className="my-4">
                <h6 className="mauXanh">KINH NGHIỆM LÀM VIỆC</h6>
          {ReactHtmlParser(detail.kinhNghiemLamViec)} 
              </div>

              
            </div>
          </div>
        </div>
      </div>
    
      </PDFExport>
    </div>
  );
}
