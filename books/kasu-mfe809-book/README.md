# MFE 809 Bookdown Course Book

**Financial System and the Practice of Banking in Nigeria**  
**Course Code:** MFE 809  
**Author:** Dr. John Nkom

## Source

Built from the supplied MFE 809 course outline and lecture notes.

## Render

From this directory in R:

```r
bookdown::render_book(
  "index.Rmd",
  output_format = "all",
  output_dir = "_output"
)
```

The generated HTML, PDF, EPUB, and Word files will be placed in `_output/` when the required rendering tools are installed.
