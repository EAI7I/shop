import { useRouter } from "next/router";

import HeaderBar from "@/components/HeaderBar/HeaderBar";

const noHeaderBarRouts = ["/auth"];
export default function Layout(props) {
  const router = useRouter();
  return (
    <>
      {!noHeaderBarRouts.includes(router.pathname) && <HeaderBar />}
      {props.children}
    </>
  );
}
