import { Carousel } from 'flowbite-react';
import Image from 'next/image';
import {
  UnOrderedList,
  Reviews,
  SimpleCardsList,
  SimpleCard,
} from '../components';
import { reviewsArr } from '../components/Reviews';

const listArr = [
  'Trained by a professional',
  'Certificates provided after completion of each level',
  'Unique methods of teaching',
  'Online/offline classes offered (learn from the comfort of your home)',
  'One on one (personal training) can be opted for',
  'Theory notes provided',
  'Audios and Videos are provided for practice',
  'Compensation classes',
  'Fun and Interactive sessions',
  'Annual day performance opportunities',
];

const cardsData = [
  {
    title: "Beginner's Level -1",
    desc: [
      'Namaskaram',
      'Brief background and stories about origination of Bharatanatyam',
      'Basic Dance Stances (Araimandi, Muzhumandi, Samapadham)',
      'Basic Dance workouts (Guidelines for Practice)',
      'Basic Adavus/ Steps with their variations in 3 speeds',
      'Asamyutha Hasthas (Single handed mudras)-',
      'Samyutha Hasthas (Both hands)',
    ],
  },
  {
    title: "Beginner's Level -2",
    desc: [
      'Advanced Adavus/ Steps with their variations in 3 speeds',
      'Advanced Dance workouts (Guidelines for Practice)',
      'Asamyutha Hastha Vinyoga (Usage of hasthas)',
      'Samyutha Hastha Vinyoga (Usage of hasthas)',
      'Basic Neck movements',
      'Navarasa (9 Facial Expressions)',
    ],
  },
  {
    title: 'Intermediate Level -1',
    desc: [
      'Introduction to Shloka form of songs',
      'Concept of Tishra, Chatushra, Kanda, Mishra and Sankeerna Jathis',
      'Alaripu-1',
      'Pushpanjali',
      'Kautuvam',
      'Asamyutha Hastha Shloka',
      'Samyutha Hastha Shloka',
    ],
  },
  {
    title: 'Intermediate Level -2',
    desc: [
      'Alaripu-2',
      'Thodayam',
      'Jatiswaram',
      'Drishti Bedhas (Eye movements) ',
      'Shiro Bedhas (Head movements)',
      'Greeva Bedhas (Neck movements)',
    ],
  },
  {
    title: 'Gejje Pooja/Salangai Pooja',
    desc: [],
  },
  {
    title: 'Advanced Level -1',
    desc: [
      '      Shabdam',
      'Varnam',
      'Padam',
      'Thillana',
      'Application of Abhinayas',
    ],
  },
  {
    title: 'Advanced Level -2',
    desc: [
      'Keerthanam',
      'Javalli',
      'Other variations of Alaripu, Jatiswaram, Thillanas etc',
      'Mangalam',
      '108 Karanas',
    ],
  },
  {
    title: 'Arangetram',
    desc: [
      'A Bharatanatyam Arangetram is a solo debut performance that signifies the completion of initial formal training of a dancer in Indian Classical Dance',
      'The term Arangetram translates to "ascending the stage". This performance is typically done when the guru believes the student is ready for a solo performance.',
      'The Arangetram is a culmination of multiple years of hard work by the student and the guru, and it is an opportunity for the dancer to showcase his or her dedication and skills developed over the years.',
      'Throughout this debut, the dancer performs a series of dances that are learned over a course of time.',
      'The dancer must build up his or her concentration and stamina to perform solo dances for approximately three hours.',
    ],
  },
];
function about() {
  return (
    <div className="container mx-auto px-2">
      <div className="sm:h-64 md:h-80 2xl:h-96">
        <Carousel slide={false}>
          <div className="h-full">
            <Image
              src="/images/1.jpg"
              alt="..."
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="h-full">
            <Image
              src="/images/2.jpg"
              alt="..."
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="h-full">
            <Image
              src="/images/3.jpg"
              alt="..."
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="h-full">
            {' '}
            <Image
              src="/images/4.jpg"
              alt="..."
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="h-full">
            <Image
              src="/images/5.jpg"
              alt="..."
              layout="fill"
              objectFit="cover"
            />
          </div>
        </Carousel>
      </div>
      <div className="text-center mx-auto">
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
          />
        </section>
        <section>
          <SimpleCardsList heading="Levels & Syllabus" cardsData={cardsData} />
          <h2 className="inline-block my-10 text-xl font-bold text-gray-900 dark:text-white">
            Note: Eligibility for the dance class to be above 5 years
          </h2>
        </section>
        <section>
          <UnOrderedList
            heading="Why choose us?/ What makes us unique?"
            listArr={listArr}
          />
        </section>
        <section>
          <Reviews reviewsArr={reviewsArr} />
        </section>
      </div>
    </div>
  );
}

export default about;
