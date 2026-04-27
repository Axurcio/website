export const site = {
  name: "Axurcio",
  defaultTitle: "Axurcio | Enterprise AI Consultancy",
  description:
    "Axurcio helps enterprises and government teams move from manual processes to autonomous systems through AI solutions, agentic workflows, and operational transformation.",
  url: "https://axurcio.com",
  email: "contact+website@axurcio.com",
  formSubmitUrl: "https://formsubmit.co/fd0bb44f1bd59e68a9900238c739a93b",
  linkedInUrl: "https://www.linkedin.com/company/axurcio/",
  calendlyUrl: "https://calendly.com/axurcio/chat-with-chris-axurcio",
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/solutions", label: "Solutions" },
  { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export const heroMetrics = [
  { value: "30-50%", label: "Cycle-time reduction across repetitive operational workflows" },
  { value: "Weeks", label: "To launch a focused pilot and validate measurable business value" },
  { value: "24/7", label: "Coverage from AI-enabled operations, triage, and decision support" },
];

export const services = [
  {
    slug: "ai-solutions",
    name: "AI Solutions",
    summary:
      "Custom AI systems, copilots, and LLM-powered products designed around real business outcomes.",
    description:
      "We design and deliver production-grade AI solutions that connect to your data, workflows, and governance model. From retrieval-augmented assistants to machine learning services and decision support systems, every implementation is scoped around a clear commercial or operational goal.",
    outcomes: [
      "Shorten decision cycles with faster access to trusted information",
      "Reduce manual handling by automating repetitive cognitive work",
      "Create reusable AI capabilities instead of isolated proofs of concept",
    ],
    examples: [
      "Executive copilots for policy, operational, and portfolio reporting",
      "Knowledge assistants grounded in internal documentation and systems",
      "Prediction and classification services embedded into business applications",
    ],
  },
  {
    slug: "agentic-workflows",
    name: "Agentic Workflows",
    summary:
      "Autonomous and semi-autonomous agents that coordinate tasks, tools, and decisions across teams.",
    description:
      "Axurcio builds agentic workflows that do more than generate text. We define roles, guardrails, memory, and escalation paths so software agents can analyse, decide, act, and collaborate with humans in a controlled operating model.",
    outcomes: [
      "Increase throughput without increasing headcount at the same rate",
      "Improve response quality through orchestrated, multi-step decisioning",
      "Introduce safe autonomy with governance, traceability, and fallback controls",
    ],
    examples: [
      "Multi-agent triage pipelines for requests, incidents, and investigations",
      "Autonomous research and document preparation workflows with human approval",
      "Decision automation for routing, prioritisation, and next-best-action support",
    ],
  },
  {
    slug: "process-automation",
    name: "Process Automation",
    summary:
      "Intelligent automation that connects systems, removes friction, and scales execution.",
    description:
      "We modernise fragmented business processes by combining workflow orchestration, event-driven integration, and AI-powered decisioning. The goal is not to automate for its own sake, but to create faster, simpler operating flows for teams and customers.",
    outcomes: [
      "Lower the cost and risk of high-volume operational processes",
      "Eliminate delays caused by handoffs, rework, and disconnected tooling",
      "Improve service levels with better orchestration and operational visibility",
    ],
    examples: [
      "Automated case intake, enrichment, and routing across enterprise systems",
      "Approval workflows with AI-assisted summaries and policy checks",
      "Back-office orchestration for finance, procurement, and service operations",
    ],
  },
  {
    slug: "workforce-transformation",
    name: "Workforce Transformation",
    summary:
      "AI-enabled operating models that help teams work faster, with better leverage and less overhead.",
    description:
      "We help leaders redesign work around AI augmentation and automation. That includes role design, task decomposition, governance, change management, and the practical enablement needed for teams to adopt AI in day-to-day operations.",
    outcomes: [
      "Lift team productivity without sacrificing quality or control",
      "Free specialists from low-value admin and coordination work",
      "Build repeatable ways of working that scale beyond a single pilot",
    ],
    examples: [
      "AI operating model design for digital, data, and operations teams",
      "Copilot adoption programs with workflow redesign and guardrails",
      "Role-based productivity systems for analysts, service teams, and managers",
    ],
  },
];

export const capabilities = [
  {
    title: "Strategy to production",
    description:
      "We connect AI strategy, architecture, delivery, and operating model change so initiatives move past exploration and into measurable business performance.",
  },
  {
    title: "Governed autonomy",
    description:
      "Agentic systems are designed with approval checkpoints, observability, human oversight, and clear escalation rules from day one.",
  },
  {
    title: "Enterprise integration",
    description:
      "Solutions are grounded in the realities of existing data, security controls, line-of-business platforms, and operational processes.",
  },
  {
    title: "Outcome-first delivery",
    description:
      "Every engagement is shaped around a business metric: speed, cost, quality, compliance, service level, or workforce leverage.",
  },
  {
    title: "Executive clarity",
    description:
      "Complex AI concepts are translated into operating decisions, investment choices, and implementation roadmaps leaders can act on.",
  },
  {
    title: "Capability uplift",
    description:
      "We do not just deliver systems. We help your teams absorb the methods, patterns, and controls needed to scale confidently.",
  },
];

export const workflowStages = [
  {
    step: "01",
    title: "Sense",
    detail: "Agents ingest requests, events, documents, and structured business signals from across your operating environment.",
  },
  {
    step: "02",
    title: "Reason",
    detail: "Context is retrieved, policies are applied, and the workflow determines intent, risk, priority, or next-best action.",
  },
  {
    step: "03",
    title: "Act",
    detail: "Tasks are executed across approved systems, with automation, approvals, and human review where required.",
  },
  {
    step: "04",
    title: "Learn",
    detail: "Outcomes are measured so prompts, rules, and orchestration improve over time instead of staying static.",
  },
];

export const useCases = [
  {
    title: "Operational request triage",
    sector: "Government and public services",
    summary:
      "Convert high-volume inboxes and request queues into structured, prioritised work with AI-assisted triage and routing.",
    challenge:
      "Teams spend too much time classifying requests, finding context, and moving work between disconnected systems.",
    solution:
      "An AI triage layer extracts intent, enriches requests with enterprise knowledge, and routes work to the right workflow or operator with confidence scoring.",
    impact: [
      "Faster response times for citizens, staff, or internal service users",
      "Reduced backlog growth and less manual rekeying",
      "Better consistency across distributed operations teams",
    ],
  },
  {
    title: "Executive knowledge copilot",
    sector: "Enterprise operations",
    summary:
      "Give leaders instant access to policy, program, operational, and performance context without hunting across documents and dashboards.",
    challenge:
      "Critical information is fragmented across reports, emails, shared drives, and systems, making fast decisions harder than they need to be.",
    solution:
      "A secure retrieval-based copilot grounded in internal knowledge, with source-linked answers, summaries, and workflow handoffs for deeper analysis.",
    impact: [
      "Quicker, better-informed decision making",
      "Less time spent preparing executive briefings and summaries",
      "Improved access to trusted organisational knowledge",
    ],
  },
  {
    title: "AI-assisted case management",
    sector: "Regulated operations",
    summary:
      "Streamline investigations and case handling through summarisation, risk scoring, action recommendations, and workflow orchestration.",
    challenge:
      "Caseworkers and analysts lose time to repetitive admin, fragmented evidence, and inconsistent operating practices.",
    solution:
      "A governed case workflow combines document analysis, classification, next-step guidance, and human review checkpoints.",
    impact: [
      "More throughput per analyst",
      "Stronger process consistency and auditability",
      "Lower time spent on low-value administrative tasks",
    ],
  },
  {
    title: "Workforce productivity operating model",
    sector: "Mid-to-large business transformation",
    summary:
      "Redesign how teams work with AI so productivity improvements are systematic rather than ad hoc.",
    challenge:
      "Teams adopt tools unevenly, without role clarity, governance, or a plan for where AI should augment versus automate.",
    solution:
      "Axurcio maps workflows by role, identifies automation and augmentation opportunities, and deploys a repeatable AI operating model with enablement and guardrails.",
    impact: [
      "Higher quality adoption across teams",
      "Lower operational drag from manual coordination work",
      "A clear path from pilots to scaled transformation",
    ],
  },
];

export const differentiators = [
  {
    title: "Enterprise fluency",
    description:
      "Axurcio works where architecture, governance, delivery, and operations intersect. That matters when AI needs to coexist with security, policy, legacy systems, and risk controls.",
  },
  {
    title: "Practical autonomy",
    description:
      "We design agentic workflows for real operating environments, not lab conditions. That means clear roles, bounded authority, and measurable service outcomes.",
  },
  {
    title: "Operator-centric UX",
    description:
      "We simplify complex AI concepts into usable interfaces, decisions, and workflows that leaders and delivery teams can trust and adopt.",
  },
  {
    title: "Transformation mindset",
    description:
      "We combine solution delivery with workforce and process redesign, so technology changes actually alter how the organisation performs.",
  },
];

export const testimonials = [
  {
    quote:
      "Axurcio helped us move from scattered AI experiments to a clear operating model with practical automation opportunities and governance we could defend.",
    name: "Chief Digital Officer",
    company: "Public sector organisation",
  },
  {
    quote:
      "Their strength was translating complex AI options into a roadmap our operations and technology teams could execute together.",
    name: "Head of Enterprise Platforms",
    company: "National services provider",
  },
  {
    quote:
      "We needed more than a prototype. Axurcio designed a workflow that improved throughput, reduced manual effort, and gave the team confidence in the controls.",
    name: "Director of Operations",
    company: "Regulated enterprise",
  },
];

export const principles = [
  {
    title: "Business outcomes before hype",
    description:
      "If a use case cannot be tied to a metric that matters, it should not move forward unchanged.",
  },
  {
    title: "Design for operators",
    description:
      "AI systems have to fit into how teams actually work, not create another layer of complexity to manage.",
  },
  {
    title: "Governance by default",
    description:
      "Security, traceability, approval design, and accountability are baked into the architecture from the start.",
  },
  {
    title: "Build lasting capability",
    description:
      "Every engagement should leave the organisation with stronger patterns, clearer decisions, and teams that can move further on their own.",
  },
];

export const deliveryPhases = [
  {
    title: "Frame the opportunity",
    detail:
      "Identify priority workflows, decision bottlenecks, and measurable business value across the current operating landscape.",
  },
  {
    title: "Design the operating model",
    detail:
      "Define the AI pattern, integrations, governance controls, user experience, and target-state workflow required for success.",
  },
  {
    title: "Pilot with intent",
    detail:
      "Launch a focused implementation that proves value, establishes trust, and generates the evidence needed to scale.",
  },
  {
    title: "Operationalise and expand",
    detail:
      "Embed the solution into production workflows, upskill teams, and create the roadmap for broader rollout.",
  },
];

export const contactHighlights = [
  "Book an executive working session to prioritise your highest-value AI opportunities.",
  "Discuss a specific workflow, automation bottleneck, or workforce productivity challenge.",
  "Explore architecture, governance, and delivery options for enterprise AI at scale.",
];

export const faqs = [
  {
    question: "What is the best way to start?",
    answer:
      "Most clients begin with a focused consultation to identify the highest-value workflow, the implementation path, and the risks that need to be addressed early.",
  },
  {
    question: "Do you only work on large programs?",
    answer:
      "No. Axurcio can support targeted pilots, advisory engagements, and broader transformation programs, as long as there is a clear business case to solve.",
  },
  {
    question: "Can you work with our internal delivery team?",
    answer:
      "Yes. We regularly work alongside technology, operations, data, and change teams to accelerate delivery and transfer capability.",
  },
];

export const insights = [
  {
    slug: "from-pilot-to-operating-model",
    category: "Strategy",
    title: "From AI pilot to operating model",
    summary:
      "Why many AI initiatives stall after the prototype stage, and how to design the path to production from the outset.",
    readTime: "6 min read",
    publishedAt: "March 18, 2026",
    author: "Axurcio Advisory",
    body: [
      {
        heading: "The real blocker is not the model",
        paragraphs: [
          "Most organisations do not struggle because the underlying AI is unavailable. They struggle because ownership, workflow design, data access, and governance were left unresolved while the prototype was being celebrated.",
          "A pilot can demonstrate possibility, but it rarely proves operational fit. That gap becomes expensive when teams try to scale without changing the surrounding process.",
        ],
      },
      {
        heading: "Design with scale in mind from day one",
        paragraphs: [
          "The fastest way to production is not to build everything at once. It is to choose a narrow, high-value workflow and design the pilot as the first version of a durable operating model.",
        ],
        bullets: [
          "Define the business metric before writing prompts or building workflows",
          "Decide where human review is mandatory and where autonomy is acceptable",
          "Build observability and exception handling into the first release",
        ],
      },
      {
        heading: "Treat pilots as operating experiments",
        paragraphs: [
          "A strong pilot changes how work is done. It creates evidence around throughput, quality, risk, and adoption. That evidence becomes the foundation for scaling AI beyond one enthusiastic team.",
        ],
      },
    ],
  },
  {
    slug: "designing-agentic-workflows-for-control",
    category: "Agentic AI",
    title: "Designing agentic workflows for control, not chaos",
    summary:
      "How to structure autonomous workflows with bounded authority, escalation paths, and enterprise-grade trust.",
    readTime: "7 min read",
    publishedAt: "March 10, 2026",
    author: "Axurcio Advisory",
    body: [
      {
        heading: "Autonomy needs boundaries",
        paragraphs: [
          "Agentic systems create value when they can take meaningful action. They create risk when that action is not bounded by context, policy, or escalation logic.",
          "That is why the architecture matters as much as the prompt. Role design, tool access, state, memory, approvals, and audit trails should be defined as part of the workflow, not added later.",
        ],
      },
      {
        heading: "A good agent is part of a system",
        paragraphs: [
          "The best enterprise patterns treat agents as operating components within a larger service model. Some gather information, some evaluate policy, and some trigger actions. Humans remain responsible for the decisions that require judgment, accountability, or sensitive approval.",
        ],
      },
      {
        heading: "Operational trust compounds",
        paragraphs: [
          "When users can see why something happened, when exceptions are handled cleanly, and when quality improves over time, confidence grows. That is what turns AI from a novelty into part of the operating model.",
        ],
      },
    ],
  },
  {
    slug: "where-workforce-transformation-actually-starts",
    category: "Workforce",
    title: "Where workforce transformation actually starts",
    summary:
      "The practical way to introduce AI into team workflows without creating tool sprawl or change fatigue.",
    readTime: "5 min read",
    publishedAt: "February 27, 2026",
    author: "Axurcio Advisory",
    body: [
      {
        heading: "Start with work, not tools",
        paragraphs: [
          "Teams rarely need another generic AI tool. They need specific parts of their work redesigned so that AI can remove friction, augment judgment, or automate routine decisions.",
          "That means understanding task patterns by role, where context lives, and what quality controls are needed before new tools are rolled out widely.",
        ],
      },
      {
        heading: "Adoption follows clarity",
        paragraphs: [
          "People adopt AI when they know what it is for, when to trust it, and how it changes the work they are accountable for. Clear workflow design reduces hesitation and increases consistency.",
        ],
      },
      {
        heading: "Capability beats novelty",
        paragraphs: [
          "Workforce transformation is ultimately about leverage. The organisations that move fastest are the ones that treat AI as a capability-building program, not a series of disconnected experiments.",
        ],
      },
    ],
  },
];
