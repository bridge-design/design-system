"use strict";(self.webpackChunk_bridge_the_gap_design_system=self.webpackChunk_bridge_the_gap_design_system||[]).push([[42],{"./src/prose.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:()=>__page,default:()=>prose_stories});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({p:"p",em:"em",blockquote:"blockquote",code:"code",pre:"pre",a:"a",hr:"hr",h2:"h2",strong:"strong",ol:"ol",li:"li",h3:"h3",ul:"ul",h4:"h4"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{className:"lead",children:(0,jsx_runtime.jsx)(_components.p,{children:"Until now, trying to style an article, document, or blog post with Tailwind has been a tedious\ntask that required a keen eye for typography and a lot of complex custom CSS."})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["By default, Tailwind removes all of the default browser styling from paragraphs, headings, lists and more. This ends up being really useful for building application UIs because you spend less time undoing user-agent styles, but when you ",(0,jsx_runtime.jsx)(_components.em,{children:"really are"})," just trying to style some content that came from a rich-text editor in a CMS or a markdown file, it can be surprising and unintuitive."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"We get lots of complaints about it actually, with people regularly asking us things like:"}),"\n",(0,jsx_runtime.jsxs)(_components.blockquote,{children:["\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Why is Tailwind removing the default styles on my ",(0,jsx_runtime.jsx)(_components.code,{children:"h1"})," elements? How do I disable this? What do you mean I lose all the other base styles too?"]}),"\n"]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["We hear you, but we're not convinced that simply disabling our base styles is what you really want. You don't want to have to remove annoying margins every time you use a ",(0,jsx_runtime.jsx)(_components.code,{children:"p"})," element in a piece of your dashboard UI. And I doubt you really want your blog posts to use the user-agent styles either — you want them to look ",(0,jsx_runtime.jsx)(_components.em,{children:"awesome"}),", not awful."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The ",(0,jsx_runtime.jsx)(_components.code,{children:"@tailwindcss/typography"})," plugin is our attempt to give you what you ",(0,jsx_runtime.jsx)(_components.em,{children:"actually"})," want, without any of the downsides of doing something stupid like disabling our base styles."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["It adds a new ",(0,jsx_runtime.jsx)(_components.code,{children:"prose"})," class that you can slap on any block of vanilla HTML content and turn it into a beautiful, well-formatted document:"]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-html",children:'<article class="prose">\n  <h1>Garlic bread with cheese: What the science tells us</h1>\n  <p>\n    For years parents have espoused the health benefits of eating garlic bread with cheese to their\n    children, with the food earning such an iconic status in our culture that kids will often dress\n    up as warm, cheesy loaf for Halloween.\n  </p>\n  <p>\n    But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases\n    springing up around the country.\n  </p>\n  \x3c!-- ... --\x3e\n</article>\n'})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["For more information about how to use the plugin and the features it includes, ",(0,jsx_runtime.jsx)(_components.a,{href:"https://github.com/tailwindcss/typography/blob/master/README.md",target:"_blank",rel:"nofollow noopener noreferrer",children:"read the documentation"}),"."]}),"\n",(0,jsx_runtime.jsx)(_components.hr,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"what-to-expect-from-here-on-out",children:"What to expect from here on out"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["What follows from here is just a bunch of absolute nonsense I've written to dogfood the plugin itself. It includes every sensible typographic element I could think of, like ",(0,jsx_runtime.jsx)(_components.strong,{children:"bold text"}),", unordered lists, ordered lists, code blocks, block quotes, ",(0,jsx_runtime.jsx)(_components.em,{children:"and even italics"}),"."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"It's important to cover all of these use cases for a few reasons:"}),"\n",(0,jsx_runtime.jsxs)(_components.ol,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"We want everything to look good out of the box."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"Really just the first reason, that's the whole point of the plugin."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"Here's a third pretend reason though a list with three items looks more realistic than a list with two items."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Now we're going to try out another header style."}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"typography-should-be-easy",children:"Typography should be easy"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"So that's a header for you — with any luck if we've done our job correctly that will look pretty reasonable."}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Something a wise person once told me about typography is:"}),"\n",(0,jsx_runtime.jsxs)(_components.blockquote,{children:["\n",(0,jsx_runtime.jsx)(_components.p,{children:"Typography is pretty important if you don't want your stuff to look like trash. Make it good then it won't be bad."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"It's probably important that images look okay here by default as well:"}),"\n",(0,jsx_runtime.jsxs)("figure",{children:[(0,jsx_runtime.jsx)("img",{src:"https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",alt:""}),(0,jsx_runtime.jsx)("figcaption",{children:(0,jsx_runtime.jsx)(_components.p,{children:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of\nclassical Latin literature from 45 BC, making it over 2000 years old."})})]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Now I'm going to show you an example of an unordered list to make sure that looks good, too:"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"So here is the first item in this list."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"In this example we're keeping the items short."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"Later, we'll use longer, more complex list items."}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"And that's the end of this section."}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"what-if-we-stack-headings",children:"What if we stack headings?"}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"we-should-make-sure-that-looks-good-too",children:"We should make sure that looks good, too."}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Sometimes you have headings directly underneath each other. In those cases you often have to undo the top margin on the second heading because it usually looks better for the headings to be closer together than a paragraph followed by a heading should be."}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"when-a-heading-comes-after-a-paragraph-",children:"When a heading comes after a paragraph …"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"When a heading comes after a paragraph, we need a bit more space, like I already mentioned above. Now let's see what a more complex list would look like."}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsxs)(_components.li,{children:["\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"I often do this thing where list items have headings."})}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"For some reason I think this looks cool which is unfortunate because it's pretty annoying to get the styles right."}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"I often have two or three paragraphs in these list items, too, so the hard part is getting the spacing between the paragraphs, list item heading, and separate list items to all make sense. Pretty tough honestly, you could make a strong argument that you just shouldn't write this way."}),"\n"]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:["\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"Since this is a list, I need at least two items."})}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"I explained what I'm doing already in the previous list item, but a list wouldn't be a list if it only had one item, and we really want this to look realistic. That's why I've added this second list item so I actually have something to look at when writing the styles."}),"\n"]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:["\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"It's not a bad idea to add a third item either."})}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"I think it probably would've been fine to just use two items but three is definitely not worse, and since I seem to be having no trouble making up arbitrary things to type, I might as well include it."}),"\n"]}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"After this sort of list I usually have a closing statement or paragraph, because it kinda looks weird jumping right to a heading."}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"code-should-look-okay-by-default",children:"Code should look okay by default."}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["I think most people are going to use ",(0,jsx_runtime.jsx)(_components.a,{href:"https://highlightjs.org/",target:"_blank",rel:"nofollow noopener noreferrer",children:"highlight.js"})," or ",(0,jsx_runtime.jsx)(_components.a,{href:"https://prismjs.com/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Prism"})," or something if they want to style their code blocks but it wouldn't hurt to make them look ",(0,jsx_runtime.jsx)(_components.em,{children:"okay"})," out of the box, even with no syntax highlighting."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Here's what a default ",(0,jsx_runtime.jsx)(_components.code,{children:"tailwind.config.js"})," file looks like at the time of writing:"]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-js",children:"module.exports = {\n  content: [],\n  theme: {\n    extend: {},\n  },\n  plugins: [],\n}\n"})}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Hopefully that looks good enough to you."}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"what-about-nested-lists",children:"What about nested lists?"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Nested lists basically always look bad which is why editors like Medium don't even let you do it, but I guess since some of you goofballs are going to do it we have to carry the burden of at least making it work."}),"\n",(0,jsx_runtime.jsxs)(_components.ol,{children:["\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Nested lists are rarely a good idea."}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:'You might feel like you are being really "organized" or something but you are just creating a gross shape on the screen that is hard to read.'}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"Nested navigation in UIs is a bad idea too, keep things as flat as possible."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"Nesting tons of folders in your source code is also not helpful."}),"\n"]}),"\n"]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Since we need to have more items, here's another one."}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"I'm not sure if we'll bother styling more than two levels deep."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"Two is already too much, three is guaranteed to be a bad idea."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"If you nest four levels deep you belong in prison."}),"\n"]}),"\n"]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Two items isn't really a list, three is good though."}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:"Again please don't nest lists if you want people to actually read your content."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"Nobody wants to look at this."}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"I'm upset that we even have to bother styling this."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["The most annoying thing about lists in Markdown is that ",(0,jsx_runtime.jsx)(_components.code,{children:"<li>"})," elements aren't given a child ",(0,jsx_runtime.jsx)(_components.code,{children:"<p>"})," tag unless there are multiple paragraphs in the list item. That means I have to worry about styling that annoying situation too."]}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsxs)(_components.li,{children:["\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"For example, here's another nested list."})}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"But this time with a second paragraph."}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsxs)(_components.li,{children:["These list items won't have ",(0,jsx_runtime.jsx)(_components.code,{children:"<p>"})," tags"]}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:"Because they are only one line each"}),"\n"]}),"\n"]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:["\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.strong,{children:"But in this second top-level list item, they will."})}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"This is especially annoying because of the spacing on this paragraph."}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsxs)(_components.li,{children:["\n",(0,jsx_runtime.jsxs)(_components.p,{children:["As you can see here, because I've added a second line, this list item now has a ",(0,jsx_runtime.jsx)(_components.code,{children:"<p>"})," tag."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"This is the second line I'm talking about by the way."}),"\n"]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:["\n",(0,jsx_runtime.jsx)(_components.p,{children:"Finally here's another list item so it's more like a list."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,jsx_runtime.jsxs)(_components.li,{children:["\n",(0,jsx_runtime.jsx)(_components.p,{children:"A closing list item, but with no nested list, because why not?"}),"\n"]}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"And finally a sentence to close off this section."}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"there-are-other-elements-we-need-to-style",children:"There are other elements we need to style"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["I almost forgot to mention links, like ",(0,jsx_runtime.jsx)(_components.a,{href:"https://tailwindcss.com",target:"_blank",rel:"nofollow noopener noreferrer",children:"this link to the Tailwind CSS website"}),". We almost made them blue but that's so yesterday, so we went with dark gray, feels edgier."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"We even included table styles, check it out:"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:'| Wrestler                | Origin       | Finisher           |\n| ----------------------- | ------------ | ------------------ |\n| Bret "The Hitman" Hart  | Calgary, AB  | Sharpshooter       |\n| Stone Cold Steve Austin | Austin, TX   | Stone Cold Stunner |\n| Randy Savage            | Sarasota, FL | Elbow Drop         |\n| Vader                   | Boulder, CO  | Vader Bomb         |\n| Razor Ramon             | Chuluota, FL | Razor\'s Edge       |'}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["We also need to make sure inline code looks good, like if I wanted to talk about ",(0,jsx_runtime.jsx)(_components.code,{children:"<span>"})," elements or tell you the good news about ",(0,jsx_runtime.jsx)(_components.code,{children:"@tailwindcss/typography"}),"."]}),"\n",(0,jsx_runtime.jsxs)(_components.h3,{id:"sometimes-i-even-use-code-in-headings",children:["Sometimes I even use ",(0,jsx_runtime.jsx)(_components.code,{children:"code"})," in headings"]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Even though it's probably a bad idea, and historically I've had a hard time making it look good. This ",(0,jsx_runtime.jsx)(_components.em,{children:'"wrap the code blocks in backticks"'})," trick works pretty well though really."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Another thing I've done in the past is put a ",(0,jsx_runtime.jsx)(_components.code,{children:"code"})," tag inside of a link, like if I wanted to tell you about the ",(0,jsx_runtime.jsx)(_components.a,{href:"https://github.com/tailwindcss/docs",target:"_blank",rel:"nofollow noopener noreferrer",children:(0,jsx_runtime.jsx)(_components.code,{children:"tailwindcss/docs"})})," repository. I don't love that there is an underline below the backticks but it is absolutely not worth the madness it would require to avoid it."]}),"\n",(0,jsx_runtime.jsxs)(_components.h4,{id:"we-havent-used-an-h4-yet",children:["We haven't used an ",(0,jsx_runtime.jsx)(_components.code,{children:"h4"})," yet"]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["But now we have. Please don't use ",(0,jsx_runtime.jsx)(_components.code,{children:"h5"})," or ",(0,jsx_runtime.jsx)(_components.code,{children:"h6"})," in your content, Medium only supports two heading levels for a reason, you animals. I honestly considered using a ",(0,jsx_runtime.jsx)(_components.code,{children:"before"})," pseudo-element to scream at you if you use an ",(0,jsx_runtime.jsx)(_components.code,{children:"h5"})," or ",(0,jsx_runtime.jsx)(_components.code,{children:"h6"}),"."]}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["We don't style them at all out of the box because ",(0,jsx_runtime.jsx)(_components.code,{children:"h4"})," elements are already so small that they are the same size as the body copy. What are we supposed to do with an ",(0,jsx_runtime.jsx)(_components.code,{children:"h5"}),", make it ",(0,jsx_runtime.jsx)(_components.em,{children:"smaller"})," than the body copy? No thanks."]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"we-still-need-to-think-about-stacked-headings-though",children:"We still need to think about stacked headings though."}),"\n",(0,jsx_runtime.jsxs)(_components.h4,{id:"lets-make-sure-we-dont-screw-that-up-with-h4-elements-either",children:["Let's make sure we don't screw that up with ",(0,jsx_runtime.jsx)(_components.code,{children:"h4"})," elements, either."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Phew, with any luck we have styled the headings above this text and they look pretty good."}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Let's add a closing paragraph here so things end with a decently sized block of text. I can't explain why I want things to end that way but I have to assume it's because I think things will look weird or unbalanced if there is a heading too close to the end of the document."}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"What I've written here is probably long enough, but adding this final sentence can't hurt."})]})}const markdownSample=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)};function prose_stories_createMdxContent(props){const _components=Object.assign({h2:"h2",p:"p",code:"code"},(0,lib.ah)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Typography with Tailwind plugin"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"typography-with-tailwind-typography-plugin",children:"Typography with Tailwind Typography plugin"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["With Tailwind typography, all text wrapped with ",(0,jsx_runtime.jsx)(_components.code,{children:".prose"})," class, will get custom styles, predefined in config. Below is sample text and styling."]}),"\n",(0,jsx_runtime.jsx)(dist.Xz,{mdxSource:'<div className="px-4 mx-auto my-8 prose text-justify"><MDXProvider><MarkdownSample /></MDXProvider></div>',children:(0,jsx_runtime.jsx)("div",{className:"px-4 mx-auto my-8 prose text-justify",children:(0,jsx_runtime.jsx)(lib.Zo,{children:(0,jsx_runtime.jsx)(markdownSample,{})})})})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Typography with Tailwind plugin",tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function prose_stories_MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(prose_stories_createMdxContent,{...props})}):prose_stories_createMdxContent(props)}};const prose_stories=componentMeta}}]);