"use client";

import * as Slider from "@radix-ui/react-slider";
import { formatPrice } from "@/lib/utils";

interface PriceRangeSliderProps {
  min: number;
  max: number;
  value: [number, number];
  onChange: (value: [number, number]) => void;
}

export default function PriceRangeSlider({
  min,
  max,
  value,
  onChange,
}: PriceRangeSliderProps) {
  return (
    <div>
      <Slider.Root
        className="relative flex h-5 w-full touch-none select-none items-center"
        min={min}
        max={max}
        step={10}
        value={value}
        onValueChange={(v) => onChange(v as [number, number])}
      >
        <Slider.Track className="relative h-1 grow rounded-full bg-gray-200">
          <Slider.Range className="absolute h-full rounded-full bg-primary" />
        </Slider.Track>
        <Slider.Thumb className="block h-4 w-4 rounded-full bg-primary shadow-md focus:outline-none focus:ring-2 focus:ring-primary/50" />
        <Slider.Thumb className="block h-4 w-4 rounded-full bg-primary shadow-md focus:outline-none focus:ring-2 focus:ring-primary/50" />
      </Slider.Root>
      <div className="mt-2 flex justify-between text-sm text-gray-600">
        <span>{formatPrice(value[0])}</span>
        <span>{formatPrice(value[1])}</span>
      </div>
    </div>
  );
}
