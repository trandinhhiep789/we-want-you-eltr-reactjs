import React from "react";
import ReactHtmlParser from "react-html-parser";

export default function MauCV4(detail) {
  return (
    <div className="container" style={{ width: "100%" }}>
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
                <h1 className="text-white">{detail.hoVaTen}</h1>
                <i className="text-white">{detail.viTriUngTuyen}</i>
              </div>
            </div>
          </div>

          <div className="headerMiniCV4 p-4">
            <span>
              <i className="fas fa-map-marker-alt mx-3"></i> {detail.diaChi}
            </span>
            <span>
              {" "}
              <i className="far fa-envelope mx-3"></i> {detail.email}
            </span>
            <span>
              <i className="fas fa-phone mx-3"></i>
              {detail.soDienThoai}
            </span>
          </div>
        </div>
        <div>
          <div className="m-4">
            <h4 className="mauXanh">MỤC TIÊU NGHỀ NGHIỆP</h4>
            {detail.muTieuNgheNghiep}
          </div>

          <div className="d-flex">
            <div className="m-4" style={{ width: "50%" }}>
              <div>
                <h4 className="mauXanh">HỌC VẤN</h4>
                {detail.tenTruong}
              </div>

              <div className="my-4">
                <h4 className="mauXanh">HOẠT ĐỘNG</h4>
                {detail.hoatDong}
              </div>

              <div className="my-4">
                <h4 className="mauXanh">KĨ NĂNG</h4>
                {detail.cacKiNang}
              </div>
              <div className="my-4">
                <h4 className="mauXanh">SỞ THÍCH</h4>
                {detail.soThich}
              </div>
            </div>
            <div style={{ width: "50%" }}>
              <div className="my-4">
                <h4 className="mauXanh">KINH NGHIỆM LÀM VIỆC</h4>
          {ReactHtmlParser(detail.kinhNghiemLamViec)} 
              </div>

              <div className="my-4">
                <h4 className="mauXanh">NGƯỜI THAM CHIẾU</h4>
                {detail.nguoiThamChieu}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
