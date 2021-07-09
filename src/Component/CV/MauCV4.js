import React from "react";

export default function MauCV4() {
  return (
    <div className="container" style={{width:"100%"}}>
      <div className="mauCV4 my-4 khungHinh">
        <div>
          <div className="headerCV4">
            <div className="avatarAndName">
              <img
                style={{ borderRadius: "30px" }}
                src="https://picsum.photos/id/1/200/200"
                alt="avataCv"
              />
              <div>
                <h1>Nguyên Thị Mai</h1>
                <i>Nhân viên chăm sóc khách hàng</i>
              </div>
            </div>
          </div>

          <div className="headerMiniCV4 p-4">
            <span>
              <i className="fas fa-map-marker-alt mx-3"></i> Số 1 đường Cầu
              Giấy, Hà Nội
            </span>
            <span>
              {" "}
              <i className="far fa-envelope mx-3"></i> hotro@gmail.vn
            </span>
            <span>
              <i className="fas fa-phone mx-3"></i>(024) 6680 5588
            </span>
          </div>
        </div>
        <div>
          <div className="m-4">
            <h4 className="mauXanh">MỤC TIÊU NGHỀ NGHIỆP</h4>
            <div className="d-flex" style={{ justifyContent: "space-between" }}>
              <span style={{}}>
                Áp dụng những kinh nghiệm về kỹ năng bán hàng và sự hiểu biết về
                thị trường để trở thành một nhân viên bán hàng chuyên nghiệp,
                mang đến nhiều giá trị cho khách hàng. Từ đó giúp Công ty tăng
                số lượng khách hàng và mở rộng tập khách hàng.
              </span>
            </div>
          </div>

          <div className="d-flex">
            <div className="m-4" style={{ width: "50%" }}>
              <div>
                <h4 className="mauXanh">HỌC VẤN</h4>
                <span>10/2010 - 05/2014</span>
                <br></br>
                <span>
                  Đại học TOPCV - Quản trị Doanh nghiệp Tốt nghiệp loại Giỏi,
                  điểm trung bình 8.0
                </span>
              </div>

              <div className="my-4">
                <h4 className="mauXanh">HOẠT ĐỘNG</h4>
                <span>10/2010 - 05/2014</span>
                <br></br>
                <span>
                  Đại học TOPCV - Quản trị Doanh nghiệp Tốt nghiệp loại Giỏi,
                  điểm trung bình 8.0
                </span>
              </div>

              <div className="my-4">
                <h4 className="mauXanh">KĨ NĂNG</h4>
                <span>10/2010 - 05/2014</span>
                <br></br>
                <span>
                  Đại học TOPCV - Quản trị Doanh nghiệp Tốt nghiệp loại Giỏi,
                  điểm trung bình 8.0
                </span>
              </div>
              <div className="my-4">
                <h4 className="mauXanh">SỞ THÍCH</h4>
                <span>10/2010 - 05/2014</span>
                <br></br>
                <span>
                  Đại học TOPCV - Quản trị Doanh nghiệp Tốt nghiệp loại Giỏi,
                  điểm trung bình 8.0
                </span>
              </div>

            </div>
            <div style={{ width: "50%" }}>
            <div className="my-4">
                <h4 className="mauXanh">KINH NGHIỆM LÀM VIỆC</h4>
                <i>10/2010 - 05/2014</i>
                
                <p>
                  Đại học TOPCV - Quản trị Doanh nghiệp Tốt nghiệp loại Giỏi,
                  điểm trung bình 8.0
                </p>
                
                <i>10/2010 - 05/2014</i>
                
                <p>
                  Đại học TOPCV - Quản trị Doanh nghiệp Tốt nghiệp loại Giỏi,
                  điểm trung bình 8.0
                </p>

                <i>10/2010 - 05/2014</i>
                
                <p>
                  Đại học TOPCV - Quản trị Doanh nghiệp Tốt nghiệp loại Giỏi,
                  điểm trung bình 8.0
                </p>

              </div>
            
              

              <div className="my-4">
                <h4 className="mauXanh">NGƯỜI THAM CHIẾU</h4>
                <span>10/2010 - 05/2014</span>
                <br></br>
                <span>
                  Đại học TOPCV - Quản trị Doanh nghiệp Tốt nghiệp loại Giỏi,
                  điểm trung bình 8.0
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
