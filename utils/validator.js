export function validate(schema, values) {
  let invalidValues = [];

  if (typeof schema !== "object") {
    throw new Error("Schema must be an object");
  }
  if (typeof values !== "object") {
    throw new Error("values must be an object");
  }

  Object.keys(schema).forEach((schemaKey) => {
    const validationFn = schema[schemaKey];

    if (typeof validationFn !== "function") {
      throw new Error("Invalid validation function");
    }

    const validationResult = validationFn(values[schemaKey]);
    
    if (validationResult === 'undefined') {
        invalidValues.push(
          `[${schemaKey}] not field included]`
        );
      }

    if (!validationResult) {
      invalidValues.push(
        `[${schemaKey}] must be of type [${validationFn.name}]`
      );
    }
  });

  return invalidValues;
}
