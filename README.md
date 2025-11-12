<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body>
  <h1>🌐 Live Demo</h1>
  <p>
    Check it out on Vercel:
    <a href="https://portfolio-five-sand-23.vercel.app/" target="_blank">
      https://portfolio-five-sand-23.vercel.app/
    </a>
  </p>
  <h1>💼 Rashid Visda – Portfolio</h1>
  <p>
    A modern and interactive developer portfolio built with <strong>Next.js</strong>, 
    <strong>TypeScript</strong>, and <strong>Tailwind CSS 4</strong>.  
    It showcases projects, skills, achievements, and live API data from GitHub and WakaTime.
    The layout follows a <strong>bento grid design</strong> with smooth animations, responsive scaling,
    and dynamic highlights to emphasize key sections.
  </p>
  <h2>✨ Features</h2>
  <ul>
    <li><strong>Bento Grid Layout</strong>: Visually balanced sections showcasing projects, skills, and achievements.</li>
    <li><strong>Animated Services</strong>: Highlighted one-by-one service animation using Framer Motion–style transitions.</li>
    <li><strong>Dynamic GitHub Stats</strong>: Fetched in real-time via GitHub API using personal access keys.</li>
    <li><strong>WakaTime Integration</strong>: Displays coding activity, top languages, and editors via the WakaTime API.</li>
    <li><strong>Charts</strong>: Data visualizations powered by Chart.js and React-Chartjs-2.</li>
    <li><strong>Responsive Design</strong>: Fully optimized for all screen sizes with Tailwind CSS v4.</li>
    <li><strong>Loading Skeletons</strong>: Smooth UI experience while fetching data.</li>
    <li><strong>Lucide Icons</strong>: Clean and scalable icons for UI elements and categories.</li>
    <li><strong>Next.js Top Loader</strong>: Elegant progress indicator for navigation and page transitions.</li>
  </ul>
  <h3>🔑 Environment Variables</h3>
  <ul>
    <li><code>GITHUB_API_KEY</code> – GitHub personal access token.</li>
    <li><code>GITHUB_USERNAME</code> – Your GitHub username for API fetches.</li>
    <li><code>WAKATIME_API_KEY</code> – WakaTime API key for coding activity stats.</li>
    <li><code>WAKATIME_USERNAME</code> – Your WakaTime username for data fetch.</li>
  </ul>
  <h3>🧠 Tech Stack</h3>
  <ul>
    <li><strong>Framework:</strong> Next.js 15</li>
    <li><strong>Language:</strong> TypeScript</li>
    <li><strong>Styling:</strong> Tailwind CSS 4</li>
    <li><strong>Animation:</strong> Motion (Framer Motion–compatible library)</li>
    <li><strong>UI Components:</strong> Lucide React Icons</li>
    <li><strong>Charts:</strong> Chart.js + React-Chartjs-2</li>
    <li><strong>Carousel:</strong> Keen Slider</li>
    <li><strong>Date Handling:</strong> Day.js</li>
    <li><strong>Loading States:</strong> React Loading Skeleton</li>
  </ul>
  <h3>⚙️ Prerequisites</h3>
  <ul>
    <li>Node.js (version 18 or higher)</li>
    <li>NPM or Yarn</li>
  </ul>
  <h3>🚀 Steps to Run Locally</h3>
  <ol>
    <li>
      Clone the repository:
      <pre><code>git clone https://github.com/yourusername/portfolio.git</code></pre>
    </li>
    <li>
      Navigate to the project directory:
      <pre><code>cd portfolio</code></pre>
    </li>
    <li>
      Install dependencies:
      <pre><code>npm install</code></pre>
    </li>
    <li>
      Add your environment variables in a <code>.env.local</code> file:
      <pre><code>
GITHUB_API_KEY=your_github_api_key
GITHUB_USERNAME=your_github_username
WAKATIME_API_KEY=your_wakatime_api_key
WAKATIME_USERNAME=your_wakatime_username
      </code></pre>
    </li>
    <li>
      Start the development server:
      <pre><code>npm run dev</code></pre>
      <p>
        This will open the app at
        <a href="http://localhost:3000" target="_blank">
          http://localhost:3000
        </a>.
      </p>
    </li>
  </ol>
  <h2>🧩 Bento Grid Layout</h2>
  <p>
    The portfolio uses a responsive 2×3 bento grid design with motion-based highlights.
    Example section:
  </p>
  <pre><code>
&lt;div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"&gt;
  &lt;Card title="Projects Showcase" /&gt;
  &lt;Card title="About Me" /&gt;
  &lt;Card title="Skills & Tools" /&gt;
  &lt;Card title="Achievements" /&gt;
  &lt;Card title="Services" /&gt;
&lt;/div&gt;
  </code></pre>
  <h2>🤝 Contributing</h2>
  <p>Contributions, suggestions, or improvements are welcome!</p>
  <h3>How to contribute:</h3>
  <ol>
    <li>Fork the repository.</li>
    <li>Create a new branch for your feature or fix.</li>
    <li>Make your changes and test them locally.</li>
    <li>Submit a pull request with a detailed description.</li>
  </ol>
  <h2>📬 Contact</h2>
  <p>
    For questions or collaborations, feel free to reach out via email:
    <a href="mailto:rashidvisda@gmail.com">rashidvisda@gmail.com</a>.
  </p>
</body>
</html>
