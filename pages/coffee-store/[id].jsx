import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const CoffeStore = () => {
  const router = useRouter();

  return (
    <>
      <div>CoffeStore</div>
      <Link href={"/"}>Back to home </Link>
      <Link href={`/coffee-store/${router.query.id + 1}`}>
        go to dinamic page {router.query.id}
      </Link>
    </>
  );
};

export default CoffeStore;
