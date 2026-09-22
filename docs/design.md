# Design notes

## Purpose

A personal development notebook with a playable lab. The first screen should identify Jamie, explain what belongs here, and lead into something real. The audience includes other developers and curious visitors; the separate portfolio handles recruitment.

## Direction

Dark olive, pale ink, and one yellow-green accent. This carries the existing portfolio’s paper/olive relationship into a darker working surface. A wide editorial introduction gives way to a bordered lab bench, compact note rows, and a quieter current-focus column. Reading pages use a narrow measure and a small section index.

Public Sans gives text and headings a firm, unobtrusive shape. IBM Plex Mono is reserved for metadata. Georgia italic adds a small contrast on the homepage without another font download. Spacing follows roughly 8px increments, with larger gaps separating different kinds of content.

At small widths the introduction, bench, and note column stack into a deliberate reading order. All five navigation destinations stay visible. No hamburger, entrance animation, scroll manipulation, or hover-only control.

## References

- [Maggie Appleton](https://maggieappleton.com/) and [colophon](https://maggieappleton.com/colophon): make unfinished writing a legitimate content type.
- [Robin Sloan](https://www.robinsloan.com/) and [colophon](https://www.robinsloan.com/colophon/): a concise personal introduction, useful directories, and deliberate typography.
- [Lucas Pope](https://dukope.com/): put playable work, source, and development material near each other.
- [Josh W. Comeau](https://www.joshwcomeau.com/): use an interaction to explain something, rather than as background decoration.
- [Public Sans](https://github.com/uswds/public-sans) and [IBM Plex](https://www.ibm.com/plex/): restrained, open-source text and technical faces.

These supplied principles, not copied layouts. No unverified project images were used.

## Architecture

The site is small enough for a dependency-free build. Shared templates render complete HTML files. JavaScript is isolated to the spring page, and its model is shared by rendering and interaction. Native HTML details provides optional implementation information; a global command console would add little here.

The main trade-off is authoring longer entries in template strings. Markdown can be added when the amount of writing justifies it. The archive metadata is already separate from rendering.
