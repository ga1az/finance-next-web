import Header from "@/components/header";

type Props = {
  children: React.ReactNode;
};

export default function DashLayout({ children }: Props) {
  return (
    <>
      <Header />
      <main className="px-3 lg:px-14">{children}</main>
    </>
  );
}
