import React from 'react';

function Quote() {
  return (
    <div>
      <figure className="mx-auto max-w-screen-md text-center">
        <div className="sm:flex justify-center">
          <div className="flex-1">
            <svg
              aria-hidden="true"
              className="mx-auto mb-3 w-12 h-12 text-gray-400 "
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              />
            </svg>
            <blockquote>
              <div className="text-xl italic font-medium text-secondary ">
                <p>Yatho Hasthas Thatho Dhrishti</p>
                <p>Yatho Dhrishtis Thatho Manaha</p>
                <p>Yatho Manas Thatho Bhavaha </p>
                <p>Yatho Bhavas Thatho Rasaha</p>
              </div>
            </blockquote>
          </div>
          <div className="flex-1 text-lg italic font-small text-secondary   mt-14 pt-1">
            <p>Where the Hands go, the Eyes should follow</p>
            <p>Where the Eyes go, the Mind should follow suit</p>
            <p>Where the Mind goes, the Psychological state should follow</p>
            <p>Where the Psychological state goes, Sentiment arises.</p>
          </div>
        </div>
        <figcaption className="flex justify-center items-center mt-6 space-x-3">
          <div className="flex items-center divide-x-2 divide-gray-500 ">
            <cite className="pr-3 font-medium text-secondary ">
              Nandikeshwar
            </cite>
            <cite className="pl-3 text-sm font-light text-secondary opacity-6 ">
              Abhinaya Darpanam
            </cite>
          </div>
        </figcaption>

        <h2 className="my-10 font-bold text-secondary">
          A good dancer needs to evoke the sentiment of the audience by
          following the essence of this verse.
        </h2>
      </figure>
    </div>
  );
}

export default Quote;
