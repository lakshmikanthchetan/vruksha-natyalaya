import Image from 'next/image';
import React from 'react';

const cardsData = [
  {
    name: 'Dance Fitness - Zumba',
    url: '/images/zumba.jpg',
    title: 'Dance Fitness- Zumba',
    desc: 'Zumba is a fitness program that involves cardio and Latin-inspired dance. It was founded by Colombian dancer and choreographer Beto Pérez in 2001 and by 2012, it had 110,000 locations and 12 million people taking classes weekly. Zumba is a trademark owned by Zumba Fitness, LLC.',
    readMoreUrl: 'https://en.wikipedia.org/wiki/Zumba',
  },
  {
    name: 'Bollywood',
    url: '/images/bollywood.jpeg',
    title: 'Bollywood',
    desc: 'Hindi dance music encompasses a wide range of songs predominantly featured in the Bollywood film industry with a growing worldwide attraction. The music became popular among overseas Indians in places such as South Africa, Mauritius, Fiji, the Caribbean, Canada, the United Kingdom, the Netherlands and the United States of America and eventually developed a global fan base.',
    readMoreUrl: 'https://en.wikipedia.org/wiki/Hindi_dance_music',
  },
  {
    name: 'Kathak',
    url: '/images/kathak.jpeg',
    title: 'Kathak',
    desc: 'Kathak is one of the eight major forms of Indian classical dance. It is the classical dance form of Uttar Pradesh. The origin of Kathak is traditionally attributed to the traveling bards in ancient northern India known as Kathakars or storytellers.',
    readMoreUrl: 'https://en.wikipedia.org/wiki/Kathak',
  },
  {
    name: 'Kuchipudi',
    url: '/images/kuchipudi.webp',
    title: 'Kuchipudi',
    desc: 'Kuchipudi is a dance-drama performance, with it’s roots in the ancient Hindu Sanskrit text of Natya Shastra. It developed as a religious art linked to traveling bards, temples and spiritual beliefs, like all major classical dances of India.',
    readMoreUrl: 'https://en.wikipedia.org/wiki/Kuchipudi',
  },
  {
    name: 'Yoga',
    url: '/images/yoga.jpg',
    title: 'Yoga',
    desc: 'Yoga is a group of physical, mental, and spiritual practices or disciplines which originated in ancient India and aim to control (yoke) and still the mind, recognizing a detached witness-consciousness untouched by the mind (Chitta) and mundane suffering (Duḥkha). There is a wide variety of schools of yoga, practices, and goals in Hinduism, Buddhism, and Jainism, and traditional and modern yoga is practiced worldwide.',
    readMoreUrl: 'https://en.wikipedia.org/wiki/Yoga',
  },
  {
    name: 'Carnatic Singing',
    url: '/images/singing.jpeg',
    title: 'Carnatic Singing',
    desc: 'Carnatic music, known as Karnataka samgita or Karnataka sangitam in the South Indian languages, is a system of music commonly associated with South India, including the modern Indian states of Karnataka, Andhra Pradesh, Telangana, Kerala and Tamil Nadu. It is one of two main subgenres of Indian classical music that evolved from ancient Hindu texts and traditions, particularly the Samaveda. The main emphasis in Carnatic music is on vocal music. Most compositions are written to be sung, and even when played on instruments, they are meant to be performed in gāyaki (singing) style.',
    readMoreUrl: 'https://en.wikipedia.org/wiki/Carnatic_music',
  },
];

const Card = (props) => {
  const { name = '', url = '#', title, desc, readMoreUrl } = props;
  return (
    <div className="mx-auto max-w-sm bg-white rounded-lg border border-gray-200 shadow-md  ">
      <a href="#">
        <Image
          className="rounded-t-lg"
          src={url}
          alt={name}
          width={400}
          height={300}
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-secondary ">
            {title}
          </h5>
        </a>
        <p className="mb-5 font-normal text-tertiary opacity-8 ">{desc}</p>
        {false && (
          <a
            href={readMoreUrl}
            className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-primary rounded-lg hover:opacity-8 focus:ring-4 focus:outline-none focus:ring-blue-30"
          >
            Read more
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};
function otherStyles() {
  return (
    <div className="container mx-auto px-5">
      <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {cardsData.map((card) => (
          <Card key={card.url} {...card} />
        ))}
      </section>
    </div>
  );
}

export default otherStyles;
