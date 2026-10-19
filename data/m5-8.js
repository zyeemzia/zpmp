window.TRACK = window.TRACK || { modules: [], exam: [] };
TRACK.modules.push({
 "id": "m5",
 "order": 5,
 "code": "Resource",
 "title": "Process II: Schedule, Resources & Finance",
 "subtitle": "Process · Tasks 4, 6 and 8 (resources, finance, schedule)",
 "outcomes": [
  "Estimate work with predictive and agile techniques and honest ranges",
  "Build, baseline and control schedules and release plans",
  "Plan, acquire and optimise people and physical resources",
  "Build budgets with the right reserves and plan financial reporting",
  "Measure and forecast with earned value and escalate variances through governance"
 ],
 "lessons": [
  {
   "id": "m5-l1",
   "title": "Estimating Work: Predictive & Agile Techniques",
   "subtitle": "Analogous, parametric, bottom-up, three-point and relative estimating, with honest ranges and real benchmarks",
   "minutes": 32,
   "objectives": [
    "Choose between analogous, parametric, bottom-up and three-point estimating",
    "Calculate PERT estimates and a standard deviation",
    "Size work relatively with story points and planning poker",
    "Use benchmarks and historical data to keep estimates honest"
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
     "type": "callout",
     "kind": "pro",
     "title": "Use benchmarks and reference classes",
     "text": "Before trusting your own bottom-up numbers, look at how similar projects actually turned out. If ten past ERP rollouts in your organisation overran by an average of 40%, an estimate that assumes no overrun needs a strong reason. This **reference-class** view corrects optimism with evidence. Keep your own estimates and actuals so the next project has better data."
    },
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
       "term": "Analogous estimating",
       "def": "Estimating from the actual results of a similar past project, adjusted for known differences."
      },
      {
       "term": "Bottom-up estimating",
       "def": "Estimating each work package or activity in detail and adding them up."
      },
      {
       "term": "Planning poker",
       "def": "A team technique in which estimators reveal relative sizes at the same time and discuss differences before re-voting."
      },
      {
       "term": "Rough order of magnitude (ROM)",
       "def": "An early, wide-range estimate used for initial decisions, before detail is known."
      },
      {
       "term": "Reference-class forecasting",
       "def": "Adjusting an estimate using the actual outcomes of a group of similar past projects."
      }
     ]
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
       "q": "Which estimating technique uses a statistical relationship such as cost per square metre?",
       "options": [
        "Parametric",
        "Analogous",
        "Bottom-up",
        "Expert judgement only"
       ],
       "answer": 0,
       "explain": "Parametric estimating multiplies a quantity by a unit rate derived from historical data."
      },
      {
       "q": "Why should estimates be communicated as ranges?",
       "options": [
        "Single-point estimates are not permitted by most methodologies",
        "Ranges look more professional and credible than single figures in reports",
        "Sponsors prefer vague answers that cannot be held against the team",
        "They reflect real uncertainty and help decision-makers judge risk"
       ],
       "answer": 3,
       "explain": "Ranges show the uncertainty that exists, so decisions about reserves and commitments are informed."
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
      }
     ]
    }
   ]
  },
  {
   "id": "m5-l2",
   "title": "Building the Schedule: Critical Path, Release Plans & Baselines",
   "subtitle": "Sequence work, find the critical path, forecast releases and baseline the schedule that fits your approach",
   "minutes": 34,
   "objectives": [
    "Identify dependency types, leads and lags",
    "Perform forward and backward passes and calculate total and free float",
    "Forecast releases from velocity ranges and plan iterations by capacity",
    "Baseline a schedule and coordinate it with other projects and operations"
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
     "kind": "warning",
     "text": "A path with very little float is almost critical. If its activities are risky, it may become the critical path overnight. Also watch for **negative float**: it means an imposed deadline is earlier than the network can achieve — a signal to re-plan, compress or renegotiate.",
     "title": "Watch the near-critical path"
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
     "type": "steps",
     "title": "Baseline and manage the schedule",
     "items": [
      {
       "title": "Prepare to suit the approach",
       "text": "A network schedule for predictive work, a release plan for agile work, and milestones that join them on hybrid projects."
      },
      {
       "title": "Coordinate",
       "text": "Check dates against other projects, shared environments, operations' busy periods and holidays such as Eid or year-end."
      },
      {
       "title": "Baseline",
       "text": "Get the schedule, or the milestone plan, approved as the reference for measuring progress."
      },
      {
       "title": "Execute the schedule plan",
       "text": "Update progress at an agreed rhythm and keep the critical path or release forecast current."
      },
      {
       "title": "Analyse variation",
       "text": "Compare actuals with the baseline or forecast, find causes and act before slips grow."
      },
      {
       "title": "Change formally",
       "text": "Re-baseline only through change control, never quietly."
      }
     ]
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
     "type": "terms",
     "items": [
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
       "term": "Velocity",
       "def": "The amount of work, usually in story points, a team completes to the definition of done in one iteration."
      },
      {
       "term": "Schedule baseline",
       "def": "The approved version of the schedule used to measure progress, changed only through formal change control."
      },
      {
       "term": "Lag",
       "def": "A required waiting time between a predecessor and its successor."
      },
      {
       "term": "Lead",
       "def": "An overlap that lets a successor start before its predecessor finishes."
      },
      {
       "term": "Release plan",
       "def": "A forecast of which backlog items are likely to be delivered in upcoming releases, based on velocity ranges."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
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
       "q": "Negative total float indicates that:",
       "options": [
        "The required finish date is earlier than the network allows",
        "Resources are idle and can be moved to other work",
        "The project is ahead of schedule on its critical path",
        "The critical path has changed to a different set of activities"
       ],
       "answer": 0,
       "explain": "Negative float means a constraint date cannot be met with the current logic and durations."
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
       "q": "A hybrid project's schedule shows a go-live in the same week as the bank's year-end closing, when operations staff are unavailable. What should the project manager do before baselining?",
       "options": [
        "Baseline the schedule and deal with the clash nearer the time",
        "Ask operations to postpone year-end closing",
        "Coordinate with operations and adjust the plan or the go-live window before baselining",
        "Remove operations staff from the go-live plan"
       ],
       "answer": 2,
       "explain": "Schedules must be coordinated with other projects and operations before they are baselined; known clashes should not be built into the reference plan."
      }
     ]
    }
   ]
  },
  {
   "id": "m5-l3",
   "title": "Resources: Plan, Acquire, Optimise & Compress",
   "subtitle": "Turn requirements into people and equipment plans, secure them, and adjust schedules to real availability",
   "minutes": 30,
   "objectives": [
    "Define resource needs from scope and plan how to acquire them",
    "Negotiate for shared resources and protect team capacity",
    "Distinguish resource levelling from resource smoothing",
    "Compress a schedule with crashing or fast-tracking and explain the trade-offs"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "A plan is only as real as the people, equipment and materials behind it. **Resource planning** turns the scope into the skills, roles, equipment, materials and facilities needed, shows when each is needed, and decides how to get them. Agile teams usually work as stable, cross-functional teams, so the question becomes *what capacity do we have?* rather than *who do we assign to each task?*. Predictive projects often assemble people from functional departments and must negotiate for them."
    },
    {
     "type": "steps",
     "title": "Define and plan resources from requirements",
     "items": [
      {
       "title": "Start from scope",
       "text": "Use the WBS or backlog to list the skills and physical resources each deliverable needs."
      },
      {
       "title": "Build a resource breakdown",
       "text": "Group needs by type: people by skill, equipment, materials, facilities, licences."
      },
      {
       "title": "Estimate quantity and timing",
       "text": "How many, when and for how long; note lead times for materials and equipment."
      },
      {
       "title": "Choose how to acquire",
       "text": "Internal staff, negotiation with functional managers, hiring, contractors or vendors."
      },
      {
       "title": "Record availability",
       "text": "Resource calendars: holidays, shifts, part-time allocations and shared commitments."
      },
      {
       "title": "Plan development",
       "text": "Training, onboarding and team-building needed to make people effective."
      }
     ]
    },
    {
     "type": "table",
     "title": "Ways to acquire resources",
     "head": [
      "Source",
      "Best when",
      "Watch out for"
     ],
     "rows": [
      [
       "Dedicated internal team",
       "Long-lived product or high-knowledge work",
       "Idle capacity if work is uneven"
      ],
      [
       "Shared from functional departments",
       "Specialist skills needed part-time",
       "Competing priorities; negotiate early"
      ],
      [
       "Contractors",
       "Short peaks or rare skills",
       "Knowledge leaving at contract end"
      ],
      [
       "Vendor-supplied team",
       "Packaged solution or outsourced delivery",
       "Contract terms, control and handover"
      ],
      [
       "Physical resources by lease or purchase",
       "Equipment, sites, materials",
       "Lead times, import duties, storage"
      ]
     ]
    },
    {
     "type": "callout",
     "kind": "example",
     "title": "Negotiating for a specialist",
     "text": "A functional manager in a Chattogram power plant refuses to release the only certified protection-relay engineer for your upgrade. Instead of escalating at once, find the manager's interest: his own outage maintenance in the same month. Options include shifting your testing by two weeks, sharing the engineer half-days, or funding a contractor to cover his routine work. Escalate to the sponsor only if no option meets both needs."
    },
    {
     "type": "keypoints",
     "title": "Optimising resource availability",
     "items": [
      "Keep teams stable; constant reshuffling destroys productivity and knowledge",
      "Limit multitasking: a person split across four projects completes each one more slowly",
      "Cross-train so that more than one person can do critical work",
      "Plan agile work by team capacity per iteration, not by individual task assignment",
      "Review the resource plan at each phase or release and release resources you no longer need"
     ]
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
     "type": "terms",
     "items": [
      {
       "term": "Crashing",
       "def": "Shortening the schedule by adding resources to critical activities, usually at extra cost."
      },
      {
       "term": "Fast-tracking",
       "def": "Shortening the schedule by overlapping activities normally done in sequence, at a higher risk of rework."
      },
      {
       "term": "Resource breakdown structure",
       "def": "A hierarchy of the resources a project needs, grouped by category and type."
      },
      {
       "term": "Resource calendar",
       "def": "A record of when each resource is available, including shifts, holidays and part-time allocations."
      },
      {
       "term": "Resource levelling",
       "def": "Adjusting start and finish dates to fit limited resources; may extend the project end date."
      },
      {
       "term": "Resource smoothing",
       "def": "Adjusting activities within their float to even out resource demand without changing the end date."
      },
      {
       "term": "Crash cost slope",
       "def": "The extra cost per unit of time saved when an activity is shortened: (crash cost − normal cost) ÷ (normal duration − crash duration)."
      }
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
       "q": "Which technique may extend the project end date?",
       "options": [
        "Resource levelling",
        "Fast-tracking",
        "Resource smoothing",
        "Using available float"
       ],
       "answer": 0,
       "explain": "Levelling delays activities to respect resource limits, which can change the critical path and push the end date."
      },
      {
       "q": "A functional manager will not release a specialist your project needs next month because his own team has a peak. What should the project manager do FIRST?",
       "options": [
        "Escalate to the sponsor immediately",
        "Hire a contractor without discussing it",
        "Understand the manager's constraints and explore options that meet both needs",
        "Remove the specialist's work from the scope"
       ],
       "answer": 2,
       "explain": "Negotiation starts with understanding the other side's interests. Escalation comes after options have been explored."
      },
      {
       "q": "A developer is assigned to four projects at 25% each and all four are late. What is the MOST likely cause?",
       "options": [
        "Context switching and waiting are slowing all four projects",
        "The developer lacks the skills needed",
        "The estimates for the four projects were padded",
        "The projects use different development approaches"
       ],
       "answer": 0,
       "explain": "Splitting people across many projects adds switching time and delays; limiting multitasking usually speeds up all the work."
      }
     ]
    }
   ]
  },
  {
   "id": "m5-l4",
   "title": "Budgets, Reserves & Financial Planning",
   "subtitle": "Analyse financial needs, build a cost baseline, size reserves and plan how spend will be tracked and reported",
   "minutes": 32,
   "objectives": [
    "Aggregate estimates into a cost baseline and project budget",
    "Quantify contingency for risks and distinguish it from management reserve",
    "Plan spend tracking and financial reporting, including for agile teams",
    "Anticipate financial challenges such as inflation, exchange rates and funding limits"
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
     "type": "callout",
     "kind": "insight",
     "title": "Funding agile work",
     "text": "Many organisations fund **persistent teams** rather than fixed scopes. If a team of eight costs Tk 24 lakh per two-week sprint, a release forecast of 8–10 sprints means Tk 1.92–2.40 crore. The budget is fixed per period; the product owner steers what the money buys through the backlog. Financial control then focuses on **value per sprint** and on stopping when value falls."
    },
    {
     "type": "steps",
     "title": "Plan spend tracking and financial reporting",
     "items": [
      {
       "title": "Set the cost structure",
       "text": "Align WBS or team cost codes with the finance system so actual costs land in the right place."
      },
      {
       "title": "Agree the reporting rhythm",
       "text": "Monthly for most sponsors; at each gate for governance; as the donor or lender requires."
      },
      {
       "title": "Choose the measures",
       "text": "Actual versus baseline, forecast at completion, reserve use, cash flow against funding."
      },
      {
       "title": "Track commitments",
       "text": "Record purchase orders and contracts as committed costs, not only invoices paid."
      },
      {
       "title": "Define thresholds",
       "text": "Agree the variance that triggers escalation, for example ±5% of a control account."
      }
     ]
    },
    {
     "type": "keypoints",
     "title": "Anticipating financial challenges",
     "items": [
      "Inflation in materials and wages over a multi-year project",
      "Exchange-rate movements on imported equipment or foreign-currency contracts",
      "Funding released in tranches, by fiscal year or by donor milestone",
      "Import duties, taxes and VAT that change mid-project",
      "Cash-flow gaps when spend runs ahead of funding",
      "Interest costs when the project is financed by loans"
     ]
    },
    {
     "type": "text",
     "text": "Single-number estimates hide risk. **Monte Carlo simulation** runs a schedule or cost model thousands of times, each time drawing random values from the ranges you provide (for example the O–M–P range of each activity). The result is a distribution of possible outcomes and the probability of meeting any date or budget."
    },
    {
     "type": "callout",
     "kind": "example",
     "text": "The deterministic plan says the wing will be ready in **13 months**. Simulation shows only about a 20% chance of achieving that. **P50 = 14.5 months**, **P80 = 16 months**, **P90 = 17 months**. The sponsor chooses to commit publicly to 16 months (P80) and to treat 13 months as an internal stretch target. On agile work, a similar simulation can sample past weekly throughput to forecast when a set of backlog items will be finished.",
     "title": "Reading a simulation"
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
     "type": "terms",
     "items": [
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
      },
      {
       "term": "Time-phased budget",
       "def": "A budget spread over the periods in which costs are expected, used to plan funding and measure performance."
      },
      {
       "term": "S-curve",
       "def": "The typical shape of cumulative planned spend over time: slow start, steep middle, flat end."
      },
      {
       "term": "Funding limit reconciliation",
       "def": "Comparing planned spending with available funding by period and adjusting the schedule if needed."
      },
      {
       "term": "Monte Carlo simulation",
       "def": "A technique that runs a schedule or cost model thousands of times with random values from estimate ranges to produce probabilities."
      },
      {
       "term": "Committed cost",
       "def": "Money already promised through contracts or purchase orders, even if not yet invoiced or paid."
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
       "q": "Comparing the time-phased cost baseline with available funding by period is called:",
       "options": [
        "Benefits realisation planning",
        "Schedule crashing",
        "Resource smoothing analysis",
        "Funding limit reconciliation"
       ],
       "answer": 3,
       "explain": "Funding limit reconciliation adjusts the timing of work so planned spending fits within funding limits."
      },
      {
       "q": "An agile team costs Tk 12 lakh per sprint. The release forecast is 6–8 sprints. What budget range should be reported for the release?",
       "options": [
        "Tk 72–96 lakh",
        "Tk 12–24 lakh",
        "Tk 60–84 lakh",
        "Tk 96–120 lakh"
       ],
       "answer": 0,
       "explain": "Cost per sprint × forecast sprints: 12 × 6 = 72 and 12 × 8 = 96, so Tk 72–96 lakh."
      }
     ]
    }
   ]
  },
  {
   "id": "m5-l5",
   "title": "Earned Value, Forecasting & Financial Control",
   "subtitle": "Measure progress in money, read the variances, forecast the finish and work with governance on variations",
   "minutes": 35,
   "objectives": [
    "Calculate PV, EV, AC and the core variances and indices",
    "Choose the right EAC formula and compute ETC, VAC and TCPI",
    "Apply earned value ideas to agile releases",
    "Monitor financial variation and escalate through governance"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "‘We have spent 42% of the budget and we feel about 40% done’ tells a sponsor almost nothing. **Earned value management (EVM)** combines scope, schedule and cost into one measurement system so you can say exactly how much work has been accomplished for the money spent and time elapsed — and forecast where you will end up."
    },
    {
     "type": "framework",
     "items": [
      {
       "label": "PV",
       "title": "Planned value",
       "text": "The budgeted cost of the work **scheduled** to be done by now. The baseline line on the S-curve."
      },
      {
       "label": "EV",
       "title": "Earned value",
       "text": "The budgeted cost of the work **actually completed** by now. EV = % complete × BAC (or the sum of the budgets of completed work packages)."
      },
      {
       "label": "AC",
       "title": "Actual cost",
       "text": "What you have **really spent** on the work completed by now."
      },
      {
       "label": "BAC",
       "title": "Budget at completion",
       "text": "The total approved budget for the work (the cost baseline, without management reserve)."
      }
     ],
     "title": "The three base measures"
    },
    {
     "type": "formula",
     "items": [
      {
       "name": "Schedule variance",
       "expr": "SV = EV − PV",
       "meaning": "Negative means behind schedule (in value terms)."
      },
      {
       "name": "Cost variance",
       "expr": "CV = EV − AC",
       "meaning": "Negative means over budget for the work done."
      },
      {
       "name": "Schedule performance index",
       "expr": "SPI = EV ÷ PV",
       "meaning": "Below 1.0: progressing slower than planned. 0.9 = earning 90 paisa of planned work per taka planned."
      },
      {
       "name": "Cost performance index",
       "expr": "CPI = EV ÷ AC",
       "meaning": "Below 1.0: getting less value than spent. 0.8 = 80 paisa of value per taka spent."
      }
     ],
     "title": "Variances and indices"
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "**EV comes first** in every variance and index formula. A negative variance or an index below 1.0 is always bad news; positive or above 1.0 is good news.",
     "title": "The memory trick"
    },
    {
     "type": "formula",
     "items": [
      {
       "name": "EAC — typical (CPI continues)",
       "expr": "EAC = BAC ÷ CPI",
       "meaning": "Use when current cost performance is expected to continue. The most common default."
      },
      {
       "name": "EAC — atypical (variance was a one-off)",
       "expr": "EAC = AC + (BAC − EV)",
       "meaning": "Use when the overrun had a cause that will not recur; remaining work runs at budget."
      },
      {
       "name": "EAC — CPI and SPI both matter",
       "expr": "EAC = AC + (BAC − EV) ÷ (CPI × SPI)",
       "meaning": "Use when a fixed date is pushing you to spend more to catch up."
      },
      {
       "name": "EAC — new estimate",
       "expr": "EAC = AC + bottom-up ETC",
       "meaning": "Use when the original plan is no longer valid; re-estimate the remaining work."
      },
      {
       "name": "Estimate to complete",
       "expr": "ETC = EAC − AC",
       "meaning": "How much more money is needed."
      },
      {
       "name": "Variance at completion",
       "expr": "VAC = BAC − EAC",
       "meaning": "Negative means expected to finish over budget."
      },
      {
       "name": "To-complete performance index",
       "expr": "TCPI = (BAC − EV) ÷ (BAC − AC)",
       "meaning": "The CPI you must achieve on remaining work to finish on BAC. Use (BAC − EV) ÷ (EAC − AC) if an EAC has been approved."
      }
     ],
     "title": "Forecasts"
    },
    {
     "type": "case",
     "title": "Worked example: a warehouse app in Gazipur",
     "context": "A logistics firm is building a warehouse management app. **BAC = BDT 1,000,000**, planned evenly over 10 months. At the end of month 4, the plan said 40% of the work should be done. The team has actually completed 35% of the work and spent **BDT 420,000**.",
     "questions": [
      "Calculate PV, EV, SV, CV, SPI and CPI.",
      "Calculate EAC (typical), ETC, VAC and TCPI to BAC.",
      "Calculate EAC if the overrun is judged atypical, and the CPI × SPI version.",
      "Explain the status to the sponsor in two sentences."
     ],
     "answer": "PV = 40% × 1,000,000 = **400,000**. EV = 35% × 1,000,000 = **350,000**. AC = **420,000**. SV = 350,000 − 400,000 = **−50,000** (behind). CV = 350,000 − 420,000 = **−70,000** (over). SPI = 350/400 = **0.875**. CPI = 350/420 ≈ **0.833**.\nEAC typical = 1,000,000 ÷ 0.833 = **1,200,000**. ETC = 1,200,000 − 420,000 = **780,000**. VAC = 1,000,000 − 1,200,000 = **−200,000**. TCPI = (1,000,000 − 350,000) ÷ (1,000,000 − 420,000) = 650/580 ≈ **1.12**.\nEAC atypical = 420,000 + 650,000 = **1,070,000**. EAC with CPI × SPI = 420,000 + 650,000 ÷ (0.833 × 0.875 ≈ 0.729) ≈ **1,311,000**.\nTo the sponsor: ‘We are about 12% behind schedule and getting 83 paisa of value for every taka spent. If this continues we will finish around BDT 1.2 million; finishing on budget would need every remaining taka to deliver 1.12 taka of planned work — far better than our current 0.83 — so we need a decision on scope, approach or budget.’"
    },
    {
     "type": "table",
     "head": [
      "SPI",
      "CPI",
      "Plain-language status",
      "Typical response"
     ],
     "rows": [
      [
       "> 1",
       "> 1",
       "Ahead and under budget",
       "Check estimates were not padded; consider releasing funds"
      ],
      [
       "> 1",
       "< 1",
       "Ahead but over budget",
       "Maybe crashing or overtime — is the speed worth the cost?"
      ],
      [
       "< 1",
       "> 1",
       "Behind but under budget",
       "Often under-resourced; add capacity if the date matters"
      ],
      [
       "< 1",
       "< 1",
       "Behind and over budget",
       "Root-cause analysis, re-plan, escalate if beyond tolerance"
      ]
     ],
     "title": "Reading SPI and CPI together"
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "1) Measuring % complete by gut feel — use rules such as **0/100**, **50/50** or milestone weights. 2) SPI drifts back to 1.0 at the end of every project because all work eventually gets ‘earned’ — late in a project, check the critical path too. 3) EVM says nothing about quality: work earned but full of defects is not value.",
     "title": "EVM traps"
    },
    {
     "type": "formula",
     "title": "Earned value for an agile release",
     "items": [
      {
       "name": "Percent complete",
       "expr": "Points done ÷ points planned for the release",
       "meaning": "Uses the definition of done, so partly finished stories count zero."
      },
      {
       "name": "Earned value",
       "expr": "EV = % complete × release budget",
       "meaning": "Value of the work actually done, in money."
      },
      {
       "name": "Planned value",
       "expr": "PV = sprints elapsed ÷ sprints planned × release budget",
       "meaning": "Budget for the work that should be done by now."
      },
      {
       "name": "Indices",
       "expr": "CPI = EV ÷ AC; SPI = EV ÷ PV",
       "meaning": "Read exactly as in predictive projects."
      }
     ]
    },
    {
     "type": "callout",
     "kind": "pro",
     "title": "Variances belong to governance",
     "text": "When a forecast moves outside an agreed tolerance, do not quietly absorb it. Report the variance, its cause and the options, and let the body with authority decide: release management reserve, reduce scope, extend the date or accept the overrun. Inside tolerance, act within your own authority and record what you did."
    },
    {
     "type": "template",
     "title": "EVM tracker",
     "purpose": "Update at each reporting period to see trends rather than single snapshots.",
     "columns": [
      "Period",
      "PV",
      "EV",
      "AC",
      "CPI",
      "SPI",
      "EAC (BAC ÷ CPI)"
     ],
     "example": [
      [
       "Month 4",
       "400,000",
       "350,000",
       "420,000",
       "0.83",
       "0.88",
       "1,200,000"
      ]
     ],
     "rows": 8
    },
    {
     "type": "scenario",
     "situation": "At month 6, CPI = 0.78 and the TCPI to BAC is 1.35. The sponsor asks you to ‘tighten up and finish on budget’. What is the BEST response?",
     "options": [
      {
       "text": "Agree and promise to finish on budget through extra effort.",
       "feedback": "A TCPI of 1.35 means every taka must deliver 35% more value than planned — historically unrealistic. Promising it is not honest forecasting.",
       "best": false
      },
      {
       "text": "Explain that a TCPI of 1.35 is very unlikely to be achieved and present options: approve a revised EAC, reduce scope or change approach.",
       "feedback": "Correct. Use the data to reset expectations and give the sponsor real choices.",
       "best": true
      },
      {
       "text": "Stop reporting CPI since it upsets the sponsor.",
       "feedback": "Hiding unwelcome data breaks transparency and usually makes the eventual conversation worse.",
       "best": false
      },
      {
       "text": "Cut testing to save money.",
       "feedback": "Cutting quality is a hidden scope change that will reappear as defects and rework.",
       "best": false
      }
     ],
     "title": "The CPI conversation"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Earned value (EV)",
       "def": "The budgeted value of the work actually completed to date."
      },
      {
       "term": "Cost performance index (CPI)",
       "def": "EV ÷ AC — the cost efficiency of work performed; below 1.0 means over budget."
      },
      {
       "term": "To-complete performance index (TCPI)",
       "def": "The cost efficiency that must be achieved on remaining work to meet a target (BAC or EAC)."
      },
      {
       "term": "Planned value (PV)",
       "def": "The budgeted cost of the work scheduled to be done by a given date."
      },
      {
       "term": "Actual cost (AC)",
       "def": "The cost actually incurred for the work performed by a given date."
      },
      {
       "term": "Schedule performance index (SPI)",
       "def": "EV ÷ PV; below 1.0 means less work has been done than planned."
      },
      {
       "term": "Estimate at completion (EAC)",
       "def": "The expected total cost of the project when all work is complete, based on performance so far."
      },
      {
       "term": "Budget at completion (BAC)",
       "def": "The total approved budget for the work, the sum of all planned value."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "EV = 90,000, PV = 100,000, AC = 120,000. What is CPI?",
       "options": [
        "0.90",
        "0.75",
        "1.11",
        "1.33"
       ],
       "answer": 1,
       "explain": "CPI = EV ÷ AC = 90,000 ÷ 120,000 = 0.75."
      },
      {
       "q": "Using the same numbers, what is SV?",
       "options": [
        "−30,000",
        "+10,000",
        "−10,000",
        "−20,000"
       ],
       "answer": 2,
       "explain": "SV = EV − PV = 90,000 − 100,000 = −10,000."
      },
      {
       "q": "BAC = 500,000 and CPI = 0.80. Assuming performance continues, what is the EAC?",
       "options": [
        "625,000",
        "400,000",
        "580,000",
        "600,000"
       ],
       "answer": 0,
       "explain": "EAC = BAC ÷ CPI = 500,000 ÷ 0.80 = 625,000."
      },
      {
       "q": "A one-time cost spike came from a hardware price shock that will not recur. Which EAC formula fits best?",
       "options": [
        "BAC ÷ CPI",
        "BAC × SPI",
        "AC + (BAC − EV) ÷ (CPI × SPI)",
        "AC + (BAC − EV)"
       ],
       "answer": 3,
       "explain": "When the variance is atypical, assume the remaining work will run at budget rate."
      },
      {
       "q": "A release is budgeted at Tk 50 lakh for 200 points. After 4 of 8 planned sprints, 80 points are done and Tk 26 lakh has been spent. What is the CPI?",
       "options": [
        "About 0.77",
        "About 1.30",
        "About 0.80",
        "About 1.25"
       ],
       "answer": 0,
       "explain": "EV = 80 ÷ 200 × 50 = Tk 20 lakh; CPI = EV ÷ AC = 20 ÷ 26 ≈ 0.77, so the release is over budget for the work done."
      }
     ]
    }
   ]
  }
 ]
});
TRACK.modules.push({
 "id": "m6",
 "order": 6,
 "code": "Deliver",
 "title": "Process III: Procurement, Quality, Status & Closure",
 "subtitle": "Process · Tasks 5, 7, 9 and 10 (procurement, quality, project status, closure)",
 "outcomes": [
  "Plan procurement, select contracts, negotiate and manage suppliers",
  "Plan and optimise quality, including regulatory and sustainability standards",
  "Run agile delivery and read flow metrics",
  "Evaluate status with honest metrics, dashboards and well-managed artifacts",
  "Validate transition readiness and close phases and projects properly"
 ],
 "lessons": [
  {
   "id": "m6-l1",
   "title": "Procurement, Contracts & Negotiation",
   "subtitle": "Plan what to buy, choose the right contract, negotiate on interests and manage suppliers to the finish",
   "minutes": 32,
   "objectives": [
    "Outline the procurement process from make-or-buy to contract closure",
    "Select a contract type that fits the scope certainty and risk",
    "Plan a negotiation strategy using interests, BATNA and walk-away points",
    "Manage suppliers and evaluate their performance"
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
     "type": "text",
     "text": "Negotiation is structured conflict resolution. Project managers negotiate with vendors, functional managers, sponsors and team members constantly — for people, money, dates and scope."
    },
    {
     "type": "compare",
     "columns": [
      {
       "title": "Position (what they say)",
       "items": [
        "‘I need two of your testers for the whole of March.’",
        "‘The price is final.’",
        "‘We cannot go live before Eid.’"
       ]
      },
      {
       "title": "Interest (why they say it)",
       "items": [
        "Their own release has a regulatory deadline mid-March",
        "The vendor needs predictable cash flow this quarter",
        "Branch staff will be on leave; nobody to support users"
       ]
      }
     ],
     "title": "Positions vs interests"
    },
    {
     "type": "framework",
     "items": [
      {
       "label": "INT",
       "title": "Focus on interests",
       "text": "Ask ‘why does that matter to you?’ until you reach the underlying need."
      },
      {
       "label": "OPT",
       "title": "Invent options",
       "text": "Expand the pie: phased delivery, different payment terms, shared resources, scope swaps."
      },
      {
       "label": "CRI",
       "title": "Use objective criteria",
       "text": "Market rates, benchmarks, contract terms, past data — so neither side has to back down to the other’s will."
      },
      {
       "label": "BAT",
       "title": "Know your BATNA",
       "text": "Your Best Alternative To a Negotiated Agreement — what you will do if no deal is reached. A strong BATNA gives you the confidence to walk away from a bad deal."
      },
      {
       "label": "ZOPA",
       "title": "Find the ZOPA",
       "text": "The zone of possible agreement lies between each side’s walk-away point. No overlap, no deal — look for new options."
      }
     ],
     "title": "Principled negotiation toolkit"
    },
    {
     "type": "callout",
     "kind": "pro",
     "title": "Plan the negotiation before you meet",
     "text": "Write down your **interests**, your **BATNA**, your **walk-away point** and the concessions you can trade, then estimate the same for the other side. The overlap between the two walk-away points is the **zone of possible agreement**. Agree internally who may make which concessions, so the supplier cannot play your team members against each other."
    },
    {
     "type": "steps",
     "title": "Managing suppliers and contracts",
     "items": [
      {
       "title": "Kick off together",
       "text": "Walk through the statement of work, acceptance criteria, reporting and the change process with the supplier's team."
      },
      {
       "title": "Design the solution jointly",
       "text": "Where the supplier brings expertise, shape the delivery solution together while keeping ownership of requirements."
      },
      {
       "title": "Monitor performance",
       "text": "Track delivery, quality and service levels against agreed measures; review them regularly."
      },
      {
       "title": "Control changes",
       "text": "Route every scope change through the contract's change clause, in writing."
      },
      {
       "title": "Pay against evidence",
       "text": "Link payments to accepted milestones or increments, not to effort reported."
      },
      {
       "title": "Verify objectives",
       "text": "Before closure, confirm the agreement's objectives were met and record lessons."
      }
     ]
    },
    {
     "type": "template",
     "title": "Vendor performance scorecard",
     "purpose": "Review each key supplier monthly or per release using agreed, objective measures.",
     "columns": [
      "Criterion",
      "Measure",
      "Target",
      "Actual",
      "Rating (1–5)",
      "Action"
     ],
     "example": [
      [
       "On-time delivery",
       "Milestones met on agreed date",
       "90%",
       "75%",
       "2",
       "Joint recovery plan; review weekly until two milestones are met on time"
      ]
     ],
     "rows": 6
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
     "type": "terms",
     "items": [
      {
       "term": "Firm fixed price contract",
       "def": "A contract in which the seller delivers defined scope for an agreed price and carries most of the cost risk."
      },
      {
       "term": "Time and materials contract",
       "def": "A contract that pays agreed rates for time and materials used, with most cost risk on the buyer."
      },
      {
       "term": "BATNA",
       "def": "Best Alternative To a Negotiated Agreement: the course of action a party will take if negotiations fail."
      },
      {
       "term": "Cost-reimbursable contract",
       "def": "A contract that pays the seller's allowable costs plus a fee, leaving most cost risk with the buyer."
      },
      {
       "term": "Statement of work (SOW)",
       "def": "A description of what a supplier must deliver: scope, deliverables, standards, acceptance criteria and timeline."
      },
      {
       "term": "Make-or-buy analysis",
       "def": "Comparing doing work in-house with buying it, on cost, capability, risk and control."
      },
      {
       "term": "Service level agreement (SLA)",
       "def": "An agreement defining the measurable level of service a supplier must provide."
      },
      {
       "term": "Zone of possible agreement (ZOPA)",
       "def": "The range between the two parties' walk-away points in which a deal is possible."
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
        "Scope-swap clause",
        "Force majeure",
        "Liquidated damages",
        "Retention clause"
       ],
       "answer": 0,
       "explain": "A scope-swap clause keeps price and timeline while allowing priorities to change."
      },
      {
       "q": "A vendor’s BATNA becomes weaker. What is the likely effect?",
       "options": [
        "The vendor gains more negotiating power",
        "The vendor loses negotiating power",
        "BATNA has no effect",
        "The contract becomes void"
       ],
       "answer": 1,
       "explain": "A weaker alternative makes walking away more costly, reducing leverage."
      },
      {
       "q": "‘We need the server room by Friday’ is best described as…",
       "options": [
        "an interest",
        "a BATNA",
        "an objective criterion",
        "a position"
       ],
       "answer": 3,
       "explain": "It is a stated demand. The interest is the reason behind it."
      },
      {
       "q": "A cloud supplier has missed three of four milestones, but its account manager reports that the team is 'working hard'. What should the project manager do FIRST?",
       "options": [
        "Terminate the contract for poor performance",
        "Review performance against the agreed measures with the supplier and agree a recovery plan",
        "Accept the explanation, since effort is high",
        "Withhold all payments until the end of the project"
       ],
       "answer": 1,
       "explain": "Supplier management relies on objective measures. Reviewing them together and agreeing a recovery plan comes before contractual remedies."
      }
     ]
    }
   ]
  },
  {
   "id": "m6-l2",
   "title": "Quality, Compliance & the Cost of Quality",
   "subtitle": "Plan quality in, meet regulatory standards, manage the cost of quality and sustainability, and keep reviewing",
   "minutes": 30,
   "objectives": [
    "Gather quality requirements, including regulatory and sustainability standards",
    "Distinguish quality planning, assurance and control",
    "Classify costs of quality and argue for prevention",
    "Use quality tools and ongoing reviews to improve deliverables"
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
     "type": "callout",
     "kind": "warning",
     "title": "Regulatory standards are quality requirements",
     "text": "Many deliverables must meet external rules: building and fire codes, medical-device and drug standards, food safety, data-protection law, accessibility rules for public websites. Gather these with the other quality requirements at the start, plan how **evidence** of compliance will be produced, such as test reports, certificates and inspection records, and include them in acceptance criteria."
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
     "type": "keypoints",
     "title": "Quality and sustainability together",
     "items": [
      "Rework and scrap are both a failure cost and an environmental cost: every defect wastes material and energy",
      "Specify durability, repairability and energy efficiency as measurable quality requirements",
      "Include supplier standards on materials, labour and waste in quality audits",
      "Measure whole-life cost and impact, not only the cost to build"
     ]
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
     "type": "callout",
     "kind": "pro",
     "title": "Review quality continuously",
     "text": "Quality is not a gate at the end. Hold short quality reviews at an agreed rhythm, such as each sprint or each month, looking at defect trends, audit findings and customer complaints. Pick one improvement each time, try it, check the result and keep it if it works. Module 8 builds this into a full continuous-improvement habit."
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
     "type": "terms",
     "items": [
      {
       "term": "Cost of quality",
       "def": "The total cost of conformance (prevention and appraisal) and non-conformance (internal and external failure)."
      },
      {
       "term": "Grade",
       "def": "A category for products with the same use but different features; low grade can be acceptable, low quality cannot."
      },
      {
       "term": "Quality assurance",
       "def": "Activities that check whether the processes used to create deliverables are effective."
      },
      {
       "term": "Quality control",
       "def": "Inspecting and testing deliverables to confirm they meet requirements."
      },
      {
       "term": "Prevention cost",
       "def": "Money spent to stop defects happening, such as training, standards and design reviews."
      },
      {
       "term": "Failure cost",
       "def": "The cost of defects found before delivery (internal) or after delivery (external)."
      },
      {
       "term": "Pareto chart",
       "def": "A bar chart that ranks causes by frequency or impact to show the few causes behind most problems."
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
        "Pareto chart",
        "Scatter diagram",
        "Flowchart",
        "Histogram"
       ],
       "answer": 0,
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
       "q": "A public health app must meet national accessibility rules. When should these rules be addressed?",
       "options": [
        "After launch, when users report problems",
        "Only if the regulator audits the app",
        "As quality requirements from the start, with planned evidence and acceptance criteria",
        "During final testing, by a specialist consultant"
       ],
       "answer": 2,
       "explain": "Regulatory standards are quality requirements. Gathering them early and planning evidence avoids costly late rework."
      }
     ]
    }
   ]
  },
  {
   "id": "m6-l3",
   "title": "Delivery Cadence & Flow: Scrum, Kanban and Flow Metrics",
   "subtitle": "Run agile delivery well and read the flow data it produces to assess progress",
   "minutes": 32,
   "objectives": [
    "Describe the Scrum accountabilities, events and artifacts",
    "Apply Kanban practices and set WIP limits",
    "Calculate and interpret lead time, cycle time, throughput and Little's Law",
    "Read a cumulative flow diagram to assess progress"
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
        "Sprint Goal",
        "Product Goal",
        "Definition of Done",
        "Acceptance criteria"
       ],
       "answer": 2,
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
        "Throughput",
        "Work item age",
        "Sprint velocity",
        "Lead time"
       ],
       "answer": 1,
       "explain": "Work item age tracks items still in progress, so you can act before they become late."
      }
     ]
    }
   ]
  },
  {
   "id": "m6-l4",
   "title": "Evaluating Project Status: Metrics, Dashboards & Artifacts",
   "subtitle": "Measure progress honestly, report it so people can act, and keep project artifacts current and accessible",
   "minutes": 30,
   "objectives": [
    "Read burndown, burnup and velocity charts and avoid common misuse",
    "Design a status dashboard with agreed RAG criteria",
    "Forecast with ranges and confidence levels",
    "Tailor, maintain and reconcile project artifacts and metrics"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Agile teams rarely calculate EVM, but they still need to see whether they are on track. Their metrics are lighter, more frequent and more visual — and just as easy to misuse. (Scrum and Kanban mechanics were covered in lesson 6.3; here we focus on judging status with the data they produce, alongside the earned value measures from module 5.)"
    },
    {
     "type": "compare",
     "columns": [
      {
       "title": "Burndown",
       "items": [
        "Plots work **remaining** against time",
        "Simple; good for a single sprint",
        "Hides scope change: if scope grows and the team delivers, the line looks flat",
        "Question it answers: ‘Will we finish what we committed to?’"
       ]
      },
      {
       "title": "Burnup",
       "items": [
        "Plots work **completed** and **total scope** as two lines",
        "Makes scope growth visible",
        "Better for releases and stakeholder conversations",
        "Question it answers: ‘When will the lines meet — and is the target moving?’"
       ]
      }
     ],
     "title": "Burndown vs burnup"
    },
    {
     "type": "framework",
     "items": [
      {
       "label": "USE",
       "title": "Planning aid",
       "text": "A team’s average completed points per sprint helps it decide how much to pull into the next sprint and roughly how many sprints a backlog needs."
      },
      {
       "label": "X1",
       "title": "Never compare teams",
       "text": "Story points are relative to each team’s own scale. Comparing velocity between teams is meaningless and invites gaming."
      },
      {
       "label": "X2",
       "title": "Never make it a target",
       "text": "When velocity becomes a goal, estimates inflate and the number rises while delivered value does not."
      },
      {
       "label": "ALT",
       "title": "Prefer flow measures",
       "text": "Throughput (items finished per week) and cycle time (start to finish per item) are harder to game and work well for forecasting."
      }
     ],
     "title": "Velocity: useful, fragile"
    },
    {
     "type": "text",
     "text": "A **status dashboard** exists so stakeholders can make decisions. If a reader cannot tell within 30 seconds what is on track, what is not and what they need to do, the dashboard has failed."
    },
    {
     "type": "table",
     "head": [
      "Status",
      "Schedule",
      "Cost",
      "Meaning for readers"
     ],
     "rows": [
      [
       "Green",
       "Forecast within 1 week of baseline",
       "EAC within 3% of BAC",
       "On track — no action needed"
      ],
      [
       "Amber",
       "Forecast 1–4 weeks late",
       "EAC 3–8% over",
       "At risk — team has a recovery plan; watch"
      ],
      [
       "Red",
       "Forecast > 4 weeks late or milestone missed",
       "EAC > 8% over",
       "Off track — decision or help needed from the reader"
      ]
     ],
     "title": "Define RAG criteria in advance"
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "Green on the outside, red on the inside. Projects report green for months and then turn red overnight. Causes: subjective RAG, fear of bad news, and reporting activity instead of outcomes. Fix it with objective criteria, forecasts rather than snapshots, and a culture that rewards early warnings.",
     "title": "The watermelon project"
    },
    {
     "type": "framework",
     "items": [
      {
       "label": "1",
       "title": "Headline",
       "text": "Overall status, one-sentence summary and trend arrow (improving, stable, worsening)."
      },
      {
       "label": "2",
       "title": "Decisions needed",
       "text": "What you need from the reader and by when — put this near the top."
      },
      {
       "label": "3",
       "title": "Forecast",
       "text": "Finish date and cost as ranges with confidence (e.g. P50/P80)."
      },
      {
       "label": "4",
       "title": "Top risks & issues",
       "text": "The three to five that matter, with owners."
      },
      {
       "label": "5",
       "title": "Outcomes",
       "text": "Leading indicators of value: adoption, OKR key results, quality."
      }
     ],
     "title": "What a good one-page dashboard shows"
    },
    {
     "type": "steps",
     "items": [
      {
       "title": "Gather history",
       "text": "Collect weekly throughput (items finished) for the last 10–15 weeks."
      },
      {
       "title": "Size the remaining work",
       "text": "Count backlog items, and add a realistic allowance for the scope growth you have historically seen."
      },
      {
       "title": "Simulate",
       "text": "Randomly sample past weekly throughputs many times to see how many weeks the remaining items take (a simple Monte Carlo)."
      },
      {
       "title": "Report a range",
       "text": "‘85% likely by 30 June; 50% likely by 9 June.’"
      },
      {
       "title": "Re-forecast often",
       "text": "Update weekly as new data arrives; forecasts are living, not promises carved in stone."
      }
     ],
     "title": "Forecasting honestly with throughput"
    },
    {
     "type": "scenario",
     "situation": "A marketing director wants ‘one firm date’ for an app launch. Your throughput forecast gives 50% by 12 May and 85% by 2 June. What is the BEST response?",
     "options": [
      {
       "text": "Recommend committing externally to 2 June, plan internally toward mid-May, and agree to update the forecast weekly.",
       "feedback": "Correct. Match the commitment’s confidence to the cost of missing it, and keep the forecast live.",
       "best": true
      },
      {
       "text": "Give 12 May — it is the most likely date.",
       "feedback": "50% is a coin toss. Committing externally to it means a one-in-two chance of a public miss.",
       "best": false
      },
      {
       "text": "Refuse to give any date because agile teams do not commit to dates.",
       "feedback": "Agile does not mean no forecasting. Stakeholders legitimately need dates; give them with confidence levels.",
       "best": false
      },
      {
       "text": "Add 50% to the 12 May date to be safe.",
       "feedback": "Arbitrary padding ignores the data you already have and is hard to defend.",
       "best": false
      }
     ],
     "title": "The demand for one date"
    },
    {
     "type": "callout",
     "kind": "insight",
     "title": "Reconcile before you report",
     "text": "Metrics drawn from different sources often disagree: timesheets say one thing, the finance ledger another, the board a third. Reconcile them before reporting, explain any difference that remains, and fix the cause. A sponsor who finds two versions of the truth stops trusting both."
    },
    {
     "type": "table",
     "title": "Tailoring project artifacts",
     "head": [
      "Need",
      "Predictive artifact",
      "Agile artifact",
      "Hybrid choice"
     ],
     "rows": [
      [
       "Show progress",
       "Schedule and earned value report",
       "Burnup and release forecast",
       "Milestone roadmap plus burnups"
      ],
      [
       "Track scope",
       "Scope baseline and change log",
       "Product backlog",
       "Baseline for fixed parts, backlog for evolving parts"
      ],
      [
       "Record decisions",
       "Decision register and minutes",
       "Decision log in the team channel",
       "One shared decision log"
      ],
      [
       "Track risks and issues",
       "Risk register and issue log",
       "Risks as backlog items; impediment board",
       "One register reviewed at both cadences"
      ]
     ]
    },
    {
     "type": "keypoints",
     "title": "Managing artifacts well",
     "items": [
      "Keep one source of truth for each artifact, with version history",
      "Name an owner and a review date for each key artifact",
      "Make artifacts accessible: findable, readable on mobile, usable with screen readers and in the languages people work in",
      "Control access to confidential material without hiding what people need",
      "Retire artifacts that nobody uses, and ask regularly whether the set still helps the project"
     ]
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Burnup chart",
       "def": "A chart showing completed work and total scope over time, making scope change visible."
      },
      {
       "term": "Watermelon reporting",
       "def": "Status that appears green externally while the underlying reality is amber or red."
      },
      {
       "term": "Burndown chart",
       "def": "A chart of work remaining against time, used to see whether committed work will finish."
      },
      {
       "term": "RAG status",
       "def": "A red, amber or green rating of status, which is useful only when its criteria are defined objectively in advance."
      },
      {
       "term": "Probabilistic forecast",
       "def": "A forecast stated as a date or amount with a confidence level, such as '85% likely by 2 June'."
      },
      {
       "term": "Project artifact",
       "def": "Any document, board, log, chart or model the project creates or maintains to plan, track or record its work."
      },
      {
       "term": "Reconciliation",
       "def": "Comparing figures from different sources, explaining differences and correcting the cause."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which chart BEST reveals that scope is growing faster than the team delivers?",
       "options": [
        "Burnup",
        "Burndown",
        "Pie chart of story types",
        "Velocity bar chart"
       ],
       "answer": 0,
       "explain": "A burnup shows total scope as its own line, so growth is visible."
      },
      {
       "q": "Management proposes ranking teams by velocity to reward the best. What is the main problem?",
       "options": [
        "Velocity is too difficult to calculate consistently across sprints",
        "Points are team-relative, so comparisons mislead and invite inflation",
        "Teams with the highest velocity will burn out sooner",
        "Velocity is only a valid measure for Kanban teams, not Scrum teams"
       ],
       "answer": 1,
       "explain": "Velocity is a team’s internal planning aid, not a cross-team productivity measure."
      },
      {
       "q": "What is the MOST effective way to prevent watermelon reporting?",
       "options": [
        "Let each PM define green in a way that suits their project",
        "Ban the colour red so teams focus on solutions, not blame",
        "Report less often so problems have time to be resolved",
        "Use objective RAG criteria and reward early bad news"
       ],
       "answer": 3,
       "explain": "Objective thresholds plus psychological safety around bad news keep status honest."
      },
      {
       "q": "A forecast states ‘85% likely by 2 June’. This is an example of…",
       "options": [
        "a schedule baseline",
        "a delivery guarantee",
        "a probabilistic forecast",
        "a velocity target for the team"
       ],
       "answer": 2,
       "explain": "It expresses a date with a confidence level based on data."
      },
      {
       "q": "Field engineers say they cannot open the project's risk register on their phones and rarely see it. What does this show?",
       "options": [
        "The register should be removed because it is not used",
        "A failure of artifact accessibility that should be fixed",
        "The engineers do not need to see risks",
        "The register should be emailed monthly as a large attachment"
       ],
       "answer": 1,
       "explain": "Artifacts must be accessible to the people who need them. Making the register usable on mobile, or providing a suitable view, fixes the problem."
      }
     ]
    }
   ]
  },
  {
   "id": "m6-l5",
   "title": "Closing a Phase or Project & Transition",
   "subtitle": "Agree closure criteria, validate readiness for transition and finish with accepted deliverables and settled contracts",
   "minutes": 28,
   "objectives": [
    "Determine criteria for closing a phase or project",
    "Validate readiness for transition to operations or the next phase",
    "Complete closure activities, including contracts, finances, resources and lessons",
    "Close a terminated project with the same discipline"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "**Closure** is the part of the project life cycle most often rushed. People are pulled onto new work, the budget code is shut and documents scatter. Yet closure is where you secure acceptance, protect the benefits and capture knowledge for the next project. A project that never formally closes keeps consuming attention and money."
    },
    {
     "type": "keypoints",
     "title": "Criteria for closing a phase or project",
     "items": [
      "Deliverables accepted against agreed criteria by the authorised person",
      "Transition criteria met, such as support readiness and hypercare exit thresholds",
      "Contracts closed or transferred, and final invoices settled",
      "Financial accounts reconciled and the cost code closed",
      "People released with feedback and recognition",
      "Lessons captured and records archived",
      "Benefits tracking handed to a named owner"
     ]
    },
    {
     "type": "flow",
     "items": [
      {
       "label": "Confirm acceptance",
       "text": "Formal sign-off that deliverables meet the agreed criteria"
      },
      {
       "label": "Transition",
       "text": "Hand over to operations, support and the business owner"
      },
      {
       "label": "Close contracts",
       "text": "Verify, settle, pay, release"
      },
      {
       "label": "Close finances & release people",
       "text": "Final costs, return resources, recognise contributions"
      },
      {
       "label": "Capture learning & archive",
       "text": "Lessons, final report, records stored"
      },
      {
       "label": "Celebrate",
       "text": "Mark the end; thank people publicly"
      }
     ],
     "title": "The ZPMP closing sequence"
    },
    {
     "type": "callout",
     "kind": "definition",
     "text": "Quality control checks that a deliverable meets specifications (it is **verified/correct**). Acceptance is the customer or sponsor formally agreeing it meets acceptance criteria (it is **accepted**). Both are needed; only acceptance closes the scope.",
     "title": "Verified vs accepted"
    },
    {
     "type": "table",
     "head": [
      "Element",
      "What ‘done’ looks like"
     ],
     "rows": [
      [
       "Operational owner",
       "A named business owner has accepted responsibility for the product and its benefits"
      ],
      [
       "Support model",
       "Service desk, escalation paths and support hours agreed; tickets routed correctly"
      ],
      [
       "Hypercare",
       "An agreed period (often 2–6 weeks) of extra project support after go-live, with exit criteria"
      ],
      [
       "Knowledge transfer",
       "Runbooks, configuration records, known issues list, training for support staff"
      ],
      [
       "Warranties & licences",
       "Vendor warranties, licence renewals and support contracts transferred to the operational owner"
      ],
      [
       "Measures",
       "Benefit and performance KPIs set up and reporting to the business owner"
      ]
     ],
     "title": "Handover to operations"
    },
    {
     "type": "steps",
     "title": "Validate readiness for transition",
     "items": [
      {
       "title": "Agree readiness criteria early",
       "text": "Define with operations what 'ready to receive' means, months before go-live."
      },
      {
       "title": "Rehearse",
       "text": "Run a dress rehearsal or pilot of support processes, including incident handling."
      },
      {
       "title": "Check people",
       "text": "Support staff trained, runbooks current, escalation paths agreed."
      },
      {
       "title": "Check data and systems",
       "text": "Migration verified, monitoring in place, backups tested."
      },
      {
       "title": "Decide formally",
       "text": "Hold a go or no-go review against the criteria and record the decision."
      }
     ]
    },
    {
     "type": "callout",
     "kind": "insight",
     "title": "Closure in agile and product settings",
     "text": "Agile teams close each **release** with acceptance at the sprint review and a retrospective, and the product often continues with a stable team. Even so, a project or funding period still ends: contracts close, the budget is reconciled, temporary staff move on and the final lessons are shared beyond the team."
    },
    {
     "type": "steps",
     "items": [
      {
       "title": "Verify deliverables",
       "text": "Confirm everything contracted was delivered and accepted; check against the statement of work."
      },
      {
       "title": "Resolve open items",
       "text": "Settle claims, disputes and change requests — negotiation first, escalation or alternative dispute resolution if needed."
      },
      {
       "title": "Final payment",
       "text": "Release retention money and final invoices according to the terms."
      },
      {
       "title": "Procurement audit",
       "text": "Review the procurement process for lessons: what worked in selection, contract type and management."
      },
      {
       "title": "Formal closure notice",
       "text": "Written notice to the seller that the contract is complete; update vendor performance records."
      }
     ],
     "title": "Closing a contract"
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "If a project is cancelled — strategy changed, business case collapsed — close it with the same discipline: document why, what was completed, what can be reused, how contracts end (termination clauses), and what was learned. Stopping a failing project early is a **good governance outcome**, not a failure of the PM.",
     "title": "Early termination still needs closure"
    },
    {
     "type": "checklist",
     "title": "Project closure checklist",
     "items": [
      "Final deliverables formally accepted in writing by the authorised person",
      "Operational owner, support model and hypercare exit criteria agreed",
      "All contracts closed, claims settled and final payments made",
      "Open risks and issues closed or transferred to an owner in operations",
      "Final costs reconciled and project budget codes closed",
      "Team members released with feedback to their line managers",
      "Lessons learned captured with owners for follow-up actions",
      "Benefits realisation plan handed to the business owner",
      "Project records archived according to retention policy and searchable",
      "Final report issued and sponsor sign-off on project closure obtained",
      "Team and stakeholders thanked and successes celebrated"
     ]
    },
    {
     "type": "case",
     "title": "ERP go-live at a garment factory in Ashulia",
     "context": "A knitwear exporter implemented an ERP system for planning, inventory and buyer compliance. Go-live happened in October. In December the PM was moved to a new project. In February: the vendor has not received final payment because nobody confirmed acceptance; 45 support tickets have no owner; the factory’s IT staff do not know the vendor warranty expires in April; and buyers are asking for compliance reports that the system can produce but no one knows how to run.",
     "questions": [
      "Which closure activities were missed?",
      "What should be done now, and by whom?",
      "How would you prevent this on the next project?"
     ],
     "answer": "Missed: formal acceptance, a defined support model and operational owner, hypercare with exit criteria, transfer of warranties, knowledge transfer to IT and compliance staff, and contract closure. Now: the sponsor appoints an operational owner; the vendor and factory hold an acceptance review against the original criteria and agree any punch-list; tickets are triaged and assigned; warranty and support renewal decided before April; compliance-report training run quickly. Prevention: include closure tasks in the schedule and budget from day one, make sponsor sign-off on closure a gate, and do not release the PM until the closure checklist is complete."
    },
    {
     "type": "scenario",
     "situation": "The sponsor says: ‘The system is live and users seem happy. Let’s skip the formal acceptance meeting — just move the team to the next project tomorrow.’ What should the project manager do?",
     "options": [
      {
       "text": "Agree; users are happy so acceptance is implied.",
       "feedback": "Implied acceptance invites disputes later about scope, payment and defects.",
       "best": false
      },
      {
       "text": "Explain the risks of skipping formal acceptance and propose a short, focused sign-off session this week alongside a staged team release.",
       "feedback": "Correct. Keep closure lightweight but formal: acceptance protects the client, the vendor and the team.",
       "best": true
      },
      {
       "text": "Refuse to release anyone until all documentation is perfect.",
       "feedback": "Overly rigid; a phased release can protect closure without blocking the next project.",
       "best": false
      },
      {
       "text": "Send an email stating that silence will be treated as acceptance.",
       "feedback": "Unilateral deemed-acceptance is weak unless the contract allows it, and it damages trust.",
       "best": false
      }
     ],
     "title": "The keen sponsor"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Formal acceptance",
       "def": "Documented confirmation by an authorised stakeholder that deliverables meet agreed acceptance criteria."
      },
      {
       "term": "Hypercare",
       "def": "A defined period of intensified support immediately after go-live, ending when agreed stability criteria are met."
      },
      {
       "term": "Contract closure",
       "def": "Completing all contract obligations, settling claims and payments and formally ending the contractual relationship."
      },
      {
       "term": "Closure criteria",
       "def": "Agreed conditions that must be met before a phase or project is formally closed."
      },
      {
       "term": "Operational readiness",
       "def": "The state in which the receiving organisation has the people, processes, tools and data to run the result."
      },
      {
       "term": "Transition",
       "def": "Moving responsibility for a deliverable from the project to operations, support or the next phase."
      },
      {
       "term": "Go or no-go review",
       "def": "A formal decision point that checks readiness criteria before a release or handover proceeds."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "A project is cancelled halfway because strategy changed. What should the PM do?",
       "options": [
        "Stop all work immediately and release the team without records",
        "Perform closure: document status, close contracts, capture lessons",
        "Continue until the original end date to protect the investment",
        "Hand all materials to the PMO without notes and move to new work"
       ],
       "answer": 1,
       "explain": "Terminated projects still need orderly closure."
      },
      {
       "q": "Which activity confirms that the customer agrees deliverables meet acceptance criteria?",
       "options": [
        "Formal acceptance",
        "Quality control",
        "Procurement audit",
        "Hypercare"
       ],
       "answer": 0,
       "explain": "Acceptance is the customer’s formal agreement; quality control is the internal check."
      },
      {
       "q": "Why should open risks be transferred at closure?",
       "options": [
        "So the risk register can be deleted at handover",
        "To justify increasing the final project budget",
        "It is not necessary once the project has closed",
        "Some risks continue into operations and need an owner"
       ],
       "answer": 3,
       "explain": "Operational risks continue after the project and must be owned by operations."
      },
      {
       "q": "A procurement audit at closure mainly aims to…",
       "options": [
        "identify procurement lessons for future use",
        "reopen negotiation on the final contract price",
        "penalise the vendor for any missed obligations",
        "approve the final payment to the supplier"
       ],
       "answer": 0,
       "explain": "It reviews the procurement process to improve future procurement."
      },
      {
       "q": "Two weeks before go-live, the service desk has not been trained and no runbook exists. The sponsor wants to keep the date. What should the project manager do?",
       "options": [
        "Go live and train the service desk afterwards",
        "Present the failed readiness criteria at a go or no-go review with options and their risks",
        "Delay go-live indefinitely until everything is perfect",
        "Ask the development team to act as the service desk permanently"
       ],
       "answer": 1,
       "explain": "Readiness for transition should be validated against agreed criteria, and the decision made formally with clear options, not assumed."
      }
     ]
    }
   ]
  }
 ]
});
TRACK.modules.push({
 "id": "m7",
 "order": 7,
 "code": "Govern",
 "title": "Business Environment I: Governance, Compliance, Change & Risk",
 "subtitle": "Business Environment · Tasks 1, 2, 3 and 5 (governance, compliance, change control, risk)",
 "outcomes": [
  "Establish project governance with success metrics, escalation paths and ethical standards",
  "Plan and manage compliance and prove it with evidence",
  "Control change in predictive, agile and hybrid settings",
  "Identify, analyse, respond to and communicate risk, including security and sustainability risks"
 ],
 "lessons": [
  {
   "id": "m7-l1",
   "title": "Project Governance, Process Assets & Ethics",
   "subtitle": "Set the structure, rules, success metrics and escalation paths a project runs within, and act with integrity",
   "minutes": 32,
   "objectives": [
    "Describe the governance structure, rules and reporting a project needs",
    "Use organisational process assets to establish governance quickly",
    "Define success metrics, escalation paths and tolerance thresholds",
    "Apply professional values and a structured check to ethical dilemmas"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "A single well-run project is good. An organisation that consistently picks the **right** projects and runs them well is far better. Governance is the framework of authority, decision rights and oversight that makes that consistency possible — without drowning teams in bureaucracy."
    },
    {
     "type": "layers",
     "title": "A typical project governance structure (top first)",
     "items": [
      {
       "label": "Portfolio or investment board",
       "parts": [
        "Selects and funds projects",
        "Sets risk appetite and strategic priorities"
       ]
      },
      {
       "label": "Steering committee",
       "parts": [
        "Directs the project at gates",
        "Decides on issues beyond tolerance"
       ]
      },
      {
       "label": "Sponsor",
       "parts": [
        "Owns the business case",
        "Champions the project and removes organisational blocks"
       ]
      },
      {
       "label": "Project manager",
       "parts": [
        "Manages within agreed tolerances",
        "Reports, escalates and integrates"
       ]
      },
      {
       "label": "Team and product owner",
       "parts": [
        "Deliver the work",
        "Decide within their delegated authority"
       ]
      }
     ]
    },
    {
     "type": "callout",
     "kind": "definition",
     "title": "Organisational process assets (OPAs)",
     "text": "**OPAs** are the plans, policies, procedures, templates, standards and knowledge bases an organisation already has, such as a stage-gate procedure, a risk-scoring template, a code of conduct or a lessons-learned library. Use them to establish governance quickly and consistently, tailoring rather than reinventing. Conditions outside the project team's control, such as laws, market conditions or company culture, are often called **enterprise environmental factors**."
    },
    {
     "type": "table",
     "head": [
      "Type",
      "Degree of control",
      "What it does",
      "Best fit"
     ],
     "rows": [
      [
       "Supportive",
       "Low",
       "Templates, training, best practice, lessons-learned library; a consultative role",
       "Organisations new to formal PM or with diverse, autonomous units"
      ],
      [
       "Controlling",
       "Moderate",
       "Requires compliance with methods, reporting and reviews; audits and assures",
       "Organisations needing consistency and visibility, e.g. regulated sectors"
      ],
      [
       "Directive",
       "High",
       "Directly manages projects; PMs report to the PMO",
       "Strategic or high-risk portfolios needing central control"
      ]
     ],
     "title": "PMO types"
    },
    {
     "type": "flow",
     "items": [
      {
       "label": "Idea / mandate",
       "text": "Is the problem worth exploring?"
      },
      {
       "label": "Gate 1: business case",
       "text": "Is it viable and aligned? Fund discovery"
      },
      {
       "label": "Gate 2: plan approved",
       "text": "Baseline, risks, funding for delivery"
      },
      {
       "label": "Gate 3: ready to launch",
       "text": "Quality, readiness, change plan"
      },
      {
       "label": "Gate 4: closure & benefits",
       "text": "Accept, hand over, track benefits"
      }
     ],
     "title": "Stage-gate governance"
    },
    {
     "type": "callout",
     "kind": "definition",
     "text": "Boards set **tolerances** — e.g. ±10% cost, ±3 weeks — within which the PM manages without escalation. Only forecasts beyond tolerance come back to the board. This is management by exception: senior time goes where it is needed.",
     "title": "Tolerances keep governance light"
    },
    {
     "type": "table",
     "title": "Escalation paths and thresholds",
     "head": [
      "Variance or event",
      "Project manager acts when…",
      "Sponsor decides when…",
      "Steering committee or board decides when…"
     ],
     "rows": [
      [
       "Cost forecast",
       "Within ±5% of budget",
       "Between 5% and 10%",
       "Beyond 10% or reserve release needed"
      ],
      [
       "Milestone date",
       "Slip under 2 weeks",
       "Slip of 2–6 weeks",
       "Slip over 6 weeks or regulatory date at risk"
      ],
      [
       "Scope",
       "Backlog reordering within the product goal",
       "Change to a major deliverable",
       "Change to objectives or the business case"
      ],
      [
       "Risk",
       "Score below 12 with response in place",
       "Score 12 or above",
       "Beyond the organisation's risk appetite"
      ]
     ]
    },
    {
     "type": "keypoints",
     "title": "Defining success metrics",
     "items": [
      "Separate **project** success (delivered as agreed) from **product** success (value created over time)",
      "Agree a few metrics per objective, each with a baseline, target and data source",
      "Combine leading measures, such as adoption in the first month, with lagging ones, such as cost savings after a year",
      "Include stakeholder satisfaction and sustainability measures where they matter",
      "Record the metrics in the charter or governance plan so they cannot drift quietly"
     ]
    },
    {
     "type": "text",
     "text": "Project managers hold information, money and influence. Sponsors, clients and teams rely on what they report and how they decide. The professional community broadly agrees on four core values — **responsibility, respect, fairness and honesty** — and these are reflected, for example, in the code of ethics published by PMI. Here is what they mean in day-to-day project life, in ZPMP’s own words."
    },
    {
     "type": "framework",
     "items": [
      {
       "label": "RSP",
       "title": "Responsibility",
       "text": "Own your decisions and their consequences. Take only work you are competent to do. Keep commitments. Report errors — including your own — promptly and fix them."
      },
      {
       "label": "RES",
       "title": "Respect",
       "text": "Treat people with dignity. Listen to other views. Honour other cultures and norms. Never abuse power or speak about others behind their backs to harm them."
      },
      {
       "label": "FAI",
       "title": "Fairness",
       "text": "Decide impartially. Disclose and manage conflicts of interest. Give equal access to information and opportunity in procurement and staffing."
      },
      {
       "label": "HON",
       "title": "Honesty",
       "text": "Seek and tell the truth. Report status accurately, even when it is unwelcome. Do not mislead by omission, selective data or silence."
      }
     ],
     "title": "Four values in action"
    },
    {
     "type": "steps",
     "items": [
      {
       "title": "Recognise",
       "text": "Is there an ethical issue? Who could be harmed or treated unfairly?"
      },
      {
       "title": "Get the facts",
       "text": "What do you actually know? What laws, policies, contracts and codes apply?"
      },
      {
       "title": "Consider options",
       "text": "List possible actions, including ‘raise it’, ‘decline’ and ‘seek advice’."
      },
      {
       "title": "Test them",
       "text": "Would I be comfortable if this appeared in the news, or if my mentor saw it? Is it legal? Fair to all? Honest?"
      },
      {
       "title": "Act and reflect",
       "text": "Act, document your reasoning, and raise concerns through proper channels if needed."
      }
     ],
     "title": "A five-step ethical decision check"
    },
    {
     "type": "scenario",
     "situation": "Two days before a board meeting, your sponsor asks you to change the project’s status from red to amber ‘to avoid panic’, promising to fix things next month. What should you do?",
     "options": [
      {
       "text": "Change it to amber — the sponsor is accountable for the project.",
       "feedback": "Knowingly misreporting status breaches honesty regardless of who asks.",
       "best": false
      },
      {
       "text": "Report the sponsor to the ethics hotline immediately.",
       "feedback": "Escalation may become necessary, but first discuss it directly and offer a constructive alternative.",
       "best": false
      },
      {
       "text": "Keep the status red, and offer to help the sponsor present a credible recovery plan and decisions needed alongside it.",
       "feedback": "Correct. Honest status plus a constructive path forward serves the sponsor and the organisation.",
       "best": true
      },
      {
       "text": "Skip the board meeting to avoid presenting.",
       "feedback": "Avoidance does not solve the dilemma and leaves the board uninformed.",
       "best": false
      }
     ],
     "title": "The green report"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "PMO",
       "def": "Project (or portfolio/programme) management office: a function that standardises governance, supports or directs projects and improves delivery capability."
      },
      {
       "term": "Stage gate",
       "def": "A decision point between phases where governance reviews progress and decides whether to continue, change or stop."
      },
      {
       "term": "Conflict of interest",
       "def": "A situation in which personal interests could improperly influence, or appear to influence, professional judgement."
      },
      {
       "term": "Project governance",
       "def": "The framework of authority, decision rights, rules and oversight within which a project is directed and controlled."
      },
      {
       "term": "Organisational process assets (OPAs)",
       "def": "An organisation's existing plans, policies, procedures, templates and knowledge that projects can use and tailor."
      },
      {
       "term": "Tolerance",
       "def": "The permitted deviation from a plan, such as ±5% cost, within which the project manager can act without escalating."
      },
      {
       "term": "Escalation path",
       "def": "The agreed route by which an issue or variance moves to a higher level of authority for decision."
      },
      {
       "term": "Management by exception",
       "def": "A governance style in which senior people are involved only when agreed tolerances are forecast to be exceeded."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "A PMO provides templates and coaching but does not require their use. Which type is it?",
       "options": [
        "Directive",
        "Controlling",
        "Portfolio",
        "Supportive"
       ],
       "answer": 3,
       "explain": "Supportive PMOs provide resources with low control."
      },
      {
       "q": "A project forecast is 4% over budget; the board’s tolerance is ±10%. What should the PM do?",
       "options": [
        "Escalate to the board immediately for a decision",
        "Pause non-urgent work until the board has reviewed it",
        "Manage within the project and report normally",
        "Request a new cost baseline from the board"
       ],
       "answer": 2,
       "explain": "Within tolerance, the PM manages; management by exception keeps the board for larger deviations."
      },
      {
       "q": "You discover your company’s bid evaluation includes a firm owned by your cousin. What should you do FIRST?",
       "options": [
        "Evaluate the bid fairly and say nothing about it",
        "Disclose the relationship and step aside from it",
        "Mark the firm down to avoid any suspicion of favour",
        "Ask your cousin to withdraw the bid quietly before scoring"
       ],
       "answer": 1,
       "explain": "Disclosure and recusal manage the conflict transparently."
      },
      {
       "q": "A sponsor asks you to omit a major risk from a report to investors. Which value is primarily at stake?",
       "options": [
        "Honesty",
        "Respect",
        "Fairness",
        "Responsibility only for the sponsor"
       ],
       "answer": 0,
       "explain": "Omitting material information misleads — an honesty issue."
      },
      {
       "q": "A new project manager must set up governance for a project in an organisation with an established PMO. What should she do FIRST?",
       "options": [
        "Design a new governance framework from scratch",
        "Review the organisation's process assets, such as gate procedures and templates, and tailor them",
        "Ask the team to propose their own governance rules",
        "Wait for the steering committee to define governance"
       ],
       "answer": 1,
       "explain": "OPAs let governance be established quickly and consistently; the PM tailors them to the project rather than reinventing them."
      }
     ]
    }
   ]
  },
  {
   "id": "m7-l2",
   "title": "Planning & Managing Compliance",
   "subtitle": "Confirm what the project must comply with, protect it from threats and prove compliance with evidence",
   "minutes": 30,
   "objectives": [
    "Confirm and classify a project's compliance requirements",
    "Identify threats to compliance and the consequences of non-compliance",
    "Choose methods that build compliance into delivery",
    "Measure the extent to which the project is compliant"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Every project operates inside rules it did not write: laws, regulations, licences, safety codes, data-protection duties, donor conditions, sustainability commitments and internal policies. **Compliance management** confirms which rules apply, builds them into the work and produces evidence that they were met. Non-compliance can stop a project overnight, so it belongs in planning from the first week, not in a panic before go-live."
    },
    {
     "type": "table",
     "title": "Compliance categories",
     "head": [
      "Category",
      "Examples",
      "Typical evidence"
     ],
     "rows": [
      [
       "Legal and regulatory",
       "Central bank circulars, telecom licences, labour law",
       "Approvals, licences, regulator correspondence"
      ],
      [
       "Security and data privacy",
       "Data-protection law, security standards, customer consent",
       "Risk assessments, penetration test reports, consent records"
      ],
      [
       "Health and safety",
       "Site safety, fire codes, electrical safety",
       "Inspection certificates, permits to work, incident logs"
      ],
      [
       "Environmental and sustainability",
       "Environmental clearances, emissions and waste reporting",
       "Impact assessments, monitoring data, waste manifests"
      ],
      [
       "Financial and procurement",
       "Public procurement rules, anti-bribery law, donor conditions",
       "Tender records, conflict declarations, audit reports"
      ],
      [
       "Standards and accessibility",
       "Building codes, medical-device standards, accessibility rules",
       "Test reports, conformity certificates"
      ],
      [
       "Internal policy",
       "Architecture standards, records retention, brand rules",
       "Design review sign-offs, policy checklists"
      ]
     ]
    },
    {
     "type": "steps",
     "title": "Confirm compliance requirements",
     "items": [
      {
       "title": "Find the sources",
       "text": "Laws and regulators, contracts, donor or lender agreements, industry standards and internal policies."
      },
      {
       "title": "Consult the specialists",
       "text": "Legal, compliance, security, safety and sustainability teams, early."
      },
      {
       "title": "Classify",
       "text": "Group obligations by category and rate how severe a breach would be."
      },
      {
       "title": "Assign owners",
       "text": "One named owner for each obligation or group of obligations."
      },
      {
       "title": "Map to the work",
       "text": "Link each obligation to deliverables, backlog items, acceptance criteria and tests."
      },
      {
       "title": "Plan the evidence",
       "text": "Decide what proof will show compliance, who produces it and where it is kept."
      }
     ]
    },
    {
     "type": "template",
     "title": "Compliance register",
     "purpose": "Track each compliance obligation from identification to verified evidence.",
     "columns": [
      "Obligation",
      "Source",
      "Category",
      "Applies to",
      "Owner",
      "Evidence",
      "Status"
     ],
     "example": [
      [
       "Customer consent before storing ID photos",
       "Data-protection law; central bank e-KYC guideline",
       "Data privacy",
       "Agent onboarding app",
       "Compliance officer",
       "Consent screen test report; consent log sample",
       "Evidence under review"
      ]
     ],
     "rows": 7
    },
    {
     "type": "table",
     "title": "Threats to compliance",
     "head": [
      "Threat",
      "Example",
      "Method that helps"
     ],
     "rows": [
      [
       "Schedule pressure",
       "Inspections skipped to meet a date",
       "Compliance steps built into gates and the definition of done"
      ],
      [
       "Supplier non-compliance",
       "Subcontractor without valid safety permits",
       "Contract clauses, supplier audits, permit checks"
      ],
      [
       "Unclear ownership",
       "Everyone assumes legal has checked it",
       "Named owners in the compliance register"
      ],
      [
       "Rules change mid-project",
       "New data-localisation rule",
       "Regulatory horizon scanning; change control"
      ],
      [
       "Unapproved tools",
       "Customer data pasted into an unapproved AI tool",
       "Approved-tools list, training, data classification"
      ],
      [
       "Poor records",
       "Evidence scattered in personal inboxes",
       "One evidence repository with version control"
      ]
     ]
    },
    {
     "type": "framework",
     "title": "Methods that support compliance",
     "items": [
      {
       "label": "CBD",
       "title": "Compliance by design",
       "text": "Write obligations into requirements, stories and acceptance criteria from the start."
      },
      {
       "label": "GAT",
       "title": "Gates and checklists",
       "text": "Make compliance evidence a condition for passing gates or releasing."
      },
      {
       "label": "AUT",
       "title": "Automated controls",
       "text": "Security scans, access checks and data-masking that run on every change."
      },
      {
       "label": "TRN",
       "title": "Training",
       "text": "Short, role-specific training for team members and suppliers."
      },
      {
       "label": "AUD",
       "title": "Reviews and audits",
       "text": "Internal reviews before external audits find the gaps."
      },
      {
       "label": "SUP",
       "title": "Supplier controls",
       "text": "Contract clauses, certificates and audit rights."
      }
     ]
    },
    {
     "type": "compare",
     "title": "Consequences of non-compliance",
     "columns": [
      {
       "title": "Legal and financial",
       "items": [
        "Fines and penalties",
        "Contract damages or termination",
        "Loss of licence or funding"
       ]
      },
      {
       "title": "Operational",
       "items": [
        "Stop-work orders",
        "Delayed or blocked go-live",
        "Expensive rework and retesting"
       ]
      },
      {
       "title": "People and reputation",
       "items": [
        "Harm to customers, workers or communities",
        "Loss of trust with regulators and the public",
        "Personal liability for managers"
       ]
      }
     ]
    },
    {
     "type": "callout",
     "kind": "example",
     "title": "Compliance in sprints",
     "text": "A mobile financial services firm in Dhaka was building a new savings feature under central bank rules. Every story touching customer data carried a privacy acceptance criterion, automated checks ran on each build, and the compliance officer joined the sprint review once a month. When the regulator reviewed the feature, the evidence already existed and the approval came without late rework."
    },
    {
     "type": "formula",
     "title": "Measuring compliance",
     "items": [
      {
       "name": "Compliance coverage",
       "expr": "Obligations with verified evidence ÷ applicable obligations × 100",
       "meaning": "How much of the project's compliance duty is proven, not just assumed."
      },
      {
       "name": "Open findings",
       "expr": "Count of audit or review findings not yet closed, by severity",
       "meaning": "Where the project is exposed now."
      },
      {
       "name": "Time to close findings",
       "expr": "Average days from finding to verified fix",
       "meaning": "How quickly the project responds to gaps."
      }
     ]
    },
    {
     "type": "scenario",
     "title": "Postpone the consent screen?",
     "situation": "Two sprints before launch, the product owner proposes moving the customer consent screen to a later release so that a marketing feature can ship on time. The consent screen is required by data-protection law before any customer data is stored. What should the project manager do?",
     "options": [
      {
       "text": "Agree, because the product owner owns backlog priority.",
       "feedback": "Weak. Backlog ordering is the product owner's decision, but legal obligations are not optional and launching without consent would breach the law.",
       "best": false
      },
      {
       "text": "Explain that the consent screen is a compliance obligation that must ship with any data collection, involve the compliance officer, and help the product owner find what else can move.",
       "feedback": "Best. It treats the obligation as non-negotiable, makes the consequences visible and still supports the product owner in re-planning.",
       "best": true
      },
      {
       "text": "Launch without the screen and add a disclaimer to the app store listing.",
       "feedback": "Weak. A disclaimer does not meet the legal duty.",
       "best": false
      },
      {
       "text": "Escalate to the board and pause the release.",
       "feedback": "Premature. The issue can be resolved within the team's authority by re-prioritising other work.",
       "best": false
      }
     ]
    },
    {
     "type": "checklist",
     "title": "Compliance readiness checklist",
     "items": [
      "All compliance sources identified and specialists consulted",
      "Obligations classified and recorded in the compliance register",
      "Each obligation has a named owner",
      "Obligations mapped to deliverables, stories or acceptance criteria",
      "Evidence planned, collected and stored in one place",
      "Suppliers bound by matching contract clauses",
      "Compliance coverage and open findings reported to governance"
     ]
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Compliance",
       "def": "Meeting the laws, regulations, standards, contracts and policies that apply to a project and its result."
      },
      {
       "term": "Compliance obligation",
       "def": "A specific requirement the project must meet, such as obtaining consent or a safety permit."
      },
      {
       "term": "Compliance register",
       "def": "A record of obligations, their sources, owners, evidence and status."
      },
      {
       "term": "Compliance by design",
       "def": "Building obligations into requirements, design and acceptance criteria from the start rather than checking at the end."
      },
      {
       "term": "Non-compliance",
       "def": "Failure to meet an applicable obligation, which can lead to penalties, stoppages or harm."
      },
      {
       "term": "Audit trail",
       "def": "A record that shows who did what, when and why, used as evidence in reviews and audits."
      },
      {
       "term": "Regulatory horizon scanning",
       "def": "Regularly checking for new or changing rules that may affect the project."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "A hospital annex must pass a fire-safety inspection before occupancy. Into which compliance category does this fall?",
       "options": [
        "Health and safety",
        "Internal policy",
        "Financial and procurement",
        "Data privacy"
       ],
       "answer": 0,
       "explain": "Fire codes and occupancy inspections are health and safety obligations."
      },
      {
       "q": "What is the BEST way to make sure compliance obligations are not forgotten in an agile project?",
       "options": [
        "Run a compliance review just before go-live",
        "Ask the compliance team to approve every story",
        "Leave compliance to the vendor",
        "Write obligations into stories, acceptance criteria and the definition of done"
       ],
       "answer": 3,
       "explain": "Compliance by design builds obligations into the work itself, so evidence is produced as the product is built."
      },
      {
       "q": "A subcontractor arrives on site without valid safety permits, and the schedule is tight. What should the project manager do?",
       "options": [
        "Let them start and collect permits later",
        "Stop the unpermitted work and resolve the permits under the contract terms",
        "Report the subcontractor to the regulator immediately",
        "Ask the site team to supervise them closely instead"
       ],
       "answer": 1,
       "explain": "Working without permits is non-compliance with possible harm and stop-work consequences. The work must not proceed until the obligation is met."
      },
      {
       "q": "Out of 40 applicable obligations, 30 have verified evidence. What is the compliance coverage?",
       "options": [
        "30%",
        "40%",
        "75%",
        "133%"
       ],
       "answer": 2,
       "explain": "Coverage = 30 ÷ 40 × 100 = 75%. The remaining 25% is exposure that needs evidence or action."
      },
      {
       "q": "Which is a threat to compliance that an approved-tools list and data classification help prevent?",
       "options": [
        "A delayed hardware shipment",
        "Team members pasting customer data into unapproved AI tools",
        "A change in the sponsor",
        "A slow sprint review"
       ],
       "answer": 1,
       "explain": "Unapproved tools can breach data-protection duties. Clear rules on approved tools and data classes reduce this threat."
      }
     ]
    }
   ]
  },
  {
   "id": "m7-l3",
   "title": "Managing & Controlling Change",
   "subtitle": "Run change control that fits the approach, communicate decisions and keep the plan and documents current",
   "minutes": 28,
   "objectives": [
    "Recognise scope creep and gold plating",
    "Execute integrated change control on predictive work",
    "Absorb change through the backlog on agile work, with clear limits on hybrid projects",
    "Communicate change status, implement approved changes and update documentation"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Change is normal; uncontrolled change is not. Good change control lets the project say yes to the right changes quickly, say no or not now to the rest, and keep everyone working from the same, current picture. Predictive work uses formal change requests against baselines. Agile work absorbs most change through the product backlog. Hybrid projects need both, with clear rules about which path a change takes."
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
     "type": "template",
     "title": "Change log",
     "purpose": "Record every change request from submission to implementation, so that its status is visible to all.",
     "columns": [
      "ID and description",
      "Requested by",
      "Impact (scope, time, cost, risk, value)",
      "Decision, by whom and date",
      "Status communicated to",
      "Documents updated"
     ],
     "example": [
      [
       "CR-014 Add claims-integration interface",
       "Insurance partner via sponsor",
       "+3 weeks, +Tk 18 lakh, new data-sharing risk, enables 12% more insured patients",
       "Approved by CCB, 4 Mar",
       "Requester, team, finance, vendor",
       "Scope baseline, schedule, contract amendment, risk register"
      ]
     ],
     "rows": 7
    },
    {
     "type": "steps",
     "title": "After the decision: communicate, implement, update",
     "items": [
      {
       "title": "Tell the requester and stakeholders",
       "text": "Share the decision and the reason, including rejections and deferrals."
      },
      {
       "title": "Update baselines or the backlog",
       "text": "Revise scope, schedule and cost baselines, or reorder the backlog."
      },
      {
       "title": "Update documents",
       "text": "Plans, registers, contracts, requirements, test cases and training material."
      },
      {
       "title": "Implement and verify",
       "text": "Carry out the change and confirm it was done as approved."
      },
      {
       "title": "Close the request",
       "text": "Record the outcome in the change log."
      }
     ]
    },
    {
     "type": "callout",
     "kind": "definition",
     "title": "Configuration management",
     "text": "**Configuration management** keeps track of the versions of deliverables and their documentation, so that everyone builds, tests and approves the same thing. Version control for code, controlled drawing registers for construction and a single source for requirements are all forms of it."
    },
    {
     "type": "callout",
     "kind": "pro",
     "title": "Make change status visible",
     "text": "Stakeholders worry most about changes they cannot see. Publish the change log or a simple board showing each request as submitted, under analysis, decided or implemented. Fewer people will chase you, and fewer side-door requests will reach the team."
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
     "type": "scenario",
     "title": "The side-door request",
     "situation": "On a predictive warehouse project with an approved scope baseline, a department head asks a developer directly to add a new stock report. The developer estimates two days and is happy to do it. What should the project manager do?",
     "options": [
      {
       "text": "Allow it, because two days is a small change.",
       "feedback": "Weak. Small unapproved changes add up to scope creep and bypass impact analysis.",
       "best": false
      },
      {
       "text": "Thank the department head, log the request, analyse its impact and take it through the agreed change control process.",
       "feedback": "Best. Every change to a baselined scope goes through change control, however small, and the requester sees the status.",
       "best": true
      },
      {
       "text": "Refuse, because the scope is already approved.",
       "feedback": "Weak. Change control allows valuable changes; a flat refusal ignores possible value.",
       "best": false
      },
      {
       "text": "Add the report and update the baseline afterwards.",
       "feedback": "Weak. Updating the baseline after the event defeats the purpose of control.",
       "best": false
      }
     ]
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Scope creep",
       "def": "Uncontrolled expansion of scope without adjusting time, cost or resources and without proper approval."
      },
      {
       "term": "Gold plating",
       "def": "Adding features or quality that were not requested, usually by the team, without approval."
      },
      {
       "term": "Change request",
       "def": "A formal proposal to modify a baseline, deliverable, plan or contract."
      },
      {
       "term": "Change control board (CCB)",
       "def": "A group with authority to review, approve, defer or reject change requests."
      },
      {
       "term": "Integrated change control",
       "def": "Reviewing every change for its combined effect on scope, schedule, cost, quality, risk and benefits before deciding."
      },
      {
       "term": "Configuration management",
       "def": "Controlling versions of deliverables and their documentation so that everyone works from the same approved version."
      },
      {
       "term": "Change log",
       "def": "A record of change requests, their impacts, decisions and status."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "A developer adds an extra dashboard nobody requested. This is:",
       "options": [
        "Gold plating",
        "Change control",
        "Scope creep",
        "Progressive elaboration"
       ],
       "answer": 0,
       "explain": "Gold plating is the team adding unrequested extras; scope creep usually comes from unmanaged stakeholder requests."
      },
      {
       "q": "On an agile team, a stakeholder asks for a new feature mid-project. What normally happens?",
       "options": [
        "It is added to the current sprint immediately by the team",
        "The product owner adds it to the backlog and orders it by value",
        "It must be rejected because the scope is already agreed",
        "The PM rewrites the charter and asks the sponsor to re-approve it"
       ],
       "answer": 1,
       "explain": "Backlog refinement absorbs change: the product owner orders new items by value while the current iteration's goal is protected."
      },
      {
       "q": "A change request for a new interface has been approved by the change control board. What should happen NEXT?",
       "options": [
        "Start building the interface immediately without updating documents",
        "Wait for the sponsor to inform the team",
        "Communicate the decision, update baselines and documents, then implement and verify the change",
        "Ask the requester to submit the request again in writing"
       ],
       "answer": 2,
       "explain": "Approved changes are communicated, reflected in baselines and documentation, implemented and verified."
      },
      {
       "q": "Stakeholders keep asking the team directly about the status of their change requests. Which practice BEST helps?",
       "options": [
        "Publishing the change log with the status of each request",
        "Asking stakeholders to stop requesting changes",
        "Holding a weekly meeting for each requester",
        "Approving all requests to reduce follow-ups"
       ],
       "answer": 0,
       "explain": "Visible change status reduces chasing and side-door requests while keeping the process transparent."
      },
      {
       "q": "On a hybrid project, the product owner may reorder the app backlog within its budget and milestone. A requested change would move the milestone by four weeks. Which path should it take?",
       "options": [
        "The product owner decides, as with any backlog change",
        "The team decides during sprint planning",
        "No path, because milestones cannot change",
        "Formal change control, because it affects an agreed milestone"
       ],
       "answer": 3,
       "explain": "Changes within the agreed boundaries are handled in the backlog; anything that moves a milestone, budget or contract goes to formal change control."
      }
     ]
    }
   ]
  },
  {
   "id": "m7-l4",
   "title": "Identifying & Analysing Risk",
   "subtitle": "Name uncertainty precisely, then rank it quickly and quantify the risks that matter",
   "minutes": 32,
   "objectives": [
    "Distinguish risks, issues and opportunities using a single clear test",
    "Write cause–event–effect risk statements and widen identification with a pre-mortem and RBS",
    "Prioritise risks with defined probability and impact scales",
    "Calculate expected monetary value and read Monte Carlo outputs"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Every project is a bet on the future. **Risk management**, part of the Govern stage of the ZPMP Professional Loop, is the discipline of watching that bet, adjusting it and telling the truth about it. It starts with identification and analysis: the uncertain events, threats and opportunities, that could push outcomes off course, ranked so attention goes where it matters."
    },
    {
     "type": "framework",
     "items": [
      {
       "label": "R",
       "title": "Risk (threat)",
       "text": "An **uncertain** future event that would hurt at least one objective if it happened. It has a probability below 100%. You manage it *before* it happens."
      },
      {
       "label": "O",
       "title": "Opportunity",
       "text": "An uncertain future event that would **help** an objective — finish earlier, cost less, deliver more value. Positive risk deserves the same attention as negative risk."
      },
      {
       "label": "I",
       "title": "Issue",
       "text": "Something that **has already happened** or is certain and is affecting the project now. You resolve it, you do not ‘mitigate’ it."
      },
      {
       "label": "A",
       "title": "Assumption",
       "text": "Something treated as true for planning without proof. Every assumption hides a risk: ‘what if this is false?’"
      }
     ],
     "title": "Risk, issue or opportunity? The ZPMP time test"
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "Ask: **‘Has it happened yet?’** If no and it would hurt — risk. If no and it would help — opportunity. If yes — issue. A risk that materialises moves from the risk register to the issue log, and the risk entry is closed with a note.",
     "title": "One question sorts them all"
    },
    {
     "type": "formula",
     "items": [
      {
       "name": "Cause–event–effect",
       "expr": "Because of <cause>, <event> may occur, which would lead to <effect on objective>.",
       "meaning": "Forces precision. The cause is a fact today; the event is uncertain; the effect names cost, time, scope, quality or benefit."
      },
      {
       "name": "Example",
       "expr": "Because our only certified network engineer is due for parental leave in March, cut-over testing may slip, which would delay go-live by 3–4 weeks.",
       "meaning": "Now the team can see who owns it, what would trigger it and which responses make sense."
      }
     ],
     "title": "A well-formed risk statement"
    },
    {
     "type": "framework",
     "items": [
      {
       "label": "PM",
       "title": "Pre-mortem",
       "text": "Imagine it is a year from now and the project has failed badly. Each person silently writes why. Then share and cluster. Hindsight imagined in advance unlocks honest concerns people would not otherwise voice."
      },
      {
       "label": "RBS",
       "title": "Risk breakdown structure",
       "text": "A hierarchy of risk sources — e.g. Technical, External, Organisational, Project management — each split into sub-categories. Walk through it to spot blind areas."
      },
      {
       "label": "AL",
       "title": "Assumptions & constraints log",
       "text": "Review every assumption and ask what happens if it is wrong. Track who validates it and by when."
      },
      {
       "label": "SH",
       "title": "Stakeholder & expert interviews",
       "text": "Operations staff, suppliers and finance see risks the core team cannot. Ask: ‘What usually goes wrong with projects like this?’"
      },
      {
       "label": "DR",
       "title": "Document & data review",
       "text": "Lessons-learned registers, audit findings, past schedules, contracts and incident logs from similar work."
      },
      {
       "label": "SW",
       "title": "SWOT & prompt lists",
       "text": "Strengths, weaknesses, opportunities, threats — or checklists such as PESTLE — to cover the external environment."
      }
     ],
     "title": "Ways to find risks (use more than one)"
    },
    {
     "type": "table",
     "head": [
      "Level 1",
      "Level 2 examples",
      "Typical questions"
     ],
     "rows": [
      [
       "Technical",
       "Requirements, technology maturity, integration, performance, data migration",
       "Have we built this before? How many interfaces?"
      ],
      [
       "External",
       "Suppliers, regulation, market, weather, currency, politics",
       "What could change outside our control?"
      ],
      [
       "Organisational",
       "Funding, priorities, shared resources, other projects",
       "Could our people or budget be pulled away?"
      ],
      [
       "Project management",
       "Estimating, planning, communication, control",
       "How confident are we in our estimates?"
      ],
      [
       "People & change",
       "Adoption, skills, morale, key-person dependency",
       "Will users actually change how they work?"
      ]
     ],
     "title": "A starter risk breakdown structure"
    },
    {
     "type": "text",
     "text": "Once you have a list of risks, you cannot treat them all equally. Analysis answers two questions: **which risks deserve attention first**, and **how much exposure does the project carry overall?** Qualitative analysis is fast and covers every risk. Quantitative analysis is slower and is reserved for the risks and decisions that drive outcomes."
    },
    {
     "type": "compare",
     "columns": [
      {
       "title": "Qualitative",
       "items": [
        "Ranks individual risks using scales (e.g. 1–5)",
        "Fast, cheap, done on every project",
        "Output: prioritised risk list, heat map",
        "Weakness: subjective unless scales are defined"
       ]
      },
      {
       "title": "Quantitative",
       "items": [
        "Models combined effect of risks on cost/schedule",
        "Needs data, tools and skill",
        "Output: probability of hitting dates/budgets, EMV, sensitivity",
        "Use on large, complex or high-stakes projects"
       ]
      }
     ],
     "title": "Qualitative vs quantitative analysis"
    },
    {
     "type": "table",
     "head": [
      "Score",
      "Probability",
      "Schedule impact",
      "Cost impact"
     ],
     "rows": [
      [
       "1 Very low",
       "< 10%",
       "< 1 week",
       "< 1% of budget"
      ],
      [
       "2 Low",
       "10–30%",
       "1–2 weeks",
       "1–3%"
      ],
      [
       "3 Medium",
       "31–50%",
       "2–4 weeks",
       "3–5%"
      ],
      [
       "4 High",
       "51–70%",
       "1–2 months",
       "5–10%"
      ],
      [
       "5 Very high",
       "> 70%",
       "> 2 months",
       "> 10%"
      ]
     ],
     "title": "Define the scales before you score"
    },
    {
     "type": "text",
     "text": "Multiply probability by impact to get a risk score (1–25). Plot each risk on a 5×5 grid: the top-right zone (scores of roughly 15+) gets immediate, owned responses; the middle zone gets watched; the bottom-left zone may be accepted and monitored."
    },
    {
     "type": "formula",
     "items": [
      {
       "name": "EMV of one risk",
       "expr": "EMV = Probability × Impact",
       "meaning": "Threats carry negative impact, opportunities positive. A 30% chance of a −50,000 loss has EMV −15,000."
      },
      {
       "name": "Project risk exposure",
       "expr": "Σ EMV of all quantified risks",
       "meaning": "Netting threats and opportunities gives a rational starting point for the contingency reserve."
      },
      {
       "name": "Decision node",
       "expr": "Choose the branch with the best EMV",
       "meaning": "In a decision tree, each option’s EMV = its direct cost + Σ (probability × outcome) of what follows."
      }
     ],
     "title": "Expected monetary value"
    },
    {
     "type": "case",
     "title": "Chattogram port: should we rehearse the cut-over?",
     "context": "A container terminal at Chattogram is replacing its gate and yard-planning software. The vendor proposes an optional full cut-over rehearsal on a weekend, costing **USD 40,000**. Without a rehearsal, the team estimates a **35%** chance that go-live fails and the old system must be restored, causing berth delays and penalties of about **USD 300,000**. With a rehearsal, the chance of failure drops to **10%** (the same USD 300,000 impact if it happens).",
     "questions": [
      "Draw the decision tree and calculate the EMV of each option.",
      "Which option should the project choose, and by how much does it improve expected cost?",
      "What non-monetary factors should the sponsor also weigh?"
     ],
     "answer": "Rehearse: −40,000 + (0.10 × −300,000) = **−70,000**. No rehearsal: 0 + (0.35 × −300,000) = **−105,000**. Rehearsing is better by **USD 35,000** in expected value, so choose the rehearsal. Beyond money: reputation with shipping lines, safety in the yard, staff confidence with the new system, and the fact that the rehearsal also trains people. EMV supports the decision; it does not replace judgement, especially for low-probability, catastrophic outcomes."
    },
    {
     "type": "framework",
     "items": [
      {
       "label": "S",
       "title": "S-curve",
       "text": "Cumulative probability of finishing by each date (or within each cost). Read across from 80% to find the P80 date."
      },
      {
       "label": "P50",
       "title": "P50 / P80",
       "text": "P50: half of simulated outcomes finish by this date. P80: four in five do. Commit externally to a higher-confidence value; manage internally to a stretch value."
      },
      {
       "label": "TOR",
       "title": "Tornado chart",
       "text": "Ranks which inputs most influence the result. Spend risk effort on the longest bars."
      },
      {
       "label": "CI",
       "title": "Criticality index",
       "text": "How often an activity appears on the critical path across simulations — a task at 70% deserves more attention than its single-point float suggests."
      }
     ],
     "title": "Reading a Monte Carlo output"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Risk",
       "def": "An uncertain event or condition that, if it occurs, affects at least one project objective — negatively (threat) or positively (opportunity)."
      },
      {
       "term": "Pre-mortem",
       "def": "A workshop in which the team imagines the project has failed and works backwards to identify the reasons, surfacing risks early."
      },
      {
       "term": "Risk breakdown structure (RBS)",
       "def": "A hierarchical grouping of risk sources used as a prompt to identify risks systematically."
      },
      {
       "term": "Expected monetary value (EMV)",
       "def": "Probability multiplied by monetary impact; summed across risks or branches to compare options and size reserves."
      },
      {
       "term": "Opportunity",
       "def": "An uncertain event that would benefit at least one project objective if it happened."
      },
      {
       "term": "Risk score",
       "def": "Probability score multiplied by impact score, used to rank risks on a heat map."
      },
      {
       "term": "Probability–impact matrix",
       "def": "A grid that combines probability and impact scores to rank risks."
      },
      {
       "term": "P80",
       "def": "The value, such as a date or cost, that 80% of simulated outcomes meet or beat."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "A key supplier has just informed you their factory is closed for two weeks. How should this be recorded?",
       "options": [
        "As an issue in the issue log",
        "As a new risk with high probability",
        "As an assumption to validate",
        "As an opportunity to renegotiate"
       ],
       "answer": 0,
       "explain": "It has already happened, so it is an issue. Risks are uncertain future events; this one is certain and current."
      },
      {
       "q": "Which risk statement is best formed?",
       "options": [
        "Vendor risk: the vendor might be poor at support, which could cause problems for users",
        "There is a risk of delays, cost overruns and quality problems across the whole project",
        "The vendor has no local office and is new to us, so the support contract is at risk",
        "With no local vendor office, fixes may take over 48 hours and breach the 24-hour SLA"
       ],
       "answer": 3,
       "explain": "It names a present cause, an uncertain event and a specific effect on an objective. The others are vague, or leave out the cause, the event or a measurable effect."
      },
      {
       "q": "A risk has a 40% probability and an impact of −80,000. Its EMV is…",
       "options": [
        "−32,000",
        "−48,000",
        "−80,000",
        "+32,000"
       ],
       "answer": 0,
       "explain": "0.40 × −80,000 = −32,000. Threats carry negative values."
      },
      {
       "q": "Which is the strongest reason to define probability and impact scales before scoring?",
       "options": [
        "It makes the heat map clearer and more colourful",
        "It is required by law in most regulated industries and sectors",
        "It reduces subjective, inconsistent scoring between people",
        "It removes the need for later quantitative risk analysis"
       ],
       "answer": 2,
       "explain": "Shared definitions turn opinions into comparable scores."
      },
      {
       "q": "A Monte Carlo S-curve shows the P80 finish date as 20 March. This means…",
       "options": [
        "the project is certain to finish on 20 March as planned",
        "80% of simulated outcomes finished on or before 20 March",
        "there is an 80% chance that the project finishes after 20 March",
        "20 March is the end date of the critical path schedule"
       ],
       "answer": 1,
       "explain": "P80 is the value that 80% of iterations meet or beat."
      },
      {
       "q": "A new regulation might allow your team to reuse an approved design, saving six weeks. This is…",
       "options": [
        "an issue",
        "a constraint",
        "a residual risk",
        "an opportunity"
       ],
       "answer": 3,
       "explain": "It is uncertain and would benefit the schedule — a positive risk, or opportunity."
      }
     ]
    }
   ]
  },
  {
   "id": "m7-l5",
   "title": "Responding to Risk & Communicating It",
   "subtitle": "Plan risk management, choose and own responses, cover security, AI and sustainability risks and report risk clearly",
   "minutes": 30,
   "objectives": [
    "Develop a risk management plan with appetite and thresholds",
    "Select response strategies for threats and opportunities and assign owners and triggers",
    "Include security, AI and sustainability risks in the register",
    "Communicate the status and impact of risks to different audiences"
   ],
   "blocks": [
    {
     "type": "steps",
     "title": "Develop a risk management plan",
     "items": [
      {
       "title": "Method",
       "text": "How risks will be identified, analysed and reviewed, and how often."
      },
      {
       "title": "Roles",
       "text": "Who owns the process, who owns individual risks, who approves responses."
      },
      {
       "title": "Scales",
       "text": "Agreed definitions of probability and impact for this project."
      },
      {
       "title": "Appetite and thresholds",
       "text": "How much risk the organisation will accept and the scores that trigger escalation."
      },
      {
       "title": "Budget and reserves",
       "text": "How contingency is sized and released."
      },
      {
       "title": "Reporting",
       "text": "What risk information goes to whom, and when."
      }
     ]
    },
    {
     "type": "callout",
     "kind": "definition",
     "title": "Risk appetite and risk threshold",
     "text": "**Risk appetite** is how much uncertainty an organisation is willing to accept in pursuit of its goals; a hospital has little appetite for patient-safety risk but may accept more on a new booking app. A **risk threshold** turns appetite into a number, for example 'any risk scoring 15 or more, or any data-breach risk, goes to the steering committee'."
    },
    {
     "type": "text",
     "text": "Analysis tells you which risks matter. Response planning decides **what you will actually do** — and who will do it. A response without an owner, a budget and a date is just a hope."
    },
    {
     "type": "compare",
     "columns": [
      {
       "title": "For threats",
       "items": [
        "**Escalate** – outside the project’s authority; hand to the right level and confirm they accept it",
        "**Avoid** – change the plan to remove the threat (e.g. drop a risky feature)",
        "**Transfer** – shift the financial impact to a third party (insurance, fixed-price contract, warranty)",
        "**Mitigate** – reduce probability and/or impact (prototype, extra testing, second supplier)",
        "**Accept** – active (set aside contingency) or passive (deal with it if it happens)"
       ]
      },
      {
       "title": "For opportunities",
       "items": [
        "**Escalate** – beyond project authority; pass to programme/portfolio",
        "**Exploit** – act to make it certain (assign your best people to finish early)",
        "**Share** – partner with a party better placed to capture it (joint venture, gain-share)",
        "**Enhance** – raise probability and/or impact (add resources to a promising path)",
        "**Accept** – take the benefit if it comes, without active pursuit"
       ]
      }
     ],
     "title": "Response strategies"
    },
    {
     "type": "callout",
     "kind": "definition",
     "text": "Buying insurance or signing a fixed-price contract shifts the financial consequence, but the event can still delay your project and hurt your reputation. Transfer almost always leaves residual risk you must still watch.",
     "title": "Transfer moves the money, not the risk"
    },
    {
     "type": "framework",
     "items": [
      {
       "label": "OWN",
       "title": "Risk owner",
       "text": "One named person who monitors the risk and makes sure the response happens. Not a department, not ‘the team’."
      },
      {
       "label": "TRG",
       "title": "Trigger",
       "text": "An observable warning sign that the risk is about to occur or has occurred — e.g. ‘supplier misses the second milestone’."
      },
      {
       "label": "ACT",
       "title": "Response actions",
       "text": "Specific tasks, with dates and cost, added to the schedule and budget."
      },
      {
       "label": "RES",
       "title": "Residual risk",
       "text": "The exposure that remains after the response. If it is still above tolerance, plan more."
      },
      {
       "label": "SEC",
       "title": "Secondary risk",
       "text": "A new risk created by the response itself — e.g. a second supplier introduces integration risk."
      }
     ],
     "title": "Every response needs these five parts"
    },
    {
     "type": "callout",
     "kind": "pro",
     "text": "For high-impact risks, prepare a **fallback plan** (‘Plan B’) to use if the primary response fails, and decide in advance what trigger activates it. Decisions made calmly beforehand are better than decisions made in a crisis.",
     "title": "Fallback plans"
    },
    {
     "type": "template",
     "title": "Risk register",
     "purpose": "Track every identified risk from first sighting to closure. Review the top risks at every status meeting.",
     "columns": [
      "ID / statement (cause–event–effect)",
      "P × I = score",
      "Owner",
      "Trigger",
      "Strategy & actions",
      "Residual / secondary",
      "Status"
     ],
     "example": [
      [
       "R07 Because only one engineer holds the PLC licence, the cut-over may slip if he is unavailable, delaying go-live 3 weeks",
       "3 × 4 = 12",
       "Farhana (ops lead)",
       "Engineer leave request or illness",
       "Mitigate: certify a second engineer by 15 May (BDT 85k)",
       "Residual 1 × 4 = 4; secondary: training pulls engineer off build for 1 week",
       "Open – action on track"
      ]
     ],
     "rows": 8
    },
    {
     "type": "callout",
     "kind": "warning",
     "title": "Security and sustainability risks belong in the register",
     "text": "Poor IT security is a project risk, not only an IT department matter: weak access control on a test environment holding real customer data, or ransomware on the project's file share. Sustainability risks belong there too: flooding at a site during the monsoon, a supplier found using child labour, or an environmental clearance withdrawn. Give them owners, triggers and responses like any other risk."
    },
    {
     "type": "framework",
     "items": [
      {
       "label": "DAT",
       "title": "Data",
       "text": "Not enough, poor quality, unrepresentative or legally restricted data — often discovered late."
      },
      {
       "label": "PRF",
       "title": "Performance uncertainty",
       "text": "You cannot promise accuracy upfront; plan experiments, success thresholds and stop/go decisions."
      },
      {
       "label": "BIA",
       "title": "Bias & fairness",
       "text": "Models can reproduce historic discrimination, e.g. in credit scoring or hiring."
      },
      {
       "label": "DRF",
       "title": "Drift",
       "text": "Real-world data changes over time and accuracy decays; monitoring and retraining must be budgeted."
      },
      {
       "label": "EXP",
       "title": "Explainability",
       "text": "Regulators and users may need to know why a decision was made."
      },
      {
       "label": "SEC",
       "title": "Security & misuse",
       "text": "Prompt injection, data leakage and misuse of generated content in gen-AI products."
      },
      {
       "label": "REG",
       "title": "Regulation",
       "text": "Risk-based laws such as the EU AI Act and sector rules impose duties depending on use; check obligations in every market served."
      }
     ],
     "title": "Distinctive risks of AI projects"
    },
    {
     "type": "table",
     "title": "Communicating risk status",
     "head": [
      "Audience",
      "What they need",
      "Format"
     ],
     "rows": [
      [
       "Steering committee",
       "Top risks, trend, exposure against reserves, decisions needed",
       "One page with a heat map and a short narrative"
      ],
      [
       "Sponsor",
       "Risks near threshold, responses that need support",
       "Regular one-to-one briefing"
      ],
      [
       "Team",
       "Risks affecting this sprint or phase, triggers to watch",
       "Risk board or review at planning"
      ],
      [
       "Suppliers and partners",
       "Shared risks and joint responses",
       "Joint risk reviews"
      ]
     ]
    },
    {
     "type": "scenario",
     "situation": "Your risk register lists ‘key subcontractor insolvency’ with a fallback plan to activate a pre-qualified alternative. Today a news report says the subcontractor has entered administration. What should the project manager do FIRST?",
     "options": [
      {
       "text": "Call a team meeting to brainstorm what to do.",
       "feedback": "The thinking has already been done. Brainstorming now wastes the advantage of the plan.",
       "best": false
      },
      {
       "text": "Ask the sponsor for permission to look for a new subcontractor.",
       "feedback": "If the fallback is already approved within your authority, you do not need fresh permission — act, then inform.",
       "best": false
      },
      {
       "text": "Implement the agreed fallback plan and update the issue log and risk register.",
       "feedback": "Correct. The trigger has occurred; execute the pre-planned response, record the new issue and close or update the risk.",
       "best": true
      },
      {
       "text": "Wait to confirm the news through official channels before doing anything.",
       "feedback": "Verifying quickly is sensible, but waiting passively loses time. Start the fallback while confirming.",
       "best": false
      }
     ],
     "title": "The triggered risk"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Residual risk",
       "def": "The risk that remains after responses have been implemented."
      },
      {
       "term": "Secondary risk",
       "def": "A new risk that arises as a direct result of implementing a risk response."
      },
      {
       "term": "Risk management plan",
       "def": "The part of the project plan that defines how risks will be identified, analysed, responded to, monitored and reported."
      },
      {
       "term": "Risk appetite",
       "def": "The amount of uncertainty an organisation is willing to accept in pursuit of its objectives."
      },
      {
       "term": "Risk threshold",
       "def": "A measurable level of risk exposure above which a risk must be escalated or treated."
      },
      {
       "term": "Risk owner",
       "def": "The one named person who monitors a risk and makes sure its response is carried out."
      },
      {
       "term": "Trigger",
       "def": "An observable warning sign that a risk is about to occur or has begun to occur."
      },
      {
       "term": "Fallback plan",
       "def": "A prepared plan B to use if the primary risk response fails."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "A team buys an insurance policy covering equipment damage during shipment. Which strategy is this?",
       "options": [
        "Transfer",
        "Avoid",
        "Mitigate",
        "Exploit"
       ],
       "answer": 0,
       "explain": "Insurance shifts the financial impact to a third party: transfer."
      },
      {
       "q": "To make sure a likely early-finish opportunity actually happens, the PM assigns the most experienced engineers to the task. This is…",
       "options": [
        "Enhance",
        "Exploit",
        "Accept",
        "Share"
       ],
       "answer": 1,
       "explain": "Exploit aims to make the opportunity certain. Enhance would only increase its likelihood or size."
      },
      {
       "q": "A response to one risk creates a new integration risk. The new risk is called…",
       "options": [
        "residual risk",
        "an emerging issue",
        "a trigger",
        "secondary risk"
       ],
       "answer": 3,
       "explain": "A risk caused by a response is a secondary risk."
      },
      {
       "q": "A threat is outside the project’s authority but within the programme’s. What should the PM do?",
       "options": [
        "Accept it passively and note it in the register",
        "Ignore it, as it is outside the project’s authority",
        "Escalate it to the programme manager and confirm ownership",
        "Avoid it by recommending that the project is cancelled"
       ],
       "answer": 2,
       "explain": "Escalation is correct when the response belongs at a higher level; the PM confirms acceptance and records it."
      },
      {
       "q": "A test environment holds copies of real customer records with weak access controls. How should the project treat this?",
       "options": [
        "As an IT department matter outside the project's scope",
        "As acceptable, since it is only a test environment",
        "As a project risk with an owner and a response, such as masking the data",
        "As an issue to raise only if a breach occurs"
       ],
       "answer": 2,
       "explain": "Security weaknesses in project environments are project risks; they need an owner and a response before they become issues."
      }
     ]
    }
   ]
  }
 ]
});
TRACK.modules.push({
 "id": "m8",
 "order": 8,
 "code": "Adapt",
 "title": "Business Environment II: Impediments, Improvement, Change & the Outside World",
 "subtitle": "Business Environment · Tasks 4, 6, 7 and 8 (impediments and issues, continuous improvement, organisational change, external environment), plus capstone and exam readiness",
 "outcomes": [
  "Remove impediments and resolve issues with the right interventions",
  "Use lessons learned and continuous improvement to update process assets",
  "Assess culture and support organisational change",
  "Evaluate external changes, including regulation, markets, AI and sustainability",
  "Integrate the whole loop in a capstone and prepare for situational questions"
 ],
 "lessons": [
  {
   "id": "m8-l1",
   "title": "Removing Impediments & Managing Issues",
   "subtitle": "Spot what blocks the team, choose the right intervention and resolve issues with the people who can fix them",
   "minutes": 28,
   "objectives": [
    "Distinguish impediments, issues and risks",
    "Evaluate, prioritise and make impediments visible",
    "Choose an intervention strategy and escalate with options",
    "Run an issue log and collaborate with stakeholders on resolution"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Teams lose more time to waiting than to hard work: waiting for access, decisions, environments, approvals or another team. An **impediment** is anything that slows or blocks the team. An **issue** is a current problem that is already affecting a project objective. Removing impediments and resolving issues quickly is one of the most visible ways a project manager adds value, in agile and predictive work alike."
    },
    {
     "type": "compare",
     "title": "Impediment, issue or risk?",
     "columns": [
      {
       "title": "Impediment",
       "items": [
        "Something blocking or slowing the team now",
        "Often small and frequent",
        "Raised at stand-ups and on the board",
        "Example: no access to the test server"
       ]
      },
      {
       "title": "Issue",
       "items": [
        "A current problem affecting scope, time, cost, quality or benefits",
        "Recorded in the issue log with an owner",
        "Example: customs is holding the imported lifts"
       ]
      },
      {
       "title": "Risk",
       "items": [
        "An uncertain future event",
        "Recorded in the risk register",
        "Becomes an issue when it happens",
        "Example: customs might hold the lifts"
       ]
      }
     ]
    },
    {
     "type": "flow",
     "title": "When a risk becomes an issue",
     "items": [
      {
       "label": "Risk in register",
       "text": "Owner watches the trigger"
      },
      {
       "label": "Trigger observed",
       "text": "Warning sign appears"
      },
      {
       "label": "Event occurs",
       "text": "It is now an issue"
      },
      {
       "label": "Move to issue log",
       "text": "Activate the planned response"
      },
      {
       "label": "Close the risk entry",
       "text": "Note what happened"
      }
     ]
    },
    {
     "type": "steps",
     "title": "Evaluate and prioritise impediments",
     "items": [
      {
       "title": "Impact",
       "text": "Which sprint goal, milestone or critical path does it threaten?"
      },
      {
       "title": "Reach",
       "text": "How many people or items are blocked?"
      },
      {
       "title": "Age",
       "text": "How long has it been open? Old blockers signal a system problem."
      },
      {
       "title": "Resolver",
       "text": "Who can actually remove it: the team, the PM, another team, a manager?"
      },
      {
       "title": "Priority",
       "text": "Highlight the highest-impact blockers at the top of the board and in reports."
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
     "type": "framework",
     "title": "Intervention strategies",
     "items": [
      {
       "label": "FIX",
       "title": "Remove it",
       "text": "Resolve directly, for example by arranging access or making a decision within your authority."
      },
      {
       "label": "WRK",
       "title": "Work around",
       "text": "Find a temporary path while the root cause is fixed."
      },
      {
       "label": "NEG",
       "title": "Negotiate",
       "text": "Agree priorities or timing with the other team or manager involved."
      },
      {
       "label": "ESC",
       "title": "Escalate",
       "text": "Take it to the person with authority, with facts and options."
      },
      {
       "label": "PRV",
       "title": "Prevent",
       "text": "Change the process so the same blocker does not return."
      },
      {
       "label": "RPL",
       "title": "Re-plan",
       "text": "Accept the delay and adjust the plan openly if it cannot be removed."
      }
     ]
    },
    {
     "type": "callout",
     "kind": "pro",
     "title": "Make blockers visible and keep reassessing",
     "text": "Mark blocked items on the board, show how many days each has been blocked and review them every day. Ask at each stand-up whether yesterday's interventions worked. A blocker that is still open after its target date needs a different strategy, not the same reminder again."
    },
    {
     "type": "flow",
     "items": [
      {
       "label": "Log",
       "text": "Describe impact, date raised, who raised it"
      },
      {
       "label": "Assess",
       "text": "Severity, urgency, objectives affected"
      },
      {
       "label": "Assign",
       "text": "One owner and a target resolution date"
      },
      {
       "label": "Resolve or escalate",
       "text": "Within tolerance: act. Beyond tolerance: escalate with options"
      },
      {
       "label": "Close & learn",
       "text": "Record the fix and feed lessons learned"
      }
     ],
     "title": "Issue lifecycle"
    },
    {
     "type": "table",
     "head": [
      "Escalation element",
      "What to include"
     ],
     "rows": [
      [
       "What happened",
       "One-sentence description and when it was discovered"
      ],
      [
       "Impact",
       "Effect on scope, schedule, cost, quality, benefits — with numbers"
      ],
      [
       "Tolerance",
       "Which agreed threshold it breaches (e.g. > 2 weeks or > 5% cost)"
      ],
      [
       "Options",
       "2–3 realistic options with trade-offs"
      ],
      [
       "Recommendation",
       "Your preferred option and why"
      ],
      [
       "Decision needed by",
       "The date after which options close"
      ]
     ],
     "title": "Escalate with options, not just problems"
    },
    {
     "type": "callout",
     "kind": "example",
     "title": "Lifts held at the port",
     "text": "On a predictive hospital-construction project in Chattogram, imported lifts were held at customs over a documentation error, threatening the critical path. The PM logged the issue, gave it one owner, and within a day brought the sponsor three options: pay for expedited clearance through an agent, re-sequence interior works to use the float elsewhere, or accept a two-week slip. The sponsor chose the first two together, and the milestone held."
    },
    {
     "type": "template",
     "title": "Impediment and issue log",
     "purpose": "Track every blocker and issue to resolution, with one owner each.",
     "columns": [
      "ID and description",
      "Type (impediment or issue)",
      "Impact",
      "Owner",
      "Intervention",
      "Raised and target dates",
      "Status"
     ],
     "example": [
      [
       "I-07 Test environment not available",
       "Impediment",
       "Blocks 4 stories; sprint goal at risk",
       "PM",
       "Escalated to infrastructure lead with options",
       "Raised 3 May; target 6 May",
       "Open, day 3"
      ]
     ],
     "rows": 7
    },
    {
     "type": "scenario",
     "title": "Three days without a test environment",
     "situation": "An agile team has been waiting three days for a test environment from the infrastructure team. The Scrum Master has asked twice by message. Four stories are blocked and the sprint goal is at risk. What should the project manager do?",
     "options": [
      {
       "text": "Wait, since the infrastructure team knows about the request.",
       "feedback": "Weak. The impediment is ageing and already threatens the goal; waiting changes nothing.",
       "best": false
      },
      {
       "text": "Meet the infrastructure lead with the impact data, agree a date or a temporary environment, and help the team pull other ready work meanwhile.",
       "feedback": "Best. It escalates with facts and options to the person who can act, and limits the damage while the blocker is removed.",
       "best": true
      },
      {
       "text": "Ask the developers to build their own environment on personal cloud accounts.",
       "feedback": "Weak. It may breach security and data rules and creates a hidden, unsupported environment.",
       "best": false
      },
      {
       "text": "Report the infrastructure team to the sponsor in the next steering meeting.",
       "feedback": "Weak. It is slow and adversarial; direct collaboration should come first.",
       "best": false
      }
     ]
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Impediment",
       "def": "Anything that slows or blocks the team's progress."
      },
      {
       "term": "Issue",
       "def": "A current problem or condition that is affecting a project objective and needs resolution."
      },
      {
       "term": "Issue log",
       "def": "A record of issues with their impact, owner, actions, target dates and status."
      },
      {
       "term": "Blocker age",
       "def": "How long an impediment has remained unresolved; a rising age signals a need for a different intervention."
      },
      {
       "term": "Workaround",
       "def": "A temporary solution that lets work continue while the root cause is fixed."
      },
      {
       "term": "Escalation",
       "def": "Passing an issue to a higher authority, with facts and options, when it is beyond the current level's power to resolve."
      },
      {
       "term": "Impediment board",
       "def": "A visible list or board of current blockers, their owners and ages, reviewed regularly."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
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
       "q": "Which element of an escalation is MOST often missing and most valuable to decision makers?",
       "options": [
        "The project logo and reporting template",
        "A list of everyone who has been informed",
        "The full risk register as an attachment",
        "Realistic options with a recommendation"
       ],
       "answer": 3,
       "explain": "Leaders decide faster and better when given options, trade-offs and a clear recommendation."
      },
      {
       "q": "A risk in the register, 'supplier may deliver servers late', has just happened: the supplier confirms a three-week delay. What should the project manager do?",
       "options": [
        "Leave it in the risk register and raise its probability to 100%",
        "Record it in the issue log, activate the planned response and close the risk entry",
        "Wait to see whether the delay affects the critical path",
        "Ask the supplier to submit a new risk statement"
       ],
       "answer": 1,
       "explain": "When a risk occurs it becomes an issue. Move it to the issue log, apply the planned response and note the outcome against the risk."
      },
      {
       "q": "Which impediment should the team tackle FIRST?",
       "options": [
        "One that has been open for one day and blocks a low-priority item",
        "A request for new monitors for the team room",
        "A minor tooling annoyance raised by one developer",
        "One that blocks three stories needed for the sprint goal"
       ],
       "answer": 3,
       "explain": "Prioritise impediments by impact on goals and how much work they block."
      },
      {
       "q": "A blocker has passed its target date after two reminders to the other team. What does this suggest?",
       "options": [
        "A different intervention, such as escalation with options, is needed",
        "The team should stop raising it",
        "More reminders should be sent",
        "The blocker should be removed from the board"
       ],
       "answer": 0,
       "explain": "Continual reassessment means changing the intervention when the current one is not working."
      }
     ]
    }
   ]
  },
  {
   "id": "m8-l2",
   "title": "Continuous Improvement & Lessons Learned",
   "subtitle": "Turn experience into changed behaviour and keep the organisation's process assets current",
   "minutes": 28,
   "objectives": [
    "Facilitate retrospectives that produce owned improvement actions",
    "Use lessons learned from past and current projects",
    "Apply a simple improvement cycle and measure whether changes work",
    "Update organisational process assets so improvements last"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Most organisations have folders full of lessons learned that nobody reads. The ZPMP view is simple: **a lesson is only learned when behaviour changes**. Until then it is merely a lesson observed."
    },
    {
     "type": "compare",
     "columns": [
      {
       "title": "Retrospective",
       "items": [
        "Frequent — end of each iteration or phase",
        "Owned by the team, about how the team works",
        "Output: 1–3 improvement actions for the next cycle",
        "Learning applied immediately"
       ]
      },
      {
       "title": "Lessons-learned review",
       "items": [
        "At milestones and closure (ideally also during the project)",
        "Broader: process, governance, vendors, stakeholders",
        "Output: register entries and recommendations for the organisation",
        "Learning must travel to other projects"
       ]
      }
     ],
     "title": "Retrospective vs lessons-learned review"
    },
    {
     "type": "framework",
     "items": [
      {
       "label": "SSC",
       "title": "Start / Stop / Continue",
       "text": "Quick and clear; good for new teams."
      },
      {
       "label": "4L",
       "title": "4Ls",
       "text": "Liked, Learned, Lacked, Longed for — balances positives and gaps."
      },
      {
       "label": "SB",
       "title": "Sailboat",
       "text": "Wind (what pushes us), anchors (what holds us back), rocks (risks ahead), island (goal)."
      },
      {
       "label": "TL",
       "title": "Timeline",
       "text": "Plot events and the team’s energy over time; great after long phases or incidents."
      }
     ],
     "title": "Retrospective formats"
    },
    {
     "type": "steps",
     "items": [
      {
       "title": "Set the stage",
       "text": "Remind everyone of the shared assumption: people did their best with what they knew at the time. Check in briefly."
      },
      {
       "title": "Gather data",
       "text": "Use a format to collect facts and feelings silently first."
      },
      {
       "title": "Generate insights",
       "text": "Cluster and ask ‘why?’ to find root causes, not symptoms."
      },
      {
       "title": "Decide actions",
       "text": "Choose at most one to three actions, each with an owner and a date."
      },
      {
       "title": "Close and follow up",
       "text": "Put actions in the backlog; start the next retro by reviewing them."
      }
     ],
     "title": "A retrospective that changes something"
    },
    {
     "type": "template",
     "title": "Retrospective board",
     "purpose": "Capture one retrospective’s output so actions are visible and tracked.",
     "columns": [
      "What went well",
      "What did not",
      "Root cause",
      "Action",
      "Owner",
      "Due / review"
     ],
     "example": [
      [
       "Pairing on data migration scripts",
       "Late test data from the bank",
       "No named contact in client data team",
       "Agree a data contact and a weekly test-data drop",
       "Rina",
       "Next sprint review"
      ]
     ],
     "rows": 6
    },
    {
     "type": "template",
     "title": "Lessons-learned register",
     "purpose": "Record lessons so that they change templates, checklists and decisions on future projects.",
     "columns": [
      "Date / phase",
      "What happened",
      "Impact",
      "Lesson (do this next time)",
      "Action to embed it",
      "Owner",
      "Status"
     ],
     "example": [
      [
       "Build",
       "Integration testing found 60% of defects in the last 2 weeks",
       "3-week delay",
       "Start integration tests from sprint 2 using service stubs",
       "Add to PMO delivery checklist and test strategy template",
       "QA lead",
       "Done – template v2.1"
      ]
     ],
     "rows": 8
    },
    {
     "type": "callout",
     "kind": "pro",
     "text": "Every lesson needs an **embedding action**: change a template, a checklist, a contract clause, a training module or a gate criterion. And at every project kick-off, review the register for similar projects — pull, not just push.",
     "title": "From observed to applied"
    },
    {
     "type": "flow",
     "title": "A simple improvement cycle",
     "items": [
      {
       "label": "Plan",
       "text": "Pick one problem; find its root cause; design a small change"
      },
      {
       "label": "Do",
       "text": "Try it on a small scale"
      },
      {
       "label": "Check",
       "text": "Measure the effect against a baseline"
      },
      {
       "label": "Act",
       "text": "Keep, adapt or drop it; standardise what works"
      }
     ]
    },
    {
     "type": "callout",
     "kind": "insight",
     "title": "Small steps, often",
     "text": "Continuous improvement works best as many small changes rather than rare big programmes, an idea often called **kaizen**. A team that improves one thing every sprint for a year makes twenty-five improvements. Measure each one, so you keep what works and drop what does not."
    },
    {
     "type": "keypoints",
     "title": "Updating organisational process assets",
     "items": [
      "Templates: add the section that was missing on this project",
      "Checklists: add the check that would have caught the problem",
      "Estimating data: record actual durations, costs and velocity for future reference",
      "Risk lists: add new risk categories and triggers that appeared",
      "Contract clauses: strengthen terms that caused disputes",
      "Gate criteria: add the readiness test that was skipped"
     ]
    },
    {
     "type": "steps",
     "title": "Keep the improvement process itself improving",
     "items": [
      {
       "title": "Review the retrospective format",
       "text": "Change it when it stops producing useful actions."
      },
      {
       "title": "Track action completion",
       "text": "Report how many improvement actions were completed and what changed."
      },
      {
       "title": "Share across teams",
       "text": "Use communities of practice and the PMO to spread what works."
      },
      {
       "title": "Retire stale actions",
       "text": "Close actions that no longer matter, so the list stays credible."
      }
     ]
    },
    {
     "type": "scenario",
     "title": "The same problem, sprint after sprint",
     "situation": "For four sprints the team's retrospective has raised 'late requirements changes from the business'. Each time the action is 'remind stakeholders', and nothing changes. What should the project manager do?",
     "options": [
      {
       "text": "Stop recording the item, since nothing can be done.",
       "feedback": "Weak. Dropping a recurring problem tells the team retrospectives are pointless.",
       "best": false
      },
      {
       "text": "Help the team find the root cause, agree one measurable experiment with an owner, such as a weekly refinement session with the business, and check its effect next sprint.",
       "feedback": "Best. A recurring problem needs root-cause analysis and a measurable change, not repeated reminders.",
       "best": true
      },
      {
       "text": "Escalate to the sponsor and ask her to forbid late changes.",
       "feedback": "Premature. The team has not yet tried a real change to its own process.",
       "best": false
      },
      {
       "text": "Extend the sprint length to absorb the changes.",
       "feedback": "Weak. It treats a symptom and slows feedback for everyone.",
       "best": false
      }
     ]
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Retrospective",
       "def": "A regular team meeting to inspect how the team worked and agree concrete improvements for the next cycle."
      },
      {
       "term": "Continuous improvement",
       "def": "An ongoing effort to improve products, services or processes through many small, measured changes."
      },
      {
       "term": "Plan-do-check-act (PDCA)",
       "def": "A four-step improvement cycle: plan a change, try it, check the result, then standardise or adjust."
      },
      {
       "term": "Kaizen",
       "def": "A philosophy of continuous, incremental improvement involving everyone."
      },
      {
       "term": "Lessons-learned register",
       "def": "A record of what happened, its impact and the action taken so the lesson changes future practice."
      },
      {
       "term": "Root cause analysis",
       "def": "Techniques, such as asking 'why?' repeatedly, used to find the underlying cause of a problem."
      },
      {
       "term": "OPA update",
       "def": "Changing an organisational template, checklist, data set or policy so that a lesson is applied on future projects."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which shows that a lesson has been truly learned?",
       "options": [
        "It is stored in the organisation’s archive",
        "A practice has changed and is used on new projects",
        "It was discussed in detail at the closure meeting",
        "The sponsor has read the final report"
       ],
       "answer": 1,
       "explain": "A lesson is learned when it changes behaviour or practice."
      },
      {
       "q": "A retrospective produces 14 improvement ideas. What is the BEST next step?",
       "options": [
        "Assign all 14 ideas to the PM to implement",
        "Email them all to the sponsor for a decision",
        "Pick one to three actions with owners and dates",
        "Wait until the next retrospective to discuss"
       ],
       "answer": 2,
       "explain": "Focused, owned actions are more likely to happen."
      },
      {
       "q": "During closure, the team finds that late involvement of the security team caused a three-week delay. What BEST ensures the lesson is applied?",
       "options": [
        "Record it in the final report",
        "Email it to all project managers",
        "Mention it at the closing party",
        "Update the planning template and gate checklist to require security review in the first phase"
       ],
       "answer": 3,
       "explain": "A lesson is learned when practice changes. Updating the organisation's templates and gate criteria builds it into future projects."
      },
      {
       "q": "A team tries a new code-review rule for two sprints. What should happen NEXT in a plan-do-check-act cycle?",
       "options": [
        "Measure defect rates against the earlier baseline and decide whether to keep, adapt or drop it",
        "Make the rule permanent across the organisation",
        "Try a different rule immediately",
        "Ask the sponsor whether she likes the rule"
       ],
       "answer": 0,
       "explain": "After 'Do' comes 'Check': measure the effect before standardising or abandoning the change."
      },
      {
       "q": "At kick-off of a new hospital booking project, the PMO's register holds lessons from three similar projects. What should the PM do?",
       "options": [
        "Read them only if problems arise",
        "Review them with the team and build relevant actions into the plan and risk register",
        "Archive them, since every project is different",
        "Send them to the sponsor for approval"
       ],
       "answer": 1,
       "explain": "Lessons are valuable when pulled into new projects at the start, not only pushed out at the end of old ones."
      }
     ]
    }
   ]
  },
  {
   "id": "m8-l3",
   "title": "Supporting Organisational Change",
   "subtitle": "Assess the culture, help people adopt the change and respond when the organisation changes around the project",
   "minutes": 30,
   "objectives": [
    "Assess organisational culture and its effect on the project",
    "Apply ADKAR to diagnose where individuals are stuck",
    "Use Kotter's eight steps to plan an organisational change effort",
    "Evaluate the impact of organisational changes on the project and act"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "A new system can go live perfectly and still fail if nobody uses it properly. **Organisational change management (OCM)** is the people side of delivering value: helping individuals and groups move from the current way of working to the new one. Project management delivers the solution; change management makes sure it is **adopted**."
    },
    {
     "type": "table",
     "title": "Assessing organisational culture",
     "head": [
      "Dimension",
      "What to look for",
      "Implication for the project"
     ],
     "rows": [
      [
       "Decision-making",
       "Consensus, top-down or delegated?",
       "How long approvals take; who must be in the room"
      ],
      [
       "Attitude to failure",
       "Are mistakes punished or discussed?",
       "Whether people will report problems early"
      ],
      [
       "Hierarchy",
       "Can juniors challenge seniors?",
       "How to gather honest input"
      ],
      [
       "Pace and stability",
       "Frequent reorganisations or long-stable structures?",
       "Change fatigue and readiness"
      ],
      [
       "History of change",
       "Did past changes succeed or fail?",
       "The level of scepticism to expect"
      ]
     ]
    },
    {
     "type": "framework",
     "items": [
      {
       "label": "A",
       "title": "Awareness",
       "text": "of why the change is needed. ‘Why are we doing this, and why now?’"
      },
      {
       "label": "D",
       "title": "Desire",
       "text": "to support and take part. ‘What is in it for me — and what happens if we do not?’"
      },
      {
       "label": "K",
       "title": "Knowledge",
       "text": "of how to change. Training, guides, examples of the new process."
      },
      {
       "label": "Ab",
       "title": "Ability",
       "text": "to actually perform the new way. Practice, coaching, time, the right tools."
      },
      {
       "label": "R",
       "title": "Reinforcement",
       "text": "to make it stick. Recognition, measurement, removing the old way."
      }
     ],
     "title": "ADKAR: the individual journey"
    },
    {
     "type": "callout",
     "kind": "pro",
     "text": "ADKAR is sequential. If a branch manager lacks **desire**, more training (knowledge) will not help. Survey or interview, find the earliest element that is weak, and fix that first.",
     "title": "Find the first barrier"
    },
    {
     "type": "text",
     "text": "ADKAR focuses on individuals. **John Kotter’s** eight-step model focuses on leading change across an organisation. In our own words, the steps are:"
    },
    {
     "type": "steps",
     "items": [
      {
       "title": "Create urgency",
       "text": "Help people see, with evidence, why the status quo is risky."
      },
      {
       "title": "Build a guiding coalition",
       "text": "Assemble influential, credible leaders from across the organisation."
      },
      {
       "title": "Form a vision and strategy",
       "text": "A simple picture of the future and how to get there."
      },
      {
       "title": "Communicate and involve",
       "text": "Share the vision constantly through many channels; recruit volunteers."
      },
      {
       "title": "Remove barriers",
       "text": "Change structures, systems and processes that block the new way."
      },
      {
       "title": "Generate short-term wins",
       "text": "Plan visible, early successes and celebrate them."
      },
      {
       "title": "Sustain acceleration",
       "text": "Use credibility from wins to tackle bigger changes; do not declare victory early."
      },
      {
       "title": "Anchor in culture",
       "text": "Connect new behaviours to success; build them into hiring, promotion and routines."
      }
     ],
     "title": "Kotter’s eight steps, summarised"
    },
    {
     "type": "table",
     "head": [
      "Root of resistance",
      "What you might hear",
      "Helpful response"
     ],
     "rows": [
      [
       "Not understanding why",
       "‘The old system works fine.’",
       "Share data and stories on the problem; let them see it themselves"
      ],
      [
       "Loss of status, control or skill",
       "‘I have been the expert for 12 years.’",
       "Involve them as super-users or trainers; honour their expertise"
      ],
      [
       "Fear of job loss",
       "‘Is this automation going to replace us?’",
       "Be honest about impacts; explain redeployment and reskilling plans"
      ],
      [
       "Change fatigue",
       "‘Another initiative?’",
       "Sequence changes; stop something old; show quick wins"
      ],
      [
       "Past broken promises",
       "‘Last time they said it would be easier.’",
       "Under-promise; pilot first; let peers report results"
      ]
     ],
     "title": "Why people resist — and what helps"
    },
    {
     "type": "case",
     "title": "Digital account opening at a commercial bank",
     "context": "A Bangladeshi commercial bank is introducing tablet-based digital account opening at 120 branches, replacing paper forms. The pilot at 10 branches is technically successful, but after six weeks only 30% of new accounts are opened digitally. Interviews show: many officers did not know why the change was happening beyond ‘head office says so’; senior officers worry that faster processing will be used to cut staff; several were trained once, two weeks before the tablets arrived; and branch targets still reward the number of accounts, not the channel used.",
     "questions": [
      "Diagnose the situation with ADKAR. Where is the first barrier?",
      "What would you change before rolling out to the other 110 branches?",
      "Which Kotter steps were skipped?"
     ],
     "answer": "ADKAR: **Awareness** is weak (no compelling why), **Desire** is undermined by job-loss fear and by targets that do not reward the change, **Knowledge** decayed because training came too early, **Ability** lacked practice time, **Reinforcement** is absent. The first barrier is awareness/desire, so more training alone will fail. Before rollout: leaders explain the customer and compliance reasons (faster opening, fewer errors, better KYC data); HR and leadership give an honest message on staffing and reskilling; train just-in-time with practice sessions and branch super-users; add digital-channel share to branch scorecards; publish pilot-branch wins. Kotter steps skipped: urgency, guiding coalition beyond head office, communicating the vision, removing barriers (targets) and short-term wins."
    },
    {
     "type": "template",
     "title": "Change impact assessment",
     "purpose": "Identify who is affected, how much and what support they need before go-live.",
     "columns": [
      "Stakeholder group",
      "What changes for them",
      "Impact (H/M/L)",
      "ADKAR gap",
      "Support actions",
      "Change champion"
     ],
     "example": [
      [
       "Branch customer-service officers",
       "Tablet process replaces paper forms; new KYC checks",
       "H",
       "Desire (job-security fears)",
       "Leadership briefing on reskilling; super-user buddies; scorecard update",
       "Senior officer, Agrabad branch"
      ]
     ],
     "rows": 6
    },
    {
     "type": "callout",
     "kind": "warning",
     "title": "When the organisation changes around the project",
     "text": "Restructures, mergers, a new chief executive or a new strategy can change a project's sponsor, stakeholders, priorities and business case overnight. When it happens, re-check the sponsor's commitment, re-map stakeholders, re-test the business case and agree with governance whether the project should continue, change or stop. Do not assume the old mandate still holds."
    },
    {
     "type": "scenario",
     "situation": "A respected senior supervisor openly criticises the new warehouse scanning process in front of her team, and adoption on her shift is lowest. What should the project manager do FIRST?",
     "options": [
      {
       "text": "Meet her privately to understand her concerns, then involve her in fixing them — possibly as a change champion.",
       "feedback": "Correct. Her influence is an asset; if her concerns are addressed, she can bring the team along.",
       "best": true
      },
      {
       "text": "Report her to her manager for undermining the project.",
       "feedback": "Punishment may silence her but will not change her team’s behaviour and may harden resistance.",
       "best": false
      },
      {
       "text": "Exclude her shift from the rollout for now.",
       "feedback": "This avoids the problem and leaves a gap in the benefits.",
       "best": false
      },
      {
       "text": "Run another training session for her shift.",
       "feedback": "Training addresses knowledge; her resistance is likely about desire or a real process problem.",
       "best": false
      }
     ],
     "title": "The vocal sceptic"
    },
    {
     "type": "reflection",
     "prompt": "Recall a change you were asked to adopt at work. Using ADKAR, which element was weakest for you, and what would have helped most?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Organisational change management (OCM)",
       "def": "Structured methods for helping people move from current to future ways of working so that project outputs are adopted and benefits realised."
      },
      {
       "term": "ADKAR",
       "def": "A model of individual change: Awareness, Desire, Knowledge, Ability, Reinforcement."
      },
      {
       "term": "Kotter's eight steps",
       "def": "A model for leading organisational change from creating urgency to anchoring the change in the culture."
      },
      {
       "term": "Change champion",
       "def": "A respected person in the affected group who promotes and supports the change locally."
      },
      {
       "term": "Organisational culture",
       "def": "The shared values, beliefs and habits that shape how people in an organisation behave."
      },
      {
       "term": "Change saturation",
       "def": "The point at which people are asked to absorb more change than they can handle, so adoption drops."
      },
      {
       "term": "Change impact assessment",
       "def": "An analysis of who is affected by a change, how much, and what support they need."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Users have been trained and understand the new process, but still prefer the old spreadsheet because their bonus depends on speed. Which ADKAR element needs attention?",
       "options": [
        "Awareness of the need for change",
        "Desire / Reinforcement",
        "Knowledge of the new process",
        "Ability to use the new tools"
       ],
       "answer": 1,
       "explain": "They know how but lack motivation, and the reward system reinforces the old way."
      },
      {
       "q": "Which Kotter step is MOST concerned with celebrating visible early successes?",
       "options": [
        "Build a guiding coalition",
        "Create a sense of urgency",
        "Anchor changes in the culture",
        "Generate short-term wins"
       ],
       "answer": 3,
       "explain": "Short-term wins build credibility and momentum."
      },
      {
       "q": "The BEST way to treat resistance is to…",
       "options": [
        "overcome it with stronger mandates from leadership",
        "ignore it until go-live, when it usually fades",
        "explore it as information and address root causes",
        "remove persistent resisters from the project team"
       ],
       "answer": 2,
       "explain": "Resistance often reveals real issues; understanding it leads to better solutions and adoption."
      },
      {
       "q": "Training delivered three months before people get the new system is a problem mainly for which ADKAR element?",
       "options": [
        "Knowledge and Ability",
        "Desire and Reinforcement",
        "Awareness and Desire",
        "Awareness and Reinforcement"
       ],
       "answer": 0,
       "explain": "Knowledge fades without use; just-in-time training plus practice builds ability."
      },
      {
       "q": "Halfway through a project, the organisation merges with a competitor and the sponsor leaves. What should the project manager do FIRST?",
       "options": [
        "Continue as planned, since the charter is still signed",
        "Stop all work until the merger is complete",
        "Confirm a new sponsor and re-check stakeholders and the business case with governance",
        "Ask the team to speed up before priorities change"
       ],
       "answer": 2,
       "explain": "Organisational change can remove the project's mandate. Confirm sponsorship and re-test the business case before carrying on."
      }
     ]
    }
   ]
  },
  {
   "id": "m8-l4",
   "title": "The External Environment: Regulation, Markets, AI & Sustainability",
   "subtitle": "Survey changes outside the project, assess their impact on scope and backlog, and keep watching",
   "minutes": 32,
   "objectives": [
    "Survey changes in regulation, technology, markets and geopolitics",
    "Assess and prioritise their impact on scope, backlog and business case",
    "Use AI tools responsibly and respond to AI as a source of change",
    "Build sustainability into project decisions"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Projects do not run in a sealed room. A new regulation, a competitor's launch, an exchange-rate shock, a trade dispute or a new generation of AI tools can change what a project should deliver, sometimes in weeks. Project managers **survey** the external environment, **assess** what changes mean for scope and the backlog, and **keep reviewing** throughout the project, not just at the start."
    },
    {
     "type": "table",
     "title": "Scanning the external environment",
     "head": [
      "Area",
      "Example change",
      "Possible project impact"
     ],
     "rows": [
      [
       "Political and geopolitical",
       "Trade restrictions on a component's country of origin",
       "Re-sourcing; schedule and cost changes"
      ],
      [
       "Economic and market",
       "Currency devaluation; a competitor launches first",
       "Budget pressure; reprioritised features"
      ],
      [
       "Social",
       "Customers expect mobile-first, local-language service",
       "New backlog items; changed design"
      ],
      [
       "Technological, including AI",
       "New AI capability makes a planned feature obsolete",
       "Scope removed or redesigned"
      ],
      [
       "Legal and regulatory",
       "New data-protection or AI rules",
       "Compliance work added; go-live conditions"
      ],
      [
       "Environmental",
       "Stricter emissions reporting; climate-driven flooding",
       "New data requirements; site and design changes"
      ]
     ]
    },
    {
     "type": "steps",
     "title": "From external change to the backlog",
     "items": [
      {
       "title": "Survey",
       "text": "Watch regulators, industry news, suppliers, customers and competitors; make it someone's job."
      },
      {
       "title": "Assess relevance",
       "text": "Does it affect our scope, users, suppliers, costs or business case?"
      },
      {
       "title": "Estimate impact",
       "text": "How much, how soon, and is it mandatory?"
      },
      {
       "title": "Prioritise",
       "text": "Rank against existing backlog items or planned scope by value and urgency."
      },
      {
       "title": "Act",
       "text": "Add backlog items, raise change requests or record risks, and inform governance."
      },
      {
       "title": "Keep reviewing",
       "text": "Make external change a standing item at quarterly planning and gate reviews."
      }
     ]
    },
    {
     "type": "template",
     "title": "External change radar",
     "purpose": "Track external changes and what the project is doing about each one.",
     "columns": [
      "Change",
      "Source and date",
      "Area",
      "Impact on scope or backlog",
      "Urgency",
      "Action and owner"
     ],
     "example": [
      [
       "Data-localisation rule for customer data",
       "Regulator notice, 10 Jan",
       "Legal and regulatory",
       "Hosting must move in-country; 3 new backlog epics",
       "High: 9-month deadline",
       "Change request raised; compliance officer and tech lead"
      ]
     ],
     "rows": 6
    },
    {
     "type": "callout",
     "kind": "insight",
     "title": "AI as a change in the environment",
     "text": "Artificial intelligence changes projects in two ways. It is a **tool**: drafting, summarising, analysing and forecasting. And it is an **external force**: customers expect smarter services, competitors ship AI features, new laws regulate AI use, and some planned features become obsolete. Review both: how your team uses AI, and how AI changes what your project should deliver."
    },
    {
     "type": "table",
     "head": [
      "PM task",
      "Good use",
      "Watch out for"
     ],
     "rows": [
      [
       "Charter and plan drafts",
       "First draft of objectives, scope statements, assumptions from your notes",
       "Invented constraints or targets; generic text that fits no real project"
      ],
      [
       "Risk brainstorming",
       "Generate candidate risks by RBS category to widen thinking",
       "Plausible but irrelevant risks; missing local context"
      ],
      [
       "Status summaries",
       "Turn raw updates and tracker exports into a one-page draft",
       "Softening bad news; mis-stated numbers"
      ],
      [
       "Meeting notes",
       "Summarise transcripts into decisions, actions and owners",
       "Wrong attribution; confidential remarks captured; consent to record"
      ],
      [
       "Schedule what-ifs",
       "Explain trade-offs and suggest scenarios to test",
       "Arithmetic and date errors — run the real numbers in your scheduling tool"
      ],
      [
       "Stakeholder messages",
       "Adapt one message for different audiences and reading levels",
       "Tone that does not fit the relationship; over-promising"
      ]
     ],
     "title": "Where an AI assistant helps (and where to be careful)"
    },
    {
     "type": "framework",
     "items": [
      {
       "label": "APP",
       "title": "Approved tools only",
       "text": "Use the AI tools your organisation has approved under an enterprise agreement. Consumer accounts may retain or use your inputs in ways your contracts forbid."
      },
      {
       "label": "CLS",
       "title": "Classify before you paste",
       "text": "Public and internal data may be fine; confidential, client, personal or regulated data usually is not — unless the tool is explicitly approved for that class."
      },
      {
       "label": "MIN",
       "title": "Minimise and anonymise",
       "text": "Remove names, phone numbers, account numbers and contract values; use placeholders such as ‘Vendor A’."
      },
      {
       "label": "SEC",
       "title": "No secrets ever",
       "text": "Never paste passwords, access keys or security configurations."
      },
      {
       "label": "REC",
       "title": "Consent for recording",
       "text": "Tell participants before an AI note-taker records or transcribes a meeting, and follow local law and company policy."
      }
     ],
     "title": "Data-privacy rules for AI use"
    },
    {
     "type": "callout",
     "kind": "definition",
     "text": "Organisations increasingly align AI work with frameworks such as the **NIST AI Risk Management Framework** and the management-system standard **ISO/IEC 42001**. A PM does not need to be an expert, but should ask early: ‘Which AI policy and risk process applies to this project?’",
     "title": "Useful references for AI governance"
    },
    {
     "type": "framework",
     "items": [
      {
       "label": "E",
       "title": "Environmental",
       "text": "Energy and carbon over the life cycle, materials, waste, water and pollution, climate resilience (e.g. flood-proofing sites)."
      },
      {
       "label": "S",
       "title": "Social",
       "text": "Labour standards in the supply chain, health and safety, community impact, accessibility and inclusion of users."
      },
      {
       "label": "G",
       "title": "Governance",
       "text": "Anti-corruption, transparency in procurement, data protection, ethical AI, honest reporting."
      }
     ],
     "title": "ESG in project decisions"
    },
    {
     "type": "keypoints",
     "items": [
      "Add a sustainability objective or key result to the charter where relevant",
      "Include carbon and lifecycle cost — not just purchase price — in option appraisal",
      "Use supplier criteria for labour standards and environmental performance",
      "Choose energy-efficient hosting and right-size infrastructure",
      "Plan for reuse, recycling or safe disposal of equipment and materials",
      "Report ESG measures alongside cost and schedule at stage gates"
     ],
     "title": "Practical ways to build sustainability into a project"
    },
    {
     "type": "case",
     "title": "Solar irrigation pumps in northern Bangladesh",
     "context": "An NGO-funded programme will install 300 solar irrigation pumps across Rangpur and Dinajpur over three years, run as three projects: procurement and installation, a farmer payment-and-service scheme, and a maintenance training project. The board has limited funds and two other proposals: rooftop solar for clinics, and a mobile weather-advisory service.",
     "questions": [
      "Why is this better run as a programme than three separate projects?",
      "Suggest four weighted criteria the portfolio board could use to compare the three proposals.",
      "Name two environmental and two social risks the programme should manage."
     ],
     "answer": "Programme: the benefit — higher, sustainable farmer incomes and lower diesel use — only appears when pumps, payment scheme and maintenance skills work together; a programme manages those dependencies and benefits. Criteria (example): impact on income/livelihoods 35%, emissions reduction 25%, cost per beneficiary 25%, delivery risk 15%. Environmental: groundwater over-extraction when water becomes cheap; end-of-life disposal of panels and batteries. Social: unequal access (larger landowners capturing benefits), and safety/theft issues at remote sites — plus fair labour practices among installers."
    },
    {
     "type": "scenario",
     "title": "A new rule mid-project",
     "situation": "Six months into a cloud-hosted customer app, the regulator announces that customer data must be stored in-country within nine months. The product owner is focused on new features for a festival campaign. What should the project manager do FIRST?",
     "options": [
      {
       "text": "Ignore it until the rule is finalised in law.",
       "feedback": "Weak. Waiting wastes time that a nine-month deadline cannot spare.",
       "best": false
      },
      {
       "text": "Assess the impact on scope, backlog, costs and the business case with the product owner and compliance officer, then present prioritised options to governance.",
       "feedback": "Best. It turns an external change into an assessed, prioritised response and involves the right people.",
       "best": true
      },
      {
       "text": "Move all hosting immediately, pausing feature work.",
       "feedback": "Premature. Action before impact assessment may be costly and unnecessary in that form.",
       "best": false
      },
      {
       "text": "Add a risk to the register and continue as planned.",
       "feedback": "Partly right, but this is a confirmed mandatory change, not only a risk; scope and plans need to change.",
       "best": false
      }
     ]
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Generative AI copilot",
       "def": "An AI assistant that generates text, summaries, code or other content from natural-language prompts to support a person’s work."
      },
      {
       "term": "Hallucination",
       "def": "Output from a generative model that is fluent and plausible but factually wrong or invented."
      },
      {
       "term": "Data minimisation",
       "def": "Sharing only the data strictly needed for a task, with personal or confidential details removed or masked."
      },
      {
       "term": "ESG",
       "def": "Environmental, social and governance considerations used to assess the wider impact and responsibility of projects and organisations."
      },
      {
       "term": "Model drift",
       "def": "The decline in an AI model’s performance over time as real-world data diverges from its training data."
      },
      {
       "term": "Environmental scanning",
       "def": "Regularly surveying political, economic, social, technological, legal and environmental changes that may affect a project."
      },
      {
       "term": "PESTLE analysis",
       "def": "A checklist for scanning the external environment: political, economic, social, technological, legal and environmental factors."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which data is generally SAFEST to share with an approved AI assistant?",
       "options": [
        "Anonymised meeting notes with internal-only information",
        "A customer list with names and phone numbers",
        "Administrator passwords for the test environment",
        "A signed contract with pricing, in a public chatbot"
       ],
       "answer": 0,
       "explain": "Anonymised internal data in an approved tool is the low-risk option."
      },
      {
       "q": "Comparing options by lifecycle energy cost rather than purchase price alone is an example of…",
       "options": [
        "social sustainability and community benefit",
        "gold plating of the specification",
        "environmental and financial sustainability",
        "scope creep driven by stakeholders"
       ],
       "answer": 2,
       "explain": "Lifecycle costing captures operating energy and environmental impact."
      },
      {
       "q": "An AI model for loan approvals performed well at launch but accuracy falls after a year. This is most likely…",
       "options": [
        "scope creep",
        "a hallucination",
        "a lagging indicator",
        "model drift"
       ],
       "answer": 3,
       "explain": "Changing real-world data degrades model performance over time."
      },
      {
       "q": "A competitor launches an AI feature that makes one of your planned features far less valuable. What should the product owner and PM do?",
       "options": [
        "Continue, because the feature is in the approved roadmap",
        "Cancel the whole project",
        "Copy the competitor's feature exactly",
        "Reassess the backlog's value in light of the change and reprioritise with stakeholders"
       ],
       "answer": 3,
       "explain": "External changes should be assessed for their impact on scope and the backlog, then reprioritised by value."
      },
      {
       "q": "Which practice BEST makes sure external changes keep being noticed during a long project?",
       "options": [
        "A standing review of external changes at quarterly planning and gate reviews",
        "A one-off environmental scan at initiation",
        "Waiting for the sponsor to report changes",
        "Reading industry news when the project is in trouble"
       ],
       "answer": 0,
       "explain": "The external environment must be reviewed continually; a standing agenda item makes it routine."
      }
     ]
    }
   ]
  },
  {
   "id": "m8-l5",
   "title": "The Whole Loop: Capstone & Exam Readiness",
   "subtitle": "Watch all eight stages work together on one project, plan your capstone and prepare for situational questions",
   "minutes": 40,
   "objectives": [
    "Trace a project through all eight stages of the ZPMP Professional Loop",
    "Plan your ZPMP capstone and its deliverables",
    "Apply a reliable method to situational-judgement questions",
    "Recognise predictive, agile and hybrid context cues"
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Real projects do not separate neatly into modules. A risk spotted in Govern changes the plan; a stakeholder concern in Engage reshapes scope; a lesson in Adapt improves the next Frame. Here is one mini-project followed through the whole **ZPMP Professional Loop**."
    },
    {
     "type": "callout",
     "kind": "example",
     "text": "**Cumilla District Hospital — SMS and web appointment booking.** Patients queue from dawn for outpatient tickets; 22% of booked follow-ups are missed. A 6-month project with a budget of BDT 4.5 million and a team of 7 (PM, product owner from hospital administration, 3 developers, 1 tester, 1 change and training lead) will deliver online and SMS booking with reminders for four outpatient departments.",
     "title": "The mini-project"
    },
    {
     "type": "table",
     "title": "Walking the loop",
     "head": [
      "Stage",
      "Key question",
      "What the team did",
      "Key artefact"
     ],
     "rows": [
      [
       "Frame",
       "Is this worth doing, and do we share the vision?",
       "Business case for fewer queues and no-shows; hybrid approach; vision co-written with doctors and front desk",
       "Business case, charter, vision"
      ],
      [
       "Lead",
       "Is the team set up to succeed?",
       "Team charter and RACI; conflict over slot rules resolved collaboratively",
       "Team charter, RACI"
      ],
      [
       "Engage",
       "Who cares, and what do they expect?",
       "Stakeholder map; alignment session agreed SMS-first for older patients; knowledge transfer plan for the hospital IT officer",
       "Stakeholder register, alignment map, communication plan"
      ],
      [
       "Plan",
       "What exactly, and in what order of value?",
       "Integrated plan joining the SMS-gateway contract with a prioritised backlog",
       "Integrated plan, backlog"
      ],
      [
       "Resource",
       "How long, who and how much?",
       "Velocity-based release forecast; P80 at 6.5 months; budget with contingency",
       "Release plan, budget"
      ],
      [
       "Deliver",
       "Are we building it well and on track?",
       "Sprints with usability tests; vendor scorecard; burnup and dashboard",
       "Increments, dashboard"
      ],
      [
       "Govern",
       "Are we compliant and in control?",
       "Patient-data consent built into stories; change control for the national ID integration; risk register",
       "Compliance register, change log, risk register"
      ],
      [
       "Adapt",
       "What blocks us, what is changing, and what did we learn?",
       "Impediment board; front-desk adoption plan; new national ID rule assessed; retrospectives and benefits plan",
       "Impediment log, change impact assessment, lessons register"
      ]
     ]
    },
    {
     "type": "scenario",
     "situation": "In month 4, the health directorate announces that all hospital systems must integrate with a new national patient ID within 6 months. The product owner wants to add it now. The P80 forecast already sits at the deadline. What should the PM do FIRST?",
     "options": [
      {
       "text": "Add the integration to the current sprint to show responsiveness.",
       "feedback": "Disrupts sprint focus and skips impact analysis.",
       "best": false
      },
      {
       "text": "Tell the directorate the project cannot comply.",
       "feedback": "Dismisses a mandatory requirement without analysis.",
       "best": false
      },
      {
       "text": "Analyse the requirement and its impact with the product owner and team, then present options (e.g. phase 2 release before the mandate date) through change control.",
       "feedback": "Correct. Understand the mandate, assess impact on scope, schedule, cost and risk, and bring options to the right decision makers.",
       "best": true
      },
      {
       "text": "Escalate to the sponsor to request more budget.",
       "feedback": "Premature — the size and options are not yet known.",
       "best": false
      }
     ],
     "title": "A mid-project curveball"
    },
    {
     "type": "text",
     "text": "Your **ZPMP capstone** asks you to apply the whole loop to a real or realistic project of your choice, ideally from your workplace with confidential details removed. You will produce a compact pack of artefacts and a short reflective report showing how you handled people, process and the business environment."
    },
    {
     "type": "steps",
     "title": "Capstone deliverables by stage",
     "items": [
      {
       "title": "Frame",
       "text": "One-page business case, charter and shared vision with measurable success criteria."
      },
      {
       "title": "Lead",
       "text": "Team charter with ground rules and a RACI for key decisions."
      },
      {
       "title": "Engage",
       "text": "Stakeholder register, expectation alignment map, knowledge transfer plan and communication plan."
      },
      {
       "title": "Plan",
       "text": "Integrated plan summary and a prioritised backlog or WBS with acceptance criteria."
      },
      {
       "title": "Resource",
       "text": "Schedule or release forecast, resource plan and budget with reserves."
      },
      {
       "title": "Deliver",
       "text": "Quality approach, supplier approach and a simulated status dashboard."
      },
      {
       "title": "Govern",
       "text": "Governance and escalation thresholds, compliance register, change log and top-10 risk register."
      },
      {
       "title": "Adapt",
       "text": "Impediment log, change-adoption plan, external change radar and lessons with OPA updates."
      }
     ]
    },
    {
     "type": "template",
     "title": "Capstone planner",
     "purpose": "Plan your capstone: one row per stage of the Professional Loop.",
     "columns": [
      "Stage",
      "Artefacts I will produce",
      "Data or input I need",
      "Who can review it",
      "Target date"
     ],
     "example": [
      [
       "Govern",
       "Compliance register and top-10 risk register",
       "Regulatory list from compliance team; risk workshop notes",
       "Line manager and compliance officer",
       "Week 7"
      ]
     ],
     "rows": 8
    },
    {
     "type": "text",
     "text": "Many PM certifications — including ZPMP’s final exam — use **situational-judgement** questions: a short scenario and four plausible actions. Usually more than one option is reasonable; you must find the **best** one for the context."
    },
    {
     "type": "steps",
     "items": [
      {
       "title": "Read the last line first",
       "text": "Spot the qualifier: FIRST, NEXT, BEST, MOST likely, LEAST, EXCEPT."
      },
      {
       "title": "Recognise the context",
       "text": "Agile, predictive or hybrid? Who is involved? Which domain and which stage of the Professional Loop?"
      },
      {
       "title": "Reduce",
       "text": "Eliminate options that are unethical, passive, blame-focused or bypass the process."
      },
      {
       "title": "Rank",
       "text": "Between the remaining two, prefer the action that addresses the root cause, gathers facts or involves the right people directly."
      },
      {
       "title": "Re-check",
       "text": "Does your pick answer the actual question — e.g. FIRST rather than eventually?"
      }
     ],
     "title": "The ZPMP 5-R method for situational questions"
    },
    {
     "type": "compare",
     "columns": [
      {
       "title": "Agile cues",
       "items": [
        "Product owner, sprint, backlog, iteration review",
        "Self-organising team, servant leader",
        "Best answers: collaborate with the product owner on priorities, let the team decide how, inspect and adapt, frequent feedback"
       ]
      },
      {
       "title": "Predictive cues",
       "items": [
        "Baseline, change control board, WBS, signed contract",
        "Phase gates, formal approvals",
        "Best answers: assess impact, follow the change management plan, update baselines only after approval"
       ]
      },
      {
       "title": "Universal cues",
       "items": [
        "Ethics, safety, conflict, stakeholder concern",
        "Best answers: understand first, talk directly and privately, act within your authority, escalate with options when needed"
       ]
      }
     ],
     "title": "Context cues"
    },
    {
     "type": "table",
     "head": [
      "Pattern",
      "Why it is usually weaker"
     ],
     "rows": [
      [
       "Escalate to the sponsor immediately",
       "Skips analysis and actions within the PM’s own authority"
      ],
      [
       "Ignore it / wait and see",
       "Passive; problems grow"
      ],
      [
       "Fire, punish or publicly blame someone",
       "Damages safety; rarely solves root causes"
      ],
      [
       "Implement the change straight away because the client asked",
       "Bypasses impact analysis and change control"
      ],
      [
       "Add more people immediately",
       "May not fix the cause; can slow a late project further"
      ],
      [
       "Absolute words: always, never, all",
       "Real practice is contextual"
      ]
     ],
     "title": "Answer patterns to be suspicious of"
    },
    {
     "type": "keypoints",
     "items": [
      "Pace yourself: note the time per question and flag hard ones to return to",
      "Answer every question — an unanswered question cannot score",
      "Do not overthink: choose the best answer from the options given, not the one you wish were there",
      "Watch for qualifiers: FIRST and NEXT are about sequence, BEST is about overall quality",
      "Use breaks to reset attention"
     ],
     "title": "Exam-day habits"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Situational-judgement question",
       "def": "An exam item presenting a realistic scenario and asking for the best action among plausible alternatives."
      },
      {
       "term": "Capstone",
       "def": "A culminating project in which learners apply the whole ZPMP Professional Loop to a real or realistic project and present the resulting artefacts and reflections."
      },
      {
       "term": "Qualifier",
       "def": "A word in a question such as FIRST, NEXT, BEST or EXCEPT that defines what kind of answer is wanted."
      },
      {
       "term": "Distractor",
       "def": "A plausible but weaker option in a multiple-choice question."
      },
      {
       "term": "Context cue",
       "def": "A detail in a scenario, such as 'sprint' or 'baseline', that signals the approach and shapes the best answer."
      },
      {
       "term": "Integration",
       "def": "Combining decisions across scope, schedule, cost, people, risk and value so they work together."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "A question asks what the PM should do FIRST after a team member reports a new risk. Which option is most likely best?",
       "options": [
        "Escalate it to the sponsor straight away",
        "Assess and record it in the risk register",
        "Implement a response immediately to be safe",
        "Inform all stakeholders by email"
       ],
       "answer": 1,
       "explain": "Analyse and document before acting or escalating."
      },
      {
       "q": "Which option pattern is usually weakest in situational questions?",
       "options": [
        "Review the relevant plan and baseline before acting",
        "Meet the stakeholder privately to understand their concern",
        "Ignore the issue and wait for the next status meeting",
        "Collaborate with the product owner on the backlog"
       ],
       "answer": 2,
       "explain": "Passive waiting lets problems grow."
      },
      {
       "q": "Which cue suggests a predictive context?",
       "options": [
        "Sprint review with stakeholders",
        "Product backlog refinement",
        "Self-organising, cross-functional team",
        "Change control board approval"
       ],
       "answer": 3,
       "explain": "Formal change control boards are characteristic of predictive governance."
      },
      {
       "q": "A mandatory new requirement arrives mid-project. What is the FIRST step?",
       "options": [
        "Add it to the plan immediately, since it is mandatory anyway",
        "Analyse its impact and present options via change control",
        "Refuse it until the current phase has been completed",
        "Request extra budget and time from the sponsor to cover it"
       ],
       "answer": 1,
       "explain": "Impact analysis and options precede decisions."
      },
      {
       "q": "In the walk-through, the hospital's new national ID rule was assessed for its effect on the backlog. Which ZPMP stage does this MOST represent?",
       "options": [
        "Adapt",
        "Lead",
        "Resource",
        "Frame"
       ],
       "answer": 0,
       "explain": "Evaluating changes in the external environment and their impact on scope is part of Adapt (Business Environment Task 8)."
      }
     ]
    }
   ]
  }
 ]
});
TRACK.exam.push([
 {
  "module": "m5",
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
  "module": "m5",
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
  "module": "m5",
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
  "module": "m5",
  "q": "A stakeholder suggests funding a new feature from the project's contingency reserve because 'the risks it covered have not happened yet'. What should the project manager do?",
  "options": [
   "Explain that contingency covers identified risks; process it as a change request",
   "Move the money into management reserve until a decision is needed",
   "Approve the use, since the money is unused and the feature adds value",
   "Fund the feature from management reserve instead, without informing the sponsor first"
  ],
  "answer": 0,
  "explain": "Contingency protects against identified risks; new scope requires change control and an authorised funding decision. Spending contingency leaves risks unfunded, and using management reserve requires management approval."
 },
 {
  "module": "m5",
  "q": "Two activities scheduled in parallel both need the only certified electrician, causing an overload. The activities are on the critical path. Which technique applies, and what is a likely consequence?",
  "options": [
   "Resource smoothing, which never changes the project end date",
   "Resource levelling, which may extend the project end date",
   "Crashing, which removes the dependency on the electrician",
   "Fast-tracking, which reduces demand on the shared resource"
  ],
  "answer": 1,
  "explain": "When a resource limit is hard and the activities are critical, levelling delays one of them and can push out the end date. Smoothing only moves work within float, fast-tracking increases overlap, and crashing adds resources rather than resolving a single-specialist limit."
 },
 {
  "module": "m5",
  "q": "At month 5 of a project, PV = 200,000, EV = 180,000 and AC = 225,000. Which statement BEST describes the project’s status?",
  "options": [
   "Behind schedule and over budget (SPI 0.90, CPI 0.80)",
   "Ahead of schedule and over budget (SPI 1.11, CPI 0.80)",
   "Behind schedule and under budget (SPI 0.90, CPI 1.25)",
   "On schedule and over budget (SPI 1.00, CPI 0.80)"
  ],
  "answer": 0,
  "explain": "SPI = EV ÷ PV = 180,000 ÷ 200,000 = 0.90 (behind). CPI = EV ÷ AC = 180,000 ÷ 225,000 = 0.80 (over budget). The other options invert one or both ratios."
 },
 {
  "module": "m5",
  "q": "A project has BAC = 800,000, EV = 300,000 and AC = 400,000. The sponsor asks for a forecast assuming current cost performance continues. What is the estimate at completion?",
  "options": [
   "About 900,000",
   "About 1,000,000",
   "About 1,066,667",
   "About 600,000"
  ],
  "answer": 2,
  "explain": "CPI = 300,000 ÷ 400,000 = 0.75, so EAC = BAC ÷ CPI = 800,000 ÷ 0.75 ≈ 1,066,667. 900,000 is the atypical formula AC + (BAC − EV); the other values do not follow from any standard formula here."
 },
 {
  "module": "m5",
  "q": "A project has BAC = 500,000, EV = 200,000 and AC = 250,000. The sponsor insists on finishing within the original budget. What cost performance must the team achieve on the remaining work?",
  "options": [
   "A TCPI of 0.83",
   "A CPI of at least 0.80",
   "A TCPI of 1.20",
   "A TCPI of 1.00"
  ],
  "answer": 2,
  "explain": "TCPI = (BAC − EV) ÷ (BAC − AC) = 300,000 ÷ 250,000 = 1.20 — every unit of money must produce 20% more work than planned. 0.80 is the current CPI, and 0.83 and 1.00 do not reflect the remaining work and funds."
 },
 {
  "module": "m6",
  "q": "During a sprint, a senior manager asks a developer to start an urgent new feature. What should the developer do?",
  "options": [
   "Start the feature immediately, because the request comes from a senior manager",
   "Add it to the sprint backlog without telling anyone and absorb it with extra effort",
   "Ask the team to cancel the sprint and replan it so the urgent feature can be included",
   "Refer it to the product owner, who decides priority while the sprint goal is protected"
  ],
  "answer": 3,
  "explain": "The product owner owns the order of work, and the developers manage the sprint plan to protect the sprint goal. Seniority does not bypass this; only the product owner can cancel a sprint; silent additions destroy transparency."
 },
 {
  "module": "m6",
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
  "module": "m6",
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
  "module": "m6",
  "q": "A buyer needs a supplier for a research-like data platform whose scope is highly uncertain, but wants the supplier motivated to control costs. Which contract type is MOST suitable?",
  "options": [
   "Fixed price with economic price adjustment",
   "Firm fixed price",
   "Cost plus incentive fee",
   "Purchase order for a fixed quantity"
  ],
  "answer": 2,
  "explain": "Cost-reimbursable contracts suit high uncertainty, and an incentive fee shares overruns and savings, motivating cost control. Fixed-price types need clear scope; a simple purchase order fits standard goods."
 },
 {
  "module": "m6",
  "q": "A garment factory's defect data shows that three causes account for most rejected pieces. Which tool should the quality lead use to communicate where to focus improvement efforts?",
  "options": [
   "A control chart",
   "A scatter diagram",
   "A flowchart",
   "A Pareto chart"
  ],
  "answer": 3,
  "explain": "A Pareto chart ranks causes by frequency so the team can focus on the vital few. A scatter diagram tests relationships between variables, a flowchart shows process steps, and a control chart shows process stability over time."
 },
 {
  "module": "m6",
  "q": "A programme dashboard has shown every project green for six months. Last week two projects turned red overnight, each reporting a slip of more than two months. What should the PMO do to prevent this in future?",
  "options": [
   "Require PMs to justify any red status in writing to the board before reporting",
   "Introduce objective, forecast-based RAG criteria and encourage early bad news",
   "Remove the red category so projects escalate through amber before failing",
   "Report status quarterly rather than monthly to reduce reporting pressure"
  ],
  "answer": 1,
  "explain": "This is watermelon reporting. Objective thresholds tied to forecasts, plus a culture that welcomes bad news early, keep status honest. Adding justification burdens to red, removing red or reporting less often all make hidden problems more likely."
 },
 {
  "module": "m6",
  "q": "The project manager is negotiating a hardware contract. The supplier insists on a 15% price increase. The PM has a confirmed offer from another qualified supplier at a 5% increase. How should this alternative be used?",
  "options": [
   "Keep it hidden, because revealing alternatives weakens a negotiating position",
   "As the PM’s BATNA, setting a walk-away point and strengthening the negotiation",
   "As a reason to end the negotiation now and sign with the other supplier",
   "As leverage to threaten reporting the supplier to the industry regulator"
  ],
  "answer": 1,
  "explain": "A strong BATNA sets the walk-away point and strengthens the negotiating position. Hiding it gives no benefit, ending talks immediately may forgo a better deal, and threatening regulators is inappropriate."
 },
 {
  "module": "m6",
  "q": "A software system has been deployed and users are working with it. The vendor is asking for final payment, but no formal acceptance has been recorded. What should the project manager do FIRST?",
  "options": [
   "Hold a formal acceptance review against the agreed criteria and obtain sign-off",
   "Withhold payment until every outstanding enhancement request is completed",
   "Archive the project documents and pass the vendor’s invoice to finance for payment",
   "Approve final payment, since users are already working with the system"
  ],
  "answer": 0,
  "explain": "Formal acceptance against agreed criteria should precede contract closure and payment. Paying without acceptance invites disputes, demanding new enhancements is outside the contract, and archiving comes after acceptance."
 },
 {
  "module": "m7",
  "q": "A team member has added an attractive analytics screen that no stakeholder requested, delaying a planned feature. What does this BEST describe, and what should the PM do?",
  "options": [
   "Gold plating; agree with the team that work must trace to approved items",
   "Progressive elaboration; record it as normal refinement of the requirements",
   "Scope creep; raise a change request against the requesting stakeholder",
   "Healthy innovation; recognise it publicly to encourage creative initiative"
  ],
  "answer": 0,
  "explain": "Adding unrequested extras is gold plating, which adds cost and risk. It is not stakeholder-driven scope creep, nor normal elaboration; rewarding it would encourage more unapproved work."
 },
 {
  "module": "m7",
  "q": "A project’s forecast shows it will finish 2% over budget. The governance board has set a cost tolerance of ±5%. What should the project manager do?",
  "options": [
   "Request an urgent exception meeting with the board to approve the overrun",
   "Re-baseline the budget immediately to reflect the new cost forecast",
   "Stop non-essential work until the board formally approves the overrun",
   "Manage the variance within the project and report it in the normal cycle"
  ],
  "answer": 3,
  "explain": "Within tolerance, the PM manages by exception and reports normally. An urgent board meeting, stopping work or re-baselining are reactions reserved for forecasts outside tolerance or approved changes."
 },
 {
  "module": "m7",
  "q": "An organisation wants a PMO that sets mandatory reporting standards and reviews project compliance, but leaves day-to-day management with project managers in business units. Which PMO type fits?",
  "options": [
   "Supportive",
   "Directive",
   "Portfolio-only",
   "Controlling"
  ],
  "answer": 3,
  "explain": "A controlling PMO requires compliance and assures quality with moderate control. A supportive PMO only advises; a directive PMO manages projects directly; ‘portfolio-only’ is not one of the standard types."
 },
 {
  "module": "m7",
  "q": "A risk owner reports that the warning sign defined for a high-priority risk has just appeared, and an approved contingency plan exists within the PM’s authority. What should the project manager do NEXT?",
  "options": [
   "Schedule a risk workshop to reassess all risks before taking action",
   "Implement the contingency plan and update the risk register and issue log",
   "Ask the sponsor for permission before executing the contingency plan",
   "Wait to see whether the risk actually materialises before using reserves"
  ],
  "answer": 1,
  "explain": "Triggers exist so that pre-approved responses can be executed promptly. A workshop or seeking fresh permission wastes the planning already done, and waiting defeats the purpose of having a trigger."
 },
 {
  "module": "m7",
  "q": "Two vendors are being considered. Vendor A costs 50,000 more but has a 10% chance of a 200,000 delay penalty. Vendor B has a 40% chance of the same penalty. Based on expected monetary value, which is the better choice?",
  "options": [
   "Vendor B, because it is 50,000 cheaper upfront",
   "Vendor A, because it has the lowest probability of delay regardless of cost",
   "They are equal once the penalty risk is taken into account",
   "Vendor A, because its expected cost is 70,000 versus 80,000 for Vendor B"
  ],
  "answer": 3,
  "explain": "A: 50,000 + (0.10 × 200,000) = 70,000. B: 0 + (0.40 × 200,000) = 80,000. A is better by 10,000 in expected cost. Upfront price or probability alone ignores the full picture, and the values are not equal."
 },
 {
  "module": "m7",
  "q": "Before a board meeting, the sponsor asks the PM to report the project as amber instead of red, promising that the problems will be fixed next month. What should the PM do?",
  "options": [
   "Report green to avoid alarming the board before the fixes are in place",
   "Report amber as asked, since the sponsor is accountable for the project",
   "Report the true status and offer a recovery plan with the decisions needed",
   "Avoid attending the board meeting and let the sponsor present the status"
  ],
  "answer": 2,
  "explain": "Honesty requires accurate reporting; adding a recovery plan keeps the conversation constructive. Changing the status at anyone’s request misleads the board, and avoidance leaves the board uninformed."
 },
 {
  "module": "m7",
  "q": "An inspection of a garment-factory extension finds that the fire exits do not meet the national building code, although they match the approved drawings. The buyer's compliance audit is in six weeks. What should the project manager do FIRST?",
  "options": [
   "Assess the non-compliance and its consequences with the safety engineer, then agree corrective actions and owners",
   "Ask the buyer to postpone its audit until the exits are rebuilt",
   "Record the finding as a lesson learned for future projects",
   "Instruct the contractor to rebuild the exits immediately at its own cost and report the outcome to the auditors"
  ],
  "answer": 0,
  "explain": "Non-compliance must be analysed for consequences and corrected with clear owners. Instructing the contractor before understanding the cause and contract position, delaying the audit or merely recording a lesson are weaker first steps."
 },
 {
  "module": "m7",
  "q": "A change adding a new payment method was approved two weeks ago. Testers are still using the old requirements and the training material has not changed. What was MOST likely missed?",
  "options": [
   "Analysing the change's impact on scope, schedule, cost and risk before the board approved it",
   "Obtaining the sponsor's approval for the change",
   "Adding the change to the risk register",
   "Updating project documents and communicating the approved change to everyone affected"
  ],
  "answer": 3,
  "explain": "After approval, change control includes communicating the decision and updating all affected documents. The approval itself happened; the follow-through did not."
 },
 {
  "module": "m8",
  "q": "Six weeks after a new procurement system went live, usage is low. Surveys show users understand why the change matters and want it, but feel unsure how to complete key tasks. Which ADKAR element should the next intervention target?",
  "options": [
   "Awareness — more communication about why the change is needed",
   "Reinforcement — recognition for heavy users",
   "Desire — incentives to use the new system",
   "Knowledge and Ability — hands-on training and floor support"
  ],
  "answer": 3,
  "explain": "Awareness and desire are already present; the first barrier is knowing how and being able to perform. More why-messaging, incentives or recognition will not fix a skills gap."
 },
 {
  "module": "m8",
  "q": "A senior supervisor publicly criticises a new digital process, and adoption on her team is the lowest in the organisation. What should the project manager do FIRST?",
  "options": [
   "Report her behaviour to HR as a breach of the change programme’s standards",
   "Exclude her team from the rollout until adoption elsewhere is fully complete",
   "Meet her privately to understand her concerns and involve her in solving them",
   "Double the training sessions for her team to build skills and confidence"
  ],
  "answer": 2,
  "explain": "Resistance often contains useful information, and influential sceptics can become strong champions. Disciplinary action, exclusion or more training skip understanding the root cause."
 },
 {
  "module": "m8",
  "q": "A team member wants to upload a spreadsheet of customer names, phone numbers and complaints to a free online AI tool to get a summary of complaint themes. The organisation has an approved enterprise AI assistant. What should the project manager advise?",
  "options": [
   "Use the approved enterprise tool and mask personal data before analysis",
   "Avoid AI altogether and have the team read every single complaint manually",
   "Use the free tool, but upload only half of the data to limit exposure",
   "Use the free tool, because generating summaries does not store any data"
  ],
  "answer": 0,
  "explain": "Approved tools plus data minimisation protect customers and the organisation. Free consumer tools may retain data, avoiding AI altogether wastes a legitimate capability, and uploading half the data still exposes personal information."
 },
 {
  "module": "m8",
  "q": "A project manager uses an AI assistant to draft a status summary. The draft states that the project is ‘12% under budget’, but the PM is not sure where that figure came from. What should the PM do BEFORE sending it?",
  "options": [
   "Send it as drafted, since AI tools are usually accurate with simple numbers",
   "Verify the figure against the cost reports and correct the draft if needed",
   "Remove all the numbers from the report to avoid any risk of inaccuracy",
   "Ask the AI assistant to confirm the figure and cite where it came from"
  ],
  "answer": 1,
  "explain": "AI-generated figures must be checked against authoritative data; the PM remains accountable. Assuming accuracy, removing all numbers or asking the same tool to confirm itself does not verify anything."
 },
 {
  "module": "m8",
  "q": "Delays in municipal permits are blocking a 5G site rollout, and only the city office can grant them. The project team has no influence there. What is the BEST action?",
  "options": [
   "Pause the whole rollout until every permit arrives",
   "Start construction on the blocked sites without permits and seek retrospective approval to protect the schedule",
   "Engage the sponsor and regulatory-affairs team to work with the city office, and re-sequence other sites",
   "Remove the affected sites from the project's scope"
  ],
  "answer": 2,
  "explain": "Some impediments can only be resolved by stakeholders outside the team. Collaborating with those who can influence the outcome, while re-planning to limit the damage, is better than waiting, breaking rules or cutting scope."
 },
 {
  "module": "m8",
  "q": "Midway through a hospital project, a currency devaluation raises the cost of imported medical equipment by 18%. What should the project manager do FIRST?",
  "options": [
   "Assess the impact on budget, scope and the business case, then present options to governance",
   "Cancel the equipment order and look for local suppliers",
   "Absorb the increase quietly from the contingency reserve so that the sponsor and board are not alarmed",
   "Wait for the exchange rate to recover before acting"
  ],
  "answer": 0,
  "explain": "External changes must be assessed for their impact and brought to the right decision-makers with options. Acting before assessment, hiding the variance or waiting are weaker."
 },
 {
  "module": "m8",
  "q": "A PMO's lessons-learned library holds 400 entries, but project managers say they never use it. Which change would MOST improve continuous improvement?",
  "options": [
   "Require every project manager to read all 400 entries at kick-off and sign to confirm they have done so",
   "Turn the most frequent lessons into updates to templates, checklists and gate criteria",
   "Add more entries from current projects to make the library complete",
   "Delete the library and start again with a new tool"
  ],
  "answer": 1,
  "explain": "Lessons change practice when they are built into the organisation's process assets. Reading or adding more entries does not change behaviour on its own."
 }
]);
