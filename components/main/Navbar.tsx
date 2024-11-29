
'use client'

import { useState, useEffect } from "react"
import { Socials } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 transition-all duration-300 ${isScrolled ? 'bg-opacity-80' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="#about-me" className="flex-shrink-0">
              <Image
                src="/NavLogo.png"
                alt="logo"
                width={50}
                height={50}
                className="cursor-pointer hover:animate-slowspin"
              />
            </Link>
            <span className="font-bold ml-3 text-gray-300 hidden sm:block">
              Tushar Pareenja
            </span>
          </div>
          <div className="w-[500px] hidden md:flex h-full flex-row items-center justify-between md:mr-20">
            <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
              <a href="#about-me" className="cursor-pointer">
                About me
              </a>
              <a href="#skills" className="cursor-pointer">
                Skills
              </a>
              <a href="#projects" className="cursor-pointer">
                Projects
              </a>
            </div>
</div>
          <div className="hidden md:flex items-center space-x-4">
            {Socials.map((social) => (
              <a
                href={social.url}
                key={social.name}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <Image
                  src={social.src}
                  alt={social.name}
                  width={24}
                  height={24}
                  className="cursor-pointer"
                />
              </a>
            ))}
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="#about-me" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About me</Link>
            <Link href="#skills" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Skills</Link>
            <Link href="#projects" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</Link>
          </div>
          <div className="px-2 pt-2 pb-3 border-t border-gray-700">
            <div className="flex items-center space-x-4">
              {Socials.map((social) => (
                <a
                  href={social.url}
                  key={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  <Image
                    src={social.src}
                    alt={social.name}
                    width={24}
                    height={24}
                    className="cursor-pointer"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar




























