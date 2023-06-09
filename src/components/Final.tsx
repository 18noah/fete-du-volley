import React, { FC, Suspense, useState } from "react";
import { MatchSheet } from "./MatchSheet";
import Loading from "./Loading";

const Final: FC = () => {
  const [activeTab, setActiveTab] = useState("phase1");

  const handleTabChange = (event: React.MouseEvent<HTMLLIElement>) => {
    event.preventDefault();

    const button: HTMLLIElement = event.currentTarget;
    setActiveTab(button.id);
  };

  return (
    <div aria-label="index" className="container">
      <menu className="tab-nav">
        <li
          className={activeTab === "phase1" ? "selected" : ""}
          onClick={handleTabChange}
          id="phase1"
        >
          Phase 1
        </li>
        <li
          className={activeTab === "phase2" ? "selected" : ""}
          onClick={handleTabChange}
          id="phase2"
        >
          Phase 2
        </li>
        <li
          className={activeTab === "phase3" ? "selected" : ""}
          onClick={handleTabChange}
          id="phase3"
        >
          Phase 3
        </li>
      </menu>

      <div aria-label="tab" className="container">
        <Suspense fallback={<Loading />}>
          <MatchSheet id={activeTab} />
        </Suspense>
      </div>
    </div>
  );
};

export default Final;

