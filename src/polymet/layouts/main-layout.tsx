import { ReactNode } from "react";
import Navigation from "@/polymet/components/navigation";
import Footer from "@/polymet/components/footer";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-[#0a1929] text-white">
      <Navigation />

      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
