# Git HOL 3 - Branching and Merging

## Objectives
- Explain branching and merging
- Create branch request and merge request in GitLab

## Steps Performed

### Branching
```bash
# 1. Create a new branch GitNewBranch
git branch GitNewBranch

# 2. List all local and remote branches
git branch -a
# * marks the current branch

# 3. Switch to the new branch
git checkout GitNewBranch

# 4. Add some files and commit
echo "Content in new branch" > newfile.txt
git add newfile.txt
git commit -m "Add newfile in GitNewBranch"

# 5. Check status
git status
```

### Merging
```bash
# 1. Switch back to master
git checkout master

# 2. List differences between trunk and branch
git diff master GitNewBranch

# 3. List visual differences using P4Merge tool
git difftool master GitNewBranch

# 4. Merge the source branch to trunk
git merge GitNewBranch

# 5. Observe the log after merging
git log --oneline --graph --decorate

# 6. Delete the branch after merging
git branch -d GitNewBranch

# Verify branch is deleted
git status
```

## Expected Output
- New branch created and files committed
- Branch merged successfully to master
- Log shows merge history
- Branch deleted after merging
