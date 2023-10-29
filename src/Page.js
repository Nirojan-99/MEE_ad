import React from 'react'
import { Navigate, Route, Routes } from "react-router";
import Home from './pages/Home'
import NER from './pages/NER';
import OCR from './pages/OCR';
import Sentiment from './pages/Sentiment';
import Predicition from './pages/Predicition';

export default function Page() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ner-pricing" element={<NER />} />
        <Route path="/ocr-pricing" element={<OCR />} />
        <Route path="/sentiment_analysis-pricing" element={<Sentiment />} />
        <Route path="/predictive_text-pricing" element={<Predicition />} />
    </Routes>
  )
}
