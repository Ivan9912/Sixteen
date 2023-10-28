export default function BusquedaSvg(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width="50px"
      height="50px"
      {...props}
    >
      <circle
        fill="none"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeMiterlimit={10}
        cx={21}
        cy={20}
        r={16}
      />
      <path
        fill="none"
        stroke="#000"
        strokeWidth={4}
        strokeMiterlimit={10}
        d="M32.229 32.229L45.5 45.5"
      />
    </svg>
  )
};