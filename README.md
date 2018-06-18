# Electron + Angular Quick Start

Electron + https://github.com/phyunsj/angular-custom-validator-generation (originally from "Angular In Action" Ch.9 Example https://github.com/angular-in-action/invoice )



<p align="center">
<img src="https://github.com/phyunsj/electron-angular/blob/master/electron-monitor.png" width="400px"/>
</p>


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

7. packaging for desktop 

> electron-packager . --platform=win32 --overwrite

This will generate a directory `/"name"-win32-x64/` (`"name"` from package.json) that contains the executable file `invoice.exe`.

## More Info

3 Necessary Things to Correctly Release a Product Based on the Electron App
https://nulab-inc.com/blog/typetalk/3-necessary-things-to-correctly-release-a-product-based-on-the-electron-app/

electron-packager https://github.com/electron-userland/electron-packager

