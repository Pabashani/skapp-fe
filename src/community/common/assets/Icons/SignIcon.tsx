import { JSX } from "react";

import { IconProps } from "~community/common/types/IconTypes";

const SignatureIcon = ({
  fill = "#3F3F46",
  width = "21",
  height = "20",
  id,
  svgProps,
  onClick
}: IconProps): JSX.Element => {
  return (
    <svg
      id={id}
      width={width}
      height={height}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      {...svgProps}
    >
      <path
        d="M5.57277 0.769531C4.48123 0.769531 3.33969 1.47492 2.32738 2.78876C1.31507 4.10261 0.531997 6.08261 0.572766 8.70261C0.572766 9.95338 0.971997 11.3411 1.72661 12.5003C1.83738 12.6711 2.02892 12.7734 2.15892 12.9334C1.62969 13.5726 0.716612 14.7841 0.716612 14.7841C0.634692 14.854 0.568331 14.9402 0.521822 15.0372C0.475312 15.1343 0.449687 15.24 0.446605 15.3476C0.443522 15.4552 0.46305 15.5622 0.503927 15.6618C0.544803 15.7614 0.606118 15.8512 0.683907 15.9256C0.761696 16 0.854228 16.0572 0.955522 16.0936C1.05682 16.13 1.16462 16.1447 1.27195 16.1368C1.37929 16.1289 1.48378 16.0986 1.57866 16.0478C1.67354 15.997 1.7567 15.9268 1.82277 15.8418C1.82277 15.8418 2.74815 14.6034 3.24046 14.0149C3.80815 14.3757 4.45738 14.6157 5.18815 14.6157C6.502 14.6157 7.73584 13.9872 8.79354 13.1249C8.94354 13.0034 9.0343 12.8241 9.17815 12.6926C9.51738 12.9303 9.91661 13.0772 10.3558 13.0772C11.0935 13.0772 11.7197 12.7257 12.2558 12.308C12.7912 11.8903 13.2505 11.3872 13.6735 10.8895C13.9574 10.5557 14.1651 10.2788 14.3951 10.0003C14.3666 10.3626 14.3435 10.7195 14.3466 11.058C14.3482 11.2349 14.3558 11.3941 14.4189 11.6111C14.4497 11.7188 14.4774 11.868 14.6112 12.0195C14.7451 12.1711 15.0174 12.308 15.2597 12.308C15.8882 12.308 16.3558 11.9557 16.702 11.6111C17.0482 11.2657 17.3258 10.8688 17.6405 10.5049C18.2666 9.77799 18.8697 9.23107 19.7312 9.23107C19.9352 9.23107 20.1309 9.15003 20.2752 9.00577C20.4194 8.86151 20.5005 8.66585 20.5005 8.46184C20.5005 8.25783 20.4194 8.06217 20.2752 7.91791C20.1309 7.77365 19.9352 7.69261 19.7312 7.69261C18.2082 7.69261 17.1851 8.68492 16.4858 9.49569C16.2689 9.74722 16.1058 9.91876 15.9335 10.1203C15.9351 10.0926 15.9312 10.0765 15.9335 10.048C15.9628 9.65722 16.0105 9.27645 15.9812 8.89415C15.9733 8.67863 15.9242 8.46662 15.8366 8.26953C15.7289 8.03415 15.3689 7.69261 14.9712 7.69261C14.5551 7.69261 14.3205 7.87569 14.1305 8.02953C13.9405 8.18338 13.7743 8.36184 13.6012 8.55799C13.2551 8.9503 12.8897 9.41645 12.4958 9.8803C12.1012 10.3441 11.6835 10.8026 11.2935 11.1065C10.9043 11.4095 10.5805 11.5388 10.3558 11.5388C10.3051 11.5388 10.2789 11.4518 10.2358 11.4426C10.6412 10.9557 11.1397 10.5372 11.462 10.0241C12.1643 8.90415 12.6528 7.79569 12.8082 6.82722C12.8858 6.34261 12.9135 5.87184 12.6882 5.40876C12.462 4.94645 11.8728 4.61569 11.342 4.61569C10.3074 4.61569 9.43738 5.28492 8.842 6.17799C8.24584 7.07184 7.88046 8.24415 7.88046 9.54338C7.88046 10.218 8.092 10.7849 8.31277 11.3465C8.12969 11.5234 7.99738 11.7695 7.80815 11.9234C6.91892 12.648 5.98892 13.0772 5.18815 13.0772C4.83969 13.0772 4.52892 12.9249 4.22661 12.7649C4.58584 12.2865 4.61353 12.3495 4.99584 11.7788C6.57123 9.42569 8.19277 6.41799 8.19277 3.53492C8.19277 3.19261 8.16969 2.57338 7.80815 1.94799C7.44661 1.32261 6.64046 0.769531 5.57277 0.769531ZM5.57277 2.30799C6.19738 2.30799 6.32353 2.47722 6.462 2.71645C6.60046 2.95569 6.6543 3.33799 6.6543 3.53415C6.6543 5.80492 5.19892 8.69492 3.69738 10.938C3.39046 11.3965 3.39046 11.3334 3.09661 11.7311C3.07584 11.7003 3.04507 11.6903 3.0243 11.6588C2.452 10.7795 2.11123 9.60492 2.11123 8.70184V8.67876C2.07507 6.37492 2.75738 4.78261 3.55354 3.7503C4.34892 2.71799 5.35584 2.30799 5.57277 2.30799ZM11.2935 6.17799C11.3043 6.23492 11.3335 6.33645 11.2935 6.58645C11.1943 7.20492 10.7882 8.21184 10.1635 9.20722C9.992 9.4803 9.71507 9.68415 9.51507 9.95261C9.49661 9.79261 9.41892 9.71876 9.41892 9.54338C9.41892 8.53569 9.71123 7.62569 10.1158 7.01953C10.502 6.43953 10.9489 6.2003 11.2935 6.17799ZM0.500458 17.6926V19.2311H20.5005V17.6926H0.500458Z"
        fill={fill}
      />
    </svg>
  );
};

export default SignatureIcon;
