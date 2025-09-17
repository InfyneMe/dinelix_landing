import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { CustomTitle } from './custom/title';
import { CustomSubtitle } from './custom/subtitle';
import { CustomBadge } from './custom/badge';

const Pricing = () => {
  const plans = [
    {
      name: 'Standard POS',
      yearlyPrice: '₹64,999',
      period: '/year',
      description: 'Best for single-outlet restaurants & cafés',
      features: [
        '1 Outlet & unlimited tables',
        'POS billing & order management',
        'Kitchen Order Tickets (KOT)',
        'Basic inventory tracking',
        'GST & tax billing support',
        'Daily sales reports',
        'Email & chat support'
      ],
      popular: false
    },
    {
      name: 'Premium POS',
      yearlyPrice: '₹84,999',
      period: '/year',
      description: 'For growing restaurants & multi-outlets',
      features: [
        'Multi-outlet management',
        'Advanced inventory & stock alerts',
        'Recipe & wastage management',
        'Role-based staff access',
        'Customer loyalty & discounts',
        'Advanced analytics & dashboards',
        'Priority 24/7 support',
        'Custome Branding',
        'Custome Brand APP and WEB',
        'Free onboarding & training'
      ],
      popular: true
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-background border-b border-border/50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex items-center justify-center flex-col text-center gap-5"
        >
          <CustomBadge>Pricing</CustomBadge>

          <CustomTitle>Simple & Transparent Pricing</CustomTitle>
          
          <CustomSubtitle className="mb-10">
            Choose the perfect plan for your restaurant. 
            <br />
            All yearly plans include setup & training.
          </CustomSubtitle>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                className={cn(
                  'h-full relative transition-all duration-300 group', 
                  plan.popular ? 'border-indigo-500 shadow-2xl scale-105' : 'border-border hover:border-indigo-500'
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-2.5 py-1">
                      <Star className="h-3 w-3 me-0.5" />
                      Recommended
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center py-6">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-muted-foreground mb-5">
                    {plan.description}
                  </CardDescription>
                  <div className="flex items-end justify-center">
                    <div className="relative h-16 flex items-end">
                      <motion.span
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent relative"
                      >
                        {plan.yearlyPrice}
                      </motion.span>
                    </div>
                    <span className="text-muted-foreground ms-1 mb-1">{plan.period}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <motion.div
                    whileHover={{ scale: 1.025 }}
                    whileTap={{ scale: 0.98 }}
                    className="pt-6"
                  >
                    <Button className="w-full cursor-pointer" size="lg" variant={plan.popular ? "default" : "outline"}>
                      Get Started
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
