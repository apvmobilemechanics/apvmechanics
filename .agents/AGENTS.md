# AGENT INSTRUCTIONS — READ THIS BEFORE EVERY TASK

You are working on a real production Chrome Extension ("WhatsApp Lead Generator") that a
real business depends on every day to message real clients. Mistakes here cost real money
and real client relationships. Follow these rules exactly, every single time, with no
exceptions — regardless of how simple or small the task looks.

These rules exist because fast/cheap models often *say* a task is done without actually
doing it. That is unacceptable here. Every claim of "done" must be backed by proof from
your own tool output, not from your memory of having written something.

---

## RULE 1 — READ BEFORE YOU WRITE

Before editing ANY file, open and read the actual current contents of that exact file —
not a cached memory of it, not an assumption of what it "probably" looks like. Files
change between sessions. If you have not read the file in THIS conversation turn, you do
not know what it contains. Read it first.

If the task references a specific function, line, or behavior — locate it with a search
(grep / find-in-file) and read the surrounding context (at least 20 lines above and below)
before deciding how to edit it.

## RULE 2 — NEVER GUESS, NEVER PARAPHRASE A FIX

When asked to change specific code, do not write code that is "similar in spirit" to what
was asked. Make the EXACT change requested, in the EXACT location specified. If the
instructions give you literal before/after text, match it character-for-character before
editing — if what you find in the file doesn't match what the instructions describe,
STOP and report the mismatch instead of improvising.

## RULE 3 — ONE CHANGE AT A TIME, SCOPED TIGHTLY

Only touch the file(s) and function(s) explicitly named in the task. Do not "helpfully"
refactor, rename, reformat, or "improve" anything else nearby, even if it looks
inefficient or outdated. Unrelated changes are bugs waiting to happen in a file this
large and this load-bearing. If you notice something else that looks broken, REPORT it
at the end of your response — do not silently fix it.

## RULE 4 — VERIFY EVERY EDIT WITH A SEPARATE TOOL CALL

After making an edit, you must:
1. Re-read or re-search the file to confirm the new text is actually present.
2. Confirm the OLD (buggy) text is actually gone, if it was meant to be replaced.
3. Only after both checks pass, report the change as complete.

If you cannot perform a verification step (e.g. no file-read tool available), say so
explicitly — do not assume success silently. A change you cannot verify is a change you
must treat as unconfirmed.

## RULE 5 — NEVER REPORT SUCCESS WITHOUT EVIDENCE

Do not write summaries like "All components fully integrated, verified, ready for
staging" unless you can show, in your own output, the literal diff of what changed and
the literal grep/search result proving it landed in the file. A summary with no diff and
no verification output is worthless and will be treated as a failure to do the task.

Every response that claims a code change must include:
- The exact file name and function/line touched
- The literal before → after text (a real diff, not a description)
- The verification step output (proof the new code exists in the file now)

## RULE 6 — THINK ABOUT SIDE EFFECTS BEFORE COMMITTING

Before finalizing any change, briefly ask yourself:
- Does this change affect any other function that calls this one?
- Does this change affect timing/async flow elsewhere (delays, retries, locks)?
- Could this break the success path while fixing the failure path (or vice versa)?
If yes to any of these, mention it explicitly in your response, even if you still think
the change is correct.

## RULE 7 — IF BLOCKED, SAY SO — DO NOT FAKE IT

If you cannot complete a task — file not found, permissions issue, edit didn't take, tool
unavailable, ambiguous instructions — say exactly what went wrong and what you need from
the user to proceed. Never produce a vague success message to avoid admitting a blocker.

## RULE 8 — MATCH EXISTING CODE STYLE EXACTLY

This codebase uses specific patterns (e.g. `sendMessage()`, `addAutoLog()`,
`persistAutomaticSendState()`, comment tags like `// QUEUE FIX`, `// SELF-HEAL`). When
adding new code, follow the same naming, comment-tagging, and async/await style already
present in the surrounding code. Do not introduce a different pattern (e.g. callbacks
where the file uses async/await, or vice versa).

## RULE 9 — SMALL, READABLE DIFFS ONLY

Prefer the smallest possible change that correctly fixes the described problem. Avoid
rewriting whole functions when a one- or two-line change will do. Large diffs are harder
to verify and more likely to introduce new bugs.

## RULE 10 — END EVERY TASK WITH A SELF-CHECK SUMMARY

At the end of every code task, include a short checklist like this, honestly filled in:

```
✅ File(s) touched: <list>
✅ Exact lines changed: <list with line numbers if possible>
✅ Verified new code is present: <yes/no + how you checked>
✅ Verified old buggy code is gone: <yes/no>
✅ Other functions/files that could be affected: <list or "none found">
✅ Anything you were unable to verify: <list or "none">
```
