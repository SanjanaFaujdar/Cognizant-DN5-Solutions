# Git HOL 4 - Conflict Resolution

## Objectives
- Explain how to resolve conflicts during merge

## Steps Performed

```bash
# 1. Verify master is in clean state
git status

# 2. Create a branch GitWork
git branch GitWork

# 3. Add file hello.xml and observe status
echo "<hello>Hello from branch</hello>" > hello.xml
git add hello.xml
git commit -m "Add hello.xml in branch"

# 4. Commit changes to branch
git checkout GitWork
git add .
git commit -m "Changes in GitWork branch"

# 5. Switch to master
git checkout master

# 6. Add hello.xml to master with different content
echo "<hello>Hello from master</hello>" > hello.xml
git add hello.xml
git commit -m "Add hello.xml in master"

# 7. Commit the changes to master
git add .
git commit -m "Master changes"

# 8. Observe log
git log --oneline --graph --decorate --all

# 9. Check differences with Git diff tool
git difftool master GitWork

# 10. Use 3-way merge tool to list differences
git mergetool

# 11. Merge branch to master (creates conflict)
git merge GitWork

# 12. Observe git markup
# <<<<<<< HEAD
# Hello from master
# =======
# Hello from branch
# >>>>>>> GitWork

# 13. Use P4Merge to resolve conflict
git mergetool

# 14. Commit changes after resolving conflict
git add .
git commit -m "Resolve merge conflict"

# 15. Observe git status and backup .gitignore
git status
git add .gitignore

# 16. Update .gitignore
echo "*.orig" >> .gitignore

# 17. List all available branches
git branch -a

# 18. Delete merged branch
git branch -d GitWork

# 19. Observe the log
git log --oneline --graph --decorate
```

## Expected Output
- Conflict detected between master and branch
- Conflict resolved using P4Merge tool
- Changes committed successfully
- Branch deleted after merging
