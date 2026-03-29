import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* Account for main nav (64px) */}
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
    </div>
  );
}
