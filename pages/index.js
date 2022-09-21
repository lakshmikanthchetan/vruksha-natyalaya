import { Carousel } from 'flowbite-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel slide={false}>
          <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <Image
              src="/images/download.png"
              alt="..."
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <Image
              src="/images/download.png"
              alt="..."
              layout="fill"
              objectFit="cover"
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
