# Git HOL 1 - Environment Setup & Git Configuration

## Objectives
- Setup machine with Git Configuration
- Integrate notepad++ as default editor
- Add file to source code repository

## Steps Performed

### Step 1: Setup Git Configuration
```bash
# Check git version
git version

# Configure user name and email
git config --global user.name "SanjanaFaujdar"
git config --global user.email "sanjana@example.com"

# Verify configuration
git config --list
```

### Step 2: Integrate notepad++ as Default Editor
```bash
git config --global core.editor "notepad++ -multiInst -nosession"
```

### Step 3: Add Files to Source Code Repository
```bash
# Initialize new repository GitDemo
git init GitDemo

# Navigate to directory
cd GitDemo

# List files
ls -al

# Create welcome.txt file
echo "Welcome to the Version Control (Git) to implement it" > welcome.txt

# Add file to staging
git add welcome.txt

# Verify status
git status

# Commit with default editor
git commit

# Verify working directory status
git status
```

### Step 4: Signup on GitLab/GitHub
```bash
# Push to remote repository
git push origin master
```

## Expected Output
- Git version information displayed
- Global configuration set correctly
- welcome.txt added to local repository
- Changes pushed to remote repository
