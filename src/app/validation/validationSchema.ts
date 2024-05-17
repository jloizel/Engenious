// validationSchema.ts
import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(1, { message: "Message is required" }),
  file: z.object({
    name: z.string(),
    content: z.string(),
  }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
