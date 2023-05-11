<template>
  <p>
    The following text is editable. You can select and edit both the text and the furigana readings.
  </p>
  <div class="input-box">
    <Example />
  </div>

  <div>
    <p>Select text and click Cmd+U (Mac) or Ctrl+U (Win) to add furigana to any selection.</p>

    <p>
      <a href="https://github.com/ddikman/tiptap-ruby">GitHub</a>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Example from './components/Example.vue';

export default defineComponent({
  name: 'App',
  components: {
    Example,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.input-box {
  border: 1px solid gray; border-radius: 1rem; padding: 1rem;
  max-width: 90%;
}

.ProseMirror-focused {
  outline: none;
}
</style>
