"use client";

import * as React from "react";
import {
 Search
} from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { usePublications } from "@/app/publications/publication-section";
import { Input } from "./ui/input";
import { paths } from "./ui/page-sections/nav-bar/pc";

interface Publication {
  slug: string;
  title: string;
  image: string;
  publishedAt: string;
  category: string;
}
export function SettingsDialog() {
  const [open, setOpen] = React.useState(false);
  const { data: publications } = usePublications({});

  const [query, setQuery] = React.useState("");
  const [foundPub, setFoundPub] = React.useState<Publication[]>([]);
  const [textField, setTextField] = React.useState("")
  const searchPublication = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() !== "") {
      const lowerValue = value.toLowerCase();

      const matches =
        publications?.filter((pub) => {
          const inTitle = pub.title?.toLowerCase().includes(lowerValue);
          const inCategory = pub.category?.toLowerCase().includes(lowerValue);
          const inIntro = pub.intro?.toLowerCase().includes(lowerValue);

          return inTitle || inCategory || inIntro;
        }) ?? [];

      const uniqueMatches = Array.from(
        new Map(matches.map((pub) => [pub.slug, pub])).values()
      );

      setFoundPub(uniqueMatches);
    } else {
      setFoundPub([]);
    }
  };

  React.useEffect(()=>{
   if(open === false) {
    setFoundPub([])
    setTextField("")

   }
  }, [open])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild className="">
        <Input
          type="text"
          onChange={()=>{
            setOpen(true)
          }}
          placeholder="Enter a publication title, keyword or category"
          autoCapitalize="none"
          autoCorrect="off"
          spellCheck={false}
          value={textField}
          className="w-full px-4 py-3 rounded-xl bg-white/90 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-0 focus:ring-[#ffd700] focus:ring-offset-2"
        />
      </DialogTrigger>
  
      <DialogContent className="overflow-hidden p-0 md:max-h-[500px] md:max-w-[700px] lg:max-w-[800px]">

        
     
        <SidebarProvider className="items-start">
          <main className="flex h-[780px] flex-1 flex-col overflow-hidden">
            <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
              <div className="flex items-center gap-2 px-4 mt-8">
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem className="hidden md:block">
                      <BreadcrumbLink className="font-bold text-base" href="#">
                        Publication
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="hidden md:block" />
                    <BreadcrumbItem>
                      <BreadcrumbPage className="font-bold text-base">
                        Search Publications
                      </BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            </header>
          <div className="flex flex-1 flex-col gap-4 overflow-y-auto  py-4">
  <div className="flex flex-1 flex-col gap-4 overflow-y-auto px-3 sm:px-4 pt-0">
    <div className="flex flex-col gap-y-4">
      <h1 className="text-base font-medium">Find a publication</h1>

      {/* ✅ Input stays fixed width now */}
      <div className="w-[360px] sm:w-full">
        <Input
          type="text"
          onChange={searchPublication}
          placeholder="Enter a publication title, keyword or category"
          autoCapitalize="none"
          autoCorrect="off"
          spellCheck={false}
          className="w-[360px] sm:w-full"
        />
      </div>
    </div>

    {/* Results container */}
    <div className="h-[600px] sm:h-[300px] flex flex-col gap-y-6 w-full overflow-auto">
      {foundPub?.map(({ slug, title, image, category }, index) => (
        <div
          key={slug}
          className="text-black h-[300px] sm:h-[200px] flex flex-col  justify-center sm:flex-row sm:w-11/12 sm:gap-x-10  aspect-video rounded-xl"
        >
          {/* Left image preview */}
          <div
            className="h-[300px] w-8/12 sm:h-[200px] sm:w-6/12 bg-cover bg-center rounded-xl"
            style={{
              backgroundImage: `url('${image}')`,
            }}
          ></div>

          {/* Right text section */}
          <div className="flex flex-col w-full md:w-8/12 gap-y-2 md:gap-y-6">
            <div className="flex items-center mt-2 md:mt-0 gap-x-2"></div>

            <div className="flex w-9/12 sm:w-full flex-col gap-y-4">
              <h1 className="text-base font-bold w-10/12 sm:w-full">
                {title}
              </h1>

          <a
                          className="flex items-center justify-center gap-3 border-2 w-fit bg-deepForest  border-[#00210d] dark:border-yellow-400 text-sm text-[#ffd700] dark:text-yellow-300  dark:hover:bg-yellow-400 hover:text-deepForest hover:bg-white dark:hover:text-black font-semibold  rounded-xl py-1.5 px-4 shadow-md transition duration-300"
                          href={`${paths.publications}/${slug}?type=${category}`}
                        >
                          Read the Paper
                        </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

          </main>
        </SidebarProvider>
      </DialogContent>
    </Dialog>
  );
}
