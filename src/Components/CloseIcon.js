import * as React from "react";

function CustomCloseIcon(props) {
  return (
    <svg width="1.3em" height="1.3em" viewBox="0 0 40 40" fill="none" {...props}>
      <path
        d="M36.667 20c0-9.167-7.5-16.667-16.667-16.667-9.167 0-16.667 7.5-16.667 16.667 0 9.167 7.5 16.667 16.667 16.667 9.167 0 16.667-7.5 16.667-16.667zM15.283 24.717l9.434-9.434M24.717 24.717l-9.434-9.434"
        stroke="#6D6D6D"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const MemoCustomCloseIcon = React.memo(CustomCloseIcon);
export default MemoCustomCloseIcon;
