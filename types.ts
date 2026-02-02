
import React from 'react';

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  recommended?: boolean;
}

export enum SolutionType {
  RESTAURANT = 'RESTAURANT',
  RETAIL = 'RETAIL',
  ATM = 'ATM',
  ENTERPRISE = 'ENTERPRISE'
}