"use server";

import { admissionSchema, type AdmissionFormValues } from "@/lib/schema";

// ──────────────────────────────────────────────────
// Response type for server action
// ──────────────────────────────────────────────────
export type SubmitAdmissionResult =
  | { success: true; applicationId: string; message: string }
  | { success: false; error: string };

// ──────────────────────────────────────────────────
// Server action: handles admission form submission
// Replace the body with your actual DB / email / CRM logic
// ──────────────────────────────────────────────────
export async function submitAdmissionForm(
  data: AdmissionFormValues
): Promise<SubmitAdmissionResult> {
  try {
    // 1. Validate on the server side as well (never trust the client)
    const parsed = admissionSchema.safeParse(data);
    if (!parsed.success) {
      return {
        success: false,
        error: "validation failed – please fix form errors and try again.",
      };
    }

    // 2. Simulate DB / email / CRM call (replace this with real logic)
    await new Promise((resolve) => setTimeout(resolve, 1200));

    // Example: insert to DB ─────────────────────────
    // await db.insert(admissionsTable).values({
    //   ...parsed.data,
    //   applicationId: `TV-${Date.now()}`,
    //   submittedAt: new Date(),
    //   status: "pending",
    // });

    // Example: send confirmation email ────────────
    // await sendEmail({
    //   to: parsed.data.email,
    //   subject: "admission application received – techvision institute",
    //   template: "admission-confirmation",
    //   data: { name: parsed.data.fullName, course: parsed.data.course },
    // });

    // Example: notify admissions team ─────────────
    // await notifyTeam(parsed.data);

    // 3. Return success response
    const applicationId = `TV${Date.now().toString().slice(-6)}`;
    return {
      success: true,
      applicationId,
      message: `your application has been received! application id: ${applicationId}`,
    };
  } catch (error) {
    console.error("[admissionAction]", error);
    return {
      success: false,
      error: "something went wrong. please try again or contact us directly.",
    };
  }
}