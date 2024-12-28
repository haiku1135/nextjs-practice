"use client";

import React, { useState } from 'react';
import { createArticle } from '@/blogAPI';
import { useRouter } from 'next/navigation';

export default function CreateBlogPage() {
  const router = useRouter();
  const [id, setId] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    await createArticle(id, title, content);

    setIsLoading(false);
    router.push('/');
    router.refresh();
  }
  return (
    <div className='min-h-screen py-8 px-4 md:px-12'>
      <h2 className='text-2xl font-bold mb-4'>ブログ新規作成</h2>
      <form className='bg-slate-200 p-6 rounded shadow-lg' onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label htmlFor="" className='text-gray-700 text-sm font-bold mb-2'>URL</label>
          <input type="text" className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none' value={id} onChange={(e) => setId(e.target.value)} />
        </div>
        <div className='mb-4'>
          <label htmlFor="" className='text-gray-700 text-sm font-bold mb-2'>タイトル</label>
          <input type="text" className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none' value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className='mb-4'>
          <label htmlFor="" className='text-gray-700 text-sm font-bold mb-2'>本文</label>
          <textarea className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none' value={content} onChange={(e) => setContent(e.target.value)} />
        </div>
        <button type="submit" className={`py-2 px-4 border rounded-md bg-orange-300 ${isLoading ? "bg-orange-300 cursor-not-allowed rounded-full animate-spin w-16 h-16 border-t-4" : "bg-orange-400 hover:bg-orange-500"}`} disabled={isLoading}>投稿</button>
      </form>
    </div>
  )
}
