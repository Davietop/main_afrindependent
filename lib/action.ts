"use server";

import { ambassadorSchema } from "@/actions/schema";
import { supabase } from "@/lib/supabase";
import { randomUUID } from "crypto";

export async function FormAmbassador(formData: FormData) {
  try {
    const rawData = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      description: formData.get("description"),
      cv: formData.get("cv") as File | null,
    };

    // ---- VALIDATE INPUT ----
    const parsed = ambassadorSchema.safeParse(rawData);

    if (!parsed.success) {
      return {
        success: false,
        errors: parsed.error.flatten().fieldErrors,
      };
    }

    const data = parsed.data;

    let cvUrl: string | null = null;

    // ---- UPLOAD FILE ----
    if (data.cv) {
      const file = data.cv;
      const safeName = file.name.replace(/\s+/g, "_");
      const filePath = `cvs/${randomUUID()}-${safeName}`;

      const { error: uploadError } = await supabase.storage
        .from("ambassadors_resume")
        .upload(filePath, file);

        console.log(uploadError)

      if (uploadError) {
        return {
          success: false,
          errors: { cv: ["Failed to upload CV. Try again."] },
        };
      }

      const { data: urlData } = supabase.storage
        .from("ambassadors_resume")
        .getPublicUrl(filePath);

      cvUrl = urlData.publicUrl;
    }

    // ---- INSERT INTO DATABASE ----
    const { error: insertError } = await supabase
      .from("ambassador_applications")
      .insert({
        first_name: data.firstName,
        last_name: data.lastName,
        description: data.description,
        cv: cvUrl,
      });

    if (insertError) {
      return {
        success: false,
        errors: { database: insertError.message },
      };
    }

    // ---- SUCCESS ----
    return {
      success: true,
      message: "Data submitted successfully",
    };
  } catch (err: any) {
    return {
      success: false,
      errors: { server: err.message },
    };
  }
}
