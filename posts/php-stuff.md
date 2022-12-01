---
title: 'Important and handy PHP code snippets'
metaTitle: 'From colorful var-dumps to array manipulation'
metaDesc: 'From colorful var-dumps to array manipulation'
socialImage: images/23-09-2022.jpg
date: '2022-12-01'
tags:
  - code
  - php
  - post
---
# Important and handy PHP code snippets
## From colorful var-dumps to array manipulation
### Make var dump look pretty
```php
highlight_string("<?php\n\$data =\n" . var_export($data, true) . ";\n?>");
```
More stuff to come...