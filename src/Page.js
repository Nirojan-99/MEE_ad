import React from 'react'
import { Route, Routes } from "react-router";
import Home from './pages/Home'
import NER from './pages/NER';
import OCR from './pages/OCR';
import Sentiment from './pages/Sentiment';
import Prediction from './pages/Prediction';

export default function Page() {
  return (
    <Routes>
        <Route path="/ner-pricing" element={<NER />} />
        <Route path="/ocr-pricing" element={<OCR />} />
        <Route path="/sentiment_analysis-pricing" element={<Sentiment />} />
        <Route path="/predictive_text-pricing" element={<Prediction />} />
        <Route path="/" element={<Home />} />
    </Routes>
  )
}
