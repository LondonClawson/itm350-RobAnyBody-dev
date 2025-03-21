# Git Usage Guide

This guide provides a detailed explanation of commonly used Git commands, complete with useful flags and scenarios where each command is applicable.

---

## **Basic Git Workflow**

### **1. Adding Changes: `git add`**
The `git add` command is used to stage changes before committing them.

**Usage:**
```bash
git add <file>         # Add a specific file
git add .              # Add all changes in the current directory
git add -p             # Interactively add changes in chunks
```
**Useful Flags:**
- `-p` or `--patch`: Allows you to interactively review and stage changes chunk by chunk.
- `-A` or `--all`: Stages all changes, including deletions.

---

### **2. Committing Changes: `git commit`**
After staging changes, use `git commit` to save them to the repository.

**Usage:**
```bash
git commit -m "Your commit message"
git commit --amend       # Edit the last commit
```
**Useful Flags:**
- `-m <message>`: Adds a commit message inline.
- `--amend`: Edits the previous commit.

---

### **3. Pushing Changes: `git push`**
The `git push` command uploads your local changes to a remote repository.

**Usage:**
```bash
git push origin main      # Push changes to the main branch
git push -u origin main   # Set upstream branch for future pushes
```
**Useful Flags:**
- `-u` or `--set-upstream`: Sets the default remote branch for subsequent pushes.
- `--force`: Forces an update, overwriting remote changes.

---

### **4. Pulling Changes: `git pull`**
The `git pull` command fetches and integrates changes from a remote repository.

**Usage:**
```bash
git pull origin main      # Pull changes from the main branch
```
**Useful Flags:**
- `--rebase`: Re-applies your local commits on top of the fetched branch.
- `--no-commit`: Merges changes without automatically committing them.

---

### **5. Changing the Remote URL: `git remote set-url`**
This command updates the URL of your remote repository.

**Usage:**
```bash
git remote set-url origin <new-url>
```
You can verify the new remote URL using:
```bash
git remote -v
```

---

## **Advanced Git Commands**

### **1. Stashing Changes: `git stash`**
The `git stash` command temporarily saves changes without committing them.

**Usage:**
```bash
git stash              # Stash current changes
git stash apply        # Re-apply stashed changes
git stash drop         # Remove a stash
```
**Useful Flags:**
- `-u` or `--include-untracked`: Stashes untracked files.
- `--keep-index`: Keeps staged changes while stashing others.

---

### **2. Reverting Changes: `git revert`**
The `git revert` command undoes changes by creating a new commit.

**Usage:**
```bash
git revert <commit>      # Revert a specific commit
git revert HEAD~1        # Revert the last commit
```
**Useful Flags:**
- `--no-commit`: Prepares the revert but doesn’t commit it.
- `-n` or `--no-edit`: Uses the default commit message without opening an editor.

---

### **3. Resetting Changes: `git reset`**
The `git reset` command moves the HEAD pointer and optionally modifies the staging area and working directory.

**Usage:**
```bash
git reset --soft <commit>   # Resets HEAD, keeps changes staged
git reset --mixed <commit>  # Resets HEAD, unstages changes (default)
git reset --hard <commit>   # Resets HEAD, working directory, and index
```
**Useful Flags:**
- `--soft`: Keeps changes staged.
- `--hard`: Discards all changes.

**Note:** Use `--hard` with caution, as it can permanently delete changes.

---

### **4. Viewing Logs: `git log`**
The `git log` command displays commit history.

**Usage:**
```bash
git log                  # Show commit history
git log --oneline        # Condensed view of commit history
```
**Useful Flags:**
- `--oneline`: Shows a summary of each commit in one line.
- `--graph`: Displays a graphical representation of branch history.
- `--author=<name>`: Filters commits by author.

---

### **5. Viewing Differences: `git diff`**
The `git diff` command shows changes between commits, branches, or the working directory.

**Usage:**
```bash
git diff                 # Show unstaged changes
git diff --cached        # Show staged changes
git diff HEAD            # Show all changes since the last commit
```
**Useful Flags:**
- `--stat`: Displays a summary of changes.
- `--name-only`: Lists only the names of changed files.

---

### **6. Showing Details: `git show`**
The `git show` command shows details about a specific commit.

**Usage:**
```bash
git show <commit>        # Show details of a specific commit
git show HEAD            # Show details of the latest commit
```
**Useful Flags:**
- `--name-status`: Shows the status of changed files (added, modified, deleted).
- `--stat`: Displays file statistics.

---

## **Conclusion**
This guide covers the most essential and advanced Git commands along with their useful flags. By mastering these commands, you can efficiently manage version control for your projects. Remember to always double-check your commands when using destructive options like `reset --hard` or `push --force`.

Happy coding!


