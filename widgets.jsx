import React from "react";
import ReactDOM from 'react-dom';
import Tabs from './tabs';
import Clock from './clock';

const tabData = [{title: "tab1", content:"first content"},
                {title: "tab2", content: "second content"},
                {title: "tab3", content: "third content"}];

document.addEventListener("DOMContentLoaded", () => {
  const tab = document.getElementById("tab");
  ReactDOM.render(<Tabs tabs={tabData}/>, tab);
  const clock = document.getElementById("clock");
  ReactDOM.render(<Clock />, clock);

});
