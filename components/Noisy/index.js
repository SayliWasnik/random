import { math, random } from "canvas-sketch-util";
import React, { useState } from "react";
import Layout from "../../hoc/Layout";
import Canvas from "../Canvas";
import ControlPanel from "../ControlPanel";

const canvasWidth = "600";
const canvasHeight = "600";

const PARAMS = {
  cols: 10,
  rows: 10,
  scaleMin: 1,
  scaleMax: 30,
  freq: 0.001,
  amp: 0.2,
  frame: 0,
  animate: true,
  lineCap: "butt",
};
const allParams = [
  {
    title: "Grid",
    params: [
      {
        name: "lineCap",
        options: {
          options: {
            butt: "butt",
            round: "round",
            square: "square",
          },
        },
      },
      {
        name: "cols",
        options: {
          min: 2,
          max: 50,
          step: 1,
        },
      },
      {
        name: "rows",
        options: {
          min: 2,
          max: 50,
          step: 1,
        },
      },
      {
        name: "scaleMin",
        options: {
          min: 1,
          max: 100,
        },
      },
      {
        name: "scaleMax",
        options: {
          min: 1,
          max: 100,
        },
      },
    ],
  },
  {
    title: "Noise",
    params: [
      {
        name: "freq",
        options: {
          min: -0.01,
          max: 0.001,
        },
      },
      {
        name: "amp",
        options: {
          min: 0,
          max: 1,
        },
      },
      {
        name: "animate",
      },
      {
        name: "frame",
        options: {
          min: 0,
          max: 999,
        },
      },
    ],
  },
];

const Noisy = () => {
  const [reload, setReload] = useState(false);
  const draw = (ctx, frameCount) => {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    const cols = PARAMS.cols;
    const rows = PARAMS.rows;
    const numCells = cols * rows;

    const gridw = canvasWidth * 0.8;
    const gridh = canvasHeight * 0.8;
    const cellw = gridw / cols;
    const cellh = gridh / rows;
    const margx = (canvasWidth - gridw) * 0.5;
    const margy = (canvasHeight - gridh) * 0.5;

    for (let i = 0; i < numCells; i++) {
      const col = i % cols;
      const row = Math.floor(i / cols);

      const x = col * cellw;
      const y = row * cellh;
      const w = cellw * 0.8;
      const h = cellh * 0.8;

      const f = PARAMS.animate ? frameCount : PARAMS.frame;

      const n = random.noise3D(x, y, f * 10, PARAMS.freq);
      const angle = n * Math.PI * PARAMS.amp;
      const scale = math.mapRange(n, -1, 1, PARAMS.scaleMin, PARAMS.scaleMax);

      ctx.save();
      ctx.translate(x, y);
      ctx.translate(margx, margy);
      ctx.translate(cellw * 0.5, cellh * 0.5);
      ctx.rotate(angle);

      ctx.lineWidth = scale;
      ctx.lineCap = PARAMS.lineCap;
      ctx.beginPath();
      ctx.moveTo(w * -0.5, 0);
      ctx.lineTo(w * 0.5, 0);
      ctx.stroke();

      ctx.restore();
    }
  };
  const options = {};
  return (
    <Layout>
      <ControlPanel show={true} allParams={allParams} PARAMS={PARAMS} />
      <Canvas
        draw={draw}
        options={options}
        width={canvasWidth}
        height={canvasHeight}
        reload={reload}
        animate={true}
      />
    </Layout>
  );
};

export default Noisy;
