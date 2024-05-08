import { keymap } from '@codemirror/view';
import { indentWithTab } from '@codemirror/commands';
import { javascript } from '@codemirror/lang-javascript';
import { html } from '@codemirror/lang-html';
import { markdown } from '@codemirror/lang-markdown';

import { BASIC_SETUP, EditorView, EditorState } from './editor-basic-setup';
import { THEME, HIGHTLIGHT_STYLE } from './editor-theme';

import type { Extension } from '@codemirror/state';

const doc = `\
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Website</title>
    <link rel="stylesheet" href="./style.css">
    <link rel="icon" href="./favicon.ico" type="image/x-icon">
  </head>
  <body>
    <main>
        <h1>Portfolio Adrian Martinez</h1>  
    </main>
	<script src="index.js"></script>
  </body>
</html>
`;

export default (parentEl: HTMLElement, extentions?: Extension) => {
  EditorState.readOnly.of(true);
  return new EditorView({
    state: EditorState.create({
      doc,
      extensions: [
        BASIC_SETUP,
        THEME,
        HIGHTLIGHT_STYLE,
        keymap.of([indentWithTab]),
        javascript({
          typescript: true,
        }),
      ].concat(extentions),
    }),
    parent: parentEl,
  });
};
