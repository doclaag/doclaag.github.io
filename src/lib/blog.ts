/** Strip the locale folder from a blog entry id: "en/my-post" -> "my-post". */
export function postSlug(id: string): string {
  return id.replace(/^(en|es)\//, '');
}
