import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Page() {
  return (
    <>
      <div className="bg-blue-900 pt-8 pb-28 pl-[20%] pr-[20%] max-2xl:pl-[10%] max-2xl:pr-[10%] max-lg:pr-[3%] max-lg:pl-[3%]">
        <div className=" text-center">
          <span className=" text-lg text-blue-500 block mb-14">
            WHY JOIN FBLA?
          </span>
          <div className="grid grid-cols-3 gap-20">
            <div>
              <img
                src="/fblausa.svg"
                className="mb-5 h-48 drop-shadow-2xl block m-auto"
              ></img>
              <span className="font-semibold text-2xl text-white block mt-12 mb-3 leading-[1.1]">
                Be part of a nationally recognized club
              </span>
              <span className="text-blue-500 leading-[1.2] block text-sm">
                FBLA is among the most well-known and respected student
                organizations in the nation.
              </span>
            </div>
            <div className="text-center">
              <img
                src="/fblamedal.svg"
                className="mb-5 h-48 drop-shadow-2xl block m-auto"
              ></img>
              <span className="font-semibold text-2xl text-white block mt-12 mb-3 leading-[1.1]">
                {" "}
                Compete for awards
              </span>
              <span className="text-blue-500 leading-[1.2] block text-sm">
                FBLA awards, both on the state and national level, are
                recognized by colleges as demonstrators of academic potential.
              </span>
            </div>
            <div>
              <img
                src="/fblavolunteer.svg"
                className="mb-5 h-48 drop-shadow-2xl block m-auto"
              ></img>
              <span className="font-semibold text-2xl text-white block mt-12 mb-3 leading-[1.1]">
                Volunteer and make an impact
              </span>
              <span className="text-blue-500 leading-[1.2] block text-sm">
                Our FBLA chapter offers numerous opportunties to volunteer{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="pl-[20%] pr-[20%] max-2xl:pl-[10%] max-2xl:pr-[10%] max-lg:pr-[3%] max-lg:pl-[3%]">
        <div className="pt-7 pb-7">
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
                  Become a member
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      <div className="pl-[20%] pr-[20%] max-2xl:pl-[10%] max-2xl:pr-[10%] max-lg:pr-[3%] max-lg:pl-[3%]">
        <div className="pt-7 pb-7">
          <span className="text-4xl a mt-4 mb-3 block">
            Interested in joining?
          </span>
          <span className="text-lg mb-8 block leading-[1.3]">
            We&apos;re always looking for new members. Thanks for your interest in
            joining Seymour FBLA. Join our Google Classroom through your school
            email using code XXXXXX and by attending our next meeting. Email{" "}
            <a
              href="mailto:ejepson@seymourschools.org"
              className="border-b-[1px] border-b-blue-600 text-blue-600"
            >
              Ms. Jepson
            </a>{" "}
            or a leadership member if you have any questions.{" "}
          </span>
          <span className="mb-1 font-semibold text-2xl mt-10 block">
            Frequently asked questions
          </span>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-normal">
                When does FBLA meet?
              </AccordionTrigger>
              <AccordionContent>
                FBLA meets every other Thursday.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-normal">
                What am I required to do as an FBLA member?
              </AccordionTrigger>
              <AccordionContent>
                blah blah blah
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
}
