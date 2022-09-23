import { Navbar } from 'flowbite-react';
import Image from 'next/image';
import { useRouter } from 'next/router';

function Header() {
  const router = useRouter();

  return (
    <div className="flex h-full flex-col justify-center gap-4">
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="/">
          <Image
            src="/images/dark-logo.jpg"
            className="h-6 sm:h-9 pr-3"
            alt="vruksha-natyalaya"
            width={75}
            height={75}
          />
          <span className="text-white ml-3 self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
            Vruksha Natyalaya
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/" active={router.pathname === '/'}>
            Home
          </Navbar.Link>
          <Navbar.Link
            href="/background"
            active={router.pathname === '/background'}
          >
            Background
          </Navbar.Link>
          <Navbar.Link href="/about" active={router.pathname === '/about'}>
            About Us
          </Navbar.Link>
          <Navbar.Link href="/gallery" active={router.pathname === '/gallery'}>
            Gallery
          </Navbar.Link>
          <Navbar.Link href="/contact" active={router.pathname === '/contact'}>
            Contact
          </Navbar.Link>
          <Navbar.Link
            href="/other-styles"
            active={router.pathname === '/other-styles'}
          >
            Other Styles
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
