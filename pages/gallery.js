import { Footer, Header, Gallery } from '../components';

function GalleryPage() {
  return (
    <div className="container mx-auto ">
      <Header />
      <div>
        <Gallery />
      </div>
      <Footer />
    </div>
  );
}

export default GalleryPage;
