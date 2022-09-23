/* eslint-disable @next/next/no-img-element */
import { Tabs } from 'flowbite-react';
import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

const tabArr = [
  {
    title: 'Students',
    imagesArr: [
      'https://loremflickr.com/640/360',
      'https://loremflickr.com/640/360',
      'https://loremflickr.com/640/360',
      'https://loremflickr.com/640/360',
    ],
  },
  {
    title: 'Mamta',
    imagesArr: [
      'https://loremflickr.com/640/360',
      'https://loremflickr.com/640/360',
      'https://loremflickr.com/640/360',
      'https://loremflickr.com/640/360',
      'https://loremflickr.com/640/360',
      'https://loremflickr.com/640/360',
      'https://loremflickr.com/640/360',
      'https://loremflickr.com/640/360',
    ],
  },
];

function GalleryPage() {
  return (
    <div className="container mx-auto px-5 text-secondary">
      <Tabs.Group aria-label="Tabs with underline" style="underline">
        {tabArr.map((tab, i) => (
          <Tabs.Item title={tab.title} active={i == 0} key={i}>
            <LightGallery
              speed={500}
              elementClassNames="grid grid-cols-3 gap-3"
            >
              {tab.imagesArr.map((image, j) => (
                <a href={image} key={j}>
                  <Tabs.Item>
                    <img alt={`${tab.title} Image ${j + 1}`} src={image} />
                  </Tabs.Item>
                </a>
              ))}
            </LightGallery>
          </Tabs.Item>
        ))}
      </Tabs.Group>
    </div>
  );
}

export default GalleryPage;
