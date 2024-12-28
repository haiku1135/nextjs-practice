import React from 'react';
import Image from 'next/image';
import { getDetailArticle } from '../../../blogAPI';
import DeleteButton from '@/app/components/DeleteButton';
export default async function Article({ params }: {params: {id: string}}) {
  const detailArticle = await getDetailArticle(params.id);
  return (
    <div className='max-w-3xl mx-auto p-5'>
      <Image src="https://source.unsplash.com/collection/1346951/1000x500?sig=2" width={300} height={200} alt="記事1" />
      <h1 className='text-4xl font-bold text-center mb-10 mt-10'>{detailArticle.title}</h1>
      <div className='text-lg leading-relaxed text-justify'>
        <p>{detailArticle.content}</p>
      </div>
      <div className='flex justify-center'>
        <DeleteButton id={detailArticle.id} />
      </div>
    </div>
  )
}