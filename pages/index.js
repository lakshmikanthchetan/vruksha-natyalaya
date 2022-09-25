import { Carousel } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import { Quote, SimpleCard, UnOrderedList } from '../components';

const levelsArr = [
  "Beginner's Level -1",
  "Beginner's Level -2",
  'Intermediate Level -1',
  'Intermediate Level -2',
  'Gejje Pooja/Salangai Pooja',
  'Advanced Level -1',
  'Advanced Level -2',
  'Arangetram',
];

export default function Home() {
  return (
    <div>
      <section className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel slide={false}>
          <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <Image
              src="/images/download.png"
              alt="..."
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <Image
              src="/images/download.png"
              alt="..."
              layout="fill"
              objectFit="cover"
            />
          </div>
        </Carousel>
      </section>
      <div className="container mx-auto px-5">
        <section>
          <Quote />
        </section>
        <section>
          <SimpleCard
            title="About Vruksha Natyalaya"
            descArr={[
              'Vruksha Natyalaya was founded by Ms Mamtha  in 2018 in Bengaluru. It was established with the objective of promoting classical Indian dances and to train students of all age group. The untiring efforts of the institution’s founder and the whole team enabled Vruksha Natyalaya to make commendable progress in a short span of time.',
            ]}
            withMargin={true}
          />
          <SimpleCard
            title="Founder and Artistic Director"
            descArr={[
              'Mamtha is the artistic director of Vruksha Natyalaya, Bengaluru. She is not only a versatile classical dancer  in Vazhuvoor Bani but an innovative dance teacher and a choreographer. Mamtha had her early training from Natya Mayuri Classical Dance Institute and has been into this art form from the last 15 years. She continued to learn Bharatanatyam and perform at various venues all over India.',
              'Through her dance academy, she aims not only at creating an environment where learning becomes fun, but also empower kids through self-confidence, self-discipline, endurance, and creativity.',
              "Under her tutelage, each student is assured individual attention and motivated to participate in the school's dance productions and programs.",
              'Trained over 65 students in India and abroad in such a short span of time, Mamtha strives to spread this beautiful art form to as many Dance enthusiasts in the coming future.',
            ]}
            readMoreLink="/about"
          />
        </section>
        <section className="text-center">
          <UnOrderedList heading="Levels" listArr={levelsArr} />
          <div className="mt-5">
            <Link href={'/about'}>
              <a className="text-white bg-primary font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none ">
                Read More
              </a>
            </Link>
          </div>
        </section>
        <section className="text-center">
          <h2 className="text-2xl my-5 italic">Contact Us</h2>
          <p className="mb-4 font-normal text-secondary opacity-8  ">
            Vruksha Natyalaya, 1st floor, Above Aditya Pharmacy, St. Ann&apos;s
            Church Road, Rachenahalli - 560077
          </p>
          <p className="font-normal text-secondary opacity-8 ">
            Contact Number : <b>+91-9845396648</b>
          </p>
          <p className="mb-4 font-normal text-secondary opacity-8 ">
            Email : <b>vrukshanatyalaya@gmail.com</b>
          </p>
          <Link href={'/contact'}>
            <a className="text-white bg-primary font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none ">
              Read More
            </a>
          </Link>
        </section>
      </div>
    </div>
  );
}
