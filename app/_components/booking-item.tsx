import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { Card, CardContent } from './ui/card'

export function BookingItem() {
  return (
    <Card>
      <CardContent className="flex justify-between p-0">
        <div className="flex flex-col gap-2 p-6">
          <Badge className="bg-[#221C3D] text-primary hover:bg-[#221C3D] w-fit">
            Confirmado
          </Badge>

          <h2 className="font-bold">Corte de cabelo</h2>

          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src="https://utfs.io/f/0ddfbd26-a42443a0-aaf3-c3f1dc6be6d1-1kgxo7.png"></AvatarImage>

              <AvatarFallback>A</AvatarFallback>
            </Avatar>

            <h3 className="text-sm">Vintage Barber</h3>
          </div>
        </div>

        <div className="items-center flex p-6 border-l border-solid border-secondary">
          <p className="text-sm flex flex-col text-center">
            Fevereiro
            <span className="text-2xl">29</span>
            09:45
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
