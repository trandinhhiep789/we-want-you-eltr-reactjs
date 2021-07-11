import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { GET_DETAIL_USER, GET_ALL_POST } from "../../Redux/Const/API"; // cloudinary, ant design
import Post from "../Business/Post";
import ReactHtmlParser from "react-html-parser";
import {nopCV} from "../../Redux/Action/QuanLyNguoiDungActions"

export default function Home() {
  const [detail, setDetail] = useState([]);
  const [allpost, setAllPost] = useState([]);
  const [postRecommenn, setPostRecommenn] = useState([]);

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.stateUser.userLogin);
  // console.log("userLogin");
  // console.log(userLogin.data[0]);

  const detailPost = useSelector((state) => state.stateUser.detail_post);

  // chi tiet nguoi dung
  useEffect(() => {
    if(userLogin.data){
      const promise = axios({
        url: GET_DETAIL_USER + userLogin.data[0]._id,
        method: "GET",
      });
      promise.then((res) => {
        console.log(res.data);
        setDetail(res.data.data);
      });
    }
    
  }, []);

  // danh sach tat ca cac post
  useEffect(() => {
    const promise = axios({
      url: GET_ALL_POST,
      method: "GET",
    });
    promise.then((res) => {
      console.log(res.data);
      setAllPost(res.data.data);
    });
  }, []);

  const NopCV = async () => {
    if(userLogin.data){
      // console.log(userLogin.data[0])
      // console.log(userLogin.data[0]._id)
      const id = userLogin.data[0]._id
      const newValues = {"post_id": detailPost._id, "user_id": id}
      console.log(newValues)
      dispatch( await nopCV(newValues))
    }
  }

  return (
    <div className="home">
      <div className="mb-4">
        <Header />
      </div>

      {/* khung tim kiem công việc */}

      {/* việc làm tốt nhất */}

      <h3 className="bg-white p-4 mx-4" style={{ margin: "0" }}>
        {allpost.length} việc làm tốt nhất cho bạn
      </h3>
      <div className="d-flex">
        <div
          className="ml-4 py-4 border bg-white w-50"
          style={{ height: "450px", overflow: "auto" }}
        >
          {allpost?.map((p) => (
            <Post {...p} key={p._id} />
          ))}
        </div>

        <div
          className="mr-4 py-4 border bg-white w-50"
          style={{ height: "450px", overflow: "auto" }}
        >
          <h1 className="text-center mauXanh">{detailPost.tieuDe}</h1>
          {userLogin.data?(userLogin.data[0].loaiUser[0] === "user" ? <button onClick={NopCV} className="w-100 btn btn-danger m-4">Apply Now</button> 
          : <button className="w-100 btn btn-danger m-4" disabled>Apply Now</button> ):""}
          
          <div className="mx-4">{ReactHtmlParser(detailPost.noiDung)}</div>
        </div>
      </div>
      <div className="mt-4">.</div>

      {/* việc làm gợi ý */}
    </div>
  );
}
