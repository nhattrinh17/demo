import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export function Login() {
  return (
    <div className="wrapper_login container rounded-xl conte w-fit text-black">
      <div className="box_register">
        <div className="header_from flex items-center">
          <h2 className="flex-1">Đăng nhập hội viên</h2>
          <FontAwesomeIcon icon={faXmark} className="header_from--icon" />
        </div>
        <form>
          <div className="from-item">
            <label htmlFor="tk_daily" className="text-xs from-item__label">
              Tài khoản{" "}
            </label>
            <input
              type="text"
              className="from-item__input"
              placeholder="Tài khoản"
            />
          </div>

          <div className="from-item">
            <label htmlFor="tk_daily" className="text-xs from-item__label">
              Mật khẩu
            </label>
            <input
              type="text"
              className="from-item__input"
              placeholder="6 ~ 10 ký tự chữ và số"
            />
          </div>

          <button className="btn-confirm">Đăng nhập</button>
        </form>
      </div>
    </div>
  );
}
