"use server";


const mime = require("mime-types");
import { sanityClient } from "@/service/sanity";



export async function handleSubmit(formData: FormData) {
  try {
    // 2. GET FORM VALUES
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const description = formData.get("description") as string;
    const cvFile = formData.get("cv") as File;

    if (!cvFile) {
      return { error: "Please upload your CV." };
    }

    // 3. CONVERT TO BUFFER (IMPORTANT)
    const arrayBuffer = await cvFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // 4. UPLOAD FILE TO SANITY
    const uploadedCV = await sanityClient.assets.upload("file", buffer, {
      filename: cvFile.name,
      contentType: cvFile.type || mime.lookup(cvFile.name),
    });

    // 5. CREATE DOCUMENT IN SANITY
    await sanityClient.create({
      _type: "ambassador",
      firstName,
      lastName,
      description,
      cv: {
        _type: "file",
        asset: {
          _type: "reference",
          _ref: uploadedCV._id,
        },
      },
      submittedAt: new Date().toISOString(),
    });

    return { success: true };
  } catch (err: any) {
    console.error("CV SUBMISSION ERROR:", err);
    return { error: "Failed to submit application. Try again." };
  }
}
