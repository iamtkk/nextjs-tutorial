"use client";

const error = ({ error }: { error: Error }) => {
  console.log(error);
  return <div>There was an error...</div>;
};
export default error;
