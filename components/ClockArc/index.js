import { math, random } from "canvas-sketch-util";
import React, { useState } from "react";
import Layout from "../../hoc/Layout";
import Canvas from "../Canvas";

const canvasWidth = "600";
const canvasHeight = "600";

const ClockArc = () => {
  const [reload, setReload] = useState(false);
  const draw = (ctx, frameCount) => {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    ctx.fillStyle = "black";
    const cx = canvasWidth * 0.5;
    const cy = canvasHeight * 0.5;
    const w = canvasWidth * 0.01;
    const h = canvasHeight * 0.1;

    let x, y;
    const num = 40;
    const radius = canvasWidth * 0.3;

    for (let i = 0; i < num; i++) {
      const slice = math.degToRad(360 / num);
      const angle = slice * i;
      x = cx + radius * Math.sin(angle);
      y = cy + radius * Math.cos(angle);
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(-angle);
      ctx.scale(random.range(0.1, 2), random.range(0.2, 0.5));

      ctx.beginPath();
      ctx.rect(-w * 0.5, random.range(0, -h * 0.5), w, h);
      ctx.fill();
      ctx.restore();

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(-angle);

      ctx.lineWidth = random.range(5, 20);

      ctx.beginPath();
      ctx.arc(
        0,
        0,
        radius * random.range(0.7, 1.3),
        slice * random.range(1, -8),
        slice * random.range(1, 5)
      );
      ctx.stroke();
      ctx.restore();
    }
  };
  const options = {};
  return (
    <Layout>
      <button
        onClick={() => {
          setReload(!reload);
        }}
      >
        Refresh
      </button>
      <Canvas
        draw={draw}
        options={options}
        width={canvasWidth}
        height={canvasHeight}
        reload={reload}
      />
    </Layout>
  );
};

export default ClockArc;
