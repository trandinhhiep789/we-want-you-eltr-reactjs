/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import logo from "../../Asset/Header/logo.png";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
// import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from "react-bootstrap";
import { GET_DETAIL_USER } from "../../Redux/Const/API";

// cloudinary, ant design

import { Image as Image1 } from "cloudinary-react";
import { Image as Image2 } from "antd";

import "antd/dist/antd.css";

export default function Header() {
  const userLogin = useSelector((state) => state.stateUser.userLogin);
  // console.log("userLogin");
  console.log(userLogin);
  const logOut = () => {
    Swal.fire({
      title: "Bạn có chắc muốn đăng xuất?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Có",
      cancelButtonColor: "#d33",
      cancelButtonText: "Hủy",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        window.location.href = "/";
      }
    });
  };

  const [detail, setDetail] = useState([]);

  useEffect( async () => {
    if (localStorage.getItem("USER_LOGIN")) {
      // const promise = axios({
      //   url: GET_DETAIL_USER + userLogin.data[0]._id,
      //   method: "GET",
      // });
      // promise.then((res) => {
      //   console.log(res.data);
      //   setDetail(res.data.data);
      // });
      const { data } = await axios.get(`${GET_DETAIL_USER}${JSON.parse(localStorage.getItem("USER_LOGIN")).data[0]._id}`);
    console.log("data detail");
    console.log(data.data);
    setDetail(data.data);
    }
    // console.log(JSON.parse(localStorage.getItem("USER_LOGIN")).data[0])
  }, []);

  console.log(detail)

  return (
    <>
      <div className="khungHinh">
        <ReactBootStrap.Navbar bg="white" expand="sm">
          <ReactBootStrap.Navbar.Brand href="/">
            <img style={{ width: "100px" }} src={logo} alt="logo" />
          </ReactBootStrap.Navbar.Brand>
          <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
            <ReactBootStrap.Nav className="mr-auto">
              <ReactBootStrap.Nav.Link href="#home">
                Home
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link href="#link">
                Link
              </ReactBootStrap.Nav.Link>
            </ReactBootStrap.Nav>
            <ReactBootStrap.Form inline>
              {detail.tenUser ? (
                <>
                  {detail.imageUrl ? (
                    <Image2
                      className="khungHinh"
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                      }}
                      src={detail.imageUrl}
                    >
                      <Image1
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%",
                        }}
                        cloudName="dkhhh96tt"
                        publicId={detail.imageUrl}
                      />
                    </Image2>
                  ) : (
                    <img src="https://picsum.photos/50/50" alt="logocty" />
                  )}

                  <ReactBootStrap.Dropdown>
                    <ReactBootStrap.Dropdown.Toggle
                      variant=""
                      id="dropdown-basic"
                    ></ReactBootStrap.Dropdown.Toggle>

                    <ReactBootStrap.Dropdown.Menu>
                      {detail.loaiUser[0] === "user" ? (
                        <ReactBootStrap.Dropdown.Item href="#/action-1">
                          <NavLink
                            style={{ fontSize: "15px", textDecoration: "none" }}
                            to="/quanlycvcanhan"
                            className="text-dark"
                          >
                            Quản lý CV
                          </NavLink>
                        </ReactBootStrap.Dropdown.Item>
                      ) : (
                        ""
                      )}

                      {detail.loaiUser[0] === "business" ? (
                        <ReactBootStrap.Dropdown.Item href="#/action-1">
                          <NavLink
                            style={{ fontSize: "15px", textDecoration: "none" }}
                            to="/trangcanhancty"
                            className="text-dark"
                          >
                            Trang cá nhân
                          </NavLink>
                        </ReactBootStrap.Dropdown.Item>
                      ) : (
                        ""
                      )}

                      <ReactBootStrap.Dropdown.Item href="#/action-2">
                        <NavLink
                          style={{ fontSize: "15px" }}
                          to="/"
                          className="user__item-link"
                          onClick={() => logOut()}
                        >
                          Đăng xuất
                        </NavLink>
                      </ReactBootStrap.Dropdown.Item>
                    </ReactBootStrap.Dropdown.Menu>
                  </ReactBootStrap.Dropdown>

                  {detail.loaiUser[0] === "admin" ? (
                    <NavLink
                      target="_blank"
                      style={{ fontSize: "15px" }}
                      to="/admin/forbusiness"
                    >
                      Admin{" "}
                    </NavLink>
                  ) : (
                    ""
                  )}
                  {/* <NavLink
                      style={{ fontSize: "10px" }}
                      to="/"
                      className="user__item-link"
                      onClick={() => logOut()}
                    >
                      Đăng xuất
                    </NavLink> */}
                </>
              ) : (
                <NavLink to="/signin" className="">
                  <i
                    className=" mx-1 fas fa-user"
                    style={{ color: "#428C27" }}
                  />
                </NavLink>
              )}

              <ReactBootStrap.FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <ReactBootStrap.Button variant="outline-success">
                Search
              </ReactBootStrap.Button>
            </ReactBootStrap.Form>
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
      </div>
    </>
  );
}
