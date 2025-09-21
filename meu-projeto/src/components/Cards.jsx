import React from "react";

export function Card({ children, style }) {
  return (
    <div
      style={{
        borderRadius: 8,
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        backgroundColor: "#fff",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function CardContent({ children, style }) {
  return <div style={{ padding: 16, ...style }}>{children}</div>;
}
