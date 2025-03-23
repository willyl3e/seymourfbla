import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

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

import { Button } from "@/components/ui/button";

const dws =
  "block w-[100%] bg-no-repeat bg-cover h-64 bg-left rounded-2xl hover:scale-105 transition ease-in-out delay-150 hover:cursor-pointer text-left";
const dcs =
  "w-[100%] h-[100%] rounded-2xl bg-gradient-to-r from-blue-900 via-blue-800 via-45% to-transparent p-14";

export default function Page() {
  return (
    <>
      <div className="pt-14 pb-20 pl-[20%] pr-[20%] max-2xl:pl-[10%] max-2xl:pr-[10%] max-lg:pr-[3%] max-lg:pl-[3%]">
        <div>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20px"
                    viewBox="0 -960 960 960"
                    width="20px"
                    fill="#6a7282"
                  >
                    <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
                  </svg>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="font-semibold">
                  Previous Years
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <img
            className="place-self-center mt-16 mb-10"
            src="/rewindingclock.svg"
            width="75px"
          ></img>
          <span className="place-self-center text-6xl a block mb-20">
            Previous Years
          </span>
          <div className="grid-cols-1 grid gap-5">
            <Drawer>
              <DrawerTrigger
                className={
                  dws +
                  " bg-[url(https://www.csuaaup.org/d/img/uploads/b699cef5f472de28bd9254411be2a7f0.jpeg)]"
                }
              >
                <div className={dcs}>
                  <span className="text-4xl text-white font-bold">2024-25</span>
                  <span className="text-xl text-blue-500 block mt-3">
                    SLC at Southern Connecticut
                  </span>
                </div>
              </DrawerTrigger>
              <DrawerContent className="pl-[20%] pr-[20%] pt-14 pb-14">
                <DrawerHeader>
                  <DrawerTitle className="a text-5xl">2024-25</DrawerTitle>
                  <DrawerDescription>
                    <span className="mt-5 mb-5 text-xl block text-black">Insert story/record about this year.</span>
                  </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                  <DrawerClose>
                    <Button className="place-self-start" variant="outline">
                      Close
                    </Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
            <Drawer>
              <DrawerTrigger
                className={
                  dws +
                  " bg-[url(https://ctstate.edu/templates/yootheme/cache/86/NVCC-Waterbury.WS.aerial-view-of-building-parking-lot.-center-for-health-sciences-Founders-Hall-1-869304e2.jpeg)]"
                }
              >
                <div className={dcs}>
                  <span className="text-4xl text-white font-bold">2023-24</span>
                  <span className="text-xl text-blue-500 block mt-3">
                    SLC at Naugatuck Valley Community College
                  </span>
                </div>
              </DrawerTrigger>
              <DrawerContent className="pl-[20%] pr-[20%] pt-14 pb-14">
                <DrawerHeader>
                  <DrawerTitle className="a text-5xl">2023-24</DrawerTitle>
                  <DrawerDescription>
                  <span className="mt-5 mb-5 text-xl block text-black">Insert story/record about this year.</span>
                  </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                  <DrawerClose>
                    <Button className="place-self-start" variant="outline">
                      Close
                    </Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </>
  );
}
