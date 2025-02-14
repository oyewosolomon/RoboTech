import React from "react";
import { motion } from "framer-motion";
import { Clock, Settings, Users, Globe } from "lucide-react";

const AboutUs = () => {
  // Statistics data
  const stats = [
    { id: 1, value: "10+", label: "Years of Experience", icon: <Clock className="h-8 w-8" /> },
    { id: 2, value: "500+", label: "Clients Worldwide", icon: <Globe className="h-8 w-8" /> },
    { id: 3, value: "24/7", label: "Expert Support", icon: <Settings className="h-8 w-8" /> },
    { id: 4, value: "100+", label: "Skilled Team Members", icon: <Users className="h-8 w-8" /> },
  ];

  // Timeline data
  const timeline = [
    { year: "2013", event: "Founded RoboTech Industries" },
    { year: "2015", event: "Launched First Collaborative Robot" },
    { year: "2018", event: "Expanded to International Markets" },
    { year: "2021", event: "Introduced AI-Powered Quality Control Systems" },
    { year: "2023", event: "Celebrated 10 Years of Innovation" },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 py-16" id="about">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100"
        >
          About Us
        </motion.h2>

        {/* Introduction */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-gray-700 dark:text-gray-300 text-center max-w-2xl mx-auto mb-12"
        >
          RoboTech Industries is a global leader in collaborative robotics, dedicated to transforming industrial automation. With over a decade of experience, we deliver innovative solutions that enhance productivity, precision, and efficiency for the automotive and electronics industries.
        </motion.p>

        {/* Statistics Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat) => (
            <div key={stat.id} className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex justify-center text-primary mb-4">{stat.icon}</div>
              <h3 className="text-3xl font-bold mb-2 text-gray-800 dark:text-gray-100">{stat.value}</h3>
              <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">Our Journey</h3>
          <div className="relative">
            <div className="absolute left-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2" />
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className={`flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} items-center w-full`}
                >
                  <div className="w-1/2 px-4">
                    <motion.div
                      whileHover={{ scale: 1.05, boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)" }}
                      transition={{ duration: 0.3 }}
                      className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm cursor-pointer"
                    >
                      <h4 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">{item.year}</h4>
                      <p className="text-gray-700 dark:text-gray-300">{item.event}</p>
                    </motion.div>
                  </div>
                  <div className="w-1/2 px-4"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default AboutUs;
