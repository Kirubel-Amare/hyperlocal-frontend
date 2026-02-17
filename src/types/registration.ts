// types/registration.ts
export interface RegistrationData {
  // Step 1
  accountType: 'hire' | 'work';
  fullName: string;
  email: string;
  phone: string;
  password: string;

  // Step 2 – Personal Details & Verification (example fields)
  dateOfBirth?: string;
  address?: string;
  city?: string;
  postalCode?: string;
  idDocument?: File; // or a URL after upload

  // Step 3 – (example: preferences, profile setup, etc.)
  profilePicture?: File;
  bio?: string;
  skills?: string[]; // for 'work' account type
}