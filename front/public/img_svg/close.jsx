export default function CloseSvg(props) {
  return (
    <svg
      height={"1.25rem"}
      viewBox="0 0 24 24"
      width={"1.25rem"}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3 3l18 18M3 21L21 3"
        fill="none"
        stroke="#000"
        strokeWidth={2}
      />
    </svg>
  )
};