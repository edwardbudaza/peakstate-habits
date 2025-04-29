"use client";

import { useState, useEffect } from "react";
import {
  ArrowRight,
  Target,
  Calendar,
  BarChart3,
  Award,
  Check,
  Clock,
  Star,
} from "lucide-react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Animation classes based on visibility state
  const fadeIn = isVisible
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-10";

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-cyan-50 py-20 lg:py-24">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 bottom-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cyan-300"></div>
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full bg-blue-300"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">
          {/* Pre-headline badge */}
          <div
            className={`bg-cyan-100 rounded-full px-4 py-1 mb-6 flex items-center transition-all duration-700 ease-out ${fadeIn}`}
          >
            <Star className="w-4 h-4 text-cyan-600 mr-2" />
            <span className="text-xs font-medium text-cyan-800">
              Trusted by 10,000+ users worldwide
            </span>
          </div>

          {/* Main headline */}
          <h1
            className={`font-bold text-4xl md:text-5xl lg:text-6xl text-center leading-tight mb-6 transition-all duration-700 delay-100 ease-out ${fadeIn}`}
          >
            Build the habits that{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">
              transform
            </span>{" "}
            your life
          </h1>

          {/* Subheadline */}
          <p
            className={`text-center text-gray-600 text-lg md:text-xl max-w-2xl mb-8 transition-all duration-700 delay-200 ease-out ${fadeIn}`}
          >
            Stop feeling overwhelmed by your goals. PeakState Habits gives you
            the structure and motivation to build lasting habits that drive real
            results.
          </p>

          {/* CTA buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center mb-12 transition-all duration-700 delay-300 ease-out ${fadeIn}`}
          >
            <button
              type="button"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-medium text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
            >
              {`Let's get started`}
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              type="button"
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-medium text-cyan-700 bg-white border border-cyan-200 hover:bg-gray-50 transition-colors duration-300 w-full sm:w-auto"
            >
              Watch demo
              <Clock className="w-5 h-5" />
            </button>
          </div>

          {/* Feature highlights */}
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl transition-all duration-700 delay-400 ease-out ${fadeIn}`}
          >
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="bg-cyan-100 p-3 rounded-lg inline-block mb-4">
                <Target className="w-6 h-6 text-cyan-700" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Goal Tracking</h3>
              <p className="text-gray-600">
                Set clear targets and track your progress with visual feedback
                every step of the way.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="bg-cyan-100 p-3 rounded-lg inline-block mb-4">
                <Calendar className="w-6 h-6 text-cyan-700" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Daily Streaks</h3>
              <p className="text-gray-600">
                Build momentum with daily habit streaks that keep you motivated
                and accountable.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="bg-cyan-100 p-3 rounded-lg inline-block mb-4">
                <BarChart3 className="w-6 h-6 text-cyan-700" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Data Insights</h3>
              <p className="text-gray-600">
                Gain powerful insights into your habits with detailed analytics
                and progress reports.
              </p>
            </div>
          </div>

          {/* Social proof */}
          <div
            className={`mt-16 bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 w-full max-w-4xl transition-all duration-700 delay-500 ease-out ${fadeIn}`}
          >
            <div className="flex items-center mb-6">
              <Award className="w-8 h-8 text-yellow-500 mr-3" />
              <h3 className="font-semibold text-xl">
                Why people choose PeakState Habits
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="w-5 h-5 text-green-500" />
                </div>
                <p className="ml-3 text-sm text-gray-600">
                  Simple 2-minute daily check-ins
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="w-5 h-5 text-green-500" />
                </div>
                <p className="ml-3 text-sm text-gray-600">
                  Customizable habit templates
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="w-5 h-5 text-green-500" />
                </div>
                <p className="ml-3 text-sm text-gray-600">
                  Smart reminders that adapt to you
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="w-5 h-5 text-green-500" />
                </div>
                <p className="ml-3 text-sm text-gray-600">
                  Syncs across all your devices
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
