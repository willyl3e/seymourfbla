import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import LeadersData from "../../../../public/data/leaders";

export default async function Page({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const { content } = LeadersData();

  const selectedProfile = content.filter((x) => x.path === name);

  if (selectedProfile.length === 0) {
    return <>404 error</>;
  }

  return (
    <>
      <div className="bg-blue-50 pl-[20%] pr-[20%] max-2xl:pl-[10%] max-2xl:pr-[10%] max-lg:pr-[3%] max-lg:pl-[3%]">
        <div className=" pt-20">
          <div className="grid grid-cols-2 max-sm:grid-cols-1">
            <div>
              <span className="text-7xl a mt-12 inline-block text-blue-800">
                {selectedProfile[0].name}
              </span>
              <span className="text-4xl mt-5 text-blue-800 block">
                {selectedProfile[0].role}
              </span>
            </div>
            <img
              className="place-self-center"
              src={
                selectedProfile[0].img === "none"
                  ? "/person.png"
                  : selectedProfile[0].img
              }
              width="250px"
            ></img>
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
              <BreadcrumbItem className="text-gray-500">
                <BreadcrumbLink>Leadership</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="font-semibold">
                  {selectedProfile[0].name}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      <div className="pl-[20%] pr-[20%] max-2xl:pl-[10%] max-2xl:pr-[10%] max-lg:pr-[3%] max-lg:pl-[3%]">
        <div className="pb-24 pt-8">
          <span className="text-2xl font-bold block">Biography</span>
          {selectedProfile[0].bio}
        </div>
      </div>
    </>
  );
}
