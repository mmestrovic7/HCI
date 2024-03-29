import { createClient } from "contentful";

export interface PostVercel {
  contentTypeId: string;
  sys: {
    id: string;
  };
  fields: {
    title: string;
    date: string;
    location: string;
    rating: number;
    post: string;
  };
}
export interface Post {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    date: string;
    location: string;
    rating: number;
    post: string;
  };
}
export interface GalleryEntry {
  
  sys: {
    id: string;
  };
  fields: {
    photo: Photo;
    date: string;
    location: string;
  };
}
export interface GalleryEntryVercel{
  contentTypeId: string;
  sys: {
    id: string;
  };
  fields: {
    photo: Photo;
    date: string;
    location: string;
  };
}
interface Photo{
  sys:{
    id: string;
  }
  fields: {
    file: {
      url: string;
    };
  };
}

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
});
export const getPostsFromContentful = async () => {
  const response = await client.getEntries<PostVercel>({
    content_type: "post",
  });

  return response.items;
};
export const getGalleryEntriesFromContentful = async () => {
  const response = await client.getEntries<GalleryEntryVercel>({
    content_type: "gallery",
  });

  return response.items;
};
