"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";

export default function SignIn() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [authProvider, setAuthProvider] = useState("");

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    setAuthProvider("google");
    try {
      await signIn("google", { callbackUrl: "/dashboard" });
    } catch (error) {
      console.error("Error signing in with Google", error);
    } finally {
      setIsLoading(false);
      setAuthProvider("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-white px-4">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg border border-gray-100">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back
          </h2>
          <p className="text-gray-500 mb-6">
            Sign in to your account to continue
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={handleGoogleSignIn}
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200 shadow-sm"
          >
            {isLoading && authProvider === "google" ? (
              <Loader2 className="h-5 w-5 animate-spin text-gray-600" />
            ) : (
              <>
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                <span className="text-gray-600 font-medium">
                  Continue with Google
                </span>
              </>
            )}
          </button>
        </div>

        <div className="mt-6">
          <div className="text-center text-sm text-gray-500">
            Don&apos;t have an account?{" "}
            <button
              type="button"
              className="font-medium text-cyan-600 hover:text-cyan-500 inline-flex items-center"
              onClick={() => router.push("/auth/signup")}
            >
              Create an account
              <ArrowRight className="ml-1 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <p className="mt-6 text-xs text-gray-500 max-w-sm text-center">
        By signing in, you agree to our Terms of Service and Privacy Policy.
      </p>
    </div>
  );
}
