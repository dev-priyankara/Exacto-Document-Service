import Image from "next/image";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative w-full bg-white flex flex-col overflow-hidden">
      
      {/* 1. Perfect Top Smooth Curve (Navbar to White Area) */}
      <div className="w-full text-[#08182f] leading-none -mt-[1px]">
        <svg viewBox="0 0 1440 150" preserveAspectRatio="none" className="w-full h-[40px] sm:h-[80px] lg:h-[130px] block">
          <path fill="currentColor" d="M0,150 C400,150 800,40 1440,20 L1440,0 L0,0 Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-4 pb-20 md:pb-28">
        
        {/* Decorative Dot Pattern Background */}
        <div className="absolute top-10 left-0 w-48 h-64 opacity-30 pointer-events-none -z-10" 
             style={{ backgroundImage: 'radial-gradient(#cbd5e1 2.5px, transparent 2.5px)', backgroundSize: '24px 24px' }}>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center mt-6">
          
          {/* Left Content Area */}
          <div className="space-y-6 md:space-y-8 z-10">
            <h1 className="text-[2.5rem] md:text-5xl lg:text-[3.5rem] font-bold text-[#08182f] leading-[1.15]">
              Your Trusted Partner <br />
              <span className="block mt-2">for Every Step</span>
            </h1>

            <h2 className="text-xl md:text-2xl lg:text-[1.7rem] font-medium text-[#08182f] tracking-wide">
              Selection. Convenience. <span className="text-[#c48931] font-semibold">Outcome.</span>
            </h2>

            <p className="text-gray-600 text-base md:text-lg max-w-lg leading-relaxed font-medium">
              We provide reliable and professional services to individuals and businesses with accuracy, trust and convenience.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://wa.me/94776103061"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-[#08182f] text-white px-8 py-3.5 rounded-full hover:bg-[#0a1f3d] transition-colors font-medium text-[15px] shadow-lg"
              >
                <FaWhatsapp className="w-[20px] h-[20px]" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="tel:0776103061"
                className="inline-flex items-center justify-center space-x-2 bg-[#c48931] text-white px-10 py-3.5 rounded-full hover:bg-[#b07b2c] transition-colors font-medium text-[15px] shadow-lg"
              >
                <Phone className="w-[18px] h-[18px] fill-current" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Right Image Area */}
          <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[480px] rounded-[1.5rem] overflow-hidden shadow-2xl z-10">
            {/* Make sure "hero-bg.jpg" is in your public folder! */}
            <Image
              src="/hero-bg.png"
              alt="Professional Business Consulting"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
              priority
            />
          </div>

        </div>
      </div>

      {/* 2. Bottom Gold Subtle Curve */}
      <div className="absolute bottom-0 w-full leading-none z-0">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-[20px] md:h-[40px] block opacity-80">
          <path fill="#c48931" d="M0,60 L1440,60 L1440,0 C1000,50 400,60 0,60 Z"></path>
        </svg>
      </div>

    </section>
  );
}