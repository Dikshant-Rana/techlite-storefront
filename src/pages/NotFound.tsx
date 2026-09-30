import { Link } from 'react-router-dom';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <>
      <SEO title="404 - Page Not Found | TechLite Groups" description="The page you are looking for does not exist." url="https://techlite.com.np/404" />
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center space-y-6 px-6 py-20 font-sans">
        <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center text-red-500">
          <AlertTriangle className="w-8 h-8" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">404 - Page Not Found</h1>
        <p className="text-slate-600 max-w-md text-base leading-relaxed">
          The page or service you are looking for doesn't exist, has been moved, or is no longer available.
        </p>
        <Link
          to="/"
          className="bg-[#066291] hover:bg-[#044e74] text-white px-6 py-3 rounded-full font-bold text-sm inline-flex items-center gap-2 transition-all shadow-md shadow-[#066291]/10"
        >
          <ArrowLeft className="w-4 h-4" /> Return to Home
        </Link>
      </div>
    </>
  );
}
