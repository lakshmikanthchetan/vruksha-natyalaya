import React from 'react';

function Card(props) {
  const { title, desc } = props;
  return (
    <li className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white text-center">
        {title}
      </h2>
      <ul className="space-y-1 text-left max-w-md list-disc list-inside text-gray-500 dark:text-gray-400">
        {desc.map((descItem, i) => (
          <li key={i}>{descItem}</li>
        ))}
      </ul>
    </li>
  );
}

function SimpleCardsList(props) {
  const { heading, cardsData } = props;
  return (
    <div>
      <h2 className="my-5 text-2xl italic font-semibold text-gray-900 dark:text-white">
        {heading}
      </h2>
      <ul className="grid grid-cols-3 gap-4">
        {cardsData.map((card, i) => (
          <Card {...card} key={i} />
        ))}
      </ul>
    </div>
  );
}

export default SimpleCardsList;
