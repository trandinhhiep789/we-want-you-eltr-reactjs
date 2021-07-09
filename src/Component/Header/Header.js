/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import logo from "../../Asset/Header/logo.png";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
// import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from "react-bootstrap";

export default function Header() {
  const userLogin = useSelector((state) => state.stateUser.userLogin);
  console.log("userLogin");
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

  return (
    <>
      <div className="khungHinh">
        <ReactBootStrap.Navbar bg="white" expand="sm">
          <ReactBootStrap.Navbar.Brand href="#home">
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
              {userLogin.data ? (
                <>
                  <img
                    src="https://picsum.photos/40/40"
                    alt=""
                    style={{ borderRadius: "50%" }}
                  />
                  <ReactBootStrap.Dropdown>
                    <ReactBootStrap.Dropdown.Toggle
                      variant=""
                      id="dropdown-basic"
                    ></ReactBootStrap.Dropdown.Toggle>

                    <ReactBootStrap.Dropdown.Menu>
                      <ReactBootStrap.Dropdown.Item href="#/action-1">
                        <NavLink
                          style={{ fontSize: "15px", textDecoration:"none"}}
                          to="/quanlycvcanhan"
                          className="text-dark"
                        >
                          Quản lý CV
                        </NavLink>
                      </ReactBootStrap.Dropdown.Item>
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

                  {userLogin.data[0].loaiUser[0] === "admin" ? (
                    <NavLink
                      target="_blank"
                      style={{ fontSize: "15px" }}
                      to="/admin/quanlysanpham"
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
