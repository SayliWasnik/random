import { useEffect, useState } from "react";
const Tweakpane = require("tweakpane");

const ControlPanel = ({ show, PARAMS, allParams }) => {
  const [pane, setPane] = useState(null);

  const createPane = () => {
    let folder;
    {
      allParams?.map((folderItem) => {
        folder = pane.addFolder({ title: folderItem.title });
        folderItem.params?.map((item) => {
          folder.addInput(PARAMS, item.name, item.options);
        });
      });
    }
  };
  useEffect(() => {
    if (show) {
      let temp = new Tweakpane.Pane();
      setPane(temp);
    }
  }, [show]);

  useEffect(() => {
    if (pane) {
      createPane();
    }
  }, [pane]);

  return null;
};

export default ControlPanel;
