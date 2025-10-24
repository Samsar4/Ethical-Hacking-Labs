GitHub Pages Deployment

This repository is configured for GitHub Pages. Use one of the following options to publish the site:

1. Automatic deploy via GitHub Actions (recommended)

- A workflow is included at `.github/workflows/deploy.yml` which will run on every push to `master` and publish the repository root to the `gh-pages` branch using the `GITHUB_TOKEN`.
- Make sure GitHub Actions are enabled for the repository. No extra secrets are required for the basic deploy; the action uses the repository `GITHUB_TOKEN`.

2. Manual GitHub Pages (alternate)

- Go to your repository on GitHub → Settings → Pages.
- Under "Source", select the branch to publish from (choose `gh-pages` if you want to follow the workflow, or `master`/`main` and select `/ (root)` to directly publish the repository root).
- Save the setting. The site will appear at `https://<username>.github.io/<repo>/`.

Notes & tips

- A `.nojekyll` file is present to prevent Jekyll processing so that files and directories starting with underscores will be served correctly.
- The application uses relative paths for all static assets so it should work when served from the repository root or from `gh-pages` branch root.
- If you want a custom domain, add a `CNAME` file to the repository root and tell me the domain — I can update the workflow to include it.

If you'd like, I can also:

- Copy the full `lessons/` tree under `site/` (if your hosting expects content under `/site/`).
- Adjust the workflow to publish only a subfolder.
- Create a `CNAME` file and configure a custom domain.
