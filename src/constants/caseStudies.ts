import type { CaseStudy } from "@/types/content";
import { ExternalLinks, Routes } from "./routes";

/*
 * Case-study copy. Every claim here is drawn from the project's own source and docs; anything not
 * yet shipped carries an "inProgress" or "planned" status so it is never presented as finished.
 */

export const THUNDERDOME_CASE_STUDY: CaseStudy = {
  id: "thunderdome-engine",
  route: Routes.WORK_THUNDERDOME,
  meta: {
    title: "The Thunderdome Engine | CodeHeart",
    description:
      "Case study: a TypeScript platform where autonomous bots, written in any language, compete in sandboxed Docker containers under reproducible, seeded tournaments.",
  },
  title: "The Thunderdome Engine",
  subtitle: "A platform for building, running, and competing autonomous game-playing bots.",
  summary:
    "A TypeScript and Node.js monorepo where bots written in different languages compete in games and tournaments under the same rules. Each bot runs in its own locked-down Docker container, talks to the engine over a JSON protocol, and plays in tournaments that can be replayed from a single seed.",
  tags: ["TypeScript", "Node.js", "Docker", "Zod", "Vitest", "Python SDK"],
  facts: [
    { label: "Type", value: "Personal project" },
    { label: "Status", value: "Working platform, in active development" },
    { label: "Started", value: "August 2026" },
    { label: "Scope", value: "8 games · 3 tournament formats · 2 bot SDKs" },
  ],
  repoUrl: ExternalLinks.THUNDERDOME_REPO,
  sections: [
    {
      id: "overview",
      kicker: "Overview",
      title: "One arena, many games, any language.",
      paragraphs: [
        "Thunderdome is a personal project: a platform for running bot-versus-bot games. Bots are developed independently, packaged as Docker images, and evaluated against each other under consistent rules, whether the game is Rock-Paper-Scissors, Connect Four, Hearts, Texas Hold’em, or a stock-market simulation.",
        "The interesting problem isn’t any single game. It’s building one platform that can host very different games — turn-based or simultaneous, open or hidden-information, two players or ten — behind a single engine and a single bot protocol, while keeping every tournament fair, isolated, and reproducible.",
      ],
    },
    {
      id: "challenges",
      kicker: "Engineering challenges",
      title: "The hard parts live in the platform.",
      paragraphs: [],
      points: [
        {
          title: "A protocol for any language",
          text: "Bots exchange newline-delimited JSON with the engine over stdin and stdout, validated against versioned schemas. TypeScript and Python SDKs exist today.",
          status: "implemented",
        },
        {
          title: "Different games, one engine",
          text: "Each game implements a typed GameDefinition contract (initialize, observe, validate, resolve), so the engine runs rounds without knowing the rules. Eight games run on it today.",
          status: "implemented",
        },
        {
          title: "Hidden information",
          text: "A game’s observation function is the only authority on what a bot sees. In Hearts, a bot sees its own hand and only the size of everyone else’s. Organizer-only settings are redacted before they reach bots.",
          status: "implemented",
        },
        {
          title: "Turn-based and simultaneous play",
          text: "Each round, the game declares who must act. Rock-Paper-Scissors asks every player at once, Connect Four asks only the current player, and the engine collects actions concurrently either way.",
          status: "implemented",
        },
        {
          title: "Reproducible tournaments",
          text: "A single tournament seed is the only source of system randomness. Match and bot seeds are derived from it with HMAC-SHA256, and every round’s events are recorded, so any tournament can be replayed.",
          status: "implemented",
        },
        {
          title: "Isolated bot execution",
          text: "Every bot runs in its own container with no network, a read-only filesystem, dropped privileges, and caps on CPU, memory, and processes. Crashes, timeouts, and overruns become recorded forfeits, not failures.",
          status: "implemented",
        },
        {
          title: "Stronger sandboxing and more languages",
          text: "Evaluating gVisor or Firecracker for stronger isolation, honoring each game’s declared resource limits (today every bot gets the same defaults), and adding a Java SDK.",
          status: "planned",
        },
      ],
    },
    {
      id: "architecture",
      kicker: "Architecture",
      title: "Clear layers, strict boundaries.",
      paragraphs: [
        "The monorepo separates concerns into small packages: the wire protocol, a seeded random-number generator, the engine (game contract, match runner, and tournament orchestrator), a Docker runtime, SDKs for bot and game authors, a manifest registry, pluggable tournament formats, and a file-based tournament store. A command-line app sits on top as the presentation layer.",
        "The engine contains no Docker code. It gathers actions through an ActionCollector interface, keeping container management out of the game loop. Tournaments use an incremental pull model: the runner plays one match at a time and feeds each result back to the format, which decides what can be played next. Round-robin, single-elimination, and Swiss league formats are implemented.",
      ],
      diagram: [
        { label: "Registry", detail: "Finds games and bots by scanning their manifest files" },
        { label: "Tournament format", detail: "Schedules the next match from the results so far" },
        { label: "Match runner", detail: "Asks the game who must act and what each bot may see" },
        { label: "Docker runtime", detail: "Delivers observations to sandboxed bots and collects actions" },
        { label: "Game definition", detail: "Validates actions and resolves the round" },
        { label: "Tournament store", detail: "Records the seed and every event for replay" },
      ],
    },
    {
      id: "decisions",
      kicker: "Engineering decisions",
      title: "Why it’s built this way.",
      paragraphs: [],
      points: [
        {
          title: "Pipes over a network protocol",
          text: "NDJSON over stdio was chosen over gRPC, HTTP, and JSON-RPC. Every language can read lines from standard input, and bot containers can run with networking disabled entirely.",
        },
        {
          title: "Observations, not state",
          text: "Bots never receive the game state, only the view a game chooses to give them. Hidden information stays a property of the game, not something each bot is trusted to ignore.",
        },
        {
          title: "Derived seeds, no shared RNG",
          text: "Deriving seeds with HMAC avoids making random-number generators agree across languages, while still tracing every match back to one tournament seed. Replays play back recorded events rather than re-running bots, since live timing can’t be reproduced exactly.",
        },
        {
          title: "Limits separate from timeouts",
          text: "Memory and CPU caps protect the host; per-turn and per-match deadlines protect the tournament. Keeping them separate means every failure is reported precisely.",
        },
        {
          title: "Decisions written down",
          text: "Fifteen architecture decision records capture the tradeoffs, from the monorepo layout to the storage format, so the reasoning lives alongside the code.",
        },
      ],
    },
    {
      id: "perspective",
      kicker: "Engineering perspective",
      title: "Flexible where it matters, strict where it counts.",
      paragraphs: [
        "Thunderdome is an exercise in designing interfaces that hold up as a system grows. The same contracts now support eight games, three tournament formats, and bots in two languages, and one of its stock-market games grew into a full web application (Quant Fusion) on top of it.",
        "The work that mattered most was deciding where the boundaries go: what the engine owns versus the game, what a bot may see, and what a container may touch. Getting those right is what lets new games and bots be added without reopening the core. More than 300 test files, CI that lints, type-checks, and tests every change, and a boundary check on bot contributions keep it that way.",
      ],
    },
  ],
};

export const QUANT_FUSION_CASE_STUDY: CaseStudy = {
  id: "quant-fusion",
  route: Routes.WORK_QUANT_FUSION,
  meta: {
    title: "Quant Fusion | CodeHeart",
    description:
      "Case study: a React and TypeScript application for building and testing research-driven trading bots against replayed market data, built on the Thunderdome Engine.",
  },
  title: "Quant Fusion",
  subtitle: "A research-driven investing simulation for building and testing trading bots.",
  summary:
    "Quant Fusion pairs a curated research model of the fusion-energy supply chain with deterministic replays of real market data, so trading bots can be built, backtested, and compared without risking real money. A React dashboard and an Express API turn the Thunderdome Engine’s command-line workflows into a usable product.",
  tags: ["React 19", "TypeScript", "Vite", "Tailwind CSS", "Recharts", "Express", "SQLite"],
  facts: [
    { label: "Type", value: "Personal project" },
    { label: "Status", value: "Working application, in active development" },
    { label: "Built on", value: "The Thunderdome Engine" },
    { label: "Money at risk", value: "None: simulation only" },
  ],
  repoUrl: ExternalLinks.QUANT_FUSION_SOURCE,
  sections: [
    {
      id: "overview",
      kicker: "Product overview",
      title: "Research in, decisions out.",
      paragraphs: [
        "Quant Fusion explores a question: can structured, point-in-time research about an emerging industry inform a disciplined trading strategy? It follows eleven publicly traded companies in the fusion-energy supply chain, and pairs a hand-curated research dataset — entities, relationships, evidence, and hypotheses — with their real historical prices.",
        "It’s built for one user: the person developing the trading bots. The goal is an honest testing ground, where a strategy has to prove itself on data it hasn’t seen, with realistic trading costs, before anyone should trust it.",
      ],
    },
    {
      id: "experience",
      kicker: "Product experience",
      title: "One dashboard for the whole research loop.",
      paragraphs: [
        "The web app is organized around the workflow of building and evaluating a strategy. Each area of the dashboard maps to a step in that loop.",
      ],
      points: [
        {
          title: "Fleet",
          text: "Every registered bot and its standings in forward matches, at a glance.",
          status: "implemented",
        },
        {
          title: "Simulation",
          text: "Create historical or forward matches, run or preview the next trading day, and compare bots on equity, Sharpe ratio, drawdown, and total return, with a decision log behind every trade.",
          status: "implemented",
        },
        {
          title: "Research",
          text: "Explore the research model: entities and their relationships, hypotheses, an event timeline, exposure maps, and a news feed.",
          status: "implemented",
        },
        {
          title: "Jobs",
          text: "Check the freshness of market data and research, follow live job logs, and review the history of each daily cycle. Some job controls aren’t wired up yet.",
          status: "inProgress",
        },
        {
          title: "News agent",
          text: "An LLM-assisted workflow that reads the news and proposes research updates for a person to review.",
          status: "inProgress",
        },
        {
          title: "Paper trading",
          text: "A bot proposes orders for a paper brokerage account, and a person approves each ticket before anything is sent.",
          status: "inProgress",
        },
      ],
    },
    {
      id: "engineering",
      kicker: "Engineering and implementation",
      title: "A product layer on a deterministic core.",
      paragraphs: [
        "The simulation replays real daily prices rather than inventing them. Market data comes from Yahoo Finance’s public chart API and is kept in a versioned SQLite store, so every match runs against a known snapshot. Splits and dividends are handled, and bots never see data from the future.",
        "Strategy logic lives in a TypeScript quant SDK: alpha signals weighted by their measured predictive power, portfolio construction by equal weight, inverse volatility, or risk parity, and a risk engine that can only shrink positions, never grow them.",
        "The React front end talks to an Express API over REST, with state kept in focused custom hooks rather than a global store. The API reads data by importing the monorepo’s packages directly, and runs long actions through the same command-line tools used everywhere else, so the web app and the CLI can’t drift apart.",
      ],
      diagram: [
        { label: "Market data", detail: "Daily prices fetched from Yahoo Finance into versioned SQLite" },
        { label: "Research model", detail: "Curated evidence, hypotheses, and scenarios" },
        { label: "Match engine", detail: "Deterministic replay, one round per trading day" },
        { label: "Trading bots", detail: "Signals, portfolio construction, and risk limits" },
        { label: "Express API", detail: "Reads packages directly, runs actions via the CLI" },
        { label: "React dashboard", detail: "Fleet, simulation, research, and jobs" },
      ],
    },
    {
      id: "challenges",
      kicker: "Challenges and decisions",
      title: "Keeping the results honest.",
      paragraphs: [],
      points: [
        {
          title: "Avoiding look-ahead bias",
          text: "A walk-forward backtesting harness, with a dedicated test for data leakage, keeps strategies from being tuned on the same data they’re judged on.",
          status: "implemented",
        },
        {
          title: "Realistic execution",
          text: "Early versions filled orders at the same day’s close. Next-day fills with a bid-ask spread, market impact, and volume caps replaced that, and the project’s notes credit the change with removing roughly 20–30 points of overstated return.",
          status: "implemented",
        },
        {
          title: "A strict research boundary",
          text: "The game treats research as an opaque input, so the market simulation stays domain-agnostic, and the quant SDK sits behind an adapter interface that other industries could plug into.",
          status: "implemented",
        },
        {
          title: "Guardrails before automation",
          text: "Paper trading is locked behind an explicit opt-in, refuses real-money accounts by default, and requires a person to approve every order ticket.",
          status: "inProgress",
        },
        {
          title: "Candid about uncertainty",
          text: "The current strategy passes most of its paper-trading checklist, but its forward test on unseen data hasn’t started, and the project’s own notes call the results statistically thin. The tooling exists to test a strategy, not to promise returns.",
        },
      ],
    },
    {
      id: "status",
      kicker: "Project status",
      title: "A working application, still evolving.",
      paragraphs: [
        "Quant Fusion is a personal project, not client work. Its fleet, simulation, and research workflows run today against real historical data, backed by an extensive automated test suite. Paper trading, the news agent, and parts of the jobs dashboard are still in development.",
        "It runs locally or with Docker Compose as a single-user tool, so there’s no public demo. The source is available on GitHub as part of the Thunderdome repository, where it’s known as Stock Market 4.",
      ],
    },
  ],
};

export const CASE_STUDIES: CaseStudy[] = [THUNDERDOME_CASE_STUDY, QUANT_FUSION_CASE_STUDY];
