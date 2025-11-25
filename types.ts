export enum PlanType {
  DIET = 'DIET',
  WORKOUT = 'WORKOUT'
}

export enum DietPreference {
  VEG = 'Vegetarian',
  NON_VEG = 'Non-Vegetarian',
  BOTH = 'Veg + Non-Veg (Both)'
}

export enum DietGoal {
  WEIGHT_LOSS = 'Weight Loss',
  WEIGHT_GAIN = 'Weight Gain',
  MUSCLE_GAIN = 'Muscle Gain',
  MAINTENANCE = 'Maintenance',
  FAT_LOSS = 'Fat Loss'
}

export interface DietFormData {
  name: string;
  age: string;
  weight: string;
  height: string;
  preference: DietPreference;
  goal: DietGoal;
  wakeupTime?: string;
  breakfast?: string;
  lunch?: string;
  eveningSnack?: string;
  postWorkout?: string;
  dinner?: string;
}

export interface WorkoutFormData {
  name: string;
  daysPerWeek: string;
  durationPerDay: string;
  focus: 'Cardio' | 'Strength' | 'Mix';
}

export interface PlanResponse {
  markdown: string;
}
