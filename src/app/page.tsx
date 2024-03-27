import { Sliders } from "@/component/Slider";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
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
