import React from 'react'
import HeroSection from './sections/HeroSection'
import SwamaniPreview from './sections/SwamaniPreview'
import DarshanTimingWidget from './sections/DarshanTimingWidget'
import QuickActions from './sections/QuickActions'
import AboutShyam from './sections/AboutShyam'
import PrasadSection from './sections/PrasadSection'
import BhajanSection from './sections/BhajanSection'
import FestivalSection from './sections/FestivalSection'
import GalleryPreview from './sections/GalleryPreview'
import TravelPreview from './sections/TravelPreview'
import BlogPreview from './sections/BlogPreview'
import ContactStrip from './sections/ContactStrip'
import './Home.css'

export default function Home({ onContactClick }) {
  return (
    <div className="home-page">
      <HeroSection onContactClick={onContactClick} />
      <SwamaniPreview />
      <DarshanTimingWidget />
      <QuickActions />
      <AboutShyam />
      <PrasadSection />
      <BhajanSection />
      <FestivalSection />
      <GalleryPreview />
      <TravelPreview />
      <BlogPreview />
      <ContactStrip onContactClick={onContactClick} />
    </div>
  )
}
