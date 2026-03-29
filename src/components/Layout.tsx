import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* Account for utility bar (32px) + main nav (64px) = 96px on desktop, 64px on mobile */}
      <main className="flex-1 pt-16 lg:pt-24">{children}</main>
      <Footer />
    </div>
  );
}
