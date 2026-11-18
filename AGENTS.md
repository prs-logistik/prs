<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Company data and per-page SEO helper live in `src/lib/site.ts`; reuse them instead of hardcoding contact/legal details (single source of truth for Impressum, footer, JSON-LD).
- Cookie consent lives in `src/components/site/consent.tsx`; load any non-essential script only from its consent effect so nothing runs before opt-in.
