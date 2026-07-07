# OASIS WEB6 — The Unified AI Abstraction Layer

**One API. Every AI Model. Intelligent Routing.**

OASIS WEB6 is the AI unification layer — a single API that abstracts over every major AI model, agent framework, orchestrator and protocol. Route intelligently across OpenAI, Anthropic, Gemini, Ollama, Mistral and beyond, with fallback, cost optimisation and capability matching built in.

## What is WEB6?

As WEB4 unified identity and data, WEB6 unifies artificial intelligence. Any OASIS app or OAPP can call a single WEB6 endpoint and get the best available AI response — regardless of which underlying model or provider powers it.

## Features

| Feature | Description |
|---|---|
| **Universal AI Router** | One endpoint, any model — GPT-4o, Claude, Gemini, Llama, Mistral and more |
| **Intelligent routing** | Automatically selects model based on cost, capability, speed and availability |
| **Fallback chains** | If one provider fails or rate-limits, WEB6 falls through to the next automatically |
| **OASIS Agent Framework** | Build AI agents that share the OASIS avatar/karma context |
| **MCP support** | Native Model Context Protocol support for tool-use and agent orchestration |
| **Prompt caching** | Cross-provider prompt cache for cost reduction |

## Supported Providers

OpenAI (GPT-4o, o1, o3), Anthropic (Claude), Google (Gemini), Meta (Llama), Mistral, Cohere, Ollama (local), Groq, Together AI, and more — with new providers added continuously.

## OASIS Integration

WEB6 is deeply integrated with WEB4 — AI agents built on WEB6 have full access to:
- The requesting user's OASIS avatar and karma context
- OASIS DNA (personal data vault) for personalized responses
- STARNET for tool and OAPP discovery
- Cross-app memory via OASIS holons

## Related

- [`Web4Site`](../Web4Site) — WEB4 unification layer (foundation for WEB6)
- [`Web7Site`](../Web7Site) — WEB7 symbiotic layer (human-AI integration)
- [`OASIS-API-Javascript-Package-WEB6`](../OASIS-API-Javascript-Package-WEB6) — the WEB6 JS client

## Tech Stack (Site)

| Layer | Detail |
|---|---|
| Site | Single-file `index.html` — inline CSS + vanilla JS, includes holonic braid whitepaper |
| Fonts | Orbitron, Rajdhani, Share Tech Mono (Google Fonts) |

## Running Locally

```bash
npx serve .
# or
python -m http.server 8080
```

---

*Part of the [OASIS Omniverse](https://oasisomniverse.one) · The Unified AI Layer*
