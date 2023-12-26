import parseFrontMatter from "front-matter";
import { readFile, readdir } from "fs/promises"
import path from "path";
import { bundleMDX } from "mdx-bundler";

export type Frontmatter = {
  title?: string;
  description?: string;
  date?: string;
  tags?: string[];
}

/**
 * Get the React component, and frontmatter JSON for a given slug
 * @param slug 
 * @returns 
 */
export async function getPost(slug: string) {

  const filePath = path.join(process.cwd(), 'app', 'blog-posts', slug + ".mdx");

  const [source] = await Promise.all([
    readFile(
      filePath,
      "utf-8"
    )
  ]);

  // Dyamically import all the rehype/remark plugins we are using 
  // const [rehypeHighlight, remarkGfm] = await Promise.all([
  //   import("rehype-highlight").then((mod) => mod.default),
  //   import("remark-gfm").then((mod) => mod.default),
  // ])

  const post = await bundleMDX({
    source,
    cwd: process.cwd(),

    esbuildOptions: (options) => {
      // Configuration to allow image loading 
      // https://github.com/kentcdodds/mdx-bundler#image-bundling
      options.loader = {
        ...options.loader,
        '.png': 'dataurl',
        '.gif': 'dataurl',

      };

      return options;
    },
    // mdxOptions: (options) => {
    //   options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkGfm];
    //   options.rehypePlugins = [...(options.rehypePlugins ?? []), rehypeHighlight]
    //   return options
    // }
  });

  return post
}

/**
 * Get all frontmatter for all posts
 * @returns 
 */
export async function getPosts() {

  const filePath = path.join(process.cwd(), 'app', 'blog-posts');

  const postsPath = await readdir(filePath, {
    withFileTypes: true,
  });

  const posts = await Promise.all(
    postsPath.map(async (dirent) => {

      const fPath = path.join(filePath, dirent.name)
      const [file] = await Promise.all([readFile(
        fPath,
      )
      ])
      const frontmatter = parseFrontMatter(file.toString());
      const attributes = frontmatter.attributes as Frontmatter;

      return {
        slug: dirent.name.replace(/\.mdx/, ""),
        frontmatter: {
          ...attributes,
        }
      };
    })
  );
  return posts;
}