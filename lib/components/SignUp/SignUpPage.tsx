import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthLayout from "../../layouts/auth";
import { SignUpForm } from "./SignUpForm";

interface SignUpProps {
    callbackUrl: string
}

export const SignUpPage: React.FC<SignUpProps> = (props) => {
    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            <AuthLayout>
                <SignUpForm {...props} />
            </AuthLayout>
        </QueryClientProvider>
    );
}
