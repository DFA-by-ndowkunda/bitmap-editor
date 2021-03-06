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
node index.js
```

## Running Tests
This project uses the [jasmine](https://jasmine.github.io/) framework. 
```
$ npm test
# or
$ npx jasmine path/to/spec
```

## Linting code
This project uses eslint to format code
```
npx eslint --fix
```
 
# Problem Approach 

## Acceptance Criteria

```

I M N - Create a new M x N image with all pixels coloured white (O).

C - Clears the table, setting all pixels to white (O).

L X Y C - Colours the pixel (X,Y) with colour C.

V X Y1 Y2 C - Draw a vertical segment of colour C in column X between rows Y1 and Y2 (inclusive).

H X1 X2 Y C - Draw a horizontal segment of colour C in row Y between columns X1 and X2 (inclusive).

S - Show the contents of the current image

X - Terminate the session"
```

## Functional Representation Domain Model

|Objects| Properties | Messages | Context | Output
|----------|-------------|---------------|---------|---------
|Image  |grid@array|             |creates image w/pixels 'O'           |image['O']@array 
|            |                   |                       |             |  
|            |                   |clear()      | resets all pixels in grid to 'O'            |image['O']@array
|            |          |colour() | changes pixel at (X,Y) to another colour            |image['C']@array        
|            |           |changeVertical() |change vertical rows of array to colour 'C' |image['C']@array      
|            |              |changeHorizontal() |change horizontal rows of array to colour 'C'|image['C']@array  
|            |               |show()  | displays current image            |image['C']@array  

# Usage
After running ``` node index.js ```

 ``` I M N ``` will display contents of M x N array representing white pixels with 'O'. 

 ![white pixels represented by 3 x 3 array](/media/BITMAP-USAGE-1.png)

``` L X Y C``` will display contents of M x N array representing a colour change of pixel at X,Y with 'C'. 

![pixel colour change represented in 3 x 3 array](/media/BITMAP-USAGE-2.png)

``` V X Y1 Y2 C && S``` will display contents of M x N array representing colour change of pixels in vertical with 'C'. 

![vertical colour change represented in 3 x 3 array](/media/BITMAP-USAGE-3.png)

``` H Y X1 X2 C && S``` will display contents of M x N array representing colour change of pixels in horizontal with 'C'. 

![horizontal colour change represented in 3 x 3 array](/media/BITMAP-USAGE-4.png)

``` C && S ``` will clear any changes to M x N array representing white pixels with 'O'. 

![reset of image](/media/BITMAP-USAGE-5.png)

# Inspiration

[Approach for creating nested array](https://github.com/digital-futures-academy/bitmap-editor-challenge/pull/1/commits/b4c3ca6f971adae674b4681d3d92433a83137c6a)

[Bitmap Editor wiki](https://graphics.fandom.com/wiki/Bitmap_graphics_editor)

[Readme format](https://rowanmanning.com/posts/writing-a-friendly-readme/)