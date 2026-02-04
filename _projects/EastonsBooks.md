---
layout: page
title: Squareup Item Variation Auto-Namer
description: Browser plugin to automate naming of item variations in Squareup.
img: assets/img/Square-Logo.png
importance: 1
category: Side Projects
related_publications: false
---

## Task : 
**Automating the naming of item variations in Squareup for my part time job**
## Context:
Square’s inventory system is optimized for items with multiple standardized variations (e.g. size, color, condition).  
In a used bookstore context, this isnt efficient because most items exist as single, unique instances, but Square still requires variation-level metadata to be entered manually.

As a result, adding inventory becomes a highly repetitive, error-prone workflow dominated by:
- Manual text entry
- Copy/paste operations
- Repeated reconstruction of identical variation names

This friction compounds linearly with inventory volume and directly impacts throughput.

I encountered this problem while working part-time at a bookstore, where my primary responsibility was entering used books into Square for inventory tracking. Because most books existed as single copies, the variation system added overhead without providing meaningful value.

After reviewing Square’s available settings and workflows, no configuration existed that matched this use case. Any optimization would need to happen **outside** the product’s supported feature set.

## Constraints:
- No access to Square’s backend or APIs.
- I had little experience with web development.
- The plugin had to be easy to use and not require any extra steps from me.
- The plugin had to be reliable and work every time I needed it.

## Approach:
In order to solve this problem on one side I need to get the category of the book I was entering and on the other side I needed to find a way to insert that category into the variation name field along with a prefix.

I decided I could triger my code using an observer that would look for changes in the pages DOM tree and when it detected the category field it would copy it to a local variable and keep it for later use.

Then I could trigger another function when the variation name field was added to the DOM tree and insert the prefix along with the category I had saved earlier.

## Challenges:
- Finding the right event to trigger my code.
- Getting the category of the book I was entering.
- Inserting the category into the variation name field without overwriting any existing data.

## Outcome:
The final outcome was a browser plugin that would automatically insert the prefix and category into the variation name field whenever I was entering a new book. This significantly reduced the amount of manual work I had to do and made the process much more efficient.
I was able to enter books faster, with less errors and with less effort. Enabling me to dedicate my energy to other tasks in the bookstore.
I haven't done detailed studies of the time saved but I estimate that I can process at least 20% more books in the same amount of time now that I have this plugin.

## Implementation Details:
One interesting behavior I havent corrected yet is that in order for squarup to save the variation name field the user has to add or remove a character in the field after the automatic insertion of the prefix and category.\
This is because the field is not considered "dirty" by the interface until a user action is detected.\
For now I have been using this limitation as a feature because it allows me to review the inserted text before saving it and some times I am reviewing old entries and I don't want to overwrite the existing variation name.

## Future Work:
In the future I would like to explore the possibility of adding more features to the plugin such as automatically keeping track of sku book numbers and automatically inserting them into the item field when printing labels.\
This would further reduce the amount of manual work I have to do and make the process even more efficient.

## Posts:
- [Automating item insertion in Squareup for my part time job](/blog/2025/eastonbooks1/)
