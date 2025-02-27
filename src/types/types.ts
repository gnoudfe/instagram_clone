export interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline";
  rounded?: "sm" | "md" | "lg" | "xl";
  fullWidth?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}
export interface InputProps {
  type: string;
  name: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  label?: string;
}
