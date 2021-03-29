# Introduction

A bitmap editor is a program which allows users to paint and edit pictures interactively on the computer screen and save them in one of many popular "bitmap" or "raster" formats such as JPEG, PNG, GIF and TIFF.

This project models a bitmap editor in the CLI.

## Requirements
To run program
*node.js
*npm (normally comes with Node.js)

# Quickstart
 1. fork this repo 

 2. clone and open folder in code editor
 ```
 $ git clone <https://github.com/ndowkunda/bitmap-editor-challenge.git> && cd bitmap-editor-challenge

 ```
 3. Install project dependencies
 ```
 $ npm install
 ```
 4. Run program
```
node bitmap-editor.js
```

## Running Tests
This project uses the [jasmine](https://jasmine.github.io/) framework. 
```
$ npm test
# or
$ npx jasmine path/to/spec
```

## Linting code
```
npx eslint --fix
```
 
# Problem Approach 

## Acceptance Criteria

>I M N - Create a new M x N image with all pixels coloured white (O).

>C - Clears the table, setting all pixels to white (O).

>L X Y C - Colours the pixel (X,Y) with colour C.

>V X Y1 Y2 C - Draw a vertical segment of colour C in column X between rows Y1 and Y2 (inclusive).

>H X1 X2 Y C - Draw a horizontal segment of colour C in row Y between columns X1 and X2 (inclusive).

>S - Show the contents of the current image

>X - Terminate the session"

## Functional Representation Domain Model

|Objects| Properties | Messages | Context | Output
|----------|-------------|---------------|---------|---------
|image  |pixelgrid@array|             |            |image['O']@array 
|            |pixel 'O' @str     |                       |             |  
|            | colour 'C' @str             |clearTable       |             |image['O']@array
|            | L @str              |changeColour |             |image['C']@array       
|            | V@str              |changeColour |change vertical rows of array|image['C']@array      
|            | H@str              |changeColour |change horizontal rows of array|image['C']@array  
|            |S@str                |displayImage  |             |image['C']@array  
|            |X@str               |exit                  |             |'program exited' @str        


# Usage

```

```  

# Inspiration

[Approach for creating nested array](https://github.com/digital-futures-academy/bitmap-editor-challenge/pull/1/commits/b4c3ca6f971adae674b4681d3d92433a83137c6a)
https://graphics.fandom.com/wiki/Bitmap_graphics_editor

https://rowanmanning.com/posts/writing-a-friendly-readme/ 