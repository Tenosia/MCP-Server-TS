import "./style.css";

import { Metadata } from "next";
import React from "react";
import pagejson from "@/pagejson/en.json";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: {
      template: `%s | ${pagejson.metadata.title}`,
      default: pagejson.metadata.title,
    },
    description: pagejson.metadata.description,
    keywords: pagejson.metadata.keywords,
  };
}

export default function PolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen bg-background text-foreground">{children}</div>;
}
