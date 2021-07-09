import React from "react";
import { Image as Image1 } from "cloudinary-react";
import { Image as Image2 } from "antd";
import { useDispatch, useSelector } from "react-redux";

import {luuDetailPost} from "../../Redux/Action/QuanLyNguoiDungActions"

import "antd/dist/antd.css";

export default function Post(p) {

  const dispatch = useDispatch()
    
  const detaiPostBeside = async () => {
    console.log(p);
    const detail = {...p}
     dispatch (await luuDetailPost(detail))
  };

  return (
    <div className="px-4" >
      <div className="w-100 borderleft" onClick={detaiPostBeside}>
        <div className="d-flex  border my-2 ">
          <div className="m-4" style={{ width: "10%" }}>
            {p.imagePost ? (
              <Image2
                className=""
                style={{ borderRadius: "50%", width: "50px" }}
                src={p.imagePost}
              >
                <Image1
                  style={{ borderRadius: "50%", width: "50px" }}
                  cloudName="dkhhh96tt"
                  publicId={p.imagePost}
                />
              </Image2>
            ) : (
              <img
                style={{ borderRadius: "50%" }}
                src="https://picsum.photos/50/50"
                alt="logocty"
              />
            )}
          </div>
          <div className="m-4" style={{ width: "90%" }}>
            <h6>{p.tieuDe}</h6>
            <div
              className="d-flex "
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <div>
                <i className="mr-3">{p.luong}</i>
                <i>{p.diaChi}</i>
              </div>
              <div>
                <i className="text-right">{p.create_date.slice(0, 10)}</i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
