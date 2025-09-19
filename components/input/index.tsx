"use client";

import { useRef } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { AiOutlinePaperClip } from "react-icons/ai";
import { z } from "zod";

const fileSchema = z
  .custom<FileList>(
    (val) => {
      // 如果沒有值，允許 optional
      if (val == null) return true;
      // 檢查 val 是否有 files 的屬性 (簡單判斷是否像 FileList)
      if (!(val instanceof FileList)) return false;
      // 檢查第一個文件大小
      if (!val[0]) return false;
      return val[0].size <= 50 * 1024 * 1024; // 50MB
    },
    {
      message: "請選擇一個有效文件且大小不能超過50MB",
    }
  )
  .optional();

const schema = z.object({
  text: z.string().min(1, "請輸入分析目標或方向"),
  // source: z.string().optional(),
  file: fileSchema,
});

/**
 * 三合一的輸入框，可以添加文字、來源網址、附檔
 */
export default function InputField() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  console.log(errors);
  const { ref: fileRef, ...rest } = register("file");

  // function handleAddSource() {
  //   sourceRef.current?.click();
  // }
  function handleAddFile() {
    console.log("handleAddFile");
    fileInputRef.current?.click();
  }
  function onSubmit(data: unknown) {
    console.log(data);
  }

  return (
    <div className="space-y-2 w-full flex justify-center items-center">
      {/* <h2>tiotle</h2> */}

      <div
        className="p-2 px-3 rounded-lg min-w-xs w-full"
        style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("text", { required: true })}
            className="w-full overflow-hidden resize-none outline-none min-h-10"
            id="textInput"
            autoComplete="off"
            placeholder="請輸入分析目標或方向"
          ></input>

          <hr className="my-1 border-neutral-300" />

          <section className="flex justify-between items-center text-neutral-500 w-full">
            <div className="w-fit space-x-3">
              {/* <button className="flex items-center space-x-1" onClick={handleAddSource}>
              <AiOutlinePlus className="size-5" />
              <p>新增來源</p>
            </button> */}
              <button
                type="button"
                className="p-0 flex items-center space-x-1"
                onClick={handleAddFile}
              >
                <AiOutlinePaperClip className="size-5" />
                <p>添加檔案</p>
              </button>
            </div>

            <button
              type="submit"
              className="font-semibold rounded-lg bg-amber-200 px-3 py-1.5 active:bg-amber-300 active:scale-95 transition-all text-neutral-800"
            >
              開始分析
            </button>

            {/* input element */}
            {/* <input
              ref={sourceRef}
              type="url"
              className="hidden"
              id="urlInput"
              placeholder="輸入網址"
            /> */}
            <input
              {...rest}
              ref={(e) => {
                fileInputRef.current = e;
                fileRef(e);
              }}
              type="file"
              className="hidden"
              // accept=".pdf,.doc,.docx,.txt"
              id="file"
            />
          </section>
        </form>
      </div>
    </div>
  );
}
