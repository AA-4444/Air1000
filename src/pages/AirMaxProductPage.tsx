"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";

import { CappenNavbar } from "@/components/CappenNavbar";

import shoe1 from "@/assets/1.png";
import shoe2 from "@/assets/2.png";
import shoe3 from "@/assets/3.png";
import shoe4 from "@/assets/4.png";
import shoe5 from "@/assets/5.png";
import shoe6 from "@/assets/6.png";

const SHOES = [shoe1, shoe2, shoe3, shoe4, shoe5, shoe6];

type Tab = "description" | "materials" | "delivery";
type Gender = "men" | "women";

const MEN_SIZES_ROW1 = ["5", "6", "7", "8"];
const MEN_SIZES_ROW2 = ["9", "10", "11", "12"];
const WOMEN_SIZES_ROW1 = ["4", "5", "6", "7"];
const WOMEN_SIZES_ROW2 = ["8", "9", "10", "11"];

const AirMaxProductPage = () => {
  const [index, setIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<Tab>("description");
  const [gender, setGender] = useState<Gender>("men");
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const updateIndexFromX = useCallback((clientX: number, rect: DOMRect) => {
	const x = clientX - rect.left;
	const ratio = Math.min(Math.max(x / rect.width, 0), 1);
	const newIndex = Math.min(SHOES.length - 1, Math.floor(ratio * SHOES.length));
	setIndex(newIndex);
  }, []);

  const currentSizesRows =
	gender === "men"
	  ? [MEN_SIZES_ROW1, MEN_SIZES_ROW2]
	  : [WOMEN_SIZES_ROW1, WOMEN_SIZES_ROW2];

  const handleBuy = () => {
	if (!selectedSize) return;
	alert(`Air Max 1000 — ${gender.toUpperCase()} — US ${selectedSize}`);
  };

  return (
	<main className="min-h-screen bg-background text-foreground">
	  <CappenNavbar />

	  {/* чуть меньше отступы на телефоне */}
	  <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 pt-20 md:pt-28 pb-8 md:pb-16">
		<div className="flex flex-col lg:flex-row gap-6 md:gap-10 lg:gap-16 items-start lg:items-center">
		  {/* LEFT — фото, центрированное и компактнее на мобилке */}
		  <motion.div
			initial={{ opacity: 0, x: -40 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.8 }}
			className="flex-1 flex items-center justify-center"
		  >
			<div
			  className="
				relative 
				w-full 
				max-w-xs
				sm:max-w-sm
				md:max-w-md
				lg:max-w-[1100px]
				aspect-[4/5]
				md:aspect-[3/4]
				cursor-ew-resize 
				select-none
			  "
			  onMouseMove={(e) => {
				const rect = e.currentTarget.getBoundingClientRect();
				updateIndexFromX(e.clientX, rect);
			  }}
			  onTouchMove={(e) => {
				const t = e.touches[0];
				if (!t) return;
				const rect = e.currentTarget.getBoundingClientRect();
				updateIndexFromX(t.clientX, rect);
			  }}
			>
			<img
			  src={SHOES[index]}
			  alt="Air Max 1000"
			  className="
				w-full 
				h-full 
				object-contain 
			
				/* SCALE */
				scale-[1.05]          
				sm:scale-[1.1]
				md:scale-[1.2]
				lg:scale-[1.3]
			
				/* POSITION FIX */
				translate-x-[14%]     
				sm:translate-x-[10%]  
				md:translate-x-0      
			  "
			/>

			  <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
				drag / rotate
			  </div>
			</div>
		  </motion.div>

		  {/* RIGHT — панель, более плотная на мобилке */}
		  <motion.div
			initial={{ opacity: 0, x: 40 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.8 }}
			className="flex-1 w-full max-w-xl space-y-3 md:space-y-5"
		  >
			{/* табы */}
			<div className="border border-dashed border-[#b766ff40] rounded-[10px] overflow-hidden">
			  <div className="flex">
				{[
				  { id: "description", label: "Description" },
				  { id: "materials", label: "Materials" },
				  { id: "delivery", label: "Delivery" },
				].map((tab) => {
				  const id = tab.id as Tab;
				  const active = activeTab === id;
				  return (
					<button
					  key={id}
					  onClick={() => setActiveTab(id)}
					  className={[
						"flex-1 py-2 px-2 md:px-3 font-mono text-[9px] md:text-[11px] uppercase tracking-[0.25em] border-r border-dashed border-[#b766ff40] last:border-r-0",
						active
						  ? "bg-[#b766ff] text-black"
						  : "bg-transparent text-foreground/70 hover:bg-white/5",
					  ].join(" ")}
					>
					  {tab.label}
					</button>
				  );
				})}
			  </div>
			</div>

			{/* таблица */}
			<div className="border border-dashed border-[#b766ff40] text-[9px] md:text-[11px] font-mono uppercase tracking-[0.22em]">
			  {/* PRODUCT DETAILS */}
			  <div className="grid grid-cols-[115px,1fr] md:grid-cols-[140px,1fr] border-b border-dashed border-[#b766ff40]">
				<div className="px-3 md:px-4 py-3 text-muted-foreground">
				  Product details
				</div>
				<div className="px-3 md:px-4 py-3 space-y-2">
				  <div className="text-muted-foreground">Drop 01 · 12 / 15 / 24</div>
				  {activeTab === "description" && (
					<p className="normal-case tracking-normal text-[11px] md:text-xs text-foreground/80 max-w-md">
					  Inspired by the rhythm of the city, Air Max 1000 blends sculpted
					  foam, seamless construction and a bold silhouette to create a
					  sneaker built for everyday momentum.
					</p>
				  )}
				  {activeTab === "materials" && (
					<p className="normal-case tracking-normal text-[11px] md:text-xs text-foreground/80 max-w-md">
					  Lightweight knit upper, responsive React+ foam midsole and
					  carbon-infused outsole for energy return and daily durability.
					</p>
				  )}
				  {activeTab === "delivery" && (
					<p className="normal-case tracking-normal text-[11px] md:text-xs text-foreground/80 max-w-md">
					  Worldwide shipping. Orders dispatched within 3–4 business days.
					  30-day returns on unworn pairs.
					</p>
				  )}
				</div>
			  </div>

			  {/* GENDER */}
			  <div className="grid grid-cols-[115px,1fr] md:grid-cols-[140px,1fr] border-b border-dashed border-[#b766ff40]">
				<div className="px-3 md:px-4 py-3 text-muted-foreground">Gender</div>
				<div className="px-3 md:px-4 py-3 flex gap-2">
				  {(["men", "women"] as Gender[]).map((g) => {
					const active = gender === g;
					return (
					  <button
						key={g}
						onClick={() => {
						  setGender(g);
						  setSelectedSize(null);
						}}
						className={[
						  "px-3 md:px-4 h-8 rounded-[6px] text-[9px] md:text-[11px] tracking-[0.2em]",
						  active
							? "bg-[#b766ff] text-black"
							: "bg-transparent text-foreground/70 border border-dashed border-[#b766ff40] hover:bg:white/5",
						].join(" ")}
					  >
						{g.toUpperCase()}
					  </button>
					);
				  })}
				</div>
			  </div>

			  {/* SIZE */}
			  <div className="grid grid-cols-[115px,1fr] md:grid-cols-[140px,1fr] border-b border-dashed border-[#b766ff40]">
				<div className="px-3 md:px-4 py-3 text-muted-foreground flex items-center">
				  Size
				</div>
				<div className="px-3 md:px-4 py-3">
				  <div className="flex justify-between mb-2">
					<span className="text-muted-foreground">US sizes</span>
					<button className="text-muted-foreground hover:text-foreground">
					  Size guide
					</button>
				  </div>

				  <div className="space-y-2">
					{currentSizesRows.map((row, rowIdx) => (
					  <div key={rowIdx} className="grid grid-cols-4 gap-1.5">
						{row.map((size) => {
						  const active = selectedSize === size;
						  return (
							<button
							  key={size}
							  onClick={() => setSelectedSize(size)}
							  className={[
								"h-8 md:h-9 rounded-none border border-dashed border-[#b766ff40] text-[9px] md:text-[11px] tracking-wide",
								active
								  ? "bg-[#b766ff] text-black"
								  : "bg-transparent text-foreground/80 hover:bg-white/5",
							  ].join(" ")}
							>
							  {size}
							</button>
						  );
						})}
					  </div>
					))}
				  </div>
				</div>
			  </div>

			  {/* COLOR */}
			  <div className="grid grid-cols-[115px,1fr] md:grid-cols-[140px,1fr]">
				<div className="px-3 md:px-4 py-3 text-muted-foreground flex items-center">
				  Color
				</div>
				<div className="px-3 md:px-4 py-3 flex items-center gap-3">
				  <div className="h-7 w-7 md:h-8 md:w-8 rounded-[6px] overflow-hidden border border-dashed border-[#b766ff40]">
					<img
					  src={shoe1}
					  alt="Violet Dream"
					  className="w-full h-full object-cover"
					/>
				  </div>
				  <span className="text-[9px] md:text-[11px] tracking-[0.2em]">
					Violet Dream
				  </span>
				</div>
			  </div>
			</div>

			{/* BUY NOW */}
			<button
			  onClick={handleBuy}
			  disabled={!selectedSize}
			  className={[
				"mt-4 md:mt-6 w-full h-10 md:h-12 font-mono text-[9px] md:text-[11px] uppercase tracking-[0.3em]",
				selectedSize
				  ? "bg-[#b766ff] text-black hover:bg-[#c882ff] transition-colors"
				  : "bg-white/5 text-muted-foreground cursor-not-allowed",
			  ].join(" ")}
			>
			  {selectedSize ? "Buy now" : "Select size to buy"}
			</button>
		  </motion.div>
		</div>
	  </div>
	</main>
  );
};

export default AirMaxProductPage;