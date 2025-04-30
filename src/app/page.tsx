import Image from "next/image";
import NavBar from "./components/navbar";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="min-h-screen p-6 sm:p-12 font-[family-name:var(--font-geist-sans)]  bg-blue-50">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mt-20 max-w-7xl mx-auto">
          <div className="w-full lg:w-4/9">
            <h1 className="text-1xl font-bold text-gray-700">Brand Name</h1>
            <h2 className="text-3xl font-semibold text-gray-800 mt-5">
              Campaign Title
            </h2>
            <p className="text-gray-600 leading-relaxed mt-3 tracking-wider text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod, nunc at fermentum convallis, urna lacus fringilla nulla,
              sed ultricies erat metus non eros. Proin vitae nunc eget justo
              tincidunt imperdiet. Vestibulum ante ipsum primis in faucibus orci
              luctus et ultrices posuere cubilia curae; Cras sit amet sapien ac
              arcu tincidunt fermentum vel et magna. Cras sit amet sapien ac
              arcu tincidunt fermentum vel et magna.
            </p>
            <p className="text-gray-600 leading-relaxed mt-1 text-justify tracking-wider">
              Nullam non velit id odio tincidunt accumsan. Quisque a dolor ac
              purus tristique ultrices. Aenean nec felis at magna laoreet
              tincidunt. Suspendisse potenti. Sed nec est ac metus laoreet
              euismod non et purus. Integer facilisis enim at neque pretium
              dignissim. Duis imperdiet nibh nec justo convallis, ut dignissim
              nulla feugiat. Duis imperdiet nibh nec justo convallis, ut
              dignissim nulla feugiat.
            </p>
            <div className="flex flex-row justify-between mt-4 items-center text-sm">
              <p className="text-gray-900 font-bold">
                Request Start Date: MM/DD/YYY
              </p>
              <a
                href="#"
                className="px-4 py-1 bg-white text-gray-900 rounded font-bold hover:bg-blue-300 border-1 "
              >
                View Campaign Brief
              </a>
            </div>
          </div>

          <div className="w-full lg:w-2/3 flex justify-end">
            <img
              src="/images/imf.png"
              alt="Campaign Visual"
              width={700}
              height={700}
              className="max-w-full object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
      <div className=" p-6 sm:p-12 font-[family-name:var(--font-geist-sans)]  bg-white">
        <div className="flex flex-col lg:flex-col gap-12 max-w-7xl mx-auto">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 text-left">
              Deliverable Requested
            </h2>
          </div>
          <div className="items-center flex flex-col lg:flex-col">
            <div className="flex flex-col gap-6 p-4 rounded-lg w-full max-w-xl">
              {/* Shared styles for platform entries */}
              {[
                {
                  name: "Instagram",
                  logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg",
                  description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis nisl feugiat.",
                  className: "w-9 h-9 object-contain ",
                  className1: "text-[#E1306C] w-30 font-bold ",
                },
                {
                  name: "TikTok",
                  logo: "/images/tk.svg",
                  description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis nisl feugiat.",
                  className: "w-12 h-12 object-contain",
                  className1: "text-gray-800 w-30 font-bold ",
                },
                {
                  name: "YouTube",
                  logo: "/images/yt.svg",
                  description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis nisl feugiat.",
                  className: "w-10 h-10 object-contain",
                  className1: "text-[#FF0000] w-30 font-bold ",
                },
              ].map((platform, index) => (
                <div key={index} className="flex items-center gap-3 ">
                  <img
                    src={platform.logo}
                    alt={`${platform.name} Logo`}
                    className={platform.className}
                  />
                  <div className="flex items-center ml-2">
                    <p className={platform.className1}>{platform.name}</p>
                    <p className="text-gray-600 w-4/5 text-sm leading-relaxed">
                      {platform.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className=" p-6 sm:p-12 font-[family-name:var(--font-geist-sans)]  bg-white">
        <div className="flex flex-col lg:flex-col gap-12 max-w-7xl mx-auto">
          <div>
            <h2 className="text-3xl font-semibold text-gray-800 text-left">
              Additional Information
            </h2>
            <p className="text-gray-600 leading-relaxed text-justify tracking-wider mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod, nunc at fermentum convallis, urna lacus fringilla nulla,
              sed ultricies erat metus non eros. Proin vitae nunc eget justo
              tincidunt imperdiet. Vestibulum ante ipsum primis in faucibus orci
              luctus et ultrices posuere cubilia curae; Cras sit amet sapien ac
              arcu tincidunt fermentum vel et magna. Cras sit amet sapien ac
              arcu tincidunt fermentum vel et magna.
            </p>
          </div>
        </div>
      </div>

      <div className=" p-6 sm:p-12 font-[family-name:var(--font-geist-sans)]  bg-white items-center">
        <div className="flex flex-col lg:flex-col gap-3 max-w-7xl mx-auto items-center">
          <p className="text-3xl font-semibold text-[#293752]">
            Interested in this Compaign?
          </p>
          <p className=" font-semibold text-gray-900">
            Apply here to participate in this compaign
          </p>
          <a
            href="#"
            className="px-4 py-1 text-white rounded-3xl border border-transparent hover:opacity-90 transition"
            style={{
              backgroundImage: "linear-gradient(to right, #00ffff, #7fffd4)", // aqua to aquamarine
            }}
          >
            Apply
          </a>
        </div>
      </div>
    </>
  );
}
