const TickSVG = () => (
  <svg
    className="flex-shrink-0 w-5 h-5 text-green-500 "
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    ></path>
  </svg>
);

const UnOrderedList = (props) => {
  const { heading, listArr, showIcon = true, isCenter = true } = props;

  return (
    <>
      <h2 className="my-5 text-2xl italic font-semibold text-secondary  text-center">
        {heading}
      </h2>
      <ul
        className={`space-y-1 max-w-sm list-inside text-secondary opacity-6  sm:text-center sm:pl-24 ${
          isCenter ? 'sm:mx-auto' : ''
        }`}
      >
        {listArr.map((item, i) => (
          <li className="flex items-center space-x-3" key={i}>
            {showIcon && <TickSVG />} <span>{item}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UnOrderedList;
