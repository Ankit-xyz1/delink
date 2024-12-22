import Image from "next/image";
import './globals.css'
import Buttonx from "@/components/Buttonx";
import Cards from "@/components/Cards";

export default function Home() {
  return (
    <>
     
      <div className="min-h-screen flex items-center justify-center w-full ubu overflow-hidden">
        <div className="w-[60%] min-h-[90vh] p-5 ">
          <div>
            <h1 className="text-2xl md:text-5xl text-yellow-50 text-center"><span className="text-green-500 jet">DeLink</span> - An Url Shortner</h1>
            <p className="text-xs text-zinc-500 jet text-center mt-5 sm:text-3xl">DeLink is a simple and secure URL shortener that lets you shorten your URLs <span className="text-white"> without the need to sign up or log in.</span> Our primary goal is to provide a service that allows users to shorten links anonymously,<span className="text-green-500">ensuring that your data and activity are not tracked.</span></p>
            <div className="mt-10">
              <Buttonx />
            </div>
            <div className="mt-10 flex overflow-hidden flex-wrap gap-5 items-center justify-center">
              <Cards title="Shorten URLs quickly" feature="Paste any URL, generate a shortened version, and share it within seconds." />
              <Cards title="No login required" feature="Unlike other platforms, there’s no need for you to create an account or sign in—just shorten and go." />
              <Cards title="Privacy-first" feature="Your links are shortened without any tracking or personal data collection, giving you the freedom to share URLs without worrying about privacy." />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
