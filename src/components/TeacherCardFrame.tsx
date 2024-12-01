import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export const TeacherCardFrame = ({ children }: Props) => {
  return (
    <div className="shadow-xl relative bg-slate-100 p-4 pb-14 sm:p-6 md:p-4 md:pb-14 md:pt-8 lg:p-12 lg:px-2 xl:p-16 rounded-[50px] sm:rounded-[60px] 2xl:rounded-[80px] grid grid-cols-1 sm:grid-cols-[30%_70%] gap-4 m-4 border-slate-300 border-2">
      <svg
        viewBox="0 0 101.16 35.42"
        className="absolute w-[210px] sm:w-[300px] xl:w-[500px] 2xl:w-[600px] -bottom-0.5 -left-0.5"
      >
        <defs>
          <linearGradient
            id="linear-gradient"
            x1="97.9"
            y1="78.75"
            x2="1.57"
            y2="-17.58"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#f4d314" />
            <stop offset="0.05" stopColor="#e7d123" />
            <stop offset="0.5" stopColor="#74c3b0" />
            <stop offset="0.7" stopColor="#47bee9" />
            <stop offset="1" stopColor="#0e7dc1" />
          </linearGradient>
        </defs>
        <path
          d="M0,.43V21.79c0,7.52,6.1,13.62,13.62,13.62H101.16C59.2,1.6,21.15-1.45,0,.43Z"
          fill="url(#linear-gradient)"
        />
      </svg>
      <svg
        viewBox="0 0 70.33 24.77"
        className="absolute w-[210px] sm:w-[300px] 2xl:w-[400px] -top-0.5 -right-0.5"
      >
        <defs>
          <linearGradient
            id="linear-gradient"
            x1="77.13"
            y1="45.96"
            x2="9.84"
            y2="-21.33"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#0e7dc1" />
            <stop offset=".3" stopColor="#47bee9" />
            <stop offset=".5" stopColor="#74c3b0" />
            <stop offset=".95" stopColor="#e7d123" />
            <stop offset="1" stopColor="#f4d314" />
          </linearGradient>
        </defs>
        <path
          d="M70.33,13.62v11.14C53.4,24.94,27.98,20.62,0,0H56.71c7.52,0,13.62,6.1,13.62,13.62Z"
          fill="url(#linear-gradient)"
        />
      </svg>
      {children}
    </div>
  );
};
