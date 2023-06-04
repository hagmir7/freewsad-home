import 'prosemirror-view/style/prosemirror.css';

import React from 'react';
// import {schema} from 'prosemirror-schema-basic';
import {ProseMirror} from 'use-prosemirror';

export function MyEditor() {
    // const [state, setState] = useProseMirror({schema});
    return <ProseMirror  />;
};