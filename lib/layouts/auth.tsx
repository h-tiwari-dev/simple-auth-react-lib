import RootLayout from "./root";
import { getImageUrl } from "../helpers";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <RootLayout>
            <header className="absolute z-30 w-full">
                <div className="mx-auto max-w-6xl px-4 sm:px-6">
                    <div className="flex h-16 items-center justify-between md:h-20">
                        {/* Site branding */}
                        <div className="mr-4 shrink-0">
                            {/* <Logo /> */}
                        </div>
                    </div>
                </div>
            </header>

            <main className="relative flex grow">
                <div
                    className="pointer-events-none absolute bottom-0 left-0 -translate-x-1/3"
                    aria-hidden="true"
                >
                    <div className="h-80 w-80 rounded-full bg-gradient-to-tr from-blue-500 opacity-70 blur-[160px]"></div>
                </div>

                {/* Content */}
                <div className="w-full">
                    <div className="flex h-full flex-col justify-center before:min-h-[4rem] before:flex-1 after:flex-1 md:before:min-h-[5rem]">
                        <div className="px-4 sm:px-6">
                            <div className="mx-auto w-full max-w-sm">
                                <div className="py-16 md:py-20">
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <>
                    {/* Right side */}
                    <div className="relative my-6 mr-6 w-[572px] shrink-0 rounded-2xl ">
                        {/* Background */}
                        <div
                            className="pointer-events-none absolute left-1/2 top-1/2 -ml-24 -translate-x-1/2 -translate-y-1/2 "
                            aria-hidden="true"
                        >
                            <img
                                src={getImageUrl("screen")}
                                width={1285}
                                height={1684}
                            />
                        </div>
                    </div>
                </>
            </main>
        </RootLayout>
    );
}
