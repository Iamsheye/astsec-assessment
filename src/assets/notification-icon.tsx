import React from "react";

type NotificationIconProps = React.SVGProps<SVGSVGElement>;

const NotificationIcon = (props: NotificationIconProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.4166 6.66671C17.025 6.66671 18.3333 5.35837 18.3333 3.75004C18.3333 2.14171 17.025 0.833374 15.4166 0.833374C13.8083 0.833374 12.5 2.14171 12.5 3.75004C12.5 5.35837 13.8083 6.66671 15.4166 6.66671ZM15.4166 8.33337C15.8333 8.33337 16.25 8.27504 16.6666 8.15837V13.3334C16.6666 15.6334 14.8 17.5 12.5 17.5H5.83329C3.53329 17.5 1.66663 15.6334 1.66663 13.3334V6.66671C1.66663 4.36671 3.53329 2.50004 5.83329 2.50004H11.0083C10.8916 2.91671 10.8333 3.33337 10.8333 3.75004C10.8333 6.28337 12.8833 8.33337 15.4166 8.33337Z"
        fill="#A3A9B6"
      />
    </svg>
  );
};

export default NotificationIcon;
