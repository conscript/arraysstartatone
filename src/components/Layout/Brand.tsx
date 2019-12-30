import React, { FC } from "react";
import "./Brand.scss";

const Brand: FC = () => (
  <>
    <img
      src=""
      alt="Arrays Start At One Icon"
      className="brand d-inline-block d-md-none align-top"
    />
    <img
      src="/assets/logos/logo.jpg"
      alt="Arrays Start At One Logo"
      className="brand d-none d-md-inline-block align-top"
    />
  </>
);

export default Brand;
