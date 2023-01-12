import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      width={140}
      height={110}
      viewBox="0 0 140 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={70} cy={40} r={70} fill="#fff" fillOpacity={0.15} />
    </svg>
  )
}

export default SvgComponent
