# vt-marketplace

# An app part of CS-3754

Parts personally implemented are included under contributors:
- gansh2
- memms

# Run instructions:
This application comes with different scripts for the case you would like to run for.



## Run Frontend and Backend in foreground:
- Open up two seperate terminals (requires linux bash)
- Run the following scripts from scripts folder in seperate terminals:
  - `run-BE-fg.sh`
  - `run-FE-fg.sh`
- When done, the programs can be killed with `CTRL+C` or `kill -9` syscall.

## Run Frontend and Backend in background:
- Open up a terminal
- Navigate to scripts directory
- Run `run-background.sh`
  > Note: This will block the terminal.
- To stop the program, simply run `stop.sh`

# Notes:
- The program has force https for TLS benefits during authentication calls. Thus, this requires you to disable your browsers certs check or use mkcerts.
- To use mkcert:
   - Install mkcert
   - Run `mkcert -key-file key.pem -cert-file cert.pem localhost` inside the /backend/certs/ directory.
   - Run `mkcert -install`
   - Launch the backend.
- Program has valid jwtoken authentication, thus to navigate all feature, one must create an account and login.
- Program was in collaboration with 5 total members. Commits history is public.
