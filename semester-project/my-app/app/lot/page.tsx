import '../globals.css'
import "../about-hs/abouths.css";
import Polaroid from '../components/Polaroid/Polaroid';
import { getGalleryEntriesFromContentful,GalleryEntry } from '../content';
import './lot.css';
export default async function Gallery() {
  const galleryEntries: GalleryEntry[] = await getGalleryEntriesFromContentful();
  
  return (
    <main>
      <h1 className='abouths-title'>LOVE ON TOUR GALLERY</h1>
      <div className='gallery'>
        {galleryEntries.map((entry) => {
          return (
            <Polaroid location={entry.fields.location} date={entry.fields.date} imageSrc={entry.fields.photo.fields.file.url} key={entry.sys.id}/>
          );
        }
        )}
      </div>
 
    </main>
  )
}
