const getUserProperty = (
  userPropertyName,
  userPropertyType = "string",
  columnName = false
) => {
  let userParamTypeName = "";
  switch (userPropertyType) {
    case "string":
      userPropertyType = "string_value";
      break;
    case "int":
      userPropertyType = "int_value";
      break;
    case "double":
      userPropertyType = "double_value";
      break;
    case "float":
      userPropertyType = "float_value";
      break;
    default:
      throw "userPropertyType is not valid";
  }
  return `(select up.value.${userPropertyType} from unnest(user_properties) up where up.key = '${userPropertyName}') as ${
    columnName ? columnName : userPropertyName
  }`;
};

const getEventParam = (
  eventParamName,
  eventParamType = "string",
  columnName = false
) => {
  let eventParamTypeName = "";
  switch (eventParamType) {
    case "string":
      eventParamTypeName = "string_value";
      break;
    case "int":
      eventParamTypeName = "int_value";
      break;
    case "double":
      eventParamTypeName = "double_value";
      break;
    case "float":
      eventParamTypeName = "float_value";
      break;
    default:
      throw "eventType is not valid";
  }
  return `(select ep.value.${eventParamTypeName} from unnest(event_params) ep where ep.key = '${eventParamName}') as ${
    columnName ? columnName : eventParamName
  }`;
};

const getItemParam = (
  itemParamName,
  itemParamType = "string",
  columnName = false
) => {
  let itemParamTypeName = "";
  switch (itemParamType) {
    case "string":
      itemParamTypeName = "string_value";
      break;
    case "int":
      itemParamTypeName = "int_value";
      break;
    case "double":
      itemParamTypeName = "double_value";
      break;
    case "float":
      itemParamTypeName = "float_value";
      break;
    default:
      throw "itemType is not valid";
  }
  return `(select ep.value.${itemParamTypeName} from unnest(item_params) ep where ep.key = '${itemParamName}') as ${
    columnName ? columnName : itemParamName
  }`;
};

module.exports = {
  getEventParam,
  getItemParam,
  getUserProperty
};