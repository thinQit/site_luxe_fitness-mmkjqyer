"use client";
import * as React from "react";

export default function Footer({ children, className, ...props }: any) {
  return React.createElement("div", { className: className, ...props }, children);
}
