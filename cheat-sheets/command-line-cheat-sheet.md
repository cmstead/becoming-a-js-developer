# Command Line Interface (CLI) Cheat Sheet #

The command line environment is a powerful, but cryptic, tool. By working from within the command line, you can perform both simple and complex operations, far beyond the kind of work people can accomplish through point and click in the file explorer/finder environment.

As you move through your programming journey, you will find it necessary to work from the command line. It would behoove you to become familiar with the command line early in the process.

## Tab Completion and History ##

**Tab Completion**

You can type part of a command and hit tab, and if the system can figure out what you are typing, it will automatically complete it for you.

**History**

Pressing the up and down keys will move you through your command history, making it easier to rerun commands you have typed before.

## Path and File Special Symbols ##

- `./` -- in the same directory
- `..` -- up one directory
- `../../` -- up two directories
- `*` -- "wild card" matches any character or characters
- `~` -- your "home" directory

## Directory (Folder) Commands ##

- **cd** -- Change directory (folder)
    - Examples
        - `cd ./scripts` -- go to scripts directory
        - `cd ~` -- go to home directory
        - `cd ..` -- go up one directory

- **mkdir** -- Create a new directory (folder)
    - Example
        - `mkdir ./html`

- **pwd** -- display the current directory
    - Example
        - `pwd`

- **rmdir** -- Remove a directory (folder)
    - Example
        - `rmdir ./hmtl`

## File Commands ##

- **ls** -- List all files (and directories)
    - Example
        - `ls`

- **rm** -- Delete a file
    - Example
        - `rm ./idnex.html`

- **touch** -- Create a new file
    - Example
        - `touch ./index.html`

## Other Useful Commands ##

- **clear** -- clears output from the screen
    - Example
        - `clear`