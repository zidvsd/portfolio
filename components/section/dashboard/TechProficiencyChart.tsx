"use client";

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useEffect, useState } from "react";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

interface Tech {
  name: string;
  level: number;
}

interface TechProficiencyChartProps {
  data: Tech[];
}

export default function TechProficiencyChart({
  data,
}: TechProficiencyChartProps) {
  const labels = data.map((tech) => tech.name);
  const values = data.map((tech) => tech.level);

  const gradientColors = [
    "#60a5fa", // blue
    "#34d399", // green
    "#f59e0b", // yellow
    "#f87171", // red
    "#a78bfa", // violet
  ];

  // 🌓 Detect dark mode dynamically
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDark(media.matches);
    const listener = (e: MediaQueryListEvent) => setIsDark(e.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  const textColor = isDark ? "#f3f4f6" : "#1f2937"; // neutral-100 for dark, neutral-800 for light
  const gridColor = isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)";

  const chartData = {
    labels,
    datasets: [
      {
        label: "Proficiency",
        data: values,
        backgroundColor: gradientColors.map(
          (_, i) => gradientColors[i % gradientColors.length]
        ),
        borderRadius: 10,
        barThickness: 18,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    indexAxis: "y",
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: isDark ? "rgba(31,41,55,0.9)" : "rgba(0,0,0,0.4)",
        titleColor: "#fff",
        bodyColor: "#fff",
        borderColor: isDark ? "#4b5563" : "#e5e7eb",
        borderWidth: 1,
        callbacks: {
          label: (context) => `${context.parsed.x}%`,
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        max: 100,
        grid: { color: gridColor },
        ticks: { color: textColor, font: { size: 13 } },
      },
      y: {
        grid: { display: false },
        ticks: {
          color: textColor,
          font: { size: 14, weight: 500 },
        },
      },
    },
    animation: {
      duration: 1200,
      easing: "easeOutQuart",
    },
  };

  return (
    <div className="p-6 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-sm">
      <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
        Tech Stack Proficiency
      </h2>
      <div className="w-full h-[280px]">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
}
