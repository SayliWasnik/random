import { useEffect, useRef } from "react";

const useCanvas = (draw, reload, animate, options = {}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext(options.context || "2d");
    let frameCount = 0;
    let requestAnimationId;
    const render = (ctx) => {
      ctx.save();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      draw(ctx, frameCount);
      ctx.restore();
      frameCount++;
      if (animate) {
        requestAnimationId = requestAnimationFrame(() => render(ctx));
      }
    };
    render(context);

    return () => {
      cancelAnimationFrame(requestAnimationId);
    };
  }, [draw, reload]);
  return canvasRef;
};

export default useCanvas;
