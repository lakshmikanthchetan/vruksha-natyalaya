import { Carousel } from 'flowbite-react';
import Image from 'next/image';
import { Footer, Header } from '../components';

function about() {
  return (
    <div className="container mx-auto">
      <Header />
      <div className="sm:h-64 md:h-80 2xl:h-96">
        <Carousel slide={false}>
          <div className="h-full">
            <Image
              src="/images/1.jpg"
              alt="..."
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="h-full">
            <Image
              src="/images/2.jpg"
              alt="..."
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="h-full">
            <Image
              src="/images/3.jpg"
              alt="..."
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="h-full">
            {' '}
            <Image
              src="/images/4.jpg"
              alt="..."
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="h-full">
            <Image
              src="/images/5.jpg"
              alt="..."
              layout="fill"
              objectFit="cover"
            />
          </div>
        </Carousel>
      </div>
      <Footer />
    </div>
  );
}

export default about;
