import React from 'react'
import type { Article } from '../../types';
import ArticleCard from './ArticleCard';

type ArticleListProps = {
  articles: Article[];
}

export default function ArticleList({ articles }: ArticleListProps) {
  return (
    <div>
      {
        articles.map((article) => (
          <ArticleCard article={article} key={article.id} />
        ))
      }
    </div>
  )
}
