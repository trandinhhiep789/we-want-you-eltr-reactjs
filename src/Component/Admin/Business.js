import React from 'react'
import { useDispatch } from "react-redux";
import {xoaNguoiDungAction} from "../../Redux/Action/QuanLyNguoiDungActions"

export default function Business({ posts, loading }) {

    const dispatch = useDispatch();

  if (loading) {
    return (
      <div className="text-center">
        <div className="spinner-border text-danger " role="status"></div>
      </div>
    );
  }

    return (
        <>
      {posts.map((post) => (
        <tr>
          <td>{post._id}</td>
          <td>{post.tenUser}</td>
          <td>{post.email}</td>
          <td>
            <p
              style={{
                width: "167px",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden",
              }}
            >
              {post.passWord}
            </p>
          </td>
          <td><p
              style={{
                width: "167px",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden",
              }}
            >
              {post.diaChi}
            </p></td>
          <td className="d-flex justify-content-center">
            {/* <NavLink
              to={`suanguoidung/${post._id}`}
              style={{ borderRadius: "5px" }}
              className="text-white bg-info p-2"
            >
              Sửa
            </NavLink> */}
            <button className="btn btn-danger" onClick={ async () => {
              dispatch(await xoaNguoiDungAction(post._id));
            }}>Xóa</button>
          </td>
        </tr>
      ))}
    </>
    )
}
