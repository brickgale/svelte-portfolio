import { writable } from "svelte/store";

type Theme = "dark" | "light";

const { subscribe, set } = writable<Theme>("dark");

function init() {
  const saved = (localStorage.getItem("theme") as Theme) ?? "dark";
  document.documentElement.setAttribute("data-theme", saved);
  set(saved);
}

function toggle() {
  const current = (document.documentElement.getAttribute("data-theme") as Theme) ?? "dark";
  const next: Theme = current === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  set(next);
}

export const themeStore = { subscribe, init, toggle };
