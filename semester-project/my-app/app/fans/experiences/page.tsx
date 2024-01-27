import { createClient } from "contentful";
import Link from "next/link";
import PostClosed from "@/app/components/PostClosed/PostClosed";
import "./experiences.css";

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

const getPostsFromContentful = async () => {
  const response = await client.getEntries<Post>({
    content_type: "post",
  });
  return response.items;
};

export default async function Post() {
  const posts = await getPostsFromContentful();

  return (
    <main>
      <h1>FAN EXPERIENCES</h1>
      <ul className="posts">
        {posts.map((post) => (
          <li key={post.sys.id}>
            <Link key={post.sys.id} href={`experiences/${post.sys.id}`}>
              <PostClosed
                title={post.fields.title}
                rating={post.fields.rating}
                location={post.fields.location}
                date={post.fields.date}
                open={false}
              />
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
