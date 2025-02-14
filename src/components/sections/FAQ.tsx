import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is HealthBridge Solutions?",
    answer: "HealthBridge Solutions is a comprehensive healthcare management platform designed to streamline patient care, improve operational efficiency, and enhance patient outcomes through advanced technology."
  },
  {
    question: "How does HealthBridge Solutions improve patient care?",
    answer: "Our platform integrates electronic health records (EHR), telemedicine, and patient engagement tools to provide seamless communication and real-time access to medical information, empowering healthcare providers to deliver personalized care."
  },
  {
    question: "Is HealthBridge Solutions compliant with healthcare regulations?",
    answer: "Yes, HealthBridge Solutions is fully compliant with HIPAA and other healthcare regulations, ensuring the highest standards of security and patient data protection."
  },
  {
    question: "Can HealthBridge Solutions integrate with existing hospital systems?",
    answer: "Absolutely! Our platform is designed to integrate seamlessly with most major hospital information systems (HIS) and electronic medical records (EMR) systems, ensuring a smooth transition and enhanced workflow efficiency."
  },
  {
    question: "What kind of support does HealthBridge Solutions provide?",
    answer: "We offer 24/7 technical support, comprehensive onboarding and training, and regular software updates to ensure your healthcare facility runs smoothly and efficiently."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-muted/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get answers to common questions about HealthBridge Solutions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
