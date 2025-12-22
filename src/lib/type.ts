import { GestureResponderEvent } from "react-native";

export interface DaySchedule {
  day: string;
  enabled: boolean;
  start: Date | null;
  end: Date | null;
}

export interface PickerState {
  show: boolean;
  index: number | null;
  type: "start" | "end";
}

export type ProgressProps = {
  color?: any;
  progress: number;
  height?: number;
};

export type JobProps = {
  title: string;
  progress: number;

  // Optional UI configs
  color?: string;
  height?: number;
  progressBar?: boolean;
  leftArrow?: boolean;

  // Optional SVG XML strings
  iconsRight?: string | null;
  iconsLeft?: string | null;
  bgColor?: string | number | null;
  countNumber?: string | number;
};

export interface ListViewProps {
  name: string;
  address: string;
  status: StatusType;
  shopStatus: string;
  time: string;
  customerName: string;
  customerColor: string;
  vehicleType: string;
  services: string[];
  staffName: string;
  staffImage: any;
  price: string;
  icons: string | null;
  shopIcons: string | null;
  date?: boolean;
  singleImage?: boolean;
  statusUndefined?: boolean;
}
export type StatusType =
  | "Completed"
  | "Upcoming"
  | "In Progress"
  | "In Route"
  | "Cancelled";

// calender view data
// src/lib/type.ts  (or wherever your types live)

export interface Vehicle {
  title: string; // "2025 Tesla Model 3"
  color: string; // "blue"
  vehicle: string; // "truck"
}

export interface BackendJob {
  id: string;
  day: string; // ISO date string, e.g. "2025-08-25"
  start: string; // ISO datetime string, e.g. "2025-08-25T07:00:00"
  end: string; // ISO datetime string, e.g. "2025-08-25T09:00:00"

  user: string;
  address?: string;
  service: string;
  status: "completed" | "upComing" | "inProgress" | "inRoute";

  price?: string; // e.g. "$150.00"
  avatar?: string | null; // URL

  /* optional visual flags */
  showPin?: boolean;
  showCheck?: boolean;

  /* optional badge / duration */
  badge?: string; // "In-Shop" | "Mobile" | etc.
  duration?: string; // "3h" | "1h 30min" | etc.
  /* optional vehicle list */
  vehicles?: Vehicle[];
  moreCount?: number; // "and 3 more"
  title: string;
  progress: number;

  // Optional UI configs
  color?: string;
  height?: number;
  progressBar?: boolean;
  leftArrow?: boolean;

  // Optional SVG XML strings
  iconsRight?: string | null;
  iconsLeft?: string | null;
  bgColor?: string | number | null;
  countNumber?: string | number;
}

export interface JobFilterModalProps {
  visible: boolean;
  setVisible: (value: boolean) => void;
  selectedPlan: string;
  setSelectedPlan: (value: string) => void;
}

export interface CalendarModalProps {
  visible: boolean;
  onClose: (event?: GestureResponderEvent) => void;
}

export interface StatusTagProps {
  label: string;
  bgColor?: string;
  textColor?: string;
  dotColor?: string;
}

export interface JobCategoryProps {
  customerName: string;
  customerColor: string;
  vehicleType: string;
  icons?: string; // SVG xml string
  services?: string[];
}

export interface StatusInfoProps {
  icon: string; // SVG xml
  title: string;
  subtitle: string;
}

export interface InfoCardProps {
  icon: string; // SvgXml
  title: string;
  value: string | number;
}

export interface ServiceItemProps {
  title: string;
  duration: string;
  price: string;
}

export interface GlobalAddServicesProps {
  title: string;
  icon: string; // SvgXml XML string
  buttonText: string;
  onPress?: () => void;
  buttonBg?: string; // optional background color for button
  buttonTextColor?: string; // optional text color for button
  bluebg: boolean;
}
