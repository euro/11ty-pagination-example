# 11ty-pagination-example

By removing the following code block from gallery/index.njk:

```
eleventyComputed:
  permalink: "gallery/example-{{ pagination.pageNumber + 1 }}/index.html"
```

I am able to get the pagination working as expected. However I am not excited about the default pagination structure of the url's so Im leveraging eleventyPagination to try to get what I wanted.

Here's what happens with no permalink:
