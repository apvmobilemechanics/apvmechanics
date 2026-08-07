import { ChevronsRight } from "lucide-react";
import Link from "next/link";

export function ThemeButton({
  children,
  href = "/contact",
  light = false,
}: {
  children: React.ReactNode;
  href?: string;
  light?: boolean;
}) {
  return (
    <Link className={`pill-button ${light ? "pill-button--light" : ""}`} href={href}>
      <span>{children}</span>
      <i><ChevronsRight size={20} /></i>
    </Link>
  );
}
