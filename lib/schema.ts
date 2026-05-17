import { z } from "zod";

// ──────────────────────────────────────────────────
// Admission form Zod schema

const mobileRegex = /^[6-9]\d{9}$/;
const pincodeRegex = /^\d{6}$/;

export const admissionSchema = z.object({
  // ── personal ──
  fullName: z
    .string()
    .trim()
    .min(3, "full name must be at least 3 characters")
    .max(80, "full name is too long"),

  email: z
    .string()
    .trim()
    .email("enter a valid email address"),

  phone: z
    .string()
    .trim()
    .regex(mobileRegex, "enter a valid 10-digit indian mobile number"),

  whatsapp: z
    .string()
    .trim()
    .regex(mobileRegex, "enter a valid 10-digit whatsapp number")
    .optional()
    .or(z.literal("")),

  gender: z
    .string()
    .min(1, "please select your gender")
    .refine((v) => ["male", "female", "other"].includes(v), {
      message: "please select your gender",
    }),

  dob: z
    .string()
    .min(1, "date of birth is required"),

  fatherName: z
    .string()
    .trim()
    .min(2, "father's name must be at least 2 characters"),

  motherName: z
    .string()
    .trim()
    .min(2, "mother's name must be at least 2 characters"),

  // ── address ──
  address: z
    .string()
    .trim()
    .min(5, "please enter your complete address"),

  city: z
    .string()
    .trim()
    .min(2, "city name is required"),

  state: z
    .string()
    .min(1, "please select your state"),

  pincode: z
    .string()
    .trim()
    .regex(pincodeRegex, "enter a valid 6-digit pincode"),

  // ── academic ──
  qualification: z
    .string()
    .min(1, "please select your highest qualification"),

  collegeName: z
    .string()
    .trim()
    .min(3, "school / college name is required"),

  passingYear: z
    .string()
    .min(1, "please select your passing year"),

  percentage: z
    .string()
    .trim()
    .min(1, "percentage or cgpa is required"),

  // ── course ──
  course: z
    .string()
    .min(1, "please select a course"),

  batchTiming: z
    .string()
    .min(1, "please select your preferred batch timing"),

  learningMode: z
    .string()
    .refine((v) => ["online", "offline", "hybrid"].includes(v), {
      message: "please select a learning mode",
    }),

  experienceLevel: z
    .string()
    .refine((v) => ["beginner", "intermediate", "advanced"].includes(v), {
      message: "please select your experience level",
    }),

  // ── other ──
  howHeard: z
    .string()
    .min(1, "please let us know how you found us"),

  careerGoal: z
    .string()
    .trim()
    .min(20, "please describe your career goal (minimum 20 characters)")
    .max(500, "career goal is too long"),

  whyJoin: z
    .string()
    .trim()
    .min(20, "please tell us why you want to join (minimum 20 characters)")
    .max(500, "response is too long"),

  agreeTerms: z
    .boolean()
    .refine((v) => v === true, {
      message: "you must agree to the terms & conditions to proceed",
    }),
});

// ──────────────────────────────────────────────────
// Infer TypeScript type from schema
// ──────────────────────────────────────────────────
export type AdmissionFormValues = z.infer<typeof admissionSchema>;

// ──────────────────────────────────────────────────
// Default form values
// ──────────────────────────────────────────────────
export const admissionDefaults: AdmissionFormValues = {
  fullName: "",
  email: "",
  phone: "",
  whatsapp: "",
  gender: "male",
  dob: "",
  fatherName: "",
  motherName: "",
  address: "",
  city: "",
  state: "",
  pincode: "",
  qualification: "",
  collegeName: "",
  passingYear: "",
  percentage: "",
  course: "",
  batchTiming: "",
  learningMode: "online",
  experienceLevel: "beginner",
  howHeard: "",
  careerGoal: "",
  whyJoin: "",
  agreeTerms: false,
};