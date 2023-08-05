import { ContactForm } from '../components';

const danceSchoolUrl =
  'https://www.google.com/maps/place/Vruksha+Natyalaya/@13.0615041,77.6208285,15z/data=!4m5!3m4!1s0x0:0xae9be29a1aff0a05!8m2!3d13.0615041!4d77.6208285';

function ContactUs() {
  return (
    <div className="container mx-auto px-5 text-center">
      <div className="my-10">
        <p>
          Take the first step in learning the Dance Type that you wish, which
          will bring immeasurable joy, everyday of our lives.
        </p>{' '}
        <p>
          Please complete the form below and submit. We will get in touch with
          you with all details.
        </p>
        <div className="md:flex md:space-between my-2 justify-center">
          <div className="text-md font-bold tracking-tight text-secondary  md:text-center pr-5">
            <label>Contact Number :</label>
            <span>
              <a href="tel:89511-41931"> +91-8951141931 </a>,
              <a href="tel:98453-96648"> +91-9845396648 </a>
            </span>
          </div>
          <div className="text-md font-bold tracking-tight text-secondary  md:text-center">
            <label>Email :</label>
            <span> vrukshanatyalaya@gmail.com</span>
          </div>
        </div>
      </div>

      <ContactForm />
      <div>
        <h1 className="text-2xl font-semibold text-secondary italic">
          Our Branch Address
        </h1>
        <div>
          <label>Venue :</label>
          <span>
            Vruksha Natyalaya, 1st floor, Above Aditya Pharmacy, St. Ann&apos;s
            Church Road, Rachenahalli - 560077
          </span>
          <div className="my-5 text-center">
            <button className="text-white bg-primary font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">
              <a
                href={danceSchoolUrl}
                target="_blank"
                rel="noreferrer"
                className=""
              >
                Get Directions
              </a>
            </button>
          </div>
        </div>
      </div>
      {/* <div className="my-5">
        <Map />
      </div> */}
    </div>
  );
}

export default ContactUs;
