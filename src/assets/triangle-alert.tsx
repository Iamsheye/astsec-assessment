import React from "react";

type TriangleAlertProps = React.SVGProps<SVGSVGElement>;

const TriangleAlert = (props: TriangleAlertProps) => {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18.0861 15.0341L11.5787 3.77328C10.8771 2.54546 9.12305 2.54546 8.40391 3.77328L1.91405 15.0341C1.21244 16.2443 2.08945 17.7703 3.49266 17.7703H16.4899C17.9107 17.7703 18.7877 16.2443 18.0861 15.0341ZM10.0001 6.5797C10.5613 6.5797 10.9999 7.03575 10.9999 7.57949V7.64965L10.6666 12.6661C10.649 13.0169 10.3509 13.2976 10.0001 13.2976C9.64926 13.2976 9.35108 13.0169 9.33354 12.6661L9.00027 7.64965C8.96519 7.07083 9.42124 6.5797 10.0001 6.5797ZM10.0001 15.9462C9.42124 15.9462 8.94765 15.4726 8.94765 14.8937C8.94765 14.3149 9.42124 13.8413 10.0001 13.8413C10.5789 13.8413 11.0525 14.3149 11.0525 14.8937C11.0525 15.4726 10.5789 15.9462 10.0001 15.9462Z"
        fill="#A3A9B6"
      />
    </svg>
  );
};

export default TriangleAlert;
