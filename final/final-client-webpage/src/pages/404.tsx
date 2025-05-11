import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useScrollFadeIn } from "../hooks/useScrollFadeIn";

const NotFound: React.FC = () => {
  const fadeInProps = useScrollFadeIn({ delay: 0.1 });

  return (
    <section
      role="main"
      aria-labelledby="error-heading"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-white text-black"
    >
      <motion.div {...fadeInProps} className="max-w-xl">
        <h1
          id="error-heading"
          className="text-6xl font-bold tracking-tight mb-4"
        >
          404
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link
          to="/"
          aria-describedby="home-link-desc"
          className="inline-block px-6 py-3 text-white bg-black rounded-full font-medium hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition"
        >
          Go to Homepage
        </Link>
        <p id="home-link-desc" className="sr-only">
          Return to Apple homepage
        </p>
      </motion.div>
    </section>
  );
};

export default NotFound;
