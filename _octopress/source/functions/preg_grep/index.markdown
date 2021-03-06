---
layout: page
title: "JavaScript preg_grep function"
comments: true
sharing: true
footer: true
alias:
- /functions/view/preg_grep:785
- /functions/view/preg_grep
- /functions/view/785
- /functions/preg_grep:785
- /functions/785
---
<!-- Generated by Rakefile:build -->
A JavaScript equivalent of PHP's preg_grep

{% codeblock pcre/preg_grep.js lang:js https://raw.github.com/kvz/phpjs/master/functions/pcre/preg_grep.js raw on github %}
function preg_grep (pattern, input, flags) {
  // From: http://phpjs.org/functions
  // +   original by: Brett Zamir (http://brett-zamir.me)
  // %        note 1: If pass pattern as string, must escape backslashes, even for single quotes
  // %        note 2: The regular expression itself must be expressed JavaScript style
  // %        note 3: It is not recommended to submit the pattern as a string, as we may implement
  // %        note 3: parsing of PHP-style expressions (flags, etc.) in the future
  // *     example 1: var arr = [1, 4, 4.5, 3, 'a', 4.4];
  // *     example 1: preg_grep("/^(\\d+)?\\.\\d+$/", arr);
  // *     returns 1: {2: 4.5, 5: 4.4}

  var p = '';
  var retObj = {};
  var invert = (flags === 1 || flags === 'PREG_GREP_INVERT'); // Todo: put flags as number and do bitwise checks (at least if other flags allowable); see pathinfo()

  if (typeof pattern === 'string') {
    pattern = eval(pattern);
  }

  if (invert) {
    for (p in input) {
      if ((input[p] + '').search(pattern) === -1) {
        retObj[p] = input[p];
      }
    }
  } else {
    for (p in input) {
      if ((input[p] + '').search(pattern) !== -1) {
        retObj[p] = input[p];
      }
    }
  }

  return retObj;
}
{% endcodeblock %}

 - [Raw function on GitHub](https://github.com/kvz/phpjs/blob/master/functions/pcre/preg_grep.js)

Please note that php.js uses JavaScript objects as substitutes for PHP arrays, they are 
the closest match to this hashtable-like data structure. 

Please also note that php.js offers community built functions and goes by the 
[McDonald's Theory](https://medium.com/what-i-learned-building/9216e1c9da7d). We'll put online 
functions that are far from perfect, in the hopes to spark better contributions. 
Do you have one? Then please just: 

 - [Edit on GitHub](https://github.com/kvz/phpjs/edit/master/functions/pcre/preg_grep.js)

### Example 1
This code
{% codeblock lang:js example %}
var arr = [1, 4, 4.5, 3, 'a', 4.4];
preg_grep("/^(\\d+)?\\.\\d+$/", arr);
{% endcodeblock %}

Should return
{% codeblock lang:js returns %}
{2: 4.5, 5: 4.4}
{% endcodeblock %}


### Other PHP functions in the pcre extension
{% render_partial _includes/custom/pcre.html %}
