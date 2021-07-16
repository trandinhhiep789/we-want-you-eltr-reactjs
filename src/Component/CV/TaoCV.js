/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-loop-func */
import React, { useState,useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import logo_taocv from "../../Asset/CV/taoCV.png";
import ReactHtmlParser from "react-html-parser";
import { useDispatch, useSelector } from "react-redux";
import {
  capNhatThongTinAction,
  suaUrl_User,
} from "../../Redux/Action/QuanLyNguoiDungActions";
import {GET_DETAIL_USER} from "../../Redux/Const/API"

//Editor
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function TaoCV() {
  const dispatch = useDispatch();

  const userLogin = JSON.parse(localStorage.getItem("USER_LOGIN")).data[0]
  console.log(userLogin);

  const [data, setData] = useState({
    hoVaTen: "",
    mucTieuNgheNghiep: "",
    tenTruong: "",
    tinhTrang: "",
    soDienThoai: "",
    diaChi: "",
    cacKiNang: "",
    soThich: "",
    nguoiThamChieu: "",
    kinhNghiemLamViec: "",
    hoatDong: "",
    viTriUngTuyen: "",
    soNamKinhNghiem:"",
    tenGoiYTimKiem: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
    setData({
      [name]: value,
    });

    let newData = { ...data, [name]: value };
    // Set lại state của userLogin = giá trị mới
    setData(newData);
    console.log(data);
  };
  const handleCkeditorState = (e, editor) => {
    const kinhNghiem = editor.getData();
    let newData = { ...data, kinhNghiemLamViec: kinhNghiem };
    // Set lại state của userLogin = giá trị mới
    setData(newData);
    console.log(data);
  };

  var imageUrl = useSelector((state) => state.stateUser.imageUrlUser);

  const handleSubmit = async (values) => {
    values.preventDefault();
    const id = userLogin._id;

    const newValues = { ...data, user_id: id, imageName: imageUrl };

    console.log(newValues);

    dispatch(await capNhatThongTinAction(newValues));
  };

  const [imageSelected, setImageSelected] = useState();

  const uploadImage = async () => {
    if (imageSelected) {
      var arr = "";
      var formData = new FormData();

      console.log(imageSelected);

      formData.append("file", imageSelected);
      formData.append("upload_preset", "qeulpezz");
      // console.log("file",formData[i].get('file'))

      await axios
        .post(
          "https://api.cloudinary.com/v1_1/dkhhh96tt/image/upload",
          formData
        )
        .then((response) => {
          console.log(response);
          console.log(response.data.secure_url);
          arr = response.data.secure_url;
        });

      Swal.fire("Thông báo", "Tải lên thành công", "success");
      dispatch(await suaUrl_User(arr));
    }
  };

  const [detail, setDetail] = useState([]);

   // chi tiet nguoi dung
   useEffect(async() => {
    if(localStorage.getItem("USER_LOGIN")){
      const { data } = await axios.get(`${GET_DETAIL_USER}${JSON.parse(localStorage.getItem("USER_LOGIN")).data[0]._id}`);
    console.log("data detail");
    console.log(data.data);
    setDetail(data.data);
    }
    
  }, []);

  return (
    <div>
      <div
        className="TaoCV container khungHinh py-4 my-4"
        style={{ borderRadius: "20px", width: "60%" }}
      >
        <div className="d-flex">
          <img src={logo_taocv} alt="logoCV" style={{ width: "30%" }} />
          <h1 className="text-center mauXanh" style={{ lineHeight: "190px" }}>
            CẬP NHẬT THÔNG TIN
          </h1>
        </div>

        <div className="my-4">
          <input
            className="p-2 khungHinh text-dark"
            style={{ borderRadius: "20px" }}
            type="file"
            onChange={(event) => {
              setImageSelected(event.target.files[0]);
            }}
          />
          <button
            className="btn btn-outline-success khungHinh mx-3"
            onClick={uploadImage}
          >
            Tải hình ảnh lên
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="my-4">
            <h5>HỌ VÀ TÊN</h5>
            <input
              onChange={handleChange}
              className="form-control"
              name="hoVaTen"
              placeholder={detail.hoVaTen}
            />
          </div>
          <div className="my-4">
            <h5>VỊ TRÍ ỨNG TUYỂN</h5>
            <input
              onChange={handleChange}
              className="form-control"
              name="viTriUngTuyen"
              placeholder={detail.viTriUngTuyen}
            />
          </div>
          <div className="my-4">
            <h5>SỐ ĐIỆN THOẠI</h5>
            <input
              onChange={handleChange}
              className="form-control"
              name="soDienThoai"
              placeholder={detail.soDienThoai}
            />
          </div>

          <div className="my-4">
            <h5>ĐỊA CHỈ</h5>
            <input
              onChange={handleChange}
              className="form-control"
              name="diaChi"
              placeholder={detail.diaChi}
            />
          </div>

          <div className="my-4">
            <h5>SỐ NĂM KINH NGHIỆM TRONG LĨNH VỰC</h5>
            <input
              onChange={handleChange}
              className="form-control"
              name="soNamKinhNghiem"
              placeholder={detail.soNamKinhNghiem}
            />
          </div>

          <div className="my-4">
            <h5>TÊN GỢI Ý TÍM KIẾM ĐỂ DỄ DÀNG KẾT NỐI VỚI CÁC DOANH NGHIỆP</h5>
            <input
              onChange={handleChange}
              className="form-control"
              name="tenGoiYTimKiem"
              placeholder={detail.tenGoiYTimKiem}
            />
          </div>

          <div className="my-4">
            <h5>MỤC TIÊU NGHỀ NGHIỆP</h5>
            <textarea
              onChange={handleChange}
              className="form-control"
              name="mucTieuNgheNghiep"
              placeholder={detail.mucTieuNgheNghiep}
            />
          </div>
          <div className="my-4">
            <h5>KINH NGHIỆM LÀM VIỆC</h5>
            <CKEditor editor={ClassicEditor} onChange={handleCkeditorState} />
          </div>
          <div className="my-4">
            <h5>HỌC VẤN</h5>
            <textarea
              onChange={handleChange}
              className="form-control mb-3"
              name="tenTruong"
              placeholder={detail.tenTruong}
            />
            <textarea
              onChange={handleChange}
              className="form-control"
              name="tinhTrang"
              placeholder="Tốt nghiệp"
            />
          </div>

          <div className="my-4">
            <h5>KĨ NĂNG</h5>
            <textarea
              onChange={handleChange}
              className="form-control"
              name="cacKiNang"
              placeholder={detail.cacKiNang}
            />
          </div>
          <div className="my-4">
            <h5>SỞ THÍCH</h5>
            <textarea
              onChange={handleChange}
              className="form-control"
              name="soThich"
              placeholder={detail.soThich}
            />
          </div>
          <div className="my-4">
            <h5>CÁC HOẠT ĐỘNG ĐÃ THAM GIA</h5>
            <textarea
              onChange={handleChange}
              className="form-control"
              name="hoatDong"
              placeholder={detail.hoatDong}
            />
          </div>
          <div className="my-4">
            <h5>NGƯỜI THAM CHIẾU</h5>
            <textarea
              onChange={handleChange}
              className="form-control"
              name="nguoiThamChieu"
              placeholder={detail.nguoiThamChieu}
            />
          </div>
          <button
            type="submit"
            className="w-100 nutXanhXanh p-3 text-white"
            style={{ fontWeight: "700", fontSize: "20px" }}
          >
            Submit
          </button>
        </form>
      </div>

      {ReactHtmlParser(data.kinhNghiemLamViec)}
    </div>
  );
}

export default TaoCV;
