import { ReactNode } from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface PlanFeature {
  text: string;
  included: boolean;
}

export interface Plan {
  name: string;
  price: number;
  period: string;
  features: PlanFeature[];
  recommended?: boolean;
}

export interface Trainer {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
