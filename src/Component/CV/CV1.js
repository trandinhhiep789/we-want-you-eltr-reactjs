import React, {useState} from "react";
import ReactHtmlParser from "react-html-parser";

import { useRef } from "react";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";

export default function CV1(detail) {
  const pdfExportComponent = useRef(null);
  const contentArea = useRef(null);

  const handleExportWithComponent = (event) => {
    pdfExportComponent.current.save();
  };
  const handleExportWithFunction = (event) => {
    savePDF(contentArea.current, { paperSize: "A4" });
  };

  

  return (
    <div className="">
      <button
        className="btn btn-success my-4 khungHinh"
        onClick={handleExportWithComponent}
      >
        Xuất file PDF
      </button>
      
      <div ref={contentArea} style={{ width: "80%", margin: "0 auto" }}>
        <PDFExport ref={pdfExportComponent} paperSize="A3">
          <div className="p-2 khungHinh">
            <div className="mauCV1 ">
              <div className={`mauHeader text-white ${detail.colorCV}`}>
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
