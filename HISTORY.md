
# Changelog


## 4.0.1 (2023-06-29)

- Output errors from wakatime-cli to Console.app.


## 4.0.0 (2023-06-09)

- Use new JavaScript plugin structure.


## 3.0.3 (2023-03-04)

- First try installing wakatime-cli using Python3, then fallback to Python2.
  [#9](https://github.com/wakatime/sketch-wakatime/issues/9)


## 3.0.2 (2022-11-27)

- Support api key with waka prefix.
- Only remove wakatime-cli after finished downloading new one.
- Improve request handling when installing wakatime-cli.


## 3.0.1 (2021-12-23)

- Fix executing wakatime-cli.


## 3.0.0 (2021-12-23)

- Use new Go wakatime-cli from GitHub Releases, with auto-updating.


## 2.0.0 (2018-12-19)

- Upgrade wakatime-cli to v10.6.1.


## 1.0.11 (2017-06-01)

- Support automatic plugin updates using Sketch Appcast updates.


## 1.0.10 (2017-05-24)

- Upgrade wakatime-cli to v8.0.2.


## 1.0.9 (2017-02-20)

- Upgrade wakatime-cli to v7.0.2.


## 1.0.8 (2016-10-24)

- Upgrade wakatime-cli to v6.2.0.


## 1.0.7 (2016-07-06)

- Upgrade wakatime-cli to v6.0.7.


## 1.0.6 (2016-06-17)

- URL decode currently open file into path.
- Upgrade wakatime-cli to v6.0.6.


## 1.0.5 (2016-06-15)

- Log verbose messages to System Console app when debug is true.
- Upgrade wakatime-cli to v6.0.5.


## 1.0.4 (2016-06-09)

- Upgrade wakatime-cli to v6.0.4 to fix bug in urllib3 package causing
  unhandled retry exceptions.


## 1.0.3 (2016-06-09)

- Improve performance by keeping plugin around until Sketch app quits, and
  storing state in memory instead of NSUserDefaults.


## 1.0.2 (2016-06-08)

- Improve performance by only checking for api key on startup.


## 1.0.1 (2016-06-07)

- URLDecode spaces from Application Support directory path.


## 1.0.0 (2016-06-07)

- Birth

