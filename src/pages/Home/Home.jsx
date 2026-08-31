import React from 'react'
import HeroSection from './sections/HeroSection'
import LiveDarshanPreview from './sections/LiveDarshanPreview'
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

export default function Home() {
  return (
    <div className="home-page">
      <HeroSection />
      <LiveDarshanPreview />
      <DarshanTimingWidget />
      <QuickActions />
      <AboutShyam />
      <PrasadSection />
      <BhajanSection />
      <FestivalSection />
      <GalleryPreview />
      <TravelPreview />
      <BlogPreview />
      <ContactStrip />
    </div>
  )
}
