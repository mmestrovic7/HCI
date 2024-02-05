import '../globals.css'
import { getGalleryEntriesFromContentful } from '../content';

export default async function Gallery() {
  const photos = await getGalleryEntriesFromContentful();
  return (
    <main>
      <h1>LOVE ON TOUR GALLERY</h1>

    </main>
  )
}

