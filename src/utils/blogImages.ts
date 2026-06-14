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

export function resolveBlogHeroImage(post: BlogPostLike): string {
  const image = post.data.heroImage || post.data.coverImage;
  if (!image) return '/images/blog-placeholder.jpg';
  if (typeof image !== 'string') return image.src;
  if (image.startsWith('/')) return image;
  if (image.startsWith('./images/')) {
    const slug = getCleanSlug(post.id);
    return `/images/blog/${slug}/${image.replace('./images/', '')}`;
  }
  return '/images/blog-placeholder.jpg';
}
