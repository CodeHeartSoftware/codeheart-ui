import type { Route } from "./+types/home";
import {Welcome} from "~/welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CodeHeart Software, LLC" },
    { name: "description", content: "Welcome to CodeHeart Software!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
