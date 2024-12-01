import { CSSProperties, useEffect, useRef, useState } from "react";
import { IFlat } from "./types";
import { useAnimatedValue } from "./hooks/useAnimatedValue";
import { useIntersection } from "./hooks/useIntersection";

const PerformanceCard = ({
  label,
  progress = 0,
  showMiniCircle = true,
  text = "",
  showValue = true,
  sx,
}: IFlat) => {
  const {
    valueSize = 20,
    valueColor = "#000000",
    textSize = 13,
    textColor = "#000000",
    loadingTime = 500,
    valueAnimation = false,
    intersectionEnabled = true,
    miniCircleSize = 5,
    miniCircleColor = "#ff0000",
  } = sx;
  const [afterProgress, setAfterProgress] = useState(0);
  const flatRef = useRef<HTMLDivElement>(null);
  const prevCountRef = useRef(0);
  const { isVisible } = useIntersection(flatRef);
  const { animatedValue } = useAnimatedValue(
    prevCountRef.current,
    afterProgress,
    loadingTime
  );

  useEffect(() => {
    if ((intersectionEnabled && isVisible) || !intersectionEnabled) {
      setAfterProgress(progress);
      prevCountRef.current = afterProgress;
    }
  }, [progress, isVisible]);

  const dasharray = 2 * Math.PI * 50;
  const dashoffset = (1 - (afterProgress + 0) / 100) * dasharray;

  return (
    <div className="p-4  bg-slate-100 flex-1 min-w-60 max-w-60 min-h-60  flex-col flex justify-between items-center m-4 shadow-xl">
      <div ref={flatRef} className="w-full h-full relative">
        <svg viewBox="0 0 110 110" className="relative z-50">
          <circle
            cx="55"
            cy="55"
            r="50"
            style={{
              transition: "stroke-dashoffset ease-in-out",
              transitionDuration: loadingTime.toString().concat("ms"),
            }}
            strokeWidth={sx.barWidth}
            transform={"rotate(-90, 55, 55)"}
            fill="none"
            stroke={sx.strokeColor}
            shapeRendering="geometricPrecision"
            strokeLinecap={"round"}
            strokeDasharray={dasharray}
            strokeDashoffset={dashoffset}
          />
          {showValue && (
            <text
              x="50%"
              y="50%"
              fontSize={valueSize}
              textAnchor="middle"
              fill={valueColor}
            >
              <tspan
                dominantBaseline={
                  text !== undefined && text !== "" ? "auto" : "central"
                }
              >
                {(valueAnimation ? animatedValue : progress).toString() + "%"}
              </tspan>
            </text>
          )}
          {text !== undefined && text !== "" && (
            <text
              x="50%"
              y={showValue ? "55%" : "50%"}
              fontSize={textSize}
              textAnchor="middle"
              fill={textColor}
            >
              <tspan dominantBaseline={showValue ? "hanging" : "middle"}>
                {text}
              </tspan>
            </text>
          )}
        </svg>
        <svg
          className="absolute top-0 block"
          viewBox="0 0 110 110"
          style={
            {
              "--ds1": "drop-shadow(0 10px 8px rgb(0 0 0 / .04))",
              "--ds2": "drop-shadow(0 4px 3px rgb(0 0 0 / .1))",
              filter: "var(--ds1) var(--ds2)",
            } as CSSProperties
          }
        >
          <circle
            cx="55"
            cy="55"
            r="50"
            fill="none"
            stroke={sx.bgStrokeColor ?? "white"}
            strokeWidth={sx.barWidth - 0.3}
            strokeDasharray={dasharray}
            strokeLinecap={"round"}
            strokeDashoffset={0}
            transform={"rotate(-90, 55, 55)"}
            shapeRendering="geometricPrecision"
          />
        </svg>
        {showMiniCircle && (
          <svg
            style={{
              transition: "transform ease-in-out",
              MozTransition: "transform ease-in-out",
              transitionDuration: loadingTime.toString().concat("ms"),
            }}
            viewBox="0 0 110 110"
            className={`absolute top-0 z-50 block`}
            transform={`rotate(${afterProgress * 3.6}, 0, 0)`}
          >
            <circle cx="55" cy="5" r={miniCircleSize} fill={miniCircleColor} />
          </svg>
        )}
        <svg className=" absolute top-0 z-30" viewBox="0 0 110 110">
          <circle
            cx="55"
            cy="55"
            r={50 - sx.barWidth / 2}
            fill={`#${sx.bgColor?.transparency}${sx.bgColor?.color}`}
          />
        </svg>
      </div>
      <h2 className="card font-poppins">{label}</h2>
    </div>
  );
};

export default PerformanceCard;
