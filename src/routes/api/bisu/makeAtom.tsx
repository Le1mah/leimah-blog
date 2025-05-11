import { XMLBuilder } from 'fast-xml-parser'; // pnpm add fast-xml-parser
import type { Article } from './parseInput';
import { generateUrn } from './generateUrn';

export function makeAtom(articles: Article[], feedUid: string, feedTitle: string, feedLink: string): string {
 const builder = new XMLBuilder({
   ignoreAttributes: false,
   format: true,
   attributeNamePrefix: "@_"
 });

 const feed = {
   feed: {
     "@_xmlns": "http://www.w3.org/2005/Atom",
     id: feedUid,
     title: feedTitle,
     link: { "@_href": feedLink },
     updated: articles[0].publishTime,
     entry: articles.map(article => ({
       title: article.title,
       link: { "@_href": `/#/newsDetail/${article.columnId}/${article.id}` },
       updated: article.publishTime,
       id: article.link ? generateUrn() : article.id,
       content: {
         "@_type": "html",
         "#text": article.content
       }
     }))
   }
 };

 return builder.build(feed);
}