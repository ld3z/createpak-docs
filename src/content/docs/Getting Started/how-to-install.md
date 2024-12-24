---
title: How to install
description: Guide on how to install the modpack
---

You can find the latest download to the pack [here](https://github.com/ld3z/createpak/releases/latest).

There are two versions of the pack:
- .zip
- .mrpack

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

The .mrpack is for Modrinth users which also contains all of the metadata in order to install it in the Modrinth Launcher.

:::caution  
Note that the modpack will be missing mods on Third-Party launchers (e.x Prism, MultiMC, Technic, etc.) and will need to seek out mods that aren't available to be downloaded by the launcher!
:::

:::tip[However]
Some launchers like Prism do find the mods that aren't available to be downloaded automatically, but instead will tell you to open their mod pages and download them, and put them in the mods folder.
:::