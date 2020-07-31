import React from "react";
import "./style.css";


const gridContainerStyle = {
  display: "grid",
  gridTemplateColumns: "auto auto auto",
  padding: "10px"
}

const gridItemStyle = {
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  textAlign: "center"
}

export const List = ({ children }) => (
  <div className="gridContainer" style={gridContainerStyle}>
    {children}
  </div>
);

export function ListItem({ children }) {
  return <div style={gridItemStyle}>{children}</div>;
}