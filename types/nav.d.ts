import type { ReactNode } from "react";

export interface NavItem {
  title: string;
  name?: string;
  url?: string;
  target?: string;
  active?: boolean;
  icon?: ReactNode;
  children?: NavItem[];
}
