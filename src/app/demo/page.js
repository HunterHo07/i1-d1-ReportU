'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  ArrowLeftIcon,
  MapPinIcon,
  CameraIcon,
  DocumentTextIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';
import Header from '@/components/layout/Header';
import Button from '@/components/ui/Button';
import ParticleBackground from '@/components/effects/ParticleBackground';

export default function DemoPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedOffense, setSelectedOffense] = useState('');
  const [reportData, setReportData] = useState({
    location: '',
    description: '',
    evidence: [],
    priority: 'medium'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const countries = [
    { id: 'malaysia', name: 'Malaysia', flag: '🇲🇾', departments: ['Royal Malaysia Police', 'MCMC', 'Ministry of Health'] },
    { id: 'singapore', name: 'Singapore', flag: '🇸🇬', departments: ['Singapore Police Force', 'IMDA', 'MOH Singapore'] }
  ];

  const offenseTypes = [
    { id: 'traffic', name: 'Traffic Violations', icon: '🚗', color: 'text-red-400', priority: 'high' },
    { id: 'counterfeit', name: 'Counterfeit Goods', icon: '🏷️', color: 'text-orange-400', priority: 'medium' },
    { id: 'noise', name: 'Public Disturbance', icon: '📢', color: 'text-yellow-400', priority: 'medium' },
    { id: 'environment', name: 'Environmental Issues', icon: '🌱', color: 'text-green-400', priority: 'low' },
    { id: 'consumer', name: 'Consumer Protection', icon: '🛡️', color: 'text-blue-400', priority: 'medium' },
    { id: 'cyber', name: 'Cybercrime', icon: '💻', color: 'text-purple-400', priority: 'high' }
  ];

  const steps = [
    { id: 1, name: 'Country Selection', icon: MapPinIcon },
    { id: 2, name: 'Offense Type', icon: ExclamationTriangleIcon },
    { id: 3, name: 'Report Details', icon: DocumentTextIcon },
    { id: 4, name: 'Evidence Upload', icon: CameraIcon },
    { id: 5, name: 'Review & Submit', icon: CheckCircleIcon }
  ];

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
        <ParticleBackground />
        <Header />
        
        <div className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-12 glow-green">
              <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircleIcon className="w-12 h-12 text-green-400" />
              </div>
              
              <h1 className="text-4xl font-bold mb-6 text-green-400">Report Submitted Successfully!</h1>
              <p className="text-xl text-gray-300 mb-8">
                Your report has been automatically routed to the appropriate department.
              </p>
              
              <div className="bg-gray-700/50 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-semibold mb-4">Report Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  <div>
                    <span className="text-gray-400">Report ID:</span>
                    <span className="ml-2 font-mono text-blue-400">#RPT-{Date.now().toString().slice(-6)}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Country:</span>
                    <span className="ml-2">{countries.find(c => c.id === selectedCountry)?.name}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Offense Type:</span>
                    <span className="ml-2">{offenseTypes.find(o => o.id === selectedOffense)?.name}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Status:</span>
                    <span className="ml-2 text-yellow-400">Under Review</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="primary" 
                  onClick={() => {
                    setIsSubmitted(false);
                    setCurrentStep(1);
                    setSelectedCountry('');
                    setSelectedOffense('');
                    setReportData({ location: '', description: '', evidence: [], priority: 'medium' });
                  }}
                >
                  Submit Another Report
                </Button>
                <Link href="/">
                  <Button variant="outline">
                    Back to Home
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <ParticleBackground />
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6">
              <ArrowLeftIcon className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Live Demo: <span className="text-gradient">Report Submission</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience our streamlined reporting process with this interactive demonstration
            </p>
          </div>

          {/* Progress Steps */}
          <div className="mb-12">
            <div className="flex justify-center">
              <div className="flex items-center space-x-4 overflow-x-auto pb-4">
                {steps.map((step, index) => (
                  <div key={step.id} className="flex items-center">
                    <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all ${
                      currentStep >= step.id 
                        ? 'bg-blue-500 border-blue-500 text-white' 
                        : 'border-gray-600 text-gray-400'
                    }`}>
                      <step.icon className="w-6 h-6" />
                    </div>
                    <div className="ml-3 hidden sm:block">
                      <div className={`text-sm font-medium ${
                        currentStep >= step.id ? 'text-white' : 'text-gray-400'
                      }`}>
                        Step {step.id}
                      </div>
                      <div className={`text-xs ${
                        currentStep >= step.id ? 'text-blue-400' : 'text-gray-500'
                      }`}>
                        {step.name}
                      </div>
                    </div>
                    {index < steps.length - 1 && (
                      <div className={`w-8 h-0.5 mx-4 ${
                        currentStep > step.id ? 'bg-blue-500' : 'bg-gray-600'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Demo Content */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-8 glow-blue">
            {/* Step 1: Country Selection */}
            {currentStep === 1 && (
              <div className="max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold mb-6 text-center">Select Your Country</h3>
                <p className="text-gray-400 text-center mb-8">Choose the country where the offense occurred</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {countries.map((country) => (
                    <button
                      key={country.id}
                      onClick={() => setSelectedCountry(country.id)}
                      className={`p-6 rounded-xl border-2 transition-all hover:scale-105 ${
                        selectedCountry === country.id
                          ? 'border-blue-500 bg-blue-500/10'
                          : 'border-gray-600 hover:border-gray-500'
                      }`}
                    >
                      <div className="text-4xl mb-4">{country.flag}</div>
                      <h4 className="text-xl font-semibold mb-2">{country.name}</h4>
                      <div className="text-sm text-gray-400">
                        Available Departments:
                        <ul className="mt-2 space-y-1">
                          {country.departments.map((dept, index) => (
                            <li key={index} className="text-xs">• {dept}</li>
                          ))}
                        </ul>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Offense Type */}
            {currentStep === 2 && (
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold mb-6 text-center">Select Offense Type</h3>
                <p className="text-gray-400 text-center mb-8">What type of offense would you like to report?</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {offenseTypes.map((offense) => (
                    <button
                      key={offense.id}
                      onClick={() => setSelectedOffense(offense.id)}
                      className={`p-6 rounded-xl border-2 transition-all hover:scale-105 ${
                        selectedOffense === offense.id
                          ? 'border-blue-500 bg-blue-500/10'
                          : 'border-gray-600 hover:border-gray-500'
                      }`}
                    >
                      <div className="text-3xl mb-4">{offense.icon}</div>
                      <h4 className="text-lg font-semibold mb-2">{offense.name}</h4>
                      <div className={`text-sm ${offense.color} mb-2`}>
                        Priority: {offense.priority.toUpperCase()}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Report Details */}
            {currentStep === 3 && (
              <div className="max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold mb-6 text-center">Report Details</h3>
                <p className="text-gray-400 text-center mb-8">Provide details about the incident</p>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Location</label>
                    <input
                      type="text"
                      value={reportData.location}
                      onChange={(e) => setReportData({...reportData, location: e.target.value})}
                      placeholder="Enter the location where the offense occurred"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Description</label>
                    <textarea
                      value={reportData.description}
                      onChange={(e) => setReportData({...reportData, description: e.target.value})}
                      placeholder="Describe what happened in detail..."
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Priority Level</label>
                    <select
                      value={reportData.priority}
                      onChange={(e) => setReportData({...reportData, priority: e.target.value})}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="low">Low - Non-urgent matter</option>
                      <option value="medium">Medium - Standard priority</option>
                      <option value="high">High - Urgent attention needed</option>
                      <option value="emergency">Emergency - Immediate action required</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Evidence Upload */}
            {currentStep === 4 && (
              <div className="max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold mb-6 text-center">Upload Evidence</h3>
                <p className="text-gray-400 text-center mb-8">Add photos, videos, or documents to support your report</p>

                <div className="border-2 border-dashed border-gray-600 rounded-xl p-12 text-center hover:border-blue-500 transition-colors">
                  <CameraIcon className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                  <h4 className="text-lg font-semibold mb-2">Drag & Drop Files Here</h4>
                  <p className="text-gray-400 mb-4">or click to browse</p>
                  <Button variant="outline" size="sm">
                    Choose Files
                  </Button>
                  <div className="mt-4 text-xs text-gray-500">
                    Supported formats: JPG, PNG, MP4, PDF (Max 10MB each)
                  </div>
                </div>

                {/* Simulated uploaded files */}
                <div className="mt-6 space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
                    <div className="flex items-center">
                      <DocumentTextIcon className="w-5 h-5 text-blue-400 mr-3" />
                      <span className="text-sm">evidence_photo_1.jpg</span>
                    </div>
                    <span className="text-xs text-green-400">✓ Uploaded</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
                    <div className="flex items-center">
                      <DocumentTextIcon className="w-5 h-5 text-blue-400 mr-3" />
                      <span className="text-sm">witness_statement.pdf</span>
                    </div>
                    <span className="text-xs text-green-400">✓ Uploaded</span>
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Review & Submit */}
            {currentStep === 5 && (
              <div className="max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold mb-6 text-center">Review Your Report</h3>
                <p className="text-gray-400 text-center mb-8">Please review all information before submitting</p>

                <div className="space-y-6">
                  <div className="bg-gray-700/50 rounded-xl p-6">
                    <h4 className="font-semibold mb-4">Report Summary</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <span className="text-gray-400">Country:</span>
                        <span className="ml-2">{countries.find(c => c.id === selectedCountry)?.name}</span>
                      </div>
                      <div>
                        <span className="text-gray-400">Offense Type:</span>
                        <span className="ml-2">{offenseTypes.find(o => o.id === selectedOffense)?.name}</span>
                      </div>
                      <div>
                        <span className="text-gray-400">Location:</span>
                        <span className="ml-2">{reportData.location || 'Not specified'}</span>
                      </div>
                      <div>
                        <span className="text-gray-400">Priority:</span>
                        <span className="ml-2 capitalize">{reportData.priority}</span>
                      </div>
                    </div>

                    {reportData.description && (
                      <div className="mt-4">
                        <span className="text-gray-400">Description:</span>
                        <p className="mt-2 text-sm">{reportData.description}</p>
                      </div>
                    )}
                  </div>

                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
                    <h4 className="font-semibold mb-2 text-blue-400">Automatic Routing</h4>
                    <p className="text-sm text-gray-300">
                      Your report will be automatically routed to: <strong>
                      {countries.find(c => c.id === selectedCountry)?.departments[0]}
                      </strong>
                    </p>
                    <p className="text-xs text-gray-400 mt-2">
                      Estimated processing time: 2-5 business days
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-center space-x-4 mt-12">
              {currentStep > 1 && (
                <Button variant="outline" onClick={prevStep}>
                  Previous
                </Button>
              )}
              {currentStep < steps.length && (
                <Button
                  variant="primary"
                  onClick={nextStep}
                  disabled={
                    (currentStep === 1 && !selectedCountry) ||
                    (currentStep === 2 && !selectedOffense)
                  }
                >
                  Next Step
                </Button>
              )}
              {currentStep === steps.length && (
                <Button variant="primary" onClick={handleSubmit} loading={isSubmitting}>
                  Submit Report
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
