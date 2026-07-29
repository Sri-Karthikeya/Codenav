import { ProtectedRoute } from "client/components/auth/ProtectedRoute";

export default function RepositoriesLayout({ children }: { children: React.ReactNode }) {
  return <ProtectedRoute>{children}</ProtectedRoute>;
}
