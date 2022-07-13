import React from "react";
import { useRef } from "react";

export default function AddPhoneForm() {
    const TITLE = 'Add a new Phone'
  const userLoginRef = useRef({
    taiKhoan: "",
    matKhau: "",
  });
  const handleChange = (event) => {
    let { id, value } = event.target;
    userLoginRef.current[id] = value;
    console.log(userLoginRef.current);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    //Gọi hàm api action => trả về 1 hàm action thunk

    //dispatch action thực thi
  };
  return (
    <div>
      <form className="container" onSubmit={handleSubmit}>
        <h3>Đăng nhập</h3>
        <div className="form-group">
          <p>Tài khoản</p>
          <input
            className="form-control"
            id="taiKhoan"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <p>Mật khẩu</p>
          <input
            className="form-control"
            id="matKhau"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-success" type="submit">
            Đăng nhập
          </button>
        </div>
      </form>
    </div>
  );
}
