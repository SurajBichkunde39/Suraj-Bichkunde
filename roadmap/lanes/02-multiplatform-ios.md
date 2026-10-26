# 02 · Multiplatform & iOS

**Status:** Season 1 secondary

## Why this matters for you

"Mobile engineer" is a bigger, more durable title than "Android engineer".
Teams increasingly want people who can work on both platforms, review across
them, or share code with KMP. You already have a head start: Mockcat is KMP
and intercepts URLSession on iOS. The aim isn't to become a senior iOS
engineer overnight — it's to remove iOS as a blind spot, and to be the person
who can argue KMP vs. Flutter vs. React Native from experience, not opinion.

## Good enough looks like

You can read and review Swift/SwiftUI PRs, build a small app independently,
ship to TestFlight, and share business logic between platforms with KMP
without the iOS side feeling bolted on.

## Milestones

- [ ] **MP1 — Swift for Kotlin developers.** Language tour mapped to what you
  know: optionals vs. nullability, structs vs. data classes, protocols vs.
  interfaces, enums with associated values vs. sealed classes.
  *Artifact:* a cheat-sheet article "Swift for Kotlin developers".
- [ ] **MP2 — First SwiftUI app.** Port Morse Lab (or a slice of it) to SwiftUI:
  state, navigation, lists, persistence. *Artifact:* repo + screenshots.
- [ ] **MP3 — Concurrency side by side.** Swift async/await, actors, and
  `Task` vs. coroutines, `Flow` and scopes. *Artifact:* article comparing
  the two with the same example in both.
- [ ] **MP4 — Ship to TestFlight.** Signing, provisioning, Xcode Cloud or
  Fastlane, App Store Connect. *Artifact:* a TestFlight build (needs Apple
  Developer account).
- [ ] **MP5 — KMP done properly from the Swift side.** Shared module consumed
  by SwiftUI with idiomatic Swift APIs (SKIE or Swift export, Flows as
  `AsyncSequence`). Make Mockcat's iOS API feel native. *Artifact:* Mockcat PR.
- [ ] **MP6 — SDUI Lab renderer.** A KMP module that parses SDUI layout JSON,
  rendered natively in Compose (Android) and SwiftUI (iOS). *Artifact:* spine
  project's first commit.
- [ ] **MP7 — Compose Multiplatform on iOS.** Share one full screen's UI with
  Compose Multiplatform; compare with the native SwiftUI version (feel,
  performance, accessibility). *Artifact:* article with the trade-offs.
- [ ] **MP8 — Know the alternatives.** Build the same tiny screen in Flutter
  and React Native, one day each. *Artifact:* a comparison table you'd show
  in a design review.
- [ ] **MP9 — Publish to the App Store.** One of your apps, live on both
  stores. *Artifact:* App Store link.

## Resources

- Apple — *Develop in Swift* tutorials and the SwiftUI tutorials.
- Hacking with Swift — *100 Days of SwiftUI* (skip what you already know).
- Kotlin docs — Kotlin Multiplatform and Compose Multiplatform guides.
- Touchlab blog (SKIE, KMP iOS interop).

## Connects to

01 (learn Swift with an agent as pair programmer — log what that's like), 03
(the SDUI server feeds MP6's renderer), 04 (App Store analytics, experiments
on iOS).
