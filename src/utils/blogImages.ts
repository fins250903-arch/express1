type BlogPostImage = string | { src: string };

interface BlogPostLike {
  id: string;
  data: {
    heroImage?: BlogPostImage;
    coverImage?: BlogPostImage;
  };
}

export function getCleanSlug(id: string): string {
  return id.endsWith('/index') ? id.replace(/\/index$/, '') : id;
}

export function resolveBlogHeroImage(post: BlogPostLike): string | undefined {
  const image = post.data.heroImage || post.data.coverImage;
  if (!image) return undefined;
  if (typeof image !== 'string') return image.src;
  if (image.startsWith('/')) return image;
  if (image.startsWith('./images/')) {
    const slug = getCleanSlug(post.id);
    return `/images/blog/${slug}/${image.replace('./images/', '')}`;
  }
  return undefined;
}
