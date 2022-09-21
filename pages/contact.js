import { Footer, Header, ContactForm, Map } from '../components';

function ContactUs() {
  return (
    <div className="container mx-auto px-4">
      <Header />
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
            <span> 9845396648</span>
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
        </div>
      </div>
      <div className="my-5">
        <Map />
      </div>

      <Footer />
    </div>
  );
}

export default ContactUs;
