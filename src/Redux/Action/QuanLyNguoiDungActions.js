import axios from "axios";
import Swal from "sweetalert2";
import { history } from "../../Util/history";
import {DANG_NHAP, CAPNHAT_THONGTIN, DANG_BAI} from "../Const/API"

export const dangNhapApiAction = async (userLogin) => {
    return async (dispatch) => {
      try {
        let result = await axios({
          url: DANG_NHAP,
          method: "POST",
          data: userLogin,
        });
  
        console.log(result);
  
        if (result.data.status === "SUCCESS") {
          localStorage.setItem("USER_LOGIN", JSON.stringify(result.data));
        //   localStorage.setItem("ACCESSTOKEN", result.data.token);
          localStorage.setItem("ACCOUNTLOGIN", JSON.stringify(userLogin));
  
          if (result.data.data[0].loaiUser[0] == "admin") {
            history.push('/')
            dispatch({
              type: "DANG_NHAP",
              data: result.data,
              account: userLogin,
            });
  
            Swal.fire(
              "Thông báo",
              `Xin chào ${result.data.data[0].tenUser}`,
              "success"
            );
          } else {
            history.push("/header");
            dispatch({
              type: "DANG_NHAP",
              data: result.data,
              account: userLogin,
            });
            Swal.fire(
              "Thông báo",
              `Xin chào ${result.data.data[0].tenUser}`,
              "success"
            );
          }
        }else{
            Swal.fire("Thông báo", `${result.data.message}`,"error")
            return
        }
      } catch (err) {
        Swal.fire("Thông báo", err, "error");
      }
    };
};

export const suaUrl_User = async (imageUrl) => {
  return {
    type: "SUA_URL_USER",
    imageUrl: imageUrl,
  };
}

export const suaUrl_Cty = async (imageUrl) => {
  return {
    type: "SUA_URL_CTY",
    imageUrl: imageUrl,
  };
}

export const suaUrlCover_Cty = async (imageUrl) => {
  return {
    type: "SUA_URL_COVER_CTY",
    imageUrl: imageUrl,
  };
}

export const capNhatThongTinAction = async (userCapNhat) => {
  return async (dispatch) => {
    console.log(userCapNhat)
    try {
      let result = await axios({
        url: CAPNHAT_THONGTIN,
        method: "PUT",
        data: userCapNhat,
      });
      console.log(result.data);
      Swal.fire("Thông báo", "Cập nhật thành công", "success");
      history.push("/quanlycvcanhan");
    } catch (err) {
      console.log(err)
      Swal.fire("Thông báo", err, "error");
    }
  };
};

export const capNhatThongTinCtyAction = async (userCapNhat) => {
  return async (dispatch) => {
    console.log(userCapNhat)
    try {
      let result = await axios({
        url: CAPNHAT_THONGTIN,
        method: "PUT",
        data: userCapNhat,
      });
      console.log(result.data);
      Swal.fire("Thông báo", "Cập nhật thành công", "success");
      history.push("/trangcanhancty");
    } catch (err) {
      console.log(err)
      Swal.fire("Thông báo", err, "error");
    }
  };
};

export const dangBaiAction = async (baiDang) => {
  return async (dispatch) => {
    console.log(baiDang)
    try {
      let result = await axios({
        url: DANG_BAI,
        method: "POST",
        data: baiDang,
      });
      console.log(result.data);
      Swal.fire("Thông báo", "Đăng bài thành công", "success");
      // history.push("/trangcanhancty");
    } catch (err) {
      console.log(err)
      Swal.fire("Thông báo", err, "error");
    }
  };
};

export const luuDetailPost = async (detail) => {
  return {
    type: "LUU_DETAIL",
    detail: detail,
  };
}