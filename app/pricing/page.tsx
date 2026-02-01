'use client';

import { useState } from 'react'; // Remove useEffect since we're not using contextData
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, ArrowLeft, Calculator } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function PricingPage() {
    const [credits, setCredits] = useState(1000);

    // Remove the useEffect and contextData state since it's not used
    // If you need it later, you can add it back

    const allPlans = [
        {
            name: 'Launch',
            monthlyPrice: '₹499',
            yearlyPrice: '₹4,999',
            credits: 500,
            description: 'Perfect for single-location independent restaurants',
            features: [
                '1 Brand, 1 Outlet',
                'POS billing & KOT',
                'Table management',
                'Basic inventory tracking',
                'GST & tax billing support',
                'Daily sales reports',
                'Email support',
                'Basic analytics dashboard'
            ],
            popular: false
        },
        {
            name: 'Growth',
            monthlyPrice: '₹1,499',
            yearlyPrice: '₹14,999',
            credits: 2000,
            description: 'Growing multi-location restaurant brands',
            features: [
                'Up to 5 outlets',
                'Unified brand menu',
                'Credit allocation across outlets',
                'Advanced inventory & stock alerts',
                'Recipe & wastage management',
                'Role-based staff access',
                'Advanced reporting & analytics',
                'Priority email & chat support',
                'Customer loyalty programs'
            ],
            popular: false
        },
        {
            name: 'Scale',
            monthlyPrice: '₹2,999',
            yearlyPrice: '₹29,999',
            credits: 10000,
            description: 'Multi-city chain & franchise operations',
            features: [
                'Unlimited outlets',
                'Multi-brand support',
                'Full API access',
                'White-label options',
                'Custom integrations',
                'Advanced analytics & BI tools',
                'Dedicated account manager',
                '24/7 phone support',
                'SLA guarantees',
                'Custom workflows',
                'Priority feature requests'
            ],
            popular: true
        },
        {
            name: 'Custom',
            monthlyPrice: 'Custom',
            yearlyPrice: 'Custom',
            credits: null,
            description: 'Tailored enterprise-grade solutions',
            features: [
                'Volume-based pricing',
                'Dedicated servers',
                'Custom SLA agreements',
                'Compliance & security audit',
                'On-premise deployment option',
                'Custom feature development',
                'White-glove onboarding',
                'Success manager',
                'Training & certification',
                'Premium support package'
            ],
            popular: false,
            isCustom: true
        }
    ];

    // Credit calculator logic
    const calculatePrice = (creditCount: number) => {
        let pricePerCredit = 1.0;

        if (creditCount >= 100000) pricePerCredit = 0.70;
        else if (creditCount >= 50000) pricePerCredit = 0.75;
        else if (creditCount >= 10000) pricePerCredit = 0.80;
        else if (creditCount >= 5000) pricePerCredit = 0.85;
        else if (creditCount >= 1000) pricePerCredit = 0.90;

        const total = creditCount * pricePerCredit;
        const baseCost = creditCount * 1.0;
        const savings = baseCost - total;
        const savingsPercent = Math.round((savings / baseCost) * 100);

        return {
            total: Math.round(total),
            perCredit: pricePerCredit,
            savings: Math.round(savings),
            savingsPercent
        };
    };

    const pricing = calculatePrice(credits);

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <nav className="border-b border-border sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors">
                            <ArrowLeft className="h-4 w-4" />
                            Back to Home
                        </Link>
                        <h1 className="text-xl font-bold">Complete Pricing</h1>
                        <div className="w-24"></div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-b from-background to-muted/20">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <Badge className="mb-6 bg-indigo-100 text-indigo-700 border-indigo-200">
                            Flexible Pricing
                        </Badge>
                        <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                            Pricing that scales<br />with your business
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Pay only for completed orders. Start at ₹499/month.<br />
                            Scale from one outlet to nationwide operations.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                        {allPlans.map((plan, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <Card
                                    className={cn(
                                        'h-full relative transition-all duration-300 hover:shadow-xl',
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
                                        <Badge
                                            variant="outline"
                                            className={cn(
                                                "uppercase text-xs font-bold tracking-wider mb-4 w-fit mx-auto",
                                                plan.popular ? "bg-white/10 text-white border-white/20" : "bg-gray-100 text-gray-700"
                                            )}
                                        >
                                            {plan.name}
                                        </Badge>

                                        <CardDescription className={cn(
                                            "mb-6 text-sm",
                                            plan.popular ? "text-gray-300" : "text-muted-foreground"
                                        )}>
                                            {plan.description}
                                        </CardDescription>

                                        <div className="mb-4">
                                            <div className="flex items-end justify-center mb-2">
                                                <span className={cn(
                                                    "font-bold",
                                                    plan.isCustom ? "text-3xl" : "text-5xl",
                                                    plan.popular ? "text-white" : "bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
                                                )}>
                                                    {plan.monthlyPrice}
                                                </span>
                                                {!plan.isCustom && <span className={cn("ms-1 mb-1", plan.popular ? "text-gray-400" : "text-muted-foreground")}>/month</span>}
                                            </div>
                                            {plan.credits && (
                                                <p className={cn("text-sm font-semibold", plan.popular ? "text-gray-300" : "text-gray-600")}>
                                                    {plan.credits.toLocaleString()} credits included
                                                </p>
                                            )}
                                        </div>
                                    </CardHeader>

                                    <CardContent>
                                        <Button
                                            className={cn(
                                                "w-full mb-6",
                                                plan.popular ? "bg-white text-gray-900 hover:bg-gray-100" : ""
                                            )}
                                            size="lg"
                                            variant={plan.popular ? "default" : "outline"}
                                        >
                                            {plan.isCustom ? 'Contact Sales' : 'Start Free Trial'}
                                        </Button>

                                        <ul className="space-y-3">
                                            {plan.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-2">
                                                    <div className={cn(
                                                        "h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
                                                        plan.popular ? "bg-white" : "bg-gray-900"
                                                    )}>
                                                        <Check className={cn("h-3 w-3", plan.popular ? "text-gray-900" : "text-white")} />
                                                    </div>
                                                    <span className={cn("text-sm", plan.popular ? "text-white" : "text-muted-foreground")}>
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
                </div>
            </section>

            {/* Credit Calculator */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="text-center mb-12">
                            <Badge className="mb-4 bg-indigo-100 text-indigo-700 border-indigo-200">
                                <Calculator className="h-3 w-3 me-1" />
                                Calculator
                            </Badge>
                            <h2 className="text-4xl font-bold mb-4">Credit Calculator</h2>
                            <p className="text-lg text-muted-foreground">
                                See exactly what you&apos;ll pay for any volume
                            </p>
                        </div>

                        <Card className="p-8 lg:p-12">
                            <div className="mb-8">
                                <label className="block text-sm font-semibold mb-4">
                                    Enter number of credits
                                </label>
                                <div className="relative">
                                    <input
                                        type="number"
                                        value={credits}
                                        onChange={(e) => setCredits(Number(e.target.value))}
                                        min="10"
                                        max="100000"
                                        className="w-full px-6 py-4 text-3xl font-bold bg-background border-2 border-border rounded-xl focus:outline-none focus:border-indigo-500 transition-all"
                                    />
                                    <span className="absolute right-6 top-1/2 -translate-y-1/2 text-lg text-muted-foreground font-medium pointer-events-none">
                                        credits
                                    </span>
                                </div>
                            </div>

                            <div className="mb-10">
                                <input
                                    type="range"
                                    value={credits}
                                    onChange={(e) => setCredits(Number(e.target.value))}
                                    min="10"
                                    max="100000"
                                    step="10"
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                                />
                                <div className="flex justify-between mt-3 text-xs font-medium text-muted-foreground">
                                    <span>10</span>
                                    <span>25K</span>
                                    <span>50K</span>
                                    <span>75K</span>
                                    <span>100K</span>
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl border-2 border-indigo-200 p-8 text-center mb-8">
                                <div className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-3">
                                    Your Total Price
                                </div>
                                <div className="mb-4">
                                    <span className="text-6xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                                        ₹{pricing.total.toLocaleString()}
                                    </span>
                                </div>
                                <div className="flex items-center justify-center gap-6 mb-5 flex-wrap">
                                    <div className="text-sm text-gray-600">
                                        <span className="font-semibold text-gray-900">₹{pricing.perCredit}</span> per credit
                                    </div>
                                    <div className="h-4 w-px bg-gray-300"></div>
                                    <div className="text-sm text-gray-600">
                                        <span className="font-semibold text-gray-900">{credits.toLocaleString()}</span> credits
                                    </div>
                                </div>
                                {pricing.savings > 0 && (
                                    <Badge className="bg-green-100 text-green-700 border-green-200 px-4 py-1.5">
                                        <Check className="h-3 w-3 me-1" />
                                        Save {pricing.savingsPercent}% (₹{pricing.savings.toLocaleString()}) vs base price
                                    </Badge>
                                )}
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                                {[500, 1000, 5000, 10000, 100000].map((preset) => (
                                    <Button
                                        key={preset}
                                        onClick={() => setCredits(preset)}
                                        variant={credits === preset ? "default" : "outline"}
                                        className={cn(
                                            "font-semibold",
                                            credits === preset && "bg-indigo-600 hover:bg-indigo-700"
                                        )}
                                    >
                                        {preset >= 1000 ? `${preset / 1000}K` : preset}
                                    </Button>
                                ))}
                            </div>
                        </Card>
                    </motion.div>
                </div>
            </section>

            {/* FAQ or Additional Info */}
            <section className="py-20 border-t border-border">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            Start your 14-day free trial today. No credit card required.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                                Start Free Trial
                            </Button>
                            <Button size="lg" variant="outline">
                                Schedule a Demo
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
