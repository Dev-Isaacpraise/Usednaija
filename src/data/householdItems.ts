import { HouseholdItem } from '../types';

export const HOUSEHOLD_ITEMS: HouseholdItem[] = [
  {
    id: 'tv',
    name: 'Smart 4K LED Television',
    category: 'electronics',
    estimatedPriceNaira: '₦125,000 - ₦240,000',
    agentScore: '98/100',
    verificationBadge: 'Agent Verified: Zero Dead Pixels & Port Tested',
    conditionGrade: 'A+',
    iconName: 'Tv',
    inspectionDetails: [
      'Screen matrix & backlight inspection',
      'All HDMI & USB input ports tested',
      'Wi-Fi & audio output frequency check',
      'Original remote control responsiveness'
    ],
    gradient: 'from-amber-500/10 via-orange-500/5 to-transparent'
  },
  {
    id: 'fridge',
    name: 'Double-Door Refrigerator',
    category: 'appliances',
    estimatedPriceNaira: '₦180,000 - ₦350,000',
    agentScore: '99/100',
    verificationBadge: 'Agent Verified: Fast Freeze & Compressor Pressure Tested',
    conditionGrade: 'A+',
    iconName: 'Refrigerator',
    inspectionDetails: [
      'Compressor amp draw & gas level test',
      'Cooling speed & seal gasket air tightness',
      'Internal thermostat calibration',
      'Rust-free body & shelf stability check'
    ],
    gradient: 'from-blue-500/10 via-orange-500/5 to-transparent'
  },
  {
    id: 'washing_machine',
    name: 'Automatic Washing Machine',
    category: 'appliances',
    estimatedPriceNaira: '₦150,000 - ₦290,000',
    agentScore: '97/100',
    verificationBadge: 'Agent Verified: Spin Cycle & Water Leak Tested',
    conditionGrade: 'Like New',
    iconName: 'WashingMachine',
    inspectionDetails: [
      'High-speed drum spin balance check',
      'Inlet/outlet pump & water valve seals',
      'Digital control panel button response',
      'Zero tub vibration under max load'
    ],
    gradient: 'from-indigo-500/10 via-orange-500/5 to-transparent'
  },
  {
    id: 'fan',
    name: 'Rechargeable Standing Fan',
    category: 'electronics',
    estimatedPriceNaira: '₦35,000 - ₦65,000',
    agentScore: '100/100',
    verificationBadge: 'Agent Verified: Battery Runtime & Oscillation Tested',
    conditionGrade: 'A+',
    iconName: 'Fan',
    inspectionDetails: [
      'Rechargeable battery backup 6-hour test',
      'Motor heat dissipation & oscillation smoothness',
      'Remote control & speed levels verified',
      'Blade balance & whisper quiet operation'
    ],
    gradient: 'from-emerald-500/10 via-orange-500/5 to-transparent'
  },
  {
    id: 'blender',
    name: 'High-Power Commercial Blender',
    category: 'appliances',
    estimatedPriceNaira: '₦22,000 - ₦45,000',
    agentScore: '99/100',
    verificationBadge: 'Agent Verified: Blade Sharpness & Motor Torque Tested',
    conditionGrade: 'Like New',
    iconName: 'UtensilsCrossed',
    inspectionDetails: [
      'Multi-angle stainless steel blade inspection',
      'Heavy-duty motor torque under wet/dry load',
      'Jug coupler gear teeth integrity',
      'Overheat automatic safety shut-off'
    ],
    gradient: 'from-rose-500/10 via-orange-500/5 to-transparent'
  },
  {
    id: 'microwave',
    name: 'Digital Microwave Oven',
    category: 'appliances',
    estimatedPriceNaira: '₦40,000 - ₦85,000',
    agentScore: '98/100',
    verificationBadge: 'Agent Verified: Magnetron Heat Cycle & Door Lock Safe',
    conditionGrade: 'A+',
    iconName: 'Microwave',
    inspectionDetails: [
      '30-second thermal heating test',
      'Turntable rotation motor alignment',
      'Door interlock safety switch check',
      'Interior cavity cleanliness & rust check'
    ],
    gradient: 'from-orange-500/10 via-amber-500/5 to-transparent'
  },
  {
    id: 'chair',
    name: 'Ergonomic Executive Chair',
    category: 'furniture',
    estimatedPriceNaira: '₦45,000 - ₦95,000',
    agentScore: '96/100',
    verificationBadge: 'Agent Verified: Hydraulic Piston & Lumbar Support OK',
    conditionGrade: 'A+',
    iconName: 'Armchair',
    inspectionDetails: [
      'Gas lift hydraulic elevation & hold test',
      '360-degree swivel wheel smooth glide',
      'Mesh & leather upholstery wear check',
      'Tilt lock & lumbar support mechanism'
    ],
    gradient: 'from-purple-500/10 via-orange-500/5 to-transparent'
  },
  {
    id: 'table',
    name: 'Modern Dining & Work Table',
    category: 'furniture',
    estimatedPriceNaira: '₦60,000 - ₦140,000',
    agentScore: '98/100',
    verificationBadge: 'Agent Verified: Hardwood Structure & Surface Scratch Free',
    conditionGrade: 'Like New',
    iconName: 'Table',
    inspectionDetails: [
      'Solid wood/steel joint stability & weight test',
      'Surface finish scratch & stain assessment',
      'Leg leveler balance on flat floors',
      'Assembly hardware & screw tight check'
    ],
    gradient: 'from-teal-500/10 via-orange-500/5 to-transparent'
  },
  {
    id: 'mattress',
    name: 'Orthopedic Queen Mattress',
    category: 'bedroom',
    estimatedPriceNaira: '₦90,000 - ₦190,000',
    agentScore: '100/100',
    verificationBadge: 'Agent Verified: Sanitize Steam Cleaned & Firmness Verified',
    conditionGrade: 'A+',
    iconName: 'Bed',
    inspectionDetails: [
      'UV-C sanitized & deep steam vacuumed',
      'Spring/foam resilience & sagging test',
      'Stain-free & odor-free inspection',
      'Edge support firm firmness certification'
    ],
    gradient: 'from-[#DA5E02]/15 via-orange-500/5 to-transparent'
  }
];
