"use client";

import { useState } from "react";

export function RentEnquiryForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
    }, 800);
  };

  if (status === "success") {
    return (
      <div className="rent-car__success">
        <strong>Thanks!</strong> We will contact you shortly.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Send An Enquiry</h3>

      <div className="rent-car__field">
        <label htmlFor="rent-name">Name</label>
        <input
          id="rent-name"
          type="text"
          placeholder="Your full name"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>

      <div className="rent-car__field">
        <label htmlFor="rent-phone">Phone</label>
        <input
          id="rent-phone"
          type="tel"
          placeholder="Your phone number"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>

      <div className="rent-car__field">
        <label htmlFor="rent-message">Message</label>
        <textarea
          id="rent-message"
          rows={4}
          placeholder="Tell us what vehicle you need and for how long..."
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>

      <button type="submit" className="rent-car__submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : "Send Enquiry"}
      </button>
    </form>
  );
}
