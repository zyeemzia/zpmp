window.TRACK = window.TRACK || { modules: [], exam: [] };
TRACK.modules.push({
 "id": "m5",
 "order": 5,
 "code": "Steer",
 "title": "Steer — Risk, Performance & Control",
 "subtitle": "Spot uncertainty early, measure progress truthfully and forecast the finish with confidence.",
 "outcomes": [
  "Identify, analyse and prioritise risks using qualitative and quantitative techniques, including EMV and decision trees.",
  "Plan owned responses for threats and opportunities and manage issues with clear escalation.",
  "Calculate and interpret earned value measures and forecasts for a sponsor.",
  "Use agile and flow metrics without misusing them, and build dashboards that drive decisions.",
  "Communicate forecasts as honest ranges with confidence levels."
 ],
 "lessons": [
  {
   "id": "m5-l1",
   "title": "Risk Thinking & Identification",
   "subtitle": "See uncertainty early, name it precisely and write it down where it can be managed.",
   "minutes": 25,
   "objectives": [
    "Distinguish a risk, an issue and an opportunity using a single clear test.",
    "Write well-formed risk statements using cause–event–effect structure.",
    "Run a pre-mortem and use a risk breakdown structure and an assumptions log to widen identification."
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Every project is a bet on the future. Steering — stage 5 of the **ZPMP Value Loop** — is the discipline of watching that bet, adjusting it and telling the truth about it. It begins with risk: the uncertain events that could push your outcomes off course, for better or for worse."
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
     "type": "text",
     "text": "Vague risks produce vague responses. ‘Supplier problems’ is a worry, not a risk. A useful risk statement names the cause you can see today, the uncertain event, and the effect on a specific objective."
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
     "type": "steps",
     "items": [
      {
       "title": "Set the scene (5 min)",
       "text": "Explain the project goal and say: ‘It is twelve months from now. This project was a painful failure. Why?’"
      },
      {
       "title": "Silent writing (8 min)",
       "text": "Everyone writes reasons independently — sticky notes or a shared board. Silence protects junior voices from anchoring on senior opinions."
      },
      {
       "title": "Round-robin share (12 min)",
       "text": "One reason per person per round until exhausted. No debate yet."
      },
      {
       "title": "Cluster and vote (10 min)",
       "text": "Group similar reasons and dot-vote the most worrying clusters."
      },
      {
       "title": "Convert (10 min)",
       "text": "Turn the top clusters into cause–event–effect risk statements, each with a proposed owner."
      }
     ],
     "title": "Running a 45-minute pre-mortem"
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
     "type": "callout",
     "kind": "warning",
     "text": "Risk lists go stale within weeks. Revisit risks at each iteration review, stage gate or major change, and give anyone on the team a simple way to raise a new risk at any time.",
     "title": "Identification is not a one-off workshop"
    },
    {
     "type": "scenario",
     "situation": "During a risk workshop for a hospital pharmacy system, the head of IT talks for 20 minutes and the rest of the team only agrees with him. You suspect clinical staff have concerns they are not raising. What is the BEST move?",
     "options": [
      {
       "text": "Switch to a silent-writing pre-mortem round so everyone contributes independently before discussion.",
       "feedback": "Correct. Silent, independent input reduces anchoring and status effects and is the quickest way to surface hidden concerns.",
       "best": true
      },
      {
       "text": "Thank the head of IT and close the workshop since the list looks complete.",
       "feedback": "A list built by one voice has blind spots. Ending now locks them in.",
       "best": false
      },
      {
       "text": "Ask the clinical staff to email you their risks privately after the meeting.",
       "feedback": "Better than nothing, but response rates are low and the group loses the chance to build on each other’s ideas.",
       "best": false
      },
      {
       "text": "Escalate to the sponsor that the head of IT dominates meetings.",
       "feedback": "Escalation is premature. You control the facilitation technique — use it first.",
       "best": false
      }
     ],
     "title": "The polite silence"
    },
    {
     "type": "reflection",
     "prompt": "Think of a project you have worked on. Write one risk that actually materialised as an issue. How would a cause–event–effect statement written at the start have changed what the team did?"
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
       "q": "What is the main purpose of silent writing in a pre-mortem?",
       "options": [
        "To reduce anchoring and status effects so all contribute",
        "To save meeting time by avoiding any group discussion",
        "To avoid having to document risks formally afterwards",
        "To let the PM select the risks without team influence"
       ],
       "answer": 0,
       "explain": "Independent input before discussion stops the loudest or most senior voice from shaping everyone’s answers."
      },
      {
       "q": "An assumption log is useful for risk identification because…",
       "options": [
        "each assumption that might be false is a potential risk",
        "assumptions never change once they have been logged",
        "it can replace the risk register on smaller projects",
        "sponsors must sign off every assumption"
       ],
       "answer": 0,
       "explain": "Asking ‘what if this is wrong?’ about each assumption converts hidden uncertainty into explicit risks."
      },
      {
       "q": "A new regulation might allow your team to reuse an approved design, saving six weeks. This is…",
       "options": [
        "an issue",
        "a constraint",
        "an opportunity",
        "a residual risk"
       ],
       "answer": 2,
       "explain": "It is uncertain and would benefit the schedule — a positive risk, or opportunity."
      }
     ]
    }
   ]
  },
  {
   "id": "m5-l2",
   "title": "Analysing Risk: From Heat Maps to Decision Trees",
   "subtitle": "Rank risks quickly, then put numbers on the ones that matter.",
   "minutes": 30,
   "objectives": [
    "Use a probability–impact matrix with defined scales to prioritise risks.",
    "Calculate expected monetary value (EMV) and use it to size contingency.",
    "Solve a simple decision tree and read a Monte Carlo output (P50, P80, S-curve, tornado)."
   ],
   "blocks": [
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
     "type": "callout",
     "kind": "pro",
     "text": "Agree the scale definitions with the sponsor before scoring. Without them, one person’s ‘high’ is another’s ‘medium’ and the heat map becomes decoration. Also capture **urgency** (how soon a response is needed) and **proximity** (how soon it could occur).",
     "title": "Calibrate, don’t guess"
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
     "type": "table",
     "head": [
      "Risk",
      "Probability",
      "Impact (BDT)",
      "EMV (BDT)"
     ],
     "rows": [
      [
       "R1 Customs delay on imported routers",
       "30%",
       "−500,000",
       "−150,000"
      ],
      [
       "R2 Data migration defects need rework",
       "10%",
       "−1,200,000",
       "−120,000"
      ],
      [
       "O1 Bulk-licence discount if order before June",
       "20%",
       "+300,000",
       "+60,000"
      ],
      [
       "Net exposure",
       "",
       "",
       "−210,000"
      ]
     ],
     "title": "Worked example: sizing contingency with EMV"
    },
    {
     "type": "text",
     "text": "A contingency reserve of about **BDT 210,000** covers the expected net exposure for these known risks. It is held by the project manager for identified risks (‘known unknowns’). A **management reserve**, held by the sponsor or organisation, covers unidentified risks (‘unknown unknowns’) and is outside the cost baseline."
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
     "type": "callout",
     "kind": "example",
     "text": "‘Our deterministic plan says 30 November. The simulation gives only a 22% chance of that. P50 is 14 December and P80 is 9 January. We recommend committing to early January and protecting the top three tornado drivers.’ That is honest forecasting — a range with a confidence level, not a single hopeful date.",
     "title": "Turning the S-curve into a sentence"
    },
    {
     "type": "scenario",
     "situation": "Your Monte Carlo analysis shows the target launch date has a 25% probability. The sponsor says: ‘Just remove the pessimistic estimates and run it again.’ What should you do FIRST?",
     "options": [
      {
       "text": "Rerun the model with the optimistic values to keep the sponsor happy.",
       "feedback": "Manipulating inputs to get a desired output destroys the value of the analysis and is a professional-honesty problem.",
       "best": false
      },
      {
       "text": "Walk the sponsor through the tornado chart, show which risks drive the spread and discuss responses that would genuinely raise confidence.",
       "feedback": "Correct. Focus the conversation on the real drivers and actions that change the probability — scope, resources, risk responses — rather than on the numbers themselves.",
       "best": true
      },
      {
       "text": "Escalate to the steering committee that the sponsor is ignoring risk.",
       "feedback": "Premature. Have the evidence-based conversation with the sponsor first.",
       "best": false
      },
      {
       "text": "Quietly add a buffer to the schedule without telling anyone.",
       "feedback": "Hidden buffers erode trust and are usually discovered. Make reserves explicit.",
       "best": false
      }
     ],
     "title": "The confident sponsor"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Expected monetary value (EMV)",
       "def": "Probability multiplied by monetary impact; summed across risks or branches to compare options and size reserves."
      },
      {
       "term": "Contingency reserve",
       "def": "Budget or time within the baseline set aside for identified risks; controlled by the project manager."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
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
       "q": "Option A costs 20,000 and leaves a 10% chance of a −100,000 loss. Option B costs nothing and leaves a 25% chance of the same loss. Which is better by EMV?",
       "options": [
        "B (−25,000 vs −30,000)",
        "A (−30,000 vs −25,000)",
        "They are equal in EMV terms",
        "It cannot be decided from EMV"
       ],
       "answer": 0,
       "explain": "A = −20,000 + (0.10 × −100,000) = −30,000. B = 0.25 × −100,000 = −25,000. B has the less negative EMV."
      },
      {
       "q": "Who normally controls the management reserve?",
       "options": [
        "The project manager, within agreed limits",
        "The team lead responsible for the work",
        "The vendor, under the contract terms",
        "Senior management or the sponsor"
       ],
       "answer": 3,
       "explain": "Management reserve sits outside the baseline and requires management approval to release."
      }
     ]
    }
   ]
  },
  {
   "id": "m5-l3",
   "title": "Responding to Risk & Managing Issues",
   "subtitle": "Pick the right response, give it an owner and a trigger, and resolve issues fast.",
   "minutes": 25,
   "objectives": [
    "Select response strategies for threats and opportunities and justify the choice.",
    "Assign risk owners, triggers, residual and secondary risks in a working risk register.",
    "Run an issue log and escalate at the right level and time."
   ],
   "blocks": [
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
     "type": "text",
     "text": "When a risk becomes real, or a problem appears that nobody predicted, it moves to the **issue log**. Issues need speed, clarity of ownership and a clear path for escalation."
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
        "Share",
        "Accept",
        "Exploit"
       ],
       "answer": 3,
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
       "q": "Which element of an escalation is MOST often missing and most valuable to decision makers?",
       "options": [
        "The project logo and reporting template",
        "A list of everyone who has been informed",
        "Realistic options with a recommendation",
        "The full risk register as an attachment"
       ],
       "answer": 2,
       "explain": "Leaders decide faster and better when given options, trade-offs and a clear recommendation."
      }
     ]
    }
   ]
  },
  {
   "id": "m5-l4",
   "title": "Earned Value Management",
   "subtitle": "Measure progress in money, read the variances, and forecast the finish honestly.",
   "minutes": 35,
   "objectives": [
    "Calculate PV, EV, AC and the core variances and indices.",
    "Choose the right EAC formula for the situation and compute ETC, VAC and TCPI.",
    "Interpret EVM results in plain language for a sponsor."
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
        "−20,000",
        "−10,000"
       ],
       "answer": 3,
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
        "AC + (BAC − EV)",
        "AC + (BAC − EV) ÷ (CPI × SPI)",
        "BAC × SPI"
       ],
       "answer": 1,
       "explain": "When the variance is atypical, assume the remaining work will run at budget rate."
      },
      {
       "q": "TCPI to BAC is 0.92. What does this mean?",
       "options": [
        "The project is 8% over budget and must recover the overrun",
        "Remaining work can run at 92% efficiency and still meet budget",
        "The project is 8% behind schedule on the remaining work",
        "The project must improve its cost efficiency by 92% to finish on budget"
       ],
       "answer": 1,
       "explain": "A TCPI below 1.0 means the remaining work can be done slightly less efficiently than planned and still finish on BAC."
      }
     ]
    }
   ]
  },
  {
   "id": "m5-l5",
   "title": "Agile Metrics, Dashboards & Honest Forecasting",
   "subtitle": "Show progress so people can act on it — without watermelons or vanity charts.",
   "minutes": 30,
   "objectives": [
    "Read burndown, burnup, velocity and flow metrics and avoid common misuse.",
    "Design a status dashboard with defined RAG criteria and decision-oriented content.",
    "Track OKRs and communicate forecasts as ranges with confidence."
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Agile teams rarely calculate EVM, but they still need to see whether they are on track. Their metrics are lighter, more frequent and more visual — and just as easy to misuse. (Scrum and Kanban mechanics were covered in **Deliver**; here we focus on steering with the data they produce.)"
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
     "type": "callout",
     "kind": "insight",
     "text": "…it stops being a good measure. This idea, usually attributed to economist Charles Goodhart, explains why velocity targets, ‘lines of code’ goals and ‘tickets closed’ leaderboards backfire. Measure to learn, not to judge.",
     "title": "When a measure becomes a target…"
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
     "type": "formula",
     "items": [
      {
       "name": "Objective",
       "expr": "Qualitative, inspiring direction",
       "meaning": "e.g. ‘Make clinic booking effortless for patients in Rajshahi’."
      },
      {
       "name": "Key result",
       "expr": "Measurable outcome with a baseline and target",
       "meaning": "e.g. ‘Online bookings rise from 12% to 45% by December’."
      },
      {
       "name": "Progress score",
       "expr": "(current − baseline) ÷ (target − baseline)",
       "meaning": "From 12% to 45%, a current value of 34% scores (34 − 12) ÷ 33 ≈ 0.67. For ambitious ‘stretch’ OKRs many organisations treat about 0.6–0.7 as a healthy result."
      }
     ],
     "title": "OKRs on a project"
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
     "type": "checklist",
     "title": "Dashboard health check",
     "items": [
      "RAG criteria are written down and agreed with the sponsor",
      "The first thing a reader sees is overall status and decisions needed",
      "Forecasts are shown as ranges with confidence levels",
      "Trends are shown, not just this week’s snapshot",
      "Top risks and issues have named owners",
      "At least one outcome or benefit measure appears, not only activity",
      "Data refreshes automatically from the work-management tool where possible",
      "No metric is used to compare or rank individual team members",
      "Someone has tested the dashboard with a real reader in under one minute"
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
       "q": "A key result moves from a baseline of 20 to a current 50 against a target of 80. What is its progress score?",
       "options": [
        "0.38",
        "0.50",
        "0.63",
        "0.75"
       ],
       "answer": 1,
       "explain": "(50 − 20) ÷ (80 − 20) = 30 ÷ 60 = 0.50."
      },
      {
       "q": "What is the MOST effective way to prevent watermelon reporting?",
       "options": [
        "Use objective RAG criteria and reward early bad news",
        "Ban the colour red so teams focus on solutions, not blame",
        "Report less often so problems have time to be resolved",
        "Let each PM define green in a way that suits their project"
       ],
       "answer": 0,
       "explain": "Objective thresholds plus psychological safety around bad news keep status honest."
      },
      {
       "q": "A forecast states ‘85% likely by 2 June’. This is an example of…",
       "options": [
        "a probabilistic forecast",
        "a delivery guarantee",
        "a schedule baseline",
        "a velocity target for the team"
       ],
       "answer": 0,
       "explain": "It expresses a date with a confidence level based on data."
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
 "code": "Lead",
 "title": "Lead — People, Teams & Communication",
 "subtitle": "Grow teams that trust each other, resolve conflict well and communicate with purpose.",
 "outcomes": [
  "Apply servant and situational leadership and support teams through development stages.",
  "Motivate people using intrinsic drivers and lead with emotional intelligence.",
  "Resolve conflict with the right mode and negotiate on interests using BATNA.",
  "Clarify decision rights with RACI/DACI and plan communication that is read and acted upon.",
  "Lead remote, hybrid and cross-cultural teams and coach using GROW and SBI."
 ],
 "lessons": [
  {
   "id": "m6-l1",
   "title": "Leadership Styles & Team Development",
   "subtitle": "Serve the team, adapt your style, and build the safety that high performance needs.",
   "minutes": 30,
   "objectives": [
    "Explain servant leadership and apply situational leadership to individual team members.",
    "Recognise Tuckman’s stages and choose leader behaviours for each.",
    "Describe the traits of high-performing teams and practical ways to build psychological safety."
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Plans do not deliver projects; people do. **Lead** — stage 6 of the ZPMP Value Loop — is where a project manager earns the trust that makes every other stage work. In modern practice, the PM is less a boss and more a **multiplier**: someone who makes a group of capable people more effective together than apart."
    },
    {
     "type": "framework",
     "items": [
      {
       "label": "S1",
       "title": "Remove impediments",
       "text": "Clear the blockers the team cannot clear themselves — access, approvals, missing information, outside interference."
      },
      {
       "label": "S2",
       "title": "Shield focus",
       "text": "Protect the team from constant interruptions and unprioritised requests; channel demand through the backlog or change process."
      },
      {
       "label": "S3",
       "title": "Grow people",
       "text": "Invest in skills, give stretch opportunities and share credit publicly."
      },
      {
       "label": "S4",
       "title": "Listen first",
       "text": "Ask before telling. The people closest to the work usually see the problem most clearly."
      },
      {
       "label": "S5",
       "title": "Hold the purpose",
       "text": "Keep reminding everyone why the work matters and who benefits from it."
      }
     ],
     "title": "Servant leadership in practice"
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "A servant leader still sets direction, holds standards and makes hard calls. The difference is the motive — the leader’s authority is used for the team’s success and the project’s value, not for personal status.",
     "title": "Servant does not mean passive"
    },
    {
     "type": "text",
     "text": "No single style fits every person or moment. **Situational leadership** (associated with Hersey and Blanchard) matches the leader’s mix of direction and support to each person’s competence and commitment on a specific task."
    },
    {
     "type": "table",
     "head": [
      "Person’s state on this task",
      "Leader style",
      "What it looks like"
     ],
     "rows": [
      [
       "New and enthusiastic, low skill",
       "Directing",
       "Clear instructions, close follow-up, frequent check-ins"
      ],
      [
       "Some skill, confidence dipping",
       "Coaching",
       "Still directive, plus explanation, encouragement and two-way talk"
      ],
      [
       "Capable but hesitant or unsure",
       "Supporting",
       "Less direction; ask questions, build confidence, share decisions"
      ],
      [
       "Skilled and committed",
       "Delegating",
       "Agree outcomes, then step back; be available when asked"
      ]
     ],
     "title": "Situational leadership: match style to readiness"
    },
    {
     "type": "callout",
     "kind": "example",
     "text": "Tanvir is a senior back-end developer (delegate API design to him) but has never presented to a steering committee (direct and coach him on that). Style is chosen per **task**, not per person.",
     "title": "Same person, different styles"
    },
    {
     "type": "flow",
     "items": [
      {
       "label": "Forming",
       "text": "Polite, unsure; leader provides clarity on goals and roles"
      },
      {
       "label": "Storming",
       "text": "Friction over ideas and approaches; leader coaches and facilitates conflict"
      },
      {
       "label": "Norming",
       "text": "Agreements form; leader supports and reinforces working norms"
      },
      {
       "label": "Performing",
       "text": "Self-managing and productive; leader delegates and removes blockers"
      },
      {
       "label": "Adjourning",
       "text": "Work ends; leader recognises contributions and supports transitions"
      }
     ],
     "title": "Tuckman’s team development stages"
    },
    {
     "type": "callout",
     "kind": "pro",
     "text": "A new member, a reorganisation or a crisis can send a performing team back to storming. Expect it, name it and help the team re-norm — often with a fresh working agreement.",
     "title": "Stages are not a one-way street"
    },
    {
     "type": "framework",
     "items": [
      {
       "label": "PS",
       "title": "Psychological safety",
       "text": "People can ask questions, admit mistakes and challenge ideas without fear of humiliation or punishment."
      },
      {
       "label": "CG",
       "title": "Clear, shared goal",
       "text": "Everyone can state what success looks like and why it matters."
      },
      {
       "label": "DT",
       "title": "Dependability",
       "text": "People do what they say, on time and to standard."
      },
      {
       "label": "RS",
       "title": "Clear roles & structure",
       "text": "Who decides what, and how work flows, is understood."
      },
      {
       "label": "CF",
       "title": "Constructive conflict",
       "text": "Debate ideas openly, then commit — disagreement is about the work, never the person."
      },
      {
       "label": "SO",
       "title": "Self-organisation",
       "text": "The team decides how to do its work within agreed boundaries."
      }
     ],
     "title": "Traits of high-performing teams"
    },
    {
     "type": "steps",
     "items": [
      {
       "title": "Frame work as learning",
       "text": "Say early: ‘This is new; we will get things wrong and that is how we find the right answer.’"
      },
      {
       "title": "Model fallibility",
       "text": "Admit your own mistakes and say ‘I might be missing something — what do you see?’"
      },
      {
       "title": "Ask genuine questions",
       "text": "Invite the quietest voices first; use silent brainstorming."
      },
      {
       "title": "Respond productively",
       "text": "Thank people who bring bad news; focus on the fix, not the blame."
      },
      {
       "title": "Run blameless reviews",
       "text": "After incidents, ask what in the system allowed this, not who is at fault."
      }
     ],
     "title": "Five habits that build psychological safety"
    },
    {
     "type": "scenario",
     "situation": "In stand-ups, a newly joined data engineer never raises blockers. Yesterday you learned she has been stuck for three days waiting for database access. What should the project manager do FIRST?",
     "options": [
      {
       "text": "Remind the whole team at the next stand-up that blockers must be raised immediately.",
       "feedback": "A public reminder may make her feel singled out and does not address why she stayed silent.",
       "best": false
      },
      {
       "text": "Report to her line manager that she is not following the process.",
       "feedback": "Punitive escalation destroys safety and teaches everyone to hide problems.",
       "best": false
      },
      {
       "text": "Assign her a buddy to monitor her work.",
       "feedback": "Support can help later, but it skips understanding the cause and fixing the access.",
       "best": false
      },
      {
       "text": "Fix the access, then speak with her privately to understand what made raising it hard and agree an easy way to flag blockers.",
       "feedback": "Correct. Remove the impediment, then build safety one-to-one. The goal is to learn what got in the way, not to blame.",
       "best": true
      }
     ],
     "title": "The quiet expert"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Servant leadership",
       "def": "A leadership approach that focuses on serving the team — removing obstacles, growing people and enabling them to deliver value."
      },
      {
       "term": "Psychological safety",
       "def": "A shared belief within a team that it is safe to take interpersonal risks such as speaking up, asking questions or admitting mistakes."
      },
      {
       "term": "Tuckman model",
       "def": "A model of team development through forming, storming, norming, performing and adjourning."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "A team member is highly skilled and motivated on a task. Which situational style fits best?",
       "options": [
        "Directing",
        "Coaching",
        "Supporting",
        "Delegating"
       ],
       "answer": 3,
       "explain": "High competence and high commitment call for delegating: agree outcomes and step back."
      },
      {
       "q": "Team members are openly arguing about the technical approach two weeks after kick-off. Which Tuckman stage is this most likely?",
       "options": [
        "Forming",
        "Storming",
        "Norming",
        "Adjourning"
       ],
       "answer": 1,
       "explain": "Friction over ideas and ways of working is typical of storming."
      },
      {
       "q": "Which behaviour MOST directly builds psychological safety?",
       "options": [
        "Publicly naming who caused each defect to deter repeats",
        "Thanking someone who reports a problem early",
        "Keeping every meeting short and focused",
        "Using a strict RACI for every decision"
       ],
       "answer": 1,
       "explain": "Rewarding candour signals it is safe to speak up."
      },
      {
       "q": "Which statement about servant leadership is accurate?",
       "options": [
        "The leader avoids making decisions for the team",
        "The leader uses authority to enable the team’s success",
        "It only works in Scrum teams with a dedicated coach",
        "It means doing the team’s work for them when needed"
       ],
       "answer": 1,
       "explain": "Servant leaders still lead; they direct their influence toward enabling the team."
      }
     ]
    }
   ]
  },
  {
   "id": "m6-l2",
   "title": "Motivation & Emotional Intelligence",
   "subtitle": "Understand what really drives people — including you — and lead with self-awareness.",
   "minutes": 25,
   "objectives": [
    "Distinguish intrinsic and extrinsic motivation and apply autonomy, mastery and purpose.",
    "Use hygiene-factor thinking to diagnose dissatisfaction.",
    "Apply the components of emotional intelligence to everyday project moments."
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Project managers often lead people who do not report to them and whose pay they do not set. That makes understanding motivation essential: you must create conditions in which people **want** to do great work."
    },
    {
     "type": "compare",
     "columns": [
      {
       "title": "Extrinsic",
       "items": [
        "Comes from outside: pay, bonuses, titles, deadlines, praise",
        "Works well for routine, well-defined tasks",
        "Can crowd out interest in creative work if overused",
        "Its effect fades once the reward is expected"
       ]
      },
      {
       "title": "Intrinsic",
       "items": [
        "Comes from the work itself: interest, growth, meaning",
        "Drives quality and creativity in complex work",
        "Sustains effort when no one is watching",
        "Grows when people have choice and see impact"
       ]
      }
     ],
     "title": "Two sources of motivation"
    },
    {
     "type": "framework",
     "items": [
      {
       "label": "AU",
       "title": "Autonomy",
       "text": "Let people choose **how** they do their work — methods, tools, sequence — within agreed outcomes and constraints."
      },
      {
       "label": "MA",
       "title": "Mastery",
       "text": "Provide challenges slightly beyond current skill, plus time to learn, feedback and visible progress."
      },
      {
       "label": "PU",
       "title": "Purpose",
       "text": "Connect tasks to the people who benefit: show the farmer using the app, the patient who books in two minutes."
      }
     ],
     "title": "Autonomy, mastery, purpose"
    },
    {
     "type": "callout",
     "kind": "definition",
     "text": "A two-factor view (associated with Frederick Herzberg) separates **hygiene factors** — pay, working conditions, policies, job security — whose absence causes dissatisfaction, from **motivators** — achievement, recognition, responsibility, growth — that create real engagement. Fixing hygiene stops complaints; it rarely creates enthusiasm on its own.",
     "title": "Hygiene factors vs motivators"
    },
    {
     "type": "table",
     "head": [
      "What you observe",
      "Likely root cause",
      "Useful response"
     ],
     "rows": [
      [
       "Complaints about laptops, overtime pay, seating",
       "Hygiene problem",
       "Fix or escalate the condition; do not answer with a pep talk"
      ],
      [
       "Work is done but with no initiative",
       "Low autonomy or purpose",
       "Delegate decisions; connect work to users"
      ],
      [
       "Bored senior engineer",
       "No mastery challenge",
       "Offer a stretch problem or mentoring role"
      ],
      [
       "Drop in energy after a reorganisation",
       "Uncertainty and loss of purpose",
       "Explain the why, clarify roles, listen"
      ]
     ],
     "title": "Diagnose before you motivate"
    },
    {
     "type": "text",
     "text": "**Emotional intelligence (EI)** is the ability to recognise and manage your own emotions and to read and influence the emotions of others. Popularised by Daniel Goleman, it is often grouped into five components."
    },
    {
     "type": "framework",
     "items": [
      {
       "label": "SA",
       "title": "Self-awareness",
       "text": "Know your moods, triggers, strengths and limits — e.g. noticing you get curt when a vendor misses dates."
      },
      {
       "label": "SR",
       "title": "Self-regulation",
       "text": "Pause before reacting; choose the response. ‘Let me come back to you in an hour’ is a powerful sentence."
      },
      {
       "label": "MO",
       "title": "Motivation",
       "text": "Drive that comes from inner standards and the goal, staying constructive under pressure."
      },
      {
       "label": "EM",
       "title": "Empathy",
       "text": "Understand others’ perspectives and feelings — including the sponsor’s fears and the user’s frustrations."
      },
      {
       "label": "SS",
       "title": "Social skills",
       "text": "Build networks, influence, manage conflict and inspire — EI turned outward into action."
      }
     ],
     "title": "Five components of emotional intelligence"
    },
    {
     "type": "steps",
     "items": [
      {
       "title": "Notice",
       "text": "Name the feeling privately: ‘I am angry because I feel blamed.’"
      },
      {
       "title": "Breathe and delay",
       "text": "Slow breathing; delay replies to heated messages."
      },
      {
       "title": "Get curious",
       "text": "Ask: ‘What pressure might the other person be under?’"
      },
      {
       "title": "Respond to the problem",
       "text": "Return to facts and next steps."
      }
     ],
     "title": "A 90-second reset when emotions spike"
    },
    {
     "type": "scenario",
     "situation": "At 11 p.m. a client director emails the whole steering group saying your team is ‘incompetent’ because a demo crashed. You feel furious. What is the BEST action?",
     "options": [
      {
       "text": "Wait until morning, gather facts, then call the director to listen, acknowledge the impact and share a recovery plan.",
       "feedback": "Correct. Self-regulation first, then empathy and a fact-based plan — ideally in a conversation, not an email war.",
       "best": true
      },
      {
       "text": "Reply-all immediately, pointing out the client’s own environment caused the crash.",
       "feedback": "Even if true, a public, emotional reply escalates conflict and damages the relationship.",
       "best": false
      },
      {
       "text": "Ignore the email; it will blow over.",
       "feedback": "Avoidance leaves the steering group with only one version of events.",
       "best": false
      },
      {
       "text": "Forward it to your team so they know how the client feels.",
       "feedback": "This spreads stress without a plan and can harm morale.",
       "best": false
      }
     ],
     "title": "The angry email"
    },
    {
     "type": "case",
     "title": "University LMS migration: motivation slump",
     "context": "A private university in Sylhet is moving 600 courses to a new learning management system. Six instructional designers were seconded part-time from faculties. After two months, quality is falling: courses are copied over without redesign, and designers skip review meetings. In one-to-ones they say: ‘This is admin work — nobody will notice if it is good’, and two mention they still have full teaching loads.",
     "questions": [
      "Which issues here are hygiene problems and which are motivator problems?",
      "Propose three actions using autonomy, mastery and purpose.",
      "What should the PM escalate, and to whom?"
     ],
     "answer": "Hygiene: the unchanged teaching load (workload and fairness) — a structural issue the PM should escalate to the deans and the sponsor, asking for workload relief or a revised timeline. Motivators: lack of purpose (‘nobody will notice’) and no mastery. Actions: (1) **Purpose** — share student feedback and data from pilot courses; invite students to demo days. (2) **Autonomy** — let designers choose which redesign patterns to use within a quality rubric they help write. (3) **Mastery** — run short workshops on active-learning design and showcase excellent courses with credit to their designers. Recognition by the Pro-VC at a faculty meeting costs nothing and signals that the work matters."
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Intrinsic motivation",
       "def": "Motivation that comes from the satisfaction of the work itself — interest, growth and meaning."
      },
      {
       "term": "Emotional intelligence",
       "def": "The ability to recognise, understand and manage one’s own emotions and to recognise and influence others’ emotions."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Team members complain that their overtime has not been paid for two months. In two-factor terms, this is…",
       "options": [
        "a motivator (achievement) issue",
        "a lack-of-purpose issue",
        "a mastery and growth issue",
        "a hygiene factor issue"
       ],
       "answer": 3,
       "explain": "Pay is a hygiene factor; its absence causes dissatisfaction."
      },
      {
       "q": "Which action BEST increases autonomy?",
       "options": [
        "Giving a detailed checklist and method for every task",
        "Letting the team choose its own testing approach within standards",
        "Adding a team bonus for finishing work faster than planned",
        "Holding daily status calls to review each person’s tasks"
       ],
       "answer": 1,
       "explain": "Autonomy is about choice in how work is done within agreed outcomes."
      },
      {
       "q": "A PM notices she gets defensive whenever QA reports defects. Recognising this pattern is an example of…",
       "options": [
        "empathy",
        "social skill",
        "self-awareness",
        "situational leadership"
       ],
       "answer": 2,
       "explain": "Recognising one’s own emotional triggers is self-awareness."
      },
      {
       "q": "For creative, complex knowledge work, which approach is MOST likely to sustain high-quality effort?",
       "options": [
        "Large bonuses tied to output volume",
        "Strict monitoring of hours and output",
        "Public ranking of individual performance",
        "Building autonomy, mastery and purpose"
       ],
       "answer": 3,
       "explain": "Intrinsic drivers sustain quality in complex work; heavy extrinsic incentives can backfire."
      }
     ]
    }
   ]
  },
  {
   "id": "m6-l3",
   "title": "Conflict Resolution & Negotiation",
   "subtitle": "Use conflict as fuel, not fire — and negotiate on interests, not positions.",
   "minutes": 30,
   "objectives": [
    "Choose among the five Thomas–Kilmann conflict modes based on the situation.",
    "Separate interests from positions and use BATNA to negotiate with confidence.",
    "Facilitate a conflict conversation step by step."
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Conflict is normal on projects: competing priorities, scarce resources, technical opinions, schedules and personalities. Unmanaged, it drains energy. Managed well, it surfaces better ideas. The skill lies in choosing the right **mode** and handling it early, privately and on the facts."
    },
    {
     "type": "table",
     "head": [
      "Mode",
      "Assertive / cooperative",
      "When it fits",
      "Risk if overused"
     ],
     "rows": [
      [
       "Collaborating (problem-solving)",
       "High / high",
       "Important issue, time available, need commitment from both sides",
       "Slow; not worth it for trivial issues"
      ],
      [
       "Competing (forcing)",
       "High / low",
       "Emergencies, safety, legal or ethical non-negotiables",
       "Resentment, lost ideas, low buy-in"
      ],
      [
       "Compromising (reconciling)",
       "Medium / medium",
       "Equal power, time pressure, temporary fix acceptable",
       "Both sides partly unhappy; may mask the real problem"
      ],
      [
       "Accommodating (smoothing)",
       "Low / high",
       "Issue matters more to the other side; preserving relationship; you are wrong",
       "Your concerns pile up unheard"
      ],
      [
       "Avoiding (withdrawing)",
       "Low / low",
       "Trivial issue, emotions need cooling, someone else is better placed",
       "Problems grow while ignored"
      ]
     ],
     "title": "Thomas–Kilmann modes: when to use each"
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "Situational exam questions usually favour **collaborating / problem-solving** because it addresses root causes. But a safety violation calls for forcing, and a two-minute disagreement over font colours calls for accommodating or avoiding. Match the mode to the stakes and time.",
     "title": "Collaborate is the default, not the only answer"
    },
    {
     "type": "steps",
     "items": [
      {
       "title": "Meet early and privately",
       "text": "Address it before it hardens; public settings make people defend positions."
      },
      {
       "title": "Set ground rules",
       "text": "One person speaks at a time; focus on the problem; assume good intent."
      },
      {
       "title": "Hear each side fully",
       "text": "Ask each person to describe the situation and what matters to them. Summarise back."
      },
      {
       "title": "Find shared goals and facts",
       "text": "‘We both want the release to be stable by 15 June.’ Separate facts from interpretations."
      },
      {
       "title": "Generate options together",
       "text": "Brainstorm before judging. Look for options that serve both sets of interests."
      },
      {
       "title": "Agree and follow up",
       "text": "Write down the agreement, owners and a check-in date."
      }
     ],
     "title": "Facilitating a conflict conversation"
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
     "kind": "example",
     "text": "A Dhaka fintech is negotiating cloud-hosting renewal. The incumbent asks for a 30% increase. The PM’s team has already priced a migration to another provider at a one-time cost plus 10% higher run costs for six months. That is their BATNA. Knowing it, they can calmly propose a 5% increase with a two-year commitment — and mean it when they say they have an alternative.",
     "title": "BATNA in action"
    },
    {
     "type": "case",
     "title": "5G rollout: civil works vs radio planning",
     "context": "A mobile operator is rolling out 5G sites across Dhaka and Narayanganj. The radio planning lead wants to change antenna positions at 40 sites after new drive-test data. The civil works contractor manager refuses: towers are already reinforced to the old design, and every change costs money and two weeks. The two have stopped speaking and copy you on increasingly hostile emails. The regulator’s coverage milestone is in 10 weeks.",
     "questions": [
      "What are the likely interests behind each position?",
      "Which conflict mode would you aim for and why?",
      "Outline the steps you would take this week."
     ],
     "answer": "Interests — radio planning: meet coverage and quality targets, avoid poor customer experience; civil works: protect margin, avoid unpaid rework, keep crews productive. Shared: hit the regulator milestone. Aim to **collaborate**: the stakes are high and both groups’ commitment is needed. Steps: (1) meet each lead privately to hear concerns; (2) joint session with data — which of the 40 sites truly need changes for coverage, and which are nice-to-have? (3) generate options: change only sites critical to the milestone now and batch others later; use objective criteria (contracted change rates) for payment; re-sequence crews to absorb some work; (4) put the agreed approach through change control; (5) agree a weekly sync between both leads. If no agreement is possible before a hard deadline, escalate with options to the sponsor."
    },
    {
     "type": "scenario",
     "situation": "Two functional managers each claim the same senior tester for the same two weeks. Both are senior to you and are getting heated in a meeting. What should you do FIRST?",
     "options": [
      {
       "text": "Pause the debate, meet both privately to understand the interests and constraints, then bring options to a joint conversation.",
       "feedback": "Correct. Understand interests first; often a split schedule, a substitute or a re-sequence solves it. Escalate with options only if they cannot agree.",
       "best": true
      },
      {
       "text": "Decide yourself, based on whichever project you think matters more.",
       "feedback": "Forcing without authority or data rarely sticks, and you are not the right decider on cross-project priorities.",
       "best": false
      },
      {
       "text": "Escalate straight to the portfolio board.",
       "feedback": "Escalation may be needed later, but the parties have not yet tried to solve it.",
       "best": false
      },
      {
       "text": "Suggest they each take the tester for one week to split it evenly.",
       "feedback": "Compromise might be the result, but proposing it before understanding needs may produce two half-failed projects.",
       "best": false
      }
     ],
     "title": "Two seniors, one tester"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Thomas–Kilmann modes",
       "def": "Five conflict-handling approaches — competing, collaborating, compromising, avoiding and accommodating — mapped on assertiveness and cooperativeness."
      },
      {
       "term": "BATNA",
       "def": "Best Alternative To a Negotiated Agreement: the course of action a party will take if negotiations fail."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "A team member is about to deploy code that bypasses a mandatory security control. Which conflict mode is appropriate?",
       "options": [
        "Accommodating / smoothing",
        "Avoiding",
        "Competing / forcing",
        "Compromising"
       ],
       "answer": 2,
       "explain": "Safety, security and legal non-negotiables justify a firm, directive stance."
      },
      {
       "q": "Which mode produces a win-win outcome and long-term commitment, but takes the most time?",
       "options": [
        "Collaborating",
        "Compromising",
        "Accommodating",
        "Avoiding"
       ],
       "answer": 0,
       "explain": "Collaboration searches for solutions satisfying both parties’ interests fully."
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
        "a position",
        "an objective criterion"
       ],
       "answer": 2,
       "explain": "It is a stated demand. The interest is the reason behind it."
      },
      {
       "q": "Two team members disagree mildly about a variable-naming convention. The release is tomorrow. Best mode?",
       "options": [
        "Collaborate through a two-hour design workshop",
        "Escalate the decision to the project sponsor",
        "Force a company-wide naming standard immediately",
        "Accommodate or defer, given the low stakes"
       ],
       "answer": 3,
       "explain": "Low-stakes issues under time pressure do not justify heavy collaboration; revisit later if needed."
      }
     ]
    }
   ]
  },
  {
   "id": "m6-l4",
   "title": "Decisions, Roles & Communication Planning",
   "subtitle": "Make decisions visible, roles unambiguous and communication deliberate.",
   "minutes": 30,
   "objectives": [
    "Choose a decision method (consensus, consent, fist-of-five, delegated) to suit the stakes.",
    "Build RACI and DACI charts that avoid common errors.",
    "Plan communication using channel counts, push/pull/interactive methods and status reports that work."
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Many project delays are really **decision delays**: nobody knows who decides, so nobody does. Pair clear decision rights with deliberate communication and you remove a huge source of waste."
    },
    {
     "type": "compare",
     "columns": [
      {
       "title": "Group methods",
       "items": [
        "**Consensus** – everyone can live with and support it; slow but strong buy-in",
        "**Consent** – proceed unless someone has a reasoned objection; faster than consensus",
        "**Majority vote** – quick, but the minority may disengage",
        "**Fist-of-five** – quick read of support levels"
       ]
      },
      {
       "title": "Individual methods",
       "items": [
        "**Decide with input** – one decider consults, then decides; good default for most work",
        "**Delegated** – the person closest to the work decides within boundaries",
        "**Command** – for emergencies when speed matters most"
       ]
      }
     ],
     "title": "Choosing a decision method"
    },
    {
     "type": "table",
     "head": [
      "Fingers",
      "Meaning",
      "Action"
     ],
     "rows": [
      [
       "0 (fist)",
       "I object — I cannot support this",
       "Stop; hear the concern"
      ],
      [
       "1",
       "Serious concerns",
       "Discuss before proceeding"
      ],
      [
       "2",
       "Some concerns I would like to discuss",
       "Discuss; adjust if needed"
      ],
      [
       "3",
       "I can live with it",
       "Proceed"
      ],
      [
       "4",
       "I support it",
       "Proceed"
      ],
      [
       "5",
       "I strongly support it and will champion it",
       "Proceed"
      ]
     ],
     "title": "Fist-of-five"
    },
    {
     "type": "framework",
     "items": [
      {
       "label": "R",
       "title": "Responsible",
       "text": "Does the work. Can be several people."
      },
      {
       "label": "A",
       "title": "Accountable",
       "text": "Owns the outcome and approves. **Exactly one per activity.**"
      },
      {
       "label": "C",
       "title": "Consulted",
       "text": "Gives input before the work or decision — two-way."
      },
      {
       "label": "I",
       "title": "Informed",
       "text": "Kept up to date after the fact — one-way."
      }
     ],
     "title": "RACI: one chart, four roles"
    },
    {
     "type": "template",
     "title": "RACI matrix",
     "purpose": "Clarify who does what for key deliverables and decisions; check every row has exactly one A.",
     "columns": [
      "Activity / decision",
      "Sponsor",
      "Project manager",
      "Product owner",
      "Tech lead",
      "Ops manager"
     ],
     "example": [
      [
       "Approve go-live",
       "A",
       "R",
       "C",
       "C",
       "C"
      ],
      [
       "Prioritise backlog",
       "I",
       "C",
       "A/R",
       "C",
       "I"
      ]
     ],
     "rows": 8
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "Too many A’s on one row (nobody really owns it); no A at all; a person with R everywhere (bottleneck); a column of only I’s (why are they on the chart?); and too many C’s, which slows every decision.",
     "title": "RACI smells"
    },
    {
     "type": "callout",
     "kind": "definition",
     "text": "For key decisions, many teams use **DACI**: a **Driver** who runs the decision process, one **Approver** who makes the call, **Contributors** who provide expertise and **Informed** people who hear the outcome. It makes clear that the person organising the decision is not necessarily the one making it.",
     "title": "DACI for decisions"
    },
    {
     "type": "formula",
     "items": [
      {
       "name": "Number of channels",
       "expr": "n × (n − 1) ÷ 2",
       "meaning": "n is the number of people. 10 people → 45 channels; 15 people → 105."
      },
      {
       "name": "Channels added",
       "expr": "new total − old total",
       "meaning": "Growing a team from 10 to 15 adds 105 − 45 = 60 channels — complexity grows much faster than headcount."
      }
     ],
     "title": "Communication channels"
    },
    {
     "type": "compare",
     "columns": [
      {
       "title": "Push",
       "items": [
        "Sent to specific people",
        "Email, status report, notification",
        "Good for: updates, formal notices",
        "Risk: sent ≠ read"
       ]
      },
      {
       "title": "Pull",
       "items": [
        "People access when they need it",
        "Wiki, dashboard, shared repository",
        "Good for: large audiences, reference info",
        "Risk: nobody looks"
       ]
      },
      {
       "title": "Interactive",
       "items": [
        "Real-time, two-way exchange",
        "Meetings, calls, workshops, chat",
        "Good for: decisions, conflict, complex or sensitive topics",
        "Risk: time-consuming"
       ]
      }
     ],
     "title": "Push, pull and interactive"
    },
    {
     "type": "template",
     "title": "Communication plan",
     "purpose": "Decide deliberately who needs what, when, how and from whom.",
     "columns": [
      "Audience",
      "Information needed",
      "Method (push/pull/interactive)",
      "Frequency",
      "Owner",
      "Feedback loop"
     ],
     "example": [
      [
       "Steering committee",
       "Status, forecast, decisions needed, top risks",
       "Interactive meeting + pushed one-pager",
       "Monthly",
       "PM",
       "Decisions log reviewed next meeting"
      ],
      [
       "Branch staff (users)",
       "What changes, when, training dates",
       "Push (SMS/email) + pull (FAQ page)",
       "Fortnightly, weekly near go-live",
       "Change lead",
       "Pulse survey"
      ]
     ],
     "rows": 8
    },
    {
     "type": "steps",
     "items": [
      {
       "title": "Bottom line up front",
       "text": "Status colour, trend and one-sentence summary."
      },
      {
       "title": "Decisions or help needed",
       "text": "What, from whom, by when."
      },
      {
       "title": "Progress against outcomes",
       "text": "Milestones and value delivered, not a list of meetings held."
      },
      {
       "title": "Forecast",
       "text": "Dates and cost as ranges, with change since last report."
      },
      {
       "title": "Top risks and issues",
       "text": "Three to five, with owners and actions."
      },
      {
       "title": "Keep it to one page",
       "text": "Link to detail for those who want it."
      }
     ],
     "title": "A status report people actually read"
    },
    {
     "type": "scenario",
     "situation": "Your weekly 6-page status email has a 20% open rate, and the sponsor was surprised by a delay you reported three weeks ago. What is the BEST next step?",
     "options": [
      {
       "text": "Send the report twice a week so it gets noticed.",
       "feedback": "More of an ineffective format will not fix the problem.",
       "best": false
      },
      {
       "text": "Mark the email as high-priority.",
       "feedback": "Overuse of priority flags trains people to ignore them.",
       "best": false
      },
      {
       "text": "Note in the lessons learned that the sponsor did not read the report.",
       "feedback": "Blaming the reader does not fix communication; the sender owns effectiveness.",
       "best": false
      },
      {
       "text": "Ask the sponsor how they prefer to receive information, then switch to a one-page, decision-first summary plus a short monthly conversation for key items.",
       "feedback": "Correct. Tailor the method to the audience and use interactive communication for important news.",
       "best": true
      }
     ],
     "title": "The ignored report"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "RACI",
       "def": "A responsibility assignment matrix showing who is Responsible, Accountable, Consulted and Informed for each activity or decision."
      },
      {
       "term": "Fist-of-five",
       "def": "A quick group technique in which people show zero to five fingers to signal their level of support for a proposal."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "A team grows from 6 to 9 people. How many communication channels are added?",
       "options": [
        "3",
        "15",
        "36",
        "21"
       ],
       "answer": 3,
       "explain": "6 people: 6×5÷2 = 15. 9 people: 9×8÷2 = 36. Added: 36 − 15 = 21."
      },
      {
       "q": "Which RACI problem is MOST serious?",
       "options": [
        "Two people marked Responsible on one task",
        "Several people marked Informed on a decision",
        "The sponsor marked Consulted on a deliverable",
        "Three people marked Accountable for one decision"
       ],
       "answer": 3,
       "explain": "Each activity needs exactly one Accountable person; multiple A’s blur ownership."
      },
      {
       "q": "A sensitive change to staff roles needs to be explained to affected employees. Which method fits best?",
       "options": [
        "Interactive — meet them and allow questions",
        "Pull — post a detailed explanation on the team wiki",
        "Push — send a mass email to all employees",
        "None — say nothing until the go-live date"
       ],
       "answer": 0,
       "explain": "Sensitive and complex messages need two-way, real-time communication."
      },
      {
       "q": "In a fist-of-five vote, one member shows two fingers. What should happen?",
       "options": [
        "Pause to hear and discuss their concerns",
        "Proceed immediately, as most members agree",
        "Ignore it, because the majority view wins",
        "Remove the member from the decision"
       ],
       "answer": 0,
       "explain": "Two or fewer signals concerns worth discussing before proceeding."
      },
      {
       "q": "In DACI, who makes the final decision?",
       "options": [
        "Driver",
        "Contributor",
        "Approver",
        "Informed"
       ],
       "answer": 2,
       "explain": "The Approver makes the call; the Driver runs the process."
      }
     ]
    }
   ]
  },
  {
   "id": "m6-l5",
   "title": "Remote, Hybrid & Cross-Cultural Teams; Coaching & Feedback",
   "subtitle": "Lead people you rarely see, across cultures and time zones, and help them grow.",
   "minutes": 30,
   "objectives": [
    "Design working agreements for remote and hybrid teams, including async-first practices.",
    "Adapt communication across cultural dimensions without stereotyping.",
    "Use GROW coaching and SBI feedback in one-to-ones."
   ],
   "blocks": [
    {
     "type": "text",
     "text": "In 2026 most project teams are at least partly distributed — a developer in Khulna, a product owner in Dhaka, a vendor in Kuala Lumpur and a client in Frankfurt. Distance strips away the hallway conversations that used to carry context, so leaders must design what used to happen naturally."
    },
    {
     "type": "framework",
     "items": [
      {
       "label": "WA",
       "title": "Working agreement",
       "text": "A short, team-written page: core hours, response-time expectations, which channel for what, camera norms, how decisions are recorded."
      },
      {
       "label": "ASY",
       "title": "Async-first",
       "text": "Default to written updates, recorded demos and shared documents so people in different time zones can contribute; use meetings for what truly needs real time."
      },
      {
       "label": "OVR",
       "title": "Overlap windows",
       "text": "Protect two to three hours of shared time for collaboration; rotate inconvenient meeting times fairly."
      },
      {
       "label": "EQ",
       "title": "Hybrid equity",
       "text": "If one person is remote, everyone joins from their own screen so remote people are not second-class participants."
      },
      {
       "label": "CON",
       "title": "Connection",
       "text": "Deliberate informal time — virtual coffee, show-and-tell, occasional in-person meet-ups at key moments such as kick-off."
      }
     ],
     "title": "Remote and hybrid essentials"
    },
    {
     "type": "checklist",
     "title": "Remote team working agreement checklist",
     "items": [
      "Core collaboration hours defined in every member’s time zone",
      "Which tool for urgent, normal and FYI messages is agreed",
      "Expected response times for each channel are written down",
      "Decisions are recorded in one agreed place",
      "Meeting norms: agenda in advance, notes and actions shared within 24 hours",
      "Public holidays and religious observances across locations are on the shared calendar",
      "Inconvenient meeting times rotate fairly",
      "A ‘how to reach me’ and focus-time preference is published by each member",
      "Security rules for devices, networks and shared files are clear",
      "The agreement is reviewed at least every quarter or when membership changes"
     ]
    },
    {
     "type": "text",
     "text": "Culture shapes how people give feedback, disagree, make decisions and view hierarchy and time. Research frameworks such as Geert Hofstede’s dimensions and Erin Meyer’s culture map describe national **tendencies** — useful as hypotheses, never as labels for individuals."
    },
    {
     "type": "table",
     "head": [
      "Dimension",
      "One end",
      "Other end",
      "What the PM can do"
     ],
     "rows": [
      [
       "Power distance",
       "Hierarchy expected; juniors defer",
       "Flat; anyone challenges anyone",
       "Invite input explicitly and privately; use anonymous tools"
      ],
      [
       "Communication context",
       "High-context: meaning in what is unsaid",
       "Low-context: meaning in explicit words",
       "Confirm understanding in writing; ask open questions"
      ],
      [
       "Feedback style",
       "Indirect, softened",
       "Direct, blunt",
       "Agree team feedback norms; explain intent"
      ],
      [
       "Time orientation",
       "Flexible, relationships first",
       "Linear, schedule first",
       "Make deadline importance and reasons explicit"
      ],
      [
       "Uncertainty avoidance",
       "Prefers rules and detailed plans",
       "Comfortable with ambiguity",
       "Balance clarity of process with room to experiment"
      ]
     ],
     "title": "Cultural dimensions that show up on projects"
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "A Bangladeshi engineer educated in Germany and working for a Singapore firm will not fit a national average. Use dimensions to notice and ask — ‘How do you prefer to receive feedback?’ — never to assume.",
     "title": "Generalise carefully"
    },
    {
     "type": "framework",
     "items": [
      {
       "label": "G",
       "title": "Goal",
       "text": "What do you want to achieve? ‘By the end of this conversation, what would be useful?’"
      },
      {
       "label": "R",
       "title": "Reality",
       "text": "What is happening now? What have you tried? What is getting in the way?"
      },
      {
       "label": "O",
       "title": "Options",
       "text": "What could you do? What else? What would someone you admire do?"
      },
      {
       "label": "W",
       "title": "Will / way forward",
       "text": "What will you do, by when? How will you know it worked? What support do you need?"
      }
     ],
     "title": "GROW coaching model"
    },
    {
     "type": "formula",
     "items": [
      {
       "name": "Situation",
       "expr": "When and where",
       "meaning": "‘In yesterday’s client demo…’"
      },
      {
       "name": "Behaviour",
       "expr": "Observable action — not a judgement",
       "meaning": "‘…you answered the integration question with specific test data…’"
      },
      {
       "name": "Impact",
       "expr": "Effect on you, the team or the outcome",
       "meaning": "‘…and the client agreed to sign off the milestone on the spot.’ Works for praise and for correction."
      }
     ],
     "title": "SBI feedback"
    },
    {
     "type": "callout",
     "kind": "pro",
     "text": "A good coaching ratio is mostly questions. The answer someone finds themselves sticks better than the one you hand them — and it builds their capability for the next problem.",
     "title": "Coach by asking, not telling"
    },
    {
     "type": "scenario",
     "situation": "A talented analyst from a high-power-distance background never challenges the client’s architect, even when the analyst’s data shows the architect is wrong. What is the BEST approach?",
     "options": [
      {
       "text": "Tell the analyst in the next team meeting that they must speak up more.",
       "feedback": "Public correction may cause loss of face and further silence.",
       "best": false
      },
      {
       "text": "Present the analyst’s findings yourself without crediting them.",
       "feedback": "This solves the immediate issue but removes credit and growth.",
       "best": false
      },
      {
       "text": "Speak privately, use SBI to recognise the strong analysis, explore what makes challenging difficult (GROW), and agree a supported way — e.g. you introduce the data and invite them to present it.",
       "feedback": "Correct. Private, respectful coaching builds confidence and gives a safe path to contribute.",
       "best": true
      },
      {
       "text": "Accept that this is their culture and do nothing.",
       "feedback": "Respecting culture does not mean leaving valuable insight unheard; adapt the method instead.",
       "best": false
      }
     ],
     "title": "Feedback across cultures"
    },
    {
     "type": "reflection",
     "prompt": "Think of your current or most recent team. Which cultural or remote-working difference has caused the most friction? Write one clause you would add to your team’s working agreement to address it."
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Working agreement",
       "def": "A team-created set of norms describing how members will collaborate, communicate and make decisions."
      },
      {
       "term": "GROW model",
       "def": "A coaching structure: Goal, Reality, Options, Will (way forward)."
      },
      {
       "term": "SBI feedback",
       "def": "A feedback structure describing the Situation, the observable Behaviour and its Impact."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "A hybrid team holds meetings in a room with four people while two join remotely and struggle to follow. What is the BEST fix?",
       "options": [
        "Have everyone join from their own device for equal participation",
        "Ask remote members to come into the office for meetings",
        "Record the meetings so remote members can catch up afterwards",
        "Hold separate meetings for the in-room and remote members"
       ],
       "answer": 0,
       "explain": "Equal participation through individual devices removes the in-room advantage."
      },
      {
       "q": "In SBI, which is a behaviour rather than a judgement?",
       "options": [
        "You were unprofessional in front of the client",
        "You do not care about the project or the client",
        "You have a negative attitude with clients",
        "You arrived 20 minutes after the client call started"
       ],
       "answer": 3,
       "explain": "Behaviour is observable and specific; the others are interpretations."
      },
      {
       "q": "Which GROW question belongs to the ‘Reality’ stage?",
       "options": [
        "What do you want to achieve?",
        "What will you do by Friday?",
        "What other options are there?",
        "What have you already tried?"
       ],
       "answer": 3,
       "explain": "Reality explores the current situation and what has been tried."
      },
      {
       "q": "Why is ‘async-first’ useful for teams spread over several time zones?",
       "options": [
        "It removes the need for any live meetings across time zones",
        "It is cheaper than paying for video-conferencing tools",
        "It lets people contribute without being online at the same time",
        "It hides time-zone differences from managers, clients and partners"
       ],
       "answer": 2,
       "explain": "Async communication respects time zones while keeping meetings for collaboration that truly needs real time."
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
 "code": "Scale",
 "title": "Scale — AI-Powered Project Management, Change & Governance",
 "subtitle": "Multiply your impact with AI and automation, lead adoption and connect projects to strategy responsibly.",
 "outcomes": [
  "Use generative AI copilots for project tasks with strong prompts, verification and data-privacy discipline.",
  "Apply automation, leading indicators and basic predictive analytics, and manage the distinctive risks of AI projects.",
  "Lead organisational change using ADKAR and Kotter and respond constructively to resistance.",
  "Explain PMO types, portfolio and programme governance, prioritisation and stage gates.",
  "Integrate ESG and sustainability considerations into project decisions."
 ],
 "lessons": [
  {
   "id": "m7-l1",
   "title": "Generative AI Copilots in Project Management",
   "subtitle": "Use an AI assistant to draft, summarise and explore — while you stay accountable.",
   "minutes": 35,
   "objectives": [
    "Identify project tasks where a generative AI copilot adds value and where it does not.",
    "Write effective prompts using the ZPMP CRAFT pattern.",
    "Verify AI output and protect confidential and personal data."
   ],
   "blocks": [
    {
     "type": "text",
     "text": "**Scale** — stage 7 of the ZPMP Value Loop — is about multiplying your impact beyond a single project: through technology, through people adopting change, and through governance. Generative AI copilots are now part of everyday project work. Used well, they remove hours of drafting and summarising. Used carelessly, they create confident-sounding errors and data leaks. The project manager remains **accountable for every word and number that leaves the project**, whoever — or whatever — drafted it."
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
       "label": "C",
       "title": "Context",
       "text": "Give the facts the assistant cannot know: project goal, audience, stage, constraints, relevant data (sanitised)."
      },
      {
       "label": "R",
       "title": "Role",
       "text": "Say which perspective to take: ‘Act as a sceptical risk reviewer’ or ‘as a procurement specialist’."
      },
      {
       "label": "A",
       "title": "Ask",
       "text": "State one clear task with a verb: draft, critique, summarise, compare, list."
      },
      {
       "label": "F",
       "title": "Format",
       "text": "Specify structure and length: ‘a table with columns…’, ‘under 150 words’, ‘bullet points for a sponsor’."
      },
      {
       "label": "T",
       "title": "Tests",
       "text": "Add checks: ‘list your assumptions’, ‘flag anything you are unsure of’, ‘do not invent figures — say if data is missing’."
      }
     ],
     "title": "The ZPMP CRAFT prompt"
    },
    {
     "type": "callout",
     "kind": "example",
     "text": "**Context:** We are replacing the billing system for a water utility serving 400,000 customers in Khulna; go-live is in 5 months; data migration from a 15-year-old database. **Role:** Act as an experienced risk manager. **Ask:** Suggest 15 candidate risks grouped by technical, external, organisational and people/change. **Format:** A table with cause–event–effect statement and the category. **Tests:** Mark which risks are generic versus specific to our context, and list questions we should ask to validate them.",
     "title": "A CRAFT prompt for risk brainstorming"
    },
    {
     "type": "steps",
     "items": [
      {
       "title": "Iterate, don’t one-shot",
       "text": "Treat the first answer as a draft; refine with follow-ups: ‘make it shorter’, ‘more specific to utilities’."
      },
      {
       "title": "Ask it to critique",
       "text": "Paste your own draft and ask: ‘What is unclear, missing or risky in this charter?’"
      },
      {
       "title": "Give examples",
       "text": "Show one example of the style or format you want; quality jumps."
      },
      {
       "title": "Split big tasks",
       "text": "Outline first, then each section — easier to check and steer."
      },
      {
       "title": "Ask for alternatives",
       "text": "‘Give three different ways to structure this steering committee update.’"
      }
     ],
     "title": "Prompting patterns that work"
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "Generative models predict plausible text. They can invent references, regulations, statistics and even quotes from your own meeting. **Never** publish AI-generated facts, figures or legal statements without checking them against a reliable source.",
     "title": "Hallucination is a feature of the technology, not a rare bug"
    },
    {
     "type": "checklist",
     "title": "Verify before you use",
     "items": [
      "Every number has been recalculated or traced to the source data",
      "Names, dates, roles and decisions match the actual records",
      "Any law, standard or policy cited has been checked in the original document",
      "Tone is right for the audience and does not soften bad news",
      "Nothing confidential or personal has been included that should not be",
      "Output reflects our project, not a generic template",
      "A human with the right knowledge has reviewed it before it is shared",
      "AI use is disclosed where policy or the audience expects it"
     ]
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
     "type": "template",
     "title": "AI-use log",
     "purpose": "Keep a lightweight record of significant AI use on the project for transparency, quality and audit.",
     "columns": [
      "Date",
      "Task",
      "Tool (approved?)",
      "Data shared (classification)",
      "Verification done",
      "Reviewer",
      "Where the output was used"
     ],
     "example": [
      [
       "12 Mar",
       "Draft risk list for billing migration",
       "Enterprise AI assistant (yes)",
       "Internal; anonymised",
       "Checked against RBS and team workshop; 6 of 15 kept",
       "Risk lead",
       "Risk register v0.3"
      ]
     ],
     "rows": 8
    },
    {
     "type": "scenario",
     "situation": "A team member pastes the full vendor contract, including pricing and named client contacts, into a free public chatbot to get a summary of penalty clauses. What should the project manager do FIRST?",
     "options": [
      {
       "text": "Thank them — the summary will save time.",
       "feedback": "The time saved does not outweigh a possible contractual and data-protection breach.",
       "best": false
      },
      {
       "text": "Stop further use, report the incident through the organisation’s data or security process, and then guide the team on approved tools and anonymisation.",
       "feedback": "Correct. Contain and report first — security teams may need to act quickly — then fix the behaviour through clear guidance, not blame.",
       "best": true
      },
      {
       "text": "Delete the chat history and say nothing.",
       "feedback": "Deleting locally may not remove the data from the provider, and concealment breaches policy and honesty.",
       "best": false
      },
      {
       "text": "Ban all AI tools for the team permanently.",
       "feedback": "An overreaction that loses real benefits; the issue is unapproved tools and data handling.",
       "best": false
      }
     ],
     "title": "The helpful paste"
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
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "In the CRAFT pattern, ‘Flag anything you are unsure of and do not invent figures’ belongs to…",
       "options": [
        "Context",
        "Role",
        "Tests",
        "Format"
       ],
       "answer": 2,
       "explain": "Tests are checks and constraints that improve reliability."
      },
      {
       "q": "An AI assistant produces a schedule what-if showing the project finishing three weeks earlier if two tasks overlap. What should the PM do NEXT?",
       "options": [
        "Send the new, earlier date to the sponsor straight away",
        "Ask the AI assistant to confirm that its result is correct",
        "Ignore it, since AI schedule outputs are never reliable enough to use",
        "Model it in the schedule and check resources and dependencies"
       ],
       "answer": 3,
       "explain": "AI suggestions are hypotheses; verify them in the authoritative schedule."
      },
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
       "q": "Who is accountable for a status report drafted by an AI assistant and sent by the PM?",
       "options": [
        "The AI tool provider",
        "The IT department",
        "The project manager",
        "Nobody, as it was automated"
       ],
       "answer": 2,
       "explain": "Accountability stays with the human who uses and sends the output."
      },
      {
       "q": "Before an AI note-taker records a client workshop, the PM should…",
       "options": [
        "record silently to avoid disrupting the discussion",
        "only record the client’s comments, not the team’s",
        "inform participants and follow consent rules and policy",
        "turn off transcription but keep recording audio"
       ],
       "answer": 2,
       "explain": "Recording and transcription require transparency and, often, consent."
      }
     ]
    }
   ]
  },
  {
   "id": "m7-l2",
   "title": "Automation, Data-Driven PM & AI Project Risk",
   "subtitle": "Automate the routine, decide with data, and manage the special risks of AI work.",
   "minutes": 30,
   "objectives": [
    "Design automation rules and integrations that keep one source of truth.",
    "Use leading and lagging indicators and explain basic predictive analytics for projects.",
    "Identify the distinctive risks and ethical duties of AI projects and AI use in PM."
   ],
   "blocks": [
    {
     "type": "text",
     "text": "Modern work-management platforms can do much of the administrative heavy lifting: moving cards, chasing updates, refreshing dashboards. The aim is to free people for judgement and conversation — not to build a fragile web of automations nobody understands."
    },
    {
     "type": "flow",
     "items": [
      {
       "label": "Trigger",
       "text": "Something happens: status changes, a date arrives, a form is submitted"
      },
      {
       "label": "Condition",
       "text": "Only if… e.g. priority is High and the item is in the current release"
      },
      {
       "label": "Action",
       "text": "Do something: assign, notify, create a task, update a field"
      },
      {
       "label": "Log",
       "text": "Record that it ran so people can trace what happened"
      }
     ],
     "title": "Anatomy of an automation rule"
    },
    {
     "type": "table",
     "head": [
      "Automation",
      "Example",
      "Benefit"
     ],
     "rows": [
      [
       "Intake routing",
       "New request form → creates backlog item, tags the product owner",
       "No requests lost in email"
      ],
      [
       "Overdue nudges",
       "Task 2 days past due → reminder to assignee; 5 days → flag on dashboard",
       "Fewer manual chases"
      ],
      [
       "Status roll-up",
       "Milestone dates and RAG pulled automatically into the portfolio dashboard",
       "One source of truth, fresher data"
      ],
      [
       "Definition-of-done gates",
       "Item cannot move to Done until test and review fields are complete",
       "Built-in quality"
      ],
      [
       "Integration sync",
       "Code repository or service desk events update linked work items",
       "Less double entry"
      ],
      [
       "Recurring work",
       "Monthly risk review task created with the register attached",
       "Habits that do not depend on memory"
      ]
     ],
     "title": "High-value automations for PM tools"
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "Dozens of overlapping rules created by different people lead to notification overload and mysterious changes. Keep an inventory of automations with an owner and purpose, and review it each quarter. If people start ignoring notifications, the automation is costing attention instead of saving it.",
     "title": "Automation sprawl"
    },
    {
     "type": "compare",
     "columns": [
      {
       "title": "Leading (predict)",
       "items": [
        "Requirements churn rate",
        "Unresolved blockers older than 3 days",
        "Test coverage of new code",
        "Training completion before go-live",
        "Sponsor meeting attendance"
       ]
      },
      {
       "title": "Lagging (confirm)",
       "items": [
        "Final cost vs budget",
        "Delivery date vs baseline",
        "Defects found in production",
        "Adoption rate after 90 days",
        "Customer satisfaction score"
       ]
      }
     ],
     "title": "Leading vs lagging indicators"
    },
    {
     "type": "text",
     "text": "**Predictive analytics** uses historical data to estimate what is likely to happen. Organisations with records of past projects can train simple models — often no more than regression or classification — to flag projects likely to overrun based on features such as scope churn, number of external dependencies, team turnover and early SPI. **Reference-class forecasting** (associated with Bent Flyvbjerg) applies a similar idea without complex models: compare your estimate with the actual outcomes of a class of similar past projects and adjust for typical overruns."
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "Predictions are only as good as the data behind them. If time-sheets are filled in on Friday from memory and status fields are rarely updated, a model will learn the noise. Invest in data hygiene before investing in dashboards and models.",
     "title": "Garbage in, confident garbage out"
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
     "type": "callout",
     "kind": "definition",
     "text": "Organisations increasingly align AI work with frameworks such as the **NIST AI Risk Management Framework** and the management-system standard **ISO/IEC 42001**. A PM does not need to be an expert, but should ask early: ‘Which AI policy and risk process applies to this project?’",
     "title": "Useful references for AI governance"
    },
    {
     "type": "keypoints",
     "items": [
      "Be transparent with stakeholders about significant AI-generated content",
      "Do not use AI tools to covertly monitor or score individual team members",
      "Keep humans in the loop for decisions that affect people’s jobs, pay or rights",
      "Check outputs for bias, especially in people-related content such as role descriptions",
      "Respect intellectual property and confidentiality in what you input and publish",
      "Remain accountable — ‘the AI said so’ is never a defence"
     ],
     "title": "Ethical duties when the PM uses AI"
    },
    {
     "type": "scenario",
     "situation": "An executive suggests using an AI add-on to score each developer’s productivity from keystrokes and messages, and to share rankings in the monthly review. What is the BEST response from the PM?",
     "options": [
      {
       "text": "Implement it — data-driven management is modern practice.",
       "feedback": "Covert or crude individual scoring damages trust, invites gaming and may breach privacy and employment rules.",
       "best": false
      },
      {
       "text": "Raise the ethical, legal and trust concerns, suggest team-level flow metrics and outcome measures instead, and involve HR and legal before any monitoring decision.",
       "feedback": "Correct. Redirect toward measures that improve the system, and ensure proper governance for anything touching individuals.",
       "best": true
      },
      {
       "text": "Agree but keep the rankings secret.",
       "feedback": "Secret scoring is worse for trust if discovered, and the problems remain.",
       "best": false
      },
      {
       "text": "Refuse and say nothing more.",
       "feedback": "A refusal without alternatives does not address the executive’s underlying interest in performance visibility.",
       "best": false
      }
     ],
     "title": "The productivity score"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Leading indicator",
       "def": "A measure that changes before an outcome and helps predict it, allowing early action."
      },
      {
       "term": "Model drift",
       "def": "The decline in an AI model’s performance over time as real-world data diverges from its training data."
      },
      {
       "term": "Reference-class forecasting",
       "def": "Estimating by comparing a project with the actual outcomes of a group of similar past projects."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "Which is a leading indicator for a software release?",
       "options": [
        "Defects found in production after release",
        "Final project cost compared with the approved budget",
        "Customer satisfaction scores after launch",
        "Number of blockers open longer than three days"
       ],
       "answer": 3,
       "explain": "Ageing blockers signal future delay before it happens."
      },
      {
       "q": "Your team ignores most tool notifications. What is the BEST action?",
       "options": [
        "Add more automated reminders and escalations so nothing is missed",
        "Turn off all automation and go back to manual updates",
        "Review the automation inventory and prune low-value rules",
        "Escalate the team’s behaviour to their line managers"
       ],
       "answer": 2,
       "explain": "Notification overload means automations cost attention; prune them."
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
       "q": "Why should an AI project plan include stop/go decision points after experiments?",
       "options": [
        "Because achievable performance is uncertain until tested",
        "Because most AI projects fail and need early exits",
        "To satisfy the PMO’s standard gate review requirements",
        "To avoid documenting detailed requirements"
       ],
       "answer": 0,
       "explain": "Experiments reveal whether the needed accuracy is achievable; checkpoints prevent sunk-cost escalation."
      }
     ]
    }
   ]
  },
  {
   "id": "m7-l3",
   "title": "Leading Organisational Change",
   "subtitle": "Deliverables are not benefits until people change how they work.",
   "minutes": 30,
   "objectives": [
    "Apply ADKAR to diagnose where individuals are stuck in a change.",
    "Use Kotter’s eight steps to plan an organisational change effort.",
    "Respond to resistance with empathy and targeted actions."
   ],
   "blocks": [
    {
     "type": "text",
     "text": "A new system can go live perfectly and still fail if nobody uses it properly. **Organisational change management (OCM)** is the people side of delivering value: helping individuals and groups move from the current way of working to the new one. Project management delivers the solution; change management makes sure it is **adopted**."
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
     "type": "callout",
     "kind": "insight",
     "text": "People who push back often know something the project does not — a broken workflow, a regulatory edge case, a peak season. Listen before you persuade.",
     "title": "Resistance is information"
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
        "Generate short-term wins",
        "Create a sense of urgency",
        "Anchor changes in the culture",
        "Build a guiding coalition"
       ],
       "answer": 0,
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
        "Awareness and Desire",
        "Desire and Reinforcement",
        "Knowledge and Ability",
        "Awareness and Reinforcement"
       ],
       "answer": 2,
       "explain": "Knowledge fades without use; just-in-time training plus practice builds ability."
      }
     ]
    }
   ]
  },
  {
   "id": "m7-l4",
   "title": "Governance: PMOs, Portfolios, Programmes & Sustainability",
   "subtitle": "Connect projects to strategy, choose the right work and deliver it responsibly.",
   "minutes": 30,
   "objectives": [
    "Compare supportive, controlling and directive PMOs and explain how a PMO adds value.",
    "Distinguish project, programme and portfolio management and use weighted scoring and stage gates.",
    "Integrate environmental, social and governance (ESG) considerations into project decisions."
   ],
   "blocks": [
    {
     "type": "text",
     "text": "A single well-run project is good. An organisation that consistently picks the **right** projects and runs them well is far better. Governance is the framework of authority, decision rights and oversight that makes that consistency possible — without drowning teams in bureaucracy."
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
     "type": "callout",
     "kind": "insight",
     "text": "A PMO earns its place when it improves decisions and delivery: better prioritisation, fewer failed projects, faster benefit realisation, shared resource planning. Many modern PMOs reposition as a **value management office** that supports agile teams with lightweight guardrails, coaching and portfolio flow.",
     "title": "PMO value is measured by outcomes, not templates"
    },
    {
     "type": "compare",
     "columns": [
      {
       "title": "Project",
       "items": [
        "Temporary effort to create a specific output",
        "Success: deliver agreed scope, time, cost, quality and value",
        "Managed by a project manager"
       ]
      },
      {
       "title": "Programme",
       "items": [
        "Group of related projects and activities managed together",
        "Success: realise benefits that individual projects could not alone",
        "Managed by a programme manager; focuses on interdependencies and benefits"
       ]
      },
      {
       "title": "Portfolio",
       "items": [
        "All projects, programmes and operations chosen to meet strategy",
        "Success: best overall value for the organisation’s goals and capacity",
        "Managed by portfolio leadership; selects, prioritises and balances"
       ]
      }
     ],
     "title": "Project, programme, portfolio"
    },
    {
     "type": "formula",
     "items": [
      {
       "name": "Weighted score",
       "expr": "Σ (criterion weight × score)",
       "meaning": "Weights reflect strategy and must sum to 100%. Scores often use 1–5 scales."
      },
      {
       "name": "Example",
       "expr": "Strategic fit 40% × 5 + ROI 30% × 3 + Risk (inverse) 20% × 4 + ESG 10% × 2 = 3.9",
       "meaning": "Compare candidate projects on the same criteria; use results to inform, not replace, the discussion."
      }
     ],
     "title": "Weighted scoring for prioritisation"
    },
    {
     "type": "callout",
     "kind": "example",
     "text": "In agile portfolios many organisations rank work by **cost of delay divided by duration** (often called WSJF in scaled frameworks), so small, urgent, valuable items move first. Whichever method you use, make the criteria explicit and visible.",
     "title": "Cost of delay as a lens"
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
     "situation": "At Gate 3, the readiness review shows user training is only 40% complete and a critical security test is outstanding. The sponsor wants to pass the gate anyway to meet a public announcement. What should the project manager do?",
     "options": [
      {
       "text": "Pass the gate; announcements matter more than training.",
       "feedback": "Launching without security testing and trained users creates significant risk to the organisation and customers.",
       "best": false
      },
      {
       "text": "Cancel the gate meeting until everything is ready.",
       "feedback": "Avoiding governance removes decision makers’ chance to choose a sensible option such as a pilot.",
       "best": false
      },
      {
       "text": "Mark training as complete to keep the gate green.",
       "feedback": "Falsifying status is a serious ethical breach.",
       "best": false
      },
      {
       "text": "Present the readiness facts and risks to the gate board with options — e.g. delay, limited pilot launch, or conditional pass with dated actions — and let the authorised body decide.",
       "feedback": "Correct. Governance works when decision makers get the facts, risks and options. The PM informs and recommends; the gate body decides.",
       "best": true
      }
     ],
     "title": "Gate review pressure"
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
       "term": "ESG",
       "def": "Environmental, social and governance considerations used to assess the wider impact and responsibility of projects and organisations."
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
       "q": "Which is the main focus of programme management?",
       "options": [
        "Selecting and ranking projects against strategy",
        "Managing the scope, time and cost of one deliverable",
        "Auditing projects for compliance with standards",
        "Coordinating related projects for combined benefits"
       ],
       "answer": 3,
       "explain": "Programmes manage interdependencies to deliver benefits not available separately."
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
       "q": "Criteria weights are 50%, 30% and 20%. Project X scores 4, 2 and 5. Its weighted score is…",
       "options": [
        "3.6",
        "3.8",
        "4.0",
        "3.2"
       ],
       "answer": 0,
       "explain": "0.5×4 + 0.3×2 + 0.2×5 = 2.0 + 0.6 + 1.0 = 3.6."
      },
      {
       "q": "Comparing options by lifecycle energy cost rather than purchase price alone is an example of…",
       "options": [
        "social sustainability and community benefit",
        "environmental and financial sustainability",
        "gold plating of the specification",
        "scope creep driven by stakeholders"
       ],
       "answer": 1,
       "explain": "Lifecycle costing captures operating energy and environmental impact."
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
 "code": "Close",
 "title": "Close — Closing, Benefits, Ethics & Certification Readiness",
 "subtitle": "Finish well, secure the value, act with integrity and prepare for the ZPMP exam and capstone.",
 "outcomes": [
  "Close phases, projects and contracts with formal acceptance, handover and archiving.",
  "Run retrospectives and lessons-learned processes that change behaviour, and plan benefits realisation.",
  "Apply responsibility, respect, fairness and honesty to real dilemmas.",
  "Build a PM career portfolio and use a reliable strategy for situational-judgement questions.",
  "Integrate all eight ZPMP Value Loop stages on one project and plan the capstone."
 ],
 "lessons": [
  {
   "id": "m8-l1",
   "title": "Closing a Phase or Project",
   "subtitle": "Finish properly: accepted deliverables, clean handover, settled contracts and a usable archive.",
   "minutes": 25,
   "objectives": [
    "List the activities required to close a phase, project or contract.",
    "Plan a handover to operations that protects benefits after go-live.",
    "Close a project that is terminated early with the same discipline."
   ],
   "blocks": [
    {
     "type": "text",
     "text": "**Close** is the last stage of the ZPMP Value Loop, and it is the one most often rushed. People are pulled onto new work, the budget code is shut and documents scatter. Yet closure is where you secure acceptance, protect the benefits and capture knowledge for the next project. A project that never formally closes keeps consuming attention and money."
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
        "penalise the vendor for any missed obligations",
        "reopen negotiation on the final contract price",
        "identify procurement lessons for future use",
        "approve the final payment to the supplier"
       ],
       "answer": 2,
       "explain": "It reviews the procurement process to improve future procurement."
      }
     ]
    }
   ]
  },
  {
   "id": "m8-l2",
   "title": "Retrospectives, Lessons Learned & Benefits Realisation",
   "subtitle": "Turn experience into changed behaviour, and make sure the promised value actually arrives.",
   "minutes": 30,
   "objectives": [
    "Facilitate retrospectives that produce owned improvement actions.",
    "Maintain a lessons-learned register that leads to applied change.",
    "Build and hand over a benefits realisation plan with owners, baselines and measures."
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
     "type": "text",
     "text": "Projects deliver **outputs** (a system, a building, a process). Users adopting those outputs create **outcomes** (faster processing, fewer errors). Outcomes produce **benefits** that the organisation values (lower cost, more revenue, better service, lower emissions). Most benefits arrive **after** the project closes — which is why benefit ownership sits with the business, not with the PM."
    },
    {
     "type": "flow",
     "items": [
      {
       "label": "Output",
       "text": "Online booking system live"
      },
      {
       "label": "Capability",
       "text": "Patients can book and reschedule by phone or web"
      },
      {
       "label": "Outcome",
       "text": "Shorter queues, fewer no-shows"
      },
      {
       "label": "Benefit",
       "text": "More patients seen per doctor-day; higher satisfaction"
      },
      {
       "label": "Strategic objective",
       "text": "Accessible, efficient district healthcare"
      }
     ],
     "title": "From output to benefit"
    },
    {
     "type": "template",
     "title": "Benefits realisation plan",
     "purpose": "Define how each benefit will be measured, by whom and when, and hand it to the business owner at closure.",
     "columns": [
      "Benefit",
      "Measure (KPI)",
      "Baseline",
      "Target & date",
      "Benefit owner",
      "How & when measured",
      "Dependencies / dis-benefits"
     ],
     "example": [
      [
       "Fewer missed appointments",
       "No-show rate",
       "22% (Jan–Mar)",
       "12% by December",
       "Hospital administrator",
       "Monthly report from booking system",
       "SMS reminders working; dis-benefit: front-desk retraining time"
      ]
     ],
     "rows": 6
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "Some outcomes are negative for someone — extra steps for a department, a role that disappears. Record these **dis-benefits** honestly. Also watch for benefit leakage: time saved that is simply absorbed rather than redeployed to valuable work.",
     "title": "Dis-benefits and benefit leakage"
    },
    {
     "type": "scenario",
     "situation": "Six months after go-live, the business owner says the expected 20% reduction in processing time has not appeared. You have moved to another project. What is the BEST action?",
     "options": [
      {
       "text": "Explain that benefits are not your responsibility after closure.",
       "feedback": "Technically ownership moved, but a dismissive reply wastes your knowledge and harms trust.",
       "best": false
      },
      {
       "text": "Reopen the project and add new features.",
       "feedback": "Jumping to more scope before diagnosing the cause may waste money.",
       "best": false
      },
      {
       "text": "Help the business owner analyse the measures and adoption data to find the cause, and suggest corrective actions or a follow-up change.",
       "feedback": "Correct. Benefit realisation is owned by the business, but the former PM can help diagnose — often the cause is adoption or process, not the system.",
       "best": true
      },
      {
       "text": "Lower the target to match current results.",
       "feedback": "Changing targets without analysis hides the problem.",
       "best": false
      }
     ],
     "title": "The missing benefit"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Retrospective",
       "def": "A regular team meeting to inspect how the team worked and agree concrete improvements for the next cycle."
      },
      {
       "term": "Benefits realisation",
       "def": "Measuring and managing the outcomes of a project after delivery to ensure intended benefits are achieved."
      },
      {
       "term": "Dis-benefit",
       "def": "A measurable negative consequence of a change, perceived as adverse by one or more stakeholders."
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
       "q": "Who should normally own a benefit after the project closes?",
       "options": [
        "The project manager",
        "A named business owner",
        "The PMO benefits team",
        "The supplier’s account manager"
       ],
       "answer": 1,
       "explain": "Benefits arrive in operations and need an owner there."
      },
      {
       "q": "A retrospective produces 14 improvement ideas. What is the BEST next step?",
       "options": [
        "Assign all 14 ideas to the PM to implement",
        "Email them all to the sponsor for a decision",
        "Wait until the next retrospective to discuss",
        "Pick one to three actions with owners and dates"
       ],
       "answer": 3,
       "explain": "Focused, owned actions are more likely to happen."
      },
      {
       "q": "Why must a benefit have a baseline?",
       "options": [
        "To make the benefits report more complete",
        "Without a starting value, change cannot be measured",
        "Because auditors require one for every benefit",
        "Because the baseline sets the project budget"
       ],
       "answer": 1,
       "explain": "Improvement is measured relative to a baseline."
      },
      {
       "q": "‘Patients can book appointments online’ is best described as…",
       "options": [
        "a benefit",
        "a strategic objective",
        "a capability/output",
        "a dis-benefit"
       ],
       "answer": 2,
       "explain": "It is what the project made possible; benefits come from the outcomes of using it."
      }
     ]
    }
   ]
  },
  {
   "id": "m8-l3",
   "title": "Professional Responsibility & Ethics",
   "subtitle": "Make the right call when nobody is watching — and when someone is pressuring you.",
   "minutes": 30,
   "objectives": [
    "Explain responsibility, respect, fairness and honesty as practical values.",
    "Work through ethical dilemmas using a structured decision approach.",
    "Recognise conflicts of interest, gifts, misreporting and corruption risks."
   ],
   "blocks": [
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
     "type": "callout",
     "kind": "insight",
     "text": "Ethics codes usually combine **aspirational** standards (what we strive for — e.g. seeking diverse perspectives) and **mandatory** ones (what we must do — e.g. disclosing conflicts of interest, not taking bribes). Breaching a mandatory standard can carry professional and legal consequences.",
     "title": "Aspirational and mandatory"
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
     "type": "table",
     "head": [
      "Situation",
      "Risk",
      "Professional response"
     ],
     "rows": [
      [
       "A bidder’s relative works on your evaluation panel",
       "Conflict of interest",
       "Disclose immediately; the relative steps out of evaluation"
      ],
      [
       "A vendor sends an expensive gift during tender evaluation",
       "Undue influence",
       "Decline politely; follow gift policy; report if required"
      ],
      [
       "Sponsor asks you to show the project as green before the board meeting",
       "Misrepresentation",
       "Explain the real status; offer to present the recovery plan alongside"
      ],
      [
       "An official asks for a ‘speed money’ payment to clear equipment",
       "Bribery / corruption",
       "Refuse; escalate to legal/compliance; record the request"
      ],
      [
       "A new team member brings a former employer’s confidential designs",
       "IP and confidentiality breach",
       "Do not use them; inform legal; remind of obligations"
      ],
      [
       "You realise your own estimate had a major error",
       "Hidden mistake",
       "Disclose quickly with corrected figures and impact"
      ]
     ],
     "title": "Common dilemmas and the professional response"
    },
    {
     "type": "callout",
     "kind": "warning",
     "text": "Gift-giving and hospitality norms differ across cultures, and respecting them matters. But where a custom conflicts with law, your organisation’s policy or the integrity of a decision — for example, gifts during a live tender — the law and policy prevail. When unsure, disclose and ask.",
     "title": "Local custom is not a licence"
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
     "type": "case",
     "title": "Ethics at a city flyover project",
     "context": "You manage the traffic-management and utilities package of a city flyover. A subcontractor offers to pay for your team’s end-of-year dinner at a five-star hotel. The same week, a site engineer tells you quietly that concrete test results for two piers were ‘adjusted’ to meet the deadline. Your sponsor is under heavy political pressure to open before the monsoon.",
     "questions": [
      "Identify each ethical issue and the value(s) involved.",
      "What should you do about the test results, and in what order?",
      "How should you respond to the dinner offer?"
     ],
     "answer": "Issues: (1) Dinner — potential undue influence and conflict of interest (fairness); (2) Adjusted test results — falsified safety data (honesty, responsibility), with serious public-safety risk. Order: treat safety first — protect the engineer, secure the original records, inform the sponsor and the quality/safety authority as required by contract and law, and stop or restrict work on the affected piers pending independent retesting. Document everything. Political pressure does not change the duty; a delayed opening is far better than a structural failure. Dinner: decline politely, referring to company policy; if the team celebrates, the organisation pays."
    },
    {
     "type": "reflection",
     "prompt": "Describe a time you felt pressure to bend the truth or a rule at work. Which of the four values was under strain, and what would you do differently now?"
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "Conflict of interest",
       "def": "A situation in which personal interests could improperly influence, or appear to influence, professional judgement."
      },
      {
       "term": "Honesty (professional)",
       "def": "Understanding and communicating the truth accurately, including unwelcome news, and not misleading by omission."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
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
       "q": "A team member makes derogatory jokes about a colleague’s religion. Which action BEST reflects the value of respect?",
       "options": [
        "Ignore it to avoid creating conflict in the team",
        "Address it promptly and involve HR as policy requires",
        "Laugh along so you are seen to fit in with the team",
        "Wait for a formal complaint before taking any action"
       ],
       "answer": 1,
       "explain": "Respect requires acting against behaviour that demeans others."
      },
      {
       "q": "In which case does local custom NOT justify accepting a gift?",
       "options": [
        "A small festival sweet box shared with the whole team after delivery",
        "A thank-you card from a user",
        "Tea offered at a site meeting",
        "A costly gift from a bidder during an active tender"
       ],
       "answer": 3,
       "explain": "Valuable gifts during procurement create undue influence regardless of custom."
      }
     ]
    }
   ]
  },
  {
   "id": "m8-l4",
   "title": "Career Portfolio & Exam Strategy",
   "subtitle": "Show what you can do, keep growing, and think like a professional under exam conditions.",
   "minutes": 30,
   "objectives": [
    "Build a project-management career portfolio with evidence of outcomes.",
    "Apply a reliable method to situational-judgement questions.",
    "Recognise agile and predictive context cues and typical best-practice answers."
   ],
   "blocks": [
    {
     "type": "text",
     "text": "A certificate opens a door; a **portfolio** walks you through it. Employers want proof that you can deliver outcomes, lead people and handle uncertainty. Build that proof deliberately, project by project."
    },
    {
     "type": "framework",
     "items": [
      {
       "label": "CS",
       "title": "Case summaries",
       "text": "Three to five short project stories: context, your role, actions, results with numbers."
      },
      {
       "label": "ART",
       "title": "Sanitised artefacts",
       "text": "A charter, risk register, dashboard or RACI — with confidential details removed and permission obtained."
      },
      {
       "label": "MET",
       "title": "Metrics",
       "text": "Budget size, team size, delivery performance, benefits achieved, adoption rates."
      },
      {
       "label": "REF",
       "title": "References & feedback",
       "text": "Short quotes from sponsors or team members, with their consent."
      },
      {
       "label": "LRN",
       "title": "Continuous learning",
       "text": "Courses, certifications, communities, talks and what you applied from them."
      },
      {
       "label": "RFL",
       "title": "Reflection",
       "text": "What you would do differently — evidence of a learning mindset."
      }
     ],
     "title": "What goes in a PM portfolio"
    },
    {
     "type": "template",
     "title": "Portfolio case entry (CAR)",
     "purpose": "Write each project as Context, Action, Result so achievements are easy to scan.",
     "columns": [
      "Project & dates",
      "Context (problem, size)",
      "My role",
      "Actions I took",
      "Results (measured)",
      "Evidence / artefact"
     ],
     "example": [
      [
       "Clinic booking app, 2025",
       "4 clinics, 20k patients/yr, 22% no-shows",
       "PM, team of 7",
       "Ran discovery with patients, hybrid delivery, SMS reminders, change champions",
       "No-shows down to 13% in 6 months; on budget",
       "Sanitised dashboard + sponsor quote"
      ]
     ],
     "rows": 5
    },
    {
     "type": "callout",
     "kind": "pro",
     "text": "Not ‘Responsible for weekly status reports’ but ‘Introduced a one-page decision-first report; sponsor decisions came 2 weeks faster on average.’ Numbers, verbs and outcomes.",
     "title": "Translate tasks into outcomes"
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
       "text": "Agile, predictive or hybrid? Who is involved? What stage of the Value Loop?"
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
     "type": "callout",
     "kind": "example",
     "text": "‘A key stakeholder complains that a feature does not meet their needs during a sprint review. What should the PM do FIRST?’ Context: agile. Eliminate ‘tell them the scope is fixed’ (rigid) and ‘escalate to the sponsor’ (premature). Between ‘add the change to the current sprint’ and ‘work with the product owner to capture it in the backlog for prioritisation’, the second respects the product owner’s role and sprint focus — the best answer.",
     "title": "Applying 5-R"
    },
    {
     "type": "scenario",
     "situation": "During execution of a predictive construction project, the client asks the site engineer to add an extra loading bay. The engineer agrees and starts the work. What should the project manager do FIRST?",
     "options": [
      {
       "text": "Let the work continue since the client requested it.",
       "feedback": "Client requests still need integrated change control on a predictive project.",
       "best": false
      },
      {
       "text": "Discipline the site engineer.",
       "feedback": "Blame does not address the scope change; coaching can follow later.",
       "best": false
      },
      {
       "text": "Update the scope baseline to include the bay.",
       "feedback": "Baselines change only after approval.",
       "best": false
      },
      {
       "text": "Stop the work on the extra bay and evaluate the impact of the request through the change control process.",
       "feedback": "Correct. An unapproved scope change has started; pause it and route it through impact analysis and formal approval.",
       "best": true
      }
     ],
     "title": "Exam-style practice"
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
       "term": "CAR format",
       "def": "Context, Action, Result — a concise structure for describing professional achievements."
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
        "Ignore the issue and wait for the next status meeting",
        "Meet the stakeholder privately to understand their concern",
        "Review the relevant plan and baseline before acting",
        "Collaborate with the product owner on the backlog"
       ],
       "answer": 0,
       "explain": "Passive waiting lets problems grow."
      },
      {
       "q": "Which cue suggests a predictive context?",
       "options": [
        "Sprint review with stakeholders",
        "Change control board approval",
        "Self-organising, cross-functional team",
        "Product backlog refinement"
       ],
       "answer": 1,
       "explain": "Formal change control boards are characteristic of predictive governance."
      },
      {
       "q": "Which portfolio entry is strongest?",
       "options": [
        "Led 9 people to deliver a booking app on budget; no-shows fell from 22% to 13%",
        "Managed a large and complex digital project for a well-known healthcare client",
        "Responsible for weekly meetings, status reports and stakeholder communications",
        "Very hard-working, results-driven project manager with excellent people skills"
       ],
       "answer": 0,
       "explain": "Specific context, action and measured result."
      }
     ]
    }
   ]
  },
  {
   "id": "m8-l5",
   "title": "The Whole Loop: Integrative Walk-Through & Capstone",
   "subtitle": "Watch all eight ZPMP stages work together on one project — then run your own.",
   "minutes": 40,
   "objectives": [
    "Trace a mini-project through all eight stages of the ZPMP Value Loop.",
    "Explain how decisions in one stage affect the others.",
    "Plan your ZPMP capstone and its deliverables."
   ],
   "blocks": [
    {
     "type": "text",
     "text": "You have studied each stage on its own. Real projects do not separate so neatly: a risk spotted in Steer changes the plan; a stakeholder concern in Lead reshapes scope; a lesson in Close improves the next Frame. Let us follow one mini-project through the whole **ZPMP Value Loop**."
    },
    {
     "type": "callout",
     "kind": "example",
     "text": "**Cumilla District Hospital — SMS and web appointment booking.** Patients queue from dawn for outpatient tickets; 22% of booked follow-ups are missed. A 6-month project with a budget of BDT 4.5 million and a team of 7 (PM, product owner from hospital administration, 3 developers, 1 tester, 1 change and training lead) will deliver online and SMS booking with reminders for four outpatient departments.",
     "title": "The mini-project"
    },
    {
     "type": "framework",
     "items": [
      {
       "label": "1",
       "title": "Frame",
       "text": "Why are we doing this and what value will it create?"
      },
      {
       "label": "2",
       "title": "Shape",
       "text": "Who is involved and what exactly will we deliver?"
      },
      {
       "label": "3",
       "title": "Plan",
       "text": "How, when and for how much — with honest uncertainty."
      },
      {
       "label": "4",
       "title": "Deliver",
       "text": "Build, assure quality and manage suppliers."
      },
      {
       "label": "5",
       "title": "Steer",
       "text": "Measure, control, manage risk and forecast."
      },
      {
       "label": "6",
       "title": "Lead",
       "text": "Grow the team, resolve conflict, communicate."
      },
      {
       "label": "7",
       "title": "Scale",
       "text": "Drive adoption, use AI responsibly, govern well."
      },
      {
       "label": "8",
       "title": "Close",
       "text": "Accept, hand over, realise benefits and learn."
      }
     ],
     "title": "The ZPMP Value Loop at a glance"
    },
    {
     "type": "table",
     "head": [
      "Stage",
      "Key question",
      "What the team did",
      "Key artefact"
     ],
     "rows": [
      [
       "Frame",
       "Is this worth doing?",
       "Business case: fewer queues and no-shows, more patients per doctor-day; hybrid life cycle chosen",
       "Business case, charter"
      ],
      [
       "Shape",
       "Who cares and what exactly?",
       "Mapped patients, doctors, front desk, IT, health directorate; prioritised backlog with booking, reminders, rescheduling",
       "Stakeholder register, backlog, change control"
      ],
      [
       "Plan",
       "How long and how much?",
       "Fixed hardware and SMS-gateway contract; agile build in 2-week sprints; Monte Carlo gave P80 at 6.5 months",
       "Roadmap, budget, risk-adjusted schedule"
      ],
      [
       "Deliver",
       "Are we building it right?",
       "Scrum for software, Kanban for training logistics; usability tests with patients",
       "Increments, test results, vendor contract"
      ],
      [
       "Steer",
       "Are we on track?",
       "Risk: low smartphone use among older patients → SMS-first design; burnup and EVM on fixed-price parts",
       "Risk register, dashboard"
      ],
      [
       "Lead",
       "Is the team healthy and aligned?",
       "Conflict between doctors and front desk on slot rules resolved collaboratively; weekly sponsor huddle",
       "Communication plan, RACI"
      ],
      [
       "Scale",
       "Will people adopt it?",
       "ADKAR survey showed desire gap at front desk; champions appointed; AI assistant used to draft Bangla and English FAQs, verified by staff",
       "Change impact assessment, AI-use log"
      ],
      [
       "Close",
       "Did we deliver value and learn?",
       "Formal acceptance, 4-week hypercare, benefits plan to hospital administrator, retrospective",
       "Closure checklist, benefits plan, lessons register"
      ]
     ],
     "title": "Walking the loop"
    },
    {
     "type": "callout",
     "kind": "insight",
     "text": "In month 2 a Steer finding (older patients rarely use the web) went back to Shape (SMS-first backlog), which changed Plan (SMS gateway cost) and Lead (new message to doctors). In Close, the lesson ‘test with real patients in week 2’ went into the PMO’s template for the next hospital — feeding the next Frame.",
     "title": "The loop really loops"
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
     "type": "case",
     "title": "Integrative challenge: university LMS migration",
     "context": "A university is migrating 600 courses to a new learning management system before the next academic year (9 months). Faculty are sceptical, the vendor contract is fixed-price for configuration, and student-data privacy rules apply. The registrar wants AI-generated course summaries for students.",
     "questions": [
      "For each ZPMP stage, name one decision or artefact you would prioritise.",
      "Which two risks would you analyse quantitatively, and why?",
      "How would you handle the AI-summary request responsibly?"
     ],
     "answer": "Example answer — Frame: business case and charter with adoption-based success measures. Shape: faculty and student stakeholder map; backlog of course waves. Plan: wave plan with P80 date before semester start; contingency for migration rework. Deliver: hybrid — fixed-price vendor milestones plus agile course-redesign waves; quality rubric. Steer: EVM on vendor milestones, burnup on course waves, RAG criteria. Lead: designer motivation (autonomy, purpose), RACI for course sign-off. Scale: ADKAR for faculty; AI policy check; PMO stage gate before semester. Close: acceptance per wave, hypercare in week 1 of term, benefits plan (student satisfaction, support tickets). Quantitative: data-migration rework and faculty availability, since they drive schedule spread. AI summaries: run as a controlled pilot using approved tools, no personal student data in prompts, faculty review before publishing, clear labelling, and feedback collection."
    },
    {
     "type": "text",
     "text": "Your **ZPMP capstone** asks you to apply the whole loop to a real or realistic project of your choice — ideally from your workplace, with confidential details removed. You will produce a compact portfolio of artefacts and a short reflective report."
    },
    {
     "type": "steps",
     "items": [
      {
       "title": "Frame",
       "text": "One-page business case and charter with measurable success criteria."
      },
      {
       "title": "Shape",
       "text": "Stakeholder register and prioritised backlog or WBS, with a change-control approach."
      },
      {
       "title": "Plan",
       "text": "Schedule or roadmap, budget, and a risk-adjusted forecast (range with confidence)."
      },
      {
       "title": "Deliver",
       "text": "Delivery approach (predictive, agile or hybrid) with justification and quality plan."
      },
      {
       "title": "Steer",
       "text": "Risk register (top 10), dashboard design with RAG criteria, and an EVM or burnup snapshot."
      },
      {
       "title": "Lead",
       "text": "RACI and communication plan; one conflict or negotiation you would expect and how you would handle it."
      },
      {
       "title": "Scale",
       "text": "Change impact assessment, AI-use guidelines for the project, and governance/ESG considerations."
      },
      {
       "title": "Close",
       "text": "Closure checklist, benefits realisation plan and a 600-word reflection on what you learned."
      }
     ],
     "title": "Capstone deliverables"
    },
    {
     "type": "template",
     "title": "Capstone planner",
     "purpose": "Plan your capstone: one row per Value Loop stage.",
     "columns": [
      "Stage",
      "Artefact(s) I will produce",
      "Data / input I need",
      "Who can review it",
      "Target date"
     ],
     "example": [
      [
       "Steer",
       "Top-10 risk register, one-page dashboard",
       "Past schedule data, team risk workshop",
       "Colleague in PMO",
       "Week 3"
      ]
     ],
     "rows": 8
    },
    {
     "type": "terms",
     "items": [
      {
       "term": "ZPMP Value Loop",
       "def": "ZyeemZia’s eight-stage project framework — Frame, Shape, Plan, Deliver, Steer, Lead, Scale, Close — applied iteratively from idea to realised value."
      },
      {
       "term": "Capstone",
       "def": "A culminating project in which learners apply the full ZPMP Value Loop to a real or realistic project and present the resulting artefacts."
      }
     ]
    },
    {
     "type": "quiz",
     "items": [
      {
       "q": "In the walk-through, a Steer finding about older patients led to an SMS-first design. Which stage did this feed back into first?",
       "options": [
        "Close",
        "Scale",
        "Shape",
        "Frame"
       ],
       "answer": 2,
       "explain": "The finding changed the backlog — a Shape activity."
      },
      {
       "q": "Which ZPMP stage focuses on adoption, AI use and governance?",
       "options": [
        "Plan",
        "Deliver",
        "Scale",
        "Lead"
       ],
       "answer": 2,
       "explain": "Scale covers change management, AI-powered PM and governance."
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
       "q": "Why does the Close stage feed the next Frame?",
       "options": [
        "Because projects never truly end in organisations",
        "Because the PMO requires the stages to be linked",
        "Lessons and benefits data improve the next business case",
        "It does not; each project starts from a clean slate"
       ],
       "answer": 2,
       "explain": "Learning and benefit evidence make future framing more realistic."
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
  "q": "During a status meeting, a developer mentions that the third-party payment API the team depends on will be retired by its provider ‘sometime next year’. Your release is planned for nine months from now. What should the project manager do FIRST?",
  "options": [
   "Record it as a risk, analyse its probability and impact, and assign an owner",
   "Log it as an issue and escalate it to the sponsor for an immediate decision",
   "Start replacing the API now so that the release date is fully protected",
   "Note it but take no action, since the retirement date is not yet confirmed"
  ],
  "answer": 0,
  "explain": "The event is uncertain and in the future, so it is a risk to be recorded, analysed and owned. Logging it as an issue misclassifies it; replacing the API immediately skips analysis; ignoring it leaves a potentially serious threat unmanaged."
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
  "module": "m5",
  "q": "A risk owner reports that the warning sign defined for a high-priority risk has just appeared, and an approved contingency plan exists within the PM’s authority. What should the project manager do NEXT?",
  "options": [
   "Schedule a risk workshop to reassess all risks before taking action",
   "Ask the sponsor for permission before executing the contingency plan",
   "Implement the contingency plan and update the risk register and issue log",
   "Wait to see whether the risk actually materialises before using reserves"
  ],
  "answer": 2,
  "explain": "Triggers exist so that pre-approved responses can be executed promptly. A workshop or seeking fresh permission wastes the planning already done, and waiting defeats the purpose of having a trigger."
 },
 {
  "module": "m5",
  "q": "A team’s burndown chart has been almost flat for three sprints, but the team reports finishing many stories every sprint. What is the MOST likely explanation, and the best next step?",
  "options": [
   "The team is inflating its estimates; ask it to re-estimate stories with fewer points",
   "Scope grows as fast as work is done; use a burnup and review it with the product owner",
   "The team is not working hard enough; increase daily monitoring of individual output",
   "The charting software is miscalculating progress; stop using the charts until it is fixed"
  ],
  "answer": 1,
  "explain": "A flat burndown with steady delivery usually means scope is growing. A burnup shows completed work and total scope separately, enabling a scope conversation with the product owner. The other options assume bad faith or tool failure without evidence."
 },
 {
  "module": "m5",
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
  "module": "m5",
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
  "module": "m6",
  "q": "Two senior engineers have argued for a week about which database to use, and the team is now split into camps. The decision is important and the deadline is three weeks away. What should the project manager do FIRST?",
  "options": [
   "Meet both to understand their criteria, then facilitate an evidence-based joint decision",
   "Choose the database yourself, based on your own analysis, to end the argument",
   "Ask them to compromise by using both databases, one for each part of the system",
   "Escalate the disagreement to the sponsor and ask for a binding decision by the end of this week"
  ],
  "answer": 0,
  "explain": "The issue is important and there is time, so collaborating on interests and objective criteria gives the best, most committed outcome. Forcing a choice loses buy-in, a forced compromise may produce a poor technical result, and escalation is premature."
 },
 {
  "module": "m6",
  "q": "A new team member is very enthusiastic but has never used the team’s testing framework. According to situational leadership, which style should the PM use for this task?",
  "options": [
   "Directing — clear instructions and close follow-up",
   "Delegating — let them work it out independently",
   "Supporting — focus on encouragement with little instruction",
   "Avoiding — step back until they ask for help"
  ],
  "answer": 0,
  "explain": "High enthusiasm with low competence calls for directing. Delegating and supporting assume skills they do not yet have, and waiting leaves them to struggle."
 },
 {
  "module": "m6",
  "q": "A project team grows from 8 to 12 members. By how many communication channels does the team’s communication complexity increase?",
  "options": [
   "4",
   "28",
   "66",
   "38"
  ],
  "answer": 3,
  "explain": "8 people: 8 × 7 ÷ 2 = 28 channels. 12 people: 12 × 11 ÷ 2 = 66 channels. The increase is 66 − 28 = 38. The other options are the head-count change or one of the totals."
 },
 {
  "module": "m6",
  "q": "In a retrospective, team members say they hesitate to raise problems because a previous manager publicly criticised people for mistakes. What is the BEST action for the project manager?",
  "options": [
   "Reassure the team that the previous manager has left, so the problem is now solved",
   "Share your own mistakes, thank people for raising problems and use blameless reviews",
   "Make raising problems mandatory and track who contributes in each retrospective",
   "Arrange a team-building outing so that people get to know each other better"
  ],
  "answer": 1,
  "explain": "Psychological safety is rebuilt through consistent leader behaviour and blameless practices. Simply stating that things have changed, tracking compliance or a one-off social event does not create lasting safety."
 },
 {
  "module": "m6",
  "q": "A functional manager refuses to release a database specialist your project needs next month, saying ‘my team is fully booked’. What should the project manager do FIRST?",
  "options": [
   "Escalate to the sponsor and ask them to instruct the manager to release the specialist now",
   "Explore the manager’s constraints and options such as partial allocation or other timing",
   "Hire an external database contractor immediately so that the schedule is not delayed",
   "Remove the database work from scope and report the change to the steering committee"
  ],
  "answer": 1,
  "explain": "Negotiate on interests: understanding why the manager says no often reveals workable options. Escalation, hiring or cutting scope may be needed later but skip the negotiation the PM can do first."
 },
 {
  "module": "m6",
  "q": "The project manager is negotiating a hardware contract. The supplier insists on a 15% price increase. The PM has a confirmed offer from another qualified supplier at a 5% increase. How should this alternative be used?",
  "options": [
   "As the PM’s BATNA, setting a walk-away point and strengthening the negotiation",
   "Keep it hidden, because revealing alternatives weakens a negotiating position",
   "As a reason to end the negotiation now and sign with the other supplier",
   "As leverage to threaten reporting the supplier to the industry regulator"
  ],
  "answer": 0,
  "explain": "A strong BATNA sets the walk-away point and strengthens the negotiating position. Hiding it gives no benefit, ending talks immediately may forgo a better deal, and threatening regulators is inappropriate."
 },
 {
  "module": "m6",
  "q": "A steering committee member says your 8-page weekly status report is ‘too long to read’, and decisions are being delayed. What should you do?",
  "options": [
   "Redesign it as a one-page, decision-first summary with links, agreed with key readers",
   "Keep the report as it is, since all of the information it contains is needed for governance",
   "Stop sending written reports and rely on discussion at steering committee meetings",
   "Send the report daily so the information is fresher and easier to act on"
  ],
  "answer": 0,
  "explain": "Tailoring communication to audience needs is the sender’s responsibility. Keeping the format ignores the feedback, dropping written reports removes a record, and increasing frequency worsens the overload."
 },
 {
  "module": "m7",
  "q": "A project manager uses an AI assistant to draft a status summary. The draft states that the project is ‘12% under budget’, but the PM is not sure where that figure came from. What should the PM do BEFORE sending it?",
  "options": [
   "Send it as drafted, since AI tools are usually accurate with simple numbers",
   "Remove all the numbers from the report to avoid any risk of inaccuracy",
   "Verify the figure against the cost reports and correct the draft if needed",
   "Ask the AI assistant to confirm the figure and cite where it came from"
  ],
  "answer": 2,
  "explain": "AI-generated figures must be checked against authoritative data; the PM remains accountable. Assuming accuracy, removing all numbers or asking the same tool to confirm itself does not verify anything."
 },
 {
  "module": "m7",
  "q": "A team member wants to upload a spreadsheet of customer names, phone numbers and complaints to a free online AI tool to get a summary of complaint themes. The organisation has an approved enterprise AI assistant. What should the project manager advise?",
  "options": [
   "Use the free tool, because generating summaries does not store any data",
   "Avoid AI altogether and have the team read every single complaint manually",
   "Use the free tool, but upload only half of the data to limit exposure",
   "Use the approved enterprise tool and mask personal data before analysis"
  ],
  "answer": 3,
  "explain": "Approved tools plus data minimisation protect customers and the organisation. Free consumer tools may retain data, avoiding AI altogether wastes a legitimate capability, and uploading half the data still exposes personal information."
 },
 {
  "module": "m7",
  "q": "Six weeks after a new procurement system went live, usage is low. Surveys show users understand why the change matters and want it, but feel unsure how to complete key tasks. Which ADKAR element should the next intervention target?",
  "options": [
   "Awareness — more communication about why the change is needed",
   "Knowledge and Ability — hands-on training and floor support",
   "Desire — incentives to use the new system",
   "Reinforcement — recognition for heavy users"
  ],
  "answer": 1,
  "explain": "Awareness and desire are already present; the first barrier is knowing how and being able to perform. More why-messaging, incentives or recognition will not fix a skills gap."
 },
 {
  "module": "m7",
  "q": "An organisation wants a PMO that sets mandatory reporting standards and reviews project compliance, but leaves day-to-day management with project managers in business units. Which PMO type fits?",
  "options": [
   "Supportive",
   "Directive",
   "Controlling",
   "Portfolio-only"
  ],
  "answer": 2,
  "explain": "A controlling PMO requires compliance and assures quality with moderate control. A supportive PMO only advises; a directive PMO manages projects directly; ‘portfolio-only’ is not one of the standard types."
 },
 {
  "module": "m7",
  "q": "A project’s forecast shows it will finish 2% over budget. The governance board has set a cost tolerance of ±5%. What should the project manager do?",
  "options": [
   "Request an urgent exception meeting with the board to approve the overrun",
   "Manage the variance within the project and report it in the normal cycle",
   "Stop non-essential work until the board formally approves the overrun",
   "Re-baseline the budget immediately to reflect the new cost forecast"
  ],
  "answer": 1,
  "explain": "Within tolerance, the PM manages by exception and reports normally. An urgent board meeting, stopping work or re-baselining are reactions reserved for forecasts outside tolerance or approved changes."
 },
 {
  "module": "m7",
  "q": "A senior supervisor publicly criticises a new digital process, and adoption on her team is the lowest in the organisation. What should the project manager do FIRST?",
  "options": [
   "Report her behaviour to HR as a breach of the change programme’s standards",
   "Meet her privately to understand her concerns and involve her in solving them",
   "Exclude her team from the rollout until adoption elsewhere is fully complete",
   "Double the training sessions for her team to build skills and confidence"
  ],
  "answer": 1,
  "explain": "Resistance often contains useful information, and influential sceptics can become strong champions. Disciplinary action, exclusion or more training skip understanding the root cause."
 },
 {
  "module": "m7",
  "q": "An AI model that prioritises maintenance work orders performed well at launch, but after a year planners report that its recommendations are increasingly wrong. What is the MOST likely cause and best response?",
  "options": [
   "Scope creep; freeze the requirements and re-baseline the model’s features",
   "A hallucination problem; rewrite the prompts and add output guardrails",
   "Model drift; monitor performance on current data and plan retraining",
   "Team resistance; run change management workshops with the planners"
  ],
  "answer": 2,
  "explain": "Performance decline as real-world data changes is model drift, handled through monitoring and retraining. Scope creep, prompt rewriting and change workshops do not address degraded model accuracy."
 },
 {
  "module": "m8",
  "q": "A software system has been deployed and users are working with it. The vendor is asking for final payment, but no formal acceptance has been recorded. What should the project manager do FIRST?",
  "options": [
   "Approve final payment, since users are already working with the system",
   "Withhold payment until every outstanding enhancement request is completed",
   "Archive the project documents and pass the vendor’s invoice to finance for payment",
   "Hold a formal acceptance review against the agreed criteria and obtain sign-off"
  ],
  "answer": 3,
  "explain": "Formal acceptance against agreed criteria should precede contract closure and payment. Paying without acceptance invites disputes, demanding new enhancements is outside the contract, and archiving comes after acceptance."
 },
 {
  "module": "m8",
  "q": "Halfway through a project, the organisation’s strategy changes and the sponsor cancels the project. What should the project manager do?",
  "options": [
   "Stop all activity immediately and reassign the team, without further documentation",
   "Continue the work until the original end date to protect the investment already made",
   "Ask the team to keep working informally in case the sponsor later reverses the decision",
   "Carry out closure: document what was done, close contracts, capture lessons, archive"
  ],
  "answer": 3,
  "explain": "Early termination still requires orderly closure. Walking away loses knowledge and creates contractual risk; continuing or working informally ignores a legitimate governance decision."
 },
 {
  "module": "m8",
  "q": "During closure, the team identifies that late involvement of the security team caused a three-week delay. What is the BEST way to make sure this lesson is applied?",
  "options": [
   "Record it in the final project report with a clear description of the impact and cause",
   "Update templates or gate criteria to require early security review, with an owner",
   "Email the lesson to all project managers and ask them to apply it on new projects",
   "Discuss it openly at the closing celebration so the whole team remembers it"
  ],
  "answer": 1,
  "explain": "A lesson is learned only when practice changes; embedding it in templates or gate criteria with an owner makes it stick. A report entry, an email or a conversation alone is easily forgotten."
 },
 {
  "module": "m8",
  "q": "Six months after closure, the business owner reports that a planned 30% reduction in processing time has not been achieved. Who is primarily responsible for managing the realisation of this benefit?",
  "options": [
   "The business owner of the benefit, with support from others as needed",
   "The project manager of the closed project, who planned the benefit",
   "The vendor that built the system, under its warranty obligations",
   "The PMO, which owns and tracks all benefits across the organisation"
  ],
  "answer": 0,
  "explain": "Benefits arise in operations and are owned by a named business owner, who can call on the former PM or others for help. The PM’s accountability ended with the project; vendors and PMOs support but do not own the benefit."
 },
 {
  "module": "m8",
  "q": "A vendor bidding on your project offers you free tickets to an international cricket match while the evaluation is under way. What should you do?",
  "options": [
   "Accept, as long as you continue to score the vendor fairly and objectively",
   "Accept and share the tickets with your team so that no one person benefits",
   "Accept, and disclose the gift after the contract is awarded",
   "Decline the offer, follow the gift policy and report it if required"
  ],
  "answer": 3,
  "explain": "Accepting a valuable gift during an evaluation creates undue influence or its appearance. Fair scoring, sharing with others or later disclosure do not remove the conflict."
 },
 {
  "module": "m8",
  "q": "Before a board meeting, the sponsor asks the PM to report the project as amber instead of red, promising that the problems will be fixed next month. What should the PM do?",
  "options": [
   "Report the true status and offer a recovery plan with the decisions needed",
   "Report amber as asked, since the sponsor is accountable for the project",
   "Report green to avoid alarming the board before the fixes are in place",
   "Avoid attending the board meeting and let the sponsor present the status"
  ],
  "answer": 0,
  "explain": "Honesty requires accurate reporting; adding a recovery plan keeps the conversation constructive. Changing the status at anyone’s request misleads the board, and avoidance leaves the board uninformed."
 },
 {
  "module": "m8",
  "q": "On an agile project, a stakeholder at the sprint review asks for a new report that is not in the backlog. What should the project manager do FIRST?",
  "options": [
   "Add the report to the current sprint immediately to satisfy the stakeholder",
   "Raise a formal change request and submit it to the change control board",
   "Work with the product owner to add it to the product backlog for prioritisation",
   "Tell the stakeholder that the release scope is fixed and cannot be changed now"
  ],
  "answer": 2,
  "explain": "In agile delivery, new requests go to the product owner, who prioritises the backlog. Changing the current sprint disrupts the team’s commitment, a change control board is a predictive mechanism, and declaring scope fixed contradicts adaptive practice."
 },
 {
  "module": "m8",
  "q": "A project manager is preparing for a job interview. Which portfolio entry is MOST likely to demonstrate competence?",
  "options": [
   "‘Responsible for project documentation, meetings, risk logs and stakeholder reporting’",
   "‘Excellent communicator and team player with strong leadership skills’",
   "‘Familiar with many project management tools, methods and frameworks’",
   "‘Led a 10-person team to migrate 600 courses on time; support tickets fell 35%’"
  ],
  "answer": 3,
  "explain": "Context, action and a measured result provide evidence of capability. Task lists, generic adjectives and tool familiarity do not show outcomes."
 }
]);
