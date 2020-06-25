# Git Cheat Sheet #

If you want a quick and easy way to create common commands, just use this tool:

[Basic Git Command Builder](../developer-tools/git-command-builder.html)

## Everyday Workflow ##

### Committing Changes ###

1. `git add --all`
2. `git commit -m "This is the reason I made the changes"`

### Pulling Changes From Remote ###

1. Commit your changes (see Committing Changes)
1. `git pull origin master`

General command: `git pull origin branchName`

**Important Note**

If you forget to commit your changes before you pull, you will get an error.

### Committing and Pushing Changes ###

After changes are made to your local files, follow these steps to save your changes to Git:

1. Pull changes from remote (see Pulling Changes From Remote)
2. Commit your changes (see Committing Changes)
3. `git push origin master`

**Important Notes**

- If you forget to pull changes before you push, you will get an error
- If you forget to commit your changes before you push, your changes will not be saved to the server

## Common Commands ##

- add
    - `git add .`
    - `git add --all`
- branch
    - `git branch -a` (show all branches)
    - `git branch -D myBranch` (delete branch myBranch)
- checkout - switch the current branch you are working from
    - `git checkout -b myNewBranch` (creates a new branch called myNewBranch and checks that branch out)
    - `git checkout master` (checks out master branch)
- clone
    - `git clone https://github.com/cmstead/programming-cheat-sheets.git`
- commit
    - `git commit -m "This is a commit message"`
- fetch
    - `git fetch origin master`
- merge
    - `git merge myBranch`
- pull
    - `git pull origin master`
    - `git pull upstream myBranch`
- push
    - `git push origin master`
- status -- get a list of all changes to current repository
    - `git status`

## Working With Branches ##

Branching provides a way to edit code without immediately changing master. Following is the workflow for using branches.

### Moving to a New Branch ###

- `git checkout branchName` -- moves from the current branch to the branch called branchName

### Creating a Branch ###

- `git checkout -b branchName` -- creates a new branch and checks it out so you can start work

### Pushing a Branch to Remote ###

- `git push origin branchName`

### Merging Changes from Branch to Branch ###

This example is merging changes from the branch `yourBranch` into master:

- `git checkout master`
- `git merge yourBranch`

## Working With a Forked Respository ##

After a repository has been forked, to your account, you can clone and pull from it as usual. There is a workflow specifically for working with forked repositories:

### Setting up a forked workflow: ###

1. Fork the repository to your account (click fork)
2. Clone the new repository from *your account* (not the original)
    - `git clone https://github.com/yourUsername/yourRespositoryFork.git`
3. Set an upstream remote pointing to the *original repository*
    - `git remote add upstream https://github.com/originalUsername/originalRepositoryName.git`

### The workflow for working with a forked repository is as follows: ###

1. Pull from upstream:
    - `git pull upstream master`
2. Make changes locally
3. Commit local changes as usual
    1. `git add --all`
    2. `git commit -m "This is the reason I made the changes"`
4. Pull from upstream and then push your changes to your repo
    1. `git pull upstream master`
    2. `git push origin master`
5. When your feature work is done, do this **in the browser**: open your repo on GitHub, you should see an option to **create a pull request**.
6. After your pull request has been merged, be sure to pull upstream again.
    - `git pull upstream master`
    