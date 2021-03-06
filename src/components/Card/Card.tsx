import React, { FC, MouseEventHandler, useEffect } from "react";
import styled from "styled-components";
import { ElementProps } from "../interfaces";

const StyledCard = styled.div<ElementProps>`
  line-height: 1;
  font-size: 16px;
  cursor: pointer;
  font-weight: 700;
  font-weight: bold;
  border-radius: ${(props) => (props.rounded ? props.rounded : 0)}px;
  position: ${(props) => props.position && props.position};
  width: ${(props) => (props.width ? `${props.width}px` : "100%")};
  border: 0;
  color: ${(props) => (props.color ? props.color : "#000")};
  padding: ${(props) =>
    props.size === "small"
      ? "10px"
      : props.size === "medium"
      ? "16px"
      : "22px"};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#18A0FB"};
  box-shadow: ${(props) =>
    props.elevation
      ? `0px 1px 50px rgba(0, 0, 0, 0.${props.elevation})`
      : `0px 1px 50px rgba(0, 0, 0, 0.0)`};
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};
  position: ${(props) => props.position && props.position};
  padding: ${(props) => props.sx?.padding && props.sx?.padding}px;
  padding-left: ${(props) => props.sx?.pl && props.sx?.pl}px;
  padding-right: ${(props) => props.sx?.pr && props.sx?.pr}px;
  padding-top: ${(props) => props.sx?.pt && props.sx?.pt}px;
  padding-bottom: ${(props) => props.sx?.pb && props.sx?.pb}px;
  border-radius: ${(props) => (props.rounded ? props.rounded : 10)}px;
  color: ${(props) => (props.color ? props.color : "#000")};
  background: ${(props) =>
    props.backgroundColor || props.sx?.backgroundColor
      ? props.backgroundColor || props.sx?.backgroundColor
      : "transparent"};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : `flex-start`};
  align-items: ${(props) => (props.alignItems ? props.alignItems : `inherit`)};
  .ripple {
    background-color: #aaa;
    border-radius: 50%;
    pointer-events: none;
    position: absolute;
    transform: scale(0);
  }
  .start {
    transform: scale(0.2);
  }
  .active {
    transform: scale(2);
    transition: transform 700ms, opacity 700ms;
    opacity: 0.2;
  }
`;

const Card: FC<ElementProps> = ({
  size,
  rounded,
  wrap,
  style,
  width,
  height,
  position,
  backgroundColor,
  alignItems,
  className,
  justifyContent,
  elevation,
  href,
  children,
  type,
  ...props
}) => {
  return (
    <StyledCard
      size={size}
      wrap={wrap}
      style={style}
      width={width}
      height={height}
      rounded={rounded}
      position={position}
      elevation={elevation}
      className={className}
      alignItems={alignItems}
      justifyContent={justifyContent}
      backgroundColor={backgroundColor}
      {...props}
    >
      {children}
    </StyledCard>
  );
};

export default Card;
