import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center items-center p-10">
      <SignIn redirectUrl="http://localhost:3000/" />;
    </div>
  );
}
