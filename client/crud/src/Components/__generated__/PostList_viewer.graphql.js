/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type PostList_viewer$ref: FragmentReference;
declare export opaque type PostList_viewer$fragmentType: PostList_viewer$ref;
export type PostList_viewer = {|
  +title: string,
  +content: string,
  +tag: string,
  +link: string,
  +$refType: PostList_viewer$ref,
|};
export type PostList_viewer$data = PostList_viewer;
export type PostList_viewer$key = {
  +$data?: PostList_viewer$data,
  +$fragmentRefs: PostList_viewer$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PostList_viewer",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "content",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "tag",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "link",
      "storageKey": null
    }
  ],
  "type": "Post",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '7d22f3d18af0946ac1ff629acfcf995d';

module.exports = node;
