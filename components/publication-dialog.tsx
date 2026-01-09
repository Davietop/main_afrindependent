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

  DialogTrigger,
} from "@/components/ui/dialog";
import {
 
  SidebarProvider,
} from "@/components/ui/sidebar";
import { usePublications } from "@/app/publications/publication-section";
import { Input } from "./ui/input";
import { paths } from "./ui/page-sections/nav-bar/pc";
import Link from "next/link";

interface Publication {
  slug: string;
  title: string;
  image: string;
  publishedAt: string;
  category: string;
}
export function PublicationSearch() {
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
          className="w-full px-4 py-5 lg:py-6 rounded-xl bg-white/90 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-0 focus:ring-[#ffd700] focus:ring-offset-2"
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
                  

                   {foundPub.map(
                ({ slug, title, image, publishedAt, category}) => (
                  <Link
                    key={slug}
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = `${paths.publications}/${slug}?type=${category}`; // ⬅️ forces full reload
                    }}
                   href={`${paths.publications}/${slug}?type=${category}`}
                  >
                    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden flex flex-col sm:flex-row h-full">
                      <div
                        className="h-52 w-full sm:w-5/12 bg-cover bg-center"
                        style={{ backgroundImage: `url('${image}')` }}
                      />
                      <div className="p-5 sm:w-7/12 flex flex-col gap-y-4 flex-grow">
                        <h3 className="text-base font-semibold text-deepForest">
                          {title}
                        </h3>
                       
                        <div className="flex items-center text-gray-700 gap-x-2 mt-auto">
                       
                          <p className="text-sm">
                            {new Date(publishedAt).toLocaleDateString("en-GB")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              )}
                </div>

                <Button variant="deepForest2"
                  onClick={() => {
                    setOpen(false);
                  }}
                  className="py-4  sm:hidden mb-4"
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
