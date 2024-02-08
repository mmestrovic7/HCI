import '../globals.css'
import "../about-hs/abouths.css";
import  GalleryComponent from '../components/GalleryComponent/GalleryComponent';
import { getGalleryEntriesFromContentful,GalleryEntry } from '../content';
export default async function Gallery() {
  const galleryEntries: GalleryEntry[] = await getGalleryEntriesFromContentful();
  
  
  return (
    <main>
      <h1 className='abouths-title'>LOVE ON TOUR GALLERY</h1>
      <GalleryComponent galleryEntries={galleryEntries} />
 
    </main>
  )
}
