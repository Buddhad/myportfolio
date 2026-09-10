import { useState } from 'react';
import { profile } from '@/data/content';
import { Mail, MapPin, Send } from 'lucide-react';
import { SEO } from '@/components/SEO';

export function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const [botcheck, setBotcheck] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');

    // If the honeypot is filled, silently reject (act like it succeeded to fool the bot)
    if (botcheck) {
      setSent(true);
      return;
    }

    if (!name || !email || !message) return;

    // Check if the user has submitted a message in the last hour
    const lastSubmission = localStorage.getItem('lastFormSubmission');
    if (lastSubmission) {
      const timeSinceLastSubmission = Date.now() - parseInt(lastSubmission, 10);
      const oneHour = 60 * 60 * 1000; // 1 hour in milliseconds

      if (timeSinceLastSubmission < oneHour) {
        setSubmitError("You've already sent a message recently. Please try again later.");
        return;
      }
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "1ee9df39-d4e4-404b-9bf2-018faaf49cba",
          subject: ` ${name} sent a message from your Website.`,
          name,
          email,
          message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        localStorage.setItem('lastFormSubmission', Date.now().toString());
        setSent(true);
        setTimeout(() => {
          setSent(false);
          setName('');
          setEmail('');
          setMessage('');
        }, 3000);
      } else {
        setSubmitError(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError("Something went wrong. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container-wide pt-32 pb-12">
      <SEO title="Contact — Buddhadeb Chhetri" canonical="/contact" />
      <section className="animate-fade-up max-w-2xl">
        <h1 className="font-serif text-3xl font-semibold tracking-tight text-ink-900 dark:text-ink-50 sm:text-4xl">
          Contact
        </h1>
        <p className="mt-4 max-w-prose text-base leading-relaxed text-ink-600 dark:text-ink-300">
          Whether you want to discuss a project, share an idea, or just say hello, I would
          love to hear from you. The best way to reach me is via email or the form below.
        </p>
      </section>

      <div className="mt-10 grid gap-12 sm:grid-cols-2">
        {/* Contact info */}
        <div className="space-y-6">
          <a
            href={`mailto:${profile.email}`}
            className="group flex items-center gap-3 text-ink-600 transition-colors hover:text-ink-900 dark:text-ink-300 dark:hover:text-ink-50"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink-100 text-ink-500 transition-colors group-hover:bg-accent-100 group-hover:text-accent-700 dark:bg-ink-800 dark:text-ink-400 dark:group-hover:bg-accent-900 dark:group-hover:text-accent-300">
              <Mail className="h-4 w-4" />
            </span>
            <span className="link-underline text-sm font-medium">{profile.email}</span>
          </a>
          <div className="flex items-center gap-3 text-ink-600 dark:text-ink-300">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink-100 text-ink-500 dark:bg-ink-800 dark:text-ink-400">
              <MapPin className="h-4 w-4" />
            </span>
            <span className="text-sm font-medium">{profile.location}</span>
          </div>
          <div className="pt-2">
            <p className="text-sm text-ink-500 dark:text-ink-400">Elsewhere</p>
            <div className="mt-2 flex gap-4">
              {profile.social.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-sm font-medium text-ink-600 hover:text-ink-900 dark:text-ink-300 dark:hover:text-ink-50"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Honeypot field to catch spam bots */}
          <input
            type="checkbox"
            name="botcheck"
            className="hidden"
            style={{ display: 'none' }}
            checked={botcheck}
            onChange={(e) => setBotcheck(e.target.checked)}
          />

          <div>
            <label className="mb-1.5 block text-sm font-medium text-ink-600 dark:text-ink-300">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border border-ink-200 bg-white px-4 py-2.5 text-sm text-ink-800 outline-none transition-colors focus:border-accent-400 focus:ring-2 focus:ring-accent-200 dark:border-ink-700 dark:bg-ink-900 dark:text-ink-100 dark:focus:border-accent-600 dark:focus:ring-accent-900"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-ink-600 dark:text-ink-300">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-ink-200 bg-white px-4 py-2.5 text-sm text-ink-800 outline-none transition-colors focus:border-accent-400 focus:ring-2 focus:ring-accent-200 dark:border-ink-700 dark:bg-ink-900 dark:text-ink-100 dark:focus:border-accent-600 dark:focus:ring-accent-900"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-ink-600 dark:text-ink-300">
              Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              className="w-full resize-none rounded-lg border border-ink-200 bg-white px-4 py-2.5 text-sm text-ink-800 outline-none transition-colors focus:border-accent-400 focus:ring-2 focus:ring-accent-200 dark:border-ink-700 dark:bg-ink-900 dark:text-ink-100 dark:focus:border-accent-600 dark:focus:ring-accent-900"
              placeholder="What is on your mind?"
            />
          </div>
          {submitError && (
            <p className="text-sm font-medium text-red-500 dark:text-red-400">
              {submitError}
            </p>
          )}

          <button
            type="submit"
            disabled={sent || isSubmitting}
            className="group inline-flex items-center gap-2 rounded-full bg-ink-900 px-5 py-2.5 text-sm font-medium text-ink-50 transition-all hover:bg-ink-700 disabled:opacity-50 dark:bg-ink-50 dark:text-ink-900 dark:hover:bg-ink-200"
          >
            {isSubmitting ? (
              'Sending...'
            ) : sent ? (
              'Message sent'
            ) : (
              <>
                Send message
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
