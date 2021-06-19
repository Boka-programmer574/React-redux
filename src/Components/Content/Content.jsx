import React from "react";
import s from "./Content.module.css";
import Page1 from "../MyContent/Page1";


const Content = () => {
  return (
    <div className={s.cont}>
      <div>
        <Page1 />
      </div>
    </div>
  );
};
export default Content;
