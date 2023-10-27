export default function MenuSvg(props) {
  return (
    <svg
      height={"1.25rem"}
      viewBox="0 0 24 24"
      width={"1.25rem"}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2 19h20M2 5h20M2 12h20"
        fill="none"
        stroke="#000"
        strokeWidth={2}
      />
    </svg>
  )
}