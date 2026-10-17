# 🖨️ Apex Printworks — Shop Knowledge Base

> **Single Source of Truth** for screen printing production, darkroom specs, ink formulas, press maintenance, and customer service reference.

---

## ⚡ Quick Navigation

| Department | Primary Notes & SOPs | Key Tags |
| :--- | :--- | :--- |
| **Darkroom** | [[Darkroom/SOP - Screen Coating & Mesh Selection]]<br>[[Darkroom/Calculations - UV Exposure & Step Wedge]] | `#darkroom` `#emulsion` `#mesh` |
| **Press Room** | [[Press Room/Formulas - Pantone 186C & Discharge Mixing]]<br>[[Equipment/Maintenance - Automatic & Manual Presses]] | `#pressroom` `#ink` `#pantone` `#maintenance` |
| **Support / Front Desk** | [[Support/Customer FAQ - Print Guidelines & Turnaround]] | `#support` `#guidelines` `#turnaround` |

---

## 🧭 Shop Workflow Diagram

```mermaid
graph LR
    Art[Art Approval & Color Sep] --> Darkroom[Darkroom: Mesh & Exposure]
    Darkroom --> Setup[Press Setup: Off-Contact & Ink Mix]
    Setup --> StrikeOff[Strike-Off / Sample Approval]
    StrikeOff --> Run[Production Run & Conveyor Cure]
    Run --> QC[Quality Control & Count]
    QC --> Packing[Pack & Ship]
```

---

## 🔒 System Architecture (Why Git + Obsidian)

- **Local-First Speed:** Edits are made in Obsidian on your workstation (macOS, CachyOS, or Windows) with zero lag.
- **Automated Cloud Backup:** The **Obsidian Git** plugin synchronizes changes silently every 5 minutes to our secure GitHub repository.
- **Web Doc Portal (Astro Starlight):** Front desk, sales, and remote staff access this knowledge base instantly in a web browser without needing Obsidian.
- **Darkroom & Remote Codespaces:** Access and edit specs directly on a darkroom tablet or browser terminal with integrated **GitHub Copilot Business**.
