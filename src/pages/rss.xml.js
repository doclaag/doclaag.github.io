import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { ui } from '../i18n/ui';
import { postSlug } from '../lib/blog';

export async function GET(context) {
  const posts = await getCollection('blog', ({ data }) => data.lang === 'en' && !data.draft);
  return rss({
    title: ui.en['site.title'],
    description: ui.en['blog.description'],
    site: context.site,
    items: posts
      .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
      .map((post) => ({
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.pubDate,
        link: `/blog/${postSlug(post.id)}/`,
      })),
    customData: '<language>en-us</language>',
  });
}
