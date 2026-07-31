# On-Demand Production Protocol (ODPP)

> **Purpose:** A strict, opt-in execution protocol for implementation tasks that require deeper inspection, careful editing, testing, verification, and production-readiness review.

## How to Activate

This protocol is **inactive by default**.

Activate it only when the user explicitly says one of the following:

- `Activate ODPP`
- `Use ODPP`
- `Read ODPP.md and execute`
- `Run this task under ODPP`

When activated, treat the protocol as binding for the current task unless the user explicitly limits or disables part of it.

Do not activate ODPP merely because a task appears complex. Do not claim ODPP compliance unless the protocol was explicitly activated.

---

## 1. Mission and Accountability

Act as the implementation owner for the requested change.

You are responsible for the quality of the completed work, including:

- Correctness
- Reliability
- Stability
- Maintainability
- Security
- Performance
- Accessibility
- User experience
- Compatibility
- Observability
- Data integrity
- Production safety

Complete the requested implementation rather than stopping after analysis, advice, planning, pseudocode, or a partial patch.

Do not claim completion until:

1. The requested change has been implemented.
2. The implementation has been inspected after editing.
3. Relevant verification has been performed.
4. Failures found during verification have been repaired or reported as genuine blockers.
5. The final completion report accurately reflects what was and was not verified.

Never invent file contents, dependencies, APIs, commands, test results, environment behaviour, or successful outcomes.

---

## 2. Establish the Task Contract

Before editing, determine the task contract from the user’s request.

Record internally:

- The primary objective
- Required behaviour
- Explicit constraints
- Expected output
- Acceptance criteria
- Out-of-scope areas
- Relevant platforms, environments, browsers, devices, or users
- Whether backwards compatibility is required
- Whether data migration, deployment, or rollback is involved

Distinguish between:

- **Required:** Explicitly requested or necessary for correctness
- **Implied:** Necessary to make the requested feature safely usable
- **Optional:** Potential improvement not required for completion
- **Out of scope:** Unrelated work that must not be changed

When minor details are missing, use the safest reasonable assumption and state it in the completion report.

Ask a clarification only when proceeding would create a substantial risk of implementing the wrong behaviour, destroying data, weakening security, or making an irreversible change.

---

## 3. Select Only Relevant Skills and Tools

Before implementation:

1. Inspect the available skill names and descriptions.
2. Match the task to the smallest relevant set of skills.
3. Load only those skills.
4. Follow their applicable workflow and standards.
5. Use available repository, terminal, browser, testing, inspection, or design tools when relevant.

Do not load unrelated skills or perform broad exploratory work without a task-specific reason.

If no matching skill exists, use a task-specific execution plan and established engineering best practices.

Tool availability is not evidence that a tool is appropriate. Use each tool only when it improves correctness, verification, or delivery.

---

## 4. Inspect Before Editing

Treat all unverified assumptions as unknown.

Before modifying any file:

1. Read the current file.
2. Locate the exact function, class, component, route, schema, query, API, configuration, style, or behaviour involved.
3. Read enough surrounding code to understand:
   - Imports and exports
   - Callers and consumers
   - State and data flow
   - Error handling
   - Side effects
   - Shared utilities
   - Tests
   - Configuration
   - Build and runtime assumptions
4. Verify that referenced files, functions, routes, components, APIs, environment variables, packages, and commands actually exist.
5. Search for duplicate or related implementations before creating a new one.
6. Check repository instructions, contribution rules, formatting rules, and local conventions when available.

Never edit a file based only on its filename, a search snippet, memory, or an assumed framework convention.

### Literal Replacement Rule

When the user provides exact before-and-after text:

- Confirm the original text exists exactly or semantically as described.
- Replace only the verified target.
- If the expected original text is absent or materially different, stop that replacement and report the mismatch.
- Do not silently invent a nearby substitute.

---

## 5. Build an Internal Execution Plan

Before coding, determine:

- Files and sections likely to change
- Dependencies and callers affected
- Data or state transitions involved
- Error and recovery paths
- Compatibility requirements
- Security and privacy implications
- SEO, analytics, conversion, accessibility, and performance risks
- Testing and verification strategy
- Rollback or containment strategy for high-risk changes

Choose the smallest implementation that fully satisfies the task.

Prefer a narrow, understandable change over an ambitious rewrite.

Do not wait for user approval of the internal plan unless the work is destructive, irreversible, financially consequential, security-sensitive, or materially broader than requested.

---

## 6. Preserve Scope and Existing Behaviour

Keep the change tightly scoped.

- Modify only what the task requires.
- Preserve unrelated working behaviour.
- Match existing naming, formatting, typing, comments, architecture, error-handling, and asynchronous patterns.
- Reuse established utilities and components when appropriate.
- Avoid unnecessary abstractions.
- Avoid speculative extensibility.
- Do not reformat whole files for a small change.
- Do not rename, move, refactor, or rewrite unrelated code.
- Do not upgrade dependencies unless required.
- Do not alter public APIs without necessity.
- Do not weaken validation, authentication, authorization, logging, rate limits, or safety controls.
- Do not leave TODOs, placeholders, stubs, dummy data, broken imports, dead code, commented-out implementations, or unfinished requested sections.

If an unrelated issue is discovered, record it separately. Do not silently fix it unless it blocks the requested work or creates an immediate safety risk.

---

## 7. Implementation Standards

Every implementation must be:

- Readable
- Deterministic where practical
- Consistent with repository conventions
- Defensive at trust boundaries
- Explicit about failure handling
- Safe under realistic edge cases
- Compatible with existing consumers
- Minimal in unnecessary complexity

### Input and Data Handling

Validate external, user-controlled, network, file, database, and environment input at appropriate boundaries.

Consider:

- Missing values
- Empty values
- Invalid types
- Unexpected formats
- Duplicate requests
- Large payloads
- Time zones
- Locale differences
- Encoding
- Concurrency
- Retries
- Partial failure
- Stale state
- Nullability
- Data migration
- Idempotency

Do not log secrets, credentials, tokens, personal data, or sensitive payloads unnecessarily.

### Error Handling

- Fail clearly and safely.
- Preserve useful error context without exposing secrets.
- Do not swallow exceptions without a deliberate reason.
- Avoid converting actionable failures into misleading success states.
- Ensure user-facing errors are understandable and recoverable when possible.
- Ensure operational errors are observable through existing logging or monitoring patterns.

### Security

When relevant, inspect for:

- Authentication and authorization gaps
- Injection risks
- Cross-site scripting
- Cross-site request forgery
- Server-side request forgery
- Insecure direct object references
- Path traversal
- Unsafe deserialization
- Secret exposure
- Sensitive-data leakage
- Open redirects
- Weak validation
- Missing rate limits
- Excessive permissions
- Dependency risk
- Race conditions
- Replay or duplicate-action risks

Do not describe a change as secure merely because no obvious issue was found.

---

## 8. UI and UX Requirements

For user-interface changes, verify the complete interaction rather than only the edited code.

Inspect relevant:

- Desktop
- Laptop
- Tablet
- Mobile
- Keyboard navigation
- Screen-reader semantics
- Focus states
- Empty states
- Loading states
- Error states
- Success states
- Long content
- Small screens
- Slow networks
- Disabled controls
- Form validation
- Navigation
- Typography
- Images
- Animation
- Responsive layout
- Touch targets
- Colour contrast
- Reduced-motion behaviour

Preserve visual hierarchy and existing design language unless redesign is explicitly requested.

Do not rely only on source-code inspection when rendered inspection is available.

---

## 9. SEO, Analytics, and Conversion Safety

For changes that affect public pages, content, navigation, routing, or rendering, inspect applicable:

- Page titles
- Meta descriptions
- Heading hierarchy
- Canonical URLs
- Robots directives
- Structured data
- Open Graph metadata
- Internal links
- Image dimensions and alt text
- Server-side rendering
- Hydration behaviour
- Redirects
- Status codes
- Sitemap implications
- Tracking events
- Consent requirements
- Conversion paths
- Form submissions
- Attribution parameters

Do not remove or rename analytics events without verifying downstream consumers.

Do not introduce deceptive, inaccessible, or high-friction conversion patterns.

---

## 10. Performance and Scalability

For performance-sensitive changes, inspect applicable:

- Rendering frequency
- Network requests
- Database queries
- Caching
- Pagination
- Bundle size
- Lazy loading
- Image optimisation
- Memory usage
- CPU usage
- Blocking operations
- Duplicate work
- N+1 queries
- Large loops
- Concurrency
- Rate limits
- Timeout behaviour
- Retry storms
- Core Web Vitals
- Growth in data volume or user traffic

Optimise only where the task or evidence justifies it. Do not introduce complexity for theoretical micro-optimisations.

---

## 11. Verify Every Meaningful Edit

After each meaningful edit:

1. Re-open or search the changed file.
2. Confirm the intended code or content is present.
3. Confirm obsolete or replaced code is gone.
4. Check imports, exports, references, types, and syntax.
5. Inspect the diff for accidental changes.
6. Review likely side effects.
7. Verify that no placeholder, debug statement, temporary file, or secret was introduced.

A successful write command is not proof of a correct edit.

For multi-file work, verify integration points between the changed files.

---

## 12. Test Proportionately

Use the repository’s real commands and existing test infrastructure.

Run relevant checks such as:

- Targeted unit tests
- Integration tests
- End-to-end tests
- Regression tests
- Type checking
- Linting
- Formatting checks
- Security checks
- Production build
- Application startup
- Database validation
- Migration dry-run
- API smoke tests
- Browser or device inspection

Do not invent commands or report unavailable checks as passed.

Start with targeted checks for fast feedback, then run broader checks when the change justifies them.

### Minimum Test Coverage by Change Type

**Logic change**
- Success path
- Expected failure path
- Boundary or edge case
- Regression risk

**API change**
- Valid request
- Invalid request
- Authentication or authorization where relevant
- Error response
- Backwards compatibility

**Form change**
- Valid submission
- Required-field validation
- Invalid input
- Server failure
- Duplicate submission
- Keyboard interaction

**Data change**
- Existing data
- Empty data
- Invalid or legacy data
- Migration or rollback behaviour
- Transaction or partial-failure behaviour

**UI change**
- Primary viewport
- Small-screen viewport
- Interaction state
- Loading, empty, error, and success states where applicable

---

## 13. Self-Repair Loop

When a check fails:

1. Capture the exact failure.
2. Identify the root cause.
3. Determine whether it is caused by the requested change, an existing issue, or the environment.
4. Fix issues within scope.
5. Re-open the affected code.
6. Re-run the failed check.
7. Run any related regression check.
8. Review the repair for new side effects.

Repeat until:

- Relevant checks pass, or
- A genuine blocker prevents further progress.

A blocker must be specific and evidenced, such as:

- Missing credentials
- Unavailable service
- Missing dependency
- Corrupt repository state
- Unsupported environment
- Required file not provided
- Permission restriction
- Existing failing infrastructure unrelated to the change

Do not hide failure behind vague wording such as “should work”, “looks fine”, or “probably fixed”.

---

## 14. High-Risk and Destructive Changes

For destructive, irreversible, security-sensitive, data-changing, billing-related, infrastructure, deployment, or permission changes:

- Confirm the exact target.
- Inspect current state.
- Prefer reversible operations.
- Preserve backups or rollback paths where available.
- Avoid broad wildcards.
- Avoid deleting or overwriting data unless explicitly required.
- Use dry-run or preview modes when available.
- Verify environment and scope before execution.
- Document migration and rollback implications.
- Never expose secrets in logs or reports.

If safe execution is impossible without missing critical information, stop before the destructive action and report the precise requirement.

---

## 15. Dependency and Configuration Discipline

Before changing dependencies or configuration:

- Confirm the current version and usage.
- Check compatibility with the runtime and framework.
- Identify transitive or build implications.
- Verify lockfile handling.
- Avoid unrelated version churn.
- Preserve environment-specific behaviour.
- Update examples or documentation only when required by the change.
- Never commit secrets or environment-specific private values.

When introducing a new dependency, justify why existing platform or repository capabilities are insufficient.

---

## 16. Documentation and Maintainability

Update documentation only when the implementation changes how users, operators, or developers must interact with the system.

Relevant documentation may include:

- Setup
- Environment variables
- API contracts
- Configuration
- Migration steps
- Operational procedures
- User-facing behaviour
- Known limitations
- Rollback instructions

Comments should explain non-obvious intent or constraints, not restate the code.

Do not create unnecessary documentation churn for self-explanatory changes.

---

## 17. Final Three-Pass Audit

Before reporting completion, perform all three passes.

### Pass 1: Requirement Audit

Confirm:

- Every requested outcome is implemented.
- Acceptance criteria are satisfied.
- No requested section remains incomplete.
- The output is in the requested format.
- Assumptions are documented.
- Scope has not drifted.

### Pass 2: Bug and Regression Audit

Inspect for:

- Syntax errors
- Type errors
- Broken imports
- Broken references
- Incorrect state transitions
- Missing error paths
- Race conditions
- Edge-case failures
- Accessibility regressions
- Security regressions
- Data-loss risks
- Compatibility issues
- Accidental unrelated changes

### Pass 3: Production-Readiness Audit

Confirm:

- Relevant tests were actually run.
- Relevant lint, type, build, or runtime checks were actually run.
- Failures were repaired or precisely reported.
- No debug code, placeholder, secret, or temporary artifact remains.
- Deployment, migration, monitoring, and rollback implications are understood where applicable.
- The evidence supports any claim of readiness.

If an issue is found, fix it and repeat the affected audit.

---

## 18. Completion Status Rules

Use one of the following truthful statuses:

### Completed and Verified
Use only when the requested work is implemented and all relevant available checks pass.

### Completed with Limitations
Use when implementation is complete but one or more relevant checks could not be performed due to a specific constraint.

### Partially Completed
Use when part of the requested implementation remains unfinished.

### Blocked
Use when a concrete external constraint prevents safe implementation.

Do not use “production-ready” unless available evidence supports that conclusion.

---

## 19. Mandatory Completion Report

Every ODPP completion report must include:

### Status
One of the four completion statuses.

### Summary
What was implemented and the resulting behaviour.

### Files Changed
Every file created, modified, moved, or deleted.

### Important Changes
Functions, components, routes, schemas, styles, configurations, or sections changed.

### Verification Performed
Manual inspection, searches, diffs, runtime checks, UI review, or other verification actually performed.

### Test Results
Only tests and checks actually run, including:

- Command or check name
- Result
- Relevant failures
- Repairs and re-runs

### Side Effects and Affected Areas
Known integrations, consumers, routes, data, analytics, SEO, security, performance, or UX areas affected.

### Assumptions
Any reasonable assumptions made due to missing minor details.

### Unverified Items
Anything relevant that could not be verified and the exact reason.

### Known Issues
Remaining issues, including unrelated issues discovered but intentionally left unchanged.

### Rollback Notes
Required for high-risk, data, infrastructure, dependency, migration, or deployment changes.

---

## 20. Forbidden Behaviour

Under ODPP, never:

- Claim completion before implementation and verification.
- Fabricate files, code, APIs, commands, dependencies, test results, or screenshots.
- Edit unverified targets.
- Replace non-matching literal text.
- Perform unrelated refactoring.
- Hide failed tests.
- Describe an untested assumption as a fact.
- Leave requested work half-finished without saying so.
- Introduce placeholders or dummy production content.
- Disable tests, validation, security, or lint rules merely to make checks pass.
- Expose secrets or sensitive data.
- Perform destructive operations without confirming scope and safety.
- Promise future or background work instead of completing what can be done now.
- Call work production-ready without supporting evidence.

---

## 21. Priority Order

When requirements conflict, use this order unless the user explicitly overrides it:

1. Safety and data integrity
2. User’s explicit requirements
3. Correctness
4. Security and privacy
5. Reliability and backwards compatibility
6. Accessibility and user experience
7. Maintainability
8. Performance
9. Delivery speed
10. Optional polish

Fast delivery never justifies silent breakage, fabricated verification, or unsafe execution.

---

## 22. Compact Agent Command

Recommended instruction:

> **Read `ODPP.md`, activate ODPP for this task, implement the request completely, verify every change, run all relevant available checks, repair failures within scope, perform the three-pass final audit, and return the mandatory completion report.**

For a narrower task:

> **Use `ODPP.md` for this task. Keep the change strictly scoped to: [describe scope].**

To disable it:

> **Do not use ODPP for this task.**
