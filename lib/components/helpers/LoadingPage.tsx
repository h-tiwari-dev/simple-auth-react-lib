import AuthLayout from "../../layouts/auth";

const LoadingPage = () => {
    return (
        <AuthLayout>
            <div className="flex flex-col items-center justify-center h-full">
                <div className="animate-spin rounded-full border-4 border-t-4 border-gray-200 border-t-blue-500 w-16 h-16 mb-4"></div>
                <p className="mt-4 text-lg text-gray-700">Loading, please wait...</p>
            </div>
        </AuthLayout>
    );
};

export default LoadingPage;
