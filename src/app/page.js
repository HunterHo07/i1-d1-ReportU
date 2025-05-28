'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  ShieldCheckIcon,
  GlobeAltIcon,
  DocumentTextIcon,
  CameraIcon,
  BellIcon,
  ArrowRightIcon,
  PlayIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import ParticleBackground from '@/components/effects/ParticleBackground';

export default function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    // Add scroll-triggered animations here later with GSAP
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            {/* Hero Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8 animate-pulse-glow">
              <ShieldCheckIcon className="w-4 h-4 mr-2" />
              Cross-Border Reporting Platform
            </div>

            {/* Hero Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Report Offenses
              <br />
              <span className="text-gradient">Across Borders</span>
            </h1>

            {/* Hero Subtitle */}
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Revolutionary platform for Malaysia and Singapore citizens to submit offense reports efficiently.
              Automatic department routing, real-time tracking, and evidence upload support.
            </p>

            {/* Hero Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-12 text-center">
              <div className="animate-float">
                <div className="text-3xl font-bold text-blue-400">39.9M+</div>
                <div className="text-gray-400">Potential Users</div>
              </div>
              <div className="animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="text-3xl font-bold text-green-400">&lt;2min</div>
                <div className="text-gray-400">Report Time</div>
              </div>
              <div className="animate-float" style={{ animationDelay: '1s' }}>
                <div className="text-3xl font-bold text-yellow-400">24/7</div>
                <div className="text-gray-400">Real-time Tracking</div>
              </div>
            </div>

            {/* Hero CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Link href="/demo">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto"
                  icon={<PlayIcon className="w-5 h-5" />}
                >
                  Try Live Demo
                </Button>
              </Link>
              <Link href="/report">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                  icon={<DocumentTextIcon className="w-5 h-5" />}
                >
                  Submit Report
                </Button>
              </Link>
            </div>

            {/* Mini Demo Preview */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-8 glow-blue">
                <h3 className="text-2xl font-bold mb-6 text-center">Quick Report Preview</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-gray-700/50 rounded-xl hover:bg-gray-700 transition-colors">
                    <GlobeAltIcon className="w-12 h-12 mx-auto mb-3 text-blue-400" />
                    <h4 className="font-semibold mb-2">Select Country</h4>
                    <p className="text-gray-400 text-sm">Malaysia or Singapore</p>
                  </div>
                  <div className="text-center p-4 bg-gray-700/50 rounded-xl hover:bg-gray-700 transition-colors">
                    <CameraIcon className="w-12 h-12 mx-auto mb-3 text-green-400" />
                    <h4 className="font-semibold mb-2">Upload Evidence</h4>
                    <p className="text-gray-400 text-sm">Photos, videos, documents</p>
                  </div>
                  <div className="text-center p-4 bg-gray-700/50 rounded-xl hover:bg-gray-700 transition-colors">
                    <BellIcon className="w-12 h-12 mx-auto mb-3 text-yellow-400" />
                    <h4 className="font-semibold mb-2">Track Status</h4>
                    <p className="text-gray-400 text-sm">Real-time updates</p>
                  </div>
                </div>
                <div className="text-center mt-6">
                  <Link href="/demo">
                    <Button variant="ghost" size="sm" icon={<ArrowRightIcon className="w-4 h-4" />} iconPosition="right">
                      See Full Demo
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="relative py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Problem Side */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-red-400">The Problem</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-red-400 font-bold">✗</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Complex Reporting Processes</h3>
                      <p className="text-gray-400">Citizens struggle with navigating multiple platforms and departments, leading to confusion and delays.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-red-400 font-bold">✗</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Lack of Immediate Action</h3>
                      <p className="text-gray-400">Time-consuming procedures discourage reporting and delay justice.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-red-400 font-bold">✗</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Fragmented Systems</h3>
                      <p className="text-gray-400">No unified platform for cross-border offense reporting between Malaysia and Singapore.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Solution Side */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-green-400">Our Solution</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-400 font-bold">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Unified Platform</h3>
                      <p className="text-gray-400">Single platform for both Malaysia and Singapore with automatic department routing.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-400 font-bold">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Real-time Tracking</h3>
                      <p className="text-gray-400">Live status updates and notifications throughout the entire process.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-400 font-bold">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Evidence Upload</h3>
                      <p className="text-gray-400">Seamless photo, video, and document upload with secure storage.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Showcase Section */}
      <section id="features" className="relative py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Powerful Features for
              <span className="text-gradient"> Modern Reporting</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the future of civic engagement with our comprehensive suite of reporting tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-8 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 glow-blue group">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <GlobeAltIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Cross-Border Integration</h3>
              <p className="text-gray-400 mb-6">
                Seamlessly report offenses across Malaysia and Singapore with automatic jurisdiction detection and routing.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Automatic country detection
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Department routing
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Multi-language support
                </li>
              </ul>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-8 hover:border-green-500/50 transition-all duration-300 hover:scale-105 glow-green group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CameraIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Evidence Management</h3>
              <p className="text-gray-400 mb-6">
                Upload photos, videos, and documents with secure cloud storage and automatic compression.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Multiple file formats
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Secure encryption
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Auto-compression
                </li>
              </ul>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-8 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105 group">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BellIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Real-time Tracking</h3>
              <p className="text-gray-400 mb-6">
                Monitor your report status with live updates, notifications, and estimated resolution times.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Live status updates
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Push notifications
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Timeline tracking
                </li>
              </ul>
            </div>

            {/* Feature 4 */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-8 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheckIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Smart Routing</h3>
              <p className="text-gray-400 mb-6">
                AI-powered department selection based on offense type, location, and severity level.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  AI classification
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Priority scoring
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Auto-escalation
                </li>
              </ul>
            </div>

            {/* Feature 5 */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-8 hover:border-indigo-500/50 transition-all duration-300 hover:scale-105 group">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <DocumentTextIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Digital Forms</h3>
              <p className="text-gray-400 mb-6">
                Intuitive step-by-step forms with smart validation and auto-save functionality.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Smart validation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Auto-save drafts
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Multi-step wizard
                </li>
              </ul>
            </div>

            {/* Feature 6 */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-8 hover:border-teal-500/50 transition-all duration-300 hover:scale-105 group">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ArrowRightIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Quick Actions</h3>
              <p className="text-gray-400 mb-6">
                Emergency reporting, follow-up submissions, and bulk reporting for organizations.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Emergency mode
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Bulk submissions
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                  Quick templates
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <Link href="/demo">
              <Button variant="primary" size="lg" icon={<PlayIcon className="w-5 h-5" />}>
                Experience All Features
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Simple, <span className="text-gradient">Transparent Pricing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your reporting needs. Start free and upgrade as you grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free Tier */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-8 hover:border-gray-600 transition-all">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Free</h3>
                <div className="text-4xl font-bold mb-6">$0<span className="text-lg text-gray-400">/month</span></div>
                <p className="text-gray-400 mb-8">Perfect for individual citizens</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Basic report submission</span>
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Standard evidence upload (3 files)</span>
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Basic status tracking</span>
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Community support</span>
                </li>
                <li className="flex items-center text-gray-500">
                  <span className="w-5 h-5 mr-3">✗</span>
                  <span>Priority processing</span>
                </li>
              </ul>

              <Link href="/demo">
                <Button variant="outline" className="w-full">
                  Get Started Free
                </Button>
              </Link>
            </div>

            {/* Premium Tier */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border-2 border-blue-500 p-8 relative glow-blue">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-primary px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Premium</h3>
                <div className="text-4xl font-bold mb-6">$4.99<span className="text-lg text-gray-400">/month</span></div>
                <p className="text-gray-400 mb-8">Enhanced features for power users</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Priority processing</span>
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Unlimited evidence uploads</span>
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Advanced tracking & analytics</span>
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Direct support line</span>
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Report history export</span>
                </li>
              </ul>

              <Link href="/demo">
                <Button variant="primary" className="w-full">
                  Start Premium Trial
                </Button>
              </Link>
            </div>

            {/* Business Tier */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-8 hover:border-gray-600 transition-all">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Business</h3>
                <div className="text-4xl font-bold mb-6">$29.99<span className="text-lg text-gray-400">/month</span></div>
                <p className="text-gray-400 mb-8">For organizations and businesses</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Bulk reporting for organizations</span>
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>API access</span>
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Custom integrations</span>
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Dedicated account manager</span>
                </li>
                <li className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3" />
                  <span>Advanced analytics dashboard</span>
                </li>
              </ul>

              <Button variant="outline" className="w-full">
                Contact Sales
              </Button>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-20 max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h3>
            <div className="space-y-6">
              <div className="bg-gray-700/50 rounded-xl p-6">
                <h4 className="font-semibold mb-2">Is the free plan really free forever?</h4>
                <p className="text-gray-400 text-sm">Yes! Our free plan includes all basic reporting features and will always be free for individual citizens.</p>
              </div>
              <div className="bg-gray-700/50 rounded-xl p-6">
                <h4 className="font-semibold mb-2">Can I upgrade or downgrade anytime?</h4>
                <p className="text-gray-400 text-sm">Absolutely! You can change your plan at any time. Upgrades take effect immediately, downgrades at the next billing cycle.</p>
              </div>
              <div className="bg-gray-700/50 rounded-xl p-6">
                <h4 className="font-semibold mb-2">Do you offer government discounts?</h4>
                <p className="text-gray-400 text-sm">Yes, we offer special pricing for government agencies and NGOs. Contact our sales team for custom pricing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
