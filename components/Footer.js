import { Footer } from 'flowbite-react';
import { BsFacebook, BsInstagram, BsWhatsApp } from './svgs/SocialMedia';

function CommonFooter() {
  return (
    <div className="dark mt-10">
      <Footer container={true} bgDark={true}>
        <div className="w-full">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div>
              <Footer.Brand
                href="/"
                src="/images/dark-logo.jpeg"
                alt="Vruksha Natyalaya"
              />
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title title="Site Links" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="/">Home</Footer.Link>
                  <Footer.Link href="/background">Background</Footer.Link>
                  <Footer.Link href="/about">About</Footer.Link>
                  <Footer.Link href="/gallery">Gallery</Footer.Link>
                  <Footer.Link href="/contact">Contact</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Follow us" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="https://www.instagram.com/vruksha__natyalaya/?igshid=YmMyMTA2M2Y%3D">
                    Instagram
                  </Footer.Link>
                  <Footer.Link href="#">Facebook</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Contact us" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="https://wa.me/9845396648">
                    Whatsapp
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="#" by="Vruksha Natyalaya" year={2022} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon href="#" icon={BsFacebook} />
              <Footer.Icon
                href="https://www.instagram.com/vruksha__natyalaya/?igshid=YmMyMTA2M2Y%3D"
                icon={BsInstagram}
              />
              <Footer.Icon href="https://wa.me/9845396648" icon={BsWhatsApp} />
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
}

export default CommonFooter;
