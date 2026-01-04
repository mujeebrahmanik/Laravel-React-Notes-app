import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function AppLayout() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-16 px-6 b">
        
      <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            className="relative left-1/2 -z-10 aspect-[1155/678] w-[36rem]
                      -translate-x-1/2 rotate-30
                      bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20
                      sm:left-[calc(50%-40rem)] sm:w-[72rem]
                      grain"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        <Outlet />
      </div>
    </>
  );
}
