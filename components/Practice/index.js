import React, { useRef, useEffect, useState } from "react";

const canvasWidth = "600";
const canvasHeight = "600"

const Practice = () => {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);
  const [canvasCtx, setCanvasCtx] = useState(null);

  useEffect(() => {
    const currentCanvas = canvasRef.current;
    const context = currentCanvas.getContext("2d");
    setCanvas(currentCanvas);
    setCanvasCtx(context);


  }, []);

  return <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} />;
};

export default Practice;
