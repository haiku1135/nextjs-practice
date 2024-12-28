'use client'

import React from 'react'


export default function Error({ reset }: { reset: () => void }) {
  return (
    <div className="bg-red-100 border-1-4 border-red-500 mt-4 text-red-700 p-4 rounded relative">
      <h3 className='font-bold mb-2'>エラーが発生しました</h3>
      <button className='bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700' onClick={() => reset()}>もう一度試す</button>
    </div>
  )
}
