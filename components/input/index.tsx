"use client";

import { AiOutlinePaperClip, AiOutlinePlus } from "react-icons/ai";

/**
 * 三合一的輸入框，可以添加文字、來源網址、附檔
 */
export default function InputField() {
  return (
    <div className="space-y-2 w-2/5">
      <p></p>

      <div
        className="p-2 px-3 rounded-lg min-w-xs max-w-xl"
        style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}
      >
        <input
          type="text"
          className="w-full min-h-8 text-wrap overflow-hidden resize-none outline-none"
          id="textInput"
          autoComplete="off"
          placeholder="請輸入分析目標或方向"
        />

        <hr className="my-1 border-neutral-300" />

        <section className="flex space-x-1 text-neutral-500">
          <button className="flex items-center space-x-1">
            <AiOutlinePlus className="size-5" />
            <p>新增來源</p>
          </button>
          <button className="p-0 flex items-center space-x-1">
            <AiOutlinePaperClip className="size-5" />
            <p>添加檔案</p>
          </button>

          {/*  */}
          <input
            type="url"
            className="hidden"
            id="urlInput"
            placeholder="輸入網址"
          />
          <input
            type="file"
            className="hidden"
            accept=".pdf,.doc,.docx,.txt"
            id="fileInput"
          />
        </section>
      </div>
    </div>
  );
}
