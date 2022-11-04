/* eslint-disable @next/next/no-img-element */
import { Tabs } from 'flowbite-react';
import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

const tabArr = [
  {
    title: 'Recent',
    imagesArr: [
      '/images/1.jpg',
      '/images/2.jpg',
      '/images/3.jpg',
      '/images/4.jpg',
      '/images/5.jpg',
      '/images/6.jpg',
      '/images/7.jpg',
      '/images/8.jpg',
      '/images/9.jpg',
      '/images/10.jpg',
      '/images/11.jpg',
      '/images/12.jpg',
      '/images/13.jpg',
      '/images/14.jpg',
      '/images/15.jpg',
      '/images/16.jpg',
      '/images/17.jpg',
      '/images/18.jpg',
      '/images/19.jpg',
      '/images/20.jpg',
      '/images/21.jpg',
    ],
  },
];

function GalleryPage() {
  return (
    <div className="container mx-auto px-5 text-secondary gallery">
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
                    <img alt={`Image ${j + 1}`} src={image} />
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
