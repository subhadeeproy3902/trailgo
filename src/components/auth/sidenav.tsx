import {
  Bot,
  CalendarCheckIcon,
  GraduationCapIcon,
  Home,
  ListTodoIcon,
  Settings2Icon,
  Ticket,
  Timer,
  Train,
} from "lucide-react";
import { User } from "next-auth";
import Link from "next/link";

export default function SideNav({ user }: { user: User }) {
  return (
    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
      <Link
        href="/dashboard"
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
      >
        <Home className="h-4 w-4" />
        Home
      </Link>
      <Link
        href="#"
        className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
      >
        <Train className="h-4 w-4" />
        Trains
      </Link>

      <Link
        href="/dashboard/bookings"
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
      >
        <Ticket className="h-4 w-4" />
        Bookings
      </Link>
      <Link
        href="/dashboard/bookings"
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
      >
        <Timer className="h-4 w-4" />
        History
      </Link>
      <Link
        href="/dashboard/chat"
        className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
      >
        <Bot className="h-4 w-4" />
        AI Chat
      </Link>
    </nav>
  );
}