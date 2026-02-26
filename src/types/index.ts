import type { LucideIcon } from "lucide-react";

export interface NavItem {
  labelKey: string;
  href: string;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface SectionProps {
  id: string;
  className?: string;
}

export interface ImageItem {
  src: string;
  alt: string;
  label?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}
