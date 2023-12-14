"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import React, { useState } from "react";
import { SessionContextProvider } from "@supabase/auth-helpers-react";

import { Database } from "@/types/supabase";

interface SupabaseProviderProps {
    children: React.ReactNode;
}

const SupabaseProvider: React.FC<SupabaseProviderProps> = ({ children }) => {
    const [supabaseClient] = useState(() => createClientComponentClient<Database>());
    return <SessionContextProvider supabaseClient={supabaseClient}>{children}</SessionContextProvider>
};

export default SupabaseProvider;
