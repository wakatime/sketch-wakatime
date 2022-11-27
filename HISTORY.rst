
History
-------


3.0.2 (2022-11-27)
++++++++++++++++++

- Support api key with waka prefix.
- Only remove wakatime-cli after finished downloading new one.
- Improve request handling when installing wakatime-cli.


3.0.1 (2021-12-23)
++++++++++++++++++

- Fix executing wakatime-cli.


3.0.0 (2021-12-23)
++++++++++++++++++

- Use new Go wakatime-cli from GitHub Releases, with auto-updating.


2.0.0 (2018-12-19)
++++++++++++++++++

- Upgrade wakatime-cli to v10.6.1.
- Correctly parse include_only_with_project_file when set to false.
  `wakatime#161 <https://github.com/wakatime/wakatime/issues/161>`_
- Support language argument for non-file entity types.
- Send 25 heartbeats per API request.
- New category "Writing Tests".
  `wakatime#156 <https://github.com/wakatime/wakatime/issues/156>`_
- Fix bug caused by git config section without any submodule option defined.
  `wakatime#152 <https://github.com/wakatime/wakatime/issues/152>`_
- Send 50 offline heartbeats to API per request with 1 second delay in between.
- Support logging coding activity to remote network drive files on Windows
  platform by detecting UNC path from drive letter.
  `wakatime#72 <https://github.com/wakatime/wakatime/issues/72>`_
- Re-enable detecting projects from Subversion folder on Windows platform.
- Prevent opening cmd window on Windows when detecting project from Subversion.
- Run tests on Windows using Appveyor.
- Default --sync-offline-activity to 100 instead of 5, so offline coding is
  synced to dashboard faster.
- Batch heartbeats in groups of 10 per api request.
- New config hide_project_name and argument --hide-project-names for
  obfuscating project names when sending coding activity to api.
- Fix mispelled Gosu language.
  `wakatime#137 <https://github.com/wakatime/wakatime/issues/137>`_
- Remove metadata when hiding project or file names.
- New --local-file argument to be used when --entity is a remote file.
- New argument --sync-offline-activity for configuring the maximum offline
  heartbeats to sync to the WakaTime API.
- Support for project detection from git worktree folders.
- Force forward slash for file paths.
- New --category argument.
- New --exclude-unknown-project argument and corresponding config setting.
- Smarter C vs C++ vs Objective-C language detection.
- Detect dependencies from Elm, Haskell, Haxe, Kotlin, Rust, and Scala files.
- Improved Matlab vs Objective-C language detection.
  `wakatime#129 <https://github.com/wakatime/wakatime/issues/129>`_
- Detect dependencies from Swift, Objective-C, TypeScript and JavaScript files.
- Categorize .mjs files as JavaScript.
  `wakatime#121 <https://github.com/wakatime/wakatime/issues/121>`_
- Ability to only track folders containing a .wakatime-project file using new
  include_only_with_project_file argument and config option.
- Fix bug that caused heartbeats to be cached locally instead of sent to API.
- Improve Java dependency detection.
- Skip null or missing heartbeats from extra heartbeats argument.
- Support saving unicode heartbeats when working offline.
  `wakatime#112 <https://github.com/wakatime/wakatime/issues/112>`_
- Limit bulk syncing to 5 heartbeats per request.
  `wakatime#109 <https://github.com/wakatime/wakatime/issues/109>`_
- Parse array of results from bulk heartbeats endpoint, only saving heartbeats
  to local offline cache when they were not accepted by the api.
- Upload multiple heartbeats to bulk endpoint for improved network performance.
  `wakatime#107 <https://github.com/wakatime/wakatime/issues/107>`_
- Fix bug causing 401 response when hidefilenames is enabled.
  `wakatime#106 <https://github.com/wakatime/wakatime/issues/106>`_
- Detect project and branch names from git submodules.
  `wakatime#105 <https://github.com/wakatime/wakatime/issues/105>`_
- Use WAKATIME_HOME env variable for offline and session caching.
  `wakatime#102 <https://github.com/wakatime/wakatime/issues/102>`_
- Allow passing string arguments wrapped in extra quotes for plugins which
  cannot properly escape spaces in arguments.
- Upgrade pytz to v2017.2.
- Upgrade requests to v2.18.4.
- Upgrade tzlocal to v1.4.
- Improve Matlab language detection.


1.0.11 (2017-06-01)
++++++++++++++++++

- Support automatic plugin updates using Sketch Appcast updates.


1.0.10 (2017-05-24)
++++++++++++++++++

- Upgrade wakatime-cli to v8.0.2.


1.0.9 (2017-02-20)
++++++++++++++++++

- Upgrade wakatime-cli to v7.0.2.


1.0.8 (2016-10-24)
++++++++++++++++++

- Upgrade wakatime-cli to v6.2.0.


1.0.7 (2016-07-06)
++++++++++++++++++

- Upgrade wakatime-cli to v6.0.7.


1.0.6 (2016-06-17)
++++++++++++++++++

- URL decode currently open file into path.
- Upgrade wakatime-cli to v6.0.6.


1.0.5 (2016-06-15)
++++++++++++++++++

- Log verbose messages to System Console app when debug is true.
- Upgrade wakatime-cli to v6.0.5.


1.0.4 (2016-06-09)
++++++++++++++++++

- Upgrade wakatime-cli to v6.0.4 to fix bug in urllib3 package causing
  unhandled retry exceptions.


1.0.3 (2016-06-09)
++++++++++++++++++

- Improve performance by keeping plugin around until Sketch app quits, and
  storing state in memory instead of NSUserDefaults.


1.0.2 (2016-06-08)
++++++++++++++++++

- Improve performance by only checking for api key on startup.


1.0.1 (2016-06-07)
++++++++++++++++++

- URLDecode spaces from Application Support directory path.


1.0.0 (2016-06-07)
++++++++++++++++++

- Birth

