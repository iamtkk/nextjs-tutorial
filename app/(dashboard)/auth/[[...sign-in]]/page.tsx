const SignInPage = ({ params }: { params: { "sign-in": string[] } }) => {
  console.log("params : ", params);
  console.log("params array : ", params["sign-in"][1]);
  return <div>SignInPage</div>;
};
export default SignInPage;
