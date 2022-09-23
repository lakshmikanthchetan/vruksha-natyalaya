import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const tabsArr = [
  {
    tabName: 'Home',
    url: '/',
    activeTab: true,
  },
  {
    tabName: 'Background',
    url: '/background',
  },
  {
    tabName: 'About Us',
    url: '/about',
  },
  {
    tabName: 'Gallery',
    url: '/gallery',
  },
  {
    tabName: 'Contact',
    url: '/contact',
  },
  {
    tabName: 'Other Styles',
    url: '/other-styles',
  },
];

const Tab = (props) => {
  const { url, tabName } = props;
  const router = useRouter();
  const activeTab = router.pathname === url;

  return (
    <li>
      <a
        href={url}
        className={`block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:p-0  ${
          activeTab ? 'text-secondary' : ''
        }`}
        aria-current="page"
      >
        {tabName}
      </a>
    </li>
  );
};

function Header() {
  return (
    <div className="flex h-full flex-col justify-center gap-4 bg-primary">
      <nav className="bg-primary border-gray-200 px-2 sm:px-4 py-2.5 rounded ">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link href="/">
            <a className="flex items-center">
              <Image
                src="/images/dark-logo.jpeg"
                className="h-6 sm:h-9 pr-3"
                alt="vruksha-natyalaya"
                width={100}
                height={50}
              />
              {/* <span className="self-center text-xl font-semibold whitespace-nowrap ">
                Flowbite
              </span> */}
            </a>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200   "
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 bg-primary  md: ">
              {tabsArr.map((tab, i) => (
                <Tab key={i} {...tab} activeTab={i === 0} />
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
