import { NextResponse } from "next/server";

exports.errorHandler = (err: Error) => {
  return err.message.substring(err.message.lastIndexOf(":") + 2);
};

exports.errorz = (err: Error) => {
  return NextResponse.json(
    {
      error: err,
    },
    { status: 400 }
  );
};
/**
 *error handler 2 Get unique error field name
 */
const uniqueMessage = (error:Error) => {
  let output;
  try {
    let fieldName = error.message.substring(
      error.message.lastIndexOf(".$") + 2,
      error.message.lastIndexOf("_1")
    );
    output =
      fieldName.charAt(0).toUpperCase() +
      fieldName.slice(1) +
      " already exists";
  } catch (ex) {
    output = "Unique field already exists";
  }

  return output;
};

/**
 * Get the error message from error object
 */
exports.errorHandler2 = (error:any) => {
  let message = "";

  if (error.code) {
    switch (error.code) {
      case 11000:
      case 11001:
        message = uniqueMessage(error);
        break;
      default:
        message = "Something went wrong";
    }
  } else {
    for (let errorName in error.errorors) {
      if (error.errorors[errorName].message)
        message = error.errorors[errorName].message;
    }
  }

  return message;
};
