import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* Account for main nav (80px) */}
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
    </div>
  );
}
