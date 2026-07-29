import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "motion/react";
import { Mail, Linkedin, Check, ArrowRight, Briefcase, User } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/layout/Section";
import { Btn } from "@/components/ui/Btn";
import { services, site } from "@/data/site";
import { cn } from "@/lib/utils";
import { submitToFormEndpoint } from "@/lib/form-submission";

const contactSchema = z.object({
  intent: z.enum(["employer", "candidate"]),
  name: z.string().trim().min(2, "Please enter your name").max(80),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  email: z.string().trim().email("Enter a valid email address").max(160),
  service: z.string().optional().or(z.literal("")),
  message: z.string().trim().min(10, "Add a few more details").max(2000),
});

type ContactValues = z.infer<typeof contactSchema>;

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Synergy Scout" },
      {
        name: "description",
        content:
          "Talk to us — whether you're hiring or looking for your next role. We reply within one working day.",
      },
      { property: "og:title", content: "Contact — Synergy Scout" },
      {
        property: "og:description",
        content: "Start the conversation — we'll come back within one working day.",
      },
      { property: "og:url", content: "https://synergyscout.in/contact" },
    ],
    links: [{ rel: "canonical", href: "https://synergyscout.in/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      intent: "employer",
      name: "",
      company: "",
      email: "",
      service: "",
      message: "",
    },
  });

  const intent = watch("intent");

  const onSubmit = async (values: ContactValues) => {
    setLoading(true);
    setFormError(null);

    const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT;
    if (!endpoint) {
      setLoading(false);
      setFormError(
        `The online form is being connected. Please email ${site.email} directly for now.`,
      );
      return;
    }

    try {
      await submitToFormEndpoint(endpoint, {
        ...values,
        _subject: `Synergy Scout ${values.intent} enquiry`,
      });
      setLoading(false);
      setSubmitted(true);
      reset();
    } catch {
      setLoading(false);
      setFormError(`We couldn't send this message. Please email ${site.email} directly.`);
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let's start the conversation.</>}
        subtitle="Hiring a team, or looking for your next role? Either way — a real person replies within one working day."
      />

      <Section tone="canvas" size="lg" containerSize="wide">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Left — intro */}
          <aside className="lg:sticky lg:top-32 lg:self-start">
            <div className="mono-label">Reach us</div>
            <h2 className="mt-4 font-display text-[30px] font-semibold leading-tight tracking-tight sm:text-[36px] text-balance">
              A partner will reply — not a form auto-responder.
            </h2>
            <p className="mt-5 text-[15.5px] leading-relaxed text-[color:var(--muted)]">
              Synergy Scout is a remote-first firm. The fastest way to reach us is a short note — a
              few lines about the role or your background is plenty to get started.
            </p>

            <ul className="mt-10 space-y-4">
              <ContactRow icon={Mail} label="Email">
                <a
                  href={`mailto:${site.email}`}
                  className="text-[color:var(--ink)] transition-colors hover:text-[color:var(--accent-blue)]"
                >
                  {site.email}
                </a>
              </ContactRow>
              {site.linkedin && (
                <ContactRow icon={Linkedin} label="LinkedIn">
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[color:var(--ink)] transition-colors hover:text-[color:var(--accent-blue)]"
                  >
                    Follow Synergy Scout
                  </a>
                </ContactRow>
              )}
            </ul>

            <div className="mt-10 rounded-2xl border border-[color:var(--hairline)] bg-[color:var(--surface)] p-6">
              <div className="mono-label">Response time</div>
              <p className="mt-2 text-[14.5px] leading-relaxed text-[color:var(--ink-2)]">
                Every message gets a personal reply within one working day. If it's a live search,
                we'll suggest a scoped path forward in that same reply.
              </p>
            </div>
          </aside>

          {/* Right — form */}
          <div>
            <div className="rounded-3xl border border-[color:var(--hairline)] bg-white p-8 shadow-[var(--shadow-soft)] sm:p-10">
              {submitted ? (
                <SuccessState onReset={() => setSubmitted(false)} />
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit) as (e: FormEvent) => void}
                  className="space-y-5"
                  noValidate
                >
                  <div className="mono-label">Tell us who you are</div>

                  {/* Intent toggle */}
                  <div className="grid grid-cols-2 gap-2 rounded-2xl border border-[color:var(--hairline-strong)] bg-[color:var(--surface)] p-1.5">
                    <IntentButton
                      icon={Briefcase}
                      label="I'm hiring"
                      hint="Employer"
                      active={intent === "employer"}
                      onClick={() => setValue("intent", "employer", { shouldValidate: true })}
                    />
                    <IntentButton
                      icon={User}
                      label="I'm a candidate"
                      hint="Looking for a role"
                      active={intent === "candidate"}
                      onClick={() => setValue("intent", "candidate", { shouldValidate: true })}
                    />
                  </div>
                  <input type="hidden" {...register("intent")} />

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Your name" error={errors.name?.message}>
                      <input
                        autoComplete="name"
                        {...register("name")}
                        className={inputCls(!!errors.name)}
                        placeholder="Full name"
                      />
                    </Field>
                    <Field
                      label={intent === "candidate" ? "Current company (optional)" : "Company"}
                      error={errors.company?.message}
                    >
                      <input
                        autoComplete="organization"
                        {...register("company")}
                        className={inputCls(!!errors.company)}
                        placeholder="Where you work"
                      />
                    </Field>
                    <Field
                      label={intent === "candidate" ? "Personal email" : "Work email"}
                      error={errors.email?.message}
                    >
                      <input
                        autoComplete="email"
                        spellCheck={false}
                        type="email"
                        {...register("email")}
                        className={inputCls(!!errors.email)}
                        placeholder="you@email.com"
                      />
                    </Field>
                    {intent === "employer" ? (
                      <Field label="Service interest">
                        <select
                          {...register("service")}
                          className={cn(
                            inputCls(false),
                            "appearance-none pr-10 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%235b6474%22 stroke-width=%222%22><polyline points=%226 9 12 15 18 9%22/></svg>')] bg-[right_1rem_center] bg-no-repeat",
                          )}
                        >
                          <option value="">Select a service…</option>
                          {services.map((s) => (
                            <option key={s.slug} value={s.title}>
                              {s.title}
                            </option>
                          ))}
                          <option value="Not sure yet">Not sure yet — let's discuss</option>
                        </select>
                      </Field>
                    ) : (
                      <Field label="Area of expertise">
                        <input
                          autoComplete="off"
                          {...register("service")}
                          className={inputCls(false)}
                          placeholder="e.g. Backend, Data, SRE…"
                        />
                      </Field>
                    )}
                  </div>

                  <Field
                    label={
                      intent === "candidate"
                        ? "Tell us about yourself and what you're looking for"
                        : "Tell us about the role or the plan"
                    }
                    error={errors.message?.message}
                  >
                    <textarea
                      {...register("message")}
                      rows={5}
                      className={cn(inputCls(!!errors.message), "min-h-[140px] py-3")}
                      autoComplete="off"
                      placeholder={
                        intent === "candidate"
                          ? "Current role, stack, what excites you next — a few lines is plenty."
                          : "Team size, timelines, key challenges — a few lines is plenty."
                      }
                    />
                  </Field>

                  <div className="flex items-center justify-between gap-4 pt-2">
                    <p className="text-[12px] text-[color:var(--muted)]">
                      By submitting, you agree to be contacted about your enquiry.
                    </p>
                    <Btn type="submit" variant="primary" size="lg" disabled={loading}>
                      {loading ? (
                        <>Sending…</>
                      ) : (
                        <>
                          Send message <ArrowRight className="h-4 w-4" />
                        </>
                      )}
                    </Btn>
                  </div>
                  {formError && (
                    <p
                      className="text-right text-[12px] text-[color:var(--destructive)]"
                      role="alert"
                    >
                      {formError}
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function IntentButton({
  icon: Icon,
  label,
  hint,
  active,
  onClick,
}: {
  icon: typeof Briefcase;
  label: string;
  hint: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "flex items-center gap-3 rounded-xl px-4 py-3 text-left transition-[background-color,color,box-shadow]",
        active
          ? "bg-white shadow-[var(--shadow-soft)]"
          : "text-[color:var(--muted)] hover:text-[color:var(--ink)]",
      )}
    >
      <span
        className={cn(
          "grid h-9 w-9 shrink-0 place-items-center rounded-lg transition-colors",
          active
            ? "bg-[color:var(--accent-blue)] text-white"
            : "bg-white text-[color:var(--muted)]",
        )}
      >
        <Icon className="h-4 w-4" strokeWidth={1.75} />
      </span>
      <span className="min-w-0">
        <span className="block text-[13.5px] font-semibold text-[color:var(--ink)]">{label}</span>
        <span className="block text-[11.5px] text-[color:var(--muted)]">{hint}</span>
      </span>
    </button>
  );
}

function ContactRow({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof Mail;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-4">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[color:var(--surface)] text-[color:var(--ink)]">
        <Icon className="h-4 w-4" strokeWidth={1.75} />
      </span>
      <div className="min-w-0">
        <div className="mono-label !text-[10px]">{label}</div>
        <div className="mt-1 text-[15px] leading-relaxed">{children}</div>
      </div>
    </li>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[12.5px] font-medium tracking-tight text-[color:var(--ink)]">
        {label}
      </span>
      {children}
      {error && (
        <span className="mt-1.5 block text-[12px] text-[color:var(--destructive)]">{error}</span>
      )}
    </label>
  );
}

function inputCls(hasError: boolean) {
  return cn(
    "w-full h-11 rounded-xl border bg-white px-4 text-[14.5px] text-[color:var(--ink)] placeholder:text-[color:var(--muted)] transition-[border-color,box-shadow]",
    "focus:outline-none focus:ring-4",
    hasError
      ? "border-[color:var(--destructive)] focus:border-[color:var(--destructive)] focus:ring-[color:var(--destructive)]/10"
      : "border-[color:var(--hairline-strong)] focus:border-[color:var(--ink)] focus:ring-[color:var(--ink)]/8",
  );
}

function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <div className="py-6 text-center" aria-live="polite">
      <motion.span
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 180, damping: 16 }}
        className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[color:var(--accent-blue)] text-white"
      >
        <Check className="h-7 w-7" strokeWidth={2.5} />
      </motion.span>
      <h3 className="mt-6 font-display text-[26px] font-semibold tracking-tight">
        Message received.
      </h3>
      <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-[color:var(--muted)]">
        A partner will be in touch within one working day.
      </p>
      <button
        onClick={onReset}
        className="mt-6 text-[13px] font-medium text-[color:var(--accent-blue)] hover:underline"
      >
        Send another message
      </button>
    </div>
  );
}
