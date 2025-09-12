"use client";

import * as React from "react";
import { Search } from "lucide-react";

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
  const [textField, setTextField] = React.useState("");
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

  React.useEffect(() => {
    if (open === false) {
      setFoundPub([]);
      setTextField("");
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild className="">
        <Input
          type="text"
          onChange={() => {
            setOpen(true);
          }}
          placeholder="Enter a publication title, keyword or category"
          autoCapitalize="none"
          autoCorrect="off"
          spellCheck={false}
          value={textField}
          className="w-full px-4 py-3 rounded-xl bg-white/90 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-0 focus:ring-[#ffd700] focus:ring-offset-2"
        />
      </DialogTrigger>

      <DialogContent className="overflow-hidden p-0 h-full md:max-h-[500px] md:max-w-[700px] lg:max-w-[800px]">
        <SidebarProvider className="items-start">
          <main className="flex h-full flex-1 flex-col overflow-hidden">
            <header className="hidden sm:flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
              <div className="flex items-center gap-2 px-4 mt-8">
                <Breadcrumb>
                  <BreadcrumbList className="">
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
              <div className="flex flex-1 flex-col gap-4 overflow-y-auto px-3 sm:px-4 sm:pt-0">
                <div className="flex flex-col gap-y-4">
                  <h1 className="text-base font-medium">Find a publication</h1>

                  {/* ✅ Input stays fixed width now */}
                  <div className="w-full max-w-md mt-1 sm:mt-0 sm:max-w-full">
                    <Input
                      type="text"
                      onChange={searchPublication}
                      placeholder="Enter a publication title, keyword or category"
                      autoCapitalize="none"
                      autoCorrect="off"
                      spellCheck={false}
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Results container */}
                <div className=" sm:h-[300px] flex flex-col gap-y-6 w-full overflow-y-auto">
                  {foundPub?.map(({ slug, title, image, category }) => (
                    <div
                      key={slug}
                      className="text-black flex flex-col sm:flex-row justify-center w-full sm:w-11/12 gap-y-4 sm:gap-x-10 rounded-xl"
                    >
                      {/* Left image preview */}
                      <div
                        className="w-full sm:w-6/12 h-48 sm:h-52 bg-cover bg-center rounded-xl"
                        style={{
                          backgroundImage: `url('${image}')`,
                        }}
                      ></div>

                      {/* Right text section */}
                      <div className="flex flex-col w-full sm:w-6/12 gap-y-2 sm:gap-y-6">
                        <div className="flex items-center gap-x-2"></div>

                        <div className="flex flex-col gap-y-4">
                          <h1 className="text-base font-bold">{title}</h1>

                          <a
                            className="flex items-center justify-center gap-3 w-full border-2 w-fit bg-deepForest border-[#00210d] dark:border-yellow-400 text-sm text-[#ffd700] dark:text-yellow-300 dark:hover:bg-yellow-400 hover:text-deepForest hover:bg-white dark:hover:text-black font-semibold rounded-xl py-2 px-4 shadow-md transition duration-300"
                            href={`${paths.publications}/${slug}?type=${category}`}
                          >
                            Read the Paper
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={() => {
                    setOpen(false);
                  }}
                  className="py-6   sm:hidden mb-4"
                >
                  Close
                </Button>
              </div>
            </div>
          </main>
        </SidebarProvider>
      </DialogContent>
    </Dialog>
  );
}
