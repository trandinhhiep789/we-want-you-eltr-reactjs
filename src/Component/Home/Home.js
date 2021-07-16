/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { GET_DETAIL_USER, GET_ALL_POST, GET_DETAIL_POST_BY_TIEU_DE} from "../../Redux/Const/API"; // cloudinary, ant design
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
  useEffect(async() => {
    if(localStorage.getItem("USER_LOGIN")){
      const { data } = await axios.get(`${GET_DETAIL_USER}${JSON.parse(localStorage.getItem("USER_LOGIN")).data[0]._id}`);
    console.log("data detail");
    console.log(data.data);
    setDetail(data.data);
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

  // danh sach tat ca cac post recommened
  useEffect(() => {
    if (detail.tenGoiYTimKiem != undefined && detail.tenGoiYTimKiem != ""){
      const promise = axios({
        url: GET_DETAIL_POST_BY_TIEU_DE + detail.tenGoiYTimKiem,
        method: "GET",
      });
      promise.then((res) => {
        console.log(res.data);
        setPostRecommenn(res.data.data);
      });
    }
    
  }, [detail]);

  const NopCV = async () => {
      // console.log(userLogin.data[0])
      // console.log(userLogin.data[0]._id)
      const id = detail._id
      const newValues = {"post_id": detailPost._id, "user_id": id}
      console.log(newValues)
      dispatch( await nopCV(newValues))

  }

  // TIM KIEM
  const [search, setSearch] = useState([]);
  const [post, setPost] = useState([]);

  // submit information for search
  const submit = (e) => {
    e.preventDefault();

    if (search) {
      const promise = axios({
        url: GET_DETAIL_POST_BY_TIEU_DE + search,
        method: "GET",
      });
      promise.then((res) => {
        console.log(res.data.data[0]);
        setPost(res.data.data);
      });

      setSearch("");
    }
  };
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="">
      {/* <div className="mb-4">
        <Header />
      </div> */}

      {/* khung tim kiem công việc */}
      <div className="nutXanhXanh" style={{padding:"80px"}}>
        <h2 className="text-white" style={{width:"70%", margin:"0 auto"}}>Tìm kiếm công việc ước mơ</h2>
      <form className="d-flex my-4 khungHinh" onSubmit={submit} style={{width:"70%", margin:"0 auto"}}>
          <input
            className="form-control me-2 search"
            type="search"
            placeholder="Tìm kiếm việc làm, kĩ năng"
            aria-label="Search"
            value={search}
            onChange={handleChange}
            style={{ border: "none" }}
          />
          <button className="btn btn-success text-white" type="submit">
            Search
          </button>
        </form>
      </div>

      {/* việc làm tốt nhất */}

      <h3 className="bg-white p-4 mx-4" style={{ margin: "0" }}>
        {allpost.length} việc làm tốt nhất cho bạn
      </h3>
      <div className="d-flex">
        <div
          className="ml-4 py-4 border bg-white w-50 khungHinh"
          style={{ height: "450px", overflow: "auto",}}
        >
          {post.length > 0 ?<i className="text-danger" style={{fontWeight:"500"}}>{`Tìm thấy ${post.length} kết quả`}</i>:""}
          {post?.map((p) => (
            <div className="borderRed">
              <Post {...p} key={p._id} />  
            </div>
          ))}
          {allpost?.map((p) => (
            <Post {...p} key={p._id} />
          ))}
          

          
        </div>

        <div
          className="mr-4 py-4 border bg-white w-50 khungHinh"
          style={{ height: "450px", overflow: "auto",}}
        >
          <h1 className="text-center mauXanh">{detailPost.tieuDe}</h1>
          {detail.imageUrl?(detail.loaiUser[0] === "user" ? <button onClick={NopCV} className="w-100 btn btn-danger m-4">Apply Now</button> 
          : <button className="w-100 btn btn-danger m-4" disabled>Apply Now</button> ):""}
          
          <div className="mx-4">{ReactHtmlParser(detailPost.noiDung)}</div>
        </div>
      </div>

      {postRecommenn.length > 0 && detail.loaiUser[0] === "user"?
          <div style={{marginTop: "50px"}}>
            <i className="ml-3 text-danger" style={{fontSize:"20px", fontWeight:"500"}}>
            {`Chúng tôi tìm thấy ${postRecommenn.length} công việc phù hợp với thông tin CV của bạn`}
            </i>
            <div className="d-flex mt-4">
          <div
            className="ml-4 py-4 border bg-white w-50 khungHinh"
            style={{ height: "450px", overflow: "auto",}}
          >
            {post.length > 0 ?<i className="text-danger" style={{fontWeight:"500"}}>{`Tìm thấy ${post.length} kết quả`}</i>:""}
            {postRecommenn?.map((p) => (
              <div className="borderRed">
                <Post {...p} key={p._id} />  
              </div>
            ))}
          </div>
          <div
            className="mr-4 py-4 border bg-white w-50 khungHinh"
            style={{ height: "450px", overflow: "auto",}}
          >
            <h1 className="text-center mauXanh">{detailPost.tieuDe}</h1>
            {detail.imageUrl?(detail.loaiUser[0] === "user" ? <button onClick={NopCV} className="w-100 btn btn-danger m-4">Apply Now</button> 
            : <button className="w-100 btn btn-danger m-4" disabled>Apply Now</button> ):""}
            
            <div className="mx-4">{ReactHtmlParser(detailPost.noiDung)}</div>
          </div>
        </div>
  
          </div>  
      :""}

      
      <div className="mt-4">.</div>

      {/* việc làm gợi ý */}
    </div>
  );
}
