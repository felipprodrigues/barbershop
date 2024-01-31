'use client'

import SideMenu from '@/app/_components/side-menu'
import { Button } from '@/app/_components/ui/button'
import { SheetTrigger, SheetContent, Sheet } from '@/app/_components/ui/sheet'
import { Barbershop } from '@prisma/client'
import { ChevronLeftIcon, MapPinIcon, MenuIcon } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface BarbershopInfoProps {
  barbershop: Barbershop
}

export function BarbershopInfo({ barbershop }: BarbershopInfoProps) {
  const router = useRouter()

  function handleBackClick() {
    router.replace('/')
  }

  return (
    <div>
      <div className="w-full relative h-[250px]">
        <Button
          size="icon"
          variant="outline"
          className="absolute z-50 top-4 left-4"
          onClick={handleBackClick}
        >
          <ChevronLeftIcon />
        </Button>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              size="icon"
              variant="outline"
              className="z-50 top-4 right-4 absolute"
            >
              <MenuIcon />
            </Button>
          </SheetTrigger>

          <SheetContent className="p-0">
            <SideMenu />
          </SheetContent>
        </Sheet>

        <Image
          src={barbershop.imageUrl}
          fill
          alt={barbershop.name}
          style={{ objectFit: 'cover' }}
          className="opacity-75"
        />
      </div>

      <div className="px-5 pt-3 pb-6 border-b border-solid border-secondary">
        <h1 className="text-xl font-bold ">{barbershop.name}</h1>

        <div className="flex items-center gap-1 mt-2">
          <MapPinIcon className="text-primary" size={18} />
          <p className="text-sm">{barbershop.address}</p>
        </div>

        <div className="flex items-center gap-1 mt-2">
          <MapPinIcon className="text-primary" size={18} />
          <p className="text-sm">5,0 (899 Avaliações)</p>
        </div>
      </div>
    </div>
  )
}
