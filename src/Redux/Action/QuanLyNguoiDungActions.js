import axios from "axios";
import Swal from "sweetalert2";
import { history } from "../../Util/history";
import {DANG_NHAP, DANG_KI, CAPNHAT_THONGTIN, DANG_BAI, NOP_CV} from "../Const/API"

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
  
          if (result.data.data[0].loaiUser[0] === "business") {
            
            await dispatch({
              type: "DANG_NHAP",
              data: result.data,
              account: userLogin,
            });
  
            Swal.fire(
              "Thông báo",
              `Xin chào ${result.data.data[0].tenUser}`,
              "success"
            );
            history.push('/')
          } else {
            await dispatch({
              type: "DANG_NHAP",
              data: result.data,
              account: userLogin,
            });
            Swal.fire(
              "Thông báo",
              `Xin chào ${result.data.data[0].tenUser}`,
              "success"
            );
            
            history.push("/");
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

export const dangKyApiAction = async (userSignup) => {
  return async (dispatch) => {
    console.log("userSignup");
    console.log(userSignup);
    try {
      let result = await axios({
        url: DANG_KI,
        method: "POST",
        data: userSignup,
      });
      console.log(result.data.message);
      Swal.fire("Thông báo", "Đăng ký thành công", "success");
      history.push("/signin");
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
      history.push("/trangcanhancty");
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

export const nopCV = async (cv_id) => {
  return async (dispatch) => {
    console.log(cv_id)
    try {
      let result = await axios({
        url: NOP_CV,
        method: "PUT",
        data: cv_id,
      });
      console.log(result.data);
      Swal.fire("Thông báo", "Nộp cv thành công", "success");
      // history.push("/quanlycvcanhan");
    } catch (err) {
      console.log(err)
      Swal.fire("Thông báo", err, "error");
    }
  };
};