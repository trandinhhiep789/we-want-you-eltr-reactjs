import React from "react";
import ReactHtmlParser from "react-html-parser";
import { useRef } from "react";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
export default function CV3(detail) {
  const pdfExportComponent = useRef(null);

  const handleExportWithComponent = (event) => {
    pdfExportComponent.current.save();
  };

  return (
    <div style={{ width: "80%", margin:"0 auto"}}>
      <button className="btn btn-success" onClick={handleExportWithComponent}>
        Xuất file PDF
      </button>
      <PDFExport ref={pdfExportComponent} paperSize="A3">
        <div
          className="mauCV3 container text-center khungHinh mt-4 pt-3"
          style={{ width: "100%", borderRadius: "20px" }}
        >
          <div>
            <h6>{detail.hoVaTen}</h6>
            <div className="d-flex" style={{justifyContent: "space-between", width:"90%", margin:"0 auto"}}>
            <span>{detail.diaChi}</span>
            <span className=" ml-3">
              {/* <i className="fas fa-phone ml-3"></i> */}
              {detail.soDienThoai}
            </span>
            <span className=" ml-3">
              {/* <i className="far fa-envelope ml-3"></i> */}
              {detail.email}
            </span>
            </div>
            <hr></hr>
            <br></br>
          </div>

          <div className="mb-4">
            <h6>MỤC TIÊU NGHỀ NGHIỆP</h6>
            <div className="d-flex" style={{ justifyContent: "space-between" }}>
              <span style={{}}>{detail.mucTieuNgheNghiep}</span>
            </div>
          </div>

          <div className="mb-4">
            <h6>HỌC VẤN</h6>
            {detail.tenTruong}
          </div>

          <div className="mb-4">
            <h6>KINH NGHIỆM LÀM VIỆC</h6>
            <div className="text-left container">
              {ReactHtmlParser(detail.kinhNghiemLamViec)}
            </div>
          </div>

          <div className="mb-4">
            <h6>HOẠT ĐỘNG</h6>
            <div className="text-left">{detail.hoatDong}</div>
          </div>

          <div className="mb-4">
            <h6>CÁC KĨ NĂNG</h6>
            <div className="text-left">{detail.cacKiNang}</div>
          </div>

          <div className="mb-4">
            <h6>SỞ THÍCH</h6>
            <div className="text-left">{detail.soThich}</div>
          </div>

          <div className="mb-4">
            <h6>NGƯỜI THAM CHIẾU</h6>
            <div className="text-left">{detail.nguoiThamChieu}</div>
          </div>
        </div>
      </PDFExport>
    </div>
  );
}
