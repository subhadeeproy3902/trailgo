"use server";

import { signIn, signOut } from "@/lib/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const login = async (provider: string) => {
  await signIn(provider, { redirectTo: "/role" });
  revalidatePath("/");
};

export const resendLogin = async (email: string) => {
  // Validate the email first 
  if (!email) {
    throw new Error("Email is required");
  }
  // Validate the email format
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    throw new Error("Invalid email format");
  }
  await signIn("resend", { email });
}

export const logout = async () => {
  await signOut({ redirectTo: "/" });
  revalidatePath("/");
};
