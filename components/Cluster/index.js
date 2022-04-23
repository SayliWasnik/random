import { math, random } from "canvas-sketch-util";
import React, { useEffect, useState } from "react";
import Layout from "../../hoc/Layout";
import Canvas from "../Canvas";
import Agent from "./Agent";

const canvasWidth = 600;
const canvasHeight = 600;

const Cluster = () => {
  const [reload, setReload] = useState(false);
  const [allAgents, setAgents] = useState([]);

  useEffect(() => {
    const agents = [];
    for (let i = 0; i < 40; i++) {
      const x = random.range(0, canvasWidth);
      const y = random.range(0, canvasHeight);
      agents.push(new Agent(x, y));
    }
    setAgents(agents);
  }, [reload]);

  const draw = (ctx, frameCount) => {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    for (let i = 0; i < allAgents.length; i++) {
      const agent = allAgents[i];
      for (let j = i + 1; j < allAgents.length; j++) {
        const other = allAgents[j];

        const dist = agent.pos.getDistance(other.pos);

        if (dist > canvasWidth / 4) {
          continue;
        } else if (dist < 150 && dist >= 100) {
          ctx.lineWidth = 1;
        } else if (dist < 100 && dist >= 75) {
          ctx.lineWidth = 2;
        } else if (dist < 75 && dist >= 50) {
          ctx.lineWidth = 3;
        } else if (dist < 50 && dist >= 25) {
          ctx.lineWidth = 4;
        } else {
          ctx.lineWidth = 6;
        }
        // ctx.lineWidth = math.mapRange(dist, 0, canvasWidth / 4, 6, 1);

        ctx.beginPath();
        ctx.moveTo(agent.pos.x, agent.pos.y);
        ctx.lineTo(other.pos.x, other.pos.y);
        ctx.stroke();
      }
    }

    allAgents.forEach((agent) => {
      agent.update();
      agent.draw(ctx);
      agent.bounce(canvasWidth, canvasHeight);
    });
  };
  const options = {};
  return (
    <Layout>
      <Canvas
        draw={draw}
        options={options}
        width={canvasWidth}
        height={canvasHeight}
        reload={allAgents}
        animate={true}
      />
    </Layout>
  );
};

export default Cluster;
