# Tailwind css

Utility-first Css framework

A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.


# Set-up for Using Tailwind css 
$cd 06-tailwind
$ npm install tailwindcss @tailwindcss/vite
go to vite.config.js and add below line.
import tailwindcss from '@tailwindcss/vite'

in pluggins add tailwindcss()
plugins: [react(), tailwindcss()],

in index.css , we will have only one line
@import "tailwindcss";

Here you go .. you can use tailwind css anywhere