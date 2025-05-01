import React from "react";
import broll from "../../assets/mac_bRoll.mp4";
import iPad from "../../assets/iPad.jpg";
import iWatch from "../../assets/iWatch.jpg";
import airpods from "../../assets/airpods.jpg";

const OurProducts: React.FC = () => {
  return (
    <>
      <div className="overflow-x-hidden">
        {/* 3. Images of varying sizes + 5. Spread hierarchy around */}
        <div className="py-24 px-6 bg-white">
          <h2 className="text-4xl font-semibold mb-16 text-center">
            Our Products
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-7xl mx-auto">
            <div className="md:col-span-8 md:row-span-2 bg-gray-100 rounded-3xl overflow-hidden">
              <video autoPlay loop muted>
                <source src={broll} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <div className="p-8">
                <h3 className="text-3xl font-semibold mb-4">Mac</h3>
                <p className="mb-4">
                  Incredibly powerful. For creativity and productivity.
                </p>
                <a href="/mac" className="text-blue-600 font-medium">
                  Learn more &gt;
                </a>
              </div>
            </div>

            <div className="md:col-span-4 bg-gray-100 rounded-3xl overflow-hidden">
              <img src={iPad} alt="iPad" className="object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">iPad</h3>
                <p className="mb-3">Versatile. For everything you do.</p>
                <a href="/ipad" className="text-blue-600 font-medium">
                  Learn more &gt;
                </a>
              </div>
            </div>

            <div className="md:col-span-7 md:col-start-6 bg-gray-100 rounded-3xl overflow-hidden">
              <img src={iWatch} alt="Apple Watch" className="object-cover" />
              <div className="p-7">
                <h3 className="text-2xl font-semibold mb-3">Apple Watch</h3>
                <p className="mb-3">The ultimate device for a healthy life.</p>
                <a href="/watch" className="text-blue-600 font-medium">
                  Learn more &gt;
                </a>
              </div>
            </div>

            <div className="md:col-span-5 md:row-span-2 bg-gray-100 rounded-3xl overflow-hidden">
              <img src={airpods} alt="AirPods" className="object-cover" />
              <div className="p-7">
                <h3 className="text-2xl font-semibold mb-3">AirPods</h3>
                <p className="mb-3">Immersive sound experience.</p>
                <a href="/airpods" className="text-blue-600 font-medium">
                  Learn more &gt;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurProducts;
