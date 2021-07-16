import { GraphQLObjectType } from 'graphql';
import { fromGlobalId, nodeDefinitions } from 'graphql-relay';
  
const {nodeInterface, nodeField} = nodeDefinitions(
    (globalId) => {
      var {type, id} = fromGlobalId(globalId);
      if (type === 'Post') {
        return getPost(id);
      } else if (type === 'Widget') {
        return getWidget(id);
      } else {
        return null;
      }
    },
    (obj) => {
      if (obj instanceof Post) {
        return postType;
      } else if (obj instanceof Widget)  {
        return widgetType;
      } else {
        return null;
      }
    }
  );

  export {nodeField, nodeInterface}
