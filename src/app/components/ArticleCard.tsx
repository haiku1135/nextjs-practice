import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import type { Article } from '../../types';

type ArticleCardProps = {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <article className="shadow my-4 flex flex-col" key={article.id}>
      <Link href={`/artcles/${article.id}`} className='hover:opacity-75'>
        <Image src={`https://source.unsplash.com/collection/1346951/1000x500?sig=${article.id}`} width={300} height={200} alt="記事1" />
      </Link>
      <div className='bg-white flex flex-col justify-start p-6'>
        <Link href={`/articles/${article.id}`} className='text-blue-700 pb-4 font-bold'>Technology</Link>
        <Link href={`/articles/${article.id}`} className='text-slate-900 text-3xl font-bold pb-4 hover:text-gray-700'>{article.title}</Link>
        <p className='text-sm text-slate-900 pb-3'>Published on {article.createdAt}</p>
        <Link href={`/articles/${article.id}`} className='text-slate-900 pb-6'>
          {article.content.length > 70 ? article.content.substring(0, 70) + '...' : article.content}
        </Link>
        <Link href={`/articles/${article.id}`} className='text-pink-800 hover:text-black'>続きを読む</Link>
      </div>
    </article>
  )
}
