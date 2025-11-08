import React from 'react';

export const RocketIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
    <path d="M5 14L7 12L5 10L3 12L5 14Z" />
    <path d="M19 14L21 12L19 10L17 12L19 14Z" />
    <path d="M12 22C12 22 8 18 8 14H16C16 18 12 22 12 22Z" />
  </svg>
);

export const GrowthIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z" />
  </svg>
);

export const CrownIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5ZM19 19C19 19.6 18.6 20 18 20H6C5.4 20 5 19.6 5 19V18H19V19Z" />
  </svg>
);

export const BuildingIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 3L2 12H5V20H19V12H22L12 3ZM12 18H10V16H12V18ZM16 18H14V16H16V18ZM12 14H10V12H12V14ZM16 14H14V12H16V14Z" />
    <path d="M7 14H9V16H7V14Z" />
    <path d="M7 10H9V12H7V10Z" />
  </svg>
);

export const WebIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 4H4C2.89 4 2 4.89 2 6V18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4ZM20 18H4V8H20V18ZM6 10V12H18V10H6Z" />
  </svg>
);

export const AnalyticsIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z" />
  </svg>
);

export const FireIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.66 11.2C17.43 10.9 17.15 10.64 16.89 10.38C16.22 9.78 15.46 9.35 14.82 8.72C13.33 7.26 13 4.85 13.95 3C13.76 3.13 13.58 3.26 13.4 3.4C11.97 4.95 12.2 7.78 13.75 9.35C14.13 9.75 14.76 10.11 15.08 10.78C15.27 11.17 15.25 11.62 15.06 12C14.79 12.2 14.45 12.25 14.11 12.23C13.15 12.18 12.46 11.18 12.46 10.2C12.46 9.84 12.25 9.52 11.92 9.4C11.59 9.28 11.22 9.4 11.04 9.68C10.87 9.95 10.8 10.27 10.8 10.6C10.8 12.5 12.18 14.2 14.04 14.2C16.17 14.2 17.66 12.5 17.66 11.2Z" />
  </svg>
);

export const DesignIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const SocialIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17 2H7C4.24 2 2 4.24 2 7V17C2 19.76 4.24 22 7 22H17C19.76 22 22 19.76 22 17V7C22 4.24 19.76 2 17 2ZM20 17C20 18.65 18.65 20 17 20H7C5.35 20 4 18.65 4 17V7C4 5.35 5.35 4 7 4H17C18.65 4 20 5.35 20 7V17Z" />
    <circle cx="17.5" cy="6.5" r="1.5" />
    <circle cx="12" cy="12" r="4" />
  </svg>
);

export const SearchIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3S3 5.91 3 9.5S5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14Z" />
  </svg>
);

export const ContentIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20Z" />
    <path d="M8 12H16V14H8V12Z" />
    <path d="M8 16H13V18H8V16Z" />
  </svg>
);

export const AdsIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L13.5 2.5L16.17 5.17L10.5 10.84L6.83 7.17L2 12L3.41 13.41L6.83 10L10.5 13.67L15 9.17L17.5 11.67L19 10.17L21 9Z" />
  </svg>
);

export const EcommerceIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M7 18C5.9 18 5 18.9 5 20S5.9 22 7 22S9 21.1 9 20S8.1 18 7 18ZM1 2V4H3L6.6 11.59L5.24 14.04C5.09 14.32 5 14.65 5 15C5 16.1 5.9 17 7 17H19V15H7.42C7.28 15 7.17 14.89 7.17 14.75L7.2 14.63L8.1 13H15.55C16.3 13 16.96 12.58 17.3 11.97L20.88 5H5.21L4.27 3H1ZM17 18C15.9 18 15 18.9 15 20S15.9 22 17 22S19 21.1 19 20S18.1 18 17 18Z" />
  </svg>
);

export const ClockIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22S22 17.52 22 12S17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12S7.59 4 12 4S20 7.59 20 12S16.41 20 12 20ZM12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z" />
  </svg>
);

export const PhoneIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17 2H7C5.9 2 5 2.9 5 4V20C5 21.1 5.9 22 7 22H17C18.1 22 19 21.1 19 20V4C19 2.9 18.1 2 17 2ZM17 18H7V6H17V18Z" />
  </svg>
);

export const UserIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 12C14.21 12 16 10.21 16 8S14.21 4 12 4S8 5.79 8 8S9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" />
  </svg>
);

export const TargetIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22S22 17.52 22 12S17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12S7.58 4 12 4S20 7.58 20 12S16.42 20 12 20ZM12 6C8.69 6 6 8.69 6 12S8.69 18 12 18S18 15.31 18 12S15.31 6 12 6ZM12 16C9.79 16 8 14.21 8 12S9.79 8 12 8S16 9.79 16 12S14.21 16 12 16ZM12 10C10.9 10 10 10.9 10 12S10.9 14 12 14S14 13.1 14 12S13.1 10 12 10Z" />
  </svg>
);

export const InstagramIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 19.4 19.4 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2ZM7.6 4C5.61 4 4 5.61 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C18.39 20 20 18.39 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.94 5.5 18.5 6.06 18.5 6.75C18.5 7.44 17.94 8 17.25 8C16.56 8 16 7.44 16 6.75C16 6.06 16.56 5.5 17.25 5.5ZM12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z" />
  </svg>
);

export const LinkedInIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.5 2H3.5C2.67 2 2 2.67 2 3.5V20.5C2 21.33 2.67 22 3.5 22H20.5C21.33 22 22 21.33 22 20.5V3.5C22 2.67 21.33 2 20.5 2ZM8 19H5V10H8V19ZM6.5 8.25C5.5 8.25 4.75 7.5 4.75 6.5C4.75 5.5 5.5 4.75 6.5 4.75C7.5 4.75 8.25 5.5 8.25 6.5C8.25 7.5 7.5 8.25 6.5 8.25ZM19 19H16V14.25C16 13.19 15.81 11.81 14.38 11.81C12.88 11.81 12.63 13.06 12.63 14.19V19H9.63V10H12.5V11.13H12.56C13 10.31 14.06 9.44 15.69 9.44C18.69 9.44 19.25 11.38 19.25 13.88V19H19Z" />
  </svg>
);

export const StoreIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 3L2 12H5V20H19V12H22L12 3ZM12 18H10V16H12V18ZM16 18H14V16H16V18ZM12 14H10V12H12V14ZM16 14H14V12H16V14Z" />
  </svg>
);

export const PizzaIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
    <circle cx="10" cy="10" r="1" />
    <circle cx="14" cy="12" r="1" />
    <circle cx="11" cy="14" r="1" />
  </svg>
);

export const LawIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
    <path d="M7 18H17V20H7V18Z" />
    <path d="M9 16H15V18H9V16Z" />
  </svg>
);

export const ClinicIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L2 7L12 12L22 7L12 2ZM2 17L12 22L22 17M2 12L12 17L22 12" />
    <path d="M10 8H14V12H10V8Z" />
    <path d="M12 6V10" />
  </svg>
);

export const FacebookIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24V15.563H7.078V12.073H10.125V9.405C10.125 6.348 11.917 4.688 14.658 4.688C15.97 4.688 17.344 4.922 17.344 4.922V7.875H15.83C14.34 7.875 13.875 8.8 13.875 9.75V12.073H17.203L16.671 15.563H13.875V24C19.612 23.094 24 18.1 24 12.073Z" />
  </svg>
);
