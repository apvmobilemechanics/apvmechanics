import Link from "next/link";
import { ChevronsRight, Clock3, Mail, Menu } from "lucide-react";
import { EMAIL, OPENING_HOURS } from "@/constants";

export interface TopbarProps {
  onOpenDrawer: () => void;
}

export function Topbar({ onOpenDrawer }: TopbarProps) {
  return (
    <div className="topbar">
      <div className="topbar__inner">
        <div className="topbar__item">
          <Mail />
          <span>
            <b>Email Address:</b>
            <small>{EMAIL}</small>
          </span>
        </div>
        <div className="topbar__item">
          <Clock3 />
          <span>
            <b>Opening Hours :</b>
            <small>{OPENING_HOURS}</small>
          </span>
        </div>
        <div className="topbar__actions">
          <Link className="pill-button" href="/contact">
            <span>Book Now</span>
            <i>
              <ChevronsRight />
            </i>
          </Link>
          <button
            type="button"
            aria-label="Open information panel"
            className="topbar__menu-btn"
            onClick={onOpenDrawer}
          >
            <Menu />
          </button>
        </div>
      </div>
    </div>
  );
}
