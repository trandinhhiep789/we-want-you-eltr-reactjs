/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Image as Image1 } from "cloudinary-react";
import { Image as Image2 } from "antd";
import { useDispatch, useSelector } from "react-redux";
import ReactHtmlParser from "react-html-parser";
import * as ReactBootStrap from "react-bootstrap";
import "antd/dist/antd.css";
import { NavLink } from "react-router-dom";
import {nopCV} from "../../Redux/Action/QuanLyNguoiDungActions"

import { GET_DETAIL_USER, GET_POST_BY_IDUSER } from "../../Redux/Const/API";
import Post from "./Post";

export default function ChiTietTrangCaNhanCty({ match }) {
  let params = match.params;
  console.log(params.maCty);
  const dispatch = useDispatch();

  const [detail, setDetail] = useState([]);
  const [detailCty, setDetailCty] = useState([]);
  const [allpost, setAllPost] = useState([]);

  
  const detailPost = useSelector((state) => state.stateUser.detail_post);

  const NopCV = async () => {
      // console.log(userLogin.data[0])
      // console.log(userLogin.data[0]._id)
      const id = detail._id
      const newValues = {"post_id": detailPost._id, "user_id": id}
      console.log(newValues)
      dispatch( await nopCV(newValues))

  }

  useEffect(() => {
    const promise = axios({
      url: GET_POST_BY_IDUSER + params.maCty,
      method: "GET",
    });
    promise.then((res) => {
      console.log(res.data);
      setAllPost(res.data.data);
    });
  }, []);

  useEffect(async () => {
    const { data } = await axios.get(`${GET_DETAIL_USER}${params.maCty}`);
    console.log("data detail");
    console.log(data);
    setDetailCty(data.data);
  }, []);

  // chi tiet nguoi dung
  useEffect(async() => {
    if(localStorage.getItem("USER_LOGIN")){
      const { data } = await axios.get(`${GET_DETAIL_USER}${JSON.parse(localStorage.getItem("USER_LOGIN")).data[0]._id}`);
    console.log("data detail");
    console.log(data.data);
    setDetail(data.data);
    }
    
  }, []);

  const detaiPostBeside = async () => {
    console.log(p);
    const detail = { ...p };
    dispatch(await luuDetailPost(detail));
  };


  return (
    <div>
      <div className="trangCaNhanCty">
        <div className="khungCty">
          <ReactBootStrap.Carousel fade>
            {detailCty.imageUrlCover
              ? detailCty.imageUrlCover.map((m) => (
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
            {detailCty.imageUrl ? (
              <Image2
                className="khungHinh"
                style={{
                  width: "250px",
                  height: "250px",
                  borderRadius: "50%",
                }}
                src={detailCty.imageUrl}
              >
                <Image1
                  style={{
                    width: "250px",
                    height: "250px",
                    borderRadius: "50%",
                  }}
                  cloudName="dkhhh96tt"
                  publicId={detailCty.imageUrl}
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
              {detailCty.hoVaTen}
              <br></br>
              <i style={{ fontSize: "20px", fontWeight: "300" }}>
                {detailCty.diaChi}
              </i>
              <br></br>
            </h2>
          </div>
        </div>

        {/* Danh sách bài đăng của công ty */}
        <div className="d-flex">
          <div
            className="container khungHinh mx-2"
            style={{
              marginTop: "200px",
              padding: "20px",
              width:"50%", height:"500px", overflow:"auto"
            }}
          >
            <h5>Danh sách các bài tuyển dụng</h5>

            {allpost?.map((p) => (
            <Post {...p} key={p._id} />
          ))}
          </div>

          <div className="khungHinh mx-2" style={{width:"50%",marginTop: "200px", height:"500px", overflow:"auto"}}>
            <h1 className="text-center mauXanh">{detailPost.tieuDe}</h1>
            {detail.imageUrl?(detail.loaiUser[0] === "user" ? <button onClick={NopCV} className="w-100 btn btn-danger m-4">Apply Now</button> 
          : <button className="w-100 btn btn-danger m-4" disabled>Apply Now</button> ):""}

            <div className="mx-4">{ReactHtmlParser(detailPost.noiDung)}</div>
          </div>
        </div>

        <div className="mt-4">.</div>
      </div>
    </div>
  );
}
