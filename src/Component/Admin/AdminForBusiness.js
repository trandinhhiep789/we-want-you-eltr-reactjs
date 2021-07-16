import React, { useState, useEffect } from "react";
import axios from "axios";
import { GET_LIST_BY_LOAIUSER } from "../../Redux/Const/API";
import Pagination from "./Pagination";
import Business from "./Business";

export default function AdminForBusiness() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(6);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFistPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFistPost, indexOfLastPost);

  useEffect(() => {
    const fetchPost = async () => {
      console.log(localStorage.getItem("ACCESSTOKEN"));
      setLoading(true);

      const res = await axios({
        url: GET_LIST_BY_LOAIUSER + "business",
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
        <i className="fas fa-users mr-4" style={{ fontSize: "55px" }}></i>
        <h4>Danh sách tài khoản doanh nghiệp</h4>
        <i className="text-danger">{`Có tổng cộng ${posts.length} doanh nghiệp`}</i>
      </div>

      <div style={{ overflowX: "auto" }} className="khungHinh ">
        <table className="table table-striped">
          <thead>
            <tr>
              <th style={{ width: "15%" }}>Id</th>
              <th style={{ width: "15%" }}>Doanh nghiệp</th>
              <th style={{ width: "15%" }}>Email</th>
              <th style={{ width: "15%" }}>Password</th>
              <th style={{ width: "15%" }}>Địa chỉ</th>
              <th style={{ width: "10%" }}>Thao tác</th>
            </tr>
          </thead>
          <tbody>
            <Business posts={currentPosts} loading={loading} />
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
