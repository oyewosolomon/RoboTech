import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export default function ProductDemo() {
  return (
    <section id="demo" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">

          {/* Left Grid with Background Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center rounded-2xl p-8 bg-cover bg-center relative "
            style={{
              backgroundImage: "url('/images/98.jpg')", // Replace with your image path
            }}
          >
               <div className="absolute inset-0 bg-primary/20 rounded-2xl transform rotate-6" />
            {/* Overlay to improve text readability */}
            <div className="absolute inset-0 bg-black/50 rounded-2xl"></div>
            <div className="text-center relative z-10">
              <h2 className="text-3xl font-bold mb-4 text-white">
                Experience RoboTech Solutions in Action
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-white">
                Discover how our collaborative robots enhance productivity, precision, and efficiency in industrial automation.
              </p>
            </div>
          </motion.div>

          {/* Right Grid */}
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="overflow-hidden h-full">
                <div className="relative aspect-video bg-muted">
                  {/* Replace src with the actual demo video URL */}
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/5iV_hB08Uns?si=RY0mFZOE2fGoqHk4  "
                    title="RoboTech Solutions Demo Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">
                    Revolutionizing Industrial Automation
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    See how our collaborative robots streamline assembly lines, improve quality control, and optimize warehouse operations.
                  </p>
                  <Button className="gap-2">
                    <Play className="h-4 w-4" /> Watch Full Demo
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}