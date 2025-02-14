import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Settings } from "lucide-react";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-background" />

      <div className="container relative pt-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Revolutionizing Industrial Automation with{" "}
              <span className="text-primary">Collaborative Robots</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Innovative Solutions for Assembly, Quality Control, and Warehouse Automation
            </p>
            <div className="flex flex-wrap gap-4">
              <Button onClick={toggleModal} size="lg" className="gap-2">
                Explore Our Products <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Request a Demo
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            {/* Layered Design with Public Image */}
            <div className="relative">
              {/* Background Layer */}
              <div className="absolute inset-0 bg-primary/10 rounded-2xl transform rotate-6" />

              {/* Image Layer */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/images/iotrobot.jpg"
                  alt="Collaborative Robots in Action"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Overlay Text */}
              <div className="absolute -bottom-8 right-0 bg-background/80 backdrop-blur-sm p-4 rounded-lg shadow-sm">
                <div className="flex items-center gap-2">
                  <Settings className="text-primary h-6 w-6" />
                  <span className="text-sm font-medium">
                    Enhancing Productivity with Precision
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Get Started Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50" onClick={toggleModal} />
          <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4 text-center dark:text-white">Request a Demo</h2>
            <form>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-2 mb-4 rounded-md border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              <input
                type="text"
                placeholder="Company Name"
                className="w-full p-2 mb-4 rounded-md border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-2 mb-4 rounded-md border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </form>
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
}