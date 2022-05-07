import { styled } from "@stitches/react";
import React, { useEffect } from "react";
import { fade } from "../style/animation";

export interface IAlert {
  message: string;
  autoDestroy: () => void;
}
const StyleAlert = styled("div", {
  background: "black",
  color: "white",
  fontWeight: "bold",
  textAlign: "center",
  padding: "17px 20px",
  borderRadius: "5px",
  animation: `${fade} 0.25s forwards`,
  animationDelay: "0.75s",
});

function Alert(props: IAlert) {

  useEffect(() => {
    props.autoDestroy();
  }, []);

  return <StyleAlert>{props.message}</StyleAlert>;
}

export default Alert;
