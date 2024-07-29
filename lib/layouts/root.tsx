
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div
            className={`bg-gray-50 font-inter tracking-tight text-gray-900 antialiased`}
        >
            <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
                {children}
            </div>
        </div>
    );
}
