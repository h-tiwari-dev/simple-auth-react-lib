import React from "react";
import { useForm } from "react-hook-form";
import {
    OAuthWithAppleBtn,
    OAuthWithGithubBtn,
    OAuthWithGoolgeBtn,
    OAuthWithLinkedinBtn
} from "../OAuthBtns";
import { OAuthType } from "../OAuthBtns/types";
import { useMutation } from "@tanstack/react-query";
import { GoogleOAuthProvider } from "@react-oauth/google";

interface SignUpFormInterface {
    name: string,
    email: string,
    phone: string,
    password: string
}
export const SignUpForm: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<SignUpFormInterface>();

    const createUser = async (newUser: SignUpFormInterface) => {
        const response = await fetch('http://0.0.0.0:8080/api/v1/auth/sign-up', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
        });

        if (!response.ok) {
            throw new Error('Failed to create user');
        }

        return response.json();
    };

    const mutation = useMutation({
        mutationFn: createUser,
        onSuccess: () => {
            // Handle successful signup (e.g., redirect or show a success message)
            console.log("Signup successful");
        },
        onError: (error) => {
            // Handle error (e.g., show an error message)
            console.error("Signup error:", error.message);
        }
    });

    const onSubmit = (data: SignUpFormInterface) => {
        console.log(data);
        mutation.mutate(data); // Trigger the mutation with form data
    };

    return (
        <>
            <div className="mb-10">
                <h1 className="text-4xl font-bold">Create your account</h1>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-4">
                    <div>
                        <label
                            className="mb-1 block text-sm font-medium text-gray-700"
                            htmlFor="name"
                        >
                            Full name
                        </label>
                        <input
                            id="name"
                            className="form-input w-full py-2 rounded-lg border-gray-100 border-2 shadow-gray-50 shadow-md"
                            type="text"
                            placeholder="Corey Barker"
                            {...register("name", { required: "Full name is required" })}
                        />
                        {errors.name && <span className="text-red-500">{errors.name.message}</span>}
                    </div>
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
                            htmlFor="phone"
                        >
                            Phone
                        </label>
                        <input
                            id="phone"
                            className="form-input w-full py-2 rounded-lg border-gray-100 border-2 shadow-gray-50 shadow-md"
                            type="text"
                            placeholder="(+750) 932-8907"
                            {...register("phone", { required: "Phone number is required" })}
                        />
                        {errors.phone && <span className="text-red-500">{errors.phone.message}</span>}
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
            <div className="mt-6 space-y-3">
                <button className="p-2 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] rounded-lg text-white shadow hover:bg-[length:100%_150%]">
                    Register
                </button>
                <div className="text-center text-sm italic text-gray-400">Or</div>
                <OAuthWithGithubBtn btnType={OAuthType.SignUp} />
                <OAuthWithAppleBtn btnType={OAuthType.SignUp} />
                <OAuthWithLinkedinBtn btnType={OAuthType.SignUp} />
                <GoogleOAuthProvider clientId="528919316873-t6qp210ovvnskl3vgqapcn3d40s831fp.apps.googleusercontent.com">
                    <OAuthWithGoolgeBtn btnType={OAuthType.SignUp} />
                </GoogleOAuthProvider>
            </div>

            {/* Bottom link */}
            <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                    By signing up, you agree to the{" "}
                    <a
                        className="whitespace-nowrap font-medium text-gray-700 underline hover:no-underline"
                        href="#0"
                    >
                        Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                        className="whitespace-nowrap font-medium text-gray-700 underline hover:no-underline"
                        href="#0"
                    >
                        Privacy Policy
                    </a>
                    .
                </p>
            </div>
        </>
    );
};
