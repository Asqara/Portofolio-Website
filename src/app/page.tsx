import Navbar from "@/components/Navbar";

export default function Page() {
  return (
    <div className="dark:bg-gray-800 bg-white flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-grow justify-center items-center">
        <h1 className="dark:text-white font-montserrat text-2xl">Welcome to Next.js!</h1>
      </div>
    </div>
  );
}
