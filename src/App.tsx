import Marquee from "./components/Marquee";
import "./App.less";

import logo1 from "./assets/imgs/1.png";
import logo2 from "./assets/imgs/2.png";
import logo3 from "./assets/imgs/3.png";
import logo4 from "./assets/imgs/4.png";
import logo5 from "./assets/imgs/5.png";
import logo6 from "./assets/imgs/6.png";
import logo7 from "./assets/imgs/7.png";

function App() {
  const imgLists = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];
  const textLists = [
    "你好世界",
    "Hello World",
    "Ciao mondo",
    "こんにちは世",
    "헬로 월드",
    "Hello Mundo",
    "བོད་སྐད།或བོད་ཀྱི་སྐད་ཡིག།",
  ];
  return (
    <div className="app-wrapper">
      <h1>React Marquee</h1>
      <p>一款轻量级的跑马灯组件</p>
      <h2>鸣谢</h2>
      <Marquee
        className="Outsize"
        gradientColor="#F8FBFD"
        pauseOnHover
        startPlay
      >
        <div className="img-box">
          {imgLists.map((item: string, index: number) => {
            return <img src={item} alt="" key={index} />;
          })}
        </div>
      </Marquee>
      <h2>支持多国语言</h2>
      <Marquee
        className="Outsize"
        direction="right"
        gradientColor="#F8FBFD"
        pauseOnHover
        startPlay
        speed={80}
      >
        <div className="wrapper">
          {textLists.map((item: string, index: number) => {
            return (
              <div className="item" key={index}>
                {item}
              </div>
            );
          })}
        </div>
      </Marquee>
    </div>
  );
}

export default App;
