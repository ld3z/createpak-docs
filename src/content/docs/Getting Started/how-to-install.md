---
title: How to install
description: Guide on how to install the modpack
---

You can find the latest download to the pack [here](https://github.com/ld3z/createpak/releases/latest).

There are two versions of the pack:
- .zip
- .mrpack

## CurseForge

The .zip is for CurseForge users as it contains a *manifest.json* file like this:
```json
// manifest.json
{
  "minecraft": {
    "version": "1.20.4",
    "modLoaders": [
      {
        "id": "fabric-0.15.3",
        "primary": true
      }
    ]
  },
  "manifestType": "minecraftModpack",
  "manifestVersion": 1,
  "name": "Custom",
  "author": "",
  "files": [
    {
      "projectID": 351725,
      "fileID": 4973035,
      "required": true
    },
    {
      "projectID": 306612,
      "fileID": 5010374,
      "required": true
    }
  ],
  "overrides": "overrides"
}
```

Which allows for users of CurseForge to easily install the modpack as the manifest contains all of the necessary metadata.

## Modrinth

The .mrpack is for Modrinth users which also contains all of the metadata in order to install it in the Modrinth Launcher.

## A word of warning:

:::caution  
Note that the modpack will be missing mods on Third-Party launchers (e.x Prism, MultiMC, Technic, etc.) and will need to seek out mods that aren't available to be downloaded by the launcher!
:::

:::tip[However...]
Launchers like [Prism](https://github.com/PrismLauncher/PrismLauncher) help locate mods that cannot be auto-downloaded. Instead, they prompt you to visit the mods' pages, manually download them, and place them in the mods folder.
:::