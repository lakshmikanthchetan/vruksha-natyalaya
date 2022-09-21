import { Footer, Header, ContactForm, Map } from '../components';

function ContactUs() {
  return (
    <div className="container mx-auto ">
      <Header />
      <div>
        <label>Contact Number :</label>
        <span>9845396648</span>
      </div>
      <div>
        <label>Email ID :</label>
        <span>vrukshanatyalaya@gmail.com</span>
      </div>
      <div>
        <label>Venue :</label>
        <span>
          D-104, NR Orchid Gardenia, Behind Manyata Tech park, Bangalore -
          560077
        </span>
      </div>
      <Map />
      <ContactForm />

      <Footer />
    </div>
  );
}

export default ContactUs;
