import React from "react";
import AnimatedCursor from "react-animated-cursor";

export default function Cursor() {
  return (
    <>
      <AnimatedCursor
        innerSize={12}
        outerSize={12}
        color="0, 255, 0"
        outerAlpha={0.3}
        innerScale={0.6}
        outerScale={4}
        hasBlendMode={true}
        outerStyle={{
          border: "0.1px solid #fff",
        }}
        trailingSpeed={7}
      />
    </>
  );
}
