import { z } from 'zod';

// Helper function for sanitizing user text inputs against XSS and injection
export const sanitizeInput = (text: string): string => {
  return text
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;')
    .trim();
};

export const ContactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: 'Full name must be at least 2 characters.' })
    .max(100, { message: 'Full name must be under 100 characters.' })
    .transform(sanitizeInput),
  email: z
    .string()
    .email({ message: 'Please enter a valid business email address.' })
    .max(150),
  phone: z
    .string()
    .min(7, { message: 'Please enter a valid contact phone number.' })
    .max(25)
    .transform(sanitizeInput),
  companyName: z
    .string()
    .max(120)
    .optional()
    .transform((val) => (val ? sanitizeInput(val) : '')),
  subject: z
    .string()
    .min(3, { message: 'Subject must be at least 3 characters.' })
    .max(150)
    .transform(sanitizeInput),
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters.' })
    .max(2000, { message: 'Message cannot exceed 2000 characters.' })
    .transform(sanitizeInput),
});

export const QuoteRequestSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: 'Full name is required.' })
    .transform(sanitizeInput),
  email: z
    .string()
    .email({ message: 'Valid business email address is required.' }),
  phone: z
    .string()
    .min(7, { message: 'Contact phone number is required.' })
    .transform(sanitizeInput),
  companyName: z
    .string()
    .max(120)
    .optional()
    .transform((val) => (val ? sanitizeInput(val) : '')),
  product: z
    .string()
    .optional()
    .transform((val) => (val ? sanitizeInput(val) : 'General Inquiry')),
  volumeMT: z
    .string()
    .max(100)
    .optional()
    .transform((val) => (val ? sanitizeInput(val) : '')),
  destinationPort: z
    .string()
    .max(150)
    .optional()
    .transform((val) => (val ? sanitizeInput(val) : '')),
  additionalNotes: z
    .string()
    .max(1000)
    .optional()
    .transform((val) => (val ? sanitizeInput(val) : '')),
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;
export type QuoteRequestData = z.infer<typeof QuoteRequestSchema>;
