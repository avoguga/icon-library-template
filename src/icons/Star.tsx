import * as React from 'react';
import type { SVGProps } from 'react';
const SvgStar = (props: (SVGProps<SVGSVGElement> & { size?: string | number; color?: string })) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    {...(props.size ? { width: props.size, height: props.size } : { width: "1em", height: "1em" })}
    
    viewBox="0 0 32 32"
    {...props}
   fill={props.color || "currentColor"}>
    <path d="m11.111 24.7 4.89-2.934 4.888 2.967-1.3-5.556 4.3-3.733-5.667-.5L16 9.699l-2.222 5.212-5.667.5 4.3 3.744zm-3.344 4.633 2.166-9.367-7.266-6.3 9.6-.833L16 4l3.733 8.833 9.6.833-7.266 6.3 2.166 9.367L16 24.366z" />
  </svg>
);
export default SvgStar;
