import Navbar from "@/src/components/organism/Navbar";

export default async function PersonalNotesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="">{children}</div>
    </>
  );
}
