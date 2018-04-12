# Natpp
Fast, simple, minimalist tool for create Web Apps to Desktop Apps.

![Imgur](https://i.imgur.com/kgQB7UR.gif)

## Installation
```bash
npm install natpp -g
```

## Features

- Create once use everywhere.
- Just create link.
- For Windows (I don't have MacBook).
- Arch auto check.
- Icon from web favicon (only support .ico).

## Usage

Create native app.
```bash
natpp http://www.example.com/
```

Custom app name.
```bash
natpp http://www.example.com/ -n myapp
```

Custom app window size.
```bash
natpp http://www.example.com/ -w 400 -h 600
```

## Options 
-  `-n`, `--name`    [value],  Set app name (default: web hostname)
-  `-w`, `--width`   [value],  Set app width (default: 800)
-  `-h`, `--height`  [value],  Set app height (default: 600)
-  `-d`, `--desc`    [value],  Set app description

## Help

```bash
natpp
```

or 

```bash
natpp -h
```

