import React from "react";
import ReactHtmlParser from "react-html-parser";
import { useRef } from "react";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";

export default function CV4(detail) {

  const pdfExportComponent = useRef(null);

  const handleExportWithComponent = (event) => {
    pdfExportComponent.current.save();
  };

  return (
    <div className="container" style={{ width: "80%", margin:"0 auto" }}>
      <button className="btn btn-success" onClick={handleExportWithComponent}>
        Xuất file PDF
      </button>
      <PDFExport ref={pdfExportComponent} paperSize="A3">
      <div className="mauCV4 my-4 khungHinh">
        <div>
          <div className="headerCV4">
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
