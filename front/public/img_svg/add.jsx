export default function AddSVG(props) {
  return (
    <svg
      height={24}
      viewBox="0 0 24 24"
      width={24}
      xmlns="http://www.w3.org/2000/svg"
      className="hover:text-pink-500"
      {...props}
    >
      <path d="M12 22V2M2 12h20" fill="none" stroke="currentColor" strokeWidth={2} />
    </svg>
  )
}