/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import * as ReactBootStrap from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { GET_POST_BY_IDUSER, GET_DETAIL_USER } from "../../Redux/Const/API";

// cloudinary, ant design

import { Image as Image1 } from "cloudinary-react";
import { Image as Image2 } from "antd";

import "antd/dist/antd.css";
import { NavLink } from "react-router-dom";
import BaiDang from "./BaiDang";

export default function TrangCaNhanCty() {
  // const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [post, setPost] = useState([]);
  const [detail, setDetail] = useState([]);

  const userLogin = JSON.parse(localStorage.getItem("USER_LOGIN")).data[0]
  console.log("userLogin");
  // console.log(userLogin.data[0]);

  useEffect(() => {
    if(userLogin){
      const promise = axios({
        url: GET_POST_BY_IDUSER + userLogin._id,
        method: "GET",
      });
      promise.then((res) => {
        console.log(res.data);
        setPost(res.data.data);
      });
    }
  }, []);

  useEffect(() => {
    if(userLogin){
      const promise = axios({
        url: GET_DETAIL_USER + userLogin._id,
        method: "GET",
      });
      promise.then((res) => {
        console.log(res.data);
        setDetail(res.data.data);
      });
    }
  }, []);

  console.log(post);

  return (
    <div>
      {detail.imageUrl ? (
        <div className="trangCaNhanCty">
          <div className="khungCty">
            <ReactBootStrap.Carousel fade>
              {detail.imageUrlCover
                ? detail.imageUrlCover.map((m) => (
                    <ReactBootStrap.Carousel.Item>
                      <Image1
                        className="text-center w-100"
                        style={{ height: "300px" }}
                        cloudName="dkhhh96tt"
                        publicId={m}
                      />
                    </ReactBootStrap.Carousel.Item>
                  ))
                : ""}
            </ReactBootStrap.Carousel>

            <div className="logoCty d-flex">
              {detail.imageUrl ? (
                <Image2
                  className="khungHinh"
                  style={{
                    width: "250px",
                    height: "250px",
                    borderRadius: "50%",
                  }}
                  src={detail.imageUrl}
                >
                  <Image1
                    style={{
                      width: "250px",
                      height: "250px",
                      borderRadius: "50%",
                    }}
                    cloudName="dkhhh96tt"
                    publicId={detail.imageUrl}
                  />
                </Image2>
              ) : (
                <img
                  style={{}}
                  src="https://picsum.photos/250/250"
                  alt="logocty"
                />
              )}

              <h2 className="tenCty">
                {detail.hoVaTen}
                <br></br>
                <i style={{ fontSize: "20px", fontWeight: "300" }}>
                  {detail.diaChi}
                </i>
                <br></br>
                <NavLink style={{ fontSize: "20px" }} to="capnhatthongtincty">
                  C???p nh???t th??ng tin
                </NavLink>
              </h2>
            </div>
          </div>

          {/* Danh s??ch b??i ????ng c???a c??ng ty */}
          <div
            className="container khungHinh"
            style={{
              marginTop: "200px",
              padding: "20px",
              borderRadius: "20px",
            }}
          >
            <div className=" p-4" style={{ marginTop: "50px" }}>
              <ReactBootStrap.Button
                variant="primary"
                onClick={handleShow}
                style={{ borderRadius: "20px" }}
              >
                + ????ng b??i tuy???n d???ng
              </ReactBootStrap.Button>

              <ReactBootStrap.Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
              >
                <ReactBootStrap.Modal.Header closeButton>
                  <ReactBootStrap.Modal.Title>
                    ????ng b??i tuy???n d???ng
                  </ReactBootStrap.Modal.Title>
                </ReactBootStrap.Modal.Header>
                <ReactBootStrap.Modal.Body>
                  <BaiDang />
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
            </div>

            <h5>Danh s??ch c??c b??i tuy???n d???ng</h5>

            {post?.map((m) => (
              <div
                className="d-flex khungHinh my-4"
                key={m._id}
                style={{ borderRadius: "10px" }}
              >
                <div className="m-4">
                  {detail.imageUrl ? (
                    <Image2
                      className="khungHinh"
                      style={{ width: "60px" }}
                      src={detail.imageUrl}
                    >
                      <Image1
                        style={{ width: "60px" }}
                        cloudName="dkhhh96tt"
                        publicId={detail.imageUrl}
                      />
                    </Image2>
                  ) : (
                    <img
                      style={{ borderRadius: "50%" }}
                      src="https://picsum.photos/50/50"
                      alt="logocty"
                    />
                  )}
                </div>

                <div className="w-100 m-4">
                  <NavLink to={`chitietbaidang/${m._id}`}>
                  <h3>{m.tieuDe}</h3>
                  <div className="d-flex">
                    <i className="mr-4">{m.luong}</i>
                    <i>{m.diaChi}</i>
                  </div>
                  {m.danhSachUngCuVien.length === 0 ? (
                    <i className="text-danger" style={{ fontWeight: "500" }}>
                      Ch??a c?? ???ng c??? vi??n n??o
                    </i>
                  ) : (
                    <i
                      className="text-danger"
                      style={{ fontWeight: "500" }}
                    >{`c?? ${m.danhSachUngCuVien.length} ???ng c??? vi??n`}</i>
                  )}

                  <div className="text-right">
                    <i className="text-right">{m.create_date.slice(0, 10)}</i>
                  </div>
                  </NavLink>

                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">.</div>
        </div>
      ) : (
        ""
      )}
      <div className="text-center">
        <NavLink to="capnhatthongtincty">C???p nh???t th??ng tin c??ng ty</NavLink>
      </div>
    </div>
  );
}
