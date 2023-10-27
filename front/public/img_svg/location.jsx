export default function LocationSvg(props) {
  return (
    <svg
      height={24}
      viewBox="0 0 24 24"
      width={24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 22s-8-6-8-12c0-5 4-8 8-8s8 3 8 8c0 6-8 12-8 12zm0-9a3 3 0 100-6 3 3 0 000 6z"
        fill="none"
        stroke="#000"
        strokeWidth={2}
      />
    </svg>
  )
}