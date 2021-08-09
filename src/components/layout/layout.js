import React from "react";
import Header from "../header/header";

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Header />
      {children}
    </React.Fragment>
  );
}
