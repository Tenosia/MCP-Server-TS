import "./assets/style.css";

import Footer from "./components/footer";
import Header from "./components/header";
import type { Page } from "@/types/landing";

interface LandingLayoutProps {
  children: React.ReactNode;
  page: Page;
}

export default function LandingLayout({
  children,
  page,
}: Readonly<LandingLayoutProps>) {
  return (
    <main>
      {page.header && <Header header={page.header} />}
      {children}
      {page.footer && <Footer footer={page.footer} />}
    </main>
  );
}
