# Contributing to Unigram
Please take a moment to review this document in order to make the contribution process easy and effective for everyone involved.

Following these guidelines helps to communicate that you respect the time of the developers managing and developing this open source project. In return, they should reciprocate that respect in addressing your issue or assessing patches and features.

## Using the issue tracker
The [issue tracker](https://github.com/UnigramDev/unigram.me/issues) is the preferred channel for [bug reports](#bug-reports), [features requests](#feature-requests) and [submitting pull requests](#pull-requests), but please respect the following restrictions:

* Please **do not** derail or troll issues. Keep the discussion on topic and respect the opinions of others.

* Please **do not** post comments consisting solely of "+1" or "👍". Use [GitHub's "reactions" feature](https://github.com/blog/2119-add-reactions-to-pull-requests-issues-and-comments) instead. We reserve the right to delete comments which violate this rule.

## Bug reports
A bug is a _demonstrable problem_ that is caused by the code in the repository. Good bug reports are extremely helpful, so thanks!

Guidelines for bug reports:

* Use the GitHub issue search — check if the issue has already been reported.
* Check if the issue has been fixed — try to reproduce it using the latest available build.
* Isolate the problem — ideally create a reproducible scenario and a live example.

A good bug report shouldn't leave others needing to chase you up for more information. Please try to be as detailed as possible in your report. What is your environment? What steps will reproduce the issue? What device(s). browser and OS experience the problem? Do other devices show the bug differently? What would you expect to be the outcome? All these details will help people to fix any potential bugs.

Example:

>Short and descriptive example bug report title
>
>A summary of the issue and the browser/OS version/device/screen size in which it occurs. If suitable, include the steps required to reproduce the bug.
>
>1. This is the first step
>2. This is the second step
>3. Further steps, etc.
>
>- a link to the reduced test case (GIF, video, screenshot, etc)
>
>Any other information you want to share that is relevant to the issue being reported. This might include the lines of code that you have identified as causing the bug, and potential solutions (and your opinions on their merits).

## Feature requests
Feature requests are welcome, but before opening a feature request, please take a moment to find out whether your idea fits with the scope and aims of this website. It's up to you to make a strong case to convince the project's developers of the merits of this feature. Please provide as much detail and context as possible.

## Pull requests
**Please ask first** before embarking on any significant pull request (e.g. implementing features, refactoring code), otherwise you risk spending a lot of time working on something that the project's developers might not want to merge into the project. For this, you can do so by joining the official [Unigram Insiders](https://t.me/joinchat/AAAAAD851oqVwhp9oy9WbQ) group and talking with the developers.

About the code, there are some conventions to consider:

#### Versioning
The projects follows for the most part [Semantic Versioning](http://semver.org/) with a slightly different interpretation since a website differs in use and behaviour from API versioning:

* MAJOR version is incremented when most part of the entirity of the website is heavily modified. Some example are complete design change or when the page organization is changed. These changes can _break_ the user's usual paths to reach information as now he might need to operate differently to reach the same information.
* MINOR is incremented when new features are added that don't break the rest of the UX. A valid example would be adding a new page or a new section to an existing page.
* PATCH is incremented when bug fixes are applied or when new verbose is added to already existing pages and sections.

### Syntax
All HTML and CSS should conform to the [Code Guide](http://codeguide.co/), maintained by [Mark Otto](https://github.com/mdo).

Other files are encouraged to conform to the following rules:
* Indentation: 2 spaces
* Comments: use `/* comment */`

### Documentation
The use of JSDoc is highly encouraged to describe files, methods and classes.


## License
By contributing your code, you agree to license your contribution under the [MIT License](https://github.com/UnigramDev/unigram.me/blob/v2/LICENSE). 