/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PostDetailQueryVariables = {||};
export type PostDetailQueryResponse = {|
  +posts: $ReadOnlyArray<{|
    +title: string,
    +content: string,
    +tag: string,
    +link: string,
  |}>
|};
export type PostDetailQuery = {|
  variables: PostDetailQueryVariables,
  response: PostDetailQueryResponse,
|};
*/


/*
query PostDetailQuery {
  posts {
    title
    content
    tag
    link
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Post",
    "kind": "LinkedField",
    "name": "posts",
    "plural": true,
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
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "PostDetailQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "PostDetailQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "0532dd386e7329522f8247f0708dd0bc",
    "id": null,
    "metadata": {},
    "name": "PostDetailQuery",
    "operationKind": "query",
    "text": "query PostDetailQuery {\n  posts {\n    title\n    content\n    tag\n    link\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '309b1f002456072c2fde68378bb2611d';

module.exports = node;
