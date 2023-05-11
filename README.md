# tiptap-ruby

This project is an example of how to enable support for the `<ruby>` html tag in [TipTap](https://tiptap.dev/).

## Run

```
npm run serve
```

## How this works

In the [Example.vue](./src/components/Example.vue) file, you will find two new [TipTap Marks](https://tiptap.dev/api/marks), one for the `ruby` and one for the `rt` tag. These will parse the `<ruby>...<rt>..</rt></ruby>` tags accordingly.

In the `Ruby` mark, you will also find a shortcut binding to add the ruby.

## Example

The component binds `Mod+u`, for example `CMD+u` key to add a ruby tag. Once added, you can use the editor to modify the furigana as you would expect.

![Example of this in use](./example.gif)