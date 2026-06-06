# Fade-up quiz entry - 2026-06-06

## Context

- User requested the local `fade-up` skill for `src/pages/Quiz.jsx`.
- Project is Vite/React and already has `framer-motion`.
- `/quiz` is routed to `src/pages/InitialQuestions.jsx`, while `src/pages/Quiz.jsx` is not the active route in `src/App.tsx`.

## Changes

- Added reusable `src/components/FadeUp.jsx`.
- Applied sequential fade-up animation to `src/pages/Quiz.jsx`.
- Applied the same hierarchy animation to the active `/quiz` screen in `src/pages/InitialQuestions.jsx`.
- Added `fadeCardItem` in `src/pages/InitialQuestions.module.scss` so animated wrappers preserve the gender card grid layout and hover behavior.
- Removed route-level `FadeUp` from `src/components/PageTransition/PageTransition.jsx` after user clarified each quiz component must appear in a linear sequence instead of the whole page wrapper animating as one block.
- Updated `src/components/FadeUp.jsx` to forward refs so existing measured elements can keep their refs while animating.
- Applied per-component delay sequencing across the quiz flow: age selection pages, quiz steps 1-6/9/10, proof pages, morning-feeling, and transition.
- Added small wrapper utility classes where needed to preserve card, option, and image layout while each component animates independently.

## Validation

- `npm run typecheck` passed.
- `npm run build` passed.
- Captured desktop and mobile screenshots for `http://127.0.0.1:3006/quiz`.
- Captured sample screenshots for `/quiz`, `/quiz-step-1`, and `/start` after applying route-level fade-up.
- Captured mobile screenshots for `/age-selection-women`, `/women-success`, `/morning-feeling`, and `/transition?option=abundance&options=abundance` after replacing route-level fade with per-component sequencing.
- Visual check passed for card sizing, text fit, desktop layout, and mobile layout.
- `npm run lint` still fails on pre-existing unrelated issues in `src/components/AliceChat/AliceChat.tsx`, `src/lib/api.ts`, and `src/pages/AlmaGemea.tsx`.

## Commit

- `49fe162 feat: add fade-up animation to quiz entry`
- `4117bf0 feat: apply fade-up to route pages`
- `172ad2f docs: add fade-up quiz handoff`
- `71944eb docs: update fade-up route handoff`
- `00612b7 feat: sequence fade-up quiz components`

## Notes

- Build still reports existing Sass `@import` deprecation warnings in quiz step styles.
- Existing unrelated worktree changes were left untouched.
