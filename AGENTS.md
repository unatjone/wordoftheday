# AGENTS.md

Guidance for agents working on this static Word of the Day site.

## Project Shape

- This is a plain static site. There is no build step, package manager, framework, or server required.
- Main files:
  - `index.html` contains the page structure.
  - `styles.css` contains all layout, artwork, icons, and responsive styling.
  - `script.js` contains the daily word list, word selection, bubble animation timing, and activity text updates.
  - `word-of-the-day-kids-hero.webp` is the hero scene image.
  - `word-of-the-day-logo.webp` is the Word of the Day logo.

## Run And Test

- Open `index.html` directly in a browser.
- Test both desktop and mobile widths after visual changes.
- Mobile Chrome browser chrome reduces the visible height, so check small viewports carefully.
- If available, use a browser screenshot for layout changes. This workspace may not have Node, Chromium, or Playwright installed.

## Design Intent

- Audience: preschool and early elementary children.
- Keep the page bright, playful, simple, and readable.
- The first screen should remain the actual experience, not a landing page.
- The hero image, logo, thought bubbles, word, and bottom activity cards are the core experience.
- Avoid adding explanatory blocks of text outside the experience.

## Layout Notes

- The hero section is `.hero-scene`.
- The generated thought bubbles live in `.thought-layer`.
- The main word bubble is created by JavaScript with the `.thought-main` class.
- The bottom activity area is `.steps`, with four `.step-card` items.
- On mobile, `.steps` becomes a two-column grid.
- Keep the activity icons centered and use stable icon dimensions so headings and copy align cleanly.
- Be careful with prompt text like `.word-prompt`; it can overlap the generated bubble if placed near the center of the hero.

## Word Timing

- Bubble steps are controlled by `bubbleSteps` in `script.js`.
- The main bubble currently appears after the `.thought-main` step delay.
- Bottom activity text reveal timing is controlled by:

```js
const activityRevealDelayAfterMainBubble = 5000;
```

- Set that value to `0` if the activity words should appear at the same time as the main bubble.

## Daily Word Rules

- Add or edit words in `wordActivities` in `script.js`.
- Each entry is `[word, syllables, description]`.
- Descriptions should be short, child-friendly, and lowercase because `makeWordActivity()` formats them into sentences.
- Keep enough words to preserve the no-repeat warning logic:

```js
const minimumRepeatGapDays = 50;
```

## Styling Rules

- Prefer editing existing classes over adding new abstractions.
- Keep CSS responsive using the existing media queries.
- Do not introduce a build system or dependencies unless explicitly requested.
- Keep image references as `word-of-the-day-kids-hero.webp` and `word-of-the-day-logo.webp` unless the assets are actually changed.
- Use ASCII text unless there is a clear reason not to.

## Accessibility

- Preserve meaningful `alt` text for images.
- Keep interactive elements as real buttons when they trigger page behavior.
- Keep `aria-live="polite"` on `.thought-layer` so word updates can be announced gently.

## Editing Cautions

- Do not remove user visual tweaks without checking the surrounding context.
- Mobile screenshots from the user are important source of truth; tune layout based on them.
- Avoid broad rewrites. This site is intentionally small and hand-built.
