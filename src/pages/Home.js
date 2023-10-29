import React from "react";
import useWindowDimensions from "../Utils/dimention";
import { Box, Grid } from "@mui/material";
import ner from "../assets/ner.png";
import ocr from "../assets/ocr.png";
import next from "../assets/next.png";
import senti from "../assets/senti.png";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { height, width } = useWindowDimensions();
  const navigate = useNavigate();
  const goToPricing = (path) => {
    navigate(path);
  };
  return (
    <Box height={height} sx={{ flexDirection: "row" }}>
      <div className=" flex-1 h-full w-full items-center justify-center flex lg:px-10 md:px-5 px-2 py-2">
        <Grid
          container
          spacing={2}
          gap={2}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Grid item xs={10} md={6} lg={2.5}>
            <div className="bg-[#526D82] shadow-md rounded-md py-2 px-4 flex items-center flex-col hover:scale-110 transition-all">
              <div className="font-bold font-sans text-[19px] text-center text-[#00A9FF] mb-6 ">
                Key Word Extraction - TAMIL
              </div>

              <img
                className="h-16 w-auto bg-cover bg-[#27374D] p-2 rounded-sm"
                src={ner}
              />
              <div className="mt-6 text-[#9DB2BF] font-semibold text-[14px] text-center">
                A Tamil NER API for e-commerce, identifies named entities like
                products, brands, and locations in Tamil language text,
                enhancing search and recommendation systems.
              </div>
              <div className="w-full mt-3">
                <button
                  onClick={() => goToPricing("/ner-pricing")}
                  className="w-full py-2 border rounded-md border-[#27374D] font-bold text-[#27374D] hover:bg-[#27374D] hover:text-white"
                >
                  GET
                </button>
              </div>
            </div>
          </Grid>
          <Grid item xs={10} md={6} lg={2.5}>
            <div className="bg-[#526D82] shadow-md rounded-md py-2 px-4 flex items-center flex-col hover:scale-110 transition-all">
              <div className="font-bold font-sans text-[19px] text-center text-[#00A9FF] mb-6 ">
                Sentiment Analysis - TAMIL - Comments
              </div>
              <img
                className="h-[70px] w-auto bg-cover bg-[#27374D] p-2 rounded-sm"
                src={senti}
              />
              <div className="mt-6 text-[#9DB2BF] font-semibold text-[14px] text-center">
                A Sentiment Analysis API for Tamil in the e-commerce domain
                analyzes customer comments in Tamil language to determine
                sentiment, aiding businesses in understanding customer feedback.
              </div>
              <div className="w-full mt-3">
                <button
                  onClick={() => goToPricing("/sentiment_analysis-pricing")}
                  className="w-full py-2 border rounded-md border-[#27374D] font-bold text-[#27374D] hover:bg-[#27374D] hover:text-white"
                >
                  GET
                </button>
              </div>
            </div>
          </Grid>
          <Grid item xs={10} md={6} lg={2.5}>
            <div className="bg-[#526D82] shadow-md rounded-md py-2 px-4 flex items-center flex-col hover:scale-110 transition-all">
              <div className="font-bold font-sans text-[19px] text-center text-[#00A9FF] mb-6 ">
                Next Word Prediction - TAMIL
              </div>

              <img
                className="h-12 w-auto bg-cover bg-[#27374D] p-2 rounded-sm"
                src={next}
              />
              <div className="mt-6 text-[#9DB2BF] font-semibold text-[14px] text-center">
                A Tamil Next Word Prediction API for e-commerce predicts and
                suggests the most relevant words or phrases to enhance search
                and product listings in the Tamil language, boosting user
                experience.
              </div>
              <div className="w-full mt-3">
                <button
                  onClick={() => goToPricing("/predictive_text-pricing")}
                  className="w-full py-2 border rounded-md border-[#27374D] font-bold text-[#27374D] hover:bg-[#27374D] hover:text-white"
                >
                  GET
                </button>
              </div>
            </div>
          </Grid>
          <Grid item xs={10} md={6} lg={2.5}>
            <div className="bg-[#526D82] shadow-md rounded-md py-2 px-4 flex items-center flex-col hover:scale-110 transition-all">
              <div className="font-bold font-sans text-[19px] text-center text-[#00A9FF] mb-6 ">
                Image to Text - TAMIL
              </div>

              <img
                className="h-16 w-auto bg-cover bg-[#27374D] p-2 rounded-sm"
                src={ocr}
              />
              <div className="mt-6 text-[#9DB2BF] font-semibold text-[14px] text-center">
                An image-to-text API for Tamil in the e-commerce domain
                efficiently converts Tamil text within product images into
                machine-readable text for seamless product catalog management.
              </div>
              <div className="w-full mt-3">
                <button
                  onClick={() => goToPricing("/ocr-pricing")}
                  className="w-full py-2 border rounded-md border-[#27374D] font-bold text-[#27374D] hover:bg-[#27374D] hover:text-white"
                >
                  GET
                </button>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
}
