"use client";
import { useState } from "react";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiSend,
  FiUser,
  FiMessageSquare,
} from "react-icons/fi";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

// ── shadcn/ui primitives ──────────────────────────────────────────────────────
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

// ── data ──────────────────────────────────────────────────────────────────────
const contactInfo = [
  {
    icon: FiPhone,
    label: "Phone",
    value: "+91 788 947 4591",
    href: "",
  },
  {
    icon: FiMail,
    label: "Email",
    value: "trendy.world@yahoo.in",
    href: "mailto:trendy.world@yahoo.in",
  },
  {
    icon: FiMapPin,
    label: "Address",
    value: "Babar Lane Hospital road -Kupwara",
    href: "https://maps.google.com/?q=1425+N+McLean+Blvd+Elgin+IL",
  },
];


const socials = [
  {
    icon: FaInstagram,
    label: "Instagram",
    href: "https://instagram.com",
    color: "hover:text-pink-500",
  },
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    href: "https://linkedin.com",
    color: "hover:text-sky-500",
  },
  {
    icon: FaFacebookF,
    label: "Facebook",
    href: "https://facebook.com",
    color: "hover:text-blue-500",
  },
  {
    icon: FaTwitter,
    label: "Twitter / X",
    href: "https://twitter.com",
    color: "hover:text-sky-400",
  },
];

// ── sub-components ────────────────────────────────────────────────────────────
function InfoRow({ icon: Icon, label, value, href }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-accent"
    >
      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-500/10 text-orange-500">
        <Icon size={15} />
      </span>
      <div className="min-w-0">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          {label}
        </p>
        <p className="truncate text-sm font-medium text-foreground group-hover:text-orange-500 transition-colors">
          {value}
        </p>
      </div>
    </Link>
  );
}

function HoursRow({ day, hours }) {
  return (
    <div className="flex items-center justify-between py-2 text-sm">
      <span className="font-medium text-foreground">{day}</span>
      <Badge
        variant="secondary"
        className="text-xs font-normal tracking-wide"
      >
        {hours}
      </Badge>
    </div>
  );
}

// ── main component ─────────────────────────────────────────────────────────────
export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", phone: "", email: "", message: "" });
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ── page shell ── */}
      <div className="mx-auto container px-4 py-16 sm:px-6 lg:px-8">

        {/* ── header ── */}
        <div className="mb-12 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-1 text-xs font-semibold tracking-[0.2em] text-orange-500">
              Get in touch
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Contact us
            </h1>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground sm:text-right">
            Questions? Reach us via phone, text, email, the form below, or on
            social media — we're always happy to help.
          </p>
        </div>

        {/* ── two-column grid ── */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">

          {/* ── LEFT: form ── */}
          <Card className="lg:col-span-3 border-border/60">
            <CardHeader className="pb-2 pt-6 px-3">
              <CardTitle className="text-xl font-bold tracking-tight">
                send us a message
              </CardTitle>
              <p className="text-xs text-muted-foreground pt-1">
                Fill in the details below and we'll get back to you within 24 hours.
              </p>
            </CardHeader>
 
            <CardContent className="px-3 pb-6 pt-4">
              <form onSubmit={handleSubmit} className="space-y-4">
 
                {/* name + phone row */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="group relative">
                    <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground/50 group-focus-within:text-orange-500 transition-colors duration-200">
                      <FiUser size={15} />
                    </span>
                    <Input
                      id="name"
                      name="name"
                      placeholder="tyler durden"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="h-12 pl-10 pr-4 text-sm placeholder:text-muted-foreground/40
                        border-border/60 bg-muted/20 rounded-xl
                        focus-visible:border-orange-500 focus-visible:ring-2 focus-visible:ring-orange-500/15
                        transition-all duration-200"
                    />
                    <Label htmlFor="name" className="absolute -top-2 left-3 px-1 text-[10px] font-semibold tracking-wide text-muted-foreground bg-card">
                      Full name
                    </Label>
                  </div>
 
                  <div className="group relative">
                    <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground/50 group-focus-within:text-orange-500 transition-colors duration-200">
                      <FiPhone size={15} />
                    </span>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="+91 000 000 0000"
                      value={form.phone}
                      onChange={handleChange}
                      className="h-12 pl-10 pr-4 text-sm placeholder:text-muted-foreground/40
                        border-border/60 bg-muted/20 rounded-xl
                        focus-visible:border-orange-500 focus-visible:ring-2 focus-visible:ring-orange-500/15
                        transition-all duration-200"
                    />
                    <Label htmlFor="phone" className="absolute -top-2 left-3 px-1 text-[10px] font-semibold tracking-wide text-muted-foreground bg-card">
                      Phone number
                    </Label>
                  </div>
                </div>
 
                {/* email */}
                <div className="group relative">
                  <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground/50 group-focus-within:text-orange-500 transition-colors duration-200">
                    <FiMail size={15} />
                  </span>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="tyler.durden@company.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="h-12 pl-10 pr-4 text-sm placeholder:text-muted-foreground/40
                      border-border/60 bg-muted/20 rounded-xl
                      focus-visible:border-orange-500 focus-visible:ring-2 focus-visible:ring-orange-500/15
                      transition-all duration-200"
                  />
                  <Label htmlFor="email" className="absolute -top-2 left-3 px-1 text-[10px] font-semibold tracking-wide text-muted-foreground bg-card">
                    Email address
                  </Label>
                </div>
 
                {/* message */}
                <div className="group relative">
                  <span className="pointer-events-none absolute left-3.5 top-3.5 text-muted-foreground/50 group-focus-within:text-orange-500 transition-colors duration-200">
                    <FiMessageSquare size={15} />
                  </span>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us what you're looking for — the more detail, the better we can help…"
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="min-h-[148px] resize-none pl-10 pr-4 pt-3.5 pb-3 text-sm
                      placeholder:text-muted-foreground/40 leading-relaxed
                      border-border/60 bg-muted/20 rounded-xl
                      focus-visible:border-orange-500 focus-visible:ring-2 focus-visible:ring-orange-500/15
                      transition-all duration-200"
                  />
                  <Label htmlFor="message" className="absolute -top-2 left-3 px-1 text-[10px] font-semibold tracking-wide text-muted-foreground bg-card">
                    Your message
                  </Label>
                </div>
 
                {/* submit */}
                <Button
                  type="submit"
                  className="w-full h-12 gap-2.5 font-semibold tracking-wide text-white rounded-xl shadow-lg
                    bg-linear-to-r from-orange-500 to-amber-400
                    hover:from-orange-600 hover:to-amber-500
                    hover:shadow-orange-500/30 hover:shadow-xl
                    active:scale-[0.98] transition-all duration-200"
                >
                  {sent ? (
                    <>
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      Message sent!
                    </>
                  ) : (
                    <>
                      <FiSend size={15} />
                      Send message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* ── RIGHT: info + hours + social ── */}
          <div className="flex flex-col gap-5 lg:col-span-2">

            {/* contact info */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold tracking-wide">
                  Contact information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-1 p-3">
                {contactInfo.map((item) => (
                  <InfoRow key={item.label} {...item} />
                ))}
              </CardContent>
            </Card>

            {/* social links */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold tracking-wide">
                  Follow us
                </CardTitle>
              </CardHeader>
              <CardContent className="px-4 pb-4 pt-0">
                <div className="flex flex-wrap gap-3">
                  {socials.map(({ icon: Icon, label, href, color }) => (
                    <Link
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={label}
                      className={`flex h-10 w-10 items-center justify-center rounded-full border border-border bg-muted text-muted-foreground transition-all duration-200 hover:border-orange-500/40 hover:bg-orange-500/10 ${color} hover:scale-110`}
                    >
                      <Icon size={16} />
                    </Link>
                  ))}
                </div>
                <p className="mt-3 text-xs text-muted-foreground leading-relaxed">
                  Stay connected for updates, news, and promotions across our
                  social channels.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* ── map embed ── */}
        <div className="mt-6 overflow-hidden rounded-2xl border border-border shadow-sm">
          <iframe
            title="Business Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1838.2767811270894!2d74.25437190106705!3d34.52645427274367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e11f354a7e4123%3A0x3ab4a303285908f2!2sTRENDY%20INSTITUTE%20OF%20IT%20KUPWARA!5e1!3m2!1sen!2sin!4v1778856050074!5m2!1sen!2sin"
            width="100%"
            height="420"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
