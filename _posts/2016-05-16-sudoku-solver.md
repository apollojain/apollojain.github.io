---
layout: post
title: "Sudoku Solver"
type: "project"
date: 2016-05-16
href: "https://github.com/apollojain/sudoku_solver"
main: false
---

This Sudoku Solver uses OpenCV2 and PyTesseract to process a picture of a Sudoku puzzle, turn it into a 2d array readable by a sudoku solving algorithm, and then output a pdf that contains a solved version of the same puzzle. Unfortunately, while PyTesseract is a great OCR library, it is fairly limited in its capabilities because of the general difficulty of OCR. Thus, it's pretty picky. As an alternative, you can simply feed a text file with a "list of lists" format of your Sudoku puzzle, and the solver can handle this just fine as well. 