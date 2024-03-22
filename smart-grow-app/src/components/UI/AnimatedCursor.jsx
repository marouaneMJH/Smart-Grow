import React from "react";
import AnimatedCursor from "react-animated-cursor";

function fun() {
    return (
        <>
            <AnimatedCursor
                innerSize={8}
                outerSize={35}
                innerScale={1}
                outerScale={2}
                outerAlpha={0.06}
                hasBlendMode={true}
                innerStyle={{
                    backgroundColor: "#CEFF65",
                }}
                outerStyle={{
                    zIndex: 99999999999,
                    border: "3px solid #5a7422",
                }}
            />
        </>
    );
}

export default fun;
