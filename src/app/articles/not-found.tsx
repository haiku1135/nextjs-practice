import React from 'react'
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='p-8 rounded-lg shadow-md text-center bg-white'>
        <h1 className='text-4xl font-bold mb-4 text-gray-800'>404 Not Found</h1>
        <p className='text-lg text-gray-600'>ページが見つかりませんでした。</p>
        <Link href='/' className='text-blue-500 hover:text-blue-700'>トップページに戻る</Link>
      </div>
    </div>
  )
}
