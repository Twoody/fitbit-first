# fitbit-first
## Running
**Per [docs](https://dev.fitbit.com/build/guides/command-line-interface/#building-and-installing-your-project)**
```
npx fitbit-build
npx fitbit
fitbit$ bi
```
## Troubleshooting
### Not running in simulator
1. Make sure not running or logged into fitbit studios
2. Check console of `bi`
3. Check email is the same in `fitbit$` cli and simulator settings
### `npx fitbit` command not found
Check if sdk is install: `npm add @fitbit/sdk-cli`
