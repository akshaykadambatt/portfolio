---
title: 'Adding Codemirror in vanilla javascript'
metaTitle: 'How to add an input box that highlight code using Codemirror'
metaDesc: 'How to add an input box that highlight code using Codemirror'
socialImage: images/23-09-2022.jpg
date: '2022-09-23'
tags:
  - code
  - vanilla-js
  - post
---
# Adding Codemirror in vanilla javascript
## How to add an input box that highlight code using Codemirror
Codemirror is a free library that highlights code in webpages on the fly. Here is a basic implementaion using a CDN to load Codemirror and highlight HTML markup in it.
```html
<!--Codemirror library-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/codemirror.min.js"></script>
<!--Codemirror's addon for highlighting the active line-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/addon/selection/active-line.min.js"></script>
<!--Codemirror's xml mode script-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/mode/xml/xml.min.js"></script>
<!--Codemirror's CSS files-->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/codemirror.min.css"/>
<!--Codemirror's CSS files for ayu-dark theme-->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/theme/ayu-dark.min.css"/>
<div class="editor-section">
    <div id="html-box"></div> <!--Editor goes here-->
    <textarea style="display:none" id="default-text" name="default-text">
        default text in the editor
    </textarea>
</div>
<script>
    //initialize Codemirror to #html-box
    var htmlCodeInstance = CodeMirror( 
        document.getElementById("html-box"), 
        {
            lineNumbers: true,
            tabSize: 4,
            mode: "xml", //For html highlighting
            theme: "ayu-dark",
            styleActiveLine: true
        }
    );
    //sets value of #default-text to the editor
    htmlCodeInstance.setValue( document.querySelector('#default-text').value ); 
    //Codemirror's change event listener
    htmlCodeInstance.on("change", function(){ 
        //Set the value of editor to #default-text
        document.querySelector('#default-text').value = htmlCodeInstance.getValue() 
    });
</script>
```

Place this snippet anywhere in your html and you'll get a editor with HTML highlight there. 