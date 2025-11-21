"use client";

import * as React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useFormStatus } from "react-dom";

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
  DialogTitle,
} from "@/components/ui/dialog";
import { SidebarProvider } from "@/components/ui/sidebar";

import { FormAmbassador } from "@/lib/action";

import { useToast } from "@/hooks/use-toast";
import { Label } from "@radix-ui/react-label";

export function AmbassadorForm() {
  const [open, setOpen] = React.useState(false);
  const [formErrors, setFormErrors] = React.useState<any>(null);
  const [successMessage, setSuccessMessage] = React.useState<string | undefined>(undefined);

  const { toast } = useToast();

  // ----------- CLIENT ACTION HANDLER -------------
async function handleSubmit(formData: FormData) {
  setFormErrors(null);
  setSuccessMessage("");

  const result = await FormAmbassador(formData);
  console.log(result)

  if (!result.success) {
    setFormErrors(result.errors);
  } else {
    setSuccessMessage(result?.message);

    toast({
      description: result?.message,
    });

    // Auto close after 1.2s
    setTimeout(() => {
      setOpen(false);
    }, 1200);
  }
}

  

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="flex  items-center justify-center gap-3 border-2 bg-[#ffd700] border-[#ffd700] dark:border-yellow-400 text-deepForest dark:text-yellow-300  dark:hover:bg-yellow-400 text-base hover:border-deepForest hover:text-deepForest hover:bg-white dark:hover:text-white font-semibold py-3 px-6 rounded-xl shadow-md transition duration-300">
          Apply Now <FaArrowRight className="w-5 h-5" />
        </button>
      </DialogTrigger>

      <DialogContent className="overflow-hidden p-0 h-full md:max-h-[500px] md:max-w-[700px] lg:max-w-[800px]">
        <DialogTitle></DialogTitle>
        <SidebarProvider className="items-start">
          <main className="flex h-full flex-1 flex-col overflow-hidden">
            <header className="hidden sm:flex h-16 shrink-0 items-center gap-2">
              <div className="flex items-center gap-2 px-4 mt-8">
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem className="hidden md:block">
                      <BreadcrumbLink className="font-bold text-base">
                        Application Form
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="hidden md:block" />
                    <BreadcrumbItem>
                      <BreadcrumbPage className="font-bold text-base">
                        Personal Details
                      </BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            </header>

            <div className="flex flex-1 flex-col gap-4 overflow-y-auto py-4">
              <div className="flex flex-1 flex-col gap-4 overflow-y-auto px-3 sm:px-4 sm:pt-0">
                {/* FORM */}
                <form action={handleSubmit} className="flex flex-col gap-4">
                 
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="border p-2 rounded-md"
                    required
                  />
                  {formErrors?.firstName && (
                    <p className="text-red-600 text-sm">
                      {formErrors.firstName}
                    </p>
                  )}

                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="border p-2 rounded-md"
                    required
                  />
                  {formErrors?.lastName && (
                    <p className="text-red-600 text-sm">
                      {formErrors.lastName}
                    </p>
                  )}

                  {/* <Label className="text-sm">Upload your CV/Resume</Label>

                  <input
                    type="file"
                    name="cv"
                    accept=".pdf,.doc,.docx"
                    className="border p-2 rounded-md"
                    required
                    
                  />
                  {formErrors?.cv && (
                    <p className="text-red-600 text-sm">{formErrors.cv}</p>
                  )} */}
                  <div className="flex flex-col gap-1">
  <Label htmlFor="cv" className="text-sm">
    Upload your CV/Resume
  </Label>

  <input
    id="cv"
    type="file"
    name="cv"
    accept=".pdf,.doc,.docx"
    className="border p-2 rounded-md"
    required
  />

  {formErrors?.cv && (
    <p className="text-red-600 text-sm">{formErrors.cv}</p>
  )}
</div>


                  <textarea
                    name="description"
                    placeholder="Brief description of why you'd like to become an Africonomics Campus Ambassador"
                    className="border p-2 rounded-md h-32"
                    required
                  />
                  {formErrors?.description && (
                    <p className="text-red-600 text-sm">
                      {formErrors.description}
                    </p>
                  )}

                  {/* -------- SUBMIT BUTTON WITH BUILT-IN LOADER -------- */}
                  <SubmitButton />

             
                  

                  {/* DATABASE OR SERVER ERRORS */}
                  {formErrors?.database && (
                    <div className="p-3 bg-red-100 border border-red-300 rounded text-red-800 text-sm">
                      {formErrors.database}
                    </div>
                  )}

                  <Button
                    variant="deepForest2"
                    onClick={() => setOpen(false)}
                    className="py-4 sm:hidden mb-4"
                  >
                    Close Form
                  </Button>
                </form>
              </div>
            </div>
          </main>
        </SidebarProvider>
      </DialogContent>
    </Dialog>
  );
}

/* ----------------- LOADER SUBMIT BUTTON ----------------- */
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      variant="deepForest2"
      disabled={pending}
      className="py-4 flex items-center gap-3"
    >
      {pending && (
        <span className="animate-spin h-4 w-4 border-[3px] border-white border-t-transparent rounded-full"></span>
      )}
      {pending ? "Submitting..." : "Submit"}
    </Button>
  );
}
