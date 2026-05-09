---
name: daily-session-summary
description: Update the shared daily implementation summary for completed coding sessions. Use when Codex finalizes an implementation, finishes a planned development task, prepares a handoff, or closes a session that changed code, configuration, rules, docs, tests, or deployment behavior.
---

<!--
Main responsibilities: define the daily session summary workflow and the required capture fields for completed implementations.
Main resources: assets/daily-session-template.md.
-->

# Daily Session Summary

## Overview

Maintain one shared implementation log per day in the parent folder of the active project. The log lets the user recover what changed across projects without opening each repository.

## Workflow

1. Identify the active project root from the current working directory.
2. Use `../daily_sessions/` relative to that project root as the shared session directory.
3. Use the local date for the daily document name: `YYYY-MM-DD.md`.
4. If the directory or daily document does not exist, create it from `assets/daily-session-template.md`.
5. Append a new implementation entry. Never overwrite previous entries.
6. Record only real changes verified in the workspace. Do not invent tests, commits, files, or outcomes.
7. Include absolute file paths for changed files when possible.
8. If the work spans multiple projects, add one entry per project or one entry with clear project subsections.

## Entry Requirements

Every implementation entry must include:

- Local time and short implementation title.
- Project name and project root.
- User request or goal.
- Summary of code, rule, docs, config, or test changes.
- Files changed, grouped by `NEW`, `MODIFY`, or `DELETE`.
- Validation performed, including commands and outcomes.
- Commit hash or commit message when a commit was created.
- Pending items, risks, or follow-up notes.

## Template

Read `assets/daily-session-template.md` before creating a new daily document. Keep the same section order so entries stay comparable across projects.

## Guardrails

- Use `daily_sessions`, not `dayly_sessions`.
- Do not create a fake success record when work is incomplete.
- Do not mark validation as passed unless the command or manual check actually ran.
- If no validation was possible, write `Not run` and the reason.
- Preserve existing daily entries exactly.
- If the daily document was created during the current implementation, mention that in the final response.
