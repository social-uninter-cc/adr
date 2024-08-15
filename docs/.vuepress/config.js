import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress/cli";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  lang: "pt-BR",
  port: 3001,
  title: "Uninter Social",
  description:
    "Um projeto de rede social feita pelos alunos dos cursos de tecnologia da Uninter.",

  theme: defaultTheme({
    logo: "/images/logo-turtle.png",
    navbar: ["/", "/docs"],
    backToHome: "Página Inicial",
  }),

  bundler: viteBundler(),
});
