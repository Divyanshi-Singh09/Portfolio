import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import emailjs from "@emailjs/browser";
import confetti from "canvas-confetti";
import { toast } from "sonner";
import {
  Mail,
  Send,
  User,
  AtSign,
  FileText,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  Copy,
  MapPin,
  Clock,
  Phone,
  AlertTriangle,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from "../components/SocialIcons";
import { personalData } from "../data/portfolioData";

// Zod Schema for strict validation
const contactSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  honeypot: z.string().max(0, "Spam detected"), // Anti-spam bot trap
});

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
      honeypot: "",
    },
  });

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopiedEmail(true);
    toast.success("Email copied to clipboard!");
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const onSubmit = async (data) => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      // Check if EmailJS keys are provided
      if (serviceId && templateId && publicKey) {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: data.fullName,
            from_email: data.email,
            subject: data.subject,
            message: data.message,
            to_name: personalData.name,
          },
          publicKey
        );

        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#8B5CF6", "#06B6D4", "#EC4899", "#FFFFFF"],
        });

        setIsSent(true);
        reset();
        toast.success("Thank you! Your message has been sent successfully.");
      } else {
        // Graceful Mailto Fallback with clear instructions as requested in prompt
        const mailtoUrl = `mailto:${personalData.email}?subject=${encodeURIComponent(
          data.subject
        )}&body=${encodeURIComponent(
          `From: ${data.fullName} (${data.email})\n\nMessage:\n${data.message}`
        )}`;

        // Trigger user email client
        window.location.href = mailtoUrl;

        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 },
          colors: ["#8B5CF6", "#06B6D4", "#FFFFFF"],
        });

        setIsSent(true);
        reset();
        toast.info(
          "EmailJS credentials not detected in .env. Opened your default mail client as fallback!",
          { duration: 6000 }
        );
      }
    } catch (err) {
      console.error("Email send error:", err);
      toast.error(
        "Could not send via EmailJS. Please reach out directly at " + personalData.email
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#070711]">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel-subtle border-violet-500/30 text-violet-400 text-xs font-mono uppercase tracking-widest mb-3"
          >
            <Send className="w-3.5 h-3.5 text-cyan-400" />
            <span>Get in Touch</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4 font-heading"
          >
            Let's Build Something <span className="text-gradient">Amazing Together</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-400 text-sm sm:text-base leading-relaxed"
          >
            Have an exciting project, an opportunity, or just want to say hello? I'd love to connect with you.
          </motion.p>
        </div>

        {/* Contact Layout: Info Column + Form Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct Contact Info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-card p-6 sm:p-8 rounded-3xl border-white/10 space-y-6">
              <h3 className="text-xl font-bold font-heading text-white flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                Contact Information
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Feel free to email me directly or send a message using the form. I typically respond within 24 hours.
              </p>

              {/* Email Direct Card */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between gap-3 group">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2.5 rounded-xl bg-violet-600/15 border border-violet-500/25 text-violet-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${personalData.email}`}
                      className="text-sm font-semibold text-white hover:text-cyan-300 transition-colors truncate block"
                    >
                      {personalData.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={copyEmailToClipboard}
                  className="p-2 rounded-xl glass-panel-subtle text-zinc-400 hover:text-white hover:bg-white/10 transition-colors shrink-0"
                  aria-label="Copy email address"
                  title="Copy email"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>

              {/* Phone Direct Card */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between gap-3 group">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2.5 rounded-xl bg-cyan-600/15 border border-cyan-500/25 text-cyan-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block">
                      Phone / Mobile
                    </span>
                    <a
                      href={`tel:${personalData.phone}`}
                      className="text-sm font-semibold text-white hover:text-cyan-300 transition-colors truncate block"
                    >
                      {personalData.phone}
                    </a>
                  </div>
                </div>

                <a
                  href={`tel:${personalData.phone}`}
                  className="px-3 py-1.5 rounded-xl glass-panel-subtle text-xs text-zinc-300 hover:text-white hover:border-cyan-500/40 transition-colors shrink-0"
                >
                  Call Now
                </a>
              </div>

              {/* Location & Status Info */}
              <div className="space-y-3 pt-2 border-t border-white/10 text-xs text-zinc-300">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>{personalData.location} (Open to On-site, Hybrid & Remote Roles)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-violet-400" />
                  <span>Response Time: Typically within 24 hours</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/10">
                <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block mb-3">
                  Professional Profiles & Code
                </span>
                <div className="flex flex-wrap items-center gap-2.5">
                  <a
                    href={personalData.socialLinks.github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl glass-panel-subtle text-xs text-zinc-300 hover:text-white hover:border-violet-500/40 hover:bg-violet-600/10 transition-all"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={personalData.socialLinks.linkedin.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl glass-panel-subtle text-xs text-zinc-300 hover:text-white hover:border-cyan-500/40 hover:bg-cyan-600/10 transition-all"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={personalData.socialLinks.leetcode.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl glass-panel-subtle text-xs text-zinc-300 hover:text-white hover:border-amber-500/40 hover:bg-amber-600/10 transition-all"
                  >
                    <LeetcodeIcon className="w-4 h-4 text-amber-400" />
                    <span>LeetCode</span>
                  </a>
                  <a
                    href={`mailto:${personalData.email}`}
                    className="flex items-center gap-2 px-3.5 py-2 rounded-xl glass-panel-subtle text-xs text-zinc-300 hover:text-white hover:border-violet-500/40 hover:bg-violet-600/10 transition-all"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Email</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="glass-card p-6 sm:p-8 rounded-3xl border-white/10 relative">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Honeypot field (hidden from normal users, traps spam bots) */}
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  {...register("honeypot")}
                  className="hidden"
                  aria-hidden="true"
                />

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                      Full Name *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        placeholder="John Doe"
                        {...register("fullName")}
                        className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.03] border text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500/40 transition-all ${
                          errors.fullName
                            ? "border-rose-500/60 focus:border-rose-500"
                            : "border-white/10 focus:border-violet-500/50"
                        }`}
                      />
                    </div>
                    {errors.fullName && (
                      <p className="text-xs text-rose-400 mt-1">{errors.fullName.message}</p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                      Email Address *
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
                        <AtSign className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        {...register("email")}
                        className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.03] border text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500/40 transition-all ${
                          errors.email
                            ? "border-rose-500/60 focus:border-rose-500"
                            : "border-white/10 focus:border-violet-500/50"
                        }`}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-xs text-rose-400 mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                    Subject *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
                      <FileText className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      placeholder="Project Inquiry / Full Stack Role"
                      {...register("subject")}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.03] border text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500/40 transition-all ${
                        errors.subject
                          ? "border-rose-500/60 focus:border-rose-500"
                          : "border-white/10 focus:border-violet-500/50"
                      }`}
                    />
                  </div>
                  {errors.subject && (
                    <p className="text-xs text-rose-400 mt-1">{errors.subject.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5">
                    Message *
                  </label>
                  <div className="relative">
                    <div className="absolute top-3.5 left-3.5 pointer-events-none text-zinc-500">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <textarea
                      rows={5}
                      placeholder="Tell me about your project, idea, or questions..."
                      {...register("message")}
                      className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.03] border text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-violet-500/40 transition-all resize-none ${
                        errors.message
                          ? "border-rose-500/60 focus:border-rose-500"
                          : "border-white/10 focus:border-violet-500/50"
                      }`}
                    />
                  </div>
                  {errors.message && (
                    <p className="text-xs text-rose-400 mt-1">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 transition-all duration-300 shadow-lg shadow-violet-600/25 hover:shadow-cyan-500/25 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 active:scale-[0.99]"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Transmitting Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {isSent && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Message received! Thank you for reaching out, Divyanshi will respond soon.</span>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
