import { LoaderFunction, MetaFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useMemo } from "react";
import { getPost } from "~/utils/blogPost.server";
import { getMDXComponent } from 'mdx-bundler/client/index.js'

/**
 * Update meta tags for a blog page
 * 
 * @param data - contains loader data
 * @returns meta data
 */
export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data || !data.frontmatter) return [];

  const frontmatter = data.frontmatter;
  const title = frontmatter?.title ?? "Blog Post";
  const description = frontmatter?.description ?? ""

  return [{
    title,
    description,
    "og:twitter:title": title,
    "og:twitter:description": description
  }];
};


/**
 * Use the slug to get the post
 * 
 * @param params - contains slug blog
 * @returns 
 */
export const loader: LoaderFunction = async ({ params }) => {
  const slug = params["blog"];
  if (!slug) throw new Response("Not found", { status: 404 });

  const post = await getPost(slug);
  if (post) {
    const { frontmatter, code } = post;
    return json({ frontmatter, code });
  } else {
    throw new Response("Not found", { status: 404 });
  }
};

export default function Post() {
  const { code } = useLoaderData<typeof loader>();
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <>
      <div className="bg-itembgcolor rounded-lg p-5">
        <Component />
      </div>
    </>
  );
}