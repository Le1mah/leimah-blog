import { create } from 'xmlbuilder2';
import type { Article } from './parseInput';
import { escape } from 'html-escaper';
import { generateUrn } from './generateUrn';

export function makeAtom(articles: Article[], feedUid: string, feedTitle: string, feedLink: string): string {
  const feed = create({ version: '1.0', encoding: 'UTF-8' })
    .ele('feed', { xmlns: 'http://www.w3.org/2005/Atom' })
      .ele('id').txt(feedUid).up()
      .ele('title').txt(feedTitle).up()
      .ele('link', { href: feedLink });

  articles.forEach(article => {
    feed.ele('entry')
      .ele('title').txt(article.title).up()
      .ele('link', { href: `/#/newsDetail/${article.columnId}/${article.id}` }).up()
      .ele('updated').txt(article.publishTime).up()
      .ele('id').txt(article.link ? generateUrn() : article.id).up()
      .ele('content', { type: 'html' }).txt(escape(article.content));
  });

  feed.ele('updated').txt(articles[0].publishTime);

  return feed.end({ prettyPrint: true });
}