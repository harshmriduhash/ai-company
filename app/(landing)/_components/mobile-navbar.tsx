'use client'

import Link from 'next/link'
import { MenuIcon } from 'lucide-react'

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Button } from '@/components/ui/button'
import { Logo } from './logo'

export const MobileNavbar = () => {
  return (
    <div className="mt-2 block cursor-pointer lg:hidden">
      <Drawer>
        <DrawerTrigger>
          <MenuIcon />
        </DrawerTrigger>
        <DrawerContent>
          <div className="grid gap-1.5 p-4 px-6 text-center sm:text-left">
            <DrawerHeader>
              <DrawerTitle>
                <Logo />
              </DrawerTitle>
              <DrawerDescription className="sr-only">
                Navigation
              </DrawerDescription>
            </DrawerHeader>
            <div className="mt-7 flex flex-col space-y-3 text-left font-bold">
              <Link href="/">Features</Link>
              <Link href="/">Solutions</Link>
              <Link href="/">Blog</Link>
            </div>
          </div>
          <DrawerFooter>
            <div className="flex flex-col gap-y-2">
              <Button className="w-full" variant="outline">
                Login
              </Button>
              <Button className="w-full">Get Started for Free</Button>
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}
