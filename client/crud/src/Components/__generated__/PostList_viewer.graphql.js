/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type Post_post$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type PostList_viewer$ref: FragmentReference;
declare export opaque type PostList_viewer$fragmentType: PostList_viewer$ref;
export type PostList_viewer = {|
  +$fragmentRefs: Post_post$ref,
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
      "args": null,
      "kind": "FragmentSpread",
      "name": "Post_post"
    }
  ],
  "type": "Post",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'ed0485b4f412201371c342b1fff15379';

module.exports = node;
