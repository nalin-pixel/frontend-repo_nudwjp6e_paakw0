import { useState } from 'react';

function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      // In a real app, send to backend. Here we just simulate success.
      await new Promise((r) => setTimeout(r, 900));
      setStatus('Thanks! I will reply shortly.');
    } catch (e) {
      setStatus('Something went wrong. Please email me.');
    }
  };

  return (
    <section id="contact" className="relative">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Contact</h2>
        <p className="mt-2 text-gray-600">Have a project in mind? Let’s talk.</p>

        <form onSubmit={onSubmit} className="mt-8 grid gap-4">
          <div className="grid gap-2 sm:grid-cols-2">
            <input required name="name" placeholder="Your name" className="rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900" />
            <input required type="email" name="email" placeholder="Email" className="rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900" />
          </div>
          <input name="subject" placeholder="Subject" className="rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900" />
          <textarea required name="message" rows="5" placeholder="Tell me about your project" className="rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900" />
          <div className="flex items-center gap-3">
            <button type="submit" className="inline-flex items-center rounded-md bg-gray-900 px-5 py-3 text-white hover:bg-black">Send message</button>
            <span className="text-sm text-gray-600">{status}</span>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
