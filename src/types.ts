export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isLive: boolean;
}

export type UserRole = 'buyer' | 'seller' | 'both';

export interface HouseholdItem {
  id: string;
  name: string;
  category: 'electronics' | 'appliances' | 'furniture' | 'bedroom';
  estimatedPriceNaira: string;
  agentScore: string;
  verificationBadge: string;
  conditionGrade: 'A+' | 'A' | 'Like New';
  iconName: string;
  inspectionDetails: string[];
  gradient: string;
}

export interface WaitlistSubmission {
  fullName: string;
  email: string;
  city: 'Lokoja' | 'Anyigba' | 'Osara' | 'Kabba';
  timestamp: number;
}
