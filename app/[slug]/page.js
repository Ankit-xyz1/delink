"use client"
import { useEffect } from "react";
import { Loader } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import { redirect } from "next/navigation";

export default function Page({ params }) {
  useEffect(() => {
    redirectit();
  }, []);
  const redirectit = async () => {
    const slug = await params.slug;
    console.log(slug);
    const res = await fetch("api/getLink", {
      method:'POST',
      body: JSON.stringify({
        slug,
      }),
    });
    const data = await res.json();
    console.log(data)
    if (data.success) {
      redirect(data.data)
    } else {
      toast.error(data.message)
      redirect(`${process.env.NEXT_PUBLIC_HOST}`);
    }
  };

  return <div className="bg-zinc-950 h-screen w-full flex items-center justify-center">
    <ToastContainer/>
    <Loader className="animate-spin"/>
  </div>;
}
