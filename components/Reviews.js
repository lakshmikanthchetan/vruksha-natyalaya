import Image from 'next/image';
import React from 'react';

const GoogleReviewsLink =
  'https://www.google.com/search?q=vruksha+natyalaya+reviews&rlz=1C5GCEM_en&oq=vruksha+natyalaya+reviews&aqs=chrome..69i57j0i546l3j0i30i546.5757j0j7&sourceid=chrome&ie=UTF-8#lrd=0x3bae19ff478db1d5:0xae9be29a1aff0a05,1,,,';

export const reviewsArr = [
  {
    name: 'Krupa Subramaniam',
    imageSrcUrl: '',
    joinedOn: '',
    reviewedOn: 'April 2022',
    reviewedFrom: 'India',
    reviewTitle: '',
    reviewDesc1:
      'Our daughter has been going to the dance class for a month.  She is thoroughly enjoying the classes. The teacher has a passion for dance and enjoys teaching with children.  She is able to understand the children and make them learn better.',
    reviewDesc2: '',
  },
  {
    name: 'Ramya Lakshmanan',
    imageSrcUrl: '',
    joinedOn: '',
    reviewedOn: 'June 2022',
    reviewedFrom: 'India',
    reviewTitle: '',
    reviewDesc1:
      'Highly recommended place. My daughter is a beginner in bharatanatyam and she is in absolute love with this art form. All thanks to her teacher, Mamtha mam for her patience and for inciting the interest in her students.',
    reviewDesc2: '',
  },
  {
    name: 'Reema Sood Dar',
    imageSrcUrl: '',
    joinedOn: '',
    reviewedOn: 'May 2022',
    reviewedFrom: 'India',
    reviewTitle: '',
    reviewDesc1:
      'We are really blessed to have her teaching our daughter. Seen remarkable improvement in just 3-4 months. Keeps a lot of patience while teaching. Thank You',
    reviewDesc2: '',
  },
  {
    name: 'Nita Thakkar',
    imageSrcUrl: '',
    joinedOn: '',
    reviewedOn: 'June 2022',
    reviewedFrom: 'India',
    reviewTitle: '',
    reviewDesc1:
      'She has good knowledge and experience in bharath natyam. My 4 year old enjoys her classes and we can see the results in her, she is good with teaching with small kids as well as teens.',
    reviewDesc2: '',
  },
  {
    name: 'Satavisha Bhattacharyya',
    imageSrcUrl: '',
    joinedOn: '',
    reviewedOn: 'June 2022',
    reviewedFrom: 'India',
    reviewTitle: '',
    reviewDesc1:
      'Mamtha is really good with the kids and my 3.5 year old really enjoys her classes. She is learning beautifully, and all credits to her teacher. THANKS A LOT',
    reviewDesc2: '',
  },
];

function Review(props) {
  const {
    name,
    imageSrcUrl,
    joinedOn,
    reviewedOn,
    reviewedFrom,
    reviewTitle,
    reviewDesc1,
    reviewDesc2,
  } = props;
  return (
    <article className="my-10">
      <div className="flex items-center mb-1 space-x-4 text-secondary">
        {imageSrcUrl && (
          <Image
            className="w-10 h-10 rounded-full"
            src={imageSrcUrl}
            alt={imageSrcUrl}
            width={10}
            height={10}
          />
        )}
        <div className="space-y-1 font-medium ">
          <p>
            {name}
            {joinedOn && (
              <time
                dateTime=""
                className="block text-sm text-secondary opacity-6 "
              >
                {`Joined on ${joinedOn}`}
              </time>
            )}
          </p>
        </div>
      </div>
      <div className="flex items-center mb-1">
        <svg
          aria-hidden="true"
          className="w-5 h-5 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>First star</title>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
        <svg
          aria-hidden="true"
          className="w-5 h-5 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Second star</title>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
        <svg
          aria-hidden="true"
          className="w-5 h-5 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Third star</title>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
        <svg
          aria-hidden="true"
          className="w-5 h-5 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Fourth star</title>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
        <svg
          aria-hidden="true"
          className="w-5 h-5 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Fifth star</title>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
        <h3 className="ml-2 text-sm font-semibold text-secondary">
          {reviewTitle}
        </h3>
      </div>
      <footer className="mb-5 text-sm text-secondary opacity-6 italic">
        <p>
          {`Reviewed in ${reviewedFrom} on `}
          <time dateTime="">{reviewedOn}</time>
        </p>
      </footer>
      <p className="mb-2 font-light text-tertiary opacity-6 ">{reviewDesc1}</p>
      {reviewDesc2 && (
        <p className="mb-3 font-light text-tertiary opacity-6 ">
          {reviewDesc2}
        </p>
      )}
    </article>
  );
}

function Reviews(props) {
  const { reviewsArr = [] } = props;
  return (
    <div className="text-center my-10 sm:max-w-xl sm:mx-auto">
      <h2 className="text-center text-3xl my-5 italic text-secondary font-semibold">
        Reviews
      </h2>
      <div className="text-left">
        {reviewsArr.map((review, i) => (
          <Review key={i} {...review} />
        ))}
        <a
          href={GoogleReviewsLink}
          target="_blank"
          rel="noreferrer"
          className="text-center block my-10 text-lg font-medium text-primary hover:underline "
        >
          Read All Reviews
        </a>
      </div>
    </div>
  );
}

export default Reviews;
