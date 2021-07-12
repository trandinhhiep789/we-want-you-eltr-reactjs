import React, { useRef } from "react";
import ReactHtmlParser from "react-html-parser";

// import { useRef } from "react";
import { PDFExport } from "@progress/kendo-react-pdf";

export default function CV5(detail) {
  const pdfExportComponent = useRef(null);
  const contentArea = useRef(null);

  const handleExportWithComponent = (event) => {
    pdfExportComponent.current.save();
  };

  return (
    <div
      className="container  mauCV5  my-4 py-3"
      style={{ width: "80%" }}
    >
      <button
            className="btn btn-success my-4"
            onClick={handleExportWithComponent}
          >
            Xuất file PDF
          </button>
      <PDFExport ref={pdfExportComponent} paperSize="A3">
        <div className="khungHinh  mauCV5">
          <div>
            <div className="hederTrenCV5 ">
              <h6 className="text-white hovaten">{detail.hoVaTen}</h6>
              <i className="text-white">{detail.viTriUngTuyen}</i>
            </div>
            <div className="headerDuoiCV5">
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
                  borderRadius: "50%",
                  height: "200px",
                  width: "200px",
                  margin: "0 auto",
                }}
                src={detail.imageUrl}
                alt="avataCv"
              />

              <div className="mt-4">
                <h6 className="tieuDeCV5">MỤC TIÊU NGHỀ NGHIỆP</h6>
                <p className="text-left">{detail.mucTieuNgheNghiep}</p>
              </div>

              <div className="mt-4">
                <h6 className="tieuDeCV5">CÁC KĨ NĂNG</h6>
                <p className="text-left">{detail.cacKiNang}</p>
              </div>

              <div className="mt-4">
                <h6 className="tieuDeCV5">SỞ THÍCH</h6>
                <p className="text-left">{detail.soThich}</p>
              </div>

              <div className="mt-4">
                <h6 className="tieuDeCV5">HOẠT ĐỘNG</h6>
                <p className="text-left">{detail.hoatDong}</p>
              </div>

              <div className="mt-4">
                <h6 className="tieuDeCV5">NGƯỜI THAM CHIẾU</h6>
                <p className="text-left">{detail.nguoiThamChieu}</p>
              </div>
            </div>
            <div className="bodyCV5_benPhai">
              <div className="">
                <h6 className="tieuDeCV5">HỌC VẤN</h6>
                <p className="text-left">{detail.tenTruong}</p>
              </div>

              <div className="mt-4">
                <h6 className="tieuDeCV5">KINH NGHIỆM LÀM VIỆC</h6>

                {ReactHtmlParser(detail.kinhNghiemLamViec)}
              </div>

              
            </div>
          </div>
        </div>
      </PDFExport>
    </div>
  );
}
