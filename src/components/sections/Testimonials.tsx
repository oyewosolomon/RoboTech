import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Emily Chen",
    role: "Cardiologist, New York",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    feedback:
      "HealthBridge Solutions has transformed the way I connect with my patients. The seamless integration with EHRs allows me to provide better care remotely."
  },
  {
    name: "Michael Nguyen",
    role: "Patient, Singapore",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    feedback:
      "The platform made it so easy to consult specialists without leaving my home. It’s truly a game-changer for chronic condition management."
  },
  {
    name: "Dr. Sophia Patel",
    role: "Psychiatrist, London",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    feedback:
      "The mental health support tools are phenomenal. My patients feel more comfortable seeking help thanks to the virtual sessions."
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="testimonials" className="py-24 bg-muted/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            What Our Users Are Saying
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See how HealthBridge Solutions is making a difference in the lives of patients and healthcare providers worldwide.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-background p-8 rounded-xl shadow-lg text-center max-w-xl mx-auto"
          >
            <img
              src={testimonials[currentIndex].photo}
              alt={testimonials[currentIndex].name}
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />
            <h3 className="font-semibold text-xl mb-2">
              {testimonials[currentIndex].name}
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              {testimonials[currentIndex].role}
            </p>
            <p className="text-muted-foreground italic">
              "{testimonials[currentIndex].feedback}"
            </p>
          </motion.div>

          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-primary text-white shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-primary text-white shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
