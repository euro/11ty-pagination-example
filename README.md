# 11ty-pagination-example

By removing the following code block from gallery/index.njk:

```
eleventyComputed:
  permalink: "gallery/example-{{ pagination.pageNumber + 1 }}/index.html"
```

I am able to get the pagination working as expected. However I am not excited about the default pagination structure of the url's so Im leveraging eleventyPagination to try to get what I wanted.

Here's what happens with no permalink: Im stuck being on page 2 per my pagination but sitting in folder -1 in the url bar.

<img width="958" alt="Screenshot 2023-03-05 at 12 34 32 PM" src="https://user-images.githubusercontent.com/216262/222976493-c002371c-d2ba-45b3-b967-6b3e4cb161ce.png">
