# Resource and cleanup ledger

Task: mention OpenServ in the WEB6 homepage intro. Owner: current Codex session. Date: 2026-10-23.

| Resource | Version / size | Use and provenance | Dependencies | Lifecycle / retention | Cleanup / recreation |
| --- | --- | --- | --- | --- | --- |
| C:/Source/Web6Site | Existing Git checkout; size unmeasured | Reused for source inspection and homepage copy edit; historical ownership unknown | No service or port started | Active/reusable; preserve source and Git history | No cleanup required; retain checkout |
| C:/Windows/System32/WindowsPowerShell/v1.0/powershell.exe | Existing runtime; size unmeasured | Reused for inspection, edit and diff verification | No persistent process or port | Shared reusable runtime | Preserve installation |
| C:/Source/Web6Site/Docs/WIP/openserv-intro/resource-cleanup-ledger.md | Size unmeasured | Created task evidence and mandatory resource ledger | None | Retained task evidence | May be removed when task evidence is no longer required; recreate from Git history if committed |

Completion reconciliation: no downloads, dependency restores, installations, builds, test datasets or temporary services were introduced. Existing node_modules was listed only; dependencies were not executed or modified. No disposable artifacts require cleanup. Verified the homepage diff and OpenServ's presence in the hero description.

## Mobile follow-up — 2026-10-23

Owner: current Codex session. Scope: repair stats markup, readable mobile system stack, OpenServ first, commit and push at user's request.

| Resource | Version / size | Use / provenance | Dependencies | Lifecycle / retention | Cleanup / recreation |
| --- | --- | --- | --- | --- | --- |
| C:/Program Files/nodejs/node.exe | v24.19.0; size unmeasured | Reused installed runtime for source edit and browser verification | No persistent port | Shared reusable | Preserve installation |
| C:/Source/Web6Site/node_modules | Puppeteer 25.3.0 declared; size unmeasured | Reused existing dependencies; no restore | Browser verification process only | Shared reusable | Preserve dependencies; recreate from package-lock.json if needed |
| C:/Users/david/.cache/puppeteer/chrome/win64-150.0.7871.24/chrome-win64/chrome.exe | Chrome 150.0.7871.24; size unmeasured | Reused cached browser for mobile and desktop checks | Temporary headless browser; no server | Shared reusable | Preserve cached browser |
| C:/Source/Web6Site/Docs/WIP/openserv-intro/mobile-stack.png | Size measured after generation | Planned retained screenshot evidence | None after browser closes | Retained task evidence | Regenerate via Puppeteer element screenshot at 390px viewport |
| C:/Users/david/Downloads/Telegram Desktop/photo_2026-10-23_20-51-{26,31,34}.jpg | Size unmeasured | User-provided visual references; displayed in conversation | None | User-owned; preserve | No cleanup authorized |

Source editing used an in-memory Node script piped through PowerShell; no temporary script persisted. No installations or downloads performed.

Verification outcome: Puppeteer's default Chrome path was only a computed path; no cached executable existed and no download was attempted. Reused C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe instead (installed version unmeasured; shared reusable). Temporary browser processes were closed in finally blocks. The first screenshot API attempt failed without generating an artifact; corrected to ElementHandle.screenshot. Browser checks passed at 320, 390, 720 and 1280 CSS pixels: no horizontal document overflow, eight separate stats, OpenServ first, all eight mobile stack layers, desktop canvas retained, no page JavaScript errors. Visually reviewed mobile-stack.png; fixed navigation overlays the screenshot's upper edge as expected when scrolled. No dependency restores or temporary services. Screenshot size recorded below. Evidence and reusable runtimes retained; no disposable files remain.
Screenshot size: 36611 bytes.
