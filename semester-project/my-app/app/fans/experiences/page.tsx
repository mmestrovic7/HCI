import { createClient } from 'contentful';
import Link from "next/link";
import { Entry, EntryFields } from 'contentful';

interface Post {
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
  contentTypeId: string;
}

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
});

const getPostsFromContentful = async (): Promise<Post[]> => {
  const response = await client.getEntries<Post>({
    content_type: 'post', 
  });
  return response.items;
};

export default async function Blog() {
  const posts = await getPostsFromContentful();

  return (
    <main>
      <h1>FAN EXPERIENCES</h1>

      <ul>
        {posts.map((post) => (
          <li key={post.sys.id}>
            <Link href={`experiences/${post.sys.id}`}>
              <span>
                {post.fields.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
