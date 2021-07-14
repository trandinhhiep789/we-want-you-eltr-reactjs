import React, { useState, useEffect } from "react";
import axios from "axios";
import {GET_ALL_POST} from "../../Redux/Const/API"
import Pagination from "./Pagination"
import PostAdmin from "./PostAdmin";

export default function AdminPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(6);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFistPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFistPost, indexOfLastPost);

  useEffect(() => {
    const fetchPost = async () => {

      console.log(localStorage.getItem("ACCESSTOKEN") )
      setLoading(true);

      const res = await axios({
        url:GET_ALL_POST,
        method: "GET",
      });

      setPosts(res.data.data);
      setLoading(false);
    };
    fetchPost();
  }, []);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      {/* Danh sách tài khoản công ty */}
      <div className="my-4" style={{ width: "90%", margin: "0 auto" }}>
        <h4>Danh sách các bài đăng tuyển</h4>
        <i className="text-danger">{`Có tổng cộng ${posts.length} bài đăng`}</i>
      </div>

      <div style={{ overflowX: "auto" }} className="khungHinh ">
        <table className="table table-striped">
          <thead>
            <tr>
              <th style={{ width: "20%" }}>Id</th>
              <th style={{ width: "20%" }}>Tiêu đề</th>
              <th style={{ width: "20%" }}>Nội dung</th>
              <th style={{ width: "20%" }}>Id Doanh Nghiệp</th>
              <th style={{ width: "20%" }}>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            <PostAdmin posts={currentPosts} loading={loading} />
          </tbody>
        </table>
      </div>
      <Pagination
        postPerPage={postPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
}
