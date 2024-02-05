import '../globals.css'
import "../about-hs/abouths.css";
import { getGalleryEntriesFromContentful } from '../content';

export default async function Gallery() {
  const galleryEntries = await getGalleryEntriesFromContentful();
  //console.log(galleryEntries);
  //galleryEntries.forEach((entry) => {console.log(entry.fields.photo)});
  return (
    <main>
      <h1 className='abouths-title'>LOVE ON TOUR GALLERY</h1>

    </main>
  )
}

