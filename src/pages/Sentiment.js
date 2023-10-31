import React from "react";
import useWindowDimensions from "../Utils/dimention";
import { Box, Button, Grid } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";

export default function Sentiment() {
  const { height, width } = useWindowDimensions();
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
            <div className="rounded-md bg-white shadow-md hover:scale-110 transition-all">
              <div className="bg-[#526D82] flex flex-col items-center justify-center py-6 rounded-t-md">
                <div className="font-bold text-white text-2xl">Basic</div>
                <div className="font-semibold text-slate-300 text-lg">$0.0</div>
              </div>
              <div className="px-5 py-10">
                <div>
                  <DoneIcon
                    sx={{
                      color: "green",
                      fontSize: 29,
                      p: 0.5,
                      borderRadius: 5,
                      bgcolor: "#eee",
                    }}
                  />
                  <span className="font-semibold text-[14px] ml-3 text-[#333]">
                    300 Req per month
                  </span>
                </div>
                <div className="mt-2">
                  <DoneIcon
                    sx={{
                      color: "green",
                      fontSize: 29,
                      p: 0.5,
                      borderRadius: 5,
                      bgcolor: "#eee",
                    }}
                  />
                  <span className="font-semibold text-[14px] ml-3 text-[#333]">
                    Cancel anytime
                  </span>
                </div>
                <div className="mt-2">
                  <CloseIcon
                    sx={{
                      color: "red",
                      fontSize: 29,
                      p: 0.5,
                      borderRadius: 5,
                      bgcolor: "#eee",
                    }}
                  />
                  <span className="font-semibold text-[14px] ml-3 text-[#333]">
                    Unlimited Support
                  </span>
                </div>
                <div className="mt-2">
                  <CloseIcon
                    sx={{
                      color: "red",
                      fontSize: 29,
                      p: 0.5,
                      borderRadius: 5,
                      bgcolor: "#eee",
                    }}
                  />
                  <span className="font-semibold text-[14px] ml-3 text-[#333]">
                    High Speed
                  </span>
                </div>
              </div>
              <div className="px-3 pb-3">
                <Button fullWidth variant="outlined">
                  SELECT
                </Button>
              </div>
            </div>
          </Grid>
          <Grid item xs={10} md={6} lg={2.5}>
          <div className="rounded-md bg-white shadow-md hover:scale-110 transition-all">
              <div className="bg-[#526D82] flex flex-col items-center justify-center py-6 rounded-t-md">
                <div className="font-bold text-white text-2xl">Premium</div>
                <div className="font-semibold text-slate-300 text-lg">$9.9</div>
              </div>
              <div className="px-5 py-10">
                <div>
                  <DoneIcon
                    sx={{
                      color: "green",
                      fontSize: 29,
                      p: 0.5,
                      borderRadius: 5,
                      bgcolor: "#eee",
                    }}
                  />
                  <span className="font-semibold text-[14px] ml-3 text-[#333]">
                    Unlimited Req per Month
                  </span>
                </div>
                <div className="mt-2">
                  <DoneIcon
                    sx={{
                      color: "green",
                      fontSize: 29,
                      p: 0.5,
                      borderRadius: 5,
                      bgcolor: "#eee",
                    }}
                  />
                  <span className="font-semibold text-[14px] ml-3 text-[#333]">
                    Cancel anytime
                  </span>
                </div>
                <div className="mt-2">
                  <DoneIcon
                    sx={{
                      color: "green",
                      fontSize: 29,
                      p: 0.5,
                      borderRadius: 5,
                      bgcolor: "#eee",
                    }}
                  />
                  <span className="font-semibold text-[14px] ml-3 text-[#333]">
                    Unlimited Support
                  </span>
                </div>
                <div className="mt-2">
                  <DoneIcon
                    sx={{
                      color: "green",
                      fontSize: 29,
                      p: 0.5,
                      borderRadius: 5,
                      bgcolor: "#eee",
                    }}
                  />
                  <span className="font-semibold text-[14px] ml-3 text-[#333]">
                    High Speed
                  </span>
                </div>
              </div>
              <div className="px-3 pb-3">
                <Button fullWidth variant="outlined">
                  SELECT
                </Button>
              </div>
            </div>
          </Grid>
          <Grid item xs={10} md={6} lg={2.5}>
            <div className="rounded-md bg-white shadow-md hover:scale-110 transition-all">
              <div className="bg-[#526D82] flex flex-col items-center justify-center py-6 rounded-t-md">
                <div className="font-bold text-white text-2xl">Standard</div>
                <div className="font-semibold text-slate-300 text-lg">$5.9</div>
              </div>
              <div className="px-5 py-10">
                <div>
                  <DoneIcon
                    sx={{
                      color: "green",
                      fontSize: 29,
                      p: 0.5,
                      borderRadius: 5,
                      bgcolor: "#eee",
                    }}
                  />
                  <span className="font-semibold text-[14px] ml-3 text-[#333]">
                    300 Req per Day
                  </span>
                </div>
                <div className="mt-2">
                  <DoneIcon
                    sx={{
                      color: "green",
                      fontSize: 29,
                      p: 0.5,
                      borderRadius: 5,
                      bgcolor: "#eee",
                    }}
                  />
                  <span className="font-semibold text-[14px] ml-3 text-[#333]">
                    Cancel anytime
                  </span>
                </div>
                <div className="mt-2">
                  <DoneIcon
                    sx={{
                      color: "green",
                      fontSize: 29,
                      p: 0.5,
                      borderRadius: 5,
                      bgcolor: "#eee",
                    }}
                  />
                  <span className="font-semibold text-[14px] ml-3 text-[#333]">
                    limited Support
                  </span>
                </div>
                <div className="mt-2">
                  <CloseIcon
                    sx={{
                      color: "red",
                      fontSize: 29,
                      p: 0.5,
                      borderRadius: 5,
                      bgcolor: "#eee",
                    }}
                  />
                  <span className="font-semibold text-[14px] ml-3 text-[#333]">
                    High Speed
                  </span>
                </div>
              </div>
              <div className="px-3 pb-3">
                <Button fullWidth variant="outlined">
                  SELECT
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
}
