"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "motion/react";
import { type Variants } from "motion/react";
// ── shadcn/ui ──────────────────────────────────────
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox"; 
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/sonner";

// ── react-icons ────────────────────────────────────
import {
  FiUser, FiMail, FiPhone, FiMapPin, FiCalendar,
  FiBook, FiCode, FiShield, FiGlobe, FiTarget,
  FiStar, FiSun, FiMoon, FiSend,
  FiLoader,
} from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

// ── local modules ─────────────────────────────────
import {
  admissionSchema,
  admissionDefaults,
  type AdmissionFormValues,
} from "@/lib/schema";
import {
  COURSES, INDIAN_STATES, QUALIFICATIONS, BATCH_TIMINGS,
  HOW_HEARD_OPTIONS, PASSING_YEARS,
  GENDER_OPTIONS, LEARNING_MODE_OPTIONS, EXPERIENCE_LEVEL_OPTIONS,
} from "@/public/config/admission";
import {
  TextInputField,
  SelectField,
  RadioGroupField,
  TextareaField,
  SectionHeader,
} from "./FormFields";
import {
  InfoPanel,
  HeroSection,
  SuccessScreen,
} from "./InfoPanel";
import { PhotoUpload } from "./PhotoUpload";
import { submitAdmissionForm } from "./actions";
import { cn } from "@/lib/utils";

// ──────────────────────────────────────────────────
// Animation variants
// ──────────────────────────────────────────────────
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.35, ease: "easeOut" },
  }),
};

const sectionVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

// ──────────────────────────────────────────────────
// Section wrapper card
// ──────────────────────────────────────────────────
function FormSection({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) {
  return (
    <motion.section
      custom={index}
      initial="hidden"
      animate="visible"
      variants={fadeUp}
      className={cn(
        "bg-card border border-border rounded-[20px] p-6 sm:p-7",
        "shadow-sm"
      )}
    >
      {children}
    </motion.section>
  );
}

function TermsCheckbox({
  value,
  onChange,
  error,
}: {
  value: boolean;
  onChange: (v: boolean) => void;
  error?: string;
}) {
  return (
    <div className="space-y-2">
      <label
        className={cn(
          "flex gap-3 items-start p-4 rounded-[12px] cursor-pointer",
          "border-[1.5px] transition-colors bg-muted/30",
          value ? "border-primary/50 bg-primary/5" : "border-border",
          error && !value && "border-destructive/50 bg-destructive/5"
        )}
      >
        <Checkbox
          checked={value}
          onCheckedChange={onChange}
          aria-label="agree to terms and conditions"
          className="mt-0.5 shrink-0"
        />
        <div>
          <p className="text-[13px] font-medium text-foreground mb-1">
            i agree to the terms &amp; conditions
          </p>
          <p className="text-[12px] text-muted-foreground leading-relaxed">
            by submitting, i confirm that all provided information is accurate
            and i agree to the{" "}
            <a href="/privacy" className="text-primary hover:underline">
              privacy policy
            </a>{" "}
            and{" "}
            <a href="/terms" className="text-primary hover:underline">
              terms of service
            </a>{" "}
            of techvision institute.
          </p>
        </div>
      </label>
      {error && (
        <p className="text-[11.5px] text-destructive flex items-center gap-1">
          <FiShield size={11} />
          {error}
        </p>
      )}
    </div>
  );
}

// ──────────────────────────────────────────────────
// Main Page Component
// ──────────────────────────────────────────────────
export default function AdmissionPage() {
  const { toast } = useToast();
  const [dark, setDark] = useState(false);
  const [photo, setPhoto] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  // Success state
  const [successData, setSuccessData] = useState<{
    applicationId: string;
    values: AdmissionFormValues;
  } | null>(null);

  // ── Form setup ─────────────────────────────────
  const form = useForm<AdmissionFormValues>({
    resolver: zodResolver(admissionSchema),
    defaultValues: admissionDefaults,
    mode: "onBlur", // validate on blur, then on change after first error
  });

  const { watch, formState: { errors } } = form;
  const allValues = watch();

  // Count filled required fields for progress bar
  const REQUIRED_FIELDS: (keyof AdmissionFormValues)[] = [
    "fullName", "email", "phone", "gender", "dob", "fatherName", "motherName",
    "address", "city", "state", "pincode",
    "qualification", "collegeName", "passingYear", "percentage",
    "course", "batchTiming", "learningMode", "experienceLevel",
    "howHeard", "careerGoal", "whyJoin", "agreeTerms",
  ];
  const filledCount = REQUIRED_FIELDS.filter((k) => {
    const v = allValues[k];
    return typeof v === "boolean" ? v : String(v ?? "").trim() !== "";
  }).length;

  // ── Submit handler ────────────────────────────
  const onSubmit = (values: AdmissionFormValues) => {
    startTransition(async () => {
      const result = await submitAdmissionForm(values);
      if (result.success) {
        setSuccessData({ applicationId: result.applicationId, values });
        toast({
          title: "application submitted! 🎉",
          description: result.message,
        });
      } else {
        toast({
          title: "submission failed",
          description: result.error,
          variant: "destructive",
        });
      }
    });
  };

  const onError = () => {
    toast({
      title: "please fix all errors",
      description: "scroll up to see and fix the highlighted fields.",
      variant: "destructive",
    });
  };

  // ── Success screen ────────────────────────────
  if (successData) {
    return (
      <>
        <SuccessScreen
          applicationId={successData.applicationId}
          course={successData.values.course}
          name={successData.values.fullName}
          email={successData.values.email}
          phone={successData.values.phone}
          batch={successData.values.batchTiming}
          onReset={() => {
            setSuccessData(null);
            form.reset();
            setPhoto(null);
          }}
        />
        <Toaster />
      </>
    );
  }

  // ── Main render ───────────────────────────────
  return (
    <div className={cn(dark && "dark")}>
      <div className="min-h-screen bg-background text-foreground font-sans">
        <Toaster />
        <HeroSection />

        {/* ── Main layout ─────────────────────── */}
        <main className="container mx-auto px-4 sm:px-6 py-9">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-7 items-start">

            {/* ── Form column ─────────────────── */}
            <div>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit, onError)}
                  noValidate
                  className="space-y-5"
                >
                  {/* ━━ 1. Personal details ━━━━━━━━━━━━ */}
                  <FormSection index={0}>
                    <SectionHeader
                      icon={<FiUser size={16} />}
                      title="personal details"
                      subtitle="basic information about you"
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5">
                      <TextInputField
                        control={form.control}
                        name="fullName"
                        label="full name"
                        placeholder="e.g. rahul kumar sharma"
                        icon={<FiUser size={14} />}
                      />
                      <TextInputField
                        control={form.control}
                        name="email"
                        label="email address"
                        type="email"
                        placeholder="you@example.com"
                        icon={<FiMail size={14} />}
                      />
                      <TextInputField
                        control={form.control}
                        name="phone"
                        label="phone number"
                        type="tel"
                        placeholder="10-digit mobile number"
                        icon={<FiPhone size={14} />}
                      />
                      <TextInputField
                        control={form.control}
                        name="whatsapp"
                        label="whatsapp number"
                        type="tel"
                        placeholder="if different from phone"
                        icon={<FaWhatsapp size={14} />}
                      />
                    </div>

                    <RadioGroupField
                      control={form.control}
                      name="gender"
                      label="gender"
                      options={GENDER_OPTIONS}
                      className="mb-4"
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5">
                      <TextInputField
                        control={form.control}
                        name="dob"
                        label="date of birth"
                        type="date"
                        icon={<FiCalendar size={14} />}
                      />
                      <div /> {/* spacer */}
                      <TextInputField
                        control={form.control}
                        name="fatherName"
                        label="father's name"
                        placeholder="father's full name"
                        icon={<FiUser size={14} />}
                      />
                      <TextInputField
                        control={form.control}
                        name="motherName"
                        label="mother's name"
                        placeholder="mother's full name"
                        icon={<FiUser size={14} />}
                      />
                    </div>

                    {/* photo upload */}
                    <PhotoUpload
                      value={photo}
                      onChange={setPhoto}
                      onError={(msg) =>
                        toast({ title: "upload error", description: msg, variant: "destructive" })
                      }
                    />
                  </FormSection>

                  {/* ━━ 2. Address ━━━━━━━━━━━━━━━━━━━━ */}
                  <FormSection index={1}>
                    <SectionHeader
                      icon={<FiMapPin size={16} />}
                      title="address details"
                      subtitle="your current residential address"
                    />
                    <TextInputField
                      control={form.control}
                      name="address"
                      label="street address"
                      placeholder="house no., street, locality"
                      icon={<FiMapPin size={14} />}
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-4">
                      <TextInputField
                        control={form.control}
                        name="city"
                        label="city"
                        placeholder="your city"
                      />
                      <SelectField
                        control={form.control}
                        name="state"
                        label="state"
                        options={INDIAN_STATES}
                        placeholder="select state"
                      />
                      <TextInputField
                        control={form.control}
                        name="pincode"
                        label="pincode"
                        type="tel"
                        placeholder="6-digit pincode"
                      />
                    </div>
                  </FormSection>

                  {/* ━━ 3. Academic details ━━━━━━━━━━━━ */}
                  <FormSection index={2}>
                    <SectionHeader
                      icon={<FiBook size={16} />}
                      title="academic details"
                      subtitle="your educational background"
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5">
                      <SelectField
                        control={form.control}
                        name="qualification"
                        label="highest qualification"
                        options={QUALIFICATIONS}
                        placeholder="select qualification"
                        icon={<FaGraduationCap  size={14} />}
                      />
                      <TextInputField
                        control={form.control}
                        name="collegeName"
                        label="school / college name"
                        placeholder="name of your institution"
                        icon={<FiBook size={14} />}
                      />
                      <SelectField
                        control={form.control}
                        name="passingYear"
                        label="passing year"
                        options={PASSING_YEARS}
                        placeholder="select year"
                        icon={<FiCalendar size={14} />}
                      />
                      <TextInputField
                        control={form.control}
                        name="percentage"
                        label="percentage / cgpa"
                        placeholder="e.g. 78% or 7.5 cgpa"
                        icon={<FiStar size={14} />}
                      />
                    </div>
                  </FormSection>

                  {/* ━━ 4. Course details ━━━━━━━━━━━━━━ */}
                  <FormSection index={3}>
                    <SectionHeader
                      icon={<FiCode size={16} />}
                      title="course details"
                      subtitle="choose your preferred program and schedule"
                    />
                    <SelectField
                      control={form.control}
                      name="course"
                      label="select course"
                      options={COURSES}
                      placeholder="choose a course"
                      icon={<FiCode size={14} />}
                    />
                    <SelectField
                      control={form.control}
                      name="batchTiming"
                      label="preferred batch timing"
                      options={BATCH_TIMINGS}
                      placeholder="select batch timing"
                      icon={<FiCalendar size={14} />}
                    />
                    <RadioGroupField
                      control={form.control}
                      name="learningMode"
                      label="learning mode"
                      options={LEARNING_MODE_OPTIONS}
                      className="mb-4"
                    />
                    <RadioGroupField
                      control={form.control}
                      name="experienceLevel"
                      label="experience level"
                      options={EXPERIENCE_LEVEL_OPTIONS}
                    />
                  </FormSection>


                  {/* ━━ 6. Additional details ━━━━━━━━━━ */}
                  <FormSection index={5}>
                    <SectionHeader
                      icon={<FiTarget size={16} />}
                      title="additional details"
                      subtitle="tell us a little more about your goals"
                    />
                    <SelectField
                      control={form.control}
                      name="howHeard"
                      label="how did you hear about us?"
                      options={HOW_HEARD_OPTIONS}
                      placeholder="select source"
                      icon={<FiGlobe size={14} />}
                    />
                    <TextareaField
                      control={form.control}
                      name="careerGoal"
                      label="your career goal"
                      placeholder="briefly describe what you want to achieve in your career..."
                      rows={3}
                      maxLength={500}
                    />
                    <TextareaField
                      control={form.control}
                      name="whyJoin"
                      label="why do you want to join this course?"
                      placeholder="tell us what motivated you to enroll in this program..."
                      rows={3}
                      maxLength={500}
                    />

                    <Separator className="my-5" />

                    {/* terms checkbox */}
                    <TermsCheckbox
                      value={form.watch("agreeTerms")}
                      onChange={(v) => form.setValue("agreeTerms", v, { shouldValidate: true })}
                      error={errors.agreeTerms?.message}
                    />
                  </FormSection>

                  {/* ━━ Submit area ━━━━━━━━━━━━━━━━━━━━ */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className={cn(
                      "bg-card border border-border rounded-[20px] p-6",
                      "shadow-sm"
                    )}
                  >
                    {/* security note */}
                    <div className="flex items-center justify-between text-[12px] text-muted-foreground mb-4">
                      <div className="flex items-center gap-1.5">
                        <FiShield size={13} className="text-green-500" />
                        your data is secure &amp; encrypted
                      </div>
                      <span>
                        {filledCount} / {REQUIRED_FIELDS.length} fields filled
                      </span>
                    </div>

                    {/* submit button */}
                    <Button
                      type="submit"
                      disabled={isPending}
                      size="lg"
                      className={cn(
                        "w-full h-12 rounded-[12px] text-[14px] font-semibold bg-orange-600 text-white",
                        "transition-all duration-150",
                        "hover:-translate-y-0.5 hover:shadow-md"
                      )}
                      aria-busy={isPending}
                    >
                      {isPending ? (
                        <>
                          <FiLoader className="animate-spin mr-2" size={16} />
                          Submitting your application...
                        </>
                      ) : (
                        <>
                          <FiSend className="mr-2" size={15} />
                          submit admission application
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </Form>
            </div>

            {/* ── Info panel column ───────────── */}
            <InfoPanel />
          </div>
        </main>
      </div>
    </div>
  );
}