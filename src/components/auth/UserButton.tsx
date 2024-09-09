/* eslint-disable @next/next/no-img-element */
import { getUser } from "@/actions/users.actions";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { auth } from "@/lib/auth";
import { splitName } from "@/lib/utils";
import { LogOutIcon } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

export default async function UserButton() {
  const session = await auth();

  if (session?.user && typeof session.user.id === "string") {
    const dbUser = await getUser(session.user.id);

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="secondary"
            size="icon"
            className="rounded-full bg-transparent"
          >
            <img
              src={session?.user?.image || "https://via.placeholder.com/150"}
              className="h-10 w-10 rounded-full border-2"
              alt={session?.user?.name || "User"}
            />
            <span className="sr-only">{session?.user?.name || "User"}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="w-[300px] rounded-xl bg-white shadow-lg"
        >
          <Card className="border-0 shadow-none">
            <CardHeader className="flex items-center justify-between pb-2">
              <span className="text-sm text-gray-600">
                {session?.user?.email || "User"}
              </span>
            </CardHeader>
            <CardContent className="flex flex-col items-center pb-4 pt-2">
              <Image
                src={session?.user?.image || "https://via.placeholder.com/150"}
                className="h-20 w-20 rounded-full border-2"
                alt={session?.user?.name || "User"}
                width={80}
                height={80}
              />
              <h2 className="mt-4 text-xl font-semibold">
                Hi, {splitName((session?.user?.name as string) || "User")}!
              </h2>
              <Button variant="outline" className="mt-4 w-full">
                Manage your Account
              </Button>
            </CardContent>
            <CardFooter className="flex justify-between py-1">
              <p className="text-sm font-semibold">
                <Badge
                  variant={
                    dbUser?.role === "ADMIN"
                      ? "admin"
                      : dbUser?.role === "TICKET_MANAGER"
                        ? "default"
                        : "secondary"
                  }
                  className="ml-1"
                >
                  {dbUser?.role}
                </Badge>
              </p>
              <Button variant="ghost">
                <LogOutIcon className="mr-2 h-4 w-4" />
                Sign out
              </Button>
            </CardFooter>
            <div className="py-2 text-center text-xs text-gray-500">
              <a href="/privacy" className="hover:underline">
                Privacy policy
              </a>
              {" • "}
              <a href="/terms" className="hover:underline">
                Terms of service
              </a>
            </div>
          </Card>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  } else {
    return null;
  }
}