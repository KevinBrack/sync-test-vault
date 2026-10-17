---
title: "Live Demo Presentation Runbook: The Shop Knowledge Engine"
description: "Shop knowledge base document"
---

# 🎯 Live Demo Presentation Runbook: The Shop Knowledge Engine

> Keep this note open in a split pane in Obsidian during your demo to follow the exact cues and talking points.

---

## ⏱️ 5-Minute Agenda

| Time | Stage | Action | Boss Talking Point |
| :--- | :--- | :--- | :--- |
| **0:00 - 1:00** | The Problem | Open the runbook | *"Right now our shop SOPs live in heads and paper binders. Naive cloud drives create duplicate files and sync conflicts."* |
| **1:00 - 2:00** | Specialist View | Edit [Formulas - Pantone 186C & Discharge Mixing](/press-room/formulas-pantone-186c-discharge-mixing) | *"Printers get distraction-free, zero-lag markdown. Changes auto-backup to GitHub in the background."* |
| **2:00 - 3:00** | Front-of-House Portal | Show browser at `http://localhost:4321` | *"Support and sales don't touch Obsidian. They get a lightning-fast, searchable manual with zero training."* |
| **3:00 - 4:00** | Darkroom Codespace | Show GitHub repo -> Codespaces | *"Standing in the darkroom with an iPad or phone? Full browser editor with Copilot Business AI to calculate exposure or ink mixes."* |
| **4:00 - 5:00** | Multi-System Sync | Demo CachyOS / second client | *"The screen print manager and I stay in lockstep across Mac and Linux with zero vendor lock-in and a complete audit trail."* |

---

## 🎬 Live Demo Steps

### Step 1: The Quick Edit (Obsidian)
1. Navigate to [Formulas - Pantone 186C & Discharge Mixing](/press-room/formulas-pantone-186c-discharge-mixing).
2. Change the cure temperature from `320°F` to `325°F` or add a note: `"Tested on 100% Ring-Spun Cotton"`.
3. Check status bar in bottom right: `Obsidian Git: pushed 1 commit to origin/main`.
4. Point out to your boss: *"Notice I didn't save, export, or email anything. It's already backed up to company Git."*

### Step 2: The Instant Support Portal (Astro Starlight)
1. Switch to your browser tab showing **Apex Printworks — Operations Portal** (`http://localhost:4321`).
2. Press `Cmd + K` (Search) and type **"Pantone 186C"** or **"Exposure"**.
3. Click through to the page: show that the table of ingredients and cure temperature are formatted cleanly.
4. Point out: *"Customer service reps can look this up in 2 seconds while on the phone with a customer."*

### Step 3: The Darkroom Scenario (GitHub Codespaces + Copilot)
1. Open the GitHub repository in your browser.
2. Click the green **Code** button -> **Codespaces** -> **Create codespace on main**.
3. In under 15 seconds, a full VS Code instance opens in Chrome/Safari.
4. Open GitHub Copilot Chat and ask:
   > *"What mesh count and squeegee durometer should we use for white ink on black cotton hoodies according to our shop SOPs?"*
5. Copilot quotes directly from our [SOP - Screen Coating & Mesh Selection](/darkroom/sop-screen-coating-mesh-selection) note!
6. Point out: *"This gives everyone in the darkroom immediate access to an AI shop assistant with zero software installation."*

### Step 4: Cross-Device Synchronization (CachyOS Dual-Boot)
1. Show how Git handles changes across systems.
2. In CachyOS or on a second device, open the vault.
3. Show that the new edit pulled instantly without generating `(conflicted copy)` files.
4. Point out: *"If the screen print manager and I both edit notes today, Git's merge engine handles it safely with a full history of who changed what."*

---

## 💡 Anticipated Objections & Counter-Pitches

- **Objection:** *"Why not just use Google Docs or Notion?"*
  - **Counter:** *"Google Docs and Notion require constant internet, suffer from formatting bloat, and lock our data into proprietary cloud silos. If their servers go down, the darkroom stops. With Obsidian + Git, every machine holds a 100% offline-capable local copy. Plus, GitHub version control gives us forensic audit history."*
- **Objection:** *"Is Git too complicated for non-technical printers?"*
  - **Counter:** *"The printers never touch the command line. The Obsidian Git plugin operates completely in the background. They just type notes like a text editor, and Git silently takes care of the rest."*
- **Objection:** *"What will this cost?"*
  - **Counter:** *"Obsidian is free for local use. GitHub private repos are free. Astro Starlight is open-source and free to host on GitHub Pages or Cloudflare. The only cost is adding GitHub Copilot Business ($19/mo) to our existing office account, which pays for itself in avoided misprints on day one."*
