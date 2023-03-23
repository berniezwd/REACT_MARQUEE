import { CSSProperties, FC, useEffect, useRef, useState } from "react";
import "./index.less";
import GiadientBlock from "../GradientBlock/index";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  // 是否开始播放
  startPlay?: boolean;
  // 播放速度
  speed?: number;
  // 动画延迟
  delay?: CSSProperties["animationDelay"];
  // 播放方向
  direction?: "left" | "right";
  // 渐变色
  gradientColor?: string;
  // 渐变宽度
  gradientWidth?: string;
  // 鼠标悬停时是否暂停
  pauseOnHover?: boolean;
}

const Marquee: FC<Props> = (props: Props) => {
  const {
    startPlay = true,
    speed = 20,
    delay = "0s",
    direction = "left",
    gradientColor,
    gradientWidth = "200px",
    pauseOnHover,
    children,
    className,
  } = props;

  const [contentWidth, setContentWidth] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (startPlay && contentRef.current) {
      setContentWidth(contentRef.current.getBoundingClientRect().width);
    }
  }, [startPlay]);

  const contentStyles = () => {
    return {
      animationDelay: delay,
      animationDirection: direction === "right" ? "reverse" : "",
      animationDuration: `${contentWidth / speed}s`,
    } as CSSProperties;
  };

  // 鼠标悬停时是否暂停
  const isPauseOnHover = pauseOnHover ? "pauseOnHover" : "";

  // 左渐变色块
  const gradientBlock1 = {
    className: "leftOverlay",
    gradientWidth: gradientWidth,
    gradientDirection: "to right",
    gradientColor: gradientColor,
    gradientBgColor: "rgba(255, 255, 255, 0)",
  };
  // 右渐变色块
  const gradientBlock2 = {
    className: "rightOverlay",
    gradientWidth: gradientWidth,
    gradientDirection: "270deg",
    gradientColor: gradientColor,
    gradientBgColor: "rgba(255, 255, 255, 0)",
  };

  return (
    <div className={`marquee ${className} ${isPauseOnHover}`}>
      <div className="content" ref={contentRef} style={contentStyles()}>
        {children}
      </div>
      <div className="content" style={contentStyles()}>
        {children}
      </div>

      {gradientColor && (
        <>
          <GiadientBlock {...gradientBlock1}></GiadientBlock>
          <GiadientBlock {...gradientBlock2}></GiadientBlock>
        </>
      )}
    </div>
  );
};
export default Marquee;
