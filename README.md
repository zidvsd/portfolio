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
  <h1>💼 Rashid Visda – Developer Portfolio</h1>
  <p>
    A modern, dynamic, and API-powered personal portfolio built with <strong>Next.js 15</strong>,
    <strong>TypeScript</strong>, and <strong>Tailwind CSS 4</strong>.  
    It showcases my skills, projects, achievements, and analytics as a <strong>Web Developer</strong>, 
    <strong>Web Designer</strong>, and <strong>Data Analyst</strong>.
    The site is <strong>light/dark mode friendly</strong> and designed with a minimal bento-inspired layout that brings a professional and interactive presentation.
  </p>
  <h2>✨ Features</h2>
  <ul>
    <li><strong>🌗 Light/Dark Mode</strong>: Fully adaptive UI with smooth theme transitions.</li>
    <li><strong>📦 Bento Grid Design</strong>: Featured sections highlighting projects, skills, and achievements in a clean, 2×3 grid layout.</li>
    <li><strong>🧠 Dynamic Content</strong>: Real-time data fetching from GitHub and WakaTime APIs.</li>
    <li><strong>📈 Interactive Charts</strong>: Visualized analytics of my most used technologies and coding activity using Chart.js.</li>
    <li><strong>🔍 Smart Filtering</strong>: Search and filter badges or certificates on the Achievements page.</li>
    <li><strong>📬 Contact Form</strong>: Direct-to-email submission powered by mail integration.</li>
    <li><strong>🗺️ Google Maps Embed</strong>: Displays my general location within the Contact page.</li>
    <li><strong>💬 FAQ Section</strong>: Expandable dropdowns for quick answers to common questions.</li>
    <li><strong>⚡ Fast Performance</strong>: Built with Next.js 15 and Turbopack for optimal load times.</li>
  </ul>
  <h2>📁 Pages Overview</h2>
  <h3>🏠 Home Page</h3>
  <ul>
    <li>Displays featured <strong>tech stacks</strong> and my <strong>bento grid layout</strong>.</li>
    <li>Highlights my main services: <strong>Web</strong>, <strong>Mobile</strong>, <strong>Analytics</strong>, <strong>Design</strong>, <strong>Branding</strong>, and <strong>SEO</strong>.</li>
    <li>Includes subtle hover animations and blur effects to sequentially highlight each service.</li>
  </ul>

  <h3>👤 About Page</h3>
  <ul>
    <li>Contains information about my background, personality, and what I do.</li>
    <li>Features separate <strong>Work</strong> and <strong>Education</strong> sections.</li>
    <li>Clean, minimalist presentation that adapts to both light and dark themes.</li>
  </ul>
  <h3>🏆 Achievements Page</h3>
  <ul>
    <li>Displays all <strong>badges</strong> and <strong>certificates</strong> using images hosted on Google Drive.</li>
    <li>Includes a <strong>search and filter system</strong> allowing users to toggle between “Certificates” and “Badges”.</li>
    <li>Each item includes details like title, issuer, and date earned.</li>
  </ul>
  <h3>💻 Projects Page</h3>
  <ul>
    <li>Automatically fetches my <strong>top 6 pinned repositories</strong> from the GitHub API.</li>
    <li>Displays <strong>topics/tags</strong> to show technologies used in each project.</li>
    <li>Each project links to a <strong>dynamic page</strong> that fetches directly from the project’s <strong>README</strong> file.</li>
    <li>Ensures visitors can view project details and technologies in a seamless and consistent design.</li>
  </ul>
  <h3>📊 Dashboard Page</h3>
  <ul>
    <li>Combines analytics from <strong>GitHub</strong> and <strong>WakaTime</strong>.</li>
    <li>Visualizes:
      <ul>
        <li>Most used programming languages</li>
        <li>Editor usage</li>
        <li>GitHub activity stats</li>
      </ul>
    </li>
    <li>Uses <strong>Chart.js</strong> and <strong>React-Chartjs-2</strong> for rendering beautiful bar and doughnut charts.</li>
  </ul>
  <h3>📞 Contact Page</h3>
  <ul>
    <li>Includes a <strong>direct email form</strong> that allows users to send messages straight to my inbox.</li>
    <li>Embeds <strong>Google Maps</strong> for my general location display.</li>
    <li>Contains all <strong>social links</strong> (GitHub, LinkedIn, etc.) with interactive hover effects.</li>
    <li>Features a <strong>FAQ dropdown</strong> section for quick, organized access to answers.</li>
  </ul>
  <h2>🔧 Environment Variables</h2>
  <p>These are required to fetch real-time data securely:</p>
  <ul>
    <li><code>GITHUB_API_KEY</code> – GitHub personal access token.</li>
    <li><code>GITHUB_USERNAME</code> – Your GitHub username for fetching repositories.</li>
    <li><code>WAKATIME_API_KEY</code> – WakaTime API key for coding activity data.</li>
    <li><code>WAKATIME_USERNAME</code> – Your WakaTime username for fetching stats.</li>
  </ul>
  <h2>🧠 Tech Stack</h2>
  <ul>
    <li><strong>Framework:</strong> Next.js 15 (with Turbopack)</li>
    <li><strong>Language:</strong> TypeScript</li>
    <li><strong>Styling:</strong> Tailwind CSS 4</li>
    <li><strong>Animation:</strong> Motion (Framer Motion compatible)</li>
    <li><strong>UI Components:</strong> Lucide React Icons</li>
    <li><strong>Carousel:</strong> Keen Slider</li>
    <li><strong>Charts:</strong> Chart.js + React-Chartjs-2</li>
    <li><strong>Date Handling:</strong> Day.js</li>
    <li><strong>Loading States:</strong> React Loading Skeleton</li>
    <li><strong>Markdown Parser:</strong> Marked.js (for dynamic project READMEs)</li>
    <li><strong>Progress Indicator:</strong> Next.js Top Loader</li>
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
  <h2>🤝 Contributing</h2>
  <p>Contributions, suggestions, or feature improvements are always welcome!</p>
  <h3>How to contribute:</h3>
  <ol>
    <li>Fork the repository.</li>
    <li>Create a new branch for your feature or fix.</li>
    <li>Make and test your changes locally.</li>
    <li>Submit a pull request with a clear description.</li>
  </ol>
  <h2>📬 Contact</h2>
  <p>
    For collaborations or inquiries, reach out via email:
    <a href="mailto:rashidvisda@gmail.com">rashidvisda@gmail.com</a>
  </p>
  <p>
    You can also connect with me on my social platforms linked on the Contact page.
  </p>
</body>
</html>
