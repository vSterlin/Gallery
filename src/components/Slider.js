import React, { useState, useEffect } from "react";

import SliderList from "./SliderList";

const Slider = () => {

  const [width, setWidth] = useState(null);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

  return (
    <>
      {typeof window !== `undefined` && width <= 768 ? (
        <SliderList slides={1} />
      ) : (
        <SliderList slides={3} />
      )}
    </>
  );
};

export default Slider;
