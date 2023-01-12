import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      width={202}
      height={140}
      viewBox="0 0 202 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={89} cy={40} r={70} fill="#fff" fillOpacity={0.15} />
      <circle cx={89} cy={40} r={32} fill="#050038" />
    </svg>
  )
}

export default SvgComponent