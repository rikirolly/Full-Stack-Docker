const { ObjectType, string, id } = require('../../utilities/GraphQLTypeUtilities');

const userListType = ObjectType({
  name: 'UserListType',
  fields: {
    id: { type: id },
    first_name: { type: string },
    last_name: { type: string },
    email: { type: string }
  }
});

module.exports = userListType;
