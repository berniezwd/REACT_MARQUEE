import { CSSProperties, FC, useEffect, useRef, useState } from "react";
import "./index.less";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  startPlay?: boolean;
  speed?: number;
  delay?: CSSProperties["animationDelay"];
  direction?: "left" | "right";
  gradientColor?: string;
  gradientWidth?: string;
  pauseOnHover?: boolean;
}

const Marquee: FC<Props> = (props: Props) => {
  const {
    startPlay = true,
    speed = 30,
    children,
    className,
    delay = "0s",
    direction = "left",
    gradientColor,
    gradientWidth = "200px",
    pauseOnHover,
  } = props;

  const [contentWidth, setContentWidth] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (startPlay && contentRef.current) {
      setContentWidth(contentRef.current.getBoundingClientRect().width);
    }
  }, [startPlay]);

  const contentStyles = () => {
    console.log(contentWidth / speed);
    return {
      animationDelay: delay,
      animationDirection: direction === "right" ? "reverse" : "",
      animationDuration: `${contentWidth / speed}s`,
    } as CSSProperties;
  };
  console.log("contentStyles", contentStyles);
  return (
    <div
      className={
        `marquee ${className}` + (pauseOnHover ? " pauseOnHover" : " ")
      }
    >
      <div className="content" ref={contentRef} style={contentStyles()}>
        {children}
      </div>
      <div className="content" style={contentStyles()}>
        {children}
      </div>

      {gradientColor && (
        <>
          <div
            className="overlay leftOverlay"
            style={{
              width: gradientWidth,
              background: `linear-gradient(to right, ${gradientColor} 0%, rgba(255, 255, 255, 0) 100%)`,
            }}
          ></div>
          <div
            className="overlay rightOverlay"
            style={{
              width: gradientWidth,
              background: `linear-gradient(270deg, ${gradientColor} 0%, rgba(255, 255, 255, 0) 100%)`,
            }}
          ></div>
        </>
      )}
    </div>
  );
};
export default Marquee;
