import React from "react";
import { MainButton } from "./StyledButton";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
function Button({
  buttonProps,
  textColor,
  fontSize,
  Padding,
  text,
  backgroundColor,
  link,
  borderRdius,
  fontWeight,
  height,
  width,
  icon,
  iconSpacing,
  iconPosition = "before",
  iconSize = "22px",
  border,
}) {
  return (
    <MainButton
      {...buttonProps}
      Padding={Padding}
      backgroundColor={backgroundColor}
      textColor={textColor}
      fontSize={fontSize}
      borderRdius={borderRdius}
      fontWeight={fontWeight}
      height={height}
      width={width}
      border={border}
    >
      {
        <Link
          to={link}
          className="text-decoration-none"
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
        >
          {icon && iconPosition === "before" && (
            <Icon icon={icon} fontSize={iconSize} />
          )}
          {text}
          {icon && iconPosition === "after" && (
            <Icon icon={icon} fontSize={iconSize} />
          )}
        </Link>
      }
    </MainButton>
  );
}

export default Button;
