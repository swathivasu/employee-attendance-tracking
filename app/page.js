"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  useEffect(() =>{
        redirect('/api/auth/login?post_login_redirect_url=/dashboard')
      },[])
      return (
        <div>

        </div>
      );
    }
    
