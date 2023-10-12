# sketch-wakatime

[![Coding time tracker](https://wakatime.com/badge/github/wakatime/sketch-wakatime.svg)](https://wakatime.com/badge/github/wakatime/sketch-wakatime)

Time tracking and metrics automatically generated from your [Sketch](http://www.sketchapp.com/) usage.

## Installation

1. Download the [latest release](https://github.com/wakatime/sketch-wakatime/releases/latest).

2. Unzip the file.

3. Open the `WakaTime.sketchplugin` file to install the plugin.

4. Use Sketch like you normally do and your time will automatically be tracked for you.

5. Enter your [api key](https://wakatime.com/settings#apikey) if prompted.

6. Visit <https://wakatime.com> to see your logged time.

## Screen Shots

![Project Overview](https://wakatime.com/static/img/ScreenShots/Screen-Shot-2016-03-21.png)

## Configuring

To change your api key, copy it from your [Settings page](https://wakatime.com/settings#apikey), then paste into Sketch `Plugins → WakaTime`.

Additional settings are in `$HOME/.wakatime.cfg` for [wakatime cli](https://github.com/wakatime/wakatime#configuring).

## Contributing

To run this plugin from a local clone of the repo:

1. `git clone git@github.com:wakatime/sketch-wakatime.git`
2. `cd sketch-wakatime`
3. `ln -s "$PWD/sketch-wakatime/WakaTime.sketchplugin" ~/Library/Application\ Support/com.bohemiancoding.sketch3/Plugins/WakaTime.sketchplugin`
4. `npm run watch`

To view the output from `console.log`, you have a few different options:

- Use the [`sketch-dev-tools`](https://github.com/skpm/sketch-dev-tools)
- Run `skpm log` in your Terminal, with the optional `-f` argument (`skpm log -f`) which causes `skpm log` to not stop when the end of logs is reached, but rather to wait for additional data to be appended to the input

### Publishing

```bash
skpm publish <major|minor|patch>
```

(where `bump` can be `patch`, `minor` or `major`)

`skpm publish` will create a new release on your GitHub repository and create an appcast file in order for Sketch users to be notified of the update.

## Troubleshooting

The Sketch plugin logs errors to `Console.app` and `~/.wakatime/wakatime.log`.

For more info on debugging Sketch plugins see the [official docs](https://developer.sketch.com/plugins/debugging).

For more general troubleshooting information, see [wakatime/wakatime#troubleshooting](https://github.com/wakatime/wakatime#troubleshooting).
