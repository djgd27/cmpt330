import React, { ReactNode } from "react";

type ProductCardProps = {
  title: string;
  description: string;
  href: string;
  media: ReactNode;
  srId: string;
  srText: string;
};

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  href,
  media,
  srId,
  srText,
}) => (
  <div className="bg-white rounded-3xl shadow-sm overflow-hidden flex flex-col transition duration-300 hover:shadow-lg hover:-translate-y-3">
    <div className="aspect-[4/3] w-full">{media}</div>
    <div className="p-6 md:p-8 flex flex-col justify-between h-full">
      <h3 className="text-2xl font-semibold text-gray-900 border-b border-gray-200 pb-2 mb-4">
        {title}
      </h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <p id={srId} className="sr-only">
        {srText}
      </p>
      <a
        href={href}
        aria-describedby={srId}
        className="inline-block text-white bg-black px-4 py-2 rounded-full font-medium hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition"
      >
        Learn more &gt;
      </a>
    </div>
  </div>
);

export default ProductCard;
