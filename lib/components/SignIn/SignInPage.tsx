import AuthLayout from "../../layouts/auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SignInForm } from "./SignInForm";

interface SignInProps {
    callbackUrl: string
}

export const SignInPage: React.FC<SignInProps> = (props) => {

    const queryClient = new QueryClient()
    return (
        <QueryClientProvider client={queryClient}>
            <AuthLayout>
                <SignInForm {...props} />
            </AuthLayout>
        </QueryClientProvider>
    );
}
