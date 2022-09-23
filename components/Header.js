import { Navbar } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Header() {
  const router = useRouter();
  return (
    <div className="flex h-full flex-col justify-center gap-4 header">
      <Navbar fluid={true} rounded={false} class="bg-primary p-2">
        <Navbar.Brand href="/images/dark-logo.jpeg">
          <Link href="/">
            <Image
              src="/images/dark-logo.jpeg"
              className="h-6 sm:h-9 pr-3"
              alt="vruksha-natyalaya"
              width={100}
              height={50}
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/" active={router.pathname === '/'}>
            <span
              className={`${
                router.pathname === '/'
                  ? 'text-secondary hover:text-secondary'
                  : ''
              }  hover:text-white`}
            >
              Home
            </span>
          </Navbar.Link>
          <Navbar.Link
            href="/background"
            active={router.pathname === '/background'}
          >
            <span
              className={`hover:text-white ${
                router.pathname === '/background'
                  ? 'text-secondary hover:text-secondary'
                  : ''
              }`}
            >
              Background
            </span>
          </Navbar.Link>
          <Navbar.Link href="/about" active={router.pathname === '/about'}>
            <span
              className={`${
                router.pathname === '/about'
                  ? 'text-secondary hover:text-secondary'
                  : ''
              }  hover:text-white`}
            >
              About Us
            </span>
          </Navbar.Link>
          <Navbar.Link href="/gallery" active={router.pathname === '/gallery'}>
            <span
              className={`${
                router.pathname === '/gallery'
                  ? 'text-secondary hover:text-secondary'
                  : ''
              }  hover:text-white`}
            >
              Gallery
            </span>{' '}
          </Navbar.Link>
          <Navbar.Link href="/contact" active={router.pathname === '/contact'}>
            <span
              className={`${
                router.pathname === '/contact'
                  ? 'text-secondary hover:text-secondary'
                  : ''
              }  hover:text-white`}
            >
              Contact
            </span>
          </Navbar.Link>
          <Navbar.Link
            href="/other-styles"
            active={router.pathname === '/other-styles'}
          >
            <span
              className={`${
                router.pathname === '/other-styles'
                  ? 'text-secondary hover:text-secondary'
                  : ''
              } hover:text-white`}
            >
              Other Styles
            </span>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
