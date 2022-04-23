import React, { useState } from "react";
import Layout from "../../hoc/Layout";
import Canvas from "../Canvas";

const SqaureGrid = () => {
  const [reload, setReload] = useState(false);
  const draw = (ctx, frameCount) => {
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        let width = ctx.canvas.width * 0.1;
        let height = ctx.canvas.height * 0.1;
        let gap = width * 0.2;
        let off = width * 0.2;
        let x = 100 + (width + gap) * i;
        let y = 100 + (height + gap) * j;

        ctx.lineWidth = width * 0.1;
        ctx.beginPath();
        ctx.rect(x, y, width, height);
        ctx.stroke();

        if (Math.random() > 0.5) {
          ctx.lineWidth = width * 0.1;
          ctx.beginPath();
          ctx.rect(x + off / 2, y + off / 2, width - off, height - off);
          ctx.stroke();
        }
      }
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
        width={600}
        height={600}
        reload={reload}
      />
    </Layout>
  );
};

export default SqaureGrid;
