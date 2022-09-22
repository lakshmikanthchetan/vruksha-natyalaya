import { Card } from 'flowbite-react';
import Image from 'next/image';

function Background() {
  return (
    <div className="container mx-auto text-center">
      <Image
        class="max-w-full h-auto"
        src="/images/nataraj.png"
        alt="nataraj"
        width={1200}
        height={680}
      />

      <div className="mb-10 px-2">
        <Card>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Background about Bharatanatyam
          </h5>
          <p className="mb-4 font-normal text-gray-700 dark:text-gray-400">
            Bharata Natyam is one of the oldest dance forms of India. It was
            nurtured in the temples and courts of southern India since ancient
            times. Later it was codified and documented as a performing art in
            the 19th century by four brothers known as the Tanjore Quartet whose
            musical compositions for dance form the bulk of the Bharata Natyam
            repertoire even today. The art was handed down as a living tradition
            from generation to generation under the Devadasi system under which
            women were dedicated to temples to serve the deity as dancers and
            musicians forming part of the elaborate rituals. These highly
            talented artists and the male gurus (nattuvanars) were the sole
            repository of the art until the early 20th century when a renewal of
            interest in India’s cultural heritage prompted the educated elite to
            discover its beauty.
          </p>
          <p className="mb-4 font-normal text-gray-700 dark:text-gray-400">
            Today Bharata Natyam is one of the most popular and widely performed
            dance styles and is practiced by male and female dancers all over
            India. Due to its wide range of movements and postures and the
            balanced melange of the rhythmic and mimetic aspects lends itself
            well to experimental and fusion choreography.
          </p>
          <div>
            <a
              href="#"
              className="w-auto inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
          </div>
        </Card>
      </div>

      <Card>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Repertoire
        </h5>
        <p className="mb-4 font-normal text-gray-700 dark:text-gray-400">
          Bharatanatyam is traditionally a team performance art that consists of
          a solo dancer, accompanied by musicians and one or more singers. The
          theory behind the musical notes, vocal performance and the dance
          movement trace back to the ancient Natya Shastra, and many Sanskrit
          and Tamil texts such as the Abhinaya Darpana.
        </p>
        <p className="mb-4 font-normal text-gray-700 dark:text-gray-400">
          The solo artist (ekaharya) in Bharatanatyam is dressed in a colorful
          sari, adorned with jewelry who presents a dance synchronized with
          Indian classical music. Their hand and facial gestures are codified
          sign language that recite a legend, spiritual ideas or a religious
          prayer derived from Hindu Vedic scriptures, the Mahabharata, the
          Ramayana, the Puranas and historic drama texts.[55][57] The dancer
          deploys turns or specific body movements to mark punctuations in the
          story or the entry of a different character in the play or legend
          being acted out through dance (Abhinaya). The footwork, body language,
          postures, musical notes, the tones of the vocalist, aesthetics and
          costumes integrate to express and communicate the underlying text.
        </p>
        <p className="mb-4 font-normal text-gray-700 dark:text-gray-400">
          The repertoire of Bharatanatyam, like all major classical Indian dance
          forms, follows the three categories of performance in the Natya
          Shastra. These are Nritta (Nirutham), Nritya (Niruthiyam)
          and Natya (Natyam).
        </p>
        <div>
          <ul className="mb-4 font-normal text-gray-700 dark:text-gray-400">
            <li>
              The Nritta performance is abstract, fast and rhythmic aspect of
              the dance The viewer is presented with pure movement in
              Bharatanatyam, wherein the emphasis is the beauty in motion, form,
              speed, range and pattern. This part of the repertoire has no
              interpretative aspect, no telling of story. It is a technical
              performance, and aims to engage the senses (prakriti) of the
              audience.{' '}
            </li>
            <li>
              The Nritya is slower and expressive aspect of the dance that
              attempts to communicate feelings, storyline particularly with
              spiritual themes in Hindu dance traditions. In a nritya, the
              dance-acting expands to include silent expression of words through
              gestures and body motion set to musical notes. The actor
              articulates a legend or a spiritual message. This part of a
              Bharatanatyam repertoire is more than sensory enjoyment, it aims
              to engage the emotions and mind of the viewer.
            </li>
            <li>
              The Natyam is a play, typically a team performance, but can be
              acted out by a solo performer where the dancer uses certain
              standardized body movements to indicate a new character in the
              underlying story. A Natya incorporates the elements of a Nritya
            </li>
          </ul>
          <a
            href="#"
            className="w-auto inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
        </div>
      </Card>
    </div>
  );
}

export default Background;
