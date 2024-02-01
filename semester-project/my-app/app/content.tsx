import { createClient } from "contentful";

export interface Post {
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

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
});

export const getPostsFromContentful = async () => {
  const response = await client.getEntries<Post>({
    content_type: "post",
  });
  return response.items;
};