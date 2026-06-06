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

## Validation

- `npm run typecheck` passed.
- `npm run build` passed.
- Captured desktop and mobile screenshots for `http://127.0.0.1:3006/quiz`.
- Visual check passed for card sizing, text fit, desktop layout, and mobile layout.

## Commit

- `49fe162 feat: add fade-up animation to quiz entry`

## Notes

- Build still reports existing Sass `@import` deprecation warnings in quiz step styles.
- Existing unrelated worktree changes were left untouched.
