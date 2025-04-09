"use client";
import { ThreeDMarquee } from "@/components/3d-marquee";
import { cards } from "@/assets/cards";
import Image from "next/image";
import logo from "@/assets/logo.svg";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
  };
  const images = [
    cards.greenCardFront.src,
    cards.greenCardBack.src,
    cards.blackCardFront.src,
    cards.blackCardBack.src,
    cards.materialCardFront.src,
    cards.materialCardBack.src,
    cards.greenCardFront.src,
    cards.greenCardBack.src,
    cards.blackCardFront.src,
    cards.blackCardBack.src,
    cards.materialCardFront.src,
    cards.materialCardBack.src,
    cards.greenCardFront.src,
    cards.greenCardBack.src,
    cards.blackCardFront.src,
    cards.blackCardBack.src,
    cards.materialCardFront.src,
    cards.materialCardBack.src,
    cards.greenCardFront.src,
    cards.greenCardBack.src,
    cards.blackCardFront.src,
    cards.blackCardBack.src,
    cards.materialCardFront.src,
    cards.materialCardBack.src,
    cards.greenCardFront.src,
    cards.greenCardBack.src,
    cards.blackCardFront.src,
    cards.blackCardBack.src,
    cards.materialCardFront.src,
    cards.materialCardBack.src,
    cards.greenCardFront.src,
    cards.greenCardBack.src,
    cards.blackCardFront.src,
    cards.blackCardBack.src,
    cards.materialCardFront.src,
    cards.materialCardBack.src,
  ];
  return (
    <div className="fixed  flex h-screen w-full flex-col items-center justify-center overflow-hidden">
      {/* Background with improved overlay */}
      <div className="absolute inset-0 z-0">
        <ThreeDMarquee className="pointer-events-none h-full w-full" images={images} />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/80 via-black/60 to-black/80 backdrop-blur-sm" />
      </div>

      {/* Content Container with better spacing */}
      <div className="relative z-20 flex w-full max-w-4xl flex-col items-center px-6">
        {/* Logo */}
        <Image src={logo} alt="Flex Card" className="h-auto w-48 md:w-64 mb-12" priority />

        {/* Heading */}
        <h2 className="mx-auto max-w-4xl text-center text-3xl font-bold text-balance text-white md:text-5xl lg:text-6xl">
          Coming
          <span
            className="relative inline-block ml-3 rounded-xl bg-blue-600/40 px-6 py-2 text-white backdrop-blur-md
            shadow-lg shadow-blue-900/20 border border-blue-500/20"
          >
            Soon
            <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-blue-500 rounded-full transform translate-y-4"></span>
          </span>
        </h2>

        {/* Description with better width constraints */}
        <p className="mx-auto max-w-2xl py-8 text-center text-base text-neutral-200 md:text-lg">
          We&apos;re working hard behind the scenes to bring you an exciting new experience with Flex Card — a smarter,
          more flexible way to manage your digital world.
        </p>

        {/* Email Signup Form - New Addition */}
        <div className="w-full max-w-md mt-6">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 w-full">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-grow px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-md"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
              >
                Notify Me
              </button>
            </form>
          ) : (
            <div className="text-center py-3 px-4 bg-green-600/20 border border-green-500/30 rounded-lg backdrop-blur-md">
              <p className="text-white">Thanks! We&apos;ll notify you when we launch.</p>
            </div>
          )}
        </div>

        {/* Social Media Icons - New Addition */}
        <div className="flex gap-6 mt-12">
          {["twitter", "instagram", "linkedin"].map((social) => (
            <Link
              key={social}
              href={`#${social}`}
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label={social}
            >
              <div className="w-6 h-6 flex items-center justify-center">
                {/* Social icon placeholders */}
                <div className="w-full h-full rounded-full bg-white/20"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
