import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function ChonLoaiTaiKhoan() {
  const [height, setHeight] = useState(window.innerHeight);
  useEffect(() => {
    window.onresize = function () {
      setHeight(window.innerHeight);
    };
  }, []);

  return (
    <div className="chonloaitk" style={{ height }}>
      <div
        className=" pt-4 khungHinh chon"
        style={{ width: "70%", margin: "0 auto", borderRadius: "20px" }}
      >
        <h2 className="text-center mauXanh">ĐĂNG KÝ</h2>
        <div className="d-flex " style={{ width: "100%", margin: "0 auto" }}>
          <div
            className="m-4 p-4 w-100 khungHinh"
            style={{ backgroundColor: "#556e8e", borderRadius: "10px" }}
          >
            <i
              className="fas fa-users text-white mr-4"
              style={{ fontSize: "55px" }}
            ></i>
            <NavLink
              className="text-white"
              style={{ fontSize: "50px" }}
              to="signupforbusiness"
            >
              Business
            </NavLink>
            <br></br>
            <i className="text-white">
              Dành cho các doanh nghiệp tuyển nhân sự
            </i>
          </div>
          <div
            className="m-4 p-4 w-100 khungHinh"
            style={{ backgroundColor: "#556e8e", borderRadius: "10px" }}
          >
            <i
              className="fas fa-user text-white mr-4"
              style={{ fontSize: "50px" }}
            ></i>
            <NavLink
              className="text-white"
              style={{ fontSize: "50px" }}
              to="signupforpersonal"
            >
              Personal
            </NavLink>
            <br></br>
            <i className="text-white">Dành cho cá nhân tìm kiếm việc làm mới</i>
          </div>
        </div>
      </div>
    </div>
  );
}
