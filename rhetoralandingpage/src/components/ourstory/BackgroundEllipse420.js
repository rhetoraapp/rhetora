import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      width={156}
      height={165}
      viewBox="0 0 156 165"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={127.5} cy={127.5} r={127.5} fill="#fff" fillOpacity={0.15} />
    </svg>
  )
}

export default SvgComponent
