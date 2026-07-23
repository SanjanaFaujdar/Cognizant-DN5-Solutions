# Git HOL 2 - Git Ignore

## Objectives
- Explain git ignore
- Ignore unwanted files using git ignore

## Steps Performed

### Step 1: Create .log file and log folder
```bash
# Create a log file
touch application.log

# Create log folder
mkdir logs
touch logs/error.log

# Check status - log files will show as untracked
git status
```

### Step 2: Create .gitignore file
```bash
# Create .gitignore
touch .gitignore
```

### Step 3: Add rules to .gitignore
