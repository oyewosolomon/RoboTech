import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Boxes, BarChart3, Brain, Zap } from "lucide-react";

const features = [
  {
    icon: Boxes,
    title: "Remote Monitoring",
    description: "Track chronic conditions with real-time health data, improving patient outcomes."
  },
  {
    icon: BarChart3,
    title: "Mental Health Support",
    description: "Access licensed therapists and mental health specialists anytime, anywhere."
  },
  {
    icon: Brain,
    title: "Specialist Access",
    description: "Connect with specialists across 30 countries for expert medical advice and consultations."
  },
  {
    icon: Zap,
    title: "EHR Integration",
    description: "Seamlessly integrates with electronic health records for efficient care management."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-muted/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            Comprehensive Telehealth Solutions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Connecting patients with specialists worldwide, enhancing healthcare access and efficiency.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <feature.icon className="h-12 w-12 text-primary mb-4" />
                  <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
