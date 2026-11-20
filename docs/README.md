# dcs-website

This is the website made for the Department of Computer Science.

## Table of Contents

<!-- TOC -->
* [dcs-website](#dcs-website)
    * [Table of Contents](#table-of-contents)
    * [Workflow](#workflow)
        * [Production and development branches](#production-and-development-branches)
        * [Starting your own branch](#starting-your-own-branch)
        * [Pushing commits](#pushing-commits)
        * [Submitting a Pull Request (PR)](#submitting-a-pull-request-pr)
        * [Approving and merging a PR](#approving-and-merging-a-pr)
    * [Getting started with Astro](#getting-started-with-astro)
        * [Features](#features)
        * [Project Structure](#project-structure)
        * [Commands](#commands)
        * [Want to learn more?](#want-to-learn-more)
        * [Credit](#credit)
<!-- TOC -->

## Workflow

This section describes the expected workflow for this project. We encourage you to become familiar with this workflow.

### Production and development branches

This repository has several branches dedicated to each stage of development.

| Branch name | Purpose                                                                                                                                                                                                     | Responsible                   |
|-------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------|
| **main**    | This branch holds the source for the live, production website. Changes to this branch must only come from approved PRs coming from **dev**. Pushes to this branch are blocked.                              | Project Manager & Maintainers |
| **dev**     | This branch serves as the staging environment for approved PRs coming from individual developer branches (e.g., feat/XXX, refactor/YYY). **Developers are advised to submit pull requests to this branch.** | Project Manager & Maintainers |

### Starting your own branch

When you're ready to work on a feature, page, cleanup, or refactor, you should start your branch from the **dev**
branch, not the main branch.

Follow this naming format:

| Branch name                             | Purpose                                                                                      |     
|-----------------------------------------|----------------------------------------------------------------------------------------------|
| feat/XXX                                | A general-purpose component or feature that anybody can use once merged into the dev branch. |
| page/YYY                                | A specific page in the project assigned to a single developer.                               |
| *others* (e.g., chore, docs, refactor) | Other developments that are neither features nor pages.                                      |

### Pushing commits

Try to avoid pushing "WIP" commits to the remote (this GitHub repository). Instead, squash or rebase commits as you
work on them so the commit history remains clean on the remote.

> [!TIP]
> Because we are incredibly time-constrained, this will not be strictly enforced. However, it is a good practice to learn.

### Submitting a Pull Request (PR)

When you think your branch is ready to be merged to main, please open a pull request (PR) to the **dev** branch. 

> [!TIP]
> Code owners will automatically be tagged as reviewers. See [CODEOWNERS](CODEOWNERS) for the list of assigned code owners.

> [!IMPORTANT]
> At least one approval is needed to merge to the **dev** branch.

### Approving and merging a PR

For reviewers, when you deem a PR sufficient, you may approve and merge it to the target branch. 

> [!WARNING]
> You should only merge the **dev** branch to the **main** branch if it has been reviewed thoroughly and deemed ready for deployment.

> [!IMPORTANT]
> Do not delete the **dev** branch after a successful merge.

## Getting started with Astro

> [!NOTE]
> This section was cleaned up and copied from Astro's README.md.

### Features

- Minimal styling (make it your own!)
- 100/100 Lighthouse performance
- SEO-friendly with canonical URLs and Open Graph data
- Sitemap support
- RSS Feed support
- Markdown & MDX support

### Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file
name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact
components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to
retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema.
See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

### Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `bun install`             | Installs dependencies                            |
| `bun dev`             | Starts local dev server at `localhost:4321`      |
| `bun build`           | Build your production site to `./dist/`          |
| `bun preview`         | Preview your build locally, before deploying     |
| `bun astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bun astro -- --help` | Get help using the Astro CLI                     |

### Want to learn more?

Check out [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

### Credit

This theme is based off of the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/).
