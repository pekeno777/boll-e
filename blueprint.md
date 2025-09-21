### Purpose and Capabilities
This project is an Astro.js static-first web application designed for Firebase Studio, focusing on high performance, SEO, and minimal JavaScript. It showcases a modern web architecture using Astro's Islands Architecture for interactive components and a server-first approach for content.

### Project Outline
This section details the design, style, and features implemented in the application.

*   **General Structure:** The application is built with Astro.js, utilizing `.astro` files for pages and layouts, and React (`.tsx`) for interactive components.
*   **Styling:** Primarily uses Tailwind CSS for a utility-first approach, with some custom CSS for specific elements.
*   **Performance:** Leverages Astro's partial hydration with `client:` directives to deliver minimal JavaScript, optimizing for Core Web Vitals.
*   **Routing:** Implements file-based routing where `.astro` files in `src/pages/` define routes.
*   **Data Fetching:** Data is fetched on the server using top-level `await` in the component frontmatter.
*   **Animations:** Uses AOS (Animate On Scroll) for scroll-triggered animations.
*   **Navigation (`src/sections/Nav.astro`):** A responsive navigation bar for site-wide access.
*   **Hero Section (`src/sections/Hero.astro`):** Introduces the company with a large title, a brief description, call-to-action buttons, and a comparison card with key metrics. Elements like the comparison card now use `bg-white/70 backdrop-blur-lg` for translucency.
*   **About Section (`src/sections/About.astro`):** Provides an overview of the company's vision and mission, with content cards. Content cards use `bg-white/70 backdrop-blur-lg` for translucency.
*   **Services Section (`src/sections/Services.astro`):** Displays a catalog of services with interactive cards (`ServicesReact.tsx`). Each card provides a brief overview, and clicking expands to show detailed descriptions, features, and performance targets. A new **Service Workflow** area has been added to the extended card for a flowchart, using `bg-gray-100/50 backdrop-blur-sm`.
*   **Indicators Section (`src/sections/Indicators.astro`):** Showcases key performance indicators (KPIs) and charts related to processing volume and client satisfaction. Figures and charts now use `bg-white/70 backdrop-blur-lg` for translucency.
*   **History Section (`src/sections/History.astro`):** Presents a timeline of the company's milestones. Timeline circles now use `border-4 border-gray-100/50` for translucency.
*   **Science Section (`src/sections/Science.astro`):** Details the technology behind the AI solutions, including machine learning, natural language processing, and automation. Technology stack figures now use `bg-white/70 backdrop-blur-lg` for translucency.
*   **Team Section (`src/sections/Team.astro`):** Introduces key team members with their roles and backgrounds, and displays team statistics. Team member cards and the team stats block now use `bg-white/70 backdrop-blur-lg` for translucency.
*   **Portfolio Section (`src/sections/Portfolio.astro`):** Highlights case studies and the overall impact of the company's solutions. Case study figures and portfolio stats now use `bg-white/70 backdrop-blur-lg` for translucency.
*   **Contact Section (`src/sections/Contact.astro`):** Provides a contact form and company contact information. Contact form and info figures now use `bg-white/70 backdrop-blur-lg` for translucency.
*   **Footer Section (`src/sections/Footer.astro`):** Contains copyright information, quick links, and social media icons. This section retains its distinct `bg-[#252525]` background.

### Plan and Steps for Current Change
**Goal:** Implement a unified background across all sections, eliminating visible seams, and add a dedicated flowchart space in the extended service cards.

**Steps Taken:**

1.  **Unified Background Implementation:**
    *   **Verified `src/styles/global.css`:** Confirmed no conflicting global background styles.
    *   **Leveraged `src/layouts/Layout.astro`:** Maintained the existing `body` background with radial gradients and `background-attachment: fixed;` to serve as the continuous page background.
    *   **Modified Section Backgrounds:**
        *   **`src/sections/Hero.astro`:** Changed the background of the comparison card from `bg-white/70` to a consistent `bg-white/70 backdrop-blur-lg` for better translucency.
        *   **`src/sections/About.astro`:** Applied `bg-white/70 backdrop-blur-lg` to the content figures to ensure translucency.
        *   **`src/sections/Indicators.astro`:** Removed `bg-white/50` from the `<section>` and updated the figures to use `bg-white/70 backdrop-blur-lg`.
        *   **`src/sections/History.astro`:** Adjusted the timeline circles from `border-4 border-white` to `border-4 border-gray-100/50` for translucency.
        *   **`src/sections/Science.astro`:** Updated technology stack figures to use `bg-white/70 backdrop-blur-lg`.
        *   **`src/sections/Team.astro`:** Applied `bg-white/70 backdrop-blur-lg` to team member cards and the team statistics block.
        *   **`src/sections/Portfolio.astro`:** Modified case study figures and the portfolio stats block to use `bg-white/70 backdrop-blur-lg`.
        *   **`src/sections/Contact.astro`:** Updated the contact form and contact information figures to use `bg-white/70 backdrop-blur-lg`.
        *   **`src/sections/Footer.astro`:** Retained its distinct `bg-[#252525]` background as it's intended to be a visually separate element.

2.  **Flowchart Space in Services Component:**
    *   **Modified `src/components/ServicesReact.tsx`:** Added a new `div` element within the extended service card, after the "Key Features" and "Performance Targets" sections, with the title "Service Workflow" and a placeholder text for the flowchart. This new area uses `bg-gray-100/50 backdrop-blur-sm` for its background, providing a subtle visual separation while maintaining the translucent theme.