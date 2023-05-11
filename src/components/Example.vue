<template>
  <editor-content :editor="editor" />
</template>

<script  lang="ts">
import { defineComponent } from 'vue';
import { Editor, EditorContent } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';
import { mergeAttributes, Mark } from '@tiptap/core';

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    ruby: {
      addRuby: () => ReturnType,
    }
  }
}

export const RubyReading = Mark.create<any>({
  name: 'rt',

  parseHTML() {
    return [
      { tag: 'rt' },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ['rt', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0];
  },
});

export const Ruby = Mark.create<any>({
  name: 'ruby',

  defaultOptions: {
    HTMLAttributes: {},
  },

  content: 'text*',

  parseHTML() {
    return [
      {
        tag: 'ruby',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ['ruby', HTMLAttributes, 0];
  },

  addKeyboardShortcuts() {
    return {
      'Mod-u': () => this.editor.commands.addRuby(),
    };
  },

  addCommands() {
    return {
      addRuby: () => ({ commands, editor }) => {
        const { from, to } = editor.state.selection;
        const text = editor.state.doc.textBetween(from, to, ' ');
        const placeholder = '???';
        const replacement = `<ruby>${text}<rt>${placeholder}</rt></ruby>`;
        commands.insertContent(replacement);

        // set selection on new furigana (which follows the text)
        return commands.setTextSelection({ from: to, to: to + placeholder.length });
      },
    };
  },

});

interface ViewModel {
  editor?: Editor;
}

export default defineComponent({
  components: {
    EditorContent,
  },
  data() {
    return { editor: undefined } as ViewModel;
  },
  mounted() {
    this.editor = new Editor({
      content: '<p>これは振り仮名の<ruby>例<rt>れい</rt></ruby>です</p>',
      extensions: [
        StarterKit,
        Ruby,
        RubyReading,
      ],
    });
  },
  beforeUnmount() {
    if (this.editor) {
      this.editor.destroy();
    }
  },
});
</script>
