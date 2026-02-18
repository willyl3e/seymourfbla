import "./globals.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import FBLABuilding from "./customComponents/fblabuilding";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

function shuffle(array: string[]) {
  let currentIndex = array.length;

  while (currentIndex != 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

import LeadersData from "../../public/data/leaders";

export default function Home() {
  const words = shuffle([
    "enterprise",
    "service",
    "scholarship",
    "achivement",
    "education",
    "inclusion",
    "innovation",
    "excellence",
    "integrity",
    "collaboration",
    "entrepreneurship",
    "creativity",
  ]).slice(0, 3);

  const events = [
    {
      name: "General Meeting",
      date: "February 20th, 2026 2-3pm",
      description:
        "",
    },
    {
      name: "Spirit Shop Meeting",
      date: "February 24th, 2026 2-3pm",
      description:
        "",
    },
  ];

  const { content } = LeadersData();
  
  return (
    <div>
      <div className="bg-blue-900 pl-[20%] pr-[20%] pt-16 max-2xl:pl-[10%] max-2xl:pr-[10%] max-lg:pr-[3%] max-lg:pl-[3%]">
        <div className="l">
          <div className="grid grid-cols-2 max-lg:grid-cols-1">
            <div>
              <div className="a">
                <div className="text-7xl">
                  <p className="text-white">Committed to </p>
                  <div className="overflow-hidden h-[90px] relative inline-block">
                    <ul className="animate-scrollText list-none m-0 p-0 text-white">
                      {words.map((x, i) => (
                        <li className=" h-[90px] mb-3 text-yellow-400" key={i}>
                          {x}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <span className="mt-2 text-2xl block text-white">
                Meet new people, receive awards, and make an impact as an active
                member of the FBLA.
              </span>
              <Link href="/join">
              <button className="font-medium mt-14 text-white text-lg hover:scale-110 delay-100 transition ease-in-out hover:cursor-pointer">
                Join
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#FFFFFF"
                  className="inline-block ml-1"
                >
                  <path d="m480-320 160-160-160-160-56 56 64 64H320v80h168l-64 64 56 56Zm0 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                </svg>
              </button></Link>
            </div>
            <div className="pt-24">
              <FBLABuilding />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-24 pl-[20%] pr-[20%] max-2xl:pl-[10%] max-2xl:pr-[10%] max-lg:pr-[3%] max-lg:pl-[3%]">
        <div className="grid-cols-2 grid bg-blue-50 rounded-3xl pb-10 max-lg:grid-cols-1 max-lg:text-center max-lg:p-10">
          <div>
            <Carousel className="ml-20 w-96 mt-10 max-lg:place-self-center max-lg:ml-0">
              <CarouselContent className="place-self-center">
                <CarouselItem>
                  <img
                    src="/fblaupdated.jpg"
                    width="90%"
                    className="rounded-2xl place-self-center"
                  ></img>
                </CarouselItem>
                <CarouselItem>
                  <img
                    src="/fbla3.png"
                    width="90%"
                    className="rounded-2xl place-self-center"
                  ></img>
                </CarouselItem>
                <CarouselItem>
                  <img
                    src="/fbla4.png"
                    width="90%"
                    className="rounded-2xl place-self-center"
                  ></img>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="  ml-3 border-3 font-bold" />
              <CarouselNext className="  mr-3 border-3 font-bold" />
            </Carousel>
          </div>
          <div className="pt-14 pr-20 max-lg:pr-0">
            <span className="a text-5xl mt-5 inline-block text-blue-800">
              What is FBLA?
            </span>
            <span className="block leading-[1.2] mt-6">
              The Future Business Leaders of America organization is the largest
              business Career and Technical Student Organization in the world,
              with over 230,000 members internationally.{" "}
            </span>
            <span className="block leading-[1.2] mt-4">
              Members of the Seymour FBLA are connected to a global network of
              chapters and have the opportunity to compete in national
              competitions.
            </span>
            <a href="https://www.fbla.org/about/" target="_blank">
              <Button variant="outline" className="mt-7 hover:cursor-pointer">
                Visit national mission
              </Button>
            </a>
          </div>
        </div>
      </div>
      <div className="pt-20 pl-[20%] pr-[20%] max-2xl:pl-[10%] max-2xl:pr-[10%] max-lg:pr-[3%] max-lg:pl-[3%]">
        <div>
          <span className="a text-5xl mb-5 block">Upcoming</span>
          <div className="grid grid-cols-3 gap-10 max-md:grid-cols-2">
            {events.map((x, i) => (
              <Drawer key={i}>
                <DrawerTrigger className="text-left hover:cursor-pointer hover:scale-110 transition ease-in-out delay-100">
                  <div className=" border-blue-200 border-[1px] p-8 rounded-xl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#000000"
                      className="relative right-1 mb-2"
                    >
                      <path d="M580-240q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z" />
                    </svg>
                    <span className="text-xl font-bold ">{x.name}</span>
                    <span className="text-sm block text-gray-400">
                      {x.date}
                    </span>
                  </div>
                </DrawerTrigger>
                <DrawerContent className="p-10">
                  <DrawerHeader>
                    <DrawerTitle className="text-4xl a pb-3">
                      {x.name} ({x.date})
                    </DrawerTitle>
                    <DrawerDescription className="text-lg">
                      {x.description}
                    </DrawerDescription>
                  </DrawerHeader>
                  <DrawerFooter>
                    <DrawerClose className="text-left">
                      <Button variant="outline">Close</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            ))}
          </div>
        </div>
      </div>
      <div className="pt-20 pb-24 pl-[20%] pr-[20%] max-2xl:pl-[10%] max-2xl:pr-[10%] max-lg:pr-[3%] max-lg:pl-[3%]">
        <div >
          <span className="a text-5xl mb-5 block">Leadership</span>
          <div className="grid grid-cols-5 gap-8 max-md:grid-cols-3 max-sm:grid-cols-2">
            {content.map((x, i) => (
              <div
                key={i}
                className="hover:scale-110 transition ease-in-out delay-100"
              >
                <Link href={"/leadership/" + x.path}>
                  {x.img === "none" ? (
                    <img
                      className="rounded-[50%] h-24 w-24 object-center object-contain bg-blue-100 "
                      src="/person.png"
                    ></img>
                  ) : (
                    <img
                      className="rounded-[50%] h-24 w-24 object-center object-contain bg-blue-100 "
                      src={x.img}
                      alt={x.name}
                    ></img>
                  )}

                  <span className="text-xl font-bold mt-4 block">{x.name}</span>
                  <span className="block leading-[1]">{x.role}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
