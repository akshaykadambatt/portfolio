---
title: 'KN media downloader'
metaTitle: 'KN media downloader: Chrome web store extension'
metaDesc: 'A chrome extension for downloading images'
socialImage: images/22-09-2021.jpg
date: '2022-07-27'
tags:
  - project
---
# KN media downloader
### A chrome extension for downloading images

Project URL: [KN media downloader](https://chrome.google.com/webstore/detail/kn-image-downloader/egdjdnkbhoehgfjdghkdgbajidojpbhf?hl=en&authuser=0/)

This is a chrome extension, available at the [Chrome Web Store](https://chrome.google.com/webstore/detail/kn-image-downloader/egdjdnkbhoehgfjdghkdgbajidojpbhf?hl=en&authuser=0). 

I used the following methods for building this extension;
- Manifest version 3
- `chrome.tabs.onUpdated` event listener
- `chrome.windows.getAll()` method
- `chrome.downloads.download()` method
- `chrome.tabs.remove()` method