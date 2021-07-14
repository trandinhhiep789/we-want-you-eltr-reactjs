import React, {useState} from "react";
import ReactHtmlParser from "react-html-parser";

import { useRef } from "react";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";

import { useDispatch, useSelector } from "react-redux";
import {capNhatThongTinAction} from "../../Redux/Action/QuanLyNguoiDungActions"

export default function MauCV1(detail) {
  const pdfExportComponent = useRef(null);
  const contentArea = useRef(null);

  const handleExportWithComponent = (event) => {
    pdfExportComponent.current.save();
  };
  const handleExportWithFunction = (event) => {
    savePDF(contentArea.current, { paperSize: "A4" });
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
      const newValues = {mauCvChinh: "1", user_id: userLogin.data[0]._id, colorCV: value}
      console.log(newValues)
      dispatch(await capNhatThongTinAction(newValues));
    }
  }


  return (
    <div className="">
      <span className="btn btn-outline-success my-4 khungHinh mr-4" onClick={handleExportWithComponent}>
        Xuất file PDF
      </span>
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
        <div ref={contentArea} style={{ width: "80%", margin: "0 auto" }}>
        <PDFExport ref={pdfExportComponent} paperSize="A3">
          <div className="p-2 khungHinh">
            <div className="mauCV1 ">
              <div className={`mauHeader text-white ${setMauCV(value)}`}>
                <div className="d-flex header_CV1 container">
                  <div className="imgCV1">
                    {/* <img
                style={{ borderRadius: "50%" }}
                src="https://picsum.photos/id/1/150/150"
                alt="avataCv"
              /> */}
                    <img
                      style={{
                        borderRadius: "30%",
                        height: "150px",
                        width: "150px",
                      }}
                      src={detail.imageUrl}
                      alt="avataCv"
                    />
                  </div>
                  <div className="title_CV1">
                    <h5 className="text-white">{detail.hoVaTen}</h5>
                    <i className="text-white">{detail.viTriUngTuyen}</i>
                  </div>
                </div>
                <div className="thonTinCaNhan_CV1">
                  <span>{detail.diaChi}</span>
                  <span>{detail.email}</span>
                  <span>{detail.soDienThoai}</span>
                </div>
              </div>
            </div>
            <div className="bodyCV1 ">
              <div className="my-4">
                <h6 className="mauXanh">MỤC TIÊU NGHỀ NGHIỆP</h6>
                <span>{detail.mucTieuNgheNghiep}</span>
              </div>
              <div className="my-4">
                <h6 className="mauXanh">KINH NGHIỆM LÀM VIỆC</h6>
                {ReactHtmlParser(detail.kinhNghiemLamViec)}
              </div>
              <div className="my-4">
                <h6 className="mauXanh">HỌC VẤN</h6>
                <div
                  className="d-flex"
                  style={{ justifyContent: "space-between" }}
                >
                  <span style={{ width: "30%" }}>{detail.tenTruong}</span>
                </div>
              </div>

              <div className="my-4">
                <h6 className="mauXanh">HOẠT ĐỘNG</h6>
                {detail.hoatDong}
              </div>

              <div className="my-4">
                <h6 className="mauXanh">CÁC KĨ NĂNG</h6>
                {detail.hoatDong}
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
          </div>
          </PDFExport>
        </div>
      
    </div>
  );
}
