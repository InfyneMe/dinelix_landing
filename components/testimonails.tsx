
import { motion } from 'framer-motion';
import Marquee from "@/components/ui/marquee";
import { CustomBadge } from '@/components/custom/badge';
import { CustomTitle } from '@/components/custom/title';
import { CustomSubtitle } from '@/components/custom/subtitle';
import Image from 'next/image';

const Testimonials = () => {
 const testimonials = [
  {
    name: 'Ravi Sharma',
    role: 'Owner, SpiceHub Restaurant',
    content: 'DineLix POS made our billing super fast. Table turnover improved by 40% within a month!',
    avatar: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=100&h=100&fit=crop&crop=face'
  },
  {
    name: 'Ananya Patel',
    role: 'Manager, Café Bloom',
    content: 'Inventory tracking is a lifesaver. We cut wastage by 25% and our staff loves the simple interface.',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop&crop=face'
  },
  {
    name: 'Mohammed Ali',
    role: 'Founder, Tandoori Tales',
    content: 'KOT printing and multi-outlet support are game changers. Orders flow seamlessly from POS to kitchen.',
    avatar: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=100&h=100&fit=crop&crop=face'
  },
  {
    name: 'Priya Verma',
    role: 'Owner, Urban Diner',
    content: 'The GST billing and reports are accurate. It saves us hours every week on compliance and tax filing.',
    avatar: 'https://images.unsplash.com/photo-1607746881910-968f06e77b5d?w=100&h=100&fit=crop&crop=face'
  },
  {
    name: 'Sandeep Kumar',
    role: 'CEO, Brew & Bite',
    content: 'We reduced staff errors by 60%. The role-based access ensures only managers can make critical changes.',
    avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop&crop=face'
  },
  {
    name: 'Neha Singh',
    role: 'Owner, Sweet Cravings',
    content: 'Customer loyalty and discounts boosted our repeat orders. DineLix pays for itself within weeks!',
    avatar: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&h=100&fit=crop&crop=face'
  },
  {
    name: 'Arjun Mehta',
    role: 'Manager, Royal Biryani House',
    content: 'The analytics dashboard gives deep insights into top-selling items and peak hours. Helps us plan better.',
    avatar: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=100&h=100&fit=crop&crop=face'
  },
  {
    name: 'Kavita Rao',
    role: 'Owner, Coastal Flavours',
    content: 'Easy to train staff, fast billing, and excellent support. DineLix has made restaurant management stress-free.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face'
  }
];


  const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
    <div className="flex-shrink-0 w-[350px] bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/15 dark:to-indigo-900/15 rounded-xl p-6 border border-border/50 shadow-sm mx-1.5">
      <p className="text-muted-foreground mb-4 font-medium">{testimonial.content}</p>
      <div className="flex items-center gap-3">
        <Image 
          src={testimonial.avatar} 
          alt={testimonial.name}
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
        <div>
          <div className="font-semibold text-foreground">{testimonial.name}</div>
          <div className="text-sm text-muted-foreground">{testimonial.role}</div>
        </div>
      </div>
    </div>
  );

  const firstColumn = testimonials.slice(0, 5);
  const secondColumn = testimonials.slice(5, 10);

  return (
    <section className="py-24 bg-background overflow-hidden border-b border-border/50">
      <div className="container mx-auto px-6 lg:px-12 mb-16">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }} className="flex items-center justify-center flex-col text-center gap-5 mb-16">
          <CustomBadge>
            Testimonials
          </CustomBadge>

          <CustomTitle>
            Loved by Thousands
          </CustomTitle>
          
          <CustomSubtitle>
            Discover why users love Metronic and join today to experience its 
            transformative power for your business.
          </CustomSubtitle>
        </motion.div>
      </div>

      <div className="w-full mx-auto px-6">
        <motion.div 
          className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-1.5 mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
         >
          <Marquee pauseOnHover className="[--duration:40s] grow">
            {firstColumn.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:40s] grow">
            {secondColumn.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 start-0 w-1/12 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 end-0 w-1/12 bg-gradient-to-l from-background"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
