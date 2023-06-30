"use client";

import Button from "@elements/Button";
import { useSession } from "next-auth/react";

const HomePage = () => {
  const { data: session } = useSession();
  const refreshToken = async () => {
    const res = await fetch("http://localhost:3000/auth/refresh", {
      method: "Post",
      headers: {
        authorization: `bearer ${session?.user.refresh_token}`,
      },
    });

    const response = await res.json();
    console.log('New tokens: ', response);
  };
  return (
    <div>
      <Button onClick={refreshToken}>Get a refresh token</Button>
    </div>
  );
};

export default HomePage;
