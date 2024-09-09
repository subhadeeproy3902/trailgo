"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function getUser(uid: string) {
  const user = await db.user.findUnique({
    where: {
      id: uid,
    },
  });

  return user;
}

export async function roleSelection(uid: string, role: string) {
  await db.user.update({
    where: {
      id: uid,
    },
    data: {
      role: role,
      isRoleSelected: true,
    },
  });

  revalidatePath("/dashboard");
}