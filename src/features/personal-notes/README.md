# Structural Preview of `personal-notes` features

The url of `/personal-notes` is landing page for personal notes feature. It
cover introduction, list of subjects that I most capable in. The UI of 
`/personal-notes` is `/personal-notes-page.tsx`.

To list all subject, url `/personal-notes/list` cover all subject. This is not 
dynamic page, it takes root of personal-notes then list all directory (subject)
inside it.

The individual subject live under dynamic url `/personal-notes/[...slug]` and 
the UI live inside `features/personal-notes/[notes-subject]`


TODO

1. can the url `/personal-notes/[...notes-subject]`?






