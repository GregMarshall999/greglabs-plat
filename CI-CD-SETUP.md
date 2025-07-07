# CI/CD Setup Guide

This guide will help you set up a complete CI/CD pipeline for your Vue.js project using GitHub Actions.

## 🚀 Quick Start

### 1. Choose Your Workflow

We've created two workflow options:

- **Basic CI/CD** (`.github/workflows/ci-cd.yml`): Simple lint, test, build, and deploy
- **Advanced CI/CD** (`.github/workflows/advanced-ci-cd.yml`): Includes security checks, coverage reports, and staging deployments

### 2. Set Up GitHub Secrets

You'll need to add these secrets to your GitHub repository:

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Add the following secrets:

#### Required Secrets for Render Deployment:

- `RENDER_TOKEN`: Your Render API token
  - Get this from [Render Dashboard](https://dashboard.render.com/account/api-keys)
  - Click "New API Key" and copy the token

- `RENDER_SERVICE_ID`: Your Render service ID
  - Find this in your Render service URL: `https://dashboard.render.com/web/[SERVICE_ID]`
  - Or in the API response when you list your services

#### Optional Secrets for Advanced Features:

- `CODECOV_TOKEN`: For code coverage reports (optional)
  - Sign up at [Codecov](https://codecov.io) and get your token

### 3. Configure Your Branch Names

The workflows are configured to run on `main` and `master` branches. If your default branch has a different name, update the workflow files:

```yaml
on:
  push:
    branches: [ your-branch-name ]
  pull_request:
    branches: [ your-branch-name ]
```

## 🔧 Workflow Features

### Basic CI/CD Pipeline:
- ✅ Lint code with ESLint
- ✅ Run tests with Vitest
- ✅ Build the project
- ✅ Deploy to Render (production only)

### Advanced CI/CD Pipeline:
- ✅ Security audit with `npm audit`
- ✅ Dependency version checking
- ✅ Code coverage reporting
- ✅ Build artifact caching
- ✅ Staging deployments for PRs
- ✅ Production deployments
- ✅ Manual workflow triggering

## 📋 What Each Job Does

### Security Check
- Runs `npm audit` to check for security vulnerabilities
- Checks for outdated dependencies

### Lint and Test
- Runs ESLint to ensure code quality
- Executes all tests with Vitest
- Generates coverage reports (advanced workflow)

### Build
- Builds the Vue.js application with Vite
- Uploads build artifacts for deployment

### Deploy
- **Staging**: Deploys PR changes to a staging environment
- **Production**: Deploys main branch changes to production

## 🛠️ Customization Options

### Add Environment Variables
If your app needs environment variables, add them to your Render service or use GitHub secrets:

```yaml
- name: Deploy to Render
  env:
    RENDER_TOKEN: ${{ secrets.RENDER_TOKEN }}
    RENDER_SERVICE_ID: ${{ secrets.RENDER_SERVICE_ID }}
    NODE_ENV: production
    # Add your custom env vars here
```

### Change Deployment Platform
To deploy to a different platform (Vercel, Netlify, etc.), replace the deployment step:

```yaml
# For Vercel
- name: Deploy to Vercel
  uses: amondnet/vercel-action@v25
  with:
    vercel-token: ${{ secrets.VERCEL_TOKEN }}
    vercel-org-id: ${{ secrets.ORG_ID }}
    vercel-project-id: ${{ secrets.PROJECT_ID }}

# For Netlify
- name: Deploy to Netlify
  uses: nwtgck/actions-netlify@v2.0
  with:
    publish-dir: './dist'
    production-branch: main
    github-token: ${{ secrets.GITHUB_TOKEN }}
    deploy-message: "Deploy from GitHub Actions"
```

### Add Notifications
Add Slack, Discord, or email notifications:

```yaml
- name: Notify Slack
  uses: 8398a7/action-slack@v3
  with:
    status: ${{ job.status }}
    channel: '#deployments'
    webhook_url: ${{ secrets.SLACK_WEBHOOK }}
```

## 🔍 Monitoring Your Pipeline

### View Workflow Runs
1. Go to your repository on GitHub
2. Click the **Actions** tab
3. Select your workflow to see all runs

### Debug Failed Builds
- Click on any failed job to see detailed logs
- Check the "Artifacts" section for build files
- Use the workflow visualizer to see job dependencies

### Common Issues

#### Build Fails
- Check if all dependencies are installed correctly
- Verify Node.js version compatibility
- Look for linting errors in the logs

#### Deployment Fails
- Verify your Render secrets are correct
- Check if your Render service is active
- Ensure your build artifacts are generated

#### Tests Fail
- Run tests locally first: `npm run test:run`
- Check for environment-specific issues
- Verify test configuration in `vitest.config.js`

## 🎯 Best Practices

1. **Always test locally first** before pushing
2. **Use feature branches** for new development
3. **Review PRs** before merging to main
4. **Monitor deployment logs** for issues
5. **Keep dependencies updated** regularly
6. **Use semantic versioning** for releases

## 📚 Additional Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Render API Documentation](https://render.com/docs/api)
- [Vue.js Deployment Guide](https://vuejs.org/guide/best-practices/production-deployment.html)
- [Vite Build Configuration](https://vitejs.dev/config/)

## 🆘 Need Help?

If you encounter issues:
1. Check the GitHub Actions logs for error messages
2. Verify your secrets are correctly configured
3. Test your build process locally
4. Review the workflow syntax in the GitHub Actions editor

Your CI/CD pipeline is now ready to automate your development workflow! 🚀 