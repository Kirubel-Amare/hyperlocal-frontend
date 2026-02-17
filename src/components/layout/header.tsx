import Link from 'next/link'
import { ReactNode } from 'react'
import Image from 'next/image'

interface HeaderProps {
  showLoginLink?: boolean
  loginHref?: string
  rightElement?: ReactNode
}

export default function Header({
  showLoginLink = true,
  loginHref = '/login',
  rightElement
}: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/logo-removebg-preview.png"
            alt="Servicely Logo"
            width={32}   // adjust to your logo’s natural size
            height={32}
            className="object-contain"
          />
          <span className="text-xl font-bold text-gray-900">Hyperlocal</span>
        </div>

        {rightElement ? (
          rightElement
        ) : showLoginLink ? (
          <div className="flex items-center gap-4">
            <span className="text-gray-600 hidden sm:inline">Already have an account?</span>
            <Link href={loginHref} className="text-cyan-600 hover:text-cyan-700 font-medium">
              Log in
            </Link>
          </div>
        ) : null}
      </div>
    </header>
  )
}