import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav className="pt-9 pb-9 text-white bg-blue-900">
          <div className="min-w-6xl place-self-center grid grid-cols-2 sticky top-0">
            <div>
              <Link href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 272.28 235.42"
                  fill="#ffffff"
                  width="40px"
                  className="inline-block mr-3"
                >
                  <path
                    className="cls-1"
                    d="M146.9,7.22c1.25-7.55,11.5-9.83,16.03-3.69,34.46,58.56,70.33,116.32,104.61,174.98,1.69,2.89,4.15,6.29,4.49,9.65.02.24-.08.57.23.68.02.22-.01.45,0,.68v.9c-.44,6.26-4.42,11-10.63,12.21-.3,0-.6,0-.91,0s-.75-.11-.91.23c-.3.02-.61,0-.91,0l-.11-.22-.11.22c-.15,0-.3,0-.45,0l-1.36-.23c-33.19-5.58-66.54-10.49-99.62-16.57-10.01-4.64-9.97-16.66-.02-21.63,7.92-3.96,17-6.85,24.75-11,9.97-5.33,14.56-16.87,10.86-27.61L147.11,11.64c-.33-1.23-.49-2.48-.44-3.74.32-.11.19-.45.23-.68Z"
                  />
                  <path
                    className="cls-1"
                    d="M112.36,192.38c2.98,2.94,7.33,5.2,11.41,6.12l124.01,18.99c9.96,2.8,8.55,16.72-1.88,17.5-71.26-.04-142.48.66-213.73.34-4.34-.78-7.77-3.66-9.53-7.66-3.54-8.05,1.67-12.9,6.38-18.58,18.19-21.96,36.61-43.97,55.31-65.49,3.98-4.58,6.85-8.78,13.78-8.11s10.62,6.54,10.32,13.2c-.66,14.43-7.68,32.23,3.93,43.69Z"
                  />
                  <path
                    className="cls-1"
                    d="M116.13,2.47c.62-.04,1.42-.04,2.04,0,4.02.27,7.8,2.3,10,5.72,12.51,31.83,24.4,64,36.22,96.1.05.89.23,1.77.16,2.67l-.23.68c-.89,5.47-4.77,9.07-10.18,9.95h-2.94c-1.62-.28-3.08-.69-4.51-1.49-10.98-6.15-20.55-18.35-33.51-20-1.87-.24-2.64-.23-4.53,0-5.65.68-10.4,2.96-14.37,7.01L14.65,200.6c-1.35.93-2.56,1.51-4.19,1.81h-3.17c-5.35-1.05-8.43-6.28-6.9-11.53L106.3,8.15c2.3-3.34,5.73-5.39,9.82-5.67Z"
                  />
                  <path
                    className="cls-1"
                    d="M113.19,96.11h-4.53c1.88-.23,2.65-.24,4.53,0Z"
                  />
                  <path
                    className="cls-1"
                    d="M10.46,202.41c-1.42.27-1.72.28-3.17,0h3.17Z"
                  />
                  <path
                    className="cls-1"
                    d="M154.14,117.6c-1.41.23-1.53.24-2.94,0h2.94Z"
                  />
                  <path
                    className="cls-1"
                    d="M118.16,2.47c-.62-.04-1.42-.04-2.04,0,.42-.38,1.61-.38,2.04,0Z"
                  />
                  <path
                    className="cls-1"
                    d="M258.22,202.87c-.47-.01-.96.13-1.36-.23l1.36.23Z"
                  />
                  <path
                    className="cls-1"
                    d="M272.25,190.43v-.9c.03.49.04.37,0,.9Z"
                  />
                  <path
                    className="cls-1"
                    d="M260.71,202.64v.23c-.29.03-.61-.02-.91,0,.16-.34.61-.22.91-.23Z"
                  />
                  <path
                    className="cls-1"
                    d="M261.62,202.64c-.26.05-.43.17-.91.23v-.23c.3,0,.6,0,.91,0Z"
                  />
                  <path
                    className="cls-1"
                    d="M146.67,7.9c0-.25-.07-.57.23-.68-.04.23.09.57-.23.68Z"
                  />
                  <path
                    className="cls-1"
                    d="M164.32,107.64l.23-.68c-.03.46-.22.64-.23.68Z"
                  />
                  <path
                    className="cls-1"
                    d="M272.25,188.84c-.31-.11-.2-.44-.23-.68.3.11.21.43.23.68Z"
                  />
                  <path
                    className="cls-1"
                    d="M258.9,202.87c-.08,0-.15,0-.23,0l.11-.22.11.22Z"
                  />
                </svg>
                <span className="variex text-[1.3rem] inline-block relative top-[2px] ml-1">
                  Seymour FBLA
                </span>
                <span className="text-sm ml-2 text-blue-500"></span>
              </Link>
            </div>
            <div className="text-right pt-1">
              <Link href="/recognition">
                <span className="z-20 hover:font-bold hover:cursor-pointer">
                  Previous Years
                </span>
              </Link>
              <Link href="/join">
                <span className="z-20 ml-4 hover:font-bold hover:cursor-pointer">
                  Join
                </span>
              </Link>
            </div>
          </div>
        </nav>
        {children}
        <footer>
          <div className="w-6xl place-self-center border-t-[1px] border-t-gray-300 pt-8 pb-16 mt-10 grid grid-cols-4 text-gray-400 gap-5">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 272.28 235.42"
                fill="#ffffff"
                width="40px"
                className="inline-block mr-3"
              >
                <path
                  className="grayIcon"
                  d="M146.9,7.22c1.25-7.55,11.5-9.83,16.03-3.69,34.46,58.56,70.33,116.32,104.61,174.98,1.69,2.89,4.15,6.29,4.49,9.65.02.24-.08.57.23.68.02.22-.01.45,0,.68v.9c-.44,6.26-4.42,11-10.63,12.21-.3,0-.6,0-.91,0s-.75-.11-.91.23c-.3.02-.61,0-.91,0l-.11-.22-.11.22c-.15,0-.3,0-.45,0l-1.36-.23c-33.19-5.58-66.54-10.49-99.62-16.57-10.01-4.64-9.97-16.66-.02-21.63,7.92-3.96,17-6.85,24.75-11,9.97-5.33,14.56-16.87,10.86-27.61L147.11,11.64c-.33-1.23-.49-2.48-.44-3.74.32-.11.19-.45.23-.68Z"
                />
                <path
                  className="grayIcon"
                  d="M112.36,192.38c2.98,2.94,7.33,5.2,11.41,6.12l124.01,18.99c9.96,2.8,8.55,16.72-1.88,17.5-71.26-.04-142.48.66-213.73.34-4.34-.78-7.77-3.66-9.53-7.66-3.54-8.05,1.67-12.9,6.38-18.58,18.19-21.96,36.61-43.97,55.31-65.49,3.98-4.58,6.85-8.78,13.78-8.11s10.62,6.54,10.32,13.2c-.66,14.43-7.68,32.23,3.93,43.69Z"
                />
                <path
                  className="grayIcon"
                  d="M116.13,2.47c.62-.04,1.42-.04,2.04,0,4.02.27,7.8,2.3,10,5.72,12.51,31.83,24.4,64,36.22,96.1.05.89.23,1.77.16,2.67l-.23.68c-.89,5.47-4.77,9.07-10.18,9.95h-2.94c-1.62-.28-3.08-.69-4.51-1.49-10.98-6.15-20.55-18.35-33.51-20-1.87-.24-2.64-.23-4.53,0-5.65.68-10.4,2.96-14.37,7.01L14.65,200.6c-1.35.93-2.56,1.51-4.19,1.81h-3.17c-5.35-1.05-8.43-6.28-6.9-11.53L106.3,8.15c2.3-3.34,5.73-5.39,9.82-5.67Z"
                />
                <path
                  className="grayIcon"
                  d="M113.19,96.11h-4.53c1.88-.23,2.65-.24,4.53,0Z"
                />
                <path
                  className="grayIcon"
                  d="M10.46,202.41c-1.42.27-1.72.28-3.17,0h3.17Z"
                />
                <path
                  className="grayIcon"
                  d="M154.14,117.6c-1.41.23-1.53.24-2.94,0h2.94Z"
                />
                <path
                  className="grayIcon"
                  d="M118.16,2.47c-.62-.04-1.42-.04-2.04,0,.42-.38,1.61-.38,2.04,0Z"
                />
                <path
                  className="grayIcon"
                  d="M258.22,202.87c-.47-.01-.96.13-1.36-.23l1.36.23Z"
                />
                <path
                  className="cls-1"
                  d="M272.25,190.43v-.9c.03.49.04.37,0,.9Z"
                />
                <path
                  className="grayIcon"
                  d="M260.71,202.64v.23c-.29.03-.61-.02-.91,0,.16-.34.61-.22.91-.23Z"
                />
                <path
                  className="grayIcon"
                  d="M261.62,202.64c-.26.05-.43.17-.91.23v-.23c.3,0,.6,0,.91,0Z"
                />
                <path
                  className="grayIcon"
                  d="M146.67,7.9c0-.25-.07-.57.23-.68-.04.23.09.57-.23.68Z"
                />
                <path
                  className="grayIcon"
                  d="M164.32,107.64l.23-.68c-.03.46-.22.64-.23.68Z"
                />
                <path
                  className="grayIcon"
                  d="M272.25,188.84c-.31-.11-.2-.44-.23-.68.3.11.21.43.23.68Z"
                />
                <path
                  className="grayIcon"
                  d="M258.9,202.87c-.08,0-.15,0-.23,0l.11-.22.11.22Z"
                />
              </svg>{" "}
              <span className="text-xs block leading-[1] mt-3 ">
                Copyright © 2025 Seymour FBLA. All rights reserved.
              </span>
              <div className="mt-5">
                <a href="https://www.instagram.com/seymour_fbla/" target="_blank">
                  <img src="/insta.svg" className="w-5 inline-block"></img>
                </a>
                <a href="https://github.com/willyl3e/seymourfbla" target="_blank">
                  <img src="/github.svg" className="w-6 inline-block ml-3"></img>
                </a>
              </div>
            </div>
            <div>
              <span className="mb-3 text-xs font-semibold block">
                Our chapter
              </span>
              <Link href="/recognition" className="mt-1 block text-sm">
                Previous Years
              </Link>
              <Link href="/media" className="mt-1 block text-sm">
                Media
              </Link>
              <Link href="/join" className="mt-1 block text-sm">
                Become a member
              </Link>
            </div>
            <div>
              <span className="block mb-3 text-xs font-semibold">
                Leadership
              </span>
              <Link href="/leadership/folsom" className="mt-1 block text-sm">
                Sarah Folsom
              </Link>
              <Link href="/leadership/khand" className="mt-1 block text-sm">
                Jastina Khand
              </Link>
              <Link href="/leadership/kostick" className="mt-1 block text-sm">
                John Kostick
              </Link>
              <Link href="/leadership/alvarez" className="mt-1 block text-sm">
                Ariana Alvarez
              </Link>
              <Link href="/leadership/ter" className="mt-1 block text-sm">
                Izabel Ter
              </Link>
            </div>
            <div>
              <span className="block mb-3 text-xs font-semibold">
                Important
              </span>
              <a href="https://www.fbla.org/" className="mt-1 block text-sm">
                National Mission
              </a>
              <a href="https://ctfbla.com/" className="mt-1 block text-sm">
                Connecticut Mission
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
