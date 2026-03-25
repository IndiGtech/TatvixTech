export type BlogSection =
    | { type: "p"; text: string }
    | { type: "h2"; text: string }
    | { type: "h3"; text: string }
    | { type: "ul"; items: string[] }
    | {
          type: "code";
          language: string;
          code: string;
          caption?: string;
      }
    | { type: "diagram"; title: string; lines: string[] }
    | {
          type: "table";
          caption?: string;
          headers: string[];
          rows: string[][];
      }
    | {
          type: "checklist";
          title?: string;
          items: { title: string; detail: string }[];
      }
    | { type: "figure"; src: string; alt: string; caption?: string }
    | { type: "blockquote"; text: string };

export interface BlogPost {
    slug: string;
    title: string;
    description: string;
    publishedAt: string;
    updatedAt?: string;
    author: string;
    authorRole?: string;
    tags: string[];
    sections: BlogSection[];
    readingTimeMinutes: number;
}

function sectionWordCount(section: BlogSection): number {
    const count = (t: string) =>
        t.trim().split(/\s+/).filter(Boolean).length;
    switch (section.type) {
        case "p":
        case "h2":
        case "h3":
        case "blockquote":
            return count(section.text);
        case "ul":
            return section.items.reduce((n, i) => n + count(i), 0);
        case "code":
            return Math.max(1, Math.round(count(section.code) * 0.25));
        case "diagram":
            return section.lines.join(" ").split(/\s+/).filter(Boolean).length;
        case "table":
            return (
                count(section.headers.join(" ")) +
                section.rows.reduce(
                    (n, row) => n + count(row.join(" ")),
                    0
                )
            );
        case "checklist":
            return section.items.reduce(
                (n, it) => n + count(it.title) + count(it.detail),
                0
            );
        case "figure":
            return count(section.alt + (section.caption ?? ""));
        default:
            return 0;
    }
}

export function computeReadingMinutes(sections: BlogSection[]): number {
    const words = sections.reduce((n, s) => n + sectionWordCount(s), 0);
    return Math.max(1, Math.ceil(words / 200));
}

const RAW_POSTS: Omit<BlogPost, "readingTimeMinutes">[] = [
    {
        slug: "traditional-tea-machine-smart-engineering",
        title: "Recreating the Taste of Traditional Tea Through Smart Engineering",
        description:
            "Building a machine that replicates traditional tea-making processes with precision, preserving authenticity while enabling automation and scalability.",
        publishedAt: "2025-01-15",
        updatedAt: "2025-02-01",
        author: "Tatvix Engineering",
        authorRole: "Product Development",
        tags: ["Automation", "Food Technology", "Process Control", "Traditional Methods"],
        sections: [
            {
                type: "p",
                text: "In many parts of India, especially in the Saurashtra region of Gujarat, tea is not just a beverage—it is a daily ritual shaped by habit, timing, and technique. The way it is prepared plays a significant role in its taste, texture, and overall experience. A client approached us with a simple yet meaningful idea: to build a machine that could replicate this traditional tea-making process. The goal was not just automation, but authenticity.",
            },
            {
                type: "h2",
                text: "Understanding the Gap",
            },
            {
                type: "p",
                text: "Most tea-making machines available today focus on convenience. They typically use pre-mixed powders or combine pre-heated milk and water with tea bags. While these methods are quick, they often fail to deliver the depth of flavor associated with traditionally brewed tea.",
            },
            {
                type: "p",
                text: "The client's concern was clear: existing solutions compromise on taste because they skip the actual cooking process. The richness of traditionally prepared tea comes from controlled boiling, ingredient timing, and repeated heating cycles—elements that are difficult to replicate in automated systems.",
            },
            {
                type: "h2",
                text: "Defining the Real Challenge",
            },
            {
                type: "p",
                text: "The challenge was not simply to mix ingredients and heat them. It was to recreate a very specific process that people are accustomed to. In traditional preparation, tea is boiled in cycles. As it heats, the liquid rises due to the presence of milk. At that moment, the heat is reduced, allowing it to settle. This cycle is repeated multiple times. This process enhances mixing, improves texture, and develops a richer taste.",
            },
            {
                type: "p",
                text: "Replicating this behavior in a machine required more than standard automation. It required understanding both the process and the intent behind it.",
            },
            {
                type: "h2",
                text: "From Concept to System Design",
            },
            {
                type: "p",
                text: "To bring this idea to life, we designed a system that could manage both ingredient handling and the cooking process with precision. Ingredients such as tea and sugar are stored in dedicated containers and dispensed in controlled quantities. Milk and water are managed through calibrated pumping mechanisms to ensure consistency across every preparation.",
            },
            {
                type: "p",
                text: "For the heating process, an induction-based system was selected. This allowed better control over temperature changes and faster response times compared to conventional heating methods. A user interface was added to guide operation and provide visibility into the brewing process, making the system intuitive and easy to use.",
            },
            {
                type: "h2",
                text: "Solving the Core Problem",
            },
            {
                type: "p",
                text: "One of the most critical challenges was detecting when the tea rises during boiling. This moment is essential for controlling the heating cycle, but it is difficult to measure reliably in a high-temperature environment.",
            },
            {
                type: "p",
                text: "Instead of relying on conventional sensors, we developed a simple and effective approach based on liquid contact detection. By placing conductive elements at different levels inside the vessel, the system can detect when the liquid reaches a certain height. This signal is then used to adjust the heating automatically. This method allowed the system to replicate the rise-and-settle cycles that are central to traditional tea preparation.",
            },
            {
                type: "h2",
                text: "Delivering the Experience",
            },
            {
                type: "p",
                text: "The final system successfully bridges the gap between tradition and automation. It does not rely on shortcuts or substitutes. Instead, it follows the same process that would be used in a home kitchen—just with consistency and repeatability. The result is a solution that preserves the original intent of the client's idea: delivering tea that tastes authentic, while making the process efficient and scalable.",
            },
            {
                type: "h2",
                text: "Conclusion",
            },
            {
                type: "p",
                text: "This project highlights an important principle in product development. Technology is most effective when it respects the context in which it is used. By focusing on the actual experience rather than just the outcome, it is possible to build solutions that are both practical and meaningful. In this case, the goal was not just to make tea—it was to preserve a tradition through thoughtful engineering.",
            },
        ],
    },
    {
        slug: "localizing-advanced-ro-system-dependency-to-innovation",
        title: "Localizing an Advanced RO System: From Dependency to Scalable Innovation",
        description:
            "How we transformed a TDS monitoring system from external dependency to a fully controlled, locally developed solution with improved reliability and faster iteration cycles.",
        publishedAt: "2025-02-10",
        author: "Tatvix Engineering",
        authorRole: "Systems Engineering",
        tags: ["Water Purification", "TDS Monitoring", "System Localization", "Product Development"],
        sections: [
            {
                type: "p",
                text: "In the water purification industry, consistency and control are critical. For one of our clients, maintaining the right water quality was not just a feature—it was the core value of their product. The client had already developed a unique system that could monitor and control TDS (Total Dissolved Solids) levels in real time. The product was functional and already present in the market. However, scaling and maintaining it posed significant challenges.",
            },
            {
                type: "h2",
                text: "The Existing System",
            },
            {
                type: "p",
                text: "The product was designed to continuously measure water quality and adjust it to match a user-defined TDS level. This allowed users to maintain consistent taste and mineral balance, which is especially important in drinking water systems. While the concept was strong, the implementation faced two major issues.",
            },
            {
                type: "h2",
                text: "The Challenges",
            },
            {
                type: "p",
                text: "The first issue was related to measurement stability. A TDS sensor was placed at the bottom of the storage tank to monitor water quality. However, whenever new water entered the tank, the readings fluctuated rapidly. This made it difficult to rely on real-time data for accurate control, leading to inconsistent output.",
            },
            {
                type: "p",
                text: "The second issue was operational. The electronics for the system were designed and manufactured outside India. Even minor modifications required coordination with external teams, resulting in long delays. This not only slowed down development but also impacted production timelines and overall business efficiency.",
            },
            {
                type: "h2",
                text: "Rethinking the Approach",
            },
            {
                type: "p",
                text: "The objective was clear: improve the reliability of TDS measurement, enable faster development and iteration, and bring full control of the system within India. Instead of making incremental changes, we chose to redesign the system from the ground up while preserving the original product vision.",
            },
            {
                type: "h2",
                text: "Engineering the Solution",
            },
            {
                type: "p",
                text: "We developed a new control system tailored to the product's requirements. The focus was on improving how the system interprets water quality in dynamic conditions. Since fluctuations were caused by incoming water disturbing the tank environment, the solution required both hardware and system-level improvements.",
            },
            {
                type: "p",
                text: "The redesigned system ensured that measurements are interpreted more reliably during water inflow, control decisions are based on stable and meaningful data, and the overall system responds smoothly rather than reacting to noise. In parallel, we designed and developed a new electronics board locally. This provided complete flexibility for future updates, testing, and customization without external dependency.",
            },
            {
                type: "h2",
                text: "The Outcome",
            },
            {
                type: "ul",
                items: [
                    "TDS monitoring became stable and reliable in real-world usage",
                    "The system could consistently maintain the desired output quality",
                    "Development and iteration cycles were significantly reduced",
                    "Production became more streamlined with local control",
                ],
            },
            {
                type: "p",
                text: "Most importantly, the product moved from being dependent on external changes to becoming a fully manageable and scalable solution.",
            },
            {
                type: "h2",
                text: "Conclusion",
            },
            {
                type: "p",
                text: "This project demonstrates the importance of not just building a working system, but building one that can evolve efficiently. By combining system-level thinking with practical engineering, it is possible to improve both product performance and business operations. In this case, the result was not just a better device, but a more sustainable and scalable product ecosystem.",
            },
        ],
    },
    {
        slug: "scalable-iot-module-replace-external-dependencies",
        title: "Building a Scalable IoT Module to Replace External Dependencies",
        description:
            "Creating a universal IoT communication module to eliminate third-party dependencies while enabling reliable data flow and future product scalability.",
        publishedAt: "2025-03-05",
        author: "Tatvix Engineering",
        authorRole: "IoT Architecture",
        tags: ["IoT Modules", "Communication Systems", "Product Independence", "Scalable Solutions"],
        sections: [
            {
                type: "p",
                text: "As connected products become more common, the reliability and control of the underlying ecosystem become critical. For one of our clients, this concern became a key driver for change. The client had an existing product that relied on an external communication module to connect with cloud services. While the system was functional, it introduced dependencies that raised both operational and strategic concerns.",
            },
            {
                type: "h2",
                text: "The Existing Situation",
            },
            {
                type: "p",
                text: "The product used a third-party communication solution to send and receive data from a remote server and enable mobile application connectivity. However, both the communication layer and application ecosystem were controlled externally. This meant limited visibility into how data was handled, dependence on external infrastructure for continued operation, and uncertainty around long-term availability and compliance.",
            },
            {
                type: "h2",
                text: "The Challenge",
            },
            {
                type: "p",
                text: "The client wanted to eliminate this dependency without redesigning the entire product. At the same time, they had a broader vision: replace the existing communication system, ensure reliable and controlled data flow, and create a reusable solution that could be integrated into future products.",
            },
            {
                type: "p",
                text: "This was not just a replacement task—it was an opportunity to build a more flexible and scalable foundation.",
            },
            {
                type: "h2",
                text: "Defining the Approach",
            },
            {
                type: "p",
                text: "Instead of modifying the existing system extensively, we proposed developing a separate IoT communication module. This module would interface with the existing device, handle all communication with the server, and operate independently of the original external solution. Additionally, it was designed to be universal, so it could be reused across different products in the future.",
            },
            {
                type: "h2",
                text: "Engineering the Solution",
            },
            {
                type: "p",
                text: "The system was designed with three key goals in mind: compatibility, universality, and cost efficiency. The module needed to integrate seamlessly with the existing product without requiring major changes. The architecture was kept flexible so that the same module could be used in other non-connected products to enable IoT capabilities. Since the solution was intended for production use, it had to be optimized for cost without compromising reliability or performance.",
            },
            {
                type: "p",
                text: "The result was a compact and efficient module capable of managing communication, handling data exchange, and supporting future scalability.",
            },
            {
                type: "h2",
                text: "Overcoming Key Challenges",
            },
            {
                type: "p",
                text: "Designing a universal system is inherently complex. The module needed to work across different product types, handle varying communication requirements, and remain simple enough for integration and deployment. Balancing flexibility, reliability, and cost was the core engineering challenge.",
            },
            {
                type: "h2",
                text: "The Outcome",
            },
            {
                type: "ul",
                items: [
                    "The product now operates with a self-managed communication layer",
                    "Data flow is more transparent and reliable",
                    "The client has full control over future updates and integrations",
                    "The same module can be reused to enable IoT features in other products",
                ],
            },
            {
                type: "p",
                text: "This not only solved the immediate problem but also created a foundation for future product development.",
            },
            {
                type: "h2",
                text: "Conclusion",
            },
            {
                type: "p",
                text: "In connected systems, control over communication and data is just as important as the functionality itself. By developing a modular and reusable IoT solution, it is possible to reduce dependency, improve flexibility, and prepare for long-term scalability. This project highlights how thoughtful system design can transform a limitation into an opportunity for growth.",
            },
        ],
    },
    {
        slug: "battery-efficient-industrial-pressure-monitoring",
        title: "Designing a Battery-Efficient Industrial Pressure Monitoring System",
        description:
            "Creating a compact, battery-operated pressure monitoring device that delivers industrial-grade accuracy while maintaining extended operational life through intelligent power management.",
        publishedAt: "2025-03-20",
        author: "Tatvix Engineering",
        authorRole: "Industrial Systems",
        tags: ["Industrial Monitoring", "Battery Efficiency", "Pressure Sensors", "Power Management"],
        sections: [
            {
                type: "p",
                text: "In industrial environments, accurate measurement is essential for safety, performance, and reliability. Even small variations in pressure readings can impact system behavior and decision-making. One of our clients approached us with a focused requirement: to develop a compact, battery-operated device capable of delivering precise pressure measurements with real-time visibility.",
            },
            {
                type: "h2",
                text: "Understanding the Requirement",
            },
            {
                type: "p",
                text: "The client needed a solution that could provide accurate and stable pressure readings, display data clearly on a custom-designed segment display, and operate efficiently on battery power for extended durations. Unlike typical monitoring systems, this device was intended to be portable and independent of continuous power sources, making energy efficiency a critical factor.",
            },
            {
                type: "h2",
                text: "The Core Challenge",
            },
            {
                type: "p",
                text: "Balancing precision and power consumption is not straightforward. High-accuracy measurement systems often require frequent data sampling, continuous signal processing, and stable and responsive output. At the same time, battery-powered devices demand minimal energy usage, efficient operation over long periods, and smart resource management. The challenge was to achieve both—without compromising either.",
            },
            {
                type: "h2",
                text: "Defining the Approach",
            },
            {
                type: "p",
                text: "We approached the problem from both hardware and system design perspectives. The focus was on ensuring reliable signal acquisition for accurate pressure measurement, minimizing unnecessary processing and power usage, and designing a system that responds quickly without constant high energy consumption. A custom display interface was also developed to present readings clearly and consistently, aligned with the product's industrial use case.",
            },
            {
                type: "h2",
                text: "Engineering for Efficiency",
            },
            {
                type: "p",
                text: "To meet the power constraints, we explored multiple strategies across the system. Careful selection and configuration of components ensured that the system consumed only the required energy during operation. Unnecessary power draw was minimized through efficient circuit design.",
            },
            {
                type: "p",
                text: "Instead of running all functions continuously, the system was designed to operate selectively. It activates critical processes when needed while conserving energy during idle periods. Special attention was given to ensure that the device delivers pressure readings without noticeable delay, maintaining usability in real-world industrial conditions.",
            },
            {
                type: "h2",
                text: "The Outcome",
            },
            {
                type: "ul",
                items: [
                    "Delivered industrial-grade pressure measurement accuracy",
                    "Provided clear and consistent output through a custom display",
                    "Operated efficiently on a single battery charge for extended use",
                    "Maintained responsiveness without excessive power consumption",
                ],
            },
            {
                type: "p",
                text: "The result was a reliable and practical solution tailored to the client's specific application.",
            },
            {
                type: "h2",
                text: "Conclusion",
            },
            {
                type: "p",
                text: "In product development, constraints often define innovation. In this case, the need for both precision and battery efficiency led to a carefully engineered system that performs reliably in real-world conditions. By addressing both measurement accuracy and energy management together, it is possible to build solutions that are not only functional, but also sustainable and scalable for industrial use.",
            },
        ],
    },
];

export const BLOG_POSTS: BlogPost[] = RAW_POSTS.map((p) => ({
    ...p,
    readingTimeMinutes: computeReadingMinutes(p.sections),
}));

export function getAllPostsSorted(): BlogPost[] {
    return [...BLOG_POSTS].sort(
        (a, b) =>
            new Date(b.publishedAt).getTime() -
            new Date(a.publishedAt).getTime()
    );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
    return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getLatestPosts(limit: number): BlogPost[] {
    return getAllPostsSorted().slice(0, limit);
}

export function getRelatedPosts(slug: string, limit: number): BlogPost[] {
    const current = getPostBySlug(slug);
    if (!current) return [];
    const tagSet = new Set(current.tags);
    const scored = BLOG_POSTS.filter((p) => p.slug !== slug).map((p) => ({
        post: p,
        score: p.tags.filter((t) => tagSet.has(t)).length,
    }));
    scored.sort((a, b) => b.score - a.score);
    return scored.slice(0, limit).map((s) => s.post);
}

export function getAllSlugs(): string[] {
    return BLOG_POSTS.map((p) => p.slug);
}