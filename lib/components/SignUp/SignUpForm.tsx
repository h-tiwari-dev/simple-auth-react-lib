import { GoogleOAuthProvider } from "@react-oauth/google";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import {
    OAuthWithAppleBtn,
    OAuthWithGithubBtn,
    OAuthWithGoolgeBtn,
    OAuthWithLinkedinBtn
} from "../OAuthBtns";
import { OAuthType } from "../OAuthBtns/types";


interface Field {
    type: 'text' | 'email' | 'password' | 'date' | 'select';
    label: string;
    enabled: boolean;
    required?: boolean;
    placeholder?: string;
    options?: { value: string; label: string }[];
    validationRegex?: RegExp;
    validationMessage?: string;
}

interface Fields {
    [name: string]: Field;
}

interface OAuthSignInDetailsInterface {
    oauthProvider: 'apple' | 'github' | 'google' | 'linkedin';
    clientId: string;
}

interface SignUpFormInterface {
    fields?: Fields,
    oAuthProviders?: OAuthSignInDetailsInterface[]
    callbackUrl: string;
}

const defaultFields: Fields = {
    name: {
        type: 'text',
        label: 'Full Name',
        enabled: true,
        required: true,
        placeholder: 'Enter your full name'
    },
    username: {
        type: 'text',
        label: 'Username',
        enabled: true,
        required: true,
        placeholder: 'Enter your username'
    },
    email: {
        type: 'email',
        label: 'Email',
        enabled: true,
        required: true,
        placeholder: 'corybarker@email.com'
    },
    password: {
        type: 'password',
        label: 'Password',
        enabled: true,
        required: true,
        placeholder: '••••••••',
        validationRegex: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        validationMessage: 'Password must be at least 8 characters long and contain at least one letter and one number.'
    }
};

export const SignUpForm: React.FC<SignUpFormInterface> = ({
    fields = defaultFields,
    oAuthProviders,
    callbackUrl
}) => {
    const formFields: Fields = { ...defaultFields, ...fields };

    const { register, handleSubmit, formState: { errors } } = useForm<Fields>();

    const mutation = useMutation({
        mutationFn: async (newUser: Fields) => {
            const response = await axios.post<{
                "error"?: string,
                "token": string,
            }>('http://localhost:8080/api/v1/auth/sign-up', {
                ...newUser,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (response.status !== 200 || response.data.error) {
                throw new Error('Failed to create user');
            }

            return response.data;
        },
        onSuccess: (data) => {
            localStorage.setItem("token", data.token)
            window.location.href = window.location.pathname + callbackUrl
        },
        onError: (error) => {
            // Handle error (e.g., show an error message)
            console.error("Signup error:", error.message);
        }
    });

    const onSubmit = (data: Fields) => {
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
                    {Object.keys(formFields).map((fieldName) => (
                        <div key={fieldName}>
                            <label className="mb-1 block text-sm font-medium text-gray-700" htmlFor={fieldName}>
                                {formFields[fieldName].label}
                            </label>
                            <input
                                id={fieldName}
                                className="form-input w-full py-2 rounded-lg border-gray-100 border-2 shadow-gray-50 shadow-md"
                                type={formFields[fieldName].type}
                                placeholder={formFields[fieldName].placeholder}
                                {...register(
                                    fieldName,
                                    {
                                        required: formFields[fieldName].required
                                    })}
                            />
                            {errors[fieldName] && <span className="text-red-500">{errors[fieldName]?.message}</span>}
                        </div>
                    ))}
                </div >
                <div className="mt-6 space-y-3">
                    <button className="p-2 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] rounded-lg text-white shadow hover:bg-[length:100%_150%]">
                        Register
                    </button>
                    {oAuthProviders?.length ?
                        <div className="text-center text-sm italic text-gray-400">Or</div>
                        : <></>}
                    {oAuthProviders?.map((provider) => {
                        if (provider.oauthProvider === 'apple') {
                            return provider.clientId && (
                                <OAuthWithAppleBtn key={provider.oauthProvider} btnType={OAuthType.SignUp} />
                            );
                        }
                        if (provider.oauthProvider === 'github') {
                            return provider.clientId && (
                                <OAuthWithGithubBtn key={provider.oauthProvider} btnType={OAuthType.SignUp} />
                            );
                        }
                        if (provider.oauthProvider === 'google') {
                            return provider.clientId && (
                                <GoogleOAuthProvider clientId={provider.clientId}>
                                    <OAuthWithGoolgeBtn key={provider.oauthProvider} btnType={OAuthType.SignUp} />
                                </GoogleOAuthProvider>
                            );
                        }
                        if (provider.oauthProvider === 'linkedin') {
                            return provider.clientId && (
                                <OAuthWithLinkedinBtn key={provider.oauthProvider} btnType={OAuthType.SignUp} />
                            );
                        }
                        return null;
                    })}
                </div>
            </form >
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
