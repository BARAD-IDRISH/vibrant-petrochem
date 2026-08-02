'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    // Automatically redirect invalid/unknown URLs to the Home Page
    router.replace('/');
  }, [router]);

  return (
    <div className="min-h-screen bg-[#0B1528] text-white flex flex-col items-center justify-center p-6 text-center space-y-4">
      <div className="w-8 h-8 border-2 border-[#C5221F] border-t-transparent rounded-full animate-spin" />
      <p className="text-xs text-slate-300 font-medium">Redirecting to Vibrant Petrochem Home...</p>
    </div>
  );
}
