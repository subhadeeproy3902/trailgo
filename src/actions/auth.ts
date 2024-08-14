"use server";

import { signIn, signOut } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export const login = async (provider: string, role: string) => {
  await signIn(provider, { redirectTo: "/dashboard" }, {userType: role});
  revalidatePath("/");
};

export const logout = async () => {
  await signOut({ redirectTo: "/" });
  revalidatePath("/");
};