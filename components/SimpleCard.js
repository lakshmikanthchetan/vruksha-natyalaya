import { Card } from 'flowbite-react';
import Link from 'next/link';
import React from 'react';

function SimpleCard(props) {
  const { title, descArr = [], readMoreLink = '', withMargin = true } = props;
  return (
    <div className={`${withMargin ? 'my-10' : ''}`}>
      <Card>
        <h5 className="text-center text-2xl font-semibold text-secondary italic">
          {title}
        </h5>
        {descArr.map((desc, i) => (
          <p
            className="font-normal text-secondary opacity-8 text-tertiary"
            key={i}
          >
            {desc}
          </p>
        ))}

        {readMoreLink && (
          <div className="mx-auto">
            <Link href={{ readMoreLink }}>
              <a className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-primary rounded-lg focus:outline-none ">
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
            </Link>
          </div>
        )}
      </Card>
    </div>
  );
}

export default SimpleCard;
