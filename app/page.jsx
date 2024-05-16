import { Roboto } from "next/font/google";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import LoginButton from "@/components/auth/login-button";

const font = Roboto({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-sky-500">
      <div className="space-y-6">
        <h1 className={cn("text-4xl font-bold", font.className)}>
          Welcome to SMRTeVote
        </h1>
        <p className="text-lg text-gray-600">
          Get started by editing{" "}
          <code className="bg-gray-100 p-1 rounded-md">app/page.tsx</code>
        </p>
        <LoginButton>
          <Button size="lg">Get started</Button>
        </LoginButton>
      </div>
    </main>
  );
}
