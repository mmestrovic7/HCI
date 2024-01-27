import { createClient } from "contentful";
import Link from "next/link";
import { Post } from "../page";
import "./post.css";
import PostClosed from "@/app/components/PostClosed/PostClosed";
import CustomButton from "@/app/components/CustomButton/CustomButton";
import { truncate } from "fs";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
});

const getPostsFromContentful = async () => {
  const response = await client.getEntries<Post>({
    content_type: "post", // Assuming 'Post' is the content type ID in Contentful
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
      <div className="post">
        <PostClosed
          title={post.fields.title}
          rating={post.fields.rating}
          location={post.fields.location}
          date={post.fields.date}
          open={true}
        />
        <p className="postBody">{post.fields.post}</p>
        <div className="button">
        <CustomButton text="GO BACK" href="/fans/experiences" />
        </div>
      </div>
    </main>
  );
}
