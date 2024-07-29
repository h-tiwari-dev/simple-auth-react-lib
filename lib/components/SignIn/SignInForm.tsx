import { OAuthWithAppleBtn, OAuthWithGithubBtn, OAuthWithGoolgeBtn, OAuthWithLinkedinBtn } from "../OAuthBtns";
import { OAuthType } from "../OAuthBtns/types";

export const SignInForm: React.FC = () => {
    return (
        <>
            <>
                <div className="mb-10">
                    <h1 className="text-4xl font-bold">Sign in to your account</h1>
                </div>
                {/* Form */}
                <form>
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
                                required
                            />
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
                                required
                            />
                        </div>
                    </div>
                    <div className="mt-6">
                        <button className="p-2 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] rounded-lg text-white shadow hover:bg-[length:100%_150%]">
                            Sign In
                        </button>
                        <OAuthWithGithubBtn btnType={OAuthType.SignIn} />
                        <OAuthWithAppleBtn btnType={OAuthType.SignIn} />
                        <OAuthWithLinkedinBtn btnType={OAuthType.SignIn} />
                        <OAuthWithGoolgeBtn btnType={OAuthType.SignIn} />
                    </div>
                </form>
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
        </>
    );
}
