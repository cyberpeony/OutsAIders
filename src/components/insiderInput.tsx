import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from 'react';

export function InsiderInput() {
  return (
    <div className="flex h-screen w-full flex-col bg-gray-950 text-gray-50">
      <header className="flex items-center justify-between border-b border-gray-800 px-6 py-4">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage alt="AI Assistant" src="/avatar.jpg" />
            <AvatarFallback>AI</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-lg font-medium">AI Assistant</h3>
            <p className="text-sm text-gray-400">Online</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Button size="icon" variant="ghost">
            <SearchIcon className="h-5 w-5" />
          </Button>
          <Button size="icon" variant="ghost">
            <SettingsIcon className="h-5 w-5" />
          </Button>
        </div>
      </header>
      <main className="flex-1 overflow-y-auto px-6 py-8">
        <div className="space-y-8">
          <div className="flex items-start space-x-4">
            <Avatar>
              <AvatarImage alt="AI Assistant" src="/avatar.jpg" />
              <AvatarFallback>AI</AvatarFallback>
            </Avatar>
            <div className="max-w-[80%]">
              <div className="rounded-2xl rounded-tl-none bg-gray-800 p-4 text-sm">
                <p>
                  Hello, I'm your AI assistant. How can I help you today? I'm here to provide a calm and peaceful
                  presence.
                </p>
              </div>
              <p className="mt-2 text-xs text-gray-400">10:30 AM</p>
            </div>
          </div>
          <div className="flex justify-end items-start space-x-4">
            <div className="max-w-[80%]">
              <div className="rounded-2xl rounded-tr-none bg-gray-800 p-4 text-sm">
                <p>I'm feeling a bit stressed today. Could you help me find some ways to relax and find inner peace?</p>
              </div>
              <p className="mt-2 text-xs text-gray-400">10:32 AM</p>
            </div>
            <Avatar>
              <AvatarImage alt="You" src="/avatar.jpg" />
              <AvatarFallback>You</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex items-start space-x-4">
            <Avatar>
              <AvatarImage alt="AI Assistant" src="/avatar.jpg" />
              <AvatarFallback>AI</AvatarFallback>
            </Avatar>
            <div className="max-w-[80%]">
              <div className="rounded-2xl rounded-tl-none bg-gray-800 p-4 text-sm">
                <p>
                  Absolutely, I'd be happy to help you find some ways to relax and find inner peace. Here are a few
                  suggestions:
                </p>
                <ul className="mt-2 space-y-2">
                  <li>
                    - Practice deep breathing exercises. Take slow, deep breaths and focus on the sensation of the air
                    moving in and out.
                  </li>
                  <li>
                    - Try a guided meditation. There are many free apps and resources available that can lead you
                    through a calming meditation.
                  </li>
                  <li>
                    - Go for a mindful walk in nature. Pay attention to the sights, sounds, and sensations around you.
                  </li>
                  <li>- Write in a journal. Expressing your thoughts and feelings can be a therapeutic release.</li>
                </ul>
              </div>
              <p className="mt-2 text-xs text-gray-400">10:34 AM</p>
            </div>
          </div>
          <div className="flex justify-end items-start space-x-4">
            <div className="max-w-[80%]">
              <div className="rounded-2xl rounded-tr-none bg-gray-800 p-4 text-sm">
                <p>
                  Those are all great suggestions, thank you. I'll give some of those a try. I really appreciate you
                  taking the time to help me find some peace.
                </p>
              </div>
              <p className="mt-2 text-xs text-gray-400">10:36 AM</p>
            </div>
            <Avatar>
              <AvatarImage alt="You" src="/avatar.jpg" />
              <AvatarFallback>You</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex items-start space-x-4">
            <Avatar>
              <AvatarImage alt="AI Assistant" src="/avatar.jpg" />
              <AvatarFallback>AI</AvatarFallback>
            </Avatar>
            <div className="max-w-[80%]">
              <div className="rounded-2xl rounded-tl-none bg-gray-800 p-4 text-sm">
                <p>
                  I'm glad I could provide some helpful suggestions. Remember, the journey to inner peace is a personal
                  one, so don't hesitate to experiment and find what works best for you. I'm always here if you need
                  further guidance or support.
                </p>
              </div>
              <p className="mt-2 text-xs text-gray-400">10:38 AM</p>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t border-gray-800 px-6 py-4">
        <div className="flex items-center space-x-4">
          <Input
            className="flex-1 rounded-full bg-gray-800 px-4 py-2 text-sm focus:outline-none"
            placeholder="Type your message..."
            type="text"
          />
          
          <Button size="icon" variant="ghost">
            <SendIcon className="h-5 w-5" />
          </Button>
        </div>
      </footer>
    </div>
  )
}




function PaperclipIcon({ className, ...rest }: IconProps) {
  return (
    <svg
      {...rest}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
    </svg>
  )
}


function SearchIcon({ className, ...rest }: IconProps) {
  return (
    <svg
      {...rest}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function SendIcon({ className, ...rest }: IconProps) {
  return (
    <svg
      {...rest}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  )
}

function SettingsIcon({ className, ...rest }: IconProps) {
  return (
    <svg
      {...rest}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function SmileIcon({ className, ...rest }: IconProps) {
  return (
    <svg
      {...rest}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  )
}
