# Deploying to GitHub

Your Taskrabbit clone is ready to be pushed to GitHub! Follow these steps:

## Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name it (e.g., `taskrabbit-clone`)
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

## Step 2: Add Remote and Push

After creating the repository, GitHub will show you commands. Use these commands in your terminal:

```bash
cd "/Users/macbook/Downloads/untitled folder/taskrabbit-clone"

# Add your GitHub repository as remote (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Example:**
If your GitHub username is `johndoe` and you named the repo `taskrabbit-clone`:
```bash
git remote add origin https://github.com/johndoe/taskrabbit-clone.git
git branch -M main
git push -u origin main
```

## Step 3: Verify

Visit your repository on GitHub to see your code!

## Optional: Deploy to Vercel

Since this is a Next.js app, you can easily deploy it to Vercel for free:

1. Go to [vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

Vercel will automatically:
- Build your Next.js app
- Deploy it to a live URL
- Set up automatic deployments on every push

## Troubleshooting

If you get authentication errors when pushing:
- Use GitHub CLI: `gh auth login`
- Or use a Personal Access Token instead of password
- Or set up SSH keys for GitHub

