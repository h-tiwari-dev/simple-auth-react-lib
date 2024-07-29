import AuthLayout from "../../layouts/auth";
import { SignInForm } from "./SignInForm";

export const SignInPage: React.FC = () => {
    return (
        <>
            <AuthLayout>
                <SignInForm />
            </AuthLayout>
        </>
    );
}
