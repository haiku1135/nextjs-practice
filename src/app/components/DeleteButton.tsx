"use client";

import { useRouter } from 'next/navigation';
import { deleteArticle } from '@/blogAPI';

type DeleteButtonProps = {
  id: string;
}

export default function DeleteButton({ id }: DeleteButtonProps) {
  const router = useRouter();
  const handleDelete = async () => {
    await deleteArticle(id);
    router.push('/');
    router.refresh();
  }
  return (
    <div className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md inline cursor-pointer' onClick={handleDelete}>
      削除
    </div>
  )
}
