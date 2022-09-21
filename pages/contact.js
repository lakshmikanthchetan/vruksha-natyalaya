import { Button } from 'flowbite-react';
import Link from 'next/link';
import { ContactForm, Map } from '../components';
import { center } from '../components/Map';

const danceSchoolUrl =
  'https://www.google.com/maps/place/Vruksha+Natyalaya/@13.0615041,77.6208285,15z/data=!4m5!3m4!1s0x0:0xae9be29a1aff0a05!8m2!3d13.0615041!4d77.6208285';

function ContactUs() {
  return (
    <div className="container mx-auto px-4">
      <div className="my-10">
        <p>
          Take the first step in learning the Dance Type that you wish, which
          will bring immeasurable joy, everyday of our lives.
        </p>{' '}
        <p>
          Please complete the form below and submit. We will get in touch with
          you with all details.
        </p>
        <div className="md:flex md:space-between my-2">
          <div className="text-md font-bold tracking-tight text-gray-900 dark:text-white md:text-center pr-5">
            <label>Contact Number :</label>
            <span>
              <a href="tel:98453-96648"> +91-9845396648 </a>
            </span>
          </div>
          <div className="text-md font-bold tracking-tight text-gray-900 dark:text-white md:text-center">
            <label>Email :</label>
            <span> vrukshanatyalaya@gmail.com</span>
          </div>
        </div>
      </div>

      <ContactForm />
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Our Branch Address
        </h1>
        <div>
          <label>Venue :</label>
          <span>
            D-104, NR Orchid Gardenia, Behind Manyata Tech park, Bangalore -
            560077
          </span>
          <div className="my-5">
            <Button>
              <a
                href={danceSchoolUrl}
                target="_blank"
                rel="noreferrer"
                className=""
              >
                Get Directions
              </a>
            </Button>
          </div>
        </div>
      </div>
      <div className="my-5">
        <Map />
      </div>
    </div>
  );
}

export default ContactUs;
