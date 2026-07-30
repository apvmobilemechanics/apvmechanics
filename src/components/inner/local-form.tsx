"use client";

import { CheckCircle2 } from "lucide-react";
import { FormEvent, useState } from "react";

export function LocalContactForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const entry = {
      name: form.get("name"),
      email: form.get("email"),
      phone: form.get("phone"),
      service: form.get("service"),
      message: form.get("message"),
      createdAt: new Date().toISOString(),
    };
    const existing = JSON.parse(window.localStorage.getItem("automart-enquiries") ?? "[]") as unknown[];
    window.localStorage.setItem("automart-enquiries", JSON.stringify([...existing, entry]));
    setSent(true);
    event.currentTarget.reset();
  };
  if (sent) return <div className="form-success"><CheckCircle2/><h3>Thank you</h3><p>Your enquiry has been stored on this device for this frontend demonstration.</p><button className="primary-action" type="button" onClick={() => setSent(false)}>Send Another</button></div>;
  return (
    <form className={`automart-form ${compact ? "automart-form--compact" : ""}`} onSubmit={submit}>
      <h2>Get A Free Quote</h2>
      <div className="form-two"><label>Your Name<input required name="name" placeholder="Your Name"/></label><label>Email Address<input required name="email" type="email" placeholder="Email Address"/></label></div>
      <div className="form-two"><label>Phone Number<input required name="phone" type="tel" placeholder="Phone Number"/></label><label>Service<select required name="service" defaultValue=""><option value="" disabled>Select Service</option><option>Rim & Wheel Repair</option><option>Brake Repair</option><option>Engine Diagnosis</option><option>Battery Solution</option></select></label></div>
      <label>Your Message<textarea required name="message" rows={compact ? 3 : 5} placeholder="Write Your Message"/></label>
      <button className="primary-action" type="submit">Send Message</button>
    </form>
  );
}
