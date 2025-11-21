// app/actions/schema.ts
import { z } from "zod";

export const ambassadorSchema = z.object({
  firstName: z.string().min(1, "First name is required."),
  lastName: z.string().min(1, "Last name is required."),
  description: z.string().min(20, "Description must be at least 20 characters."),
  cv: z.custom<File>((file) => {
    if (!file) return false;

    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    return allowedTypes.includes(file.type);
  }, {
    message: "CV must be a PDF, DOC, or DOCX file.",
  }),
});
