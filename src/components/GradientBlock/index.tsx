import React, { FC } from "react";
import "./index.less";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  // 渐变块长度
  gradientWidth?: string;
  // 渐变方向
  gradientDirection: string;
  // 渐变色
  gradientColor: string | undefined;
  // 渐变背景色
  gradientBgColor: string;
  className?: string;
}

const GradientBlock: FC<Props> = (props: Props) => {
  const {
    className,
    gradientWidth,
    gradientColor,
    gradientDirection,
    gradientBgColor = "#000",
  } = props;

  const gradientStyles: React.CSSProperties = {
    width: gradientWidth,
    background: `linear-gradient(${gradientDirection}, ${gradientColor} 0%, ${gradientBgColor} 100%)`,
  };
  return <div className={`overlay ${className}`} style={gradientStyles}></div>;
};

export default GradientBlock;
