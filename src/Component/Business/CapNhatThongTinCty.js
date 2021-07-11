/* eslint-disable no-loop-func */
import React, { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import logo_taocv from "../../Asset/CV/taoCV.png";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { GET_DETAIL_USER } from "../../Redux/Const/API";
import {
  capNhatThongTinCtyAction,
  suaUrl_Cty,
  suaUrlCover_Cty,
} from "../../Redux/Action/QuanLyNguoiDungActions";



export default function CapNhatThongTinCty() {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.stateUser.userLogin);
  console.log("userLogin");
  console.log(userLogin);

  
  const [detail, setDetail] = useState([]);

  const [data, setData] = useState({
    hoVaTen: "",
    mucTieuNgheNghiep: "",
    soDienThoai: "",
    diaChi: "",
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

  // upload logo
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
      dispatch(await suaUrl_Cty(arr));
    }
  };

  // upload Image Covers
  const [imageSelectedCover, setImageSelectedCOver] = useState();
  var arr = [];

  const uploadImageCover = async () => {
    if (imageSelectedCover) {
      arr = [];
      for (let i = 0; i < imageSelectedCover.length; i++) {
        var formData = new FormData();

        console.log(imageSelectedCover[i]);

        formData.append("file", imageSelectedCover[i]);
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
            arr.push(response.data.secure_url);
            console.log(arr);
          });
      }
      Swal.fire("Thông báo", "Tải lên thành công", "success");
      dispatch(await suaUrlCover_Cty(arr));
    }
  };

  var imageUrl = useSelector((state) => state.stateUser.imageUrlCty);
  var imageUrlCover = useSelector((state) => state.stateUser.imageUrlCoverCty);
  const handleSubmit = async (values) => {
    values.preventDefault();
    const id = userLogin.data[0]._id;

    const newValues = {
      ...data,
      user_id: id,
      imageName: imageUrl,
      imageNameCover: imageUrlCover,
    };

    console.log(newValues);

    dispatch(await capNhatThongTinCtyAction(newValues));
  };

  useEffect(() => {
    if(userLogin.data){
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

  return (
    <div>
      <div
        className="container khungHinh p-4 my-4"
        style={{ borderRadius: "20px" }}
      >
        <div className="d-flex">
          <img src={logo_taocv} alt="logoCV" style={{ width: "30%" }} />
          <h1
            className="text-center mauXanh"
            style={{ lineHeight: "260px" }}
          >
            CẬP NHẬT THÔNG TIN
          </h1>
        </div>

        <div className="d-flex" style={{justifyContent:"space-between"}}>
             {/* tải logo */}
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
            className="btn btn-success khungHinh mx-3"
            onClick={uploadImage}
            style={{ borderRadius: "20px" }}
          >
            Tải logo
          </button>
        </div>

        {/* tải imgCover */}
        <div className="pt-4 pb-4" >
        <input style={{borderRadius:"20px"}} className="p-2 khungHinh" type="file" multiple 
        onChange={(event) => {
            setImageSelectedCOver(event.target.files);
        }} />
        <button className="btn btn-success khungHinh mx-3" style={{borderRadius:"20px"}} onClick={uploadImageCover}>Tải ảnh bìa</button>
      </div>


        </div>
       
        <form onSubmit={handleSubmit}>
          <div className="my-4">
            <h5>TÊN CÔNG TY</h5>
            <textarea
              onChange={handleChange}
              className="form-control"
              name="hoVaTen"
              placeholder={detail.hoVaTen}
            />
          </div>
          <div className="my-4">
            <h5>SỐ ĐIỆN THOẠI</h5>
            <textarea
              onChange={handleChange}
              className="form-control"
              name="soDienThoai"
              placeholder={detail.soDienThoai}
            />
          </div>

          <div className="my-4">
            <h5>ĐỊA CHỈ</h5>
            <textarea
              onChange={handleChange}
              className="form-control"
              name="diaChi"
              placeholder={detail.diaChi}
            />
          </div>

          <div className="my-4">
            <h5>GIÁ TRỊ HƯỚNG TỚI</h5>
            <textarea
              onChange={handleChange}
              className="form-control"
              name="mucTieuNgheNghiep"
            />
          </div>

          <button
            type="submit"
            className="w-100 nutXanhXanh p-3 mb-4 text-white"
            style={{
              fontWeight: "700",
              fontSize: "20px",
              borderRadius: "30px",
            }}
          >
            Cập nhật
          </button>

          <div className="text-right">
          <NavLink style={{borderRadius:"30px", fontWeight:"500"}} className="p-2 text-right bg-info mt-3 text-white" to="/">Bỏ qua</NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}
