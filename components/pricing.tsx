'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Star, ArrowRight, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { CustomTitle } from './custom/title';
import { CustomSubtitle } from './custom/subtitle';
import { CustomBadge } from './custom/badge';

const Pricing = () => {
  const router = useRouter();

  const plans = [
    {
      name: 'Starter',
      yearlyPrice: '₹499',
      period: '/month',
      description: 'Perfect for single-location independent restaurants',
      credits: '500 credits included',
      features: [
        '1 Brand, 1 Outlet',
        'POS billing & KOT',
        'Table management',
        'Basic analytics',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      yearlyPrice: '₹1,499',
      period: '/month',
      description: 'Growing multi-location restaurant brands',
      credits: '2,000 credits included',
      features: [
        'Up to 5 outlets',
        'Unified brand menu',
        'Credit allocation',
        'Advanced reporting',
        'Priority support'
      ],
      popular: false
    },
    {
      name: 'Enterprise',
      yearlyPrice: '₹2,999',
      period: '/month',
      description: 'Multi-city chain & franchise operations',
      credits: '10,000 credits included',
      features: [
        'Unlimited outlets',
        'Multi-brand support',
        'API access',
        'White-label options',
        '24/7 phone support'
      ],
      popular: true
    },
    {
      name: 'Custom',
      yearlyPrice: 'Let\'s Talk',
      period: '',
      description: 'Tailored enterprise-grade solutions',
      credits: 'Custom pricing & features',
      features: [
        'Volume pricing',
        'Dedicated servers',
        'SLA guarantees',
        'Compliance support',
        'Success manager'
      ],
      popular: false,
      isCustom: true
    }
  ];

  const handleViewFullPricing = () => {
    // Store context data if needed
    const pricingContext = {
      source: 'landing-page',
      timestamp: new Date().toISOString(),
      plans: plans
    };

    sessionStorage.setItem('pricingContext', JSON.stringify(pricingContext));

    // Navigate to full pricing page
    router.push('/pricing');
  };

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

          <CustomSubtitle className="mb-6">
            Pay only for completed orders. Start at ₹499/month.
            <br />
            Scale from one outlet to nationwide operations.
          </CustomSubtitle>

          {/* View Full Pricing Link */}
          <motion.button
            onClick={handleViewFullPricing}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="group inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors mb-4"
          >
            <span>View Full Pricing Details & Calculator</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mt-6">
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
                  plan.popular
                    ? 'border-indigo-500 shadow-2xl scale-105 bg-gradient-to-br from-gray-900 to-gray-800 text-white'
                    : 'border-border hover:border-indigo-500'
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-white text-gray-900 px-4 py-1.5 shadow-lg">
                      <Star className="h-3 w-3 me-1 text-yellow-500 fill-yellow-500" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center py-6">
                  <div className="mb-4">
                    <Badge
                      variant="outline"
                      className={cn(
                        "uppercase text-xs font-bold tracking-wider",
                        plan.popular ? "bg-white/10 text-white border-white/20" : "bg-gray-100 text-gray-700 border-gray-200"
                      )}
                    >
                      {plan.name}
                    </Badge>
                  </div>

                  <CardDescription className={cn(
                    "mb-5 text-sm",
                    plan.popular ? "text-gray-300" : "text-muted-foreground"
                  )}>
                    {plan.description}
                  </CardDescription>

                  <div className="flex items-end justify-center mb-2">
                    <div className="relative h-16 flex items-end">
                      <motion.span
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className={cn(
                          "font-bold relative",
                          plan.isCustom ? "text-3xl" : "text-5xl",
                          plan.popular
                            ? "text-white"
                            : "bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
                        )}
                      >
                        {plan.yearlyPrice}
                      </motion.span>
                    </div>
                    {plan.period && (
                      <span className={cn(
                        "ms-1 mb-1",
                        plan.popular ? "text-gray-400" : "text-muted-foreground"
                      )}>
                        {plan.period}
                      </span>
                    )}
                  </div>

                  <p className={cn(
                    "text-sm font-semibold",
                    plan.popular ? "text-gray-300" : "text-gray-600"
                  )}>
                    {plan.credits}
                  </p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <motion.div
                    whileHover={{ scale: 1.025 }}
                    whileTap={{ scale: 0.98 }}
                    className="mb-6"
                  >
                    <Button
                      className={cn(
                        "w-full cursor-pointer",
                        plan.popular
                          ? "bg-white text-gray-900 hover:bg-gray-100"
                          : ""
                      )}
                      size="lg"
                      variant={plan.popular ? "default" : "outline"}
                    >
                      {plan.isCustom ? 'Contact Sales' : 'Start Free Trial'}
                    </Button>
                  </motion.div>

                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className={cn(
                          "h-5 w-5 rounded-full flex items-center justify-center mr-3 flex-shrink-0",
                          plan.popular ? "bg-white" : "bg-gray-900"
                        )}>
                          <Check className={cn(
                            "h-3 w-3",
                            plan.popular ? "text-gray-900" : "text-white"
                          )} />
                        </div>
                        <span className={cn(
                          "text-sm",
                          plan.popular ? "text-white font-medium" : "text-muted-foreground"
                        )}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-border"
        >
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-sm">
            {[
              '14-day free trial',
              'No credit card required',
              'Cancel anytime',
              '99.9% uptime SLA'
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-muted-foreground">
                <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                  <Check className="w-3 h-3 text-green-600" />
                </div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA for Full Pricing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <button
            onClick={handleViewFullPricing}
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            <span>View Complete Pricing & Calculator</span>
            <ExternalLink className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
