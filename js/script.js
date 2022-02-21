const updatePreview = () => {
    let previewElement = document.getElementById("preview");
    let editorValue = document.getElementById("editor").value;
    let markedUpHTML = marked.parse(editorValue);
    previewElement.innerHTML = markedUpHTML;
  }

  function setDefault() {
    // console.log('defaultLoaded')
    let defaultText = `\
![Logo](images/logo.png)
# Welcome to my Markdown Previewer!
______
## This is a sub-heading...
______
**And here's some other cool stuff:**
<br><br>
Heres some code, <span style="background-color:white; padding:2px 4px">\`\`<div></div>\`\`</span>, between 2 backticks

<div style="background-color:white; padding-top:10px; padding-bottom:7px">

        // this is a multi-line code:

        function anotherExample(firstLine, lastLine) {
          if (firstLine == '' && lastLine == '') {
            return multiLineCodeBlock;
          }          
        }
</div>
<br>

You can also make text **bold**... whoa!
<br>
Or *italic*
<br>
Or...wait for it...__*both!*__
<br>
And feel free to go crazy ~~crossing stuff out.~~
<br><br>
There's also [Links](https://www.markdownguide.org/basic-syntax/3) and
<br>
  > Block Quotes!
<br>
And if you want to get really crazy, even tables!
<br>


Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.
<br>

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.
<br>
1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

<img src="images/computer-image.jpg" class="img-fluid" style="padding: 5px" />
`;
    let editorField = document.getElementById("editor");
    let previewElement = document.getElementById("preview");
    editorField.value = defaultText;
    previewElement.innerHTML= marked.parse(defaultText);
  }