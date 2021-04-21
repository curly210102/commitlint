> Commitizen adapter using the commitlint.config.js

# cz-commitlint

This is a commitizen adapter, using this adapter, commitizen works based on commitlint.config.js.

Submit by commitizen, lint by commitlint, just need maintain one configuration file, Consistent and Scalable.

The interactive process is inspired by [cz-conventional-changelog](https://github.com/commitizen/cz-conventional-changelog).

## Getting started

### Using commitizen adapter

```bash
npm install --save-dev @commitlint/cz-commitlint commitizen
```

In package.json

```
{
  "scripts": {
    "commit": "git-cz"
  },
  "config": {
    "commitizen": {
      "path": "@commitlint/cz-commitlint"
    }
  }
}
```

### Configure commitlint

```bash
# Install commitlint cli and conventional config
npm install --save-dev @commitlint/config-conventional @commitlint/cli

# Simple: config with conventional
echo "module.exports = {extends: ['@commitlint/config-conventional']};" > commitlint.config.js

# commitlint configuration is shareable,
# Install lerna-scopes
npm install --save-dev @commitlint/config-lerna-scopes
# Scalable: config with lerna-scopes in monorepo mode
echo "module.exports = {extends: ['@commitlint/config-conventional', '@commitlint/config-lerna-scopes']};" > commitlint.config.js
```

### Set Git Hooks by husky

```base

# ------- using npm ----------
# Install Husky
npm install husky --save-dev
# Active hooks
npx husky install
# Add commitlint hook
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit $1'
# Add commitizen hook
npx husky add .husky/prepare-commit-msg 'exec < /dev/tty && node_modules/.bin/cz --hook || true'


# ------- using yarn ----------
# Install Husky
yarn add husky --dev
# Active hooks
yarn husky install
# Add commitlint hook
yarn husky add .husky/commit-msg 'yarn --no-install commitlint --edit $1'
# Add commitizen hook
yarn husky add .husky/prepare-commit-msg 'exec < /dev/tty && node_modules/.bin/cz --hook || true'

```

### Try it out

```bash
git add .
npm run commit
# or
yarn run commit
```

## Configure cz-commitlint

Prompt Config is used by `@commitlint/cz-commitlint`.

There are two fields: `messages` and `questions`

## `messages`

Set hint contents, you can configure it to support localization.

- skip: The field can be skip by enter
- max: Maximum number of characters
- min: Minimum number of characters
- emptyWarning: The field can not be empty
- upperLimitWarning: The characters limit is exceeded
- lowerLimitWarning: The characters is less than lower limit

## `questions`

Specify the interactive steps, Steps can only be configure with

- header
- type
- scope
- subject
- body
- footer
- isBreaking
- breaking
- breakingBody
- isIssueAffected
- issues
- issuesBody

```json
// package.json
{
  "config": {
    "commitizen": {
      "path": "@optimizer/cz-commitlint",
      "prompt": {
        "questions": {
          "type": {
            "description": "Select the type of change that you're committing:",
            "enum": {
              "site": {
                "description": "Site Features & Improves & BugFix",
                "title": "site"
              },
              "post": {
                "description": "Post create & update & publish",
                "title": "post"
              },
              "build": {
                "description": "Build System & Commit Flow & CI",
                "title": "build"
              }
            }
          },
          "scope": {
            "description": "What is the scope of this change"
          },
          "subject": {
            "description": "Write a short, imperative tense description of the change"
          },
          "body": {
            "description": "Provide a longer description of the change"
          },
          "isBreaking": {
            "description": "Are there any breaking changes?"
          },
          "breakingBody": {
            "description": "A BREAKING CHANGE commit requires a body. Please enter a longer description of the commit itself"
          },
          "breaking": {
            "description": "Describe the breaking changes"
          },
          "isIssueAffected": {
            "description": "Does this change affect any open issues?"
          },
          "issuesBody": {
            "description": "If issues are closed, the commit requires a body. Please enter a longer description of the commit itself"
          },
          "issues": {
            "description": "Add issue references (e.g. \"fix #123\", \"re #123\".)"
          }
        }
      }
    }
  }
}
```

## Related

- [Commitlint Shared Configuration](https://github.com/conventional-changelog/commitlint#shared-configuration) - You can find more shared configurations are available to install and use with commitlint
