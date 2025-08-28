"use client"
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import SimpleHero from '@/components/sections/layouts/hero/SimpleHero';
import MinimalAbout from '@/components/sections/layouts/about/MinimalAbout';
import SimpleKPIBento from '@/components/bento/SimpleKPIBento';
import BentoFAQ from '@/components/sections/layouts/faq/BentoFAQ';
import { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required className="p-2 border rounded" />
      <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="p-2 border rounded" />
      <textarea placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)} required className="p-2 border rounded"></textarea>
      <button type="submit" className="p-2 bg-primary text-white rounded">Send</button>
    </form>
  );
};

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
      <section id="hero" className="bg-white py-18">
        <SimpleHero title="Welcome to Our Brand" description="Your journey to excellence starts here!" primaryButtonText="Get Started" secondaryButtonText="Learn More" />
      </section>
      <section id="about" className="bg-F8FBFF py-18">
        <MinimalAbout description="We are a trusted name in delivering great services to our clients." />
      </section>
      <section id="services" className="bg-white py-18">
        <SimpleKPIBento items={[{ value: 'Service 1', description: 'Description of service 1' }, { value: 'Service 2', description: 'Description of service 2' }, { value: 'Service 3', description: 'Description of service 3' }]} className="p-5" />
      </section>
      <section id="testimonials" className="bg-soft-noise py-18">
        <BentoFAQ items={[{ title: "John Doe", content: "Great experience!" }, { title: "Jane Smith", content: "I highly recommend this brand!" }]} />
      </section>
      <section id="terms" className="bg-F7F9FC py-18">
        <p>Summary of our terms. <a href="#" className="text-primary">Read full terms here.</a></p>
      </section>
      <section id="privacy" className="bg-white py-18">
        <p>Summary of our privacy policy. <a href="#" className="text-primary">Read full policy here.</a></p>
      </section>
      <section id="contact" className="bg-white py-18">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <ContactForm />
      </section>
    </SiteThemeProvider>
  );
}
