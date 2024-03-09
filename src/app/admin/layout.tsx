export default function AdminPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="mt-16">{children}</main>
    </>
  );
}
