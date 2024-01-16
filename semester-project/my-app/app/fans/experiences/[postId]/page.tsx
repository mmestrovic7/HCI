import { createClient, Entry } from 'contentful';
import Link from "next/link";

interface Post {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    date: string; // You might need to parse this as a Date based on Contentful response format
    location: string;
    rating: number;
    post: string;
  };
}

const client = createClient({
  space: 'lngf8ayzzg03',
  accessToken: 'PzSShVO2axKM8luY1fbq0_MU6ONERi6cuAe-4CVECM0',
});

const getPostsFromContentful = async (): Promise<Post[]> => {
  const response = await client.getEntries<Post>({
    content_type: 'post', // Assuming 'Post' is the content type ID in Contentful
  });
  return response.items;
};

interface Params {
  postId: string;
}

export default async function BlogPost({ params }: { params: Params }) {
  const posts = await getPostsFromContentful();
  const post = posts.find((p) => p.sys.id === params.postId);

  if (!post) {
    // Handle post not found
    return (
      <main>
        <h1>Post not found</h1>
        <Link href="/fans/experiences">GO BACK</Link>
      </main>
    );
  }

  return (
    <main>
      <h1> {post.fields.title}
      </h1>

      <p>{post.fields.post}</p>
      <h2>
        <Link href="/fans/experiences">GO BACK</Link>
      </h2>
    </main>
  );
}
