export default function AddSVG(props) {
  return (
    <svg
      height={24}
      viewBox="0 0 24 24"
      width={24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12 22V2M2 12h20" fill="none" stroke="#000" strokeWidth={2} />
    </svg>
  )
}