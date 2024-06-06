"use client";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

type Props = {
    children: React.ReactNode
}
export default function Providers({ children }: Props) {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
}
