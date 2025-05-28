export default function Home() {
  return (
    <div className="min-h-screen hero-gradient">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 glass-effect">
        <div className="text-2xl font-bold text-white">
          ReportU
        </div>
        <div className="space-x-6">
          <a href="#features" className="text-white hover:text-blue-200 transition-colors">
            Features
          </a>
          <a href="#demo" className="text-white hover:text-blue-200 transition-colors">
            Demo
          </a>
          <a href="#contact" className="text-white hover:text-blue-200 transition-colors">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center min-h-[80vh] text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          Cross-Border
          <br />
          <span className="text-blue-200">Reporting Platform</span>
        </h1>

        <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl animate-slide-up">
          Secure, anonymous reporting for Malaysia-Singapore incidents with AI-powered routing,
          real-time tracking, and government-grade security.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
          <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Start Reporting
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
            View Demo
          </button>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
          <div className="glass-effect p-6 rounded-lg text-white">
            <h3 className="text-xl font-semibold mb-3">🔒 Secure & Anonymous</h3>
            <p className="text-blue-100">End-to-end encryption with optional anonymity for sensitive reports.</p>
          </div>

          <div className="glass-effect p-6 rounded-lg text-white">
            <h3 className="text-xl font-semibold mb-3">🤖 AI-Powered Routing</h3>
            <p className="text-blue-100">Smart categorization and automatic routing to relevant authorities.</p>
          </div>

          <div className="glass-effect p-6 rounded-lg text-white">
            <h3 className="text-xl font-semibold mb-3">📱 Real-Time Tracking</h3>
            <p className="text-blue-100">Live updates and transparent progress tracking for all reports.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
