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
        slug: "designing-reliable-embedded-systems",
        title: "Designing Reliable Embedded Systems: From Concept to Real-World Performance",
        description:
            "How we move from paper requirements to field-stable firmware: debug hooks, traceability, and a practical signal-analysis workflow.",
        publishedAt: "2025-01-15",
        updatedAt: "2025-02-01",
        author: "Tatvix Engineering",
        authorRole: "Firmware & Systems",
        tags: ["Firmware", "Reliability", "Quality Assurance", "Testing"],
        sections: [
            {
                type: "p",
                text: "Reliability in embedded products is rarely a single heroic fix. It is the compound effect of observable behavior, bounded failure modes, and feedback loops that connect the lab bench to customer environments. This article outlines how we take a device from concept to performance that holds up outside the lab.",
            },
            {
                type: "h2",
                text: "Start with observable systems",
            },
            {
                type: "p",
                text: "Before optimizing paths or shaving microseconds, we instrument the system so we can answer: what failed, where, and under what context (temperature, supply voltage, RF noise)? Knowing exactly what happened in the field is more valuable than trying to guess from a generic error code.",
            },
            {
                type: "h3",
                text: "Debug hooks that survive bring-up",
            },
            {
                type: "p",
                text: "Every non-recoverable fault should leave a breadcrumb. We design our software so that when an unexpected event occurs, it safely records the context before resetting. This allows our engineering team to review exactly what led to the issue and resolve it permanently.",
            },
            {
                type: "h2",
                text: "Signal analysis workflow",
            },
            {
                type: "p",
                text: "When hardware and software interact, issues can hide in the space between them. We drive our analysis with a repeatable loop: capture the issue, time-correlate the data, form a hypothesis, change one variable, and re-measure. This systematic approach eliminates guesswork.",
            },
            {
                type: "ul",
                items: [
                    "Mark critical software events so they can be monitored alongside hardware signals.",
                    "Log data transfers with timestamps to spot timing issues.",
                    "Compare power supply stability during heavy wireless transmission bursts.",
                ],
            },
            {
                type: "h3",
                text: "Closing the loop in the field",
            },
            {
                type: "p",
                text: "Finally, we define success metrics in customer terms: crash-free sessions, recovery rates, and consistent response times. Reliability is measurable—we treat it as part of our definition of done, not as a late-phase surprise.",
            },
        ],
    },
    {
        slug: "scalable-iot-systems-esp32",
        title: "Building Scalable IoT Systems with ESP32: Connectivity Meets Reliability",
        description:
            "How we design ESP32 systems for seamless provisioning, reliable cloud uplinks, and resilient over-the-air updates.",
        publishedAt: "2025-02-10",
        author: "Tatvix Engineering",
        authorRole: "IoT & Connectivity",
        tags: ["ESP32", "IoT Architecture", "Cloud Connectivity", "OTA Updates"],
        sections: [
            {
                type: "p",
                text: "ESP32-class modules are attractive because they collapse Wi-Fi, Bluetooth, and ample processing power into one cost-effective component. However, the challenge lies in the architecture: mixing setup processes, application logic, and secure cloud communication on a single chip without boundaries can lead to dropped connections and painful update experiences. Here is how we structure multi-protocol designs for stability.",
            },
            {
                type: "h2",
                text: "Reference topology: gateway vs. device roles",
            },
            {
                type: "p",
                text: "In fleet deployments, we often split concerns. Constrained edge nodes speak lightweight protocols to a central hub, and the hub manages the heavy lifting of secure cloud communication. When the ESP32 acts as the hub, we treat its wireless and networking capabilities as managed services with explicit performance budgets, ensuring they never starve the main application of resources.",
            },
            {
                type: "h3",
                text: "Balancing multiple wireless protocols",
            },
            {
                type: "p",
                text: "Running Bluetooth and Wi-Fi simultaneously requires careful prioritization. Setup and provisioning windows can yield to more critical tasks, while steady-state data transmission should never interrupt essential control loops. We structure our software to keep these stacks from interfering with each other.",
            },
            {
                type: "h2",
                text: "What “good enough” looks like",
            },
            {
                type: "p",
                text: "While specific numbers vary with the physical environment and security requirements, we target strict performance metrics in the lab before a product sees the real world. This includes maintaining idle processing headroom for background tasks, ensuring low-latency data publishing, and keeping connection timing stable even when multiple radios are active.",
            },
            {
                type: "h3",
                text: "Operational checklist for production",
            },
            {
                type: "ul",
                items: [
                    "Ensure memory is partitioned to safely store factory defaults and redundant over-the-air update slots.",
                    "Store unique device credentials securely to prevent cloning or unauthorized access.",
                    "Implement back-pressure mechanisms: if the cloud connection is slow, drop or compress old data before the device runs out of memory.",
                ],
            },
        ],
    },
    {
        slug: "smart-consumer-devices-embedded-intelligence",
        title: "Developing Smart Consumer Devices with Embedded Intelligence",
        description:
            "Sensor integration, edge processing, and safety patterns for consumer-grade devices—from first prototype to store-shelf expectations.",
        publishedAt: "2025-03-05",
        author: "Tatvix Engineering",
        authorRole: "Product Strategy",
        tags: ["Consumer IoT", "Smart Devices", "Product Safety", "User Experience"],
        sections: [
            {
                type: "p",
                text: "Consumer smart devices sit at the intersection of cost pressure, user experience, and reliability. “Embedded intelligence” isn't just about machine learning—it is about deterministic behavior when the cloud is offline, graceful degradation when sensors disagree, and hardware-enforced safety where it matters most.",
            },
            {
                type: "h2",
                text: "The path from sensor to experience",
            },
            {
                type: "p",
                text: "We model the flow of data from raw sensor readings to user-visible outcomes early in the design process. Calibration, drift compensation, and confidence scoring should be foundational features, not bolted on after the mobile app is finished. This ensures the user only sees stable, actionable information.",
            },
            {
                type: "h3",
                text: "Safety mechanisms checklist",
            },
            {
                type: "ul",
                items: [
                    "Independent monitoring to reboot the system if the main software stalls.",
                    "Thermal throttling policies and power stability checks under worst-case wireless load.",
                    "Hardware interlocks so motors or heaters are gated by redundant checks to prevent unsafe conditions.",
                    "Privacy-by-design logging, ensuring personal data never ends up in diagnostic traces.",
                    "Fail-safe network loss handling: local schedules continue, and the cloud acts as an enhancer, not a single point of failure.",
                ],
            },
            {
                type: "h2",
                text: "Smart features without surprises",
            },
            {
                type: "p",
                text: "When adding on-device decision making (edge inference), we strictly budget memory and processing time. We also ensure the device can fall back to a baseline, rules-only mode if a smarter algorithm encounters an unexpected situation or fails an update.",
            },
            {
                type: "p",
                text: "Shipping consumer intelligence is as much about process as it is about algorithms: repeatable manufacturing tests, clear recovery paths, and honest communication about how the device will perform at scale.",
            },
        ],
    },
    {
        slug: "building-complete-iot-solutions-sensor-to-screen",
        title: "Building Complete IoT Solutions: From Sensor to Screen",
        description:
            "Why treating hardware and software as a single unified ecosystem accelerates time-to-market and prevents vendor lock-in.",
        publishedAt: "2025-03-20",
        author: "Tatvix Engineering",
        authorRole: "Full Stack Systems",
        tags: ["IoT Architecture", "Full Stack", "System Design", "Cloud Connectivity"],
        sections: [
            {
                type: "p",
                text: "Historically, companies building connected products had to hire a hardware firm for the PCB, a firmware contractor to make it run, and a separate web agency to build the cloud backend and mobile app. This fragmented approach usually results in integration nightmares, misaligned data contracts, and delayed launches. Here is why the modern approach requires a unified architecture from sensor to screen.",
            },
            {
                type: "h2",
                text: "The cost of boundaries",
            },
            {
                type: "p",
                text: "When the hardware team does not understand the cloud architecture, they may choose an inefficient payload format. When the mobile team does not understand the firmware limitations, they might expect instantaneous responses from a device that needs to sleep to conserve battery. A unified team views the system holistically, making trade-offs where they make the most sense.",
            },
            {
                type: "ul",
                items: [
                    "Design unified data models that map cleanly from C structs in firmware to JSON in the cloud to React state in the frontend.",
                    "Establish security roots of trust at the hardware layer that seamlessly authenticate with your web backend.",
                    "Build OTA (Over-The-Air) update mechanisms that are triggered easily from a web admin panel."
                ]
            },
            {
                type: "h2",
                text: "The unified CI/CD pipeline",
            },
            {
                type: "p",
                text: "True full-stack IoT means that a change to a sensor's reporting frequency on the edge device automatically updates the expected ingestion rate in the cloud, which in turn updates the visual threshold on the web dashboard. Keeping these layers in sync requires rigorous, cross-domain CI/CD pipelines.",
            }
        ],
    },
    {
        slug: "mobile-apps-for-embedded-devices",
        title: "Mobile Apps for Embedded Devices: Best Practices and Architecture",
        description:
            "Architecting reliable, responsive mobile companion apps that gracefully handle the physical constraints of BLE and WiFi IoT devices.",
        publishedAt: "2025-04-05",
        author: "Tatvix Engineering",
        authorRole: "Mobile Development",
        tags: ["Mobile Apps", "React Native", "BLE", "User Experience"],
        sections: [
            {
                type: "p",
                text: "Building a mobile app for an IoT device is fundamentally different from building a standard CRUD application. Your app must interact with a physical piece of hardware that might lose power, drop its connection, or be physically out of range. Handling these physical realities elegantly is the difference between a 1-star and 5-star app store review.",
            },
            {
                type: "h2",
                text: "State management for physical realities",
            },
            {
                type: "p",
                text: "In a traditional app, when you press a button to save a profile, you expect an immediate HTTP response. When you press a button to open a physical smart lock over BLE, the app must queue the command, establish a connection, negotiate security, write the characteristic, await the hardware acknowledgment, and then update the UI. This requires a robust state machine.",
            },
            {
                type: "checklist",
                items: [
                    { title: "Optimistic UI Updates", detail: "Avoid them for hardware controls. Only show the 'locked' state when the hardware confirms the deadbolt has moved." },
                    { title: "Connection Resiliency", detail: "Automatically attempt reconnections in the background when a device temporarily drops out of BLE range." },
                    { title: "Battery Awareness", detail: "Throttle app polling rates based on the reported battery life of the embedded device." }
                ]
            },
            {
                type: "h2",
                text: "Cross-platform vs Native",
            },
            {
                type: "p",
                text: "While native Swift and Kotlin offer the absolute highest performance for Bluetooth stacks, modern frameworks like React Native and Flutter, when paired with well-written native bridging libraries (like React Native BLE PLX), offer 95% of the performance while cutting development time and maintaining a unified codebase.",
            }
        ],
    },
    {
        slug: "web-dashboards-industrial-iot",
        title: "Web Dashboards for Industrial IoT: Real-time Data Visualization",
        description:
            "Designing robust, high-throughput web interfaces capable of digesting and visualizing millions of sensor data points without crashing the browser.",
        publishedAt: "2025-04-22",
        author: "Tatvix Engineering",
        authorRole: "Web Systems",
        tags: ["Web Apps", "Data Visualization", "Industrial IoT", "Next.js"],
        sections: [
            {
                type: "p",
                text: "Industrial IoT deployments generate a staggering amount of data. A factory floor with 1,000 vibration sensors reporting at 10Hz creates a massive ingestion pipeline. But simply storing that data isn't enough—it must be rendered into actionable, real-time insights on a web dashboard without bringing the user's browser to a crawl.",
            },
            {
                type: "h2",
                text: "Data decimation and windowing",
            },
            {
                type: "p",
                text: "You cannot plot 1 million points on a standard web chart. We employ data decimation techniques on the backend, aggregating time-series data into chunks (e.g., minute, hour, day averages) based on the current zoom level of the dashboard. As the user zooms in, the backend serves higher-resolution data for that specific time window.",
            },
            {
                type: "h3",
                text: "WebSockets vs Polling",
            },
            {
                type: "p",
                text: "For real-time critical alerts (like a machine overheating), we rely on WebSockets or Server-Sent Events (SSE) to push notifications instantly to the dashboard. However, for historical charting, standard REST or GraphQL polling is often more efficient and heavily cacheable via CDNs.",
            },
            {
                type: "h2",
                text: "Designing for the operator",
            },
            {
                type: "p",
                text: "Industrial dashboards must be deeply utilitarian. We prioritize high contrast, large typography, and immediate visual hierarchy. If a machine on line 4 is failing, the dashboard should scream that fact instantly, rather than burying it beneath generic analytics graphs.",
            }
        ],
    }
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
