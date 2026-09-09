# Interview AI Case Study: Why I Built It, How I Built It, and Everything That Tried to Stop Me

> **Disclaimer:** This one's less "tutorial" and more "diary entry with code in it." It's my honest, slightly embarrassing account of building Interview AI — the good decisions, the bad debugging habits, and the 30-something commits it took to finally ship. If you've ever stared at a console log at 1 AM questioning your life choices, this post is for you. 😅

Most of my blog posts explain *what* something is.

This one explains *what went wrong while I built it* — and there was a lot.

```text
Idea 💡
  ↓
Confidence 😎
  ↓
First bug 🐛
  ↓
Confidence.exe has stopped working
  ↓
More bugs 🐛🐛
  ↓
Deployment 🚀
  ↓
More bugs, but fancier ones 🐛✨
  ↓
It works (finally) 🎉
```

This is the honest version of building Interview AI.



* [Why I Built This](#why-i-built-this)
* [How I Built This](#how-i-built-this)
* [Bug #1: The API That Aged Like Milk 🥛](#bug-1-the-api-that-aged-like-milk-)
* [Bug #2: The AI That Wouldn't Stay in Line 🌀](#bug-2-the-ai-that-wouldnt-stay-in-line-)
* [Deployment: "It'll Take an Hour," I Said 🚀](#deployment-itll-take-an-hour-i-said-)
* [What I Actually Learned](#what-i-actually-learned)
* [Final Thoughts](#final-thoughts)
* [Quick Cheat Sheet](#quick-cheat-sheet)


# Why I Built This

Every time I got close to a real interview, I'd end up doing the same messy routine:

```text
Open the job description in one tab
Open my resume in another
Try to mentally "diff" the two
Google "common interview questions for X role"
Panic slightly
Make a to-do list I never finish
```

None of it was connected. None of it was personalized. And none of it told me the one thing I actually wanted to know:

> "Based on *this* job and *my* actual background, what should I be preparing for, and how far off am I?"

So instead of doing that manually one more time, I decided to build the tool that does it for me — Interview AI. Feed it a job description, a resume, and a bit about yourself, and it hands back a match score, technical and behavioral questions, skill gaps, and a 7-day plan.

Basically: I was too lazy to keep doing interview prep the hard way, so I automated my own laziness. 🙃

---

# How I Built This

The build itself followed a fairly normal MERN pattern — nothing dramatic here, the drama comes later. 😄

```text
React (Vite) frontend
     ↓
Express backend
     ↓
Mongoose models for users + reports
     ↓
Google Gemini for the actual AI generation
     ↓
Puppeteer for turning the report into a downloadable resume PDF
```

I built it feature by feature: auth first (because nothing else matters if users can't log in), then the interview-generation flow, then the report views, then the PDF export last. Each piece felt simple in isolation.

Then I connected them to each other, and that's where things got *interesting*. 🎢

---

# Bug #1: The API That Aged Like Milk 🥛

The first real bug hit early: I'd call the AI, and… nothing. No data. No error I could actually make sense of either — just silence where a response should've been.

Naturally, my first instinct was to blame myself. So I went digging:

```text
Checked the function calling the API
Inspected it piece by piece
Re-read my own code five times
Assumed I broke something
```

Nothing looked wrong on my end. So I went to the docs — and that's when I noticed the docs had been **updated**. Turns out the example I originally followed was based on an API setup that was, in AI-years, ancient: about a year old.

```text
My code   →  written against the old API + old package version
The docs  →  already updated for the new one
The result → old code meets new package = silent failure
```

The actual problem wasn't my logic at all — it was that the old API call simply didn't work with the newer package version anymore. The AI SDK had moved on without telling me. 🙃

Once I updated my code to match the current docs and package version, the data started flowing again. Mystery solved — I just needed to stop debugging *my* code and start reading *their* changelog.

---

# Bug #2: The AI That Wouldn't Stay in Line 🌀

This one was the boss fight. 🐉

Once the AI was actually responding, a new problem showed up: the data *came back*, but not in the shape I asked for. Fields in the wrong order, extra info I never requested, and — worst of all — because my MongoDB schema expected a specific structure, the mismatched data caused certain fields to just... land in the database as **empty arrays**. Not an error. Just silently wrong. The sneakiest kind of bug.

My first fix attempt was reasonable:

```text
Add Zod validation
Tighten the prompt
Be more explicit about the expected structure
```

And it helped — partially. But the core issue kept sneaking back in: data still occasionally arrived unstructured or out of order, like the AI had its own opinions about formatting.

So then I did what every developer does when they're mildly panicking: I started changing things that probably weren't the problem. 😅

```text
Rewrote ai.service.js — multiple times
Swapped models
Swapped models again
Burned through my free-tier API keys like they were confetti
Stared at JSON in the console like it owed me money
```

After a genuinely exhausting amount of trial and error, I finally stopped guessing and actually traced the data path from the very beginning instead of jumping straight to "must be the AI's fault."

And there it was — the real culprit wasn't the AI or the schema at all. It was the function responsible for **taking the collected data and sending it over to `ai.service.js`**. It was assembling the fields in the wrong order before the request even left my own backend. The AI wasn't being unpredictable — it was faithfully responding to a slightly scrambled input.

Fixed the order. Problem solved. 🎉

```text
Lesson:
  Don't debug on guesses.
  Don't assume the fancy external thing (the AI) is always the villain.
  Start from the beginning. Trace every step. THEN fix.
```

That one habit change — checking from the start instead of guessing from the middle — is probably the single most useful thing this bug taught me.

---

# Deployment: "It'll Take an Hour," I Said 🚀

This was my first ever deployment, and I went in with the confidence of someone who had clearly never deployed anything before.

> "It's just Vercel. I'll be done in like an hour."

Reader, I was not done in an hour. 😂

The moment the app left my machine, it became a completely different application:

```text
Local code:   works perfectly, packages behave, cookies show up, life is good
Deployed code: some packages that worked fine locally suddenly don't,
               environment differences show up out of nowhere,
               and things that "just worked" now very much don't
```

Puppeteer was a particular troublemaker — happily using a full local Chrome install on my machine, then having absolutely nothing to work with in a serverless environment. Cookies also decided to be dramatic, quietly not showing up at all until I sorted out the cross-origin and secure-cookie configuration properly.

So the "one hour" turned into:

```text
Debugging ai.service.js again (yes, again)
Fixing the broken authentication cookie
Untangling local-vs-serverless Puppeteer behavior
Committing
Fixing the next thing
Committing again
Repeat... for 2 days
```

By the end, I'd racked up **30+ commits** trying to get one app live. Which is, in hindsight, hilariously ironic for something I estimated at "an hour." 😅 But it finally deployed, cookies intact, PDFs generating, no empty arrays in sight.

---

# What I Actually Learned

If I had to compress this whole experience into a few honest takeaways:

```text
1. Old code + new packages = silent failure. Check the docs, not just your logic.
2. When AI output looks wrong, check YOUR data before blaming the AI.
3. Debug from the start of the flow, not from a guess in the middle.
4. Local "working" means nothing until it survives deployment.
5. Time estimates for your first deployment are basically fiction.
```

None of these are groundbreaking on their own. But living through them — instead of just reading them somewhere — is what actually made them stick.

---

# Final Thoughts

Building Interview AI wasn't really about learning React or Express or Gemini in isolation — I mostly knew those already. It was about learning what happens when all of them have to work together, in production, without me standing right next to the code holding its hand.

```text
Idea
  ↓
Build it feature by feature
  ↓
Break it in ways you didn't expect
  ↓
Fix it slower than you'd like
  ↓
Deploy it, break it again
  ↓
Fix it again
  ↓
Ship it
```

Every bug in this post felt awful in the moment and completely obvious in hindsight — which, honestly, might just be what building software *is*. 🙂

---

# Quick Cheat Sheet

| Moment | What Actually Happened |
| --- | --- |
| Bug #1 | Old API code + updated package/docs = silent, dataless failure |
| Bug #2 | AI data looked unstructured — real cause was a function sending fields in the wrong order before the AI even saw them |
| Fix for #2 | Zod + better prompts helped, but tracing the actual data flow was what solved it |
| Deployment estimate | "1 hour" |
| Deployment reality | 2 days, 30+ commits |
| Deployment gremlins | Puppeteer needing Chromium in serverless, broken auth cookies |
| Real lesson | Debug from the start, not from a guess. Every time. |

If you're building something similar and it's currently on fire — good news, that's apparently just part of the process. 🔥😅