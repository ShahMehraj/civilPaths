import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-lg mx-auto text-center py-20">
      <h1 className="text-4xl font-bold text-text-primary mb-4">404</h1>
      <p className="text-text-secondary mb-6">
        This page doesn&apos;t exist yet. It might be part of an upcoming module.
      </p>
      <Link
        href="/"
        className="inline-flex items-center px-5 py-2.5 bg-navy-900 hover:bg-navy-800 text-white font-medium rounded-lg transition-colors text-sm"
      >
        Back to Home
      </Link>
    </div>
  );
}
