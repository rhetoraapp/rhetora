import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      width={191}
      height={114}
      viewBox="0 0 191 114"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={134.5} cy={-20.5} r={134.5} fill="#fff" fillOpacity={0.15} />
      <circle cx={127.5} cy={-27.5} r={72.5} fill="#050038" />
    </svg>
  )
}

export default SvgComponent
