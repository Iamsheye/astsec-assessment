import React from "react";

type ShrinkIconProps = React.SVGProps<SVGSVGElement>;

const StacksIcon = (props: ShrinkIconProps) => {
  return (
    <svg
      width="53"
      height="53"
      viewBox="0 0 53 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="26.46" cy="26.4597" r="26.46" fill="#D7EAFF" />
      <path
        d="M20.2725 20.1676H20.2835M20.2725 33.2926H20.2835M18.085 15.7926H35.585C36.7931 15.7926 37.7725 16.772 37.7725 17.9801V22.3551C37.7725 23.5632 36.7931 24.5426 35.585 24.5426H18.085C16.8769 24.5426 15.8975 23.5632 15.8975 22.3551V17.9801C15.8975 16.772 16.8769 15.7926 18.085 15.7926ZM18.085 28.9176H35.585C36.7931 28.9176 37.7725 29.897 37.7725 31.1051V35.4801C37.7725 36.6882 36.7931 37.6676 35.585 37.6676H18.085C16.8769 37.6676 15.8975 36.6882 15.8975 35.4801V31.1051C15.8975 29.897 16.8769 28.9176 18.085 28.9176Z"
        stroke="#1873DE"
        stroke-width="2.1875"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default StacksIcon;
