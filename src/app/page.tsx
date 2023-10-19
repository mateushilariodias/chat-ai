import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

export default function Home() {
  return (
    <div className='flex min-h-screen bg-slate-50 itens-center justify-center'>
      <Card className='w-[400px] h-[700px] grid grid-rows-[min-content_1fr_min-content]'>
        <CardHeader>
          <CardTitle>Chat AI</CardTitle>
          <CardDescription>Using Vercel SDK to create a chat bot.</CardDescription>
        </CardHeader>
        <CardContent className='space-y-3'>
          <div className='flex gap-2 text-slate-600 text-sm'>
            <Avatar>
              <AvatarFallback>MHD</AvatarFallback>
              <AvatarImage src="http://github.com/mateushilariodias.png" />
            </Avatar>
            <p className='leading-relaxed'>
              <span className='block font-bold text-slate-700'>Humano:</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque excepturi nihil, iure esse voluptatem, officiis voluptatibus reprehenderit quisquam vero reiciendis, possimus quod tempora deleniti ipsa minima ipsam voluptatum non molestiae!
            </p>
          </div>
          <div className='flex gap-2 text-slate-600 text-sm'>
            <Avatar>
              <AvatarFallback>MHD</AvatarFallback>
              <AvatarImage src="http://github.com/rafaelchioca.png" />
            </Avatar>
            <p className='leading-relaxed'>
              <span className='block font-bold text-slate-700'>Humano:</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque excepturi nihil, iure esse voluptatem, officiis voluptatibus reprehenderit quisquam vero reiciendis, possimus quod tempora deleniti ipsa minima ipsam voluptatum non molestiae!
            </p>
          </div>
        </CardContent>
        <CardFooter className='space-x-2'>
          <Input placeholder='How can i help you?'></Input>
          <Button type='submit'>Send</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
