import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import {
    OAuthWithAppleBtn,
    OAuthWithGithubBtn,
    OAuthWithGoolgeBtn,
    OAuthWithLinkedinBtn
} from "../OAuthBtns";
import { OAuthType } from "../OAuthBtns/types";
import { GoogleOAuthProvider } from "@react-oauth/google";

interface SignInFormInterface {
    email: string;
    password: string;
}

export const SignInForm: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<SignInFormInterface>();

    const signInUser = async (credentials: SignInFormInterface) => {
        const response = await fetch('http://0.0.0.0:8080/api/v1/auth/sign-in', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });

        if (!response.ok) {
            throw new Error('Failed to sign in');
        }

        return response.json();
    };

    const mutation = useMutation({
        mutationFn: signInUser,
        onSuccess: () => {
            // Handle successful sign-in (e.g., redirect or show a success message)
            console.log("Sign-in successful");
        },
        onError: (error) => {
            // Handle error (e.g., show an error message)
            console.error("Sign-in error:", error.message);
        }
    });

    const onSubmit = (data: SignInFormInterface) => {
        console.log(data);
        mutation.mutate(data); // Trigger the mutation with form data
    };

    return (
        <>
            <div className="mb-10">
                <h1 className="text-4xl font-bold">Sign in to your account</h1>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-4">
                    <div>
                        <label
                            className="mb-1 block text-sm font-medium text-gray-700"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            className="form-input w-full py-2 rounded-lg border-gray-100 border-2 shadow-gray-50 shadow-md"
                            type="email"
                            placeholder="corybarker@email.com"
                            {...register("email", { required: "Email is required" })}
                        />
                        {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                    </div>
                    <div>
                        <label
                            className="mb-1 block text-sm font-medium text-gray-700"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input
                            id="password"
                            className="form-input w-full py-2 rounded-lg border-gray-100 border-2 shadow-gray-50 shadow-md"
                            type="password"
                            autoComplete="on"
                            placeholder="••••••••"
                            {...register("password", { required: "Password is required" })}
                        />
                        {errors.password && <span className="text-red-500">{errors.password.message}</span>}
                    </div>
                </div>
            </form>
            <div className="mt-6">
                <button className="p-2 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] rounded-lg text-white shadow hover:bg-[length:100%_150%]">
                    Sign In
                </button>
                <div className="mt-3 space-y-2">
                    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_OAUTH_CLIENT}>
                        <OAuthWithGoolgeBtn btnType={OAuthType.SignIn} />
                    </GoogleOAuthProvider>;
                    <OAuthWithAppleBtn btnType={OAuthType.SignIn} />
                    <OAuthWithLinkedinBtn btnType={OAuthType.SignIn} />
                    <OAuthWithGithubBtn btnType={OAuthType.SignIn} />
                </div>
            </div>
            {/* Bottom link */}
            <div className="mt-6 text-center">
                <a
                    className="text-sm text-gray-700 underline hover:no-underline"
                    href="/reset-password"
                >
                    Forgot password
                </a>
            </div>
        </>
    );
};
