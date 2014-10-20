# Getting Started with Git
Git is a widely used package for source code versioning, originally developed for usage with the Linux kernel. In contrast to CVS or SVN it is a distributed versioning control system, meaning that it can be fully used locally without any servers. Everybody who checks out a project versioned by Git receives a complete copy of the project's history.
Although it is not exactly necessary, dedicated versioning servers are widely used with Git to make cooperative programming easier. That then again sounds like SVN but is much more flexible. Git can easily synchronize repositories from and to everywhere, making it possible to use multiple servers, sync local copies and syncing directly with colleagues.
Putting new code on a server is a two step process. Code is first commited to a local repository using `git commit`. When that succeeded, the local repository is synced to the remote repository using `git push`. Getting new code from the server is optionally just a single command - `git pull`.

More complete tutorials for Git can be found all around the internet and graphical tools exist to make working with Git easier, such as Tortoise Git for Windows, SourceTree for OSX and SmartGit for Linux.

Kore makes heavy use of submodules, a Git feature rarely discussed in tutorials. A submodule is a link inside a project tree to another Git repository. Most Git commands by default ignore submodules.
To create a new local copy of a Git repository (usually the first step), call `git clone --recursive https://whateveryoulike`
To get the latest code use `git pull` and then `git submodule update --recursive`.
Git can get tricky when you try to work inside a submodule. You can read more about it in the "Issues with Submodules" chapter at http://git-scm.com/book/en/Git-Tools-Submodules