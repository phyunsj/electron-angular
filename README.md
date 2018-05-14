# Electron + Angular 

Electron + https://github.com/phyunsj/angular-custom-validator-generation (originally from "Angular In Action" Ch.9 Example https://github.com/angular-in-action/invoice )

![electron](https://github.com/phyunsj/electron-angular/blob/master/electron-monitor.png "network monitor")


## Steps

1. install Electron
> npm install electron --save-dev

> npm install electron-packager -g

> npm install electron-packager --save-dev

2. index.html
> change from `<base href="/">` to `<base href="./">` 

3. build angular `invoice` project
> ng build 

4. main.js (electron main-entry-point)



5. package.json

```
{
  "main": "main.js",
  ...
  "scripts": { 
    ...
    "electron": "electron .",
    "electron-build": "ng build  && electron ." 
  }
  ...
}
```

6. run electron
> npm run electron-build

7. packageing for desktop 

> electron-packager . --platform=win32 --overwrite

This will generate a directory `/[..A..]-win32-x64/` that contains the executable file.

`[..A..]` : `name` from package.json

