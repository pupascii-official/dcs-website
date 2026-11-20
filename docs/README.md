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

