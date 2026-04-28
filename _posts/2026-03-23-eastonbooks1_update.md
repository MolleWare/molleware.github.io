---
layout: post
title: Updating Squareup auto variation name generation after website update.
date: 2025-03-26 14:24:00
description: description
tags: code automation web-development
categories: default
---
## Situation :
This monday the squarup website had new updates related to new ways of inserting items on their platform.
This update resulting in changing the structure of the DOM and consequently breaking my plugin.

## Task :
The objective of this step is 1 to fix the plugin.
2 to document my process to hopefully help me with this step next time I or someone else needs to do it.

## Initial steps :
Look what symbols have been removed and are blocking the good process of my plugin.
`data-test-variation-name=""` : this was the symbol I was using to locate the input I would insert the variation name in.
`[class="advanced-categorization__category-list"]'` : this one was for grabing the variation name.
Both of these symbols where removed in this new version forcing me to find new ways of grabing and inserting the data.

**side note:** I was still verry interested in keeping the "Dirty Field" issue because it actually saved time when mis clicking we would not delete the input. and we could still make changes without changing the variation name.

### Additional information
In the querySelector the use of "[]" allows me to grab any unique part of the html file. That way I am not dependent of a Class or an Id.

### Research of new symbols
[I will add more info on how I found them after writing myself notes at work].
Get variation name was `placeholder="Such as a size"`.
and to write the new variation name I used this `class="_name_d8c7fc7"`.

### Minor changes in the structure of the section used to read category name.
The category name was no longer in a span so I removed `.firstElementChild`.

## New Code Snippet:
```javascript
var category_name = '';

// Function to apply your script
function applyScript() {

  // add prefix
  const emberActionElement = document.querySelector('[placeholder="Such as a size"]');
  if (emberActionElement) {
    console.log('set value');
    if (category_name) {
      emberActionElement.setAttribute('value', 'Eastons Books - ' + category_name);
      category_name = '';
    }
  }

  // add category
  if( category_name == '') {
    const categoryElement = document.querySelector('[class="_name_d8c7fc7"]');
    if (categoryElement) {
        category_name = categoryElement.textContent;
        console.log('category set to: ' + category_name);
    }
  }
}

// Run the script initially
applyScript();

// Set up a MutationObserver to re-run the script when the DOM changes
const observer = new MutationObserver((mutations) => {
  console.log('DOM changed. Reapplying script...');
  applyScript();
});

// Start observing the document body for changes
observer.observe(document.body, {
  childList: true,    // Watch for added/removed elements
  subtree: true       // Watch all descendants
});

```
[github-repo](https://github.com/MolleWare/Squareup_auto_variation_naming)