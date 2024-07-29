import { OAuthWithAppleBtn, OAuthWithGithubBtn, OAuthWithGoolgeBtn, OAuthWithLinkedinBtn } from "../OAuthBtns";
import { OAuthType } from "../OAuthBtns/types";

export const SignUpForm: React.FC = () => {
    return (
        <>
            <div className="mb-10">
                <h1 className="text-4xl font-bold">Create your account</h1>
            </div>

            {/* Form */}
            <form>
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
                            required
                        />
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
                            required
                        />
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
                <div className="mt-6 space-y-3">
                    <button className="p-2 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] rounded-lg text-white shadow hover:bg-[length:100%_150%]">
                        Register
                    </button>
                    <div className="text-center text-sm italic text-gray-400">Or</div>
                    <OAuthWithGithubBtn btnType={OAuthType.SignUp} />
                    <OAuthWithAppleBtn btnType={OAuthType.SignUp} />
                    <OAuthWithLinkedinBtn btnType={OAuthType.SignUp} />
                    <OAuthWithGoolgeBtn btnType={OAuthType.SignUp} />
                </div>
            </form>

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
}
