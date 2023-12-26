import { useLoaderData } from "@remix-run/react"
import { getPosts } from "~/utils/blogPost.server"

export function meta() {
  return [{
    title: "Blogs",
    description: "List of Blogs"
  }]
}
export async function loader() {
  const posts = await getPosts()
  return {
    posts
  }
}

export default function Blogs() {
  const { posts } = useLoaderData<typeof loader>()

  return (
    <div>
      {posts.map((post) => (
        <div key={post.slug}>
          <h2>{post.frontmatter.title}</h2>
          <p>{post.frontmatter.description}</p>
        </div>
      ))}
    </div>
  )
}