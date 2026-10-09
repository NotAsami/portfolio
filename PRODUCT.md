# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Fellow developers and modders who found Sam (NotAsami) through GitHub, a mod thread or a project link and want to know who is behind it, plus curious strangers who followed a profile link or searched the handle. Visitors are browsing out of interest, not evaluating a hire.

## Product Purpose

A personal web presence: "let people know about me on the internet." It shows what Sam builds, how they think and what they're into. It is not a job-hunting portfolio. Sam is not actively looking for work, so there are no hiring calls to action, availability badges or CV. Success means a visitor leaves knowing what Sam makes and how to reach them if they want to talk.

## Positioning

A CS student and automation developer in Bratislava who finishes what they start and likes taking systems apart from the inside: IL-patching compiled mods, production-debugging a self-hosted assistant, and building a custom TTRPG platform for their own table. The projects are real, deployed and used.

## Operating Context

Static site, opened from links on GitHub and profiles, often on a phone. Read once, casually.

## Capabilities and Constraints

- Plain static HTML/CSS/JS (`index.html`, `app.js`) with no build step.
- The contact email is `contact@notasami.dev` and GitHub is `github.com/NotAsami`.
- Projects:
  - **G.U.I.D.E. Codex (flagship).** A React/TS/Supabase character-management app for Sam's tabletop campaign, themed as an in-world neural implant that is secretly the villain.
    - Both the player side and the DM/operator console have shipped.
    - New: a Foundry VTT module syncs HP both ways between the VTT and the app and triggers app events from VTT activity. It is a work in progress, but most features work.
    - Repo: `github.com/NotAsami/GUIDE-webapp`.
  - **AI Calendar Assistant.** Telegram to Calendar, built with Python/Flask and the Anthropic API, running under systemd on an Oracle Cloud VM.
  - **Mod Engineering.** IL patching with dnSpyEx and a multiplayer desync diagnosis.
  - **Server Hosting.** A NeoForge server and CC:Tweaked Lua projects.
  - **Brettany.** A long-running D&D worldbuilding project.

## Brand Commitments

- Handle: NotAsami; display name: Sam; domain: notasami.dev.
- The voice is first-person, plain and dry, e.g. "I build stuff that actually runs", "debugged in production".
- The G.U.I.D.E. wordmark and its cyan (player) / amber (system-truth) story belong to that project.

## Evidence on Hand

- `assets/hero.jpg`: avatar illustration for the hero.
- `assets/brettany-map.webp`: Brettany world map (4.7 MB).
- `assets/guide-demo.mp4`: G.U.I.D.E. demo, 42 s at 1080p, 60 MB. It needs compressing for the web.
- `assets/codex-*.png`: earlier G.U.I.D.E. screenshots.
- `assets/Pasted 2026-10-09 at *.png`: new screenshots, 12 files, 0.5–7 MB each:
  - 12.33.30: Kingdom of Brettany wiki page.
  - 12.38.42: operator console party graph.
  - 12.39.10, 12.39.21, 12.39.40: operator feature editor (graph, code and form views).
  - 12.40.02: shard lattice editor.
  - 12.40.23 to 12.40.53: player screens for Ros Chrisstone (equipment, inventory, carried items, lore, spells).
  - 12.41.03: quest board.
- None of these exist: testimonials, user counts, a Foundry screenshot. Do not fabricate them.

## Product Principles

1. The work leads; decoration supports it.
2. Real artifacts over claims: screenshots, video and repos.
3. Personal, not professional. No hiring language.
4. It must read well on a phone.

## Accessibility & Inclusion

WCAG AA contrast, keyboard focus states, respect `prefers-reduced-motion`.
