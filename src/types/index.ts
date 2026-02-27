import type { LucideIcon } from "lucide-react";
import type { StaticImageData } from "next/image";

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
  src: string | StaticImageData;
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
