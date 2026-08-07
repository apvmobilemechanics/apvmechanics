import type { LucideIcon } from "lucide-react";

export interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export interface StoredEnquiry extends ContactPayload {
  createdAt: string;
}

export interface RentEnquiryPayload {
  name: string;
  phone: string;
  message: string;
}

export interface ContactTool {
  icon: LucideIcon;
  label: string;
  desc: string;
}
