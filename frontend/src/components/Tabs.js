import React, {useState} from "react";
import "../components/Tabs.css";
import Report from "./result/Report.js";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}>
          Report
        </button>

        <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}>
          Review
        </button>

        <button className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}>
          Specification
        </button>
      </div>


      <div className="content-tabs">
        <div className={toggleState === 1 ? "content  active-content" : "content"}>
          {/* <p>Report Content Here</p> */}
          <Report></Report>
        </div>

        <div className={toggleState === 2 ? "content  active-content" : "content"}>
          <p>Review Content Here</p>
        </div>

        <div className={toggleState === 3 ? "content  active-content" : "content"}>
          <p>Specification Content Here</p>
        </div>
      </div>
    </div>
  );
}

export default Tabs;