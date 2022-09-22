import Image from 'next/image';
import React from 'react';

const GoogleReviewsLink =
  'https://www.google.com/search?q=vruksha+natyalaya+reviews&rlz=1C5GCEM_en&oq=vruksha+natyalaya+reviews&aqs=chrome..69i57j0i546l3j0i30i546.5757j0j7&sourceid=chrome&ie=UTF-8#lrd=0x3bae19ff478db1d5:0xae9be29a1aff0a05,1,,,';

export const reviewsArr = [
  {
    name: 'Chetan',
    imageSrcUrl: '',
    joinedOn: 'August 2014',
    reviewedOn: 'March 3, 2017',
    reviewedFrom: 'United Kingdom',
    reviewTitle: 'Thinking to buy another one!',
    reviewDesc1:
      'This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No problems.',
    reviewDesc2:
      'It is obviously not the same build quality as those very expensivewatches. But that is like comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.',
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
    <article>
      <div className="flex items-center mb-4 space-x-4">
        {imageSrcUrl && (
          <Image
            className="w-10 h-10 rounded-full"
            src={imageSrcUrl}
            alt={imageSrcUrl}
            width={10}
            height={10}
          />
        )}
        <div className="space-y-1 font-medium dark:text-white">
          <p>
            {name}
            <time
              dateTime=""
              className="block text-sm text-gray-500 dark:text-gray-400"
            >
              {`Joined on ${joinedOn}`}
            </time>
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
        <h3 className="ml-2 text-sm font-semibold text-gray-900 dark:text-white">
          {reviewTitle}
        </h3>
      </div>
      <footer className="mb-5 text-sm text-gray-500 dark:text-gray-400">
        <p>
          {`Reviewed in ${reviewedFrom} on `}
          <time dateTime="">{reviewedOn}</time>
        </p>
      </footer>
      <p className="mb-2 font-light text-gray-500 dark:text-gray-400">
        {reviewDesc1}
      </p>
      {reviewDesc2 && (
        <p className="mb-3 font-light text-gray-500 dark:text-gray-400">
          {reviewDesc2}
        </p>
      )}
    </article>
  );
}

function Reviews(props) {
  const { reviewsArr = [] } = props;
  return (
    <div className="text-center my-10">
      <h2 className="text-center text-2xl my-5 italic">Reviews</h2>
      <div className="text-left">
        {reviewsArr.map((review, i) => (
          <Review key={i} {...review} />
        ))}
        <a
          href={GoogleReviewsLink}
          target="_blank"
          rel="noreferrer"
          className="block mb-5 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          Read more
        </a>
      </div>
    </div>
  );
}

export default Reviews;
