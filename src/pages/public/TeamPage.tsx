import React, { useState } from 'react';
import { TEAM_MEMBERS } from '../../data/demo/fixtures';
import { BentoCard } from '../../components/ui/BentoCard';
import { Button } from '../../components/ui/Button';
import {
  GraduationCap,
  Users,
  Building,
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';

export const TeamPage: React.FC = () => {
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName || !inquiryEmail || !inquiryMessage) return;
    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-mono uppercase tracking-wider text-aura-light-action dark:text-aura-dark-cyan font-bold">
          Academic Contributors
        </span>
        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-aura-light-text dark:text-aura-dark-text mt-2">
          Project Team &amp; Faculty
        </h1>
        <p className="mt-4 text-base text-aura-light-muted dark:text-aura-dark-muted leading-relaxed">
          Developed by undergraduate computer science engineers at SRM Institute of Science and Technology, Ramapuram,
          under the Department of Computer Science &amp; Engineering (CSE Core-N).
        </p>
      </div>

      {/* Institutional Context Banner */}
      <div className="p-8 rounded-card bg-aura-light-surface dark:bg-aura-dark-surface border border-aura-light-border dark:border-aura-dark-border shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-aura-light-action dark:text-aura-dark-cyan font-semibold text-xs uppercase tracking-wider">
              <Building className="w-4 h-4" />
              <span>Institutional Affiliation</span>
            </div>
            <h2 className="font-heading font-bold text-2xl text-aura-light-text dark:text-aura-dark-text">
              SRM IST Ramapuram Campus
            </h2>
            <p className="text-xs sm:text-sm text-aura-light-muted dark:text-aura-dark-muted leading-relaxed">
              Course: Design Thinking &amp; Methodology (DTM)
              <br />
              Department: Computer Science and Engineering (CSE Core-N)
              <br />
              Project: Spatial Awareness Attachment for the Visually Impaired (AURA GUIDE)
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-100 dark:bg-slate-800/60 border border-aura-light-border/80 dark:border-aura-dark-border/60">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-500 border border-cyan-500/30 flex items-center justify-center font-bold">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase text-aura-light-muted dark:text-aura-dark-muted">
                  Faculty Supervisor
                </span>
                <h3 className="font-heading font-bold text-lg text-aura-light-text dark:text-aura-dark-text">
                  Dr. ARUN A.
                </h3>
                <p className="text-xs text-aura-light-muted dark:text-aura-dark-muted">
                  Faculty Mentor · Department of Computer Science &amp; Engineering
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Student Engineers Grid */}
      <div className="space-y-6">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="font-heading font-bold text-2xl text-aura-light-text dark:text-aura-dark-text">
            Student Engineering Team
          </h2>
          <p className="text-xs text-aura-light-muted dark:text-aura-dark-muted mt-1">
            CSE Core-N Project Collaborators
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member, idx) => (
            <BentoCard key={idx} className="flex flex-col justify-between h-full space-y-4">
              <div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-aura-light-action/20 to-cyan-400/20 dark:from-aura-dark-cyan/20 dark:to-teal-400/20 border border-cyan-500/40 text-aura-light-action dark:text-aura-dark-cyan font-bold flex items-center justify-center font-heading text-base mb-4">
                  {member.name.charAt(0)}
                </div>
                <h3 className="font-heading font-bold text-lg text-aura-light-text dark:text-aura-dark-text">
                  {member.name}
                </h3>
                <p className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400 mt-0.5">
                  Reg: {member.regNo}
                </p>
                <p className="text-xs text-aura-light-muted dark:text-aura-dark-muted mt-2 leading-relaxed">
                  {member.role}
                </p>
              </div>
              <div className="pt-3 border-t border-aura-light-border/60 dark:border-aura-dark-border/40">
                <span className="text-[10px] font-mono text-aura-light-muted dark:text-aura-dark-muted">
                  {member.dept} · SRM IST
                </span>
              </div>
            </BentoCard>
          ))}
        </div>
      </div>

      {/* Academic Feedback & Inquiry Form */}
      <div className="max-w-2xl mx-auto p-8 rounded-card bg-aura-light-surface dark:bg-aura-dark-surface border border-aura-light-border dark:border-aura-dark-border shadow-xl space-y-6">
        <div>
          <h3 className="font-heading font-bold text-xl text-aura-light-text dark:text-aura-dark-text">
            Academic Inquiries &amp; Mentorship Feedback
          </h3>
          <p className="text-xs text-aura-light-muted dark:text-aura-dark-muted mt-1">
            For faculty evaluations, collaborative assistive-tech research, or project questions.
          </p>
        </div>

        {submitted ? (
          <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 dark:text-emerald-200 text-center space-y-2">
            <CheckCircle2 className="w-8 h-8 mx-auto text-emerald-500" />
            <h4 className="font-heading font-bold text-base">Inquiry Recorded in Demo Mode</h4>
            <p className="text-xs leading-relaxed max-w-md mx-auto">
              Thank you, {inquiryName}! Your academic feedback has been saved locally for review. In live deployment, this
              routes directly to the student project coordinator.
            </p>
            <Button size="sm" variant="secondary" onClick={() => setSubmitted(false)} className="mt-2">
              Send Another Note
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div>
              <label htmlFor="name-input" className="block font-semibold mb-1">
                Your Name / Faculty Role <span className="text-rose-500">*</span>
              </label>
              <input
                id="name-input"
                type="text"
                required
                value={inquiryName}
                onChange={(e) => setInquiryName(e.target.value)}
                placeholder="Dr. / Prof. / Researcher Name"
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-aura-light-border dark:border-aura-dark-border text-aura-light-text dark:text-aura-dark-text focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            <div>
              <label htmlFor="email-input" className="block font-semibold mb-1">
                Academic or Organization Email <span className="text-rose-500">*</span>
              </label>
              <input
                id="email-input"
                type="email"
                required
                value={inquiryEmail}
                onChange={(e) => setInquiryEmail(e.target.value)}
                placeholder="name@srmist.edu.in or organization.org"
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-aura-light-border dark:border-aura-dark-border text-aura-light-text dark:text-aura-dark-text focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            <div>
              <label htmlFor="message-input" className="block font-semibold mb-1">
                Feedback / Inquiry Note <span className="text-rose-500">*</span>
              </label>
              <textarea
                id="message-input"
                required
                rows={4}
                value={inquiryMessage}
                onChange={(e) => setInquiryMessage(e.target.value)}
                placeholder="Share your guidance, questions regarding sensor accuracy, or collaborative ideas..."
                className="w-full px-3.5 py-2.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-aura-light-border dark:border-aura-dark-border text-aura-light-text dark:text-aura-dark-text focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            <Button type="submit" variant="primary" icon={<Send className="w-4 h-4" />}>
              Submit Academic Inquiry
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};
