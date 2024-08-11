import AuthLayout from "../../layouts/auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SignInForm } from "./SignInForm";

export const SignInPage: React.FC = () => {

    const queryClient = new QueryClient()
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <AuthLayout>
                    <SignInForm />
                </AuthLayout>
            </QueryClientProvider>
        </>
    );
}
