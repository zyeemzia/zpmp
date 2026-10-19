window.TRACK = window.TRACK || { modules: [], exam: [] };
TRACK.modules.push({
 "id": "m1",
 "order": 1,
 "code": "Frame",
 "title": "Foundations of Modern Project Management & Value",
 "subtitle": "Frame the work: what projects are, how value is created and how to choose the right approach",
 "outcomes": [
  "Distinguish projects, operations, products, programs and portfolios and explain how they connect to strategy",
  "Apply the principles and performance domains of modern project management to real decisions",
  "Select and tailor a predictive, agile or hybrid life cycle using an uncertainty matrix",
  "Build a lean business case, benefits register and OKR link for a project",
  "Draft a one-page project charter and describe the modern project manager's role"
 ],
 "lessons": [
  {
   "id": "m1-l1",
   "title": "What a Project Is Today",
   "subtitle": "Projects, operations, products, programs and portfolios — and where the ZPMP Value Loop fits",
   "minutes": 22,
   "objectives": [
    "Define a project in modern, value-focused terms",
    "Distinguish projects from operations and long-lived products",
    "Explain how projects, programs and portfolios connect to strategy",
    "Describe the eight stages of the ZPMP Value Loop"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Every organisation runs on two engines. One keeps today's business working: payroll, customer service, production lines. The other changes the business: a new app, a new hospital wing, a new way of working. That second engine is **project work**, and in 2026 it is where most competitive advantage is won or lost."
    },
    {
     "type": "callout",
     "kind": "definition",
     "text": "A **project** is a temporary, purposeful effort that creates a unique result — a product, service, capability or change — so that an organisation can move from where it is now to a better future state. The effort ends; the result is meant to keep creating value.",
     "title": "Project"
    },
    {
     "type": "keypoints",
     "items": [
      "**Temporary** — it has a planned start and a planned finish (the result may last for decades).",
      "**Unique** — the result, context or team has not been combined in exactly this way before.",
      "**Purposeful** — it exists to deliver a change that someone values, not just to keep busy.",
      "**Progressively elaborated** — details become clearer as you learn, so plans are refined over time."
     ],
     "title": "Four quick tests: is it a project?"
    },
    {
     "type": "compare",
     "title": "Projects vs operations vs products",
     "columns": [
      {
       "title": "Project",
       "items": [
        "Temporary effort with an end date",
        "Creates something new or changes something",
        "Team often assembled for the effort",
        "Success = outcomes and benefits enabled",
        "Example: building a mobile wallet's savings feature"
       ]
      },
      {
       "title": "Operations",
       "items": [
        "Ongoing and repetitive",
        "Sustains the business as it is",
        "Stable, permanent teams and processes",
        "Success = efficiency, reliability, service levels",
        "Example: processing 50,000 wallet transactions a day"
       ]
      },
      {
       "title": "Product",
       "items": [
        "Long-lived offering with its own life cycle",
        "Evolves through many projects or continuous releases",
        "Often owned by a stable, cross-functional team",
        "Success = customer and business value over time",
        "Example: the wallet app itself, improved every sprint"
       ]
      }
     ]
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "Many digital teams no longer 'finish' a project and walk away. They fund a **stable product team** and deliver change continuously. Project management skills still matter here — scope, risk, stakeholders, money and time do not disappear — they are simply applied in shorter, repeating loops.",
     "title": "Project thinking meets product thinking"
    },
    {
     "type": "layers",
     "title": "Where projects live: from strategy to daily work",
     "items": [
      {
       "label": "Strategy",
       "parts": [
        "Vision and mission",
        "Strategic objectives and OKRs",
        "Risk appetite"
       ]
      },
      {
       "label": "Portfolio",
       "parts": [
        "Chooses and balances investments",
        "Funds what best serves strategy",
        "Stops what no longer fits"
       ]
      },
      {
       "label": "Program",
       "parts": [
        "Coordinates related projects",
        "Manages shared dependencies",
        "Delivers combined benefits"
       ]
      },
      {
       "label": "Projects and products",
       "parts": [
        "Create the deliverables",
        "Enable outcomes",
        "Hand over to operations"
       ]
      },
      {
       "label": "Operations",
       "parts": [
        "Run the new capability",
        "Realise most of the benefits",
        "Feed back improvement ideas"
       ]
      }
     ]
    },
    {
     "type": "table",
     "title": "Project, program and portfolio at a glance",
     "head": [
      "Aspect",
      "Project",
      "Program",
      "Portfolio"
     ],
     "rows": [
      [
       "Main question",
       "Are we building this right?",
       "Are these related efforts adding up to the intended benefits?",
       "Are we investing in the right things?"
      ],
      [
       "Scope",
       "A defined result",
       "A set of related projects and activities",
       "All investments in a business area or company"
      ],
      [
       "Time frame",
       "Defined start and finish",
       "Usually longer, ends when benefits are secured",
       "Ongoing"
      ],
      [
       "Measured by",
       "Outcomes enabled, delivered within agreed constraints",
       "Benefits realised across components",
       "Strategic return and balance of the whole mix"
      ],
      [
       "Typical leader",
       "Project manager or delivery lead",
       "Program manager",
       "Portfolio manager or investment board"
      ]
     ]
    },
    {
     "type": "callout",
     "kind": "example",
     "text": "A Dhaka-based mobile financial services company runs **customer support** (operations) for its **wallet app** (product). This quarter it is building a **micro-savings feature** (project) as part of a **financial inclusion program** that also includes agent training and a rural marketing campaign. The executive team decides how much money goes to inclusion versus a new merchant-payments line — that is **portfolio** management.",
     "title": "One company, every level"
    },
    {
     "type": "framework",
     "title": "The ZPMP Value Loop — eight stages",
     "items": [
      {
       "label": "1",
       "title": "Frame",
       "text": "Clarify the problem, the value sought, the approach and the authority to proceed."
      },
      {
       "label": "2",
       "title": "Shape",
       "text": "Understand stakeholders, define scope and requirements, decide what matters most."
      },
      {
       "label": "3",
       "title": "Plan",
       "text": "Estimate, sequence, schedule and budget at a level of detail that fits the uncertainty."
      },
      {
       "label": "4",
       "title": "Deliver",
       "text": "Build and release value through agile, predictive or hybrid execution with built-in quality."
      },
      {
       "label": "5",
       "title": "Steer",
       "text": "Measure performance, manage risk and correct course using evidence."
      },
      {
       "label": "6",
       "title": "Lead",
       "text": "Build the team, communicate, resolve conflict and keep people aligned."
      },
      {
       "label": "7",
       "title": "Scale",
       "text": "Use digital and AI tools, manage organisational change and connect to the portfolio."
      },
      {
       "label": "8",
       "title": "Close",
       "text": "Hand over, confirm benefits, capture lessons and feed them into the next loop."
      }
     ]
    },
    {
     "type": "callout",
     "kind": "pro",
     "text": "Stages overlap and repeat. A two-week sprint runs through Plan, Deliver and Steer many times; Lead never stops; what you learn in Close becomes input to the next Frame. Use the loop as a **thinking checklist**, not as a rigid sequence of phases.",
     "title": "Why a loop, not a line"
    },
    {
     "type": "scenario",
     "title": "Project or operations?",
     "situation": "You work at a Chattogram logistics company. Your manager says: \"Please project-manage our monthly payroll run from now on — make a Gantt chart and run it as a project every month.\" Payroll has run the same way for six years without major problems. What is the best response?",
     "options": [
      {
       "text": "Agree and create a new project plan, charter and Gantt chart every month.",
       "feedback": "Weak. Monthly payroll is repetitive, ongoing work. Wrapping it in project overhead adds cost without adding value.",
       "best": false
      },
      {
       "text": "Explain that payroll is operations best managed with a stable process, checklist and service levels — and offer to run a separate project if the goal is to improve or automate payroll.",
       "feedback": "Best. You respect the distinction: operations are sustained with process controls, while a defined improvement (for example automating payroll) is a genuine project with its own end and benefits.",
       "best": true
      },
      {
       "text": "Refuse, because project managers should not touch operational work.",
       "feedback": "Weak. Project managers often work closely with operations, and refusing helps no one. The issue is choosing the right management approach, not avoiding the work.",
       "best": false
      },
      {
       "text": "Turn payroll into a Kanban board and call it an agile project.",
       "feedback": "Partly useful — a visual board can help any repeating work — but calling ongoing operations a project confuses accountability and success measures.",
       "best": false
      }
     ]
    },
    {
     "type": "keypoints",
     "items": [
      "Value and outcomes matter more than finishing a list of tasks.",
      "Teams are often distributed across cities and time zones, working through digital tools.",
      "AI-assisted tools draft plans, summarise meetings and flag risks — people still own the judgement (covered in Scale).",
      "Regulation, data privacy and sustainability expectations change mid-project.",
      "Most organisations blend predictive and agile methods rather than picking one."
     ],
     "title": "What makes project work different in 2026"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Project",
       "def": "A temporary, purposeful effort that creates a unique product, service, capability or change to move an organisation toward a better future state."
      },
      {
       "term": "Operations",
       "def": "Ongoing, repetitive work that sustains the organisation's existing products and services."
      },
      {
       "term": "Program",
       "def": "A group of related projects and activities managed together so their combined benefits are greater than if they were managed separately."
      },
      {
       "term": "Portfolio",
       "def": "The full set of projects, programs and operational investments an organisation manages to achieve its strategy, selected and balanced as a whole."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which of these is the clearest example of a project?",
       "options": [
        "Answering customer calls at a bank's contact centre every day",
        "Producing 20,000 shirts per week on an existing production line",
        "Migrating a bank's core system to a cloud platform by next March",
        "Running the monthly payroll for all staff across the company's branches"
       ],
       "answer": 2,
       "explain": "A core-system migration is temporary, unique and creates a change. The others are ongoing, repetitive operations."
      },
      {
       "q": "A company groups an app launch, agent training and a marketing campaign so that together they increase rural financial inclusion. This group is best described as a:",
       "options": [
        "Portfolio",
        "Program",
        "Product",
        "Operation"
       ],
       "answer": 1,
       "explain": "Related efforts coordinated for combined benefits form a program. A portfolio is the wider investment mix across many goals."
      },
      {
       "q": "What does 'progressively elaborated' mean?",
       "options": [
        "The project grows larger every month",
        "Details are refined as more becomes known",
        "The plan is fixed on day one and never changed",
        "Stakeholders are added gradually"
       ],
       "answer": 1,
       "explain": "Progressive elaboration means plans and requirements become more detailed as information and learning increase."
      },
      {
       "q": "In the ZPMP Value Loop, which stage focuses on measuring performance, managing risk and correcting course?",
       "options": [
        "Steer",
        "Shape",
        "Deliver",
        "Close"
       ],
       "answer": 0,
       "explain": "Steer is about evidence-based control: measurement, risk and course correction. Shape covers stakeholders and scope; Close covers handover and lessons."
      },
      {
       "q": "Why do many digital organisations fund stable product teams rather than one-off projects?",
       "options": [
        "Because project management is no longer needed in digital firms",
        "Because product work does not need budgets or funding decisions",
        "To deliver change continuously and keep product knowledge in one team",
        "To reduce how often teams need to talk directly to customers"
       ],
       "answer": 2,
       "explain": "Stable product teams keep knowledge and deliver value continuously. Project management skills are still applied, but in shorter loops."
      }
     ]
    }
   ]
  },
  {
   "id": "m1-l2",
   "title": "The Value Mindset, Principles & Performance Domains",
   "subtitle": "Why modern project management starts with value — and the principles and domains that guide judgement",
   "minutes": 25,
   "objectives": [
    "Trace the chain from outputs to outcomes, benefits and value",
    "Explain the twelve principles of modern project management in your own words",
    "Describe the eight performance domains and what good looks like in each"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "A project can finish on time, on budget and to specification — and still be a failure. If nobody uses the new system, if the clinic is built where patients cannot reach it, if the feature solves a problem customers do not have, the organisation has spent money and gained nothing. Modern project management therefore measures success by **value delivered**, not tasks completed."
    },
    {
     "type": "flow",
     "title": "From work to value",
     "items": [
      {
       "label": "Activities",
       "text": "The work the team does"
      },
      {
       "label": "Outputs",
       "text": "Deliverables: the app, the building, the report"
      },
      {
       "label": "Outcomes",
       "text": "What changes because people use the outputs"
      },
      {
       "label": "Benefits",
       "text": "Measurable gains for the organisation or society"
      },
      {
       "label": "Value",
       "text": "Worth to stakeholders after cost, risk and time"
      }
     ]
    },
    {
     "type": "callout",
     "kind": "example",
     "text": "**Output:** a booking app is live. **Outcome:** 60% of patients book online instead of queuing. **Benefit:** phone calls fall by a third and average waiting time drops by 25 minutes. **Value:** a calmer front desk, staff time redeployed to patient care and better patient experience — worth far more than the build cost.",
     "title": "A hospital appointment app"
    },
    {
     "type": "text",
     "text": "Organisations create value through a connected **value delivery system**: portfolios choose investments, programs and projects create capabilities, products evolve them and operations run them. Information must flow both ways — strategy guides projects, and evidence from projects corrects strategy."
    },
    {
     "type": "framework",
     "title": "Twelve principles of modern project management (the PMBOK 7th edition set, in ZPMP words)",
     "items": [
      {
       "label": "P1",
       "title": "Act as a responsible steward",
       "text": "Look after money, people, trust and the environment as if they were your own, and act with integrity."
      },
      {
       "label": "P2",
       "title": "Build a team that works together",
       "text": "Create a safe, collaborative environment where people share accountability for results."
      },
      {
       "label": "P3",
       "title": "Engage stakeholders genuinely",
       "text": "Involve the people affected early and often, and understand their interests and influence."
      },
      {
       "label": "P4",
       "title": "Keep value at the centre",
       "text": "Constantly check that the work still leads to the intended outcomes and benefits."
      },
      {
       "label": "P5",
       "title": "Think in systems",
       "text": "See the project as a set of interacting parts within a wider organisation; changes ripple."
      },
      {
       "label": "P6",
       "title": "Lead, whatever your title",
       "text": "Motivate, influence and set direction — leadership is a behaviour, not a job title."
      },
      {
       "label": "P7",
       "title": "Tailor the approach",
       "text": "Fit methods, processes and documents to the context instead of applying one recipe everywhere."
      },
      {
       "label": "P8",
       "title": "Build quality in",
       "text": "Prevent defects through good design and clear acceptance criteria rather than inspecting them out later."
      },
      {
       "label": "P9",
       "title": "Navigate complexity",
       "text": "Expect surprises from human behaviour, ambiguity and technology; use feedback to find a way through."
      },
      {
       "label": "P10",
       "title": "Respond to risk wisely",
       "text": "Manage threats and opportunities so the overall risk exposure supports the goals."
      },
      {
       "label": "P11",
       "title": "Stay adaptable and resilient",
       "text": "Absorb setbacks, recover quickly and adjust plans as conditions change."
      },
      {
       "label": "P12",
       "title": "Enable change",
       "text": "Help people adopt the new way of working so the future state is actually reached."
      }
     ]
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "A process says *what to do*. A principle says *what matters* when the process does not fit. When you meet a situation no template covers — and you will — fall back on the principles.",
     "title": "Principles guide judgement; processes prescribe steps"
    },
    {
     "type": "framework",
     "title": "Eight performance domains — where effort must go well",
     "items": [
      {
       "label": "D1",
       "title": "Stakeholders",
       "text": "Productive relationships and agreement with the people who influence or are affected by the project."
      },
      {
       "label": "D2",
       "title": "Team",
       "text": "Shared ownership, high performance and healthy team culture."
      },
      {
       "label": "D3",
       "title": "Development approach and life cycle",
       "text": "A delivery approach and phase structure that suit the product and context."
      },
      {
       "label": "D4",
       "title": "Planning",
       "text": "Enough organised, coordinated planning to deliver — no more, no less."
      },
      {
       "label": "D5",
       "title": "Project work",
       "text": "Efficient processes, resource and supplier management, and continuous learning."
      },
      {
       "label": "D6",
       "title": "Delivery",
       "text": "Scope and quality that achieve the intended outcomes."
      },
      {
       "label": "D7",
       "title": "Measurement",
       "text": "Reliable data to understand performance and act early (developed in Steer)."
      },
      {
       "label": "D8",
       "title": "Uncertainty",
       "text": "Awareness of risk, ambiguity, complexity and volatility, with responses that fit (developed in Steer)."
      }
     ]
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "Professional standards are revised from time to time and may regroup principles and domains under new names. Learn the **ideas** here, then check the exact edition and outline used by any external exam you plan to take.",
     "title": "Editions change — ideas last"
    },
    {
     "type": "compare",
     "title": "Output mindset vs value mindset",
     "columns": [
      {
       "title": "Output mindset",
       "items": [
        "\"Did we deliver every feature on the list?\"",
        "Success declared at go-live",
        "Change requests seen as threats",
        "Reports show % of tasks complete",
        "PM acts as task tracker"
       ]
      },
      {
       "title": "Value mindset",
       "items": [
        "\"Did the change achieve the outcome we needed?\"",
        "Success confirmed when benefits appear",
        "Change welcomed when it increases value",
        "Reports show outcomes, risks and decisions needed",
        "PM acts as value navigator and integrator"
       ]
      }
     ]
    },
    {
     "type": "scenario",
     "title": "Delivered — but will it be used?",
     "situation": "You are managing a field-sales app for a Dhaka consumer-goods company. The sponsor's main concern is go-live on 1 March. In user tests, sales officers say the order screen is too slow on low-end phones in poor-signal areas. Fixing it would take two extra weeks. What should you do FIRST?",
     "options": [
      {
       "text": "Go live on 1 March as promised; performance can be fixed later.",
       "feedback": "Weak. Hitting the date while the main users cannot work in the field delivers an output but little value, and early bad experiences damage adoption.",
       "best": false
      },
      {
       "text": "Quietly add two weeks to the schedule and inform the sponsor afterwards.",
       "feedback": "Weak. Changing the baseline without the sponsor undermines governance and trust.",
       "best": false
      },
      {
       "text": "Bring the evidence to the sponsor with options — e.g. a smaller release for good-signal regions on 1 March plus the performance fix two weeks later — and let the sponsor decide based on value.",
       "feedback": "Best. You keep value at the centre, make the trade-off visible and give the decision-maker clear options. This reflects stewardship, stakeholder engagement and value-focused principles.",
       "best": true
      },
      {
       "text": "Ask the developers to work weekends until it is fixed by 1 March.",
       "feedback": "Weak as a first move. Overtime may be one option, but deciding it alone hides the trade-off and risks burnout and quality problems.",
       "best": false
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "Think of a project you know that finished on time and on budget but disappointed its users or sponsor. Which link in the chain — output, outcome, benefit or value — broke, and which principle would have helped most?"
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Patients now book appointments online instead of queuing. In the value chain this is best described as:",
       "options": [
        "An output",
        "An activity",
        "A constraint",
        "An outcome"
       ],
       "answer": 3,
       "explain": "An outcome is the change in behaviour or capability that results from using an output. The app itself is the output."
      },
      {
       "q": "Which principle is most directly applied when a PM adapts documents and ceremonies to a small, low-risk project?",
       "options": [
        "Build quality in",
        "Stay adaptable and resilient",
        "Tailor the approach",
        "Think in systems"
       ],
       "answer": 2,
       "explain": "Tailoring means fitting the approach to the context instead of applying every process by default."
      },
      {
       "q": "A change in one team's API causes delays in two other teams. Which principle best helps the PM anticipate this?",
       "options": [
        "Act as a responsible steward",
        "Lead, whatever your title",
        "Stay adaptable",
        "Think in systems"
       ],
       "answer": 3,
       "explain": "Systems thinking means seeing interactions and ripple effects across parts of the project and organisation."
      },
      {
       "q": "Which performance domain focuses on choosing between predictive, adaptive and hybrid delivery?",
       "options": [
        "Development approach and life cycle",
        "Planning",
        "Delivery",
        "Project work"
       ],
       "answer": 0,
       "explain": "That domain covers the delivery approach, cadence and phases that suit the product and context."
      },
      {
       "q": "Why are principles especially useful to a project manager?",
       "options": [
        "They replace the need for any defined process or methodology",
        "They are only needed on agile projects, not on predictive ones",
        "They guarantee success when every principle is applied in full",
        "They guide judgement when no process or template fits"
       ],
       "answer": 3,
       "explain": "Principles are guidance for behaviour and decisions; they help most when the situation is new or ambiguous."
      }
     ]
    }
   ]
  },
  {
   "id": "m1-l3",
   "title": "Life Cycles & Tailoring the Approach",
   "subtitle": "Predictive, iterative, incremental, agile and hybrid — and how to choose with confidence",
   "minutes": 28,
   "objectives": [
    "Compare predictive, iterative, incremental, agile and hybrid life cycles",
    "Use an uncertainty matrix to select a starting approach",
    "Tailor practices to the project, team and organisation"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "A **project life cycle** is the series of phases a project passes through from start to finish. The **development approach** is how the product is created within those phases. Choosing the wrong approach is one of the most expensive early mistakes a project can make — and one of the easiest to avoid."
    },
    {
     "type": "table",
     "title": "Five life cycles compared",
     "head": [
      "Approach",
      "How it works",
      "Requirements",
      "When value arrives",
      "Best fit"
     ],
     "rows": [
      [
       "Predictive",
       "Plan the whole effort up front, then execute in sequence",
       "Fixed early",
       "Mostly at the end",
       "Stable scope, high cost of change, e.g. building construction"
      ],
      [
       "Iterative",
       "Repeat cycles to refine the solution through feedback",
       "Clarified through cycles",
       "At the end, but solution improves each cycle",
       "Unclear solution, e.g. new service design"
      ],
      [
       "Incremental",
       "Deliver usable pieces one after another",
       "Defined per increment",
       "Each increment adds value",
       "Value can be split, e.g. district-by-district rollout"
      ],
      [
       "Agile",
       "Short iterative and incremental cycles with constant feedback",
       "Evolve continuously",
       "Frequently, often every 1–4 weeks",
       "High uncertainty, fast learning needed, e.g. digital products"
      ],
      [
       "Hybrid",
       "Combine elements deliberately",
       "Mixed: some fixed, some evolving",
       "Depends on the design",
       "Mixed work types, regulation plus innovation"
      ]
     ]
    },
    {
     "type": "callout",
     "kind": "definition",
     "text": "**Iterative** = making the *same thing better* through repeated cycles (sketch → prototype → refined prototype). **Incremental** = adding *more pieces* of finished value over time (module 1, then module 2). Agile combines both.",
     "title": "Iterative vs incremental"
    },
    {
     "type": "flow",
     "title": "A typical hybrid life cycle",
     "items": [
      {
       "label": "Initiate",
       "text": "Charter and business case approved"
      },
      {
       "label": "Design and approvals",
       "text": "Architecture, compliance and vendor contracts fixed"
      },
      {
       "label": "Build in sprints",
       "text": "Features delivered and demoed every two weeks"
      },
      {
       "label": "Integration and sign-off",
       "text": "Regulatory and security acceptance gate"
      },
      {
       "label": "Rollout in waves",
       "text": "Region by region, learning between waves"
      },
      {
       "label": "Close and transition",
       "text": "Handover to operations, lessons captured"
      }
     ]
    },
    {
     "type": "text",
     "text": "To choose a starting approach, ask two questions. **How clear and agreed are the requirements?** And **how certain is the way we will build it** — the technology or method? Plotting your project on these two axes is a practical version of the well-known Stacey-style complexity matrix."
    },
    {
     "type": "table",
     "title": "The ZPMP uncertainty matrix",
     "head": [
      "Zone",
      "Requirements",
      "Technology or method",
      "Suggested starting approach"
     ],
     "rows": [
      [
       "Clear",
       "Known and agreed",
       "Proven",
       "Predictive; use standard plans and checklists"
      ],
      [
       "Complicated",
       "Mostly known",
       "Needs expert analysis",
       "Predictive or hybrid with expert reviews and prototypes for risky parts"
      ],
      [
       "Complex",
       "Evolving or disputed",
       "Partly unknown",
       "Agile or hybrid; short cycles, frequent feedback, small experiments"
      ],
      [
       "Chaotic",
       "Unclear and changing fast",
       "Unknown",
       "Act to stabilise first (crisis mode), then move to a complex-zone approach"
      ]
     ]
    },
    {
     "type": "table",
     "title": "Tailoring factors",
     "head": [
      "Factor",
      "Leans predictive when…",
      "Leans adaptive when…"
     ],
     "rows": [
      [
       "Requirement stability",
       "Scope is fixed by law, design or contract",
       "Users will discover needs as they see the product"
      ],
      [
       "Cost of change",
       "Late change is very expensive (concrete, hardware)",
       "Change is cheap (software, content, process)"
      ],
      [
       "Delivery options",
       "Value only exists when everything is complete",
       "Value can be released in usable slices"
      ],
      [
       "Regulation and safety",
       "Heavy documentation and formal approvals are mandatory",
       "Lighter governance is acceptable"
      ],
      [
       "Stakeholder availability",
       "Customer reviews only at fixed gates",
       "A product owner or users are available every week"
      ],
      [
       "Team experience",
       "Team is used to phase-based delivery",
       "Team is cross-functional and experienced with agile"
      ]
     ]
    },
    {
     "type": "steps",
     "title": "Tailoring in five moves",
     "items": [
      {
       "title": "Diagnose",
       "text": "Assess uncertainty, size, criticality, regulation, culture and team capability."
      },
      {
       "title": "Pick a base",
       "text": "Choose a starting approach — predictive, agile or a hybrid pattern your organisation already knows."
      },
      {
       "title": "Adjust",
       "text": "Add, remove or scale practices: lighter documents for small projects, extra reviews for safety-critical ones."
      },
      {
       "title": "Agree",
       "text": "Confirm the approach with the sponsor, governance bodies and the team so expectations match."
      },
      {
       "title": "Inspect and adapt",
       "text": "Review the approach itself at retrospectives and phase gates; change what is not working."
      }
     ]
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "Some teams call themselves hybrid but simply run sprints inside a big upfront specification followed by a single big-bang release. They carry the cost of agile ceremonies **and** the risk of late feedback. Good hybrid design is deliberate: each element is there for a reason.",
     "title": "Beware the worst of both worlds"
    },
    {
     "type": "callout",
     "kind": "pro",
     "text": "Your **organisation** sets the framework (governance, gates, standard templates). Each **project** tailors that framework to its context. Each **team** then tailors its own working agreements. Write down what you tailored and why — auditors and new team members will thank you.",
     "title": "Tailor at three levels"
    },
    {
     "type": "scenario",
     "title": "Choosing an approach for a bank",
     "situation": "A commercial bank in Dhaka must deliver a new regulatory reporting system by a fixed central-bank deadline, with requirements defined in a published circular. In the same project the bank wants a new customer self-service portal whose features are still being debated by marketing. What approach should the PM recommend?",
     "options": [
      {
       "text": "Fully predictive for both parts, with a detailed specification signed off before any work begins.",
       "feedback": "Weak. The regulatory part suits predictive planning, but freezing the portal's undecided features would lock in guesses and invite costly change later.",
       "best": false
      },
      {
       "text": "Fully agile for both parts, with no fixed milestones.",
       "feedback": "Weak. The regulatory deadline and defined requirements need firm milestones, formal testing and sign-off.",
       "best": false
      },
      {
       "text": "A hybrid: predictive planning and formal sign-off for the regulatory component, agile sprints with frequent feedback for the portal, and a shared integration and release plan.",
       "feedback": "Best. Each part gets the approach that matches its uncertainty, and an integrated plan manages the dependencies between them.",
       "best": true
      },
      {
       "text": "Delay the portal until the regulatory system is complete, then decide.",
       "feedback": "Not ideal. It may reduce load, but it delays value without need and ignores that the two parts can be run in parallel with different approaches.",
       "best": false
      }
     ]
    },
    {
     "type": "checklist",
     "title": "Approach selection checklist",
     "items": [
      "I have rated requirement clarity and technical certainty for each major deliverable.",
      "I know where late change would be very expensive and where it is cheap.",
      "I have checked whether value can be released in usable increments.",
      "Mandatory regulations, approvals and contract terms are identified.",
      "A product owner or user representative is available at the cadence the approach needs.",
      "The team has the skills — or the coaching — the chosen approach requires.",
      "Phase gates and governance checkpoints are mapped onto the life cycle.",
      "The chosen approach and the reasons for tailoring are written down and agreed with the sponsor.",
      "A date is set to review whether the approach is working."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "A team delivers a payroll module first, then leave management, then performance reviews — each usable on release. This is mainly:",
       "options": [
        "Iterative development",
        "Predictive development",
        "Prototype-driven development",
        "Incremental development"
       ],
       "answer": 3,
       "explain": "Adding usable pieces of value one after another is incremental delivery."
      },
      {
       "q": "Requirements are disputed and the technology is new to the team. In the uncertainty matrix this project is most likely:",
       "options": [
        "Clear",
        "Complicated",
        "Complex",
        "Chaotic"
       ],
       "answer": 2,
       "explain": "Evolving requirements with partly unknown technology place the work in the complex zone, which favours agile or hybrid approaches."
      },
      {
       "q": "Which factor most strongly favours a predictive approach?",
       "options": [
        "Users want to see early versions",
        "The cost of late change is very high",
        "The team is cross-functional",
        "Requirements will emerge from customer feedback"
       ],
       "answer": 1,
       "explain": "When late change is very expensive — such as poured concrete or manufactured hardware — careful upfront planning pays off."
      },
      {
       "q": "What is the main danger of a poorly designed hybrid?",
       "options": [
        "It always costs more than a purely predictive or agile approach",
        "It may combine heavy upfront specification with late feedback",
        "It removes the need for a sponsor and for formal governance gates",
        "It forbids sprints in any phase that has a fixed regulatory deadline"
       ],
       "answer": 1,
       "explain": "A hybrid without deliberate design can carry agile overhead while still getting feedback only at the end."
      },
      {
       "q": "What should a PM do after choosing and tailoring an approach?",
       "options": [
        "Review it periodically and adapt it if it is not working",
        "Lock it in for the whole project to give stability",
        "Ask the team to follow it without further discussion",
        "Replace it every sprint to experiment with new practices"
       ],
       "answer": 0,
       "explain": "Tailoring is continuous: inspect the approach at retrospectives and gates and adjust where needed."
      }
     ]
    }
   ]
  },
  {
   "id": "m1-l4",
   "title": "Business Case, Benefits & OKRs",
   "subtitle": "Justify the investment, define the benefits and connect the project to strategy",
   "minutes": 26,
   "objectives": [
    "Outline the parts of a lean business case",
    "Calculate and interpret payback, ROI, NPV and benefit–cost ratio",
    "Write a benefits register entry and link a project to OKRs"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Before an organisation commits people and money, someone must answer a simple question: **why this, why now, and is it worth it?** The **business case** answers that question. It is not a one-time formality — it is the yardstick you return to whenever a major decision or change arises."
    },
    {
     "type": "steps",
     "title": "Anatomy of a lean business case",
     "items": [
      {
       "title": "Problem or opportunity",
       "text": "What is wrong or possible today? Use evidence: data, complaints, market signals."
      },
      {
       "title": "Options",
       "text": "At least three, including 'do nothing' and 'do the minimum', so the decision is a real choice."
      },
      {
       "title": "Benefits",
       "text": "What measurable improvements will each option bring, and when?"
      },
      {
       "title": "Costs and funding",
       "text": "One-time and ongoing costs, and where the money comes from."
      },
      {
       "title": "Risks and assumptions",
       "text": "What could make the case fail, and what are we assuming to be true?"
      },
      {
       "title": "Recommendation",
       "text": "The preferred option, the decision criteria and the next step requested."
      }
     ]
    },
    {
     "type": "formula",
     "title": "Common investment measures",
     "items": [
      {
       "name": "Payback period",
       "expr": "Initial investment ÷ annual net cash inflow (for even inflows)",
       "meaning": "How long until the money spent is recovered. Shorter is safer, but it ignores what happens after payback."
      },
      {
       "name": "Return on investment (ROI)",
       "expr": "(Total benefits − Total costs) ÷ Total costs × 100%",
       "meaning": "Gain per unit of cost. Simple, but ignores the timing of money."
      },
      {
       "name": "Net present value (NPV)",
       "expr": "Σ [Cash flow in year t ÷ (1 + r)^t] − Initial investment",
       "meaning": "Value today of future cash flows, discounted at rate r. Positive NPV means the investment beats the required return."
      },
      {
       "name": "Benefit–cost ratio (BCR)",
       "expr": "Present value of benefits ÷ Present value of costs",
       "meaning": "Greater than 1 means benefits exceed costs in today's money."
      }
     ]
    },
    {
     "type": "callout",
     "kind": "example",
     "text": "A garment exporter can spend **Tk 50 lakh** on an automated cutting-room system that saves **Tk 20 lakh a year for 3 years**. Payback = 50 ÷ 20 = **2.5 years**. Simple ROI = (60 − 50) ÷ 50 = **20%**. But at a 10% discount rate the savings are worth 18.18 + 16.53 + 15.03 = **Tk 49.74 lakh** today, so NPV ≈ **−Tk 0.26 lakh**. Lesson: the timing of money can turn an apparently good case into a marginal one — present more than one measure.",
     "title": "Same project, different verdicts"
    },
    {
     "type": "callout",
     "kind": "pro",
     "text": "Some valuable projects have weak financial returns: regulatory compliance, safety, sustainability and staff wellbeing. Score them on **strategic fit, risk reduction and obligation** as well as finance. Equally, a great NPV does not rescue a project that does not fit the strategy.",
     "title": "Do not decide on money alone"
    },
    {
     "type": "text",
     "text": "**Benefits management** ensures that the gains promised in the business case actually happen. Most benefits appear **after** the project closes, when operations use the new capability. That is why each benefit needs a named **owner** in the business — usually not the project manager — plus a baseline, a target and a date to measure."
    },
    {
     "type": "template",
     "title": "Benefits register",
     "purpose": "Record each expected benefit so it can be tracked from business case to realisation.",
     "columns": [
      "Benefit",
      "Measure (KPI)",
      "Baseline",
      "Target and date",
      "Benefit owner",
      "How and when measured"
     ],
     "example": [
      [
       "Faster customer onboarding",
       "Median minutes to open an account",
       "18 min",
       "6 min by June 2027",
       "Head of Retail Operations",
       "Monthly report from onboarding system"
      ],
      [
       "Lower support load",
       "Assisted tickets per 1,000 sign-ups",
       "120",
       "70 by Sept 2027",
       "Customer Service Manager",
       "Quarterly ticket analysis"
      ]
     ],
     "rows": 6
    },
    {
     "type": "text",
     "text": "**OKRs (Objectives and Key Results)** are a popular way to connect strategy to work. An **objective** is a short, inspiring, qualitative statement of where you want to go. **Key results** are two to five measurable outcomes that show you got there. Projects and initiatives are the bets you place to move the key results."
    },
    {
     "type": "compare",
     "title": "OKRs, KPIs and project success criteria",
     "columns": [
      {
       "title": "OKR",
       "items": [
        "Sets direction for a period (often a quarter or year)",
        "Ambitious, may not be fully reached",
        "Measures outcomes, not tasks",
        "Owned by a business team"
       ]
      },
      {
       "title": "KPI",
       "items": [
        "Monitors the health of ongoing operations",
        "Has normal ranges and alerts",
        "Continues indefinitely",
        "Example: system uptime, cost per order"
       ]
      },
      {
       "title": "Project success criteria",
       "items": [
        "Agreed at the start, recorded in the charter",
        "Define when this project is a success",
        "Mix of delivery and outcome measures",
        "Should trace to OKRs and the business case"
       ]
      }
     ]
    },
    {
     "type": "callout",
     "kind": "example",
     "text": "**Objective:** Make digital account opening effortless for first-time customers in rural districts. **KR1:** Raise application completion from 42% to 70%. **KR2:** Cut median onboarding time from 18 to 6 minutes. **KR3:** Reduce agent-assisted tickets per 1,000 sign-ups by 40%. **Project bet:** redesign the e-KYC flow with offline-first photo capture.",
     "title": "OKR in action"
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "\"Launch the new app\" is a task, not a key result. Ask: *if we do this, what number changes?* Write that number as the key result.",
     "title": "Outputs disguised as key results"
    },
    {
     "type": "scenario",
     "title": "Two projects, one budget slot",
     "situation": "The portfolio board can fund one project this year. Project A (a merchant loyalty scheme) shows a high ROI but does not support any current company objective. Project B (an e-KYC redesign) shows a modest positive NPV and directly moves two of this year's key results. As the PM preparing the recommendation, what is BEST?",
     "options": [
      {
       "text": "Recommend A because ROI is the most objective measure.",
       "feedback": "Weak. ROI ignores strategic fit and timing of money; a high-ROI project that serves no objective may distract the organisation.",
       "best": false
      },
      {
       "text": "Recommend B, showing its strategic alignment, financial measures and risks, and note A as a candidate for a future cycle.",
       "feedback": "Best. You give the board a balanced view — strategy, finance and risk — and keep A visible for later consideration.",
       "best": true
      },
      {
       "text": "Recommend funding both by cutting each budget in half.",
       "feedback": "Weak. Splitting funding without re-planning usually means neither project delivers its benefits.",
       "best": false
      },
      {
       "text": "Avoid making any recommendation; it is the board's job.",
       "feedback": "Weak. The board decides, but a good recommendation with clear evidence is exactly what decision-makers need from you.",
       "best": false
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "A project costs Tk 30 lakh and returns Tk 10 lakh a year in even net inflows. What is the payback period?",
       "options": [
        "2 years",
        "3 years",
        "10 years",
        "30 years"
       ],
       "answer": 1,
       "explain": "Payback = 30 ÷ 10 = 3 years."
      },
      {
       "q": "Which measure accounts for the time value of money?",
       "options": [
        "Simple return on investment",
        "Payback period",
        "Percent complete",
        "Net present value"
       ],
       "answer": 3,
       "explain": "NPV discounts future cash flows to today's value. Simple ROI and payback ignore timing."
      },
      {
       "q": "Who should normally own a business benefit such as 'lower support costs'?",
       "options": [
        "A business manager who will run the new capability",
        "The project manager who delivered the capability",
        "The vendor that supplied and supports the system",
        "The quality team that verified the deliverables"
       ],
       "answer": 0,
       "explain": "Benefits usually appear after the project ends, so they are owned by the business manager responsible for the operation."
      },
      {
       "q": "Which is a well-written key result?",
       "options": [
        "Launch the redesigned app to all customers by June",
        "Increase completion rate from 42% to 70% by June",
        "Hold weekly product meetings with the sales team",
        "Hire two senior developers before the end of March"
       ],
       "answer": 1,
       "explain": "A key result is a measurable outcome. The others are tasks or outputs."
      },
      {
       "q": "Why should a business case include a 'do nothing' option?",
       "options": [
        "Because it is usually the cheapest and lowest-risk choice",
        "Because regulators require it in every jurisdiction",
        "To keep the document short by limiting the options",
        "To expose the cost and risk of inaction for comparison"
       ],
       "answer": 3,
       "explain": "The 'do nothing' baseline reveals what happens without investment, so decision-makers can compare options fairly."
      }
     ]
    }
   ]
  },
  {
   "id": "m1-l5",
   "title": "The Project Charter & the Modern Project Manager",
   "subtitle": "Authorise the project properly and step into the role with the right mindset",
   "minutes": 25,
   "objectives": [
    "Explain the purpose and contents of a project charter",
    "Draft a one-page charter for a real initiative",
    "Describe the responsibilities and mindset of a modern project manager"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "The **project charter** is the birth certificate of a project. Issued by the sponsor, it formally authorises the project to exist, names the project manager and gives that person authority to use organisational resources. Without one, you are leading work nobody has officially agreed to."
    },
    {
     "type": "compare",
     "title": "Business case, charter and management plan",
     "columns": [
      {
       "title": "Business case",
       "items": [
        "Answers: should we invest?",
        "Options, benefits, costs, risks",
        "Owned by the sponsor",
        "Revisited at major decisions"
       ]
      },
      {
       "title": "Project charter",
       "items": [
        "Answers: what is authorised and who leads it?",
        "Purpose, objectives, high-level scope, milestones, budget, authority",
        "Signed by the sponsor",
        "Short — often one to three pages"
       ]
      },
      {
       "title": "Project management plan",
       "items": [
        "Answers: how will we deliver and control it?",
        "Baselines, subsidiary plans, approach, governance",
        "Owned by the PM with the team",
        "Living document, updated through change control"
       ]
      }
     ]
    },
    {
     "type": "template",
     "title": "One-page project charter",
     "purpose": "A lean charter the sponsor can read in five minutes and sign. Fill one row per section.",
     "columns": [
      "Section",
      "Guiding question",
      "Your project's answer"
     ],
     "example": [
      [
       "Purpose",
       "Why does this project exist, and why now?",
       "Field staff register flood-affected households on paper; data reaches head office 3 weeks late, delaying aid."
      ],
      [
       "Success criteria",
       "How will we know it worked?",
       "95% of registrations synced within 48 hours; aid disbursed within 10 days of registration by Dec 2027."
      ]
     ],
     "rows": 8
    },
    {
     "type": "keypoints",
     "items": [
      "Purpose and link to strategy or OKRs",
      "Measurable objectives and success criteria",
      "High-level scope — what is in and what is explicitly out",
      "Key deliverables and summary milestones",
      "Summary budget and funding source",
      "Key stakeholders, sponsor and named project manager with authority level",
      "High-level risks, assumptions and constraints",
      "Approval requirements: who signs off what, and when"
     ],
     "title": "Sections to include in your charter"
    },
    {
     "type": "case",
     "title": "Charter for an NGO digital registration rollout",
     "context": "A national NGO is replacing paper-based beneficiary registration with a mobile app across 40 unions in flood-prone districts of Sylhet division. The donor has approved funding of USD 420,000 over 18 months and wants quarterly progress reports. Field officers have mixed smartphone skills; connectivity is poor in many areas. The country director is the sponsor; a regional programme coordinator has been asked to manage the project. Data protection rules for beneficiary information must be followed.",
     "questions": [
      "Who should issue and sign the charter, and why?",
      "Write two measurable success criteria.",
      "Name two items you would place explicitly out of scope.",
      "Which life cycle would you propose, and why?"
     ],
     "answer": "**Sponsor:** the country director signs, because the charter grants authority over NGO resources and links the project to the donor agreement. **Success criteria:** e.g. 95% of registrations synced within 48 hours of capture; average registration time under 8 minutes per household by month 12; zero reportable data-protection breaches. **Out of scope:** e.g. building a cash-transfer payment platform; replacing the head-office finance system; devices for partner organisations. **Life cycle:** hybrid — an agile build of the app with field pilots in two unions, then an incremental rollout in waves of about ten unions, with predictive elements for procurement, donor reporting and data-protection approval. This tests the app offline in real conditions before scaling."
    },
    {
     "type": "text",
     "text": "The modern project manager is less a task-master and more a **value-focused integrator and leader**. You connect strategy to delivery, people to purpose and plans to reality. On agile teams some traditional PM duties are shared by a product owner, a team coach and the team itself; your contribution shifts toward coordination across teams, stakeholders, risk, budget and governance."
    },
    {
     "type": "framework",
     "title": "Six stances of the modern project manager",
     "items": [
      {
       "label": "M1",
       "title": "Value navigator",
       "text": "Keeps every decision tied to outcomes, benefits and the business case."
      },
      {
       "label": "M2",
       "title": "Integrator",
       "text": "Joins scope, schedule, cost, risk, quality and people into one coherent plan."
      },
      {
       "label": "M3",
       "title": "Servant leader",
       "text": "Removes obstacles, protects focus and grows the team's capability."
      },
      {
       "label": "M4",
       "title": "Adaptive planner",
       "text": "Plans in the right level of detail and updates plans as learning arrives."
      },
      {
       "label": "M5",
       "title": "Trusted communicator",
       "text": "Shares honest status, early bad news and clear options with stakeholders."
      },
      {
       "label": "M6",
       "title": "Ethical steward",
       "text": "Acts with honesty, fairness, respect and responsibility for people and planet."
      }
     ]
    },
    {
     "type": "table",
     "title": "Who does what across approaches",
     "head": [
      "Responsibility",
      "Predictive project",
      "Agile team",
      "Hybrid project"
     ],
     "rows": [
      [
       "Setting priorities",
       "PM with sponsor via baselines",
       "Product owner, continuously",
       "Product owner within PM-managed milestones"
      ],
      [
       "Detailed planning",
       "PM with team, up front",
       "Team, each iteration",
       "Both, at different levels"
      ],
      [
       "Removing impediments",
       "PM",
       "Team coach / Scrum Master and team",
       "PM and team coach together"
      ],
      [
       "Stakeholder and budget governance",
       "PM",
       "Often a PM, product owner or delivery lead outside the team",
       "PM"
      ]
     ]
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "A charter gives you **formal authority**, but most of the time you will lead people who do not report to you. Your real power comes from credibility, relationships and clarity of purpose — themes developed in the Lead stage.",
     "title": "Authority vs influence"
    },
    {
     "type": "scenario",
     "title": "No charter, but 'just start'",
     "situation": "A director calls you in: \"The board loves this idea. Start the vendor selection tomorrow — paperwork can come later.\" There is no charter, no confirmed budget and no named sponsor. What should you do FIRST?",
     "options": [
      {
       "text": "Start vendor meetings tomorrow to show enthusiasm.",
       "feedback": "Risky. Without authority or budget you may commit the organisation informally and waste vendors' and colleagues' time.",
       "best": false
      },
      {
       "text": "Refuse to do anything until a full project management plan is approved.",
       "feedback": "Too rigid. A full plan is not needed to begin; formal authorisation is.",
       "best": false
      },
      {
       "text": "Draft a one-page charter with the director within a day or two, confirm who the sponsor is and get it signed before engaging vendors.",
       "feedback": "Best. You respond quickly but secure authority, budget and clarity of purpose — the minimum needed to start responsibly.",
       "best": true
      },
      {
       "text": "Email the whole company announcing the project.",
       "feedback": "Weak. Announcing an unauthorised project creates expectations and confusion.",
       "best": false
      }
     ]
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Value",
       "def": "The worth, importance or usefulness of a result to stakeholders, after considering cost, risk and time."
      },
      {
       "term": "Benefit",
       "def": "A measurable improvement that results from an outcome and is valued by the organisation or society."
      },
      {
       "term": "Business case",
       "def": "A documented justification for an investment that compares options, benefits, costs and risks and recommends a way forward."
      },
      {
       "term": "OKR",
       "def": "Objectives and Key Results: a qualitative objective paired with a few measurable outcomes that show progress toward it."
      },
      {
       "term": "Project charter",
       "def": "A document issued by the sponsor that formally authorises a project and gives the project manager authority to apply resources."
      },
      {
       "term": "Life cycle",
       "def": "The series of phases a project passes through from start to completion."
      },
      {
       "term": "Tailoring",
       "def": "Deliberately adapting the approach, processes and documents to fit the context of a project, team and organisation."
      },
      {
       "term": "Hybrid approach",
       "def": "A deliberate combination of predictive and adaptive practices within one project."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Who normally issues and signs the project charter?",
       "options": [
        "The sponsor or initiating authority",
        "The project manager, once appointed",
        "The lead vendor or delivery partner",
        "The quality manager for the programme"
       ],
       "answer": 0,
       "explain": "The sponsor (or equivalent authority) issues the charter, which authorises the project and the PM."
      },
      {
       "q": "Which item belongs in a charter rather than in the detailed management plan?",
       "options": [
        "A full resource-levelled schedule",
        "High-level scope with key exclusions",
        "Day-by-day test scripts for each feature",
        "The detailed sprint backlog for release one"
       ],
       "answer": 1,
       "explain": "The charter carries high-level scope and exclusions; the detail belongs in later plans and backlogs."
      },
      {
       "q": "On an agile team, who usually owns day-to-day prioritisation of the backlog?",
       "options": [
        "The project manager",
        "The sponsor",
        "The product owner",
        "The finance team"
       ],
       "answer": 2,
       "explain": "The product owner orders the backlog to maximise value; the PM supports governance and coordination."
      },
      {
       "q": "A PM leads specialists who report to other managers. Their main source of power is likely to be:",
       "options": [
        "Formal authority from the organisation chart",
        "The threat of escalation to their line managers",
        "Influence built on credibility and relationships",
        "Control over their salaries and ratings"
       ],
       "answer": 2,
       "explain": "Most PMs lead through influence; formal authority is limited, especially in matrix organisations."
      },
      {
       "q": "Why should a charter state what is explicitly out of scope?",
       "options": [
        "To prevent misunderstandings and reduce scope creep",
        "To make the charter more complete for auditors",
        "Because sponsors prefer to approve smaller scopes",
        "To avoid having to list every deliverable in detail"
       ],
       "answer": 0,
       "explain": "Clear exclusions set expectations early and give you a reference point when extra requests arrive."
      }
     ]
    }
   ]
  }
 ]
});
TRACK.modules.push({
 "id": "m2",
 "order": 2,
 "code": "Shape",
 "title": "Stakeholders, Scope & Requirements",
 "subtitle": "Shape the work: understand the people, discover the real needs and keep scope under control",
 "outcomes": [
  "Identify and analyse stakeholders using the power–interest grid and salience model",
  "Plan engagement and choose elicitation techniques that uncover real needs",
  "Write INVEST user stories with Given/When/Then acceptance criteria and agree ready and done",
  "Decompose scope with a WBS and dictionary, and manage a product backlog",
  "Prioritise with MoSCoW, value vs effort, Kano and WSJF and handle change without chaos"
 ],
 "lessons": [
  {
   "id": "m2-l1",
   "title": "Finding & Analysing Stakeholders",
   "subtitle": "Identify everyone who matters, then understand their power, interest and urgency",
   "minutes": 24,
   "objectives": [
    "Identify stakeholders systematically, including the less obvious ones",
    "Analyse stakeholders with the power–interest grid and the salience model",
    "Build and maintain a stakeholder register"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Projects rarely fail because of technology alone. They fail because someone important was missed, misunderstood or ignored until it was too late. A **stakeholder** is any person, group or organisation that can affect, be affected by, or believe they are affected by the project. Notice the last part: **perception counts**."
    },
    {
     "type": "steps",
     "title": "Identify stakeholders in four sweeps",
     "items": [
      {
       "title": "Start with the charter",
       "text": "List the sponsor, customers, users, team, suppliers and anyone named in contracts or the business case."
      },
      {
       "title": "Follow the value chain",
       "text": "Who supplies inputs, who uses outputs, who runs the result, who pays, who regulates?"
      },
      {
       "title": "Ask around",
       "text": "Interview early stakeholders: 'Who else should I speak to? Who might object?'"
      },
      {
       "title": "Look outward",
       "text": "Regulators, unions, community groups, media, partner NGOs, future users and those who lose something from the change."
      }
     ]
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "Some of the most influential stakeholders never attend your meetings: the IT security officer who can block go-live, the union representative, the regulator's desk officer, the night-shift supervisor whose process you are changing. Find them early.",
     "title": "The quiet stakeholders"
    },
    {
     "type": "checklist",
     "title": "Stakeholder identification checklist",
     "items": [
      "Sponsor, steering committee and funding bodies listed",
      "Direct users and their sub-groups listed separately",
      "People who operate, maintain or support the result after go-live included",
      "Regulators, auditors, data-protection and security functions checked",
      "Suppliers, contractors and partner organisations listed",
      "Groups who lose something from the change identified",
      "Community, unions, media or public interest groups considered",
      "Each stakeholder's interest, power and current engagement recorded with evidence",
      "Register reviewed with at least two experienced colleagues",
      "Date set to re-check the register"
     ]
    },
    {
     "type": "text",
     "text": "The **power–interest grid** plots each stakeholder by how much power they have over the project and how interested they are in it. It gives a quick first view of how much attention each group needs."
    },
    {
     "type": "table",
     "title": "Power–interest grid: four quadrants",
     "head": [
      "Quadrant",
      "Power / interest",
      "Typical stakeholders",
      "Strategy"
     ],
     "rows": [
      [
       "Manage closely",
       "High power, high interest",
       "Sponsor, key customer, steering committee",
       "Involve in decisions, consult often, no surprises"
      ],
      [
       "Keep satisfied",
       "High power, low interest",
       "Finance director, regulator, CIO",
       "Brief concisely, consult on what touches them, avoid overloading"
      ],
      [
       "Keep informed",
       "Low power, high interest",
       "End users, field staff, community groups",
       "Regular, clear updates and channels for feedback"
      ],
      [
       "Monitor",
       "Low power, low interest",
       "Peripheral departments, general public",
       "Light-touch updates; watch for changes in position"
      ]
     ]
    },
    {
     "type": "text",
     "text": "The **salience model** adds a third dimension. It looks at **power** (ability to impose their will), **legitimacy** (how appropriate their involvement is) and **urgency** (how time-sensitive and critical their claims are). Stakeholders who have all three are **definitive** and need immediate attention."
    },
    {
     "type": "framework",
     "title": "Salience model — the seven classes",
     "items": [
      {
       "label": "P",
       "title": "Dormant",
       "text": "Power only. Could matter a lot if they become interested."
      },
      {
       "label": "L",
       "title": "Discretionary",
       "text": "Legitimacy only. Fair claim but little pressure; good-citizen engagement."
      },
      {
       "label": "U",
       "title": "Demanding",
       "text": "Urgency only. Noisy but without power or legitimacy; manage, do not ignore."
      },
      {
       "label": "PL",
       "title": "Dominant",
       "text": "Power and legitimacy. Formal influence — often senior managers or regulators."
      },
      {
       "label": "PU",
       "title": "Dangerous",
       "text": "Power and urgency without legitimacy. Can disrupt — handle with care."
      },
      {
       "label": "LU",
       "title": "Dependent",
       "text": "Legitimacy and urgency, but depend on others' power — e.g. affected communities."
      },
      {
       "label": "PLU",
       "title": "Definitive",
       "text": "All three. Highest priority for engagement."
      }
     ]
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "Power and interest change. A regulator with little interest today becomes 'manage closely' the moment a complaint lands. Re-analyse at each phase gate, after major changes and whenever a stakeholder surprises you.",
     "title": "Grids are snapshots"
    },
    {
     "type": "template",
     "title": "Stakeholder register",
     "purpose": "One living table that captures who your stakeholders are and how you will engage them.",
     "columns": [
      "Stakeholder",
      "Role / organisation",
      "Interest and expectations",
      "Power / interest",
      "Current → desired engagement",
      "Engagement approach",
      "Owner"
     ],
     "example": [
      [
       "Head of Nursing",
       "Hospital operations",
       "Ward workflows stay safe during move",
       "High / High",
       "Neutral → Supportive",
       "Monthly design walk-through; nurse champions on each ward",
       "PM"
      ],
      [
       "City fire authority",
       "Regulator",
       "Compliance with fire code",
       "High / Low",
       "Unaware → Supportive",
       "Early pre-application meeting; formal submissions at design gate",
       "Facilities lead"
      ]
     ],
     "rows": 8
    },
    {
     "type": "scenario",
     "title": "The forgotten department",
     "situation": "Two months into building a new warehouse management system for a Gazipur garment exporter, you learn the customs compliance team was never consulted. They say the system must produce bonded-warehouse reports in a specific format, or the factory may face penalties. What should you do FIRST?",
     "options": [
      {
       "text": "Tell them the scope is already approved and they should raise a change request next year.",
       "feedback": "Weak. A legitimate stakeholder with a legal requirement cannot simply be postponed; the risk lands on the whole company.",
       "best": false
      },
      {
       "text": "Add them to the stakeholder register, meet them quickly to understand the requirement and its urgency, and assess the impact through the change process.",
       "feedback": "Best. You correct the identification gap, understand the real need and route any scope impact through proper change control.",
       "best": true
      },
      {
       "text": "Ask developers to add the report quietly to avoid delaying the project.",
       "feedback": "Weak. Unplanned work without impact analysis hides cost and schedule effects and bypasses governance.",
       "best": false
      },
      {
       "text": "Escalate to the sponsor and ask who is to blame for the omission.",
       "feedback": "Weak as a first step. Escalation may follow, but blame does not solve the requirement; understanding it does.",
       "best": false
      }
     ]
    },
    {
     "type": "keypoints",
     "items": [
      "Analyse groups, then split them when members differ (e.g. 'users' → senior nurses, junior nurses, ward clerks).",
      "Record **evidence** for each rating — what did they say or do?",
      "Keep sensitive analysis private; share engagement plans, not personal judgements.",
      "Note relationships: who influences whom?"
     ],
     "title": "Stakeholder analysis — practical tips"
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which stakeholders belong in the 'keep satisfied' quadrant?",
       "options": [
        "Low power, high interest",
        "Low power, low interest",
        "High power, high interest",
        "High power, low interest"
       ],
       "answer": 3,
       "explain": "High-power stakeholders with low interest should be kept satisfied without overloading them."
      },
      {
       "q": "In the salience model, a stakeholder with power, legitimacy and urgency is:",
       "options": [
        "Dormant",
        "Discretionary",
        "Definitive",
        "Dependent"
       ],
       "answer": 2,
       "explain": "Definitive stakeholders combine all three attributes and need the highest attention."
      },
      {
       "q": "Why is 'believe they are affected' part of the stakeholder definition?",
       "options": [
        "Only perceptions matter; actual effects are secondary",
        "It ensures that competitors and the media are always included in the analysis",
        "Perceptions can drive support or opposition as strongly as facts",
        "It is not part of the definition; only real impact counts"
       ],
       "answer": 2,
       "explain": "People who think they are affected act on that belief; ignoring them can create resistance."
      },
      {
       "q": "When should stakeholder analysis be updated?",
       "options": [
        "Only at project start, when the register is built",
        "At gates, after major changes and when positions shift",
        "Only at closure, as part of the lessons-learned review",
        "Never; it is a one-time exercise at initiation"
       ],
       "answer": 1,
       "explain": "Stakeholder power and interest change; analysis is a living activity."
      },
      {
       "q": "A flood-affected community demands faster aid but lacks formal power. In the salience model they are most likely:",
       "options": [
        "Dependent",
        "Dangerous",
        "Dormant",
        "Definitive"
       ],
       "answer": 0,
       "explain": "Legitimacy plus urgency without power makes a stakeholder dependent on others to advance their claims."
      }
     ]
    }
   ]
  },
  {
   "id": "m2-l2",
   "title": "Engagement Planning & Requirements Elicitation",
   "subtitle": "Move stakeholders from where they are to where you need them — and draw out what they really need",
   "minutes": 26,
   "objectives": [
    "Assess current and desired stakeholder engagement levels",
    "Create a practical engagement plan",
    "Choose suitable elicitation techniques for different situations"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Analysis tells you **who** matters. Engagement is what you **do** about it. The goal is not to make everyone happy — that is impossible — but to secure the involvement, support and decisions the project needs at the right time."
    },
    {
     "type": "table",
     "title": "Engagement assessment matrix (C = current, D = desired)",
     "head": [
      "Stakeholder",
      "Unaware",
      "Resistant",
      "Neutral",
      "Supportive",
      "Leading"
     ],
     "rows": [
      [
       "Head of Nursing",
       "",
       "",
       "C",
       "D",
       ""
      ],
      [
       "Ward clerks",
       "C",
       "",
       "D",
       "",
       ""
      ],
      [
       "Hospital CEO (sponsor)",
       "",
       "",
       "",
       "C",
       "D"
      ],
      [
       "Junior doctors' association",
       "",
       "C",
       "D",
       "",
       ""
      ]
     ]
    },
    {
     "type": "callout",
     "kind": "definition",
     "text": "**Unaware** – does not know about the project. **Resistant** – aware and opposed. **Neutral** – aware, neither for nor against. **Supportive** – aware and in favour. **Leading** – actively championing success. The gap between C and D drives your engagement actions.",
     "title": "Engagement levels"
    },
    {
     "type": "callout",
     "kind": "pro",
     "text": "Not everyone needs to champion your project. For most groups 'Supportive' or even 'Neutral' is enough. Spend energy where the gap matters most to success.",
     "title": "Desired is not always 'Leading'"
    },
    {
     "type": "table",
     "title": "A light engagement plan",
     "head": [
      "Stakeholder",
      "Gap (C → D)",
      "Key message",
      "Method and frequency",
      "Owner"
     ],
     "rows": [
      [
       "Junior doctors' association",
       "Resistant → Neutral",
       "Shift handovers will be faster and safer, not monitored more",
       "Two co-design workshops, then monthly Q&A",
       "Clinical lead"
      ],
      [
       "Ward clerks",
       "Unaware → Neutral",
       "What changes for you and when; training before go-live",
       "Team briefings, short videos in Bangla, floor walkers at launch",
       "Change manager"
      ],
      [
       "Hospital CEO",
       "Supportive → Leading",
       "Visible sponsorship drives adoption",
       "Fortnightly 20-min briefing; CEO opens training days",
       "PM"
      ]
     ]
    },
    {
     "type": "text",
     "text": "**Elicitation** means drawing out requirements — not just collecting what people say they want, but discovering what they actually need. People often describe solutions ('add a button') rather than problems ('I cannot find yesterday's orders'). Your job is to get to the problem."
    },
    {
     "type": "table",
     "title": "Elicitation techniques: when to use what",
     "head": [
      "Technique",
      "Best for",
      "Watch out for"
     ],
     "rows": [
      [
       "Interviews",
       "Depth, sensitive topics, senior stakeholders",
       "Time-consuming; hear one view at a time"
      ],
      [
       "Facilitated workshops",
       "Agreement across groups, fast decisions",
       "Dominant voices; needs a skilled facilitator"
      ],
      [
       "Observation / job shadowing",
       "Tacit knowledge people cannot describe",
       "People behave differently when watched"
      ],
      [
       "Surveys and questionnaires",
       "Many, dispersed respondents",
       "Shallow answers; low response rates"
      ],
      [
       "Prototypes and wireframes",
       "Clarifying user interfaces and flows",
       "Users may think the prototype is nearly finished"
      ],
      [
       "Document and data analysis",
       "Existing rules, reports, regulations, logs",
       "Documents may be out of date"
      ],
      [
       "Focus groups",
       "Attitudes and expectations of a user segment",
       "Groupthink; not a substitute for observing real behaviour"
      ],
      [
       "Design thinking / journey mapping",
       "Understanding experience end to end",
       "Can drift without a clear problem statement"
      ]
     ]
    },
    {
     "type": "flow",
     "title": "A practical elicitation cycle",
     "items": [
      {
       "label": "Prepare",
       "text": "Goals, questions, participants"
      },
      {
       "label": "Elicit",
       "text": "Interview, observe, workshop"
      },
      {
       "label": "Document",
       "text": "Notes, models, stories"
      },
      {
       "label": "Confirm",
       "text": "Play back to stakeholders"
      },
      {
       "label": "Refine",
       "text": "Prioritise and detail just in time"
      }
     ]
    },
    {
     "type": "callout",
     "kind": "example",
     "text": "A team building a garment-factory quality app asked supervisors how they record defects. Answer: 'on the defect sheet.' Observation on the floor showed that supervisors actually used WhatsApp photos and filled in the sheet at the end of the shift. The final app was built around photo capture — something no interview had revealed.",
     "title": "Observation beats asking"
    },
    {
     "type": "scenario",
     "title": "Two loud voices",
     "situation": "In a requirements workshop for a new loan-origination system, two senior credit managers dominate the discussion. Branch officers — the main future users — are silent. What should the facilitator do?",
     "options": [
      {
       "text": "Let the senior managers lead; they have more authority.",
       "feedback": "Weak. Authority does not equal knowledge of daily work; the users' needs will be missed.",
       "best": false
      },
      {
       "text": "Switch to structured techniques — silent brainstorming on cards, round-robin input and small breakout groups — and schedule follow-up interviews or observation with branch officers.",
       "feedback": "Best. Structured facilitation balances voices in the room, and follow-up elicitation reaches users who may not speak up in front of seniors.",
       "best": true
      },
      {
       "text": "End the workshop and send a survey instead.",
       "feedback": "Weak. A survey may help later, but abandoning the workshop wastes the chance to build shared understanding.",
       "best": false
      },
      {
       "text": "Ask the managers to leave the room.",
       "feedback": "Weak. It may damage relationships and lose valuable expertise; better to change the format than exclude people.",
       "best": false
      }
     ]
    },
    {
     "type": "reflection",
     "prompt": "Pick one stakeholder on your current or recent project whose engagement was lower than it needed to be. What was their current level, what should it have been, and what single action would have closed the gap?"
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "In an engagement assessment matrix, 'C' and 'D' stand for:",
       "options": [
        "Customer and Delivery",
        "Critical and Dependent",
        "Current and Desired",
        "Committed and Detached"
       ],
       "answer": 2,
       "explain": "C shows current engagement; D shows desired engagement. The gap drives your actions."
      },
      {
       "q": "Which technique is best to uncover tacit knowledge that users cannot easily describe?",
       "options": [
        "Observation / job shadowing",
        "Structured online survey",
        "Analysis of existing documents",
        "Email questionnaires"
       ],
       "answer": 0,
       "explain": "Watching people work reveals workarounds and habits they would not think to mention."
      },
      {
       "q": "A stakeholder is aware of the project and opposes it. Their engagement level is:",
       "options": [
        "Resistant",
        "Unaware",
        "Neutral",
        "Supportive"
       ],
       "answer": 0,
       "explain": "Aware and opposed is the definition of resistant."
      },
      {
       "q": "What is a key risk of using prototypes in elicitation?",
       "options": [
        "They are always too expensive for small projects",
        "They cannot demonstrate user flows or navigation paths",
        "They replace the need for later user testing",
        "Users may assume the product is nearly finished"
       ],
       "answer": 3,
       "explain": "A realistic prototype can create false expectations about progress — explain clearly what it is."
      },
      {
       "q": "Which statement about desired engagement is most accurate?",
       "options": [
        "Desired levels depend on what the project needs from each person",
        "Every stakeholder should ideally reach the 'Leading' level",
        "Desired levels are set once at initiation and never change",
        "Only the sponsor and the most senior users need a desired level"
       ],
       "answer": 0,
       "explain": "Desired engagement is set per stakeholder according to what success requires."
      }
     ]
    }
   ]
  },
  {
   "id": "m2-l3",
   "title": "User Stories, Acceptance Criteria & Readiness",
   "subtitle": "Write requirements that teams can build and test — and agree when work is ready and done",
   "minutes": 26,
   "objectives": [
    "Write user stories that meet the INVEST criteria",
    "Express acceptance criteria in Given/When/Then form",
    "Apply a definition of ready and a definition of done"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "On adaptive projects, requirements are commonly captured as **user stories**: short statements of a need, told from the user's point of view. A story is a **promise of a conversation**, not a full specification — detail is added just in time through discussion, examples and acceptance criteria."
    },
    {
     "type": "callout",
     "kind": "example",
     "text": "**As a** rural agent, **I want to** capture a customer's ID photo while offline, **so that** I can complete onboarding where there is no mobile signal.",
     "title": "User story format"
    },
    {
     "type": "framework",
     "title": "INVEST — the six qualities of a good story",
     "items": [
      {
       "label": "I",
       "title": "Independent",
       "text": "Can be built and released without waiting on another story, as far as possible."
      },
      {
       "label": "N",
       "title": "Negotiable",
       "text": "Details are open for discussion; it is not a frozen contract."
      },
      {
       "label": "V",
       "title": "Valuable",
       "text": "Delivers something a user or customer actually cares about."
      },
      {
       "label": "E",
       "title": "Estimable",
       "text": "The team understands it well enough to size it."
      },
      {
       "label": "S",
       "title": "Small",
       "text": "Fits comfortably within one iteration — ideally a few days of work."
      },
      {
       "label": "T",
       "title": "Testable",
       "text": "Clear criteria tell everyone when it is working."
      }
     ]
    },
    {
     "type": "text",
     "text": "**Acceptance criteria** set the conditions a story must satisfy to be accepted by the product owner. A popular format comes from behaviour-driven development: **Given** a starting context, **When** an action occurs, **Then** an observable result follows."
    },
    {
     "type": "callout",
     "kind": "example",
     "text": "**Scenario: photo saved offline.** Given the agent's phone has no network connection, When the agent captures and confirms an ID photo, Then the photo is stored encrypted on the device And the application shows 'Saved — will sync later'.\n**Scenario: automatic sync.** Given a stored photo and the network returns, When the app is open, Then the photo uploads within 2 minutes And the onboarding status changes to 'Submitted'.",
     "title": "Given / When / Then"
    },
    {
     "type": "compare",
     "title": "Splitting large stories (epics)",
     "columns": [
      {
       "title": "Split by…",
       "items": [
        "Workflow step (capture → verify → approve)",
        "Business rule (individual vs joint account)",
        "Data type or channel (photo vs NID scan)",
        "Happy path first, exceptions later",
        "Performance level (works first, fast later)"
       ]
      },
      {
       "title": "Avoid splitting by…",
       "items": [
        "Technical layer only (database story, UI story)",
        "Team member or skill",
        "Phases like 'design story' and 'test story'",
        "Anything that delivers no user-visible value alone"
       ]
      }
     ]
    },
    {
     "type": "template",
     "title": "User story map",
     "purpose": "Lay out the user's journey left to right, then stack stories under each step by priority to plan thin, valuable releases.",
     "columns": [
      "User activity (backbone)",
      "User step",
      "Release 1 stories (walking skeleton)",
      "Release 2 stories",
      "Later"
     ],
     "example": [
      [
       "Open account",
       "Capture identity",
       "Capture ID photo offline",
       "Scan NID barcode automatically",
       "Face match with liveness check"
      ],
      [
       "Open account",
       "Verify customer",
       "Agent reviews data before submit",
       "Auto-check against blacklist",
       "Risk-score explanations"
      ]
     ],
     "rows": 6
    },
    {
     "type": "compare",
     "title": "Definition of ready vs definition of done",
     "columns": [
      {
       "title": "Definition of ready (team agreement, optional)",
       "items": [
        "Story is written and understood by the team",
        "Acceptance criteria are agreed",
        "Dependencies identified or removed",
        "Sized and small enough for one iteration",
        "Designs or data available if needed"
       ]
      },
      {
       "title": "Definition of done (quality commitment)",
       "items": [
        "Code reviewed and merged",
        "Automated tests written and passing",
        "Acceptance criteria met and demonstrated",
        "Security and accessibility checks passed",
        "Documentation and release notes updated",
        "Deployed to a production-like environment"
       ]
      }
     ]
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "A definition of ready helps avoid starting work that is unclear, but used rigidly it becomes a mini-waterfall where nothing starts until everything is specified. Keep it short and use it as a conversation aid.",
     "title": "Do not turn 'ready' into a gate"
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "If a story is 'done except testing', it is not done. A shared, visible definition of done protects quality and makes progress honest — a theme developed further in the Deliver stage.",
     "title": "Done means usable"
    },
    {
     "type": "scenario",
     "title": "A story that is too big",
     "situation": "During refinement, the product owner presents: \"As a customer, I want a complete loan application journey so I can get credit.\" The team estimates it would take three sprints. What should the PM or team coach suggest?",
     "options": [
      {
       "text": "Accept it as is and spread it across three sprints.",
       "feedback": "Weak. A story that cannot finish in one iteration hides progress and delays feedback.",
       "best": false
      },
      {
       "text": "Split it into thin vertical slices — e.g. submit basic details, upload documents, see decision status — each valuable and testable on its own.",
       "feedback": "Best. Vertical slices keep stories small, testable and valuable, and let the team release and learn earlier.",
       "best": true
      },
      {
       "text": "Split it into database, API and user-interface stories.",
       "feedback": "Weak. Layer-based splits produce pieces that deliver no user value until all are complete.",
       "best": false
      },
      {
       "text": "Ask the product owner to write a 40-page specification first.",
       "feedback": "Weak. Heavy specification delays learning; the goal is smaller stories with clear acceptance criteria.",
       "best": false
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "In INVEST, the 'N' stands for:",
       "options": [
        "Necessary",
        "Negotiable",
        "Non-functional",
        "New"
       ],
       "answer": 1,
       "explain": "Negotiable — details are refined through conversation rather than fixed in advance."
      },
      {
       "q": "Which acceptance criterion is best written?",
       "options": [
        "The search page should load quickly for all users, especially at busy times",
        "The search should be user-friendly, intuitive and easy for every customer to use",
        "Search works properly and always returns the right results to the user who asked",
        "Given 500 concurrent users, When a user searches, Then results show within 2 seconds"
       ],
       "answer": 3,
       "explain": "It is specific, observable and testable, using Given/When/Then."
      },
      {
       "q": "What is the main purpose of a definition of done?",
       "options": [
        "To set a shared quality standard every increment must meet",
        "To decide which stories may enter the next sprint",
        "To estimate stories consistently across the whole team",
        "To replace acceptance criteria with one shared list"
       ],
       "answer": 0,
       "explain": "The definition of done is the quality commitment applied to all work; acceptance criteria are story-specific."
      },
      {
       "q": "Which is a good way to split a large story?",
       "options": [
        "By technical layer, such as database, API and interface",
        "By workflow step that still delivers user value",
        "By team member, so each person owns one part",
        "Into separate 'design', 'build' and 'test' stories"
       ],
       "answer": 1,
       "explain": "Vertical slices along workflow steps keep each piece valuable and testable."
      },
      {
       "q": "A user story is best described as:",
       "options": [
        "A placeholder for a conversation about a user need",
        "A complete specification of a feature for developers",
        "A test case written from the user's point of view",
        "A short charter that authorises a piece of work"
       ],
       "answer": 0,
       "explain": "Stories capture the need briefly; detail is added just in time through conversation and criteria."
      }
     ]
    }
   ]
  },
  {
   "id": "m2-l4",
   "title": "Scope Structures: WBS, Dictionary & Backlog",
   "subtitle": "Break the work down — with a work breakdown structure, a product backlog, or both",
   "minutes": 24,
   "objectives": [
    "Build a deliverable-oriented WBS that follows the 100% rule",
    "Write a WBS dictionary entry",
    "Compare the WBS with a product backlog and know when to use each"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Whatever the approach, scope must be made visible. Predictive projects usually decompose scope into a **work breakdown structure (WBS)**. Adaptive projects keep an ordered **product backlog**. Hybrid projects often use both: a WBS for the overall project and backlogs inside the parts that evolve."
    },
    {
     "type": "callout",
     "kind": "definition",
     "text": "A **WBS** is a hierarchical decomposition of the total scope of work into deliverables and smaller components. The lowest level is the **work package**, which can be estimated, scheduled, assigned and controlled.",
     "title": "Work breakdown structure"
    },
    {
     "type": "layers",
     "title": "WBS example — new hospital outpatient wing (top level first)",
     "items": [
      {
       "label": "1. Outpatient wing project",
       "parts": [
        "Total scope"
       ]
      },
      {
       "label": "Level 2: major deliverables",
       "parts": [
        "1.1 Design",
        "1.2 Structure",
        "1.3 Building services",
        "1.4 Fit-out and equipment",
        "1.5 Commissioning and handover",
        "1.6 Project management"
       ]
      },
      {
       "label": "Level 3: components (example for 1.3)",
       "parts": [
        "1.3.1 Electrical",
        "1.3.2 HVAC",
        "1.3.3 Medical gas",
        "1.3.4 Fire safety systems"
       ]
      },
      {
       "label": "Work packages (example for 1.3.3)",
       "parts": [
        "Pipework installed",
        "Outlets fitted",
        "Pressure tested and certified"
       ]
      }
     ]
    },
    {
     "type": "keypoints",
     "items": [
      "**100% rule:** the children of each element add up to exactly 100% of the parent's work — nothing missing, nothing extra.",
      "Organise around **deliverables (nouns)**, not activities (verbs). Activities come later in the schedule.",
      "Include project management work itself as a branch.",
      "Decompose until work packages can be estimated and owned — a common heuristic is roughly 8 to 80 hours of effort, adjusted to project size.",
      "Use a numbering scheme (1.3.3) that links to schedule, cost and risk records.",
      "Build it with the team; people who do the work spot what is missing."
     ],
     "title": "Rules for a strong WBS"
    },
    {
     "type": "text",
     "text": "The **WBS dictionary** gives each element the detail the diagram cannot hold. Together, the approved scope statement, the WBS and the WBS dictionary form the **scope baseline** on predictive projects."
    },
    {
     "type": "template",
     "title": "WBS dictionary entry",
     "purpose": "Describe each work package so anyone can understand what it includes, who owns it and how it will be accepted.",
     "columns": [
      "WBS ID and name",
      "Description of work",
      "Owner",
      "Acceptance criteria",
      "Key milestones",
      "Estimated cost / effort",
      "Assumptions and constraints"
     ],
     "example": [
      [
       "1.3.3 Medical gas — pressure tested and certified",
       "Pressure test oxygen, vacuum and medical air lines; obtain certification",
       "MEP subcontractor lead",
       "All lines pass test at specified pressure; certificate issued by approved inspector",
       "Test complete by week 42",
       "Tk 6.5 lakh / 120 hours",
       "Inspector available within 5 days' notice"
      ]
     ],
     "rows": 6
    },
    {
     "type": "compare",
     "title": "WBS vs product backlog",
     "columns": [
      {
       "title": "WBS",
       "items": [
        "Hierarchy of deliverables",
        "Aims to capture 100% of known scope early",
        "Changes go through formal change control",
        "Basis for estimates, schedule and cost baseline",
        "Best for stable, well-understood scope"
       ]
      },
      {
       "title": "Product backlog",
       "items": [
        "Ordered list of items (features, stories, fixes)",
        "Emerges and evolves as learning occurs",
        "Refined continuously by the product owner and team",
        "Top items detailed, lower items rough",
        "Best for evolving products and uncertain needs"
       ]
      }
     ]
    },
    {
     "type": "callout",
     "kind": "pro",
     "text": "On a hybrid hospital project, the WBS covers the building, equipment and commissioning. One branch — '1.4.5 Patient flow software' — is delivered by an agile team from its own product backlog. The WBS element carries a budget and a milestone; the backlog decides what goes inside it.",
     "title": "Using both in a hybrid"
    },
    {
     "type": "scenario",
     "title": "Activities in the WBS",
     "situation": "A new team member drafts a WBS whose second level reads: 'Plan', 'Design', 'Build', 'Test', 'Deploy'. The level-3 items under each are tasks such as 'Hold meeting' and 'Write code'. What feedback is BEST?",
     "options": [
      {
       "text": "Accept it; any structure is fine as long as it is complete.",
       "feedback": "Weak. Activity-based structures make it hard to check that every deliverable is covered and to assign ownership of results.",
       "best": false
      },
      {
       "text": "Suggest reorganising around deliverables (e.g. 'Mobile app', 'Admin portal', 'Data migration', 'Training', 'Project management') and moving activities into the schedule.",
       "feedback": "Best. A deliverable-oriented WBS supports the 100% rule, clear ownership and acceptance, while activities belong in the schedule.",
       "best": true
      },
      {
       "text": "Delete the WBS and use only a Gantt chart.",
       "feedback": "Weak. A Gantt chart shows timing, not the full decomposition of scope.",
       "best": false
      },
      {
       "text": "Add more levels until every task is under one hour.",
       "feedback": "Weak. Over-decomposition creates management overhead without better control.",
       "best": false
      }
     ]
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Stakeholder",
       "def": "Any person, group or organisation that can affect, be affected by, or believe they are affected by a project."
      },
      {
       "term": "Power–interest grid",
       "def": "A two-by-two tool that groups stakeholders by their power over and interest in the project to guide engagement strategy."
      },
      {
       "term": "Salience model",
       "def": "A stakeholder classification based on power, legitimacy and urgency; those with all three are 'definitive'."
      },
      {
       "term": "Elicitation",
       "def": "Drawing out stakeholders' real needs through techniques such as interviews, observation, workshops and prototypes."
      },
      {
       "term": "User story",
       "def": "A short description of a need from the user's point of view, used as a placeholder for conversation and refined with acceptance criteria."
      },
      {
       "term": "Acceptance criteria",
       "def": "Conditions a deliverable or story must satisfy to be accepted, often written as Given/When/Then."
      },
      {
       "term": "Definition of done",
       "def": "A shared quality standard that every increment of work must meet before it is considered complete."
      },
      {
       "term": "Work breakdown structure (WBS)",
       "def": "A hierarchical, deliverable-oriented decomposition of the total scope of a project."
      },
      {
       "term": "Product backlog",
       "def": "An ordered, evolving list of everything that might be needed in a product, owned by the product owner."
      },
      {
       "term": "Scope creep",
       "def": "Uncontrolled expansion of scope without adjusting time, cost or resources and without proper approval."
      },
      {
       "term": "MoSCoW",
       "def": "A prioritisation method that sorts requirements into Must have, Should have, Could have and Won't have this time."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "What does the 100% rule state?",
       "options": [
        "Every task must be 100% complete before the next starts",
        "Child elements must sum to exactly the work of their parent",
        "All stakeholders must approve the WBS before work begins",
        "The whole budget must be allocated to work packages"
       ],
       "answer": 1,
       "explain": "The 100% rule ensures the decomposition includes all — and only — the work of the parent element."
      },
      {
       "q": "The lowest level of a WBS is called the:",
       "options": [
        "Activity",
        "Control account",
        "Milestone",
        "Work package"
       ],
       "answer": 3,
       "explain": "Work packages are the lowest WBS level, which can be estimated, scheduled and controlled."
      },
      {
       "q": "On a predictive project, the scope baseline consists of:",
       "options": [
        "The charter, budget and schedule baseline",
        "The product backlog and the sprint backlog",
        "The risk register, issue log and assumption log",
        "Approved scope statement, WBS and WBS dictionary"
       ],
       "answer": 3,
       "explain": "These three approved components together form the scope baseline."
      },
      {
       "q": "Which statement about the product backlog is accurate?",
       "options": [
        "It is ordered and refined continuously as learning occurs",
        "It is fixed once the sponsor has approved its contents",
        "It contains only technical tasks defined by developers",
        "It is owned and ordered by the sponsor for each release"
       ],
       "answer": 0,
       "explain": "The product backlog evolves; the product owner orders it and the team helps refine it."
      },
      {
       "q": "WBS elements should mainly be named as:",
       "options": [
        "Verbs describing the tasks to be done",
        "Deliverables or outcomes (nouns)",
        "The names of responsible team members",
        "Target dates for each piece of work"
       ],
       "answer": 1,
       "explain": "A deliverable-oriented WBS makes completeness and ownership easy to check."
      }
     ]
    }
   ]
  },
  {
   "id": "m2-l5",
   "title": "Prioritisation, Scope Creep & Change Control",
   "subtitle": "Decide what matters most, and handle change without chaos",
   "minutes": 28,
   "objectives": [
    "Prioritise work using MoSCoW, value vs effort, Kano and WSJF",
    "Recognise scope creep and gold plating",
    "Compare integrated change control with backlog refinement"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Every project has more ideas than capacity. Prioritisation is how you protect value: doing the most important things first and consciously saying 'not now' to the rest. Without it, teams spread themselves thin and deliver many half-finished things."
    },
    {
     "type": "table",
     "title": "MoSCoW prioritisation",
     "head": [
      "Category",
      "Meaning",
      "Example — mobile wallet savings feature"
     ],
     "rows": [
      [
       "Must have",
       "Without it the release fails or is illegal/unsafe",
       "Deposits into savings with correct interest calculation"
      ],
      [
       "Should have",
       "Important but a workaround exists",
       "Savings goals with progress bar"
      ],
      [
       "Could have",
       "Desirable if time allows",
       "Animated celebration when goal is reached"
      ],
      [
       "Won't have (this time)",
       "Agreed to exclude from this release",
       "Joint savings with family members"
      ]
     ]
    },
    {
     "type": "callout",
     "kind": "pro",
     "text": "A common guideline is to keep Must-haves to roughly 60% of planned effort, leaving room for Shoulds and Coulds to absorb surprises. If everything is a Must, nothing is prioritised.",
     "title": "Keep the Musts honest"
    },
    {
     "type": "compare",
     "title": "Value vs effort matrix",
     "columns": [
      {
       "title": "High value",
       "items": [
        "Low effort → **Quick wins**: do first",
        "High effort → **Big bets**: plan carefully, slice thinly"
       ]
      },
      {
       "title": "Low value",
       "items": [
        "Low effort → **Fill-ins**: do if spare capacity",
        "High effort → **Money pits**: avoid or drop"
       ]
      }
     ]
    },
    {
     "type": "framework",
     "title": "Kano model — how features affect satisfaction",
     "items": [
      {
       "label": "B",
       "title": "Basic (must-be)",
       "text": "Expected; absence causes anger, presence is barely noticed. E.g. a banking app that does not lose money."
      },
      {
       "label": "P",
       "title": "Performance",
       "text": "More is better, roughly in proportion. E.g. faster transfers."
      },
      {
       "label": "D",
       "title": "Delighters",
       "text": "Unexpected features that create delight; absence is not missed. E.g. smart savings nudges."
      },
      {
       "label": "I",
       "title": "Indifferent",
       "text": "Users do not care either way — candidates to drop."
      },
      {
       "label": "R",
       "title": "Reverse",
       "text": "Some users actively dislike it — e.g. heavy gamification for business users."
      }
     ]
    },
    {
     "type": "formula",
     "title": "Weighted shortest job first (WSJF) — in brief",
     "items": [
      {
       "name": "Cost of delay",
       "expr": "User/business value + Time criticality + Risk reduction or opportunity enablement",
       "meaning": "Relative scores (often on a Fibonacci-like scale) estimating the economic pain of waiting."
      },
      {
       "name": "WSJF",
       "expr": "Cost of delay ÷ Job size (or duration)",
       "meaning": "Higher scores go first: the most value lost per unit of time, delivered fastest. Popularised in scaled agile frameworks."
      },
      {
       "name": "Worked example",
       "expr": "Feature X: CoD 21, size 8 → 2.6. Feature Y: CoD 13, size 3 → 4.3",
       "meaning": "Y goes first, even though X has the higher cost of delay, because it is much smaller."
      }
     ]
    },
    {
     "type": "compare",
     "title": "Scope creep vs gold plating vs healthy change",
     "columns": [
      {
       "title": "Scope creep",
       "items": [
        "Uncontrolled growth in scope",
        "Requests absorbed without impact analysis",
        "Usually from stakeholders",
        "Leads to delays, overruns, burnout"
       ]
      },
      {
       "title": "Gold plating",
       "items": [
        "Team adds extras nobody asked for",
        "Well-meant but unapproved",
        "Adds cost and risk",
        "Hides real progress"
       ]
      },
      {
       "title": "Healthy change",
       "items": [
        "Visible, analysed and decided",
        "Linked to value or necessity",
        "Trade-offs made explicitly",
        "Baselines or backlog updated transparently"
       ]
      }
     ]
    },
    {
     "type": "flow",
     "title": "Integrated change control (predictive)",
     "items": [
      {
       "label": "Request",
       "text": "Change request logged"
      },
      {
       "label": "Analyse",
       "text": "Impact on scope, time, cost, quality, risk, benefits"
      },
      {
       "label": "Decide",
       "text": "PM, sponsor or change control board approves, rejects or defers"
      },
      {
       "label": "Update",
       "text": "Baselines, plans and documents revised"
      },
      {
       "label": "Communicate",
       "text": "Stakeholders and team informed; change implemented"
      }
     ]
    },
    {
     "type": "compare",
     "title": "Two ways to absorb change",
     "columns": [
      {
       "title": "Integrated change control",
       "items": [
        "Used when scope, schedule and cost are baselined",
        "Formal request and impact analysis",
        "Decision by authorised body (e.g. CCB)",
        "Protects contracts and commitments",
        "Can feel slow; tailor thresholds to keep it fast"
       ]
      },
      {
       "title": "Backlog refinement",
       "items": [
        "Used for evolving product scope",
        "New items added to the backlog by the product owner",
        "Ordered against everything else; something else may move down",
        "Change is expected and cheap if made before work starts",
        "Iteration goal protected during the iteration"
       ]
      }
     ]
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "Many hybrid projects let the product owner reorder the backlog freely **within** an agreed budget and milestone, but send anything that moves a milestone, increases total budget or affects a contract to formal change control. Write the thresholds down in the plan.",
     "title": "Hybrid change thresholds"
    },
    {
     "type": "scenario",
     "title": "Which path for this change?",
     "situation": "On a hybrid hospital project, the product owner may reorder the patient-flow software backlog freely within its agreed budget and milestone. The hospital's insurance partner now asks for a claims-integration feature that the team estimates would push the software milestone back by three weeks and add 6% to the software budget. What should the project manager do?",
     "options": [
      {
       "text": "Let the product owner add it to the backlog; backlog changes are the product owner's call.",
       "feedback": "Weak. The product owner's authority covers ordering within the agreed budget and milestone; this change breaches both thresholds.",
       "best": false
      },
      {
       "text": "Raise it through integrated change control with an impact analysis, so the sponsor or change board can decide on the milestone and budget change.",
       "feedback": "Best. Changes that move milestones or budgets beyond agreed thresholds belong in formal change control, even on the agile part of a hybrid project.",
       "best": true
      },
      {
       "text": "Reject it because the scope baseline is fixed.",
       "feedback": "Weak. The feature may be valuable; the right response is an informed decision, not an automatic refusal.",
       "best": false
      },
      {
       "text": "Ask the team to absorb it with overtime so the milestone does not move.",
       "feedback": "Weak. It hides the true cost and risks burnout and quality problems.",
       "best": false
      }
     ]
    },
    {
     "type": "case",
     "title": "Scope pressure at a Dhaka fintech launch",
     "context": "A Dhaka fintech start-up is launching a merchant QR-payments app in time for Eid, when transaction volumes peak. The team works in two-week sprints with a fixed launch date eleven weeks away. Investors are pushing for a loyalty-points feature 'for launch'. A sales director has promised one big supermarket chain a custom settlement report. Meanwhile developers have been polishing animations that were never requested. The product owner is overwhelmed and the backlog has 180 items marked 'high priority'.",
     "questions": [
      "What scope problems can you identify?",
      "How would you re-prioritise the backlog for an Eid launch?",
      "How should the custom report request be handled?",
      "What would you agree with the team about the animations?"
     ],
     "answer": "**Problems:** scope creep (loyalty points, custom report), gold plating (animations) and a backlog with no real prioritisation. **Re-prioritise:** run a MoSCoW session tied to the launch goal — payments, settlement and security as Musts; use value vs effort or WSJF to order the rest; cap Musts at about 60% of the remaining capacity based on velocity. Loyalty points likely become Should or post-launch, with the trade-off shown to investors using data. **Custom report:** treat it as a change — assess value (one large merchant), effort and risk to the date; the product owner decides with the sponsor; if accepted, something of equal size moves out, and the decision is communicated to sales. **Animations:** discuss gold plating openly in the retrospective, agree that work must trace to backlog items, and channel ideas through the product owner."
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "In MoSCoW, 'W' stands for:",
       "options": [
        "Want to have",
        "Worth having",
        "Won't have this time",
        "Will have later for sure"
       ],
       "answer": 2,
       "explain": "Won't have (this time) records agreed exclusions for the current release."
      },
      {
       "q": "A feature is expected by every user; its absence causes strong dissatisfaction. In Kano terms it is:",
       "options": [
        "A delighter (attractive) feature",
        "A performance (one-dimensional) feature",
        "An indifferent feature",
        "A basic (must-be) feature"
       ],
       "answer": 3,
       "explain": "Basic features are taken for granted; missing them causes anger, having them barely raises satisfaction."
      },
      {
       "q": "Feature A has a cost of delay of 20 and size 10; Feature B has a cost of delay of 9 and size 3. By WSJF, which goes first?",
       "options": [
        "A, because its cost of delay is higher",
        "B, because its WSJF score is higher",
        "Both have equal priority",
        "Neither — WSJF cannot compare them"
       ],
       "answer": 1,
       "explain": "A scores 20 ÷ 10 = 2; B scores 9 ÷ 3 = 3. Higher WSJF goes first."
      },
      {
       "q": "A developer adds an extra dashboard nobody requested. This is:",
       "options": [
        "Scope creep",
        "Change control",
        "Gold plating",
        "Progressive elaboration"
       ],
       "answer": 2,
       "explain": "Gold plating is the team adding unrequested extras; scope creep usually comes from unmanaged stakeholder requests."
      },
      {
       "q": "On an agile team, a stakeholder asks for a new feature mid-project. What normally happens?",
       "options": [
        "It is added to the current sprint immediately by the team",
        "It must be rejected because the scope is already agreed",
        "The product owner adds it to the backlog and orders it by value",
        "The PM rewrites the charter and asks the sponsor to re-approve it"
       ],
       "answer": 2,
       "explain": "Backlog refinement absorbs change: the product owner orders new items by value while the current iteration's goal is protected."
      }
     ]
    }
   ]
  }
 ]
});
TRACK.modules.push({
 "id": "m3",
 "order": 3,
 "code": "Plan",
 "title": "Estimation, Scheduling & Budgeting",
 "subtitle": "Plan the work: honest estimates, realistic schedules and budgets that hold up under uncertainty",
 "outcomes": [
  "Choose and apply analogous, parametric, bottom-up, three-point and relative estimating techniques",
  "Forecast agile releases from velocity ranges and plan iterations by capacity",
  "Build a network diagram, find the critical path and calculate total and free float",
  "Compress schedules and optimise resources with clear trade-offs",
  "Build a cost baseline with the right reserves and interpret Monte Carlo forecasts"
 ],
 "lessons": [
  {
   "id": "m3-l1",
   "title": "Estimation Techniques & Why Estimates Are Ranges",
   "subtitle": "Analogous, parametric, bottom-up and three-point estimating — with honest uncertainty",
   "minutes": 28,
   "objectives": [
    "Choose between analogous, parametric, bottom-up and three-point estimating",
    "Calculate triangular and PERT estimates and a standard deviation",
    "Communicate estimates as ranges with confidence levels"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "An estimate is a **forecast**, not a promise. It is a best judgement about duration, effort or cost, given what we know today. Because the future is uncertain, every honest estimate carries a range. Pressure to give a single precise number early is one of the most common sources of project failure."
    },
    {
     "type": "table",
     "title": "Four core estimating techniques",
     "head": [
      "Technique",
      "How it works",
      "Strengths",
      "Limits",
      "Typical use"
     ],
     "rows": [
      [
       "Analogous (top-down)",
       "Base the estimate on a similar past project, adjusted for differences",
       "Fast, cheap, needs little detail",
       "Only as good as the similarity",
       "Early business cases, ROM estimates"
      ],
      [
       "Parametric",
       "Multiply a unit rate by a quantity (e.g. cost per m², hours per screen)",
       "Scalable and repeatable",
       "Needs reliable historical rates",
       "Construction, rollouts, repeatable work"
      ],
      [
       "Bottom-up",
       "Estimate each work package or activity and add them up",
       "Most detailed and defensible",
       "Slow; needs a full WBS",
       "Baselines, contracts, detailed planning"
      ],
      [
       "Three-point",
       "Use optimistic, most likely and pessimistic values",
       "Shows uncertainty explicitly",
       "Values can still be biased",
       "Risky or unfamiliar activities"
      ]
     ]
    },
    {
     "type": "callout",
     "kind": "example",
     "text": "Floor tiling for a hospital wing covers **1,200 m²**. Historical data shows one crew lays **25 m² per day**. Effort = 1,200 ÷ 25 = **48 crew-days**. With three crews working in parallel, duration ≈ **16 working days**, before allowing for curing, access and inspections.",
     "title": "Parametric in practice"
    },
    {
     "type": "formula",
     "title": "Three-point estimating formulas",
     "items": [
      {
       "name": "Triangular mean",
       "expr": "E = (O + M + P) ÷ 3",
       "meaning": "Simple average of optimistic (O), most likely (M) and pessimistic (P). Gives equal weight to the extremes."
      },
      {
       "name": "PERT (beta) mean",
       "expr": "E = (O + 4M + P) ÷ 6",
       "meaning": "Weights the most likely value four times. The classic Program Evaluation and Review Technique estimate."
      },
      {
       "name": "Standard deviation (PERT)",
       "expr": "σ ≈ (P − O) ÷ 6",
       "meaning": "A rough measure of spread. A wider gap between O and P means more uncertainty."
      },
      {
       "name": "Approximate confidence",
       "expr": "E ± 1σ ≈ 68%;  E ± 2σ ≈ 95%",
       "meaning": "Assumes a roughly normal distribution — a useful approximation, not a guarantee."
      }
     ]
    },
    {
     "type": "callout",
     "kind": "example",
     "text": "Integrating a payment gateway: O = 4 days, M = 6 days, P = 14 days. Triangular = (4 + 6 + 14) ÷ 3 = **8 days**. PERT = (4 + 24 + 14) ÷ 6 = **7 days**. σ = (14 − 4) ÷ 6 ≈ **1.67 days**. So roughly 68% confidence of 5.3–8.7 days and 95% confidence of 3.7–10.3 days. Report: '**about 7 days, very likely between 4 and 11**'.",
     "title": "Worked three-point example"
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "For a chain of independent activities, add the PERT means to get the path mean, and add the **variances** (σ²) — not the standard deviations — then take the square root for the path σ. Uncertainty grows more slowly than the sum of individual spreads.",
     "title": "Adding up paths"
    },
    {
     "type": "table",
     "title": "Estimate accuracy narrows as you learn (commonly quoted ranges)",
     "head": [
      "Estimate class",
      "When",
      "Typical range"
     ],
     "rows": [
      [
       "Rough order of magnitude (ROM)",
       "Idea and business case",
       "about −25% to +75%"
      ],
      [
       "Budget estimate",
       "After high-level design",
       "about −10% to +25%"
      ],
      [
       "Definitive estimate",
       "Detailed design / work packages known",
       "about −5% to +10%"
      ]
     ]
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "**Anchoring** — the first number spoken (often the boss's) pulls estimates toward it. **Optimism bias** — people imagine the smooth path. **Padding** — hidden buffers that get consumed anyway (work expands to fill the time available, and people delay starting when they feel time is plentiful). Counter them with historical data, independent estimates and visible, shared reserves rather than hidden padding.",
     "title": "Biases that distort estimates"
    },
    {
     "type": "template",
     "title": "Three-point estimation sheet",
     "purpose": "Estimate uncertain activities and keep a record of the basis for each number.",
     "columns": [
      "WBS ID / activity",
      "Optimistic (O)",
      "Most likely (M)",
      "Pessimistic (P)",
      "PERT (O+4M+P)/6",
      "σ (P−O)/6",
      "Basis and assumptions"
     ],
     "example": [
      [
       "2.3 Payment gateway integration",
       "4 d",
       "6 d",
       "14 d",
       "7.0 d",
       "1.67 d",
       "Vendor sandbox available; similar to 2025 wallet project"
      ]
     ],
     "rows": 8
    },
    {
     "type": "scenario",
     "title": "'Just give me one number'",
     "situation": "During a steering meeting, the sponsor of a new ERP rollout asks: \"How long will this take? I need one date for the board.\" Requirements workshops have not started yet. What is the BEST response?",
     "options": [
      {
       "text": "Give an optimistic date to keep the sponsor happy, then adjust later.",
       "feedback": "Weak. An early optimistic number becomes an anchor and a broken promise; trust erodes later.",
       "best": false
      },
      {
       "text": "Refuse to estimate until all requirements are documented.",
       "feedback": "Weak. Sponsors legitimately need early guidance; refusal does not help planning.",
       "best": false
      },
      {
       "text": "Give a range based on comparable rollouts (e.g. 9–15 months), explain the main uncertainties and commit to a narrower forecast after the requirements phase.",
       "feedback": "Best. An analogous ROM range is honest, useful for the board and paired with a plan to reduce uncertainty.",
       "best": true
      },
      {
       "text": "Pick the midpoint of your gut feeling and present it as firm.",
       "feedback": "Weak. A single number hides uncertainty and invites blame when reality differs.",
       "best": false
      }
     ]
    },
    {
     "type": "keypoints",
     "items": [
      "Estimate with the people who will do the work.",
      "Use historical data from your own organisation wherever possible.",
      "Write down assumptions next to every estimate.",
      "Give ranges and confidence levels, not single points.",
      "Re-estimate as you learn, and track actuals to improve next time."
     ],
     "title": "Habits of good estimators"
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which technique is most appropriate for a quick estimate at the business-case stage, using a similar past project?",
       "options": [
        "Bottom-up",
        "Analogous",
        "Parametric",
        "Monte Carlo"
       ],
       "answer": 1,
       "explain": "Analogous estimating uses comparable past projects and needs little detail — ideal early on."
      },
      {
       "q": "O = 2, M = 5, P = 14. What is the PERT estimate?",
       "options": [
        "5",
        "6",
        "7",
        "21"
       ],
       "answer": 1,
       "explain": "(2 + 4×5 + 14) ÷ 6 = 36 ÷ 6 = 6."
      },
      {
       "q": "Using the same values (O = 2, P = 14), what is the PERT standard deviation?",
       "options": [
        "1",
        "2",
        "3",
        "12"
       ],
       "answer": 1,
       "explain": "(14 − 2) ÷ 6 = 2."
      },
      {
       "q": "Which estimating technique uses a statistical relationship such as cost per square metre?",
       "options": [
        "Analogous",
        "Parametric",
        "Bottom-up",
        "Expert judgement only"
       ],
       "answer": 1,
       "explain": "Parametric estimating multiplies a quantity by a unit rate derived from historical data."
      },
      {
       "q": "Why should estimates be communicated as ranges?",
       "options": [
        "They reflect real uncertainty and help decision-makers judge risk",
        "Ranges look more professional and credible than single figures in reports",
        "Sponsors prefer vague answers that cannot be held against the team",
        "Single-point estimates are not permitted by most methodologies"
       ],
       "answer": 0,
       "explain": "Ranges show the uncertainty that exists, so decisions about reserves and commitments are informed."
      }
     ]
    }
   ]
  },
  {
   "id": "m3-l2",
   "title": "Agile Estimation, Velocity & Release Planning",
   "subtitle": "Story points, planning poker and forecasting with real delivery data",
   "minutes": 26,
   "objectives": [
    "Size work with story points and relative estimation techniques",
    "Run a planning poker session",
    "Forecast releases with velocity ranges and plan iterations by capacity"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Agile teams often estimate **relatively** rather than in hours: is this item bigger or smaller than that one we already know? People are better at comparing than at predicting absolute durations, and relative sizes stay stable even as the team gets faster."
    },
    {
     "type": "callout",
     "kind": "definition",
     "text": "A **story point** is a unitless, team-specific measure of the overall size of a backlog item — combining effort, complexity and uncertainty. Many teams use a modified Fibonacci scale (1, 2, 3, 5, 8, 13, 20…) so that larger items get deliberately coarse numbers.",
     "title": "Story points"
    },
    {
     "type": "flow",
     "title": "Planning poker in five steps",
     "items": [
      {
       "label": "Explain",
       "text": "Product owner describes the item and its acceptance criteria"
      },
      {
       "label": "Clarify",
       "text": "Team asks questions"
      },
      {
       "label": "Vote privately",
       "text": "Each estimator picks a card"
      },
      {
       "label": "Reveal and discuss",
       "text": "Highest and lowest explain their reasoning"
      },
      {
       "label": "Re-vote",
       "text": "Repeat until the team converges"
      }
     ]
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "When one developer votes 3 and another votes 13, someone knows something the others do not — a hidden integration, a reusable component, a compliance step. Planning poker surfaces that knowledge before work starts.",
     "title": "The value is in the conversation"
    },
    {
     "type": "table",
     "title": "Other relative sizing techniques",
     "head": [
      "Technique",
      "How it works",
      "Good for"
     ],
     "rows": [
      [
       "T-shirt sizing",
       "Items labelled XS, S, M, L, XL",
       "Early roadmaps, large epics, non-technical audiences"
      ],
      [
       "Affinity (wall) estimation",
       "Team silently arranges cards from small to large, then groups them",
       "Sizing dozens of items quickly"
      ],
      [
       "Bucket system",
       "Items placed into buckets labelled with point values",
       "Large backlogs, many participants"
      ],
      [
       "Count-based (no points)",
       "Items split to similar small size, then simply counted",
       "Mature teams using throughput forecasting"
      ]
     ]
    },
    {
     "type": "formula",
     "title": "Velocity and forecasting",
     "items": [
      {
       "name": "Velocity",
       "expr": "Sum of points of items that met the definition of done in an iteration",
       "meaning": "A team's observed delivery rate. Partly finished items count zero."
      },
      {
       "name": "Forecast iterations",
       "expr": "Remaining backlog points ÷ velocity",
       "meaning": "Use a low and high velocity to produce a range, not one number."
      },
      {
       "name": "Capacity-adjusted velocity",
       "expr": "Average velocity × (available person-days ÷ usual person-days)",
       "meaning": "Adjusts for holidays, leave and training in the coming iteration."
      }
     ]
    },
    {
     "type": "callout",
     "kind": "example",
     "text": "Last three sprints: **28, 32 and 30 points** (average 30). Remaining release backlog: **240 points**. Optimistic: 240 ÷ 32 = 7.5 → **8 sprints**. Pessimistic: 240 ÷ 28 ≈ 8.6 → **9 sprints**. With two-week sprints, forecast **16–18 weeks**. Next sprint covers Eid holidays with 70% of usual availability, so plan about 30 × 0.7 = **21 points**.",
     "title": "Forecasting a release"
    },
    {
     "type": "compare",
     "title": "Release planning vs iteration planning",
     "columns": [
      {
       "title": "Release planning",
       "items": [
        "Horizon: several iterations to a few months",
        "Sets a release goal and target date or scope range",
        "Uses velocity ranges and a prioritised backlog",
        "Revisited every iteration as data arrives",
        "Involves product owner, team and key stakeholders"
       ]
      },
      {
       "title": "Iteration planning",
       "items": [
        "Horizon: one iteration (1–4 weeks)",
        "Sets an iteration goal",
        "Team selects items it can complete to the definition of done",
        "Breaks items into tasks where useful",
        "Based on recent velocity and actual capacity"
       ]
      }
     ]
    },
    {
     "type": "template",
     "title": "Release forecast worksheet",
     "purpose": "Turn backlog size and velocity history into an honest, range-based release forecast.",
     "columns": [
      "Release / goal",
      "Remaining points",
      "Velocity range (low–high)",
      "Iterations needed (range)",
      "Forecast date range",
      "Key risks and assumptions"
     ],
     "example": [
      [
       "R2 – Merchant QR payments",
       "240",
       "28–32",
       "8–9",
       "16–18 weeks from 2 Feb",
       "Payment-switch certification takes ≤ 3 weeks"
      ]
     ],
     "rows": 5
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "Story points are calibrated by each team, so comparing velocity between teams is meaningless. Setting targets like 'increase velocity by 20%' simply inflates estimates. Use velocity only for the team's own forecasting.",
     "title": "Velocity is not a performance score"
    },
    {
     "type": "scenario",
     "title": "A velocity target",
     "situation": "A department head reviewing two Scrum teams says: \"Team Padma delivers 45 points per sprint, Team Jamuna only 25. Jamuna must reach 45 next quarter.\" What should the PM do?",
     "options": [
      {
       "text": "Agree and set the target for Team Jamuna.",
       "feedback": "Weak. Points are team-relative; the target will drive inflated estimates, not more value.",
       "best": false
      },
      {
       "text": "Explain that points are not comparable across teams, and propose outcome measures — features delivered to users, lead time, defect rates, customer results — while offering to help both teams improve flow.",
       "feedback": "Best. You correct the misuse of velocity and redirect attention to measures that reflect value and flow.",
       "best": true
      },
      {
       "text": "Ask Team Jamuna to double their estimates quietly.",
       "feedback": "Unethical and useless: it fakes improvement and destroys the forecasting value of velocity.",
       "best": false
      },
      {
       "text": "Merge the two teams so velocities average out.",
       "feedback": "Weak. Restructuring teams to hide a metric problem damages team stability.",
       "best": false
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Velocity counts points from:",
       "options": [
        "Items that met the definition of done",
        "All items started in the iteration",
        "Items estimated in sprint planning",
        "Items assigned to senior developers"
       ],
       "answer": 0,
       "explain": "Only completed items that meet the definition of done count; partly finished work counts zero."
      },
      {
       "q": "Remaining backlog is 180 points; velocity ranges from 25 to 30. How many iterations are forecast?",
       "options": [
        "5–6",
        "6–8",
        "7–9",
        "8–10"
       ],
       "answer": 1,
       "explain": "180 ÷ 30 = 6; 180 ÷ 25 = 7.2, rounded up to 8. So 6–8 iterations."
      },
      {
       "q": "Why do many teams use a Fibonacci-like scale for story points?",
       "options": [
        "It is required by the Scrum Guide for every Scrum team",
        "Wider gaps reflect the greater uncertainty of larger items",
        "It converts directly into hours for capacity planning",
        "It makes velocity grow faster as the team matures"
       ],
       "answer": 1,
       "explain": "The widening gaps reflect growing uncertainty for larger items."
      },
      {
       "q": "What is the main benefit of discussion in planning poker?",
       "options": [
        "It produces an exact hour estimate for each task",
        "It lets the manager review and approve the final estimates",
        "It replaces the need for written acceptance criteria",
        "It surfaces hidden knowledge and assumptions early"
       ],
       "answer": 3,
       "explain": "Different votes reveal different understanding; discussing them improves shared understanding and the estimate."
      },
      {
       "q": "Average velocity is 40, but next iteration only 75% of usual capacity is available. A sensible plan is about:",
       "options": [
        "40 points",
        "30 points",
        "53 points",
        "10 points"
       ],
       "answer": 1,
       "explain": "40 × 0.75 = 30 points."
      }
     ]
    }
   ]
  },
  {
   "id": "m3-l3",
   "title": "Dependencies, Network Diagrams & the Critical Path",
   "subtitle": "Sequence the work, find the critical path and calculate float",
   "minutes": 32,
   "objectives": [
    "Identify dependency types and their nature",
    "Draw a precedence network and perform forward and backward passes",
    "Calculate total float and free float and explain the critical path"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Once you know the activities, you must decide their **order**. A network diagram shows which activities depend on others. From it you can find the **critical path** — the longest chain of dependent activities, which sets the shortest possible project duration."
    },
    {
     "type": "table",
     "title": "Four logical relationships",
     "head": [
      "Type",
      "Meaning",
      "Example"
     ],
     "rows": [
      [
       "Finish-to-start (FS)",
       "B cannot start until A finishes — the most common",
       "Install software after the server is delivered"
      ],
      [
       "Start-to-start (SS)",
       "B cannot start until A starts",
       "Proofreading can start once writing has started"
      ],
      [
       "Finish-to-finish (FF)",
       "B cannot finish until A finishes",
       "Testing cannot finish until development finishes"
      ],
      [
       "Start-to-finish (SF)",
       "B cannot finish until A starts — rare",
       "The old shift cannot end until the new shift starts"
      ]
     ]
    },
    {
     "type": "table",
     "title": "Nature of dependencies",
     "head": [
      "Kind",
      "Description",
      "Example"
     ],
     "rows": [
      [
       "Mandatory (hard logic)",
       "Required by physics, law or contract",
       "Foundation before walls"
      ],
      [
       "Discretionary (soft logic)",
       "Chosen by best practice or preference — can be changed",
       "Finish design before starting build"
      ],
      [
       "External",
       "Depends on parties outside the project",
       "Regulator approval, vendor delivery"
      ],
      [
       "Internal",
       "Within the project team's control",
       "Testing after coding by the same team"
      ]
     ]
    },
    {
     "type": "callout",
     "kind": "definition",
     "text": "A **lag** is a required wait between activities (concrete must cure 7 days before loading: FS + 7). A **lead** lets a successor start early, overlapping its predecessor (start training material 3 days before the system build finishes: FS − 3).",
     "title": "Leads and lags"
    },
    {
     "type": "table",
     "title": "Worked example — clinic booking system go-live (durations in days)",
     "head": [
      "Activity",
      "Description",
      "Duration",
      "Predecessors"
     ],
     "rows": [
      [
       "A",
       "Confirm requirements",
       "3",
       "—"
      ],
      [
       "B",
       "Build booking module",
       "4",
       "A"
      ],
      [
       "C",
       "Procure tablets",
       "2",
       "A"
      ],
      [
       "D",
       "Integrate with patient records",
       "5",
       "B"
      ],
      [
       "E",
       "Configure tablets",
       "3",
       "C"
      ],
      [
       "F",
       "Pilot and go-live",
       "2",
       "D, E"
      ]
     ]
    },
    {
     "type": "steps",
     "title": "Forward and backward pass",
     "items": [
      {
       "title": "Forward pass",
       "text": "Start the first activity at ES = 0. For each activity, EF = ES + duration. A successor's ES is the **largest** EF of its predecessors."
      },
      {
       "title": "Project duration",
       "text": "The largest EF at the end of the network is the shortest possible project duration — here 14 days."
      },
      {
       "title": "Backward pass",
       "text": "Set the last activity's LF = 14. For each activity, LS = LF − duration. A predecessor's LF is the **smallest** LS of its successors."
      },
      {
       "title": "Float",
       "text": "Total float = LS − ES. Free float = earliest ES of successors − EF."
      },
      {
       "title": "Critical path",
       "text": "Activities with zero total float form the critical path: A → B → D → F = 3 + 4 + 5 + 2 = 14 days."
      }
     ]
    },
    {
     "type": "table",
     "title": "Results of the passes",
     "head": [
      "Activity",
      "Dur.",
      "ES",
      "EF",
      "LS",
      "LF",
      "Total float",
      "Free float"
     ],
     "rows": [
      [
       "A",
       "3",
       "0",
       "3",
       "0",
       "3",
       "0",
       "0"
      ],
      [
       "B",
       "4",
       "3",
       "7",
       "3",
       "7",
       "0",
       "0"
      ],
      [
       "C",
       "2",
       "3",
       "5",
       "7",
       "9",
       "4",
       "0"
      ],
      [
       "D",
       "5",
       "7",
       "12",
       "7",
       "12",
       "0",
       "0"
      ],
      [
       "E",
       "3",
       "5",
       "8",
       "9",
       "12",
       "4",
       "4"
      ],
      [
       "F",
       "2",
       "12",
       "14",
       "12",
       "14",
       "0",
       "0"
      ]
     ]
    },
    {
     "type": "formula",
     "title": "Scheduling formulas (start-at-zero convention)",
     "items": [
      {
       "name": "Early finish",
       "expr": "EF = ES + Duration",
       "meaning": "Earliest an activity can finish."
      },
      {
       "name": "Late start",
       "expr": "LS = LF − Duration",
       "meaning": "Latest an activity can start without delaying the project."
      },
      {
       "name": "Total float",
       "expr": "TF = LS − ES = LF − EF",
       "meaning": "How long an activity can slip without delaying the project end."
      },
      {
       "name": "Free float",
       "expr": "FF = (earliest ES of successors) − EF",
       "meaning": "How long an activity can slip without delaying any successor's early start."
      },
      {
       "name": "Critical path",
       "expr": "Longest path through the network (TF = 0 when the end date equals the calculated finish)",
       "meaning": "The chain that determines the project duration."
      }
     ]
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "C and E both show 4 days of total float, but they **share** it — they sit on the same path A → C → E → F (10 days). C has **zero free float**: if C slips 2 days, E starts 2 days later and E's remaining float shrinks to 2. E has 4 days of free float because nothing waits on it until F starts on day 12.",
     "title": "Total float is shared; free float is yours alone"
    },
    {
     "type": "callout",
     "kind": "pro",
     "text": "Many scheduling tools start counting at day 1, so EF = ES + duration − 1. The dates look different, but float values and the critical path are the same. Know which convention an exam or tool uses.",
     "title": "Day-1 tools"
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "A path with very little float is almost critical. If its activities are risky, it may become the critical path overnight. Also watch for **negative float**: it means an imposed deadline is earlier than the network can achieve — a signal to re-plan, compress or renegotiate.",
     "title": "Watch the near-critical path"
    },
    {
     "type": "scenario",
     "title": "Using float",
     "situation": "In the clinic example, the procurement officer asks to delay activity C (procure tablets) by 3 days to combine it with another order and get a discount. What is the impact, and what should you do?",
     "options": [
      {
       "text": "Refuse — any delay is unacceptable.",
       "feedback": "Weak. C has 4 days of total float; a 3-day delay does not move the end date.",
       "best": false
      },
      {
       "text": "Approve it without telling anyone; there is float.",
       "feedback": "Partly right on impact, but C has zero free float, so E will start later and the path's remaining float falls to 1 day. The configuration lead must know.",
       "best": false
      },
      {
       "text": "Approve it after confirming the impact: end date unchanged, but E shifts by 3 days and the path A–C–E–F keeps only 1 day of float. Inform the configuration lead and update the schedule and risk log.",
       "feedback": "Best. You use float deliberately, understand that it is shared along the path, and communicate the reduced buffer.",
       "best": true
      },
      {
       "text": "Approve it and add 3 days to the project end date to be safe.",
       "feedback": "Weak. Extending the end date is unnecessary and wastes schedule.",
       "best": false
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which dependency is the most common in project schedules?",
       "options": [
        "Start-to-finish",
        "Finish-to-finish",
        "Start-to-start",
        "Finish-to-start"
       ],
       "answer": 3,
       "explain": "Finish-to-start is by far the most common relationship."
      },
      {
       "q": "An activity has ES = 5, EF = 9, LS = 8, LF = 12. Its total float is:",
       "options": [
        "0 days",
        "3 days",
        "4 days",
        "7 days"
       ],
       "answer": 1,
       "explain": "TF = LS − ES = 8 − 5 = 3 (or LF − EF = 12 − 9 = 3)."
      },
      {
       "q": "In a forward pass, when an activity has two predecessors finishing on day 7 and day 10, its ES is:",
       "options": [
        "7",
        "8.5",
        "10",
        "17"
       ],
       "answer": 2,
       "explain": "A successor can only start when all predecessors finish, so ES takes the largest EF: 10."
      },
      {
       "q": "'Finish design before starting construction' chosen as best practice, though overlap is possible, is a:",
       "options": [
        "Discretionary dependency",
        "Mandatory (hard logic) dependency",
        "External dependency",
        "Lag"
       ],
       "answer": 0,
       "explain": "It is preferred logic, not required by physics or law — so it is discretionary and can be changed (e.g. when fast-tracking)."
      },
      {
       "q": "Negative total float indicates that:",
       "options": [
        "The project is ahead of schedule on its critical path",
        "Resources are idle and can be moved to other work",
        "The required finish date is earlier than the network allows",
        "The critical path has changed to a different set of activities"
       ],
       "answer": 2,
       "explain": "Negative float means a constraint date cannot be met with the current logic and durations."
      }
     ]
    }
   ]
  },
  {
   "id": "m3-l4",
   "title": "Schedule Compression & Resource Optimisation",
   "subtitle": "Crashing, fast-tracking, levelling and smoothing — trade-offs made visible",
   "minutes": 26,
   "objectives": [
    "Choose between crashing and fast-tracking and calculate crash cost slope",
    "Compress a schedule step by step along the critical path",
    "Distinguish resource levelling from resource smoothing"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Sooner or later someone will ask for the project to finish earlier. Compression is possible, but never free: you pay with **money**, **risk** or **scope**. Your job is to make those trade-offs clear before anyone commits."
    },
    {
     "type": "compare",
     "title": "Crashing vs fast-tracking",
     "columns": [
      {
       "title": "Crashing",
       "items": [
        "Add resources to critical activities to shorten them",
        "Overtime, extra crews, faster equipment, express delivery",
        "Increases cost",
        "Works best on effort-driven activities",
        "Diminishing returns — more people do not always mean less time"
       ]
      },
      {
       "title": "Fast-tracking",
       "items": [
        "Overlap activities normally done in sequence",
        "Change discretionary FS links to SS or add leads",
        "Little direct cost",
        "Increases risk of rework",
        "Only possible where dependencies are discretionary"
       ]
      }
     ]
    },
    {
     "type": "formula",
     "title": "Crash cost slope",
     "items": [
      {
       "name": "Cost slope",
       "expr": "(Crash cost − Normal cost) ÷ (Normal duration − Crash duration)",
       "meaning": "Extra cost per day saved. Crash the critical activity with the lowest slope first."
      },
      {
       "name": "Example",
       "expr": "Activity D: normal 5 d at Tk 100,000; crash 3 d at Tk 160,000",
       "meaning": "(160,000 − 100,000) ÷ (5 − 3) = Tk 30,000 per day saved."
      }
     ]
    },
    {
     "type": "table",
     "title": "Compressing the clinic schedule from 14 to 11 days",
     "head": [
      "Critical activity",
      "Normal → crash duration",
      "Cost slope (Tk/day)",
      "Decision"
     ],
     "rows": [
      [
       "A Confirm requirements",
       "3 → 2",
       "40,000",
       "Not chosen — most expensive (it would shorten both paths)"
      ],
      [
       "B Build booking module",
       "4 → 3",
       "25,000",
       "Crash 1 day first (cheapest): 14 → 13"
      ],
      [
       "D Integrate with records",
       "5 → 3",
       "30,000",
       "Crash 2 days next: 13 → 11"
      ],
      [
       "F Pilot and go-live",
       "2 → 2",
       "—",
       "Cannot be crashed"
      ]
     ]
    },
    {
     "type": "callout",
     "kind": "example",
     "text": "Total extra cost = 25,000 + 2 × 30,000 = **Tk 85,000** for 3 days saved. Always re-check other paths after each step: A → C → E → F is 10 days, so it is still shorter than 11 and the critical path is unchanged. If you had needed 9 days, crashing A would only get you to 10, because B, D and F are already at their limits — a sign that further compression needs fast-tracking, scope or logic changes.",
     "title": "Result and check"
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "Adding people to knowledge work — especially late — often slows it down at first: newcomers need onboarding, and communication overhead grows. This observation, famously made about late software projects, means crashing works best on well-defined, divisible tasks.",
     "title": "People are not interchangeable"
    },
    {
     "type": "text",
     "text": "Schedules also have to be **resource-feasible**. A network may say two activities run in parallel, but if both need the same certified electrician, they cannot. Resource optimisation adjusts the schedule to match real availability."
    },
    {
     "type": "compare",
     "title": "Resource levelling vs resource smoothing",
     "columns": [
      {
       "title": "Resource levelling",
       "items": [
        "Resolves over-allocation or limited availability",
        "Activities are delayed until resources are free",
        "Can change the critical path",
        "May extend the end date",
        "Used when resource limits are hard"
       ]
      },
      {
       "title": "Resource smoothing",
       "items": [
        "Evens out peaks and valleys in demand",
        "Moves activities only within their float",
        "Does not change the critical path",
        "End date unchanged",
        "May not remove all over-allocation"
       ]
      }
     ]
    },
    {
     "type": "callout",
     "kind": "example",
     "text": "**Levelling:** one licensed medical-gas engineer is needed by two parallel activities. One must wait, so the finish moves out by 4 days. **Smoothing:** painting needs 12 painters in week 6 but only 4 in week 7. Because painting the corridor has 5 days of float, you shift part of it into week 7 and use 8 painters each week — the end date does not move.",
     "title": "Levelling vs smoothing on site"
    },
    {
     "type": "scenario",
     "title": "Two weeks earlier, please",
     "situation": "Your sponsor asks you to bring forward the launch of a garment buyer's order-tracking portal by two weeks to match a trade fair. The critical path runs through design, build and user acceptance testing. What should you do FIRST?",
     "options": [
      {
       "text": "Immediately approve overtime for the whole team.",
       "feedback": "Weak. Crashing non-critical work wastes money, and blanket overtime raises burnout and defect risk.",
       "best": false
      },
      {
       "text": "Analyse the critical path and present options — fast-track design and build where logic is discretionary, crash specific critical activities, or reduce the scope released for the fair — with cost, risk and quality impacts for each.",
       "feedback": "Best. You base the response on the schedule model and give the sponsor clear trade-offs to decide on.",
       "best": true
      },
      {
       "text": "Tell the sponsor it is impossible.",
       "feedback": "Weak. Without analysis you cannot know, and it ignores options such as reduced scope for the fair.",
       "best": false
      },
      {
       "text": "Cut user acceptance testing to save two weeks.",
       "feedback": "Weak. Removing quality activities to hit a date shifts risk to the customer and often costs more later.",
       "best": false
      }
     ]
    },
    {
     "type": "checklist",
     "title": "Schedule health checklist",
     "items": [
      "Every activity has at least one predecessor and one successor (except start and finish).",
      "Durations are estimated by the people doing the work, with assumptions recorded.",
      "Hard date constraints are used only when truly required.",
      "Critical and near-critical paths are identified and reviewed.",
      "Leads and lags are justified and documented.",
      "No resource is assigned above available capacity after levelling.",
      "Key external dependencies (vendors, regulators) have owners and dates.",
      "Milestones match the charter and contract commitments.",
      "A schedule baseline is saved and changes go through change control."
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which technique overlaps activities that were planned in sequence?",
       "options": [
        "Crashing",
        "Resource levelling",
        "Fast-tracking",
        "Smoothing"
       ],
       "answer": 2,
       "explain": "Fast-tracking performs activities in parallel or with overlap, increasing rework risk."
      },
      {
       "q": "Crash cost Tk 90,000 for 4 days; normal cost Tk 60,000 for 7 days. The cost slope is:",
       "options": [
        "Tk 7,500/day",
        "Tk 10,000/day",
        "Tk 15,000/day",
        "Tk 30,000/day"
       ],
       "answer": 1,
       "explain": "(90,000 − 60,000) ÷ (7 − 4) = 30,000 ÷ 3 = Tk 10,000 per day."
      },
      {
       "q": "When crashing, which activities should you shorten first?",
       "options": [
        "Any non-critical activity with float",
        "Critical activities with the lowest cost slope",
        "The longest activity, regardless of its path",
        "Activities with the most float available"
       ],
       "answer": 1,
       "explain": "Only critical activities shorten the project; start with the cheapest per day saved."
      },
      {
       "q": "Which technique may extend the project end date?",
       "options": [
        "Resource smoothing",
        "Fast-tracking",
        "Resource levelling",
        "Using available float"
       ],
       "answer": 2,
       "explain": "Levelling delays activities to respect resource limits, which can change the critical path and push the end date."
      },
      {
       "q": "Fast-tracking is only possible where dependencies are:",
       "options": [
        "Mandatory",
        "Start-to-finish",
        "External",
        "Discretionary"
       ],
       "answer": 3,
       "explain": "Discretionary logic can be relaxed; mandatory logic cannot."
      }
     ]
    }
   ]
  },
  {
   "id": "m3-l5",
   "title": "Budgets, Reserves & Monte Carlo Forecasting",
   "subtitle": "Build a cost baseline, protect it with the right reserves and forecast with simulation",
   "minutes": 30,
   "objectives": [
    "Aggregate estimates into a cost baseline and project budget",
    "Distinguish contingency reserve from management reserve",
    "Explain how Monte Carlo simulation produces probabilistic forecasts"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Cost planning turns estimates into a **time-phased budget** that the organisation can fund and you can control. A sound budget does three things: it covers the planned work, it protects against identified risks, and it shows when money will be needed."
    },
    {
     "type": "table",
     "title": "Cost categories worth separating",
     "head": [
      "Category",
      "Examples",
      "Why it matters"
     ],
     "rows": [
      [
       "Direct vs indirect",
       "Contractor labour, materials vs office rent, shared IT",
       "Indirect costs are often allocated by formula; agree the rule early"
      ],
      [
       "Fixed vs variable",
       "Software licence fee vs cloud usage per transaction",
       "Variable costs grow with scope and volume"
      ],
      [
       "One-time vs recurring",
       "Implementation vs annual support and hosting",
       "Business cases fail when recurring costs are forgotten"
      ]
     ]
    },
    {
     "type": "layers",
     "title": "How a project budget is built (top first)",
     "items": [
      {
       "label": "Project budget",
       "parts": [
        "Cost baseline + management reserve"
       ]
      },
      {
       "label": "Management reserve",
       "parts": [
        "For unknown-unknowns",
        "Outside the baseline; needs management approval"
       ]
      },
      {
       "label": "Cost baseline",
       "parts": [
        "Approved, time-phased budget",
        "Control accounts + contingency reserves"
       ]
      },
      {
       "label": "Contingency reserves",
       "parts": [
        "For identified risks (known-unknowns)",
        "Inside the baseline"
       ]
      },
      {
       "label": "Work package and activity estimates",
       "parts": [
        "Bottom-up costs of the planned work"
       ]
      }
     ]
    },
    {
     "type": "table",
     "title": "Worked example — outpatient wing (Tk crore)",
     "head": [
      "Line",
      "Amount",
      "Running total"
     ],
     "rows": [
      [
       "Sum of work package estimates",
       "4.20",
       "4.20"
      ],
      [
       "+ Contingency reserve (identified risks, e.g. soil conditions, import duty changes)",
       "0.40",
       "4.60 = cost baseline"
      ],
      [
       "+ Management reserve (unforeseen events)",
       "0.30",
       "4.90 = project budget"
      ]
     ]
    },
    {
     "type": "compare",
     "title": "Contingency reserve vs management reserve",
     "columns": [
      {
       "title": "Contingency reserve",
       "items": [
        "Covers identified risks and their responses",
        "Included in the cost baseline",
        "Usually controlled by the PM within agreed rules",
        "Sized from risk analysis (e.g. expected value or simulation)",
        "Unused amounts can be released as risks pass"
       ]
      },
      {
       "title": "Management reserve",
       "items": [
        "Covers unforeseen, unidentified risks",
        "Not in the cost baseline but in the total budget",
        "Released only with management or sponsor approval",
        "Often set as a policy percentage",
        "Using it changes the cost baseline via change control"
       ]
      }
     ]
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "Plotting the cumulative cost baseline over time usually produces an **S-curve**: slow spending at the start, a steep middle and a flattening end. Compare it with funding tranches from the finance team or donor; if planned spend exceeds available funding in any period, re-sequence the work — this is called **funding limit reconciliation**.",
     "title": "The S-curve and funding"
    },
    {
     "type": "text",
     "text": "Single-number estimates hide risk. **Monte Carlo simulation** runs a schedule or cost model thousands of times, each time drawing random values from the ranges you provide (for example the O–M–P range of each activity). The result is a distribution of possible outcomes and the probability of meeting any date or budget."
    },
    {
     "type": "flow",
     "title": "Monte Carlo forecasting — how it works",
     "items": [
      {
       "label": "Model",
       "text": "Schedule network or cost breakdown"
      },
      {
       "label": "Ranges",
       "text": "Three-point estimates, risk events, correlations"
      },
      {
       "label": "Simulate",
       "text": "Thousands of runs with random draws"
      },
      {
       "label": "Read results",
       "text": "Histogram and S-curve of outcomes"
      },
      {
       "label": "Decide",
       "text": "Commit at an agreed confidence, e.g. P80"
      }
     ]
    },
    {
     "type": "callout",
     "kind": "example",
     "text": "The deterministic plan says the wing will be ready in **13 months**. Simulation shows only about a 20% chance of achieving that. **P50 = 14.5 months**, **P80 = 16 months**, **P90 = 17 months**. The sponsor chooses to commit publicly to 16 months (P80) and to treat 13 months as an internal stretch target. On agile work, a similar simulation can sample past weekly throughput to forecast when a set of backlog items will be finished.",
     "title": "Reading a simulation"
    },
    {
     "type": "callout",
     "kind": "pro",
     "text": "Where parallel paths merge, the merge point waits for the latest one — so the chance of finishing on time is lower than for any single path. This **merge bias** is invisible in a critical path calculation but shows up clearly in a Monte Carlo forecast.",
     "title": "Why simulation beats adding up"
    },
    {
     "type": "scenario",
     "title": "'Spare' money",
     "situation": "Halfway through the outpatient wing project, a department head asks you to use Tk 25 lakh of the contingency reserve to add a staff café, saying the money is 'unused anyway'. What should you do?",
     "options": [
      {
       "text": "Agree; the reserve has not been needed so far.",
       "feedback": "Weak. Contingency exists for identified risks, not new scope. Spending it leaves those risks unfunded.",
       "best": false
      },
      {
       "text": "Explain that contingency is reserved for identified risks; treat the café as a change request with its own impact analysis and funding decision by the sponsor.",
       "feedback": "Best. New scope goes through change control, and reserves are used only for their purpose.",
       "best": true
      },
      {
       "text": "Use the management reserve instead without telling the sponsor.",
       "feedback": "Weak. Management reserve needs management approval and is not for discretionary scope.",
       "best": false
      },
      {
       "text": "Reject the idea outright without passing it on.",
       "feedback": "Weak. It may be valuable; the right path is to route it to the decision-maker with an impact analysis.",
       "best": false
      }
     ]
    },
    {
     "type": "case",
     "title": "Budgeting a private hospital wing in Chattogram",
     "context": "A private hospital in Chattogram is adding a 60-bed wing. The bottom-up estimate of all work packages is Tk 38 crore. The risk register identifies piling problems on reclaimed land, possible import duty increases on medical equipment and monsoon delays. Expected values of these risks total Tk 3.2 crore. The board's policy sets management reserve at 5% of the cost baseline. Funding arrives in four quarterly tranches of Tk 11 crore each. A Monte Carlo cost simulation shows P50 = Tk 41 crore and P80 = Tk 43.5 crore.",
     "questions": [
      "Calculate the cost baseline and total project budget.",
      "Who controls each reserve?",
      "What does the funding schedule mean for planning?",
      "At what confidence level would you recommend the board approve the budget, and why?"
     ],
     "answer": "**Cost baseline** = 38 + 3.2 = **Tk 41.2 crore**. **Management reserve** = 5% × 41.2 ≈ Tk 2.06 crore, so **project budget ≈ Tk 43.26 crore**. **Control:** the PM manages contingency within agreed rules for the identified risks; the board or sponsor approves any use of management reserve, which then updates the baseline through change control. **Funding:** total funding is Tk 44 crore, but only Tk 11 crore per quarter — the time-phased S-curve must be checked against each tranche; expensive equipment purchases may need to be re-sequenced or financed. **Confidence:** the baseline (Tk 41.2 crore) sits near P50, so there is roughly a coin-flip chance of staying within it. The total budget (≈ Tk 43.26 crore) is just under P80 (Tk 43.5 crore). Recommend the board approve funding close to P80 and treat the gap as a visible, governed risk — not hide it."
    },
    {
     "type": "reflection",
     "prompt": "Recall a project where the budget or deadline was set before anyone estimated the work. How would a range-based estimate or a simple Monte Carlo forecast have changed the conversation with the sponsor?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Parametric estimating",
       "def": "Estimating by multiplying a quantity by a unit rate derived from historical data, e.g. cost per square metre."
      },
      {
       "term": "PERT estimate",
       "def": "A weighted three-point estimate calculated as (Optimistic + 4 × Most likely + Pessimistic) ÷ 6."
      },
      {
       "term": "Story point",
       "def": "A unitless, team-relative measure of the size of a backlog item, combining effort, complexity and uncertainty."
      },
      {
       "term": "Velocity",
       "def": "The amount of work, usually in story points, a team completes to the definition of done in one iteration."
      },
      {
       "term": "Critical path",
       "def": "The longest sequence of dependent activities through a schedule network; it determines the shortest possible project duration."
      },
      {
       "term": "Total float",
       "def": "The amount of time an activity can be delayed without delaying the project finish date."
      },
      {
       "term": "Free float",
       "def": "The amount of time an activity can be delayed without delaying the early start of any successor."
      },
      {
       "term": "Crashing",
       "def": "Shortening the schedule by adding resources to critical activities, usually at extra cost."
      },
      {
       "term": "Fast-tracking",
       "def": "Shortening the schedule by overlapping activities normally done in sequence, at a higher risk of rework."
      },
      {
       "term": "Contingency reserve",
       "def": "Budget or time within the baseline set aside for identified risks."
      },
      {
       "term": "Management reserve",
       "def": "Budget outside the cost baseline for unforeseen work; its use requires management approval."
      },
      {
       "term": "Cost baseline",
       "def": "The approved, time-phased budget, including contingency but excluding management reserve, used to measure cost performance."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Work packages total Tk 2.0 crore, contingency is Tk 0.2 crore and management reserve is Tk 0.1 crore. The cost baseline is:",
       "options": [
        "Tk 2.0 crore",
        "Tk 2.2 crore",
        "Tk 2.3 crore",
        "Tk 2.1 crore"
       ],
       "answer": 1,
       "explain": "Cost baseline = estimates + contingency = 2.2. Management reserve is added on top to reach the total budget of 2.3."
      },
      {
       "q": "Management reserve is intended for:",
       "options": [
        "Unforeseen work within scope (unknown-unknowns)",
        "Identified risks with planned responses (known-unknowns)",
        "New features requested by users after sign-off",
        "Team bonuses and recognition at project close"
       ],
       "answer": 0,
       "explain": "Management reserve covers unidentified risks and requires management approval to use."
      },
      {
       "q": "A Monte Carlo result says 'P80 = 16 months'. This means:",
       "options": [
        "The project will take exactly 16 months to complete",
        "There is only a 16% chance of finishing on time",
        "About 80% of simulated runs finished within 16 months",
        "The project will be 80% complete at month 16"
       ],
       "answer": 2,
       "explain": "P80 is the value at or below which 80% of simulated outcomes fall."
      },
      {
       "q": "Why might a Monte Carlo forecast show a later date than the critical path calculation?",
       "options": [
        "Simulation always adds a fixed buffer to every activity",
        "The critical path calculation is always wrong for large projects",
        "It ignores dependencies and treats every activity as independent",
        "It captures uncertainty and merge bias where paths converge"
       ],
       "answer": 3,
       "explain": "Uncertainty on several converging paths makes on-time completion less likely than a single-path calculation suggests."
      },
      {
       "q": "Comparing the time-phased cost baseline with available funding by period is called:",
       "options": [
        "Funding limit reconciliation",
        "Schedule crashing",
        "Resource smoothing analysis",
        "Benefits realisation planning"
       ],
       "answer": 0,
       "explain": "Funding limit reconciliation adjusts the timing of work so planned spending fits within funding limits."
      }
     ]
    }
   ]
  }
 ]
});
TRACK.modules.push({
 "id": "m4",
 "order": 4,
 "code": "Deliver",
 "title": "Agile, Hybrid & Quality Execution",
 "subtitle": "Deliver the work: run Scrum and Kanban well, design hybrids on purpose and build quality in",
 "outcomes": [
  "Run Scrum with clear accountabilities, events, artifacts and commitments",
  "Improve flow with Kanban practices, WIP limits and flow metrics including the CFD",
  "Compare scaling frameworks neutrally and design a deliberate hybrid delivery model",
  "Plan, assure and control quality and argue for prevention using cost of quality",
  "Choose suitable contract types and run effective daily execution habits"
 ],
 "lessons": [
  {
   "id": "m4-l1",
   "title": "Scrum in Practice",
   "subtitle": "Accountabilities, events, artifacts and commitments — explained plainly",
   "minutes": 28,
   "objectives": [
    "Describe the three Scrum accountabilities and how they work together",
    "Explain the purpose and timeboxes of the Scrum events",
    "Link each Scrum artifact to its commitment"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Scrum is a lightweight framework for teams solving complex problems. It rests on **empiricism** — knowledge comes from experience, so you make work **transparent**, **inspect** it often and **adapt** quickly — and on lean thinking: reduce waste and focus on essentials. A Scrum Team is small, typically ten people or fewer, cross-functional and self-managing."
    },
    {
     "type": "framework",
     "title": "Three accountabilities",
     "items": [
      {
       "label": "PO",
       "title": "Product Owner",
       "text": "Maximises the value of the product. Owns and orders the product backlog, sets the product goal and is one person, not a committee — though they may represent many stakeholders."
      },
      {
       "label": "SM",
       "title": "Scrum Master",
       "text": "Accountable for the team's effectiveness. Coaches the team and organisation in Scrum, removes impediments and helps everyone understand empirical working."
      },
      {
       "label": "DEV",
       "title": "Developers",
       "text": "Everyone who creates the increment — engineers, designers, testers, analysts. They plan the sprint, hold each other accountable and meet the definition of done."
      }
     ]
    },
    {
     "type": "table",
     "title": "Five events (maximum timeboxes for a one-month sprint; shorter sprints usually need less)",
     "head": [
      "Event",
      "Purpose",
      "Timebox"
     ],
     "rows": [
      [
       "The Sprint",
       "Container for all other events; a fixed period in which an increment is created",
       "One month or less"
      ],
      [
       "Sprint Planning",
       "Decide why the sprint is valuable (sprint goal), what can be done and how",
       "Up to 8 hours"
      ],
      [
       "Daily Scrum",
       "Developers inspect progress toward the sprint goal and adapt the plan for the next day",
       "15 minutes"
      ],
      [
       "Sprint Review",
       "Inspect the outcome with stakeholders and adapt the product backlog",
       "Up to 4 hours"
      ],
      [
       "Sprint Retrospective",
       "Inspect how the team worked and plan improvements in quality and effectiveness",
       "Up to 3 hours"
      ]
     ]
    },
    {
     "type": "table",
     "title": "Artifacts and their commitments",
     "head": [
      "Artifact",
      "What it is",
      "Commitment that gives it focus"
     ],
     "rows": [
      [
       "Product Backlog",
       "Ordered, emerging list of what is needed to improve the product",
       "Product Goal — the long-term objective for the product"
      ],
      [
       "Sprint Backlog",
       "Sprint goal + selected items + the plan to deliver them",
       "Sprint Goal — the single objective for the sprint"
      ],
      [
       "Increment",
       "A usable step toward the product goal that meets the definition of done",
       "Definition of Done — the quality standard for the increment"
      ]
     ]
    },
    {
     "type": "flow",
     "title": "One sprint at a glance",
     "items": [
      {
       "label": "Sprint Planning",
       "text": "Goal and plan"
      },
      {
       "label": "Daily Scrums",
       "text": "Daily inspection and adaptation"
      },
      {
       "label": "Building the increment",
       "text": "Refinement continues alongside"
      },
      {
       "label": "Sprint Review",
       "text": "Stakeholders inspect results"
      },
      {
       "label": "Retrospective",
       "text": "Team improves how it works"
      }
     ]
    },
    {
     "type": "callout",
     "kind": "definition",
     "text": "**Refinement** is an ongoing activity, not a formal event: the product owner and developers break down, clarify and size upcoming items so they are ready for future sprint planning. Many teams spend a modest share of each sprint on it.",
     "title": "Backlog refinement"
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "Scrum depends on **commitment, focus, openness, respect and courage**. Without them, the events become empty rituals — a stand-up where nobody admits a problem inspects nothing.",
     "title": "Five values make it work"
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "The Daily Scrum turned into a status report for a manager. A product owner with no real authority to decide. A sprint review that is a one-way demo with no stakeholder feedback. A 'Scrum Master' who is simply the old project manager assigning tasks. Each one removes the inspection or adaptation Scrum relies on.",
     "title": "Common anti-patterns"
    },
    {
     "type": "template",
     "title": "Sprint backlog board",
     "purpose": "Make the sprint goal and the team's plan visible and update it every day.",
     "columns": [
      "Sprint goal",
      "Backlog item",
      "Size (pts)",
      "Tasks / plan",
      "Who is on it",
      "Status",
      "Impediments"
     ],
     "example": [
      [
       "Agents can onboard customers offline",
       "Capture ID photo offline",
       "5",
       "Camera screen; local encryption; sync queue; tests",
       "Rafi, Nadia",
       "In progress",
       "Need test devices with Android 10"
      ],
      [
       "Agents can onboard customers offline",
       "Sync status on dashboard",
       "3",
       "API endpoint; status badge; tests",
       "Tanvir",
       "To do",
       "—"
      ]
     ],
     "rows": 8
    },
    {
     "type": "callout",
     "kind": "pro",
     "text": "Scrum does not define a project manager. In practice, PMs on Scrum projects often coordinate across several teams, manage budgets, contracts, risks and external stakeholders, and protect the team's ability to work. Do not assign tasks to developers or run their Daily Scrum.",
     "title": "Where does the project manager fit?"
    },
    {
     "type": "scenario",
     "title": "An urgent request mid-sprint",
     "situation": "On day 4 of a two-week sprint, the head of sales asks a developer directly to add a promotional banner for a campaign starting next week. The developer asks you what to do. What is BEST?",
     "options": [
      {
       "text": "Tell the developer to add it quickly; it is small.",
       "feedback": "Weak. Bypassing the product owner undermines ordering and can quietly endanger the sprint goal.",
       "best": false
      },
      {
       "text": "Direct the request to the product owner, who decides whether it is more valuable than current work and, with the developers, whether it fits without endangering the sprint goal.",
       "feedback": "Best. The product owner owns priorities; the developers own the sprint plan. Together they can adjust scope while protecting the goal.",
       "best": true
      },
      {
       "text": "Cancel the sprint and start a new one including the banner.",
       "feedback": "Weak. Only the product owner can cancel a sprint, and only when its goal becomes obsolete — a small banner does not justify it.",
       "best": false
      },
      {
       "text": "Tell the head of sales to wait until the next sprint without discussing it.",
       "feedback": "Not ideal. It may be the right outcome, but the decision belongs to the product owner, who may find it is genuinely urgent.",
       "best": false
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Who is accountable for ordering the product backlog?",
       "options": [
        "Product Owner",
        "Scrum Master",
        "Developers",
        "Project sponsor"
       ],
       "answer": 0,
       "explain": "The product owner orders the backlog to maximise value."
      },
      {
       "q": "The commitment for the Increment is the:",
       "options": [
        "Definition of Done",
        "Product Goal",
        "Sprint Goal",
        "Acceptance criteria"
       ],
       "answer": 0,
       "explain": "Each artifact has a commitment; for the increment it is the definition of done."
      },
      {
       "q": "What is the maximum timebox for a Daily Scrum?",
       "options": [
        "5 minutes",
        "15 minutes",
        "30 minutes",
        "1 hour"
       ],
       "answer": 1,
       "explain": "The Daily Scrum is timeboxed to 15 minutes, regardless of sprint length."
      },
      {
       "q": "Who can cancel a sprint?",
       "options": [
        "Scrum Master",
        "Product Owner",
        "Any stakeholder",
        "Developers"
       ],
       "answer": 1,
       "explain": "Only the product owner can cancel a sprint, typically if the sprint goal becomes obsolete."
      },
      {
       "q": "Which event focuses on improving the way the team works?",
       "options": [
        "Sprint Review",
        "Sprint Retrospective",
        "Sprint Planning",
        "Product backlog refinement"
       ],
       "answer": 1,
       "explain": "The retrospective inspects people, interactions, processes, tools and the definition of done to plan improvements."
      }
     ]
    }
   ]
  },
  {
   "id": "m4-l2",
   "title": "Kanban, WIP Limits & Flow Metrics",
   "subtitle": "Visualise work, limit work in progress and read flow like a professional",
   "minutes": 28,
   "objectives": [
    "Apply the core Kanban practices to a team's workflow",
    "Set WIP limits and explain why they speed delivery up",
    "Calculate and interpret lead time, cycle time, throughput and Little's Law",
    "Read a cumulative flow diagram"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Kanban is a method for improving the flow of work. It does not prescribe roles or events: you **start with what you do now**, make it visible, and improve step by step. It works well for support teams, operations, marketing, and project teams whose work arrives continuously."
    },
    {
     "type": "framework",
     "title": "Six core Kanban practices",
     "items": [
      {
       "label": "K1",
       "title": "Visualise the work",
       "text": "Show every work item and workflow stage on a board so everyone sees the same picture."
      },
      {
       "label": "K2",
       "title": "Limit work in progress",
       "text": "Cap how many items can be in each stage at once."
      },
      {
       "label": "K3",
       "title": "Manage flow",
       "text": "Watch how work moves, spot blockages and act to keep items moving."
      },
      {
       "label": "K4",
       "title": "Make policies explicit",
       "text": "Write down the rules: what 'ready for test' means, how urgent items are handled."
      },
      {
       "label": "K5",
       "title": "Implement feedback loops",
       "text": "Regular replenishment, daily stand-ups at the board, delivery and service reviews."
      },
      {
       "label": "K6",
       "title": "Improve collaboratively",
       "text": "Use data and small experiments to evolve the process together."
      }
     ]
    },
    {
     "type": "table",
     "title": "Example board with WIP limits",
     "head": [
      "Stage",
      "Ready",
      "Develop",
      "Test",
      "Deploy",
      "Done"
     ],
     "rows": [
      [
       "WIP limit",
       "5",
       "4",
       "3",
       "2",
       "—"
      ],
      [
       "Items now",
       "5",
       "4",
       "3",
       "1",
       "27 this month"
      ]
     ]
    },
    {
     "type": "callout",
     "kind": "definition",
     "text": "A **work-in-progress limit** caps the number of items allowed in a stage. When a column is full, people **stop starting and start finishing** — they help move existing items forward instead of pulling new ones. Fewer items in progress means less task-switching, faster feedback and shorter waits.",
     "title": "WIP limit"
    },
    {
     "type": "table",
     "title": "Flow metrics",
     "head": [
      "Metric",
      "Definition",
      "Use it to…"
     ],
     "rows": [
      [
       "WIP",
       "Number of items started but not finished",
       "Keep load manageable; predict cycle time"
      ],
      [
       "Throughput",
       "Number of items finished per unit of time",
       "Forecast how much can be delivered"
      ],
      [
       "Cycle time",
       "Elapsed time from when work starts on an item to when it is finished",
       "Measure team responsiveness and predictability"
      ],
      [
       "Lead time",
       "Elapsed time from when the request is made (or committed to) until it is delivered",
       "Measure what the customer experiences"
      ],
      [
       "Work item age",
       "Time elapsed since an in-progress item was started",
       "Spot items getting stuck before they become late"
      ]
     ]
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "Organisations define lead and cycle time slightly differently. Write down exactly which board columns start and stop each clock, or your metrics will be argued about rather than used.",
     "title": "Agree your start and end points"
    },
    {
     "type": "formula",
     "title": "Flow formulas",
     "items": [
      {
       "name": "Little's Law",
       "expr": "Average cycle time = Average WIP ÷ Average throughput",
       "meaning": "Holds for a reasonably stable system. Example: 12 items in progress, 6 finished per week → about 2 weeks average cycle time."
      },
      {
       "name": "Reduce WIP to speed up",
       "expr": "Halve WIP at the same throughput → halve cycle time",
       "meaning": "The fastest lever most teams have is starting less work."
      },
      {
       "name": "Flow efficiency",
       "expr": "Active work time ÷ Total cycle time × 100%",
       "meaning": "Often surprisingly low in knowledge work — items spend much of their time waiting, not being worked on."
      }
     ]
    },
    {
     "type": "text",
     "text": "A **cumulative flow diagram (CFD)** stacks the number of items in each stage over time. Each coloured band is a stage; the top edge of 'Done' rises as work is delivered. Reading it takes practice, but a few patterns tell you most of what you need."
    },
    {
     "type": "keypoints",
     "items": [
      "**Vertical** distance across the in-progress bands on a date = WIP at that moment.",
      "**Horizontal** distance from where an item enters progress to where it reaches Done ≈ approximate average cycle time.",
      "A band that **widens** = work is piling up in that stage — a bottleneck downstream of it or slow work in it.",
      "A **flat** Done line = nothing is being delivered — investigate immediately.",
      "Bands rising **smoothly and in parallel** = stable, predictable flow.",
      "A sudden drop in the top (backlog) line = scope removed; a jump = scope added."
     ],
     "title": "How to read a CFD"
    },
    {
     "type": "callout",
     "kind": "example",
     "text": "A Dhaka bank's internal IT team had 70 tickets in progress and average cycle time of 19 days. They visualised every ticket, set WIP limits per person and stage, and made a policy for urgent incidents (a separate expedite lane, limit 1). Within three months WIP fell to about 25 and cycle time to roughly 7 days — with the same people.",
     "title": "Kanban in a bank's IT support team"
    },
    {
     "type": "scenario",
     "title": "A full test column",
     "situation": "Your board shows Test at its WIP limit of 3, with two items waiting in 'Develop – done'. Two developers say they have nothing to do because they cannot pull new work. What should the team do?",
     "options": [
      {
       "text": "Raise the Test WIP limit to 6 so developers can keep moving work forward.",
       "feedback": "Weak. Raising the limit hides the bottleneck and increases waiting and cycle time.",
       "best": false
      },
      {
       "text": "Have the idle developers help with testing — pairing with testers, automating checks or fixing issues found — to finish items in Test.",
       "feedback": "Best. 'Stop starting, start finishing': swarming on the bottleneck improves flow and builds shared skills.",
       "best": true
      },
      {
       "text": "Let the developers start new items anyway and park them.",
       "feedback": "Weak. Starting more work increases WIP and slows everything down.",
       "best": false
      },
      {
       "text": "Send the developers home early.",
       "feedback": "Weak. It wastes capacity that could relieve the bottleneck.",
       "best": false
      }
     ]
    },
    {
     "type": "callout",
     "kind": "pro",
     "text": "Many Scrum teams use a Kanban board, WIP limits and flow metrics inside their sprints. The combination keeps Scrum's cadence and goal focus while improving flow within the sprint.",
     "title": "Scrum and Kanban together"
    },
    {
     "type": "reflection",
     "prompt": "Look at your own work right now. How many things have you started but not finished? What would happen to your delivery speed if you limited yourself to three?"
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Average WIP is 20 items and average throughput is 10 items per week. By Little's Law, average cycle time is about:",
       "options": [
        "0.5 weeks",
        "2 weeks",
        "10 weeks",
        "200 weeks"
       ],
       "answer": 1,
       "explain": "20 ÷ 10 = 2 weeks."
      },
      {
       "q": "On a CFD, a band that keeps getting wider indicates:",
       "options": [
        "Work accumulating in that stage",
        "Faster delivery through that stage",
        "Scope being removed from the backlog",
        "Lower WIP across the whole system"
       ],
       "answer": 0,
       "explain": "A widening band means more items are entering a stage than leaving it."
      },
      {
       "q": "Lead time differs from cycle time because lead time:",
       "options": [
        "Starts when the customer request is made or accepted",
        "Starts only when the team begins active work",
        "Excludes the waiting time before work is started",
        "Measures the number of items finished per week"
       ],
       "answer": 0,
       "explain": "Lead time reflects the customer's wait from request to delivery; cycle time starts when work begins."
      },
      {
       "q": "What is the main purpose of a WIP limit?",
       "options": [
        "To keep everyone busy",
        "To measure velocity",
        "To prevent stakeholders from adding work",
        "To reduce multitasking and improve flow"
       ],
       "answer": 3,
       "explain": "Limiting WIP reduces task switching and queues, which shortens cycle time."
      },
      {
       "q": "Which metric shows how long an unfinished item has been in progress?",
       "options": [
        "Work item age",
        "Throughput",
        "Sprint velocity",
        "Lead time"
       ],
       "answer": 0,
       "explain": "Work item age tracks items still in progress, so you can act before they become late."
      }
     ]
    }
   ]
  },
  {
   "id": "m4-l3",
   "title": "Scaling Frameworks & Hybrid Delivery Design",
   "subtitle": "When many teams must work as one — and how to blend predictive and agile on purpose",
   "minutes": 28,
   "objectives": [
    "Summarise the main ideas of SAFe, LeSS, Scrum@Scale and Nexus neutrally",
    "Decide when scaling is needed and when it is not",
    "Design a deliberate hybrid delivery model for a real project"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "When a product needs more people than one small team, coordination becomes the main challenge: shared backlogs, dependencies, integration and aligned priorities. Several frameworks offer patterns for this. None is universally best — each reflects different assumptions about structure and control."
    },
    {
     "type": "table",
     "title": "Scaling frameworks at a glance",
     "head": [
      "Framework",
      "Core idea",
      "Typical structure",
      "Often chosen when",
      "Watch out for"
     ],
     "rows": [
      [
       "SAFe (Scaled Agile Framework)",
       "Comprehensive, configurable model spanning team, program and portfolio levels",
       "Agile release trains of roughly 50–125 people planning together every Planning Interval (often 8–12 weeks)",
       "Large enterprises need alignment with portfolio governance and budgeting",
       "Can become heavy and role-rich if adopted wholesale"
      ],
      [
       "LeSS (Large-Scale Scrum)",
       "Scrum applied to many teams with as little extra structure as possible",
       "One product, one product owner, one product backlog, several teams in a common sprint",
       "Organisations willing to simplify structure and descale",
       "Requires deep organisational change"
      ],
      [
       "Scrum@Scale",
       "Scale-free extension of Scrum through networks of teams",
       "Scrum of Scrums for delivery; a MetaScrum for backlog priorities; executive teams to remove impediments",
       "Organisations wanting to grow Scrum gradually",
       "Relies on strong Scrum at team level"
      ],
      [
       "Nexus",
       "Lightweight exoskeleton around 3–9 Scrum teams",
       "A Nexus Integration Team focuses on integration and dependencies",
       "A single product with a few teams and integration pain",
       "Limited guidance beyond about nine teams"
      ]
     ]
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "Many scaling problems are really team-level problems multiplied. Before adopting a framework, reduce dependencies (feature teams, modular architecture), shrink batch sizes and fix flow at team level. Sometimes the best scaling move is fewer people on the product.",
     "title": "Scale last, not first"
    },
    {
     "type": "keypoints",
     "items": [
      "A shared cadence so teams plan, integrate and review together",
      "Joint planning events with visible cross-team dependencies",
      "Frequent (ideally continuous) integration of all teams' work",
      "A single, clearly owned view of priorities across teams",
      "Communities of practice to share skills and standards"
     ],
     "title": "Practices common to most scaled approaches"
    },
    {
     "type": "text",
     "text": "Most organisations in 2026 run **hybrid** delivery. Good hybrids are designed on purpose: each part of the work gets the approach that fits its uncertainty, and the joins between parts are managed explicitly."
    },
    {
     "type": "framework",
     "title": "Five common hybrid patterns",
     "items": [
      {
       "label": "H1",
       "title": "Predictive wrapper, agile core",
       "text": "Gates, budget and milestones are predictive; product development inside runs in sprints."
      },
      {
       "label": "H2",
       "title": "Agile discovery, predictive build",
       "text": "Prototype and test ideas iteratively, then build the chosen solution with a fixed plan (common in construction and hardware)."
      },
      {
       "label": "H3",
       "title": "Parallel tracks",
       "text": "Agile software teams alongside predictive hardware, construction or procurement, joined by integration milestones."
      },
      {
       "label": "H4",
       "title": "Predictive build, incremental rollout",
       "text": "The solution is completed predictively, then deployed in waves — site by site or region by region."
      },
      {
       "label": "H5",
       "title": "Project plus flow",
       "text": "A project delivers a new capability; a Kanban team handles support and small changes in parallel."
      }
     ]
    },
    {
     "type": "steps",
     "title": "Designing a hybrid in six steps",
     "items": [
      {
       "title": "Split the work",
       "text": "Divide scope into components (software, hardware, training, process, procurement)."
      },
      {
       "title": "Rate uncertainty",
       "text": "Place each component on the uncertainty matrix from the Frame stage."
      },
      {
       "title": "Assign approaches",
       "text": "Predictive for stable, high-cost-of-change parts; agile or flow for uncertain parts."
      },
      {
       "title": "Design the joins",
       "text": "Integration milestones, interface agreements, shared cadence for reviews."
      },
      {
       "title": "Align governance",
       "text": "Map phase gates and reporting to both styles — milestones and release forecasts."
      },
      {
       "title": "Review and adapt",
       "text": "Check at each gate and retrospective whether the design still fits."
      }
     ]
    },
    {
     "type": "callout",
     "kind": "pro",
     "text": "Keep a simple **dependency board**: one row per team or track, columns for upcoming iterations or months, and strings or arrows linking each dependency to the work that needs it. Review it at every joint planning session. A dependency without a named owner and date is a risk, not a plan.",
     "title": "Make the joins visible"
    },
    {
     "type": "case",
     "title": "ERP for a knitwear exporter in Narayanganj",
     "context": "A knitwear exporter with three factories and 9,000 workers is implementing a cloud ERP for merchandising, production planning, inventory and finance. The vendor's standard modules cover finance and inventory well, but merchandising and production planning need heavy configuration and a custom mobile app for line supervisors. Buyers in Europe require full traceability data from next autumn's season. Finance staff are experienced and process-driven; line supervisors have low digital literacy. The board wants a single go-live date for simplicity.",
     "questions": [
      "Which components suit predictive delivery and which suit agile?",
      "Is a single big-bang go-live wise? What would you propose?",
      "How would you manage the joins between components?",
      "What governance information would you give the board?"
     ],
     "answer": "**Predictive:** finance and inventory using standard modules (stable requirements, accounting rules, data migration with clear cut-over). **Agile:** merchandising configuration and the supervisor app — uncertain needs, high user-experience risk; build in sprints with supervisors testing on the floor. **Go-live:** a big bang across three factories is risky. Propose finance and inventory first, then production modules piloted in one factory, then incremental rollout to the other two (pattern H4 combined with H3), with the traceability deadline as a fixed milestone. **Joins:** integration milestones every few sprints, an interface agreement on data structures, a shared release calendar and a cross-team integration lead. **Board:** a milestone roadmap plus release forecasts as ranges, budget burn against the baseline, top risks and readiness measures (training completion, data quality) — not task-level detail."
    },
    {
     "type": "scenario",
     "title": "The PMO wants a Gantt chart",
     "situation": "Your project uses an agile team for the customer app and predictive contracts for data-centre hardware. The PMO insists the agile team provide a detailed task-level Gantt chart for the next six months. What should you do?",
     "options": [
      {
       "text": "Force the team to produce the Gantt chart; the PMO sets the rules.",
       "feedback": "Weak. A six-month task-level plan for evolving work will be fiction and wastes effort.",
       "best": false
      },
      {
       "text": "Refuse — agile teams do not do planning.",
       "feedback": "Weak and untrue. Agile teams plan continuously; the issue is the level and form of planning.",
       "best": false
      },
      {
       "text": "Meet the PMO's real need: provide a milestone roadmap integrated with the hardware schedule, release forecasts as ranges and burn-up charts, and agree this format in the governance plan.",
       "feedback": "Best. You satisfy the governance need for visibility and integration while using planning artefacts that fit adaptive work.",
       "best": true
      },
      {
       "text": "Produce the Gantt chart yourself without involving the team.",
       "feedback": "Weak. It hides reality and the team will not own or follow it.",
       "best": false
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which framework is built around one product backlog and one product owner for several teams, with minimal extra roles?",
       "options": [
        "SAFe",
        "Scrum@Scale",
        "LeSS",
        "PRINCE2"
       ],
       "answer": 2,
       "explain": "LeSS keeps Scrum's simplicity: one product, one backlog, one product owner, several teams."
      },
      {
       "q": "In Nexus, which group focuses on integration across teams?",
       "options": [
        "The Executive MetaScrum team",
        "The release train engineer",
        "The PMO",
        "The Nexus Integration Team"
       ],
       "answer": 3,
       "explain": "The Nexus Integration Team helps the Scrum teams integrate their work and resolve dependencies."
      },
      {
       "q": "What should usually come before adopting a scaling framework?",
       "options": [
        "Hiring more teams to increase delivery capacity",
        "Reducing dependencies and fixing flow at team level",
        "Buying a scaling tool licence for all teams",
        "Writing a long process manual for every role"
       ],
       "answer": 1,
       "explain": "Many scaling problems are multiplied team-level problems; fix them first."
      },
      {
       "q": "A project prototypes a new clinic layout iteratively with staff, then builds it with a fixed construction plan. This is the pattern:",
       "options": [
        "Project delivery plus continuous flow",
        "Parallel agile and predictive tracks",
        "Pure agile from discovery to build",
        "Agile discovery, predictive build"
       ],
       "answer": 3,
       "explain": "Iterative discovery followed by predictive execution suits work where building is expensive to change."
      },
      {
       "q": "What is the key feature of a well-designed hybrid?",
       "options": [
        "It uses every practice from every method on the project",
        "Each element is chosen deliberately and joins are managed",
        "It avoids governance so teams can move faster",
        "It always has one go-live at the end of the project"
       ],
       "answer": 1,
       "explain": "A deliberate design with managed joins avoids the 'worst of both worlds'."
      }
     ]
    }
   ]
  },
  {
   "id": "m4-l4",
   "title": "Quality Management & the Cost of Quality",
   "subtitle": "Plan quality in, assure the process, control the results",
   "minutes": 27,
   "objectives": [
    "Distinguish quality planning, assurance and control",
    "Classify costs of quality and argue for prevention",
    "Use core quality tools and a definition of done to protect quality"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Quality means the result **meets its requirements and is fit for use**. It is not the same as luxury. A low-cost budget phone can be high quality; an expensive one that crashes is not. Modern quality management prevents problems early instead of inspecting them out at the end."
    },
    {
     "type": "callout",
     "kind": "definition",
     "text": "**Grade** is a category for products with the same use but different features (basic vs premium hotel room). **Quality** is how well the result meets its requirements. Low grade may be acceptable; low quality never is.",
     "title": "Quality vs grade"
    },
    {
     "type": "compare",
     "title": "Three parts of quality management",
     "columns": [
      {
       "title": "Plan quality",
       "items": [
        "Identify standards and requirements",
        "Set measurable quality metrics",
        "Define acceptance criteria and definition of done",
        "Choose reviews, tests and tools"
       ]
      },
      {
       "title": "Manage quality (assurance)",
       "items": [
        "Is the process sound?",
        "Audits, process reviews, retrospectives",
        "Design for quality, checklists, training",
        "Improve the way work is done"
       ]
      },
      {
       "title": "Control quality",
       "items": [
        "Is the product right?",
        "Inspection, testing, measurement",
        "Compare results with criteria",
        "Verify deliverables before acceptance"
       ]
      }
     ]
    },
    {
     "type": "formula",
     "title": "Cost of quality (CoQ)",
     "items": [
      {
       "name": "Cost of quality",
       "expr": "CoQ = Cost of conformance + Cost of non-conformance",
       "meaning": "Total cost spent to achieve quality plus the cost of failing to achieve it."
      },
      {
       "name": "Cost of conformance",
       "expr": "Prevention + Appraisal",
       "meaning": "Money spent to avoid failures (training, design reviews) and to find them (testing, inspection)."
      },
      {
       "name": "Cost of non-conformance",
       "expr": "Internal failure + External failure",
       "meaning": "Failures found before delivery (rework, scrap) and after delivery (warranty, recalls, lost customers)."
      }
     ]
    },
    {
     "type": "table",
     "title": "Cost of quality — examples",
     "head": [
      "Category",
      "Software project",
      "Construction / factory"
     ],
     "rows": [
      [
       "Prevention",
       "Coding standards, pair programming, training",
       "Method statements, worker training, supplier qualification"
      ],
      [
       "Appraisal",
       "Code reviews, automated tests, security scans",
       "Material testing, inspections, quality audits"
      ],
      [
       "Internal failure",
       "Bugs fixed before release, rework",
       "Rework of faulty concrete, rejected garments, scrap"
      ],
      [
       "External failure",
       "Production outages, data breaches, refunds",
       "Buyer claims, product recalls, lost orders, reputation damage"
      ]
     ]
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "The later a defect is found, the more it costs to fix — sometimes dramatically. Investing in prevention and early appraisal (clear criteria, design reviews, automated tests that run on every change) is almost always cheaper than external failure.",
     "title": "Shift left"
    },
    {
     "type": "table",
     "title": "Core quality tools",
     "head": [
      "Tool",
      "What it shows",
      "Use when"
     ],
     "rows": [
      [
       "Cause-and-effect (fishbone) diagram",
       "Possible causes grouped by category",
       "Exploring the root causes of a problem"
      ],
      [
       "Pareto chart",
       "Causes ranked by frequency or impact",
       "Choosing which few causes to fix first"
      ],
      [
       "Control chart",
       "Process results over time against control limits",
       "Checking whether a process is stable"
      ],
      [
       "Check sheet",
       "Tally of occurrences by type",
       "Collecting defect data on the floor"
      ],
      [
       "Histogram",
       "Distribution of a measurement",
       "Seeing the spread and shape of results"
      ],
      [
       "Scatter diagram",
       "Relationship between two variables",
       "Testing whether one factor drives another"
      ],
      [
       "Flowchart",
       "Steps and decision points in a process",
       "Finding where errors or delays enter"
      ]
     ]
    },
    {
     "type": "callout",
     "kind": "example",
     "text": "A Gazipur garment factory recorded 1,000 defects in a month. A Pareto chart showed that **broken stitches, skipped stitches and uneven hems** caused about 78% of them. Instead of retraining everyone on everything, the team fixed needle maintenance and machine tension on the worst lines first — and halved defects in six weeks.",
     "title": "Pareto on the sewing floor"
    },
    {
     "type": "keypoints",
     "items": [
      "A visible **definition of done** applied to every increment",
      "Acceptance criteria agreed before work starts",
      "Test automation and continuous integration on every change",
      "Code review or pairing as standard",
      "Retrospectives that tackle root causes, not just symptoms",
      "Small batches, so problems surface early"
     ],
     "title": "Agile quality practices"
    },
    {
     "type": "checklist",
     "title": "Release quality checklist",
     "items": [
      "All acceptance criteria demonstrated to the product owner or customer",
      "Definition of done met for every item in the release",
      "Automated regression tests passing",
      "Security and data-protection checks completed",
      "Performance tested under expected peak load",
      "Accessibility checked for key user journeys",
      "Known defects reviewed and accepted or fixed",
      "User guides, release notes and training materials updated",
      "Rollback plan prepared and tested",
      "Support and operations teams briefed and ready"
     ]
    },
    {
     "type": "scenario",
     "title": "Skip the tests?",
     "situation": "With two days left in a sprint, developers suggest skipping the regression test suite so they can finish all planned items. The definition of done requires regression tests to pass. What should you encourage?",
     "options": [
      {
       "text": "Skip the tests this once and catch up next sprint.",
       "feedback": "Weak. It creates hidden technical debt and makes the increment's quality unknown.",
       "best": false
      },
      {
       "text": "Keep the definition of done; finish fewer items fully, and discuss with the product owner which items to move back to the backlog.",
       "feedback": "Best. Quality standards are not negotiable within the sprint — scope is. Fewer done items beat more half-done ones.",
       "best": true
      },
      {
       "text": "Mark the items done but add a note that tests are pending.",
       "feedback": "Weak. It misrepresents progress; 'done except testing' is not done.",
       "best": false
      },
      {
       "text": "Extend the sprint by two days.",
       "feedback": "Weak. Sprint length is fixed; extending it erodes cadence and predictability.",
       "best": false
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which is an example of an appraisal cost?",
       "options": [
        "Staff training in quality methods",
        "Warranty claims from customers",
        "Customer refunds after complaints",
        "Product testing and inspection"
       ],
       "answer": 3,
       "explain": "Appraisal costs are spent finding defects: testing, inspections and audits."
      },
      {
       "q": "A buyer rejects a shipment because of defects found at their warehouse. This is:",
       "options": [
        "Prevention and planning cost",
        "External failure cost",
        "Appraisal cost",
        "Internal failure cost"
       ],
       "answer": 1,
       "explain": "Defects found after delivery to the customer are external failure costs — usually the most expensive."
      },
      {
       "q": "Which tool helps choose the few causes responsible for most problems?",
       "options": [
        "Flowchart",
        "Scatter diagram",
        "Pareto chart",
        "Histogram"
       ],
       "answer": 2,
       "explain": "A Pareto chart ranks causes so the team focuses on the vital few."
      },
      {
       "q": "Quality assurance mainly focuses on:",
       "options": [
        "Inspecting finished deliverables for defects",
        "Whether the processes used are effective",
        "Setting the quality budget for the project",
        "Approving or rejecting change requests"
       ],
       "answer": 1,
       "explain": "Assurance looks at the process; control checks the product."
      },
      {
       "q": "A basic but reliable product is best described as:",
       "options": [
        "High quality, low grade",
        "Low quality, low grade",
        "High grade, low quality",
        "Neither grade nor quality applies"
       ],
       "answer": 0,
       "explain": "It meets its requirements (high quality) with fewer features (low grade)."
      }
     ]
    }
   ]
  },
  {
   "id": "m4-l5",
   "title": "Procurement, Contracts & Daily Execution Habits",
   "subtitle": "Buy well, contract smartly and run delivery day by day",
   "minutes": 30,
   "objectives": [
    "Outline the procurement process from make-or-buy to closure",
    "Compare fixed-price, time-and-materials and cost-reimbursable contracts",
    "Describe agile-friendly contract options",
    "Build daily execution habits that keep delivery visible and moving"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Few projects do everything in-house. Equipment, software, cloud services, contractors and consultants are bought from outside. **Procurement** is how you decide what to buy, choose the right supplier and contract, and manage the relationship until the work is accepted and closed."
    },
    {
     "type": "flow",
     "title": "Procurement in six steps",
     "items": [
      {
       "label": "Make or buy",
       "text": "Compare in-house vs external on cost, skill, risk, control"
      },
      {
       "label": "Plan and specify",
       "text": "Statement of work, evaluation criteria, contract type"
      },
      {
       "label": "Solicit",
       "text": "Request for information, quotation or proposal"
      },
      {
       "label": "Select and award",
       "text": "Evaluate fairly against published criteria; negotiate"
      },
      {
       "label": "Manage",
       "text": "Performance, payments, changes, disputes"
      },
      {
       "label": "Close",
       "text": "Verify deliverables, final payment, lessons, records"
      }
     ]
    },
    {
     "type": "callout",
     "kind": "definition",
     "text": "The **SOW** describes what the supplier must deliver: scope, deliverables, standards, acceptance criteria, timeline and reporting. A vague SOW is the single biggest cause of supplier disputes.",
     "title": "Statement of work (SOW)"
    },
    {
     "type": "table",
     "title": "Contract types and who carries the cost risk",
     "head": [
      "Type",
      "How payment works",
      "Cost risk mainly on",
      "Best when"
     ],
     "rows": [
      [
       "Firm fixed price (FFP)",
       "Agreed price for defined scope",
       "Seller",
       "Scope is clear and stable"
      ],
      [
       "Fixed price incentive fee (FPIF)",
       "Fixed price with bonus or penalty for performance against targets, up to a ceiling",
       "Shared, mostly seller",
       "Clear scope; buyer wants to reward performance"
      ],
      [
       "Fixed price with economic price adjustment",
       "Fixed price adjusted for agreed indices (e.g. steel, currency)",
       "Shared",
       "Multi-year contracts with volatile input costs"
      ],
      [
       "Time and materials (T&M)",
       "Rates per hour/day plus materials",
       "Buyer",
       "Scope unclear, short engagements, staff augmentation"
      ],
      [
       "Cost plus fixed fee (CPFF)",
       "Actual costs plus a fixed fee",
       "Buyer",
       "High uncertainty, research-like work"
      ],
      [
       "Cost plus incentive fee (CPIF)",
       "Actual costs plus a fee that varies with performance; overruns and underruns shared",
       "Shared, mostly buyer",
       "Uncertain scope with measurable targets"
      ],
      [
       "Cost plus award fee (CPAF)",
       "Actual costs plus an award decided by the buyer's evaluation",
       "Buyer",
       "Performance is hard to measure objectively"
      ]
     ]
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "A seller squeezed by an unrealistic fixed price may cut quality, raise change requests aggressively or walk away. The cheapest bid is often not the lowest total cost.",
     "title": "Fixed price is not risk-free for the buyer"
    },
    {
     "type": "keypoints",
     "items": [
      "**Capped time and materials** — pay for time used, up to an agreed ceiling.",
      "**Fixed price per iteration or increment** — buyer can stop after any increment if enough value is achieved.",
      "**Target cost with shared pain and gain** — overruns and savings are split, aligning both sides.",
      "**Scope-swap clauses** — buyer can exchange not-yet-started backlog items for new items of equal size without renegotiation.",
      "**Early termination by agreement** — buyer may end early with a modest fee when the remaining value is low.",
      "**Framework agreements with call-offs** — pre-agreed terms, work ordered in small packages as needs become clear."
     ],
     "title": "Agile-friendly contracting options"
    },
    {
     "type": "scenario",
     "title": "The vendor's change request",
     "situation": "Your firm-fixed-price contract with a software vendor covers a hospital billing system. Users now want a new insurance-claim interface not in the statement of work. The vendor says it will cost extra. The finance manager insists the vendor should absorb it because 'the price is fixed'. What should you do?",
     "options": [
      {
       "text": "Agree with the finance manager and tell the vendor to deliver it at no cost.",
       "feedback": "Weak. A fixed price covers the agreed scope only; demanding free extra work damages the relationship and is likely unenforceable.",
       "best": false
      },
      {
       "text": "Check the SOW to confirm the interface is new scope, then process it through the contract's change procedure — impact, price and schedule — for an authorised decision.",
       "feedback": "Best. The contract and SOW define the baseline; genuine new scope is handled through the agreed change mechanism.",
       "best": true
      },
      {
       "text": "Ask the vendor's developers informally to add it without telling their manager.",
       "feedback": "Unethical and risky — it bypasses the contract and the vendor's management.",
       "best": false
      },
      {
       "text": "Cancel the contract and find a new vendor.",
       "feedback": "Weak. Termination is costly and unjustified for a normal change request.",
       "best": false
      }
     ]
    },
    {
     "type": "text",
     "text": "Execution is won or lost in daily habits. Plans and contracts set direction, but delivery depends on what the team sees, discusses and unblocks every day."
    },
    {
     "type": "framework",
     "title": "Six daily execution habits",
     "items": [
      {
       "label": "E1",
       "title": "Short stand-up at the board",
       "text": "15 minutes, focused on the goal and blockers, not on reporting to a manager."
      },
      {
       "label": "E2",
       "title": "Keep information radiators current",
       "text": "Visible boards, burn-up charts, risk and impediment lists anyone can read without asking."
      },
      {
       "label": "E3",
       "title": "Hunt impediments",
       "text": "Capture every blocker, give it an owner and a date, and escalate fast if it threatens a goal."
      },
      {
       "label": "E4",
       "title": "Check WIP and flow",
       "text": "Look for stuck or aging items before starting anything new."
      },
      {
       "label": "E5",
       "title": "Touch base with a stakeholder",
       "text": "One short, purposeful conversation a day prevents many surprises."
      },
      {
       "label": "E6",
       "title": "Close the loop",
       "text": "Update the plan, decisions and risks so tomorrow starts from the truth."
      }
     ]
    },
    {
     "type": "table",
     "title": "Impediment escalation ladder",
     "head": [
      "Level",
      "Who acts",
      "Typical timeframe",
      "Example"
     ],
     "rows": [
      [
       "1 — Team",
       "Developers themselves",
       "Same day",
       "Pair to resolve a tricky merge conflict"
      ],
      [
       "2 — Team coach or PM",
       "Scrum Master, team lead or PM",
       "1–2 days",
       "Get test devices or environment access"
      ],
      [
       "3 — Product owner or functional manager",
       "PO, line manager, vendor manager",
       "Within the iteration",
       "Clarify conflicting requirements, free a shared specialist"
      ],
      [
       "4 — Sponsor or steering group",
       "Sponsor, steering committee",
       "When a milestone or goal is threatened",
       "Resolve funding, cross-department priority clashes"
      ]
     ]
    },
    {
     "type": "callout",
     "kind": "pro",
     "text": "An information radiator only works if it shows bad news as clearly as good news. A board that is always green is either a miracle or a mirage. Encourage red early — it is the cheapest time to fix things.",
     "title": "Make radiators honest"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Product Owner",
       "def": "The accountable person in Scrum who maximises product value and owns the ordering of the product backlog."
      },
      {
       "term": "Scrum Master",
       "def": "The accountable person in Scrum for team effectiveness, coaching the team and organisation and removing impediments."
      },
      {
       "term": "Sprint Goal",
       "def": "The single objective for a sprint that gives the developers focus and flexibility in what they deliver."
      },
      {
       "term": "Increment",
       "def": "A usable step toward the product goal that meets the definition of done."
      },
      {
       "term": "WIP limit",
       "def": "A cap on the number of work items allowed in a workflow stage at one time."
      },
      {
       "term": "Cycle time",
       "def": "The elapsed time from when work starts on an item until it is finished."
      },
      {
       "term": "Lead time",
       "def": "The elapsed time from when an item is requested or committed to until it is delivered to the customer."
      },
      {
       "term": "Throughput",
       "def": "The number of work items finished per unit of time."
      },
      {
       "term": "Cumulative flow diagram",
       "def": "A stacked area chart showing the number of items in each workflow stage over time."
      },
      {
       "term": "Cost of quality",
       "def": "The total cost of conformance (prevention and appraisal) and non-conformance (internal and external failure)."
      },
      {
       "term": "Firm fixed price contract",
       "def": "A contract in which the seller delivers defined scope for an agreed price and carries most of the cost risk."
      },
      {
       "term": "Time and materials contract",
       "def": "A contract that pays agreed rates for time and materials used, with most cost risk on the buyer."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Under which contract type does the buyer carry the most cost risk?",
       "options": [
        "Firm fixed price",
        "Fixed price incentive fee",
        "Fixed price with economic price adjustment",
        "Cost plus fixed fee"
       ],
       "answer": 3,
       "explain": "In cost-reimbursable contracts the buyer pays actual costs, so overruns fall mainly on the buyer."
      },
      {
       "q": "Which document defines what a supplier must deliver?",
       "options": [
        "Risk management plan",
        "Sprint backlog",
        "Statement of work",
        "Benefits register"
       ],
       "answer": 2,
       "explain": "The statement of work describes scope, deliverables, standards and acceptance criteria for the supplier."
      },
      {
       "q": "Which clause lets an agile buyer exchange unstarted backlog items for new ones of equal size?",
       "options": [
        "Liquidated damages",
        "Force majeure",
        "Scope-swap clause",
        "Retention clause"
       ],
       "answer": 2,
       "explain": "A scope-swap clause keeps price and timeline while allowing priorities to change."
      },
      {
       "q": "A blocker threatens a release milestone and the team and PM cannot resolve it. What is the appropriate next step?",
       "options": [
        "Wait and raise it with the team at the next retrospective",
        "Keep it from the board until a fix is found",
        "Escalate promptly to the right decision-maker with options",
        "Remove the blocked item from the definition of done"
       ],
       "answer": 2,
       "explain": "Impediments that threaten goals should move up the escalation ladder quickly with clear options."
      },
      {
       "q": "What makes an information radiator effective?",
       "options": [
        "It is updated monthly with written commentary",
        "Only managers can view it, so issues stay discreet",
        "It shows the true status, problems included, to everyone",
        "It is always green, so stakeholders stay confident"
       ],
       "answer": 2,
       "explain": "Radiators work because they make reality visible to all without needing to ask."
      }
     ]
    }
   ]
  }
 ]
});
TRACK.exam.push([
 {
  "module": "m1",
  "q": "A sponsor asks you to start work immediately on a new customer portal. Funding is verbally agreed, but no document authorises the project or names you as project manager. What should you do FIRST?",
  "options": [
   "Begin requirements workshops with key users to save time",
   "Work with the sponsor to create and sign a project charter",
   "Develop a detailed project management plan for sponsor approval",
   "Select a delivery vendor so that work can start quickly"
  ],
  "answer": 1,
  "explain": "The charter formally authorises the project and the PM's use of resources. Workshops, detailed planning and vendor selection all assume authority and budget that do not yet exist."
 },
 {
  "module": "m1",
  "q": "Midway through a project, market research shows the expected customer demand that justified the investment has fallen sharply. Deliverables are on track. What should the project manager do NEXT?",
  "options": [
   "Continue as planned, because scope, time and cost are all still on track",
   "Raise it with the sponsor and review the business case: continue, change or stop",
   "Accelerate delivery so the product reaches the market before demand falls further",
   "Reduce the remaining testing effort to lower costs and protect the expected return"
  ],
  "answer": 1,
  "explain": "The business case is the yardstick for continued investment; when its assumptions change, decision-makers must review it. Delivering on plan does not create value if the justification has gone. Speeding up or cutting testing ignores the real issue."
 },
 {
  "module": "m1",
  "q": "A company must deliver a new tax-reporting module with requirements fixed by regulation, and a customer mobile app whose features are still being explored. Which approach should the project manager recommend?",
  "options": [
   "Fully predictive delivery for both components, with one integrated baseline and milestone plan",
   "Fully agile delivery for both components, using short sprints and no fixed milestones",
   "Postpone the app until the regulatory module is complete, then reassess the app features",
   "Hybrid: predictive for the regulatory module, adaptive for the app, integrated milestones"
  ],
  "answer": 3,
  "explain": "Each component needs the approach that matches its uncertainty, while integrated milestones manage dependencies. Fully predictive freezes uncertain features; fully agile ignores the fixed regulatory deadline; postponing delays value unnecessarily."
 },
 {
  "module": "m1",
  "q": "A project delivered a new HR system on time and on budget. Six months later, only 20% of managers use it and the expected time savings have not appeared. What does this situation BEST illustrate?",
  "options": [
   "The project was a complete success because it met its time and cost constraints",
   "Outputs were delivered, but the intended outcomes and benefits were not realised",
   "The schedule baseline was poorly estimated, so the system was not ready for users",
   "The procurement strategy chose the wrong system for the managers' working needs"
  ],
  "answer": 1,
  "explain": "Success in modern project management is judged by outcomes, benefits and value. Meeting time and cost constraints is necessary but not sufficient. Nothing suggests estimating or procurement problems."
 },
 {
  "module": "m1",
  "q": "The portfolio board must choose one of two projects. Project X has a higher ROI; Project Y has a lower but positive NPV and directly supports two of this year's strategic key results. As the PM preparing the analysis, what is the BEST recommendation?",
  "options": [
   "Recommend Project X, because ROI is the most objective and comparable measure of return",
   "Recommend funding both projects at half budget so that each can make some progress",
   "Make no recommendation and leave the board to decide without supporting analysis",
   "Recommend Project Y, showing its strategic fit with its financial measures and risks"
  ],
  "answer": 3,
  "explain": "Investment decisions should weigh strategic fit, financial value and risk together. ROI alone ignores strategy and the timing of money; halving budgets usually means neither project delivers; withholding analysis fails the decision-makers."
 },
 {
  "module": "m1",
  "q": "A newly appointed PM in a large bank is told to use the organisation's full 40-document project methodology for a six-week, low-risk internal dashboard. What should the PM do?",
  "options": [
   "Propose a tailored, lighter set of practices and agree it with the governance body",
   "Follow every step and document exactly, as the methodology requires of all projects",
   "Set the methodology aside and run the work informally, as the risk is low",
   "Deliver first and ask the team to complete all required documents after go-live"
  ],
  "answer": 0,
  "explain": "Tailoring fits the approach to the context while keeping governance informed and in agreement. Applying everything wastes effort; ignoring governance creates compliance risk; writing documents after the fact adds no value."
 },
 {
  "module": "m1",
  "q": "During project initiation, a stakeholder asks what measurable result will show the project succeeded. Where should this be documented FIRST?",
  "options": [
   "In the lessons-learned register, so future projects can reuse the measure",
   "In the project charter, as success criteria linked to the business case",
   "In the team's working agreement, so the team commits to the result",
   "In the first sprint retrospective notes, once the team has started work"
  ],
  "answer": 1,
  "explain": "Success criteria belong in the charter at initiation so everyone agrees on what success means from the start. The other documents serve different purposes and come later."
 },
 {
  "module": "m1",
  "q": "An organisation keeps launching projects that compete for the same specialists, and several deliver overlapping features. Which management level is MOST likely to resolve this?",
  "options": [
   "Portfolio management, which selects and balances investments against strategy",
   "Operations management, which runs and coordinates day-to-day business processes",
   "Each project manager, negotiating directly with the other projects' managers",
   "Quality control, which inspects deliverables against the agreed standards"
  ],
  "answer": 0,
  "explain": "Choosing and balancing which projects to fund — and stopping overlap — is the role of portfolio management. Individual PMs and operations lack the cross-project view; quality control inspects products, not investment choices."
 },
 {
  "module": "m2",
  "q": "Two months into an ERP project, you discover that the internal audit department was never consulted and has compliance requirements for the finance module. What should you do FIRST?",
  "options": [
   "Submit a change request covering all possible audit requirements for the finance module",
   "Add internal audit to the stakeholder register and meet them to learn their needs",
   "Escalate to the sponsor that the project is now at risk of a compliance failure",
   "Continue as planned and address any audit concerns in a phase after go-live"
  ],
  "answer": 1,
  "explain": "First understand the stakeholder and their actual requirements; only then can impact be assessed and a change request raised if needed. Escalating before understanding is premature, and ignoring compliance creates serious risk."
 },
 {
  "module": "m2",
  "q": "A senior regulator has high power over your project but shows little interest in it. Using the power–interest grid, what engagement approach is BEST?",
  "options": [
   "Keep them satisfied with concise, relevant updates and consult them when affected",
   "Manage them closely with weekly detailed meetings and full access to all project data",
   "Monitor them with minimal effort, as their low interest means low influence",
   "Keep them informed by adding them to every team email and distribution list"
  ],
  "answer": 0,
  "explain": "High power and low interest calls for keeping the stakeholder satisfied without overloading them. Weekly detailed meetings or mass emails overload; minimal monitoring underestimates their power."
 },
 {
  "module": "m2",
  "q": "A requirements workshop is dominated by two senior managers while the frontline users who will use the system stay silent. What should the facilitator do?",
  "options": [
   "Let the senior managers decide, since they hold authority and know the strategy",
   "End the workshop and send everyone a survey to collect their views in private",
   "Ask the senior managers to leave so the frontline users can speak more freely",
   "Use silent brainstorming and breakouts, then interview or observe the users"
  ],
  "answer": 3,
  "explain": "Structured facilitation balances participation, and follow-up elicitation captures users' real needs. Deferring to rank misses user needs; abandoning the session wastes it; excluding managers damages relationships and loses expertise."
 },
 {
  "module": "m2",
  "q": "The product owner brings a story estimated at three sprints of work: 'As a customer I want the full loan application journey.' What should the team do?",
  "options": [
   "Split it by technical layer: database, API and user interface, one per sprint",
   "Accept it as one story and track its progress across the three sprints",
   "Split it into thin vertical slices that each deliver testable user value",
   "Ask the product owner for a complete written specification before estimating"
  ],
  "answer": 2,
  "explain": "Vertical slices keep stories small, valuable and testable within one sprint. Layer splits deliver no user value on their own; multi-sprint stories hide progress; heavy specification delays learning."
 },
 {
  "module": "m2",
  "q": "On a predictive project with an approved scope baseline, a department head asks the team directly to add a new report. The developers estimate two days of work. What should the project manager do?",
  "options": [
   "Let the team add it, since two days of work is within normal tolerance",
   "Refuse the request, because the scope baseline has already been approved",
   "Ask for a change request and assess its impact via integrated change control",
   "Schedule it into the next phase quietly, without involving the sponsor"
  ],
  "answer": 2,
  "explain": "Changes to a baselined scope go through change control, however small, so impacts are understood and an authorised decision is made. Quietly adding work is scope creep; refusing outright ignores possible value; hiding it breaks governance."
 },
 {
  "module": "m2",
  "q": "A team member has added an attractive analytics screen that no stakeholder requested, delaying a planned feature. What does this BEST describe, and what should the PM do?",
  "options": [
   "Scope creep; raise a change request against the requesting stakeholder",
   "Progressive elaboration; record it as normal refinement of the requirements",
   "Gold plating; agree with the team that work must trace to approved items",
   "Healthy innovation; recognise it publicly to encourage creative initiative"
  ],
  "answer": 2,
  "explain": "Adding unrequested extras is gold plating, which adds cost and risk. It is not stakeholder-driven scope creep, nor normal elaboration; rewarding it would encourage more unapproved work."
 },
 {
  "module": "m2",
  "q": "Feature P has a cost of delay of 24 and a job size of 12. Feature Q has a cost of delay of 15 and a job size of 5. Using WSJF, what should the product owner do?",
  "options": [
   "Sequence P first, because its cost of delay (24) is higher than Q's (15)",
   "Treat them as equal priority, because their scores differ by too little",
   "Sequence P first, because its larger size makes it the more important job",
   "Sequence Q first, because its WSJF score (3.0) is higher than P's (2.0)"
  ],
  "answer": 3,
  "explain": "WSJF = cost of delay ÷ job size: P = 24 ÷ 12 = 2.0, Q = 15 ÷ 5 = 3.0. The higher score goes first. Looking at cost of delay or size alone ignores the ratio WSJF relies on."
 },
 {
  "module": "m2",
  "q": "Your WBS for a new clinic has level-2 elements named 'Plan', 'Design', 'Build', 'Test' and 'Deploy', with tasks underneath. What is the BEST feedback?",
  "options": [
   "Restructure it around deliverables and move activities into the schedule",
   "Accept it, because a phase-based structure is a valid way to organise a WBS",
   "Add more levels until every element represents less than one hour of work",
   "Replace the WBS with a Gantt chart, which shows the same work over time"
  ],
  "answer": 0,
  "explain": "A deliverable-oriented WBS supports the 100% rule, ownership and acceptance; activities belong in the schedule. Over-decomposition adds overhead, and a Gantt chart shows timing rather than scope decomposition."
 },
 {
  "module": "m3",
  "q": "An activity has an optimistic estimate of 6 days, most likely 9 days and pessimistic 18 days. The sponsor asks for the expected duration. Using PERT, what should you report?",
  "options": [
   "9 days, as the most likely value is the best single estimate",
   "11 days, the simple average of the three estimates",
   "18 days, to protect the sponsor against any overrun",
   "About 10 days, with a standard deviation of about 2 days"
  ],
  "answer": 3,
  "explain": "PERT = (6 + 4×9 + 18) ÷ 6 = 60 ÷ 6 = 10 days; σ = (18 − 6) ÷ 6 = 2 days. The most likely value ignores the risk of overrun, 11 days is the simple triangular mean, and reporting the pessimistic value overstates the estimate."
 },
 {
  "module": "m3",
  "q": "A non-critical activity has 5 days of total float and 0 days of free float. A supplier says it will be 3 days late. What is the MOST accurate impact?",
  "options": [
   "The project end date will move by 3 days, as will the successor's start",
   "There is no impact on any other activity, because float absorbs the delay",
   "The end date is unaffected, but the successor's early start moves by 3 days",
   "The activity immediately joins the critical path and drives the end date"
  ],
  "answer": 2,
  "explain": "A 3-day delay within 5 days of total float does not delay the project, but zero free float means its successor starts later, consuming shared float. The activity becomes critical only if the delay uses all its float."
 },
 {
  "module": "m3",
  "q": "The sponsor wants the project finished two weeks earlier. The critical path includes design and build, which could partly overlap. What should the project manager do FIRST?",
  "options": [
   "Analyse compression options on the critical path and present the trade-offs to the sponsor",
   "Approve overtime for the whole team so that every activity finishes sooner",
   "Remove user acceptance testing from the schedule to recover the two weeks",
   "Tell the sponsor the request is impossible because the schedule baseline is already approved"
  ],
  "answer": 0,
  "explain": "Compression decisions should be based on the critical path and made with visible trade-offs. Blanket overtime may target non-critical work, cutting testing shifts risk to users, and declaring it impossible without analysis is premature."
 },
 {
  "module": "m3",
  "q": "A Scrum team's velocity over the last four sprints was 30, 34, 28 and 32. The remaining release backlog is 186 points. A stakeholder asks when the release will be ready. What is the BEST answer?",
  "options": [
   "Commit to exactly 6 sprints, using the average velocity of the last four sprints",
   "Forecast a range of about 6–7 sprints from observed velocity, updated each sprint",
   "Ask the team to raise velocity to 40 points so the release finishes sooner",
   "Decline to forecast, because agile teams do not commit to delivery dates"
  ],
  "answer": 1,
  "explain": "186 ÷ 34 ≈ 5.5 and 186 ÷ 28 ≈ 6.6, so about 6–7 sprints. A range reflects uncertainty and is refined as data arrives. A single number hides uncertainty; velocity targets inflate estimates; agile teams do forecast."
 },
 {
  "module": "m3",
  "q": "A stakeholder suggests funding a new feature from the project's contingency reserve because 'the risks it covered have not happened yet'. What should the project manager do?",
  "options": [
   "Approve the use, since the money is unused and the feature adds value",
   "Move the money into management reserve until a decision is needed",
   "Explain that contingency covers identified risks; process it as a change request",
   "Fund the feature from management reserve instead, without informing the sponsor first"
  ],
  "answer": 2,
  "explain": "Contingency protects against identified risks; new scope requires change control and an authorised funding decision. Spending contingency leaves risks unfunded, and using management reserve requires management approval."
 },
 {
  "module": "m3",
  "q": "A Monte Carlo schedule simulation shows a 25% probability of meeting the deterministic finish date and P80 three months later. The sponsor must announce a public launch date. What should the project manager recommend?",
  "options": [
   "Announce the deterministic date, because it is what the approved plan shows",
   "Announce the earliest date seen in any simulation run to show ambition",
   "Avoid announcing any public date until the remaining schedule uncertainty is removed",
   "Announce a date near P80 and manage the deterministic date as an internal target"
  ],
  "answer": 3,
  "explain": "A public commitment should carry high confidence; P80 means about 80% of simulated outcomes finished by then. The deterministic date has only a 25% chance; the earliest run is very unlikely; refusing a date does not meet the sponsor's need."
 },
 {
  "module": "m3",
  "q": "Two activities scheduled in parallel both need the only certified electrician, causing an overload. The activities are on the critical path. Which technique applies, and what is a likely consequence?",
  "options": [
   "Resource smoothing, which never changes the project end date",
   "Fast-tracking, which reduces demand on the shared resource",
   "Crashing, which removes the dependency on the electrician",
   "Resource levelling, which may extend the project end date"
  ],
  "answer": 3,
  "explain": "When a resource limit is hard and the activities are critical, levelling delays one of them and can push out the end date. Smoothing only moves work within float, fast-tracking increases overlap, and crashing adds resources rather than resolving a single-specialist limit."
 },
 {
  "module": "m4",
  "q": "During a sprint, a senior manager asks a developer to start an urgent new feature. What should the developer do?",
  "options": [
   "Start the feature immediately, because the request comes from a senior manager",
   "Refer it to the product owner, who decides priority while the sprint goal is protected",
   "Ask the team to cancel the sprint and replan it so the urgent feature can be included",
   "Add it to the sprint backlog without telling anyone and absorb it with extra effort"
  ],
  "answer": 1,
  "explain": "The product owner owns the order of work, and the developers manage the sprint plan to protect the sprint goal. Seniority does not bypass this; only the product owner can cancel a sprint; silent additions destroy transparency."
 },
 {
  "module": "m4",
  "q": "A Kanban team's Test column is at its WIP limit and developers say they are idle because they cannot pull new work. What should the team do?",
  "options": [
   "Raise the WIP limit in Test so that more work can flow through",
   "Start new development work and park it until Test has capacity",
   "Help finish items in Test by swarming on the bottleneck",
   "Remove WIP limits entirely, since they are causing idle time"
  ],
  "answer": 2,
  "explain": "Swarming on the bottleneck improves flow — 'stop starting, start finishing'. Raising or removing limits hides the constraint, and starting new work increases WIP and lengthens cycle time."
 },
 {
  "module": "m4",
  "q": "A team's average WIP is 30 items and average throughput is 10 items per week. Management wants average cycle time to fall to about 1.5 weeks without adding people. What is the BEST approach?",
  "options": [
   "Ask the team to work overtime until cycle time falls",
   "Reduce WIP to about 15 items by limiting new starts",
   "Add more columns to the board to make work visible",
   "Measure lead time instead, as it better reflects delays"
  ],
  "answer": 1,
  "explain": "By Little's Law, cycle time = WIP ÷ throughput: 30 ÷ 10 = 3 weeks; at the same throughput, 15 ÷ 10 = 1.5 weeks. Overtime is unsustainable, extra columns do not change flow, and changing the metric does not change performance."
 },
 {
  "module": "m4",
  "q": "Two days before the sprint ends, developers propose skipping regression tests required by the definition of done so they can complete every planned item. What should the Scrum Master encourage?",
  "options": [
   "Keep the definition of done; return unfinished items to the product backlog",
   "Skip the tests this once and repay the resulting technical debt next sprint",
   "Mark the items as done, with a clear note in the backlog that tests are still pending",
   "Extend the sprint by two days so the tests and planned items both finish"
  ],
  "answer": 0,
  "explain": "The definition of done is the quality commitment for the increment; scope can flex but quality cannot. Skipping tests or marking incomplete work as done misrepresents progress, and sprint length should stay fixed."
 },
 {
  "module": "m4",
  "q": "A buyer needs a supplier for a research-like data platform whose scope is highly uncertain, but wants the supplier motivated to control costs. Which contract type is MOST suitable?",
  "options": [
   "Cost plus incentive fee",
   "Firm fixed price",
   "Fixed price with economic price adjustment",
   "Purchase order for a fixed quantity"
  ],
  "answer": 0,
  "explain": "Cost-reimbursable contracts suit high uncertainty, and an incentive fee shares overruns and savings, motivating cost control. Fixed-price types need clear scope; a simple purchase order fits standard goods."
 },
 {
  "module": "m4",
  "q": "A garment factory's defect data shows that three causes account for most rejected pieces. Which tool should the quality lead use to communicate where to focus improvement efforts?",
  "options": [
   "A Pareto chart",
   "A scatter diagram",
   "A flowchart",
   "A control chart"
  ],
  "answer": 0,
  "explain": "A Pareto chart ranks causes by frequency so the team can focus on the vital few. A scatter diagram tests relationships between variables, a flowchart shows process steps, and a control chart shows process stability over time."
 },
 {
  "module": "m4",
  "q": "Your organisation's PMO requires a six-month task-level Gantt chart from an agile team building a customer app alongside a predictive hardware rollout. What should the project manager do?",
  "options": [
   "Have the team produce the detailed six-month Gantt chart in the format the PMO requires",
   "Refuse the request and explain that agile teams do not plan work beyond the next sprint",
   "Provide an integrated milestone roadmap with release forecasts, agreed with the PMO",
   "Produce the task-level Gantt chart yourself so the team is not distracted from delivery"
  ],
  "answer": 2,
  "explain": "The PMO's real need is visibility and integration; a milestone roadmap with range-based release forecasts meets it using artefacts suited to adaptive work. A task-level six-month plan would be fiction, refusing is untrue, and a plan made without the team will not be owned or followed."
 }
]);
