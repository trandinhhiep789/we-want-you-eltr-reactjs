import React from "react";
import ReactHtmlParser from "react-html-parser";
import { useRef } from "react";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";

export default function CV2(detail) {
  const pdfExportComponent = useRef(null);

  const handleExportWithComponent = (event) => {
    pdfExportComponent.current.save();
  };

  console.log(detail.colorCV)
  return (
    <div className="container py-3 my-3  " style={{ width: "80%" }}>
      <button
        className="btn btn-success my-4 khungHinh"
        onClick={handleExportWithComponent}
      >
        Xuất file PDF
      </button>
      <PDFExport ref={pdfExportComponent} paperSize="A3">
        <div>
          <div className=" CV2 khungHinh d-flex">

            <div className={`headerCV2 text-white ${detail.colorCV}`} style={{width:"40%"}}>
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
