import AuthLayout from "../../layouts/auth";
import { SignUpForm } from "./SignUpForm";

export const SignUpPage: React.FC = () => {
    return (
        <>
            <AuthLayout>
                <SignUpForm />
            </AuthLayout>
        </>
    );
}
