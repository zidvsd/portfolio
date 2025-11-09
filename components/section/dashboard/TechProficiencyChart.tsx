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
    "#60a5fa",
    "#34d399",
    "#f59e0b",
    "#f87171",
    "#a78bfa",
  ];

  // Detect dark mode from Tailwind "dark" class
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const html = document.documentElement;

    const updateTheme = () => {
      setIsDark(html.classList.contains("dark"));
    };

    updateTheme(); // initial check

    const observer = new MutationObserver(updateTheme);
    observer.observe(html, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  const textColor = isDark ? "#f5f5f5" : "#0f172a";
  const gridColor = isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)";

  const chartData = {
    labels,
    datasets: [
      {
        label: "Proficiency",
        data: values,
        backgroundColor: labels.map(
          (_, i) => gradientColors[i % gradientColors.length]
        ),
        borderRadius: 10,
        barThickness: 30,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: isDark ? "rgba(31,41,55,0.95)" : "rgba(0,0,0,0.85)",
        titleColor: "#fff",
        bodyColor: "#f3f4f6",
        borderColor: isDark ? "#4b5563" : "#d1d5db",
        borderWidth: 1,
        callbacks: {
          label: (context) => `${context.parsed.y}%`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        grid: { color: gridColor },
        ticks: {
          color: textColor,
          font: { size: 13, weight: 500 },
        },
      },
      x: {
        grid: { display: false },
        ticks: {
          color: textColor,
          font: { size: 14, weight: 600 },
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
        Most Used Technologies
      </h2>
      <div className="w-full h-[300px]">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
}
