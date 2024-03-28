import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export function Register({ onClose }: { onClose: () => void }) {
  return (
    <div className="wrapper_register container rounded-xl conte w-fit text-black">
      <div className="box_register">
        <div className="header_from flex items-center">
          <h2 className="flex-1">Đăng ký hội viên</h2>
          <FontAwesomeIcon
            icon={faXmark}
            className="header_from--icon"
            onClick={onClose}
          />
        </div>
        <form>
          <div className="from-item">
            <label htmlFor="tk_daily" className="text-xs from-item__label">
              Tài khoản đại lý
            </label>
            <input
              type="text"
              className="from-item__input"
              placeholder="Bỏ qua nếu không có đại lý giới thiệu"
            />
          </div>
          <div className="from-item">
            <label htmlFor="tk_daily" className="text-xs from-item__label">
              Tài khoản{" "}
            </label>
            <input
              type="text"
              className="from-item__input"
              placeholder="4 ~ 14 ký tự chữ và số"
            />
          </div>
          <div className="from-item">
            <label htmlFor="tk_daily" className="text-xs from-item__label">
              Họ và tên
            </label>
            <input
              type="text"
              className="from-item__input"
              placeholder="Nhập tối đa 30 ký tự"
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
          <div className="from-item">
            <label htmlFor="tk_daily" className="text-xs from-item__label">
              SĐT
            </label>
            <input
              type="text"
              className="from-item__input"
              placeholder="10 chữ số"
            />
          </div>
          <button className="btn-confirm">Xác nhận</button>
        </form>
      </div>
    </div>
  );
}
