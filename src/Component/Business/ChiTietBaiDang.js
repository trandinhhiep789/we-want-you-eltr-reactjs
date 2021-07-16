/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { GET_DETAIL_POST, DS_UNG_CU_VIEN_GOI_Y } from "../../Redux/Const/API";
import { xoaBaiDangAction } from "../../Redux/Action/QuanLyNguoiDungActions";
import * as ReactBootStrap from "react-bootstrap";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

import { Image as Image1 } from "cloudinary-react";
import { Image as Image2 } from "antd";
import ChinhSuaBaiDang from "./ChinhSuaBaiDang";
import CV from "../CV/CV";
import CV_RECOMMEN from "../CV/CV_RECOMMEN";

export default function ChiTietBaiDang({ match }) {
  let params = match.params;
  console.log(params.maBaiDang);

  const dispatch = useDispatch();

  const [detail, setDetail] = useState([]);
  const [ds, setDS] = useState([]);

  useEffect(async () => {
    const { data } = await axios.get(`${GET_DETAIL_POST}${params.maBaiDang}`);
    console.log("data detail");
    console.log(data);
    setDetail(data.data);
  }, []);

  console.log(detail);

  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const xoaBaiDang = () => {
    Swal.fire({
      title: "Bạn thực sự muốn xóa bài đăng này?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Có",
      cancelButtonColor: "#d33",
      cancelButtonText: "Hủy",
    }).then(async (result) => {
      if (result.isConfirmed) {
        dispatch(await xoaBaiDangAction(params.maBaiDang));
      }
    });
  };

  // Danh sách gợi ý ứng cử viên cho bài đăng này{detail.tenGoiYTimKiem}
  useEffect(async () => {
    console.log(detail.tenGoiYTimKiem);
    if (detail.tenGoiYTimKiem != undefined && detail.tenGoiYTimKiem != "") {
      const { data } = await axios.get(
        `${DS_UNG_CU_VIEN_GOI_Y}${detail.tenGoiYTimKiem}`
      );
      console.log(detail.tenGoiYTimKiem);
      console.log(`${DS_UNG_CU_VIEN_GOI_Y}${detail.tenGoiYTimKiem}`);
      console.log("data detail");
      console.log(data);
      setDS(data.data);
    }
  }, [detail]);

  return (
    <div className="khungHinh container" style={{ borderRadius: "20px" }}>
      <div className="d-flex p-4 m-4" style={{ borderRadius: "20px" }}>
        <div style={{ width: "50%" }}>
          <div
            className="container khungHinh"
            style={{ height: "500px", overflow: "auto", borderRadius: "20px" }}
          >
            <div
              className="d-flex"
              style={{
                marginTop: "25px",
                marginBottom: "10px",
              }}
            >
              <ReactBootStrap.Button
                variant="primary"
                onClick={handleShow}
                className="khungHinh"
                style={{
                  borderRadius: "20px",
                }}
              >
                Chỉnh sửa bài đăng
              </ReactBootStrap.Button>

              <ReactBootStrap.Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
              >
                <ReactBootStrap.Modal.Header closeButton>
                  <ReactBootStrap.Modal.Title>
                    Chỉnh sửa bài đăng
                  </ReactBootStrap.Modal.Title>
                </ReactBootStrap.Modal.Header>
                <ReactBootStrap.Modal.Body>
                  <ChinhSuaBaiDang {...detail} />
                </ReactBootStrap.Modal.Body>
                <ReactBootStrap.Modal.Footer>
                  <ReactBootStrap.Button
                    variant="secondary"
                    onClick={handleClose}
                  >
                    Close
                  </ReactBootStrap.Button>
                </ReactBootStrap.Modal.Footer>
              </ReactBootStrap.Modal>

              <button
                className="btn btn-danger ml-3 khungHinh"
                style={{
                  borderRadius: "20px",
                }}
                onClick={xoaBaiDang}
              >
                Xóa bài đăng này!
              </button>
            </div>
            <h1 className="text-center mauXanh">{detail.tieuDe}</h1>
            <div className="mx-4">{ReactHtmlParser(detail.noiDung)}</div>
          </div>
        </div>
        <div className="container px-4" style={{ width: "50%", height: "500px", overflow: "auto", borderRadius: "20px" }}>
          {/* DANH SÁCH ỨNG CỬ VIÊN */}
          <h3>Danh sách ứng cử viên</h3>

          <div >
            {detail.danhSachUngCuVien ? (
              <i
                style={{ fontWeight: "700" }}
                className="text-danger"
              >{`Có ${detail.danhSachUngCuVien.length} ứng viên cho vị trí này!`}</i>
            ) : (
              ""
            )}
          </div>
          <br></br>
          <hr></hr>
          {detail.danhSachUngCuVien
            ? detail.danhSachUngCuVien.map((m) => (
                <div>
                  <CV id={m} />
                </div>
              ))
            : ""}
        </div>
      </div>

      <i className="text-danger" style={{ fontWeight: "700" }}>
        Danh sách gợi ý ứng cử viên cho bài đăng này
      </i>
      <div className="p-4">
        {ds.length > 0 ? (
          <i
            style={{ fontWeight: "700" }}
            className="text-danger"
          >{`Có ${ds.length} ứng viên gợi ý cho vị trí này!`}</i>
        ) : (
          ""
        )}
        <br></br>
        <hr></hr>
        {ds.length > 0
          ? ds.map((m) => (
              <div key={m.id}>
                <CV_RECOMMEN id={m._id} />
              </div>
            ))
          : ""}
      </div>
    </div>
  );
}
