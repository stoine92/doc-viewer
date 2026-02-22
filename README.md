# Document Viewer

A modern, responsive React application for viewing and managing documents and folders. Built with TypeScript, React Query, and Radix UI primitives.

## Stack
React 18 - TypeScript - Vite = TanStack Query - Radix UI - SCSS Modules - Vitest - Testing Library - jest-dom

## Getting Started
npm install
npm run dev     # http://localhost:5173
npm run test    # run test suite
npm run build   # production build

## Features
- View files and folders with type icons and badges
- Filter by filename (case-insensitive, real-time)
- Sort by name or date (asc/desc), folders always pinned to bottom
- Collapsible folders
- Loading skeleton and empty states
- Responsive - sidebar on desktop, dialog on mobile

## Project Structure
src/
|-- components/     #UI components + colocated tests + hooks 
|-- data/           #documents.json mock file
|-- pages/          # Home/tsx
|-- styles/         # Global SCSS + variables + mixins

## What I Left Out

### Error Handling 
`fetchDocuments` has no error state. I'd wrap it in a try/catch and surface the React Query `error` state in the UI with a user-friendly message rather than a silent feature.

### File Click / Preview
Files are display-only. I'd add an `onClick` to `DocumentItem` that opens a `Dialog` (already built) with file metadata and a download link.

### Native Select Positioning on Mobile
When emulating mobile view on macOS desktop browsers, the native `<select>`can misposition inside dialogs. This is suspected to be a desktop browser emulation quirk rather than a real device issue - unable to verify on a physical device at this stage. Long term fix would be replacing with `@radix-ui/react-select`using `position=propper`.

### Filter & Sort State Persistance
Filter and sort selections reset on page refresh. No session storage or context is implemented. Given more time I'd persist state via `sessionStorage` or a React context so the user's view survives reload.

### Filter & Sort Reset
No reset button is implemented on clear active filter and sort selections. Given the current scope this was intentionally deprioritised - the filter input can be manually cleared and sort defaults are restored on page refresh.

## Performance Notes
- Mock data returns after 500ms delay (simulates API latency)
- Loading skeleton provides visual feedback
- Memoization not yet applied (not needed for current data size)

**Last Updated:** February 22, 2026