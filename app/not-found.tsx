import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0B1528] text-white flex flex-col items-center justify-center p-6 text-center space-y-6">
      <div className="text-6xl font-extrabold text-brand-red-vibrant font-display">404</div>
      <h1 className="text-2xl font-bold font-display">Page Not Found</h1>
      <p className="text-sm text-slate-300 max-w-md">
        The requested page does not exist or has been relocated.
      </p>
      <Link
        href="/"
        className="bg-brand-red-vibrant hover:bg-brand-red-hover text-white text-xs font-bold px-6 py-3 rounded-xl transition-colors shadow-lg"
      >
        Return to Home Page
      </Link>
    </div>
  );
}
