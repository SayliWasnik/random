import React, { useEffect, useRef } from "react";
import useCanvas from "../../hooks/useCanvas";

const Canvas = (props) => {
  const { draw, reload, animate, ...rest } = props;
  const canvasRef = useCanvas(draw, reload, animate);

  return <canvas ref={canvasRef} {...rest} />;
};

export default Canvas;
