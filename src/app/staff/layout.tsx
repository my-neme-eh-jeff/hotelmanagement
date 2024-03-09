"use client";
import Navbar from "./_components/NavbarComponent";
import { BottomBar } from "./_components/BottomBar";

export default function StaffPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="pb-[60px] min-h-[calc(100vh-133px)]">{children}</main>
      <BottomBar />
    </>
  );
}
