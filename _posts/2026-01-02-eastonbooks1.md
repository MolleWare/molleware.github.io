---
layout: post
title: Automating item insertion in Squareup for my part time job
date: 2025-03-26 14:24:00
description: description
tags: code automation web-development
categories: default
---
## Task: Automating the naming of item variations in Squareup for my part time job

## Scope of the Work:
When adding used books to Square's inventory system, every item requires a variation name to be manually entered. For a used bookstore where most items are single copies, this adds unnecessary friction to the data entry workflow.

The goal: **Automatically populate the variation name field with a standardized format** (`Eastons Books - [Category]`) whenever I add a new book to inventory.

## Initial Assumptions:
- Square's UI would render predictably enough to be reliably targeted by DOM selectors
- The category information would be available in the DOM before the variation name field needs to be populated
- A mutation observer approach would be responsive enough for real-time field population

## Problems Encountered:

**1. Timing & DOM Detection**
Square's interface is dynamically rendered. Fields don't exist until they're needed, and their appearance isn't immediately predictable. I needed a way to detect when new fields were added to the DOM and react accordingly.

**2. Extracting Category Information**
The category isn't stored in a simple input field. It's rendered as text inside a nested element structure (`[class="advanced-categorization__category-list"]`). I had to traverse the DOM to find the first child element and extract its text content.

**3. The "Dirty" Field Problem**
Square's form validation checks whether a field has been modified before allowing it to be saved. Simply setting the field's value programmatically doesn't trigger this "dirty" state, so the variation name wouldn't be saved. This required manual intervention. I'd need to add or remove a character after the automatic insertion for it to save correctly.

## Design Decisions & Tradeoffs:

**1. MutationObserver for Real-Time Detection**
I chose to use a `MutationObserver` that watches the entire document body for DOM changes (`childList: true, subtree: true`). This approach:
- Catches the moment new fields appear
- Works with Square's dynamic rendering without needing to know the exact timing
- Trades performance for reliability (observing the entire body could be expensive, but the overhead is minimal for this use case)

**2. Global Variable for State Management**
I used a module-level variable (`category_name`) to store the category between the two execution cycles:
- First cycle: Capture the category when it appears
- Second cycle: Insert it into the variation name field when that field appears
- This is simple but relies on the category always being set before the variation name field is rendered
- leads to edge cases if the user has multiple tabs open at the same time.

**3. Living with the "Dirty" Field Limitation**
Rather than trying to force Square's form validation to recognize programmatic changes (which could be fragile), I accepted the limitation as a feature: **it forces me to review the auto-inserted text before saving**, preventing accidental overwrites of existing variation names.

## Current Status:
The plugin is actively used and reduces manual data entry by approximately 20%, enabling faster inventory processing with fewer errors.

The implementation works reliably in production, though it requires one manual action per entry (adding/removing a character to mark the field as "dirty" and trigger save validation).

## Next Steps:
Future enhancements could include:
- **Automatic field validation**: Trigger Square's form dirty-state detection programmatically (e.g., via `dispatchEvent`) instead of relying on manual intervention
- **SKU automation**: Extract SKU numbers and populate them in the item field of the label printing page for easy label generation

## Implementation Highlights:

The core logic is straightforward:
1. **MutationObserver** listens for all DOM changes
2. **On each mutation**, run `applyScript()`:
   - If the variation name field exists and hasn't been filled yet, insert the category
   - If the category hasn't been captured yet, extract it from the DOM
3. **State management** via a global variable ensures the category persists across multiple script executions

This demonstrates a practical approach to browser automation: sometimes the simplest solution (observing the entire DOM and reacting to changes) is more reliable than trying to predict exact timing or hook into specific lifecycle events.


## Code Snippet:
```javascript

var category_name = '';

// Function to apply your script
function applyScript() {

  // add prefix
  const emberActionElement = document.querySelector('[data-test-variation-name=""]');
  if (emberActionElement && emberActionElement.getAttribute('value') == 'Regular') {
    console.log('set value');
    if (category_name) {
      emberActionElement.setAttribute('value', 'Eastons Books - ' + category_name);
      category_name = '';
    }
  }

  // add category
  if( category_name == '') {
    const categoryElement = document.querySelector('[class="advanced-categorization__category-list"]');
    if (categoryElement) {
        category_name = categoryElement.firstElementChild.textContent;
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
