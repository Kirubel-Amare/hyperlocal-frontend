import Link from 'next/link'

interface HeaderProps {
  showLoginLink?: boolean
  loginHref?: string
}

export default function Header({ showLoginLink = true, loginHref = '/' }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-cyan-500 rounded flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h12v2H6z" />
            </svg>
          </div>
          <span className="text-xl font-bold text-gray-900">Hyperlocal</span>
        </div>
        {showLoginLink && (
          <div className="flex items-center gap-4">
            <span className="text-gray-600">Already have an account?</span>
            <Link href="/login" className="text-cyan-600 hover:text-cyan-700 font-medium">
              Log in
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
