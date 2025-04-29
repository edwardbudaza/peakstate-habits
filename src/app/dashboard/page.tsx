// app/dashboard/page.tsx
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <div>Please sign in to view the dashboard.</div>;
  }

  return <div>Hello, {session.user?.name || "User"}!</div>;
};

export default DashboardPage;
