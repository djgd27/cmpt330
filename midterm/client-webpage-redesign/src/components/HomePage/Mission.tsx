import React from "react";

const MissionStatement: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      {/* 2. Text with lots of breathing room */}
      <div className="py-32 px-8 md:px-16 bg-gray-50">
        <h2 className="text-4xl font-semibold text-center mb-20">
          Innovation. Redefined.
        </h2>
        <p className="text-xl max-w-4xl mx-auto mb-20 leading-relaxed">
          At Apple, we believe in creating products that enrich people's lives.
          Our journey is defined by a relentless pursuit of simplicity, beauty,
          and functionality. Every device we create is designed to make your
          everyday experiences extraordinary.
        </p>
        <p className="text-xl max-w-4xl mx-auto leading-relaxed">
          We combine cutting-edge technology with intuitive design to create
          products that are powerful yet simple to use. It's not just about what
          our technology can do, but what you can do with it.
        </p>
      </div>
    </div>
  );
};

export default MissionStatement;
