import { getUser } from "@/actions/users.actions";
import RoleSelect from "@/components/auth/role-selection";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Role() {
  const user = await auth();
  if (!user) {
    redirect("/login");
  } else if (user) {
    const dbUser = await getUser(user!.user!.id!);
    if (dbUser?.isRoleSelected) {
      redirect("/dashboard");
    } else {
      return <RoleSelect userId={user!.user!.id!} />;
    }
  }
}
