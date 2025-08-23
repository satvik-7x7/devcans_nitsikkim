import { Calendar, CheckCircle, ExternalLink, Award } from 'lucide-react';

const RegisterSection = () => {
  return (
    <section id="register" className="py-20 bg-terminal-bg/50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            {/* Protocol Status */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 border border-green-500 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-green-400" />
              </div>
              <span className="text-green-400 font-semibold text-lg">
                // SIH 2025 PROTOCOL: ACTIVE
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight text-glow">
              ANSWER THE CALL
            </h2>

            {/* Description */}
            <p className="text-xl text-green-400/80 mb-8 leading-relaxed">
              The time to act is now. Enlist for{' '}
              <strong>Smart India Hackathon 2025</strong> and become an agent of change.
            </p>

            {/* Benefits List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-green-300/90">
                  Mentorship from veteran operators.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-green-300/90">
                  Access to classified workshops and training modules.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-green-300/90">
                  Synchronize with a dedicated squad.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-green-300/90">
                  Deploy directly into the SIH 2025 combat zone.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-green-300/90">
                  Recognition and commendations for your service.
                </span>
              </div>
            </div>

            {/* Enlist Button */}
            <div>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 w-full border-2 border-green-500 bg-green-500/10 hover:bg-green-500/20 text-green-300 hover:text-white px-10 py-4 text-lg shadow-[0_0_15px_rgba(0,255,0,0.3)] hover:shadow-[0_0_25px_rgba(0,255,0,0.5)] transition-all duration-300 rounded-none">
                <span className="flex items-center justify-center gap-3">
                  // ENLIST NOW
                  <ExternalLink className="w-5 h-5 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>

          {/* Right Column - Terminal Display */}
          <div className="relative p-8 border-2 border-green-500/30" style={{ boxShadow: 'rgba(0, 255, 0, 0.3) 0px 0px 0px' }}>
            {/* Terminal Header */}
            <div className="absolute top-2 right-2 text-green-500/50 text-xs">
              [SIH_TERMINAL_v2.5]
            </div>
            <div className="absolute bottom-2 left-2 text-green-500/50 text-xs">
              STATUS: ONLINE
            </div>

            {/* Main Terminal Content */}
            <div className="text-center mb-8">
              {/* Award Icon */}
              <div className="w-20 h-20 border-2 border-green-500 mx-auto mb-6 flex items-center justify-center shadow-[0_0_10px_#00ff00]">
                <Award className="w-10 h-10 text-green-400" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-glow mb-2">
                Smart India Hackathon 2025
              </h3>
              <p className="text-green-400/80">Primary Directive</p>
            </div>

            {/* Divider */}
            <div className="h-px bg-green-500/30 my-6"></div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8 text-center font-mono">
              <div>
                <div className="text-2xl font-bold text-green-300 mb-1">
                  &gt; 100K INR
                </div>
                <div className="text-sm text-green-400/70">Reward Pool</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-300 mb-1">
                  &gt; 10K
                </div>
                <div className="text-sm text-green-400/70">Operatives</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterSection;
