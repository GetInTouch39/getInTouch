export interface IFlat {
  progress: number;
  text?: string;
  showValue?: boolean;
  showMiniCircle?: boolean;
  label?: string;
  sx: {
    strokeColor: string;
    bgStrokeColor?: string;
    bgColor?: { color: string; transparency: string };
    barWidth: number;
    valueSize?: number;
    valueColor?: string;
    textSize?: number;
    textColor?: string;
    loadingTime?: number;
    miniCircleColor?: string;
    miniCircleSize?: number;
    valueAnimation?: boolean;
    intersectionEnabled?: boolean;
  };
}
