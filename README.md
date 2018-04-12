# natpp
Fast, simple, minimalist tool for create Web Apps to Desktop Apps.

## Installation
```bash
npm install natpp -g
```

## Features

- Create once use everywhere.
- Only create link.
- For Windows.
- Icon is favicon (support ico).

## Usage

Create native app.
```bash
napp http://www.example.com/
```

Custom app name.
```bash
napp http://www.example.com/ -n myapp
```

Custom app window size.
```bash
napp http://www.example.com/ -w 400 -h 600
```

## Options 
-  `-n`, `--name`    [value],  Set app name (default: web hostname)
-  `-w`, `--width`   [value],  Set app width (default: 800)
-  `-h`, `--height`  [value],  Set app height (default: 600)
-  `-d`, `--desc`    [value],  Set app description

## Get Help

```bash
napp
```

or 

```bash
napp -h
```

