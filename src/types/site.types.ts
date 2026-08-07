export interface NavItem {
  readonly label: string;
  readonly href: string;
  readonly items?: readonly [string, string][];
}

export interface Testimonial {
  readonly name: string;
  readonly place: string;
  readonly avatarIndex: number;
  readonly text?: string;
}

export interface ProcessItem {
  readonly num: string;
  readonly title: string;
  readonly desc: string;
  readonly icon?: React.ComponentType<{ size?: number; className?: string }>;
}

export interface LocationInfo {
  readonly label: string;
  readonly value: string;
  readonly href: string | null;
}
