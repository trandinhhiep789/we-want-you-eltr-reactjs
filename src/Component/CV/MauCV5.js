import React, { useRef, useState } from "react";
import ReactHtmlParser from "react-html-parser";

// import { useRef } from "react";
import { PDFExport } from "@progress/kendo-react-pdf";

import { useDispatch, useSelector } from "react-redux";
import { capNhatThongTinAction } from "../../Redux/Action/QuanLyNguoiDungActions";

export default function MauCV5(detail) {
  const pdfExportComponent = useRef(null);
  const contentArea = useRef(null);

  const handleExportWithComponent = (event) => {
    pdfExportComponent.current.save();
  };

  const [value, setValue] = useState("xanhduongnhat");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.stateUser.userLogin);

  //xét màu cho CV
  const setMauCV = (value) => {
    if (value == "xanh") {
      return "xanhla";
    } else if (value == "cam") {
      return "cam";
    } else if (value == "do") {
      return "do";
    } else if (value == "xanhduongnhat") {
      return "xanhduongnhat";
    } else if (value == "mauhong") {
      return "mauhong";
    } else if (value == "mautim") {
      return "mautim";
    }
  };

  const setMauXanhDuongNhat = () => {
    setValue("xanhduongnhat");
  };
  const setMauTim = () => {
    setValue("mautim");
  };
  const setMauCam = () => {
    setValue("cam");
  };
  const setMauHong = () => {
    setValue("mauhong");
  };

  const dungMau = async () => {
    if (userLogin.data) {
      const newValues = {
        mauCvChinh: "2",
        user_id: userLogin.data[0]._id,
        colorCV: value,
      };
      console.log(newValues);
      dispatch(await capNhatThongTinAction(newValues));
    }
  };

  return (
    <div className="container  mauCV5  my-4 py-3" style={{ width: "80%" }}>
      <button
        className="btn btn-outline-success mr-4 my-4"
        onClick={handleExportWithComponent}
      >
        Xuất file PDF
      </button>
      <span className="btn btn-success my-4 khungHinh mr-4" onClick={dungMau}>
        Dùng mẫu này
      </span>{" "}
      <br></br>
      <span
        className="btn p-2 my-4 mr-2 khungHinh "
        style={{ backgroundColor: "#a5dfe5", borderRadius: "50%" }}
        onClick={setMauXanhDuongNhat}
      ></span>
      <span
        className="btn p-2 my-4 mr-2 khungHinh"
        style={{ backgroundColor: "#d6dae4", borderRadius: "50%" }}
        onClick={setMauTim}
      ></span>
      <span
        className="btn p-2 my-4 mr-2 khungHinh"
        style={{ backgroundColor: "#fcbd88", borderRadius: "50%" }}
        onClick={setMauCam}
      ></span>
      <span
        className="btn p-2 my-4 mr-2 khungHinh"
        style={{ backgroundColor: "pink", borderRadius: "50%" }}
        onClick={setMauHong}
      ></span>
      <PDFExport ref={pdfExportComponent} paperSize="A3">
        <div className="khungHinh  mauCV5">
          <div>
            <div className="hederTrenCV5 ">
              <h6 className="text-white hovaten">{detail.hoVaTen}</h6>
              <i className="text-white">{detail.viTriUngTuyen}</i>
            </div>
            <div className={`headerDuoiCV5 ${setMauCV(value)}`}>
              <div className="headerDuoiCV5Content">
                <p>
                  <span style={{ fontWeight: "700" }}>Địa chỉ:</span>{" "}
                  {detail.diaChi}
                </p>
                <p>
                  <span style={{ fontWeight: "700" }}>Email:</span>{" "}
                  {detail.email}
                </p>
                <p>
                  <span style={{ fontWeight: "700" }}>Số điện thoại:</span>{" "}
                  {detail.soDienThoai}
                </p>
              </div>
            </div>
          </div>

          <div className="bodyCV5 mt-4">
            <div className="bodyCV5_benTrai">
              {/* <img
            style={{ borderRadius: "50%", margin:"0 auto"}}
            src="https://picsum.photos/id/1/200/200"
            alt="avataCv"
          /> */}
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

              <div className="mt-4">
                <h6 className={`tieuDeCV5 ${setMauCV(value)}`}>MỤC TIÊU NGHỀ NGHIỆP</h6>
                <p className="text-left">{detail.mucTieuNgheNghiep}</p>
              </div>

              <div className="mt-4">
                <h6 className={`tieuDeCV5 ${setMauCV(value)}`}>CÁC KĨ NĂNG</h6>
                <p className="text-left">{detail.cacKiNang}</p>
              </div>

              <div className="mt-4">
                <h6 className={`tieuDeCV5 ${setMauCV(value)}`}>SỞ THÍCH</h6>
                <p className="text-left">{detail.soThich}</p>
              </div>

              <div className="mt-4">
                <h6 className={`tieuDeCV5 ${setMauCV(value)}`}>HOẠT ĐỘNG</h6>
                <p className="text-left">{detail.hoatDong}</p>
              </div>

              <div className="mt-4">
                <h6 className={`tieuDeCV5 ${setMauCV(value)}`}>NGƯỜI THAM CHIẾU</h6>
                <p className="text-left">{detail.nguoiThamChieu}</p>
              </div>
            </div>
            <div className="bodyCV5_benPhai">
              <div className="">
                <h6 className={`tieuDeCV5 ${setMauCV(value)}`}>HỌC VẤN</h6>
                <p className="text-left">{detail.tenTruong}</p>
              </div>

              <div className="mt-4">
                <h6 className={`tieuDeCV5 ${setMauCV(value)}`}>KINH NGHIỆM LÀM VIỆC</h6>

                {ReactHtmlParser(detail.kinhNghiemLamViec)}
              </div>
            </div>
          </div>
        </div>
      </PDFExport>
    </div>
  );
}
