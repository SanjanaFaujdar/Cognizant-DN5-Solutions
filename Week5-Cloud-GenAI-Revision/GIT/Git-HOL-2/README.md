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
Contents of .gitignore
Ignore all .log files

*.log

Ignore log folder

logs/
### Step 4: Verify git status
```bash
# Add .gitignore to staging
git add .gitignore

# Verify - log files should no longer appear
git status

# Commit the .gitignore
git commit -m "Add .gitignore to ignore log files and folders"

# Push to remote
git push origin master
```

## Expected Output
- .log files and log folder are ignored by git
- git status reflects same about working directory,
  local repository and git repository
