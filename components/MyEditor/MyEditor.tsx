import React from 'react'
import { Editor } from '@tinymce/tinymce-react';

export const MyEditor = ({onChange,label}:{onChange:(e:any)=>void,label?:string}) => 
{
  return (
    <>
      <label className='capitalize'>
         {label}
      </label>
      <Editor
          apiKey="g8jyuiva662x7wopsh1cxva98gbbgo22cb9uyjgtrs8iiqn9"
          initialValue=""
          onChange={onChange}
          init={{
            height: 300,
            menubar: false,
            plugins: [
              "advlist",
              "autolink",
              "lists",
              "link",
              "image",
              "charmap",
              "preview",
              "anchor",
              "searchreplace",
              "visualblocks",
              "code",
              "fullscreen",
              "insertdatetime",
              "media",
              "table",
              "code",
              "help",
              "wordcount",
            ],
            toolbar:
              "undo redo | blocks | " +
              "bold italic forecolor | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent | " +
              "removeformat | help",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
        />
    </>
  )
}
