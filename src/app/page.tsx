"use client";

import Header from "@components/Layout/Header/Header";
import Footer from "@components/Layout/Footer/Footer";
import HomeSlider from "@components/Sliders/HomeSlider";
import Template from "@app/(main)/template";
import Editor from "@/components/editor/advanced-editor";
import { JSONContent } from "novel";

export default async function Home() {
  return (
    <>
      <Header />
      <Template>
        <main className="flex min-h-screen w-screen flex-col items-center gap-4 px-3 py-4 animate-in">
          <div className="w-[80%] overflow-hidden rounded-lg border">
            <Editor initialValue={defaultValue} onChange={() => {}} />
          </div>
          <div className="w-[80%]">
            <HomeSlider />
          </div>
        </main>
      </Template>
      <Footer />
    </>
  );
}

const defaultValue = {
  type: "doc",
  content: [
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "This is an example for the editor",
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        level: 1,
      },
      content: [
        {
          type: "text",
          text: "H1",
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        level: 2,
      },
      content: [
        {
          type: "text",
          text: "H2",
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        level: 3,
      },
      content: [
        {
          type: "text",
          text: "H3",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "text",
        },
      ],
    },
    {
      type: "bulletList",
      attrs: {
        tight: true,
      },
      content: [
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "new idea",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "idea",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
