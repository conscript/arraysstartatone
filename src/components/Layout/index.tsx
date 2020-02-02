import Footer from "./Footer";
import Header from "./Header";
import React, { PropsWithChildren } from "react";
import "./index.scss";

export interface LayoutProps {
  dark?: boolean;
  className?: string;
}

const Layout: React.FC<LayoutProps> = (
  props: PropsWithChildren<LayoutProps>
) => {
  return (
    <div className={`layout ${props.dark ? "dark" : ""}`}>
      <Header dark={props.dark ?? false} />
      <main className={`${props.className}`}>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
