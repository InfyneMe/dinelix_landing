
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CustomBadge } from '@/components/custom/badge';
import { CustomTitle } from '@/components/custom/title';
import { CustomSubtitle } from '@/components/custom/subtitle';

import Link from 'next/link'; 

const FAQ = () => {
  const faqs = [
  {
    question: "Do I need special hardware to use DineLix POS?",
    answer: "No, DineLix works on any device — desktop, laptop, tablet, or mobile. You can also connect printers and cash drawers if needed."
  },
  {
    question: "Can I manage multiple outlets with one account?",
    answer: "Yes, DineLix supports multi-outlet management. You can track sales, inventory, and reports for all your outlets from a single dashboard."
  },
  {
    question: "Does DineLix handle GST and tax billing?",
    answer: "Absolutely! DineLix automatically calculates GST, CGST, SGST, and VAT based on your settings. Bills are fully GST-compliant and ready for filing."
  },
  {
    question: "Is there a setup or training fee?",
    answer: "No setup fees. We provide free onboarding and training so your staff can start using DineLix right away."
  },
  {
    question: "What payment methods are supported?",
    answer: "DineLix supports cash, UPI, credit/debit cards, digital wallets, and split payments. You can also configure custom payment modes."
  },
  {
    question: "Can I track inventory with DineLix?",
    answer: "Yes, inventory is updated in real-time with every sale. You can set low-stock alerts, track wastage, and manage suppliers with ease."
  },
  {
    question: "What if the internet goes down?",
    answer: "DineLix has offline mode support. Your billing continues without interruption, and data automatically syncs once you're back online."
  },
  {
    question: "Do you offer customer support?",
    answer: "Yes, we provide 24/7 support via chat, phone, and email. Our team is always ready to help you resolve issues quickly."
  }
];


  return (
    <section className="py-24 bg-background" id="faq">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }} className="flex items-center justify-center flex-col text-center gap-5 mb-25">
          <CustomBadge>
            FAQ
          </CustomBadge>

          <CustomTitle>
            Frequently Asked Questions
          </CustomTitle>
          
          <CustomSubtitle>
            Got questions? We&apos;ve got answers. Here are the most common questions about our pricing and service.
          </CustomSubtitle>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <AccordionItem 
                  value={`item-${index}`} 
                  className="bg-background rounded-lg border! border-border px-6 hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-start font-semibold text-foreground hover:text-indigo-600 data-[state=open]:text-indigo-600 transition-colors cursor-pointer">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center items-center gap-1.5 text-center mt-12"
        >
          <span className="text-muted-foreground">
            Still have questions?
          </span>

          <Link href="#contact" className="text-indigo-600 hover:text-indigo-700 transition-colors hover:underline">
            Contact our Support Team
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
