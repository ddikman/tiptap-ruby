<template>
  <editor-content :editor="editor" />
</template>

<script  lang="ts">
import { defineComponent } from 'vue';
import { Editor, EditorContent } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';

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
      content: '<p>I’m running tiptap with Vue.js. 🎉</p>',
      extensions: [
        StarterKit,
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
