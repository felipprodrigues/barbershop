import { db } from '@/app/_lib/prisma'
import { BarbershopInfo } from './_components/barbershop-info'

interface BarbershopDetailsProps {
  params: {
    id?: string
  }
}

export default async function BarbershopDetailsPage({
  params,
}: BarbershopDetailsProps) {
  if (!params.id) {
    // TODO: redirecionar para home pager
    return null
  }

  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
  })

  if (!barbershop) {
    // TODO: redirecionar para home pager
    return null
  }

  return <BarbershopInfo barbershop={barbershop} />
}
