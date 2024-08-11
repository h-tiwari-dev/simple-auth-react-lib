import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthLayout from "../../layouts/auth";
import { SignUpForm } from "./SignUpForm";

export const SignUpPage: React.FC = () => {
    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            <AuthLayout>
                <SignUpForm />
            </AuthLayout>
        </QueryClientProvider>
    );
}
