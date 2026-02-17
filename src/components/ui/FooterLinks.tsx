import Link from 'next/link';

export default function FooterLinks() {
  return (
    <div className="flex justify-center gap-6 mt-6 text-xs text-gray-400">
      <Link href="/privacy" className="hover:text-gray-600">
        Privacy Policy
      </Link>
      <Link href="/terms" className="hover:text-gray-600">
        Terms of Service
      </Link>
    </div>
  );
}