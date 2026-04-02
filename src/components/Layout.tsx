import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* Account for utility bar (36px) + main nav (72px) = 108px */}
      <main className="flex-1 pt-[108px]">{children}</main>
      <Footer />
    </div>
  );
}
