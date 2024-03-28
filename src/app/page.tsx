"use client";
import { Login } from "@/component/Login";
import { Register } from "@/component/Register";
import { Sliders } from "@/component/Slider";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const time = new Date();
  const [openRegister, setOpenRegister] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  const handleClickRegister = () => {
    setOpenRegister((pre) => !pre);
  };

  const handleClickLogin = () => {
    setOpenLogin((pre) => !pre);
  };

  return (
    <main className="">
      <header>
        <div className="header-top">
          <div className="container flex justify-between margin-left-right items-center h-full">
            <div className="header-top__time">
              {`0${time.getMonth()}-${time.getDate()} ${time.getHours()}:${time.getMinutes()}`}
            </div>
            <div className="header-top__right flex">
              <div
                className="header-top__right__register"
                onClick={handleClickRegister}
              >
                Đăng ký
                <span>+</span>
              </div>
              <div
                className="header-top__right__login"
                onClick={handleClickLogin}
              >
                Đăng nhập
              </div>
            </div>
          </div>
        </div>
        <div className="header-bottom ">
          <div className="container flex margin-left-right items-center justify-between uppercase font-medium text-black">
            <Link href={"/"}>
              <img className="" src="/logo.png" />
            </Link>
            <div className="header-bottom__item text-center flex-1">
              <h3>KU siêu hot</h3>
            </div>
            <div className="header-bottom__item text-center flex-1">
              <h3>THể thao</h3>
            </div>
            <div className="header-bottom__item text-center flex-1">
              <h3>Live casino</h3>
            </div>
            <div className="header-bottom__item text-center flex-1">
              <h3>games</h3>
            </div>
            <div className="header-bottom__item text-center flex-1">
              <h3>Xổ số</h3>
            </div>
            <div className="header-bottom__item text-center flex-1">
              <h3>e-sport</h3>
            </div>
            <div className="header-bottom__item text-center flex-1">
              <h3>bắn cá</h3>
            </div>
            <div className="header-bottom__item text-center flex-1">
              <h3>đối kháng</h3>
            </div>
            <div className="header-bottom__item text-center flex-1">
              <h3>Ưu đãi</h3>
            </div>
          </div>
        </div>
      </header>
      {openRegister && <Register onClose={handleClickRegister} />}
      {openLogin && <Login onClose={handleClickLogin} />}
      <div>
        <Sliders />
        <div className="game-type">
          <div className="flex container margin-left-right justify-between uppercase text-center">
            <div
              className="game__item game__item-1"
              style={{
                background: "url(/icon_indexImg.png) no-repeat -727px -456px;",
              }}
            >
              <span> đối tác laliga</span>
            </div>
            <div
              className="game__item game__item-2"
              style={{
                background: "url(/icon_indexImg.png) no-repeat -97px 11px;",
              }}
            >
              <span> đối tác laliga</span>
            </div>
            <div
              className="game__item game__item-3"
              style={{
                background: "url(/icon_indexImg.png) no-repeat -343px 13px",
              }}
            >
              <span> đối tác laliga</span>
            </div>
            <div
              className="game__item game__item-4"
              style={{
                background: "url(/icon_indexImg.png) no-repeat -506px 8px;",
              }}
            >
              <span> đối tác laliga</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
