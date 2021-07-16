import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { GET_DETAIL_USER } from "../../Redux/Const/API";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { dangBaiAction } from "../../Redux/Action/QuanLyNguoiDungActions";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
const loginUserSchema = yup.object().shape({
  tieuDe: yup.string().required("*Tiêu đè không được bỏ trống!"),
  luong: yup.string().required("*Lương không được bỏ trống!"),
});

export default function BaiDang() {
  const dispatch = useDispatch();

  const [moTa, setMoTa] = useState({});

  const [detail, setDetail] = useState([]);

  const userLogin = JSON.parse(localStorage.getItem("USER_LOGIN")).data[0]
  // console.log("userLogin");
  // console.log(userLogin.data[0]);

  useEffect(() => {
    const promise = axios({
      url: GET_DETAIL_USER + userLogin._id,
      method: "GET",
    });
    promise.then((res) => {
      console.log(res.data);
      setDetail(res.data.data);
    });
  }, []);

  const handleCkeditorState = (e, editor) => {
    const moTaCongViec = editor.getData();
    setMoTa(moTaCongViec)    

  };

  const handleSubmit = async (values) => {

    const newValues = {...values, "noiDung": moTa, "diaChi": detail.diaChi, "imagePost":detail.imageUrl, "userId":detail._id, "categoryId":detail.categoryId }

    dispatch(await dangBaiAction(newValues))
  };

  return (
    <div>
      <Formik
        initialValues={{
          tieuDe: "",
          luong: "",
          tenGoiYTimKiem: "",
        }}
        validationSchema={loginUserSchema}
        onSubmit={handleSubmit}
        render={(formikProps) => (
          <Form
            className="container my-4 py-4 khungHinh"
            style={{ borderRadius: "20px" }}
          >
            <div className="">
              <div className="my-4">
              <h5 className="mauXanh">Tiêu đề</h5>
                <Field
                  style={{ borderRadius: "20px" }}
                  name="tieuDe"
                  className="form-control "
                  aria-describedby="tieuDe"
                  placeholder="Tiêu đề"
                  onChange={formikProps.handleChange}
                />
              </div>
              <span style={{ color: "red", fontStyle: "italic" }}>
                <ErrorMessage name="tieuDe" />
              </span>
            </div>

            <div className="">
              <div className="my-4">
              <h5 className="mauXanh">Mức lương</h5>
                <Field
                  style={{ borderRadius: "20px" }}
                  name="luong"
                  className="form-control  "
                  aria-describedby="luong"
                  placeholder="Mức lương"
                  onChange={formikProps.handleChange}
                />
              </div>
              <span style={{ color: "red", fontStyle: "italic" }}>
                <ErrorMessage name="luong" />
              </span>
            </div>

            <div className="">
              <div className="my-4">
              <h5 className="mauXanh">Thêm từ khóa gợi ý để dễ dàng tiếp cận hơn đến các ứng cử viên</h5>
                <Field
                  style={{ borderRadius: "20px" }}
                  name="tenGoiYTimKiem"
                  className="form-control "
                  aria-describedby="tenGoiYTimKiem"
                  placeholder="Tiêu đề"
                  onChange={formikProps.handleChange}
                />
              </div>
              <span style={{ color: "red", fontStyle: "italic" }}>
                <ErrorMessage name="tenGoiYTimKiem" />
              </span>
            </div>

            <div className="my-4">
              <h5 className="mauXanh">Mô tả công việc</h5>
              <CKEditor editor={ClassicEditor} onChange={handleCkeditorState} />
            </div>

            <div className="">
              <button className="btn w-100 text-white nutXanhXanh" style={{fontWeight:"700"}} type="submit">
                ĐĂNG BÀI
              </button>
            </div>
          </Form>
        )}
      />
    </div>
  );
}
