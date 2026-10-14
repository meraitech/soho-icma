# Graph Report - soho-icma  (2026-10-13)

## Corpus Check
- 46 files · ~12,558 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 3 file(s) not represented in the graph (top: (none) 1, .ico 1, .css 1)

## Summary
- 297 nodes · 668 edges · 14 communities
- Extraction: 95% EXTRACTED · 5% INFERRED · 0% AMBIGUOUS · INFERRED: 35 edges (avg confidence: 0.95)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `0ff80ea0`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Card
- contact/page.tsx
- package.json
- site-header.tsx
- site.ts
- about-partners-contact.tsx
- components.json
- compilerOptions
- shadcn/ui
- devDependencies
- membership/page.tsx
- shadcn
- AGENTS.md
- README.md

## God Nodes (most connected - your core abstractions)
1. `Card()` - 27 edges
2. `CardHeader()` - 27 edges
3. `CardTitle()` - 27 edges
4. `next` - 21 edges
5. `CardContent()` - 21 edges
6. `PageHero()` - 19 edges
7. `cn` - 16 edges
8. `lucide-react` - 16 edges
9. `compilerOptions` - 16 edges
10. `SiteHeader()` - 14 edges

## Surprising Connections (you probably didn't know these)
- `Component Selection` --references--> `Accordion()`  [INFERRED]
  .opencode/skills/shadcn/SKILL.md → src/components/ui/accordion.tsx
- `Component Selection` --references--> `Avatar()`  [INFERRED]
  .opencode/skills/shadcn/SKILL.md → src/components/ui/avatar.tsx
- `Component Structure → [composition.md](https://github.com/shadcn-ui/ui/blob/main/skills/shadcn/rules/composition.md)` --references--> `Avatar()`  [INFERRED]
  .opencode/skills/shadcn/SKILL.md → src/components/ui/avatar.tsx
- `Component Structure → [composition.md](https://github.com/shadcn-ui/ui/blob/main/skills/shadcn/rules/composition.md)` --references--> `AvatarFallback()`  [INFERRED]
  .opencode/skills/shadcn/SKILL.md → src/components/ui/avatar.tsx
- `Component Selection` --references--> `Badge()`  [INFERRED]
  .opencode/skills/shadcn/SKILL.md → src/components/ui/badge.tsx

## Import Cycles
- None detected.

## Communities (14 total, 0 thin omitted)

### Community 0 - "Card"
Cohesion: 0.13
Nodes (35): nextConfig, next, AnnouncementsPage(), metadata, CfoAwardPage(), metadata, EventsPage(), metadata (+27 more)

### Community 1 - "contact/page.tsx"
Cohesion: 0.09
Nodes (29): Chat & Messaging → [chat.md](https://github.com/shadcn-ui/ui/blob/main/skills/shadcn/rules/chat.md), CLI, Component Selection, Critical Rules, Forms & Inputs → [forms.md](https://github.com/shadcn-ui/ui/blob/main/skills/shadcn/rules/forms.md), Icons → [icons.md](https://github.com/shadcn-ui/ui/blob/main/skills/shadcn/rules/icons.md), Styling & Tailwind → [styling.md](https://github.com/shadcn-ui/ui/blob/main/skills/shadcn/rules/styling.md), Use Components, Not Custom Markup → [composition.md](https://github.com/shadcn-ui/ui/blob/main/skills/shadcn/rules/composition.md) (+21 more)

### Community 2 - "package.json"
Cohesion: 0.06
Nodes (30): eslintConfig, dependencies, @base-ui/react, class-variance-authority, cn, lucide-react, next, react (+22 more)

### Community 3 - "site-header.tsx"
Cohesion: 0.13
Nodes (24): @base-ui/react, lucide-react, geistMono, geistSans, metadata, RootLayout(), SiteFooter(), SiteHeader() (+16 more)

### Community 4 - "site.ts"
Cohesion: 0.11
Nodes (25): Component Structure → [composition.md](https://github.com/shadcn-ui/ui/blob/main/skills/shadcn/rules/composition.md), AudienceTabs(), Bento(), FeatureCard(), Tabs(), TabsContent(), TabsList(), tabsListVariants (+17 more)

### Community 5 - "about-partners-contact.tsx"
Cohesion: 0.14
Nodes (14): AboutPage(), metadata, Home(), AboutPreview(), BoardPreview(), Partners(), HomeHero(), icons (+6 more)

### Community 6 - "components.json"
Cohesion: 0.09
Nodes (21): aliases, components, hooks, lib, ui, utils, iconLibrary, menuAccent (+13 more)

### Community 7 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 8 - "shadcn/ui"
Cohesion: 0.17
Nodes (11): Component Docs, Examples, and Usage, Current Project Context, Design Systems from DESIGN.md, Detailed References, Key Fields, Key Patterns, Principles, Quick Reference (+3 more)

### Community 9 - "devDependencies"
Cohesion: 0.20
Nodes (10): devDependencies, eslint, eslint-config-next, shadcn, tailwindcss, @tailwindcss/turbopack, @types/node, @types/react (+2 more)

### Community 10 - "membership/page.tsx"
Cohesion: 0.38
Nodes (8): faqs, MembershipPage(), metadata, tiers, Accordion(), AccordionContent(), AccordionItem(), AccordionTrigger()

### Community 11 - "shadcn"
Cohesion: 0.25
Nodes (7): mcp, shadcn, plugins, $schema, command, enabled, type

### Community 12 - "AGENTS.md"
Cohesion: 0.50
Nodes (3): graphify, Report Next.js feedback, This is NOT the Next.js you know

### Community 13 - "README.md"
Cohesion: 0.50
Nodes (3): Deploy on Vercel, Getting Started, Learn More

## Knowledge Gaps
- **9 isolated node(s):** `react-dom`, `tw-animate-css`, `@tailwindcss/turbopack`, `@types/node`, `@types/react` (+4 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 141 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `Card` to `contact/page.tsx`, `package.json`, `site-header.tsx`, `site.ts`, `about-partners-contact.tsx`, `membership/page.tsx`?**
  _High betweenness centrality (0.125) - this node is a cross-community bridge._
- **What connects `react-dom`, `tw-animate-css`, `@tailwindcss/turbopack` to the rest of the system?**
  _9 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Card` be split into smaller, more focused modules?**
  _Cohesion score 0.13095238095238096 - nodes in this community are weakly interconnected._
- **Why does `lucide-react` connect `site-header.tsx` to `Card`, `contact/page.tsx`, `package.json`, `site.ts`, `about-partners-contact.tsx`, `membership/page.tsx`?**
  _High betweenness centrality (0.083) - this node is a cross-community bridge._
- **Should `contact/page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.09413067552602436 - nodes in this community are weakly interconnected._
- **Why does `Component Selection` connect `contact/page.tsx` to `Card`, `site-header.tsx`, `site.ts`, `about-partners-contact.tsx`, `shadcn/ui`, `membership/page.tsx`?**
  _High betweenness centrality (0.069) - this node is a cross-community bridge._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.06451612903225806 - nodes in this community are weakly interconnected._