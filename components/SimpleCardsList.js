import React from 'react';

function Card(props) {
  const { title, desc } = props;
  return (
    <li className="block p-6 max-w-2xl bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100   ">
      <h2 className="mb-2 text-lg font-semibold text-secondary  text-center">
        {title}
      </h2>
      <ul className="space-y-1 text-left max-w-2xl list-disc list-inside text-tertiary opacity-6 ">
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
      <h2 className="text-center my-5 text-2xl italic font-semibold text-secondary ">
        {heading}
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-10 max-w-4xl mx-auto">
        {cardsData.map((card, i) => (
          <Card {...card} key={i} />
        ))}
      </ul>
    </div>
  );
}

export default SimpleCardsList;
