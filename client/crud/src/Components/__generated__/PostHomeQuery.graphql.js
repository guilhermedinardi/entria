/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PostList_viewer$ref = any;
export type PostHomeQueryVariables = {||};
export type PostHomeQueryResponse = {|
  +posts: $ReadOnlyArray<{|
    +$fragmentRefs: PostList_viewer$ref
  |}>
|};
export type PostHomeQuery = {|
  variables: PostHomeQueryVariables,
  response: PostHomeQueryResponse,
|};
*/


/*
query PostHomeQuery {
  posts {
    ...PostList_viewer
  }
}

fragment PostList_viewer on Post {
  title
  content
  tag
  link
}
*/

const node/*: ConcreteRequest*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "PostHomeQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Post",
        "kind": "LinkedField",
        "name": "posts",
        "plural": true,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "PostList_viewer"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "PostHomeQuery",
    "selections": [
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
    ]
  },
  "params": {
    "cacheID": "a91d7998fb52e44ac71cfa807a685736",
    "id": null,
    "metadata": {},
    "name": "PostHomeQuery",
    "operationKind": "query",
    "text": "query PostHomeQuery {\n  posts {\n    ...PostList_viewer\n  }\n}\n\nfragment PostList_viewer on Post {\n  title\n  content\n  tag\n  link\n}\n"
  }
};
// prettier-ignore
(node/*: any*/).hash = '9117e847d906f4fb962df35ac629562f';

module.exports = node;
