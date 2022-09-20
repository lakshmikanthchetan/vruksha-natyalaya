import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
// import 'lightgallery/css/lg-zoom.css';
// import 'lightgallery/css/lg-thumbnail.css';
// import lgThumbnail from 'lightgallery/plugins/thumbnail';
// import lgZoom from 'lightgallery/plugins/zoom';

import Image from 'next/image';

const galleryImages = [
  '/images/1.jpg',
  '/images/2.jpg',
  '/images/10.jpg',
  '/images/11.jpg',
];

function Gallery() {
  return (
    <div className="App">
      <LightGallery
        speed={500}
        //    plugins={[lgThumbnail, lgZoom]}
      >
        {galleryImages.map((image, i) => (
          <a href={image} className="pr-5 pb-5" key={i}>
            <Image alt="img1" src={image} width={380} height={380} />
          </a>
        ))}
      </LightGallery>
    </div>
  );
}

export default Gallery;
