import Navbar from "@/components/Navbar";

export default function Page() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-grow justify-center items-center">
        <h1 className="font-montserrat text-2xl">Welcome to Next.js!</h1>
      </div>
    </div>
  );
}
