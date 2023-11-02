'use client'

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Button } from "./ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card"
import { Input } from "./ui/input"
import { useChat } from 'ai/react'
import { ScrollArea } from "./ui/scroll-area"

export function Chat() {
    const { messages, input, handleInputChange, handleSubmit } = useChat({
        api: '/api/chat',
    });

    return (
        <Card className='w-[400px]'>
            <CardHeader>
                <CardTitle>Chat AI</CardTitle>
                <CardDescription>Using Vercel SDK to create a chat bot.</CardDescription>
            </CardHeader>
            <CardContent>
                <ScrollArea className="h-[640px] w-full pr-4">
                { messages.map(message => {
                    return (
                        <div key={message.id} className='flex gap-2 text-slate-600 text-sm mb-4'>
                            {message.role === 'user' && (
                                <Avatar>
                                    <AvatarFallback>MHD</AvatarFallback>
                                    <AvatarImage src="http://github.com/mateushilariodias.png" />
                                </Avatar>
                            )}
                            {message.role === 'assistant' && (
                                <Avatar>
                                    <AvatarFallback>RMC</AvatarFallback>
                                    <AvatarImage src="http://github.com/rafaelchioca.png" />
                                </Avatar>
                            )}
                            <p className='leading-relaxed'>
                                <span className='block font-bold text-slate-700'>
                                    {message.role === 'user' ? 'Usuário' : 'AI'}:
                                </span>
                                {message.content}
                            </p>
                        </div>
                    )
                })}
                </ScrollArea>
            </CardContent>
            <CardFooter>
                <form className='w-full flex gap-2' onSubmit={handleSubmit}>
                    <Input placeholder='How can i help you?' value={input} onChange={handleInputChange} ></Input>
                    <Button type='submit'>Send</Button>
                </form>
            </CardFooter>
        </Card>
    )
}