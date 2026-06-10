import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { ui } from '../../i18n/ui';
import { postSlug } from '../../lib/blog';

export async function GET(context) {
  const posts = await getCollection('blog', ({ data }) => data.lang === 'es' && !data.draft);
  return rss({
    title: ui.es['site.title'],
    description: ui.es['blog.description'],
    site: context.site,
    items: posts
      .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
      .map((post) => ({
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.pubDate,
        link: `/es/blog/${postSlug(post.id)}/`,
      })),
    customData: '<language>es-gt</language>',
  });
}
