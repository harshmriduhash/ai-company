'use client'

import Link from 'next/link'
import { LayoutPanelLeft } from 'lucide-react'

import { Button } from '@/components/ui/button'

export const Navbar = () => {
  return (
    <div className="hidden lg:block">
      <div className="flex items-center">
        <nav className="mr-10 flex items-center gap-x-2">
          <Link href="/">
            <Button variant="ghost">Solutions</Button>
          </Link>
          <Link href="/">
            <Button variant="ghost">Features</Button>
          </Link>
          <Link href="/">
            <Button variant="ghost">Blog</Button>
          </Link>
        </nav>
        <div className="flex gap-2">
          <Link href="/login">
            <Button variant="outline">Login</Button>
          </Link>
          <Link href="/register">
            <Button>
              <LayoutPanelLeft className="mr-2 size-4" />
              Get Started for Free
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
