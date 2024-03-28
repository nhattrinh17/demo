import "./styles.css";

export function Sliders(): JSX.Element {
  // let [indexSlider, setIndexSlider] = useState(0);
  // const indexSlider = useRef(0);
  const indexSlider = 0;

  const images = [
    "https://images.ku6111.net/FileSystem/Images/047c15022851413e81ed0de130c3ce55.jpg",
    "https://images.ku6111.net/FileSystem/Images/ef6b16b31177491a9ef693f3710647b7.jpg",
    "https://images.ku6111.net/FileSystem/Images/4bc0457503eb482c88b1e39fedf0c049.jpg",
    "https://images.ku6111.net/FileSystem/Images/56e743190c884eb494e1685cccce15fe.jpg",
  ];

  // useEffect(() => {
  //   const nextSlider = setInterval(() => {
  //     const listSlider = [...document.querySelectorAll(".slider-item")];
  //     if (listSlider) {
  //       listSlider[indexSlider.current].classList.toggle("slider-active");
  //       if (indexSlider.current == images.length - 1) {
  //         indexSlider.current = 0;
  //         // setIndexSlider(0);
  //       } else {
  //         indexSlider.current = indexSlider.current + 1;
  //         // setIndexSlider((pre) => ++pre);
  //       }
  //       listSlider[indexSlider.current].classList.toggle("slider-active");
  //     }
  //   }, 3000);

  //   return () => {
  //     clearInterval(nextSlider);
  //   };
  // });

  return (
    <div className="sliders">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          className={
            indexSlider == index ? "slider-active slider-item" : "slider-item"
          }
        />
      ))}
    </div>
  );
}
