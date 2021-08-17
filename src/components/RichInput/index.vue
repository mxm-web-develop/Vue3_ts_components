<template>
  <div>
    <teleport to="body">
      <div v-if="showLinkSubmitor" class="w-full h-full absolute top-0 left-0">
        <div class="relative h-full w-full">
          <div
            class="gray-papaer bg-font-dark-blue h-full w-full bg-opacity-60"
          ></div>
          <div
            class="
              modals-box
              w-96
              bg-font-white
              absolute
              top-0
              rounded-md
              shadow-sm
            "
          >
            <div class="flex items-center justify-between px-5 py-2">
              <div class="left"></div>
              <div class="center">haha</div>
              <div class="right">
                <Icon
                  @click="showLinkSubmitor = false"
                  name="icon-remove"
                  size="20px"
                  class="icon-box rounded-full mx-auto cursor-pointer"
                  color="#8899B3"
                ></Icon>
              </div>
            </div>
            <div class="py-5 px-5">
              <input type="text" class="w-full" />
            </div>
            <div class="px-5">
              <div class="float-right flex gap-x-3">
                <div class="cursor-pointer">cancel</div>
                <div class="cursor-pointer">confirm</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </teleport>
    <div class="border border-font-gray">
      <div v-if="editor && showMenu" class="bg-font-black mt-64">
        <div class="flex items-center">
          <!-- 字体样式的基本组件 -->
          <div class="flex text-basic items-center">
            <!-- H1标题 -->
            <div
              class="cursor-pointer p-3"
              @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
              :class="
                editor.isActive('heading', { level: 1 })
                  ? ' text-font-blue'
                  : '  text-font-gray'
              "
            >
              H1
            </div>
            <!-- H2标题 -->
            <div
              class="cursor-pointer p-3 text-white"
              @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
              :class="
                editor.isActive('heading', { level: 2 })
                  ? ' text-font-blue'
                  : '  text-font-gray'
              "
            >
              H2
            </div>
            <!-- H3标题 -->
            <div
              class="cursor-pointer p-3 text-white"
              @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
              :class="
                editor.isActive('heading', { level: 3 })
                  ? ' text-font-blue'
                  : '  text-font-gray'
              "
            >
              H3
            </div>
            <!-- 加粗 -->
            <div
              class="cursor-pointer p-3"
              @click="editor.chain().focus().toggleBold().run()"
            >
              <Icon
                name="icon-bold"
                size="20px"
                class="icon-box rounded-full mx-auto"
                :color="
                  editor.isActive('bold')
                    ? editorSetting.activeColor
                    : editorSetting.deActiveColor
                "
              ></Icon>
            </div>
            <!-- 斜体 -->
            <div
              class="cursor-pointer p-3"
              @click="editor.chain().focus().toggleItalic().run()"
            >
              <Icon
                name="icon-italic"
                size="20px"
                class="icon-box rounded-full mx-auto"
                :color="
                  editor.isActive('italic')
                    ? editorSetting.activeColor
                    : editorSetting.deActiveColor
                "
              ></Icon>
            </div>
            <!-- 中横线 -->
            <div
              class="cursor-pointer p-3"
              @click="editor.chain().focus().toggleStrike().run()"
            >
              <Icon
                name="icon-strikethrough"
                size="20px"
                class="icon-box rounded-full mx-auto"
                :color="
                  editor.isActive('strike')
                    ? editorSetting.activeColor
                    : editorSetting.deActiveColor
                "
              ></Icon>
            </div>
            <!-- 高亮 -->
            <div
              class="cursor-pointer p-3"
              @click="editor.chain().focus().toggleHighlight().run()"
            >
              <Icon
                name="icon-highlight"
                size="20px"
                class="icon-box rounded-full mx-auto"
                :color="
                  editor.isActive('highlight')
                    ? editorSetting.activeColor
                    : editorSetting.deActiveColor
                "
              ></Icon>
            </div>
            <!-- 左对齐 -->
            <div
              class="cursor-pointer p-3"
              @click="editor.chain().focus().setTextAlign('left').run()"
            >
              <Icon
                name="icon-align-left"
                size="20px"
                class="icon-box rounded-full mx-auto"
                :color="
                  editor.isActive({ textAlign: 'left' })
                    ? editorSetting.activeColor
                    : editorSetting.deActiveColor
                "
              ></Icon>
            </div>
            <!-- 右对齐 -->
            <div
              class="cursor-pointer p-3"
              @click="editor.chain().focus().setTextAlign('right').run()"
            >
              <Icon
                name="icon-align-right"
                size="20px"
                :color="
                  editor.isActive({ textAlign: 'right' })
                    ? editorSetting.activeColor
                    : editorSetting.deActiveColor
                "
                class="icon-box rounded-full mx-auto"
              ></Icon>
            </div>
            <!-- 中间对齐 -->
            <div
              class="cursor-pointer p-3 border-r border-font-white"
              @click="editor.chain().focus().setTextAlign('center').run()"
            >
              <Icon
                name="icon-align-center"
                size="20px"
                :color="
                  editor.isActive({ textAlign: 'center' })
                    ? editorSetting.activeColor
                    : editorSetting.deActiveColor
                "
                class="icon-box rounded-full mx-auto"
              ></Icon>
            </div>
          </div>

          <!-- 段落样式的基本组件 -->
          <div class="flex format-basic items-center">
            <!-- 隔断线 -->
            <div
              class="cursor-pointer p-3"
              @click="editor.chain().focus().setHorizontalRule().run()"
            >
              <Icon
                name="icon-grip-horizontal-line"
                size="20px"
                class="icon-box rounded-full mx-auto"
                :color="
                  editor.isActive('italic')
                    ? editorSetting.activeColor
                    : editorSetting.deActiveColor
                "
              ></Icon>
            </div>
            <!-- 无序数列 -->
            <div
              class="cursor-pointer p-3"
              @click="editor.chain().focus().toggleBulletList().run()"
            >
              <Icon
                name="icon-list"
                size="20px"
                class="icon-box rounded-full mx-auto"
                :color="
                  editor.isActive('bulletList')
                    ? editorSetting.activeColor
                    : editorSetting.deActiveColor
                "
              ></Icon>
            </div>
            <!-- 有序数列 -->
            <div
              class="cursor-pointer p-3"
              @click="editor.chain().focus().toggleOrderedList().run()"
            >
              <Icon
                name="icon-ol"
                size="20px"
                class="icon-box rounded-full mx-auto"
                :color="
                  editor.isActive('orderedList')
                    ? editorSetting.activeColor
                    : editorSetting.deActiveColor
                "
              ></Icon>
            </div>
            <!-- 编码器 -->
            <div
              class="cursor-pointer p-3 border-r border-font-white"
              @click="editor.chain().focus().toggleCodeBlock().run()"
            >
              <Icon
                name="icon-code"
                size="20px"
                class="icon-box rounded-full mx-auto"
                :color="
                  editor.isActive('codeBlock')
                    ? editorSetting.activeColor
                    : editorSetting.deActiveColor
                "
              ></Icon>
            </div>
          </div>

          <!-- 功能性操作按钮 -->
          <div class="flex format-basic items-center">
            <div class="cursor-pointer p-3" @click="setLink">
              <Icon
                name="icon-link"
                size="20px"
                class="icon-box rounded-full mx-auto"
                :color="
                  editor.isActive('link')
                    ? editorSetting.activeColor
                    : editorSetting.deActiveColor
                "
              ></Icon>
            </div>
          </div>
        </div>
      </div>
      <editor-content :editor="editor" />
    </div>
  </div>
</template>

<script lang='ts'>
import { Editor, EditorContent, VueNodeViewRenderer } from "@tiptap/vue-3";
import StartKit from "@tiptap/starter-kit";
import Icon from "./icons.vue";
import BaseHeading from "@tiptap/extension-heading";
import { mergeAttributes } from "@tiptap/core";
import Highlight from "@tiptap/extension-highlight";
import Placeholder from "@tiptap/extension-placeholder";
import TextAlign from "@tiptap/extension-text-align";
import Typography from "@tiptap/extension-typography";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import CodeBlockComponent from "./CodeBlockComponent.vue";
import lowlight from "lowlight";
import Link from "@tiptap/extension-link";
import { defineComponent } from "vue";

type Levels = 1 | 2 | 3;

const classes: Record<Levels, string> = {
  1: "text-5xl opacity-80",
  2: "text-3xl opacity-70",
  3: "text-xl opacity-50",
};

const Heading = BaseHeading.configure({ levels: [1, 2, 3] }).extend({
  renderHTML({ node, HTMLAttributes }) {
    const hasLevel = this.options.levels.includes(node.attrs.level);
    const level: Levels = hasLevel ? node.attrs.level : this.options.levels[0];
    return [
      `h${level}`,
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
        class: `${classes[level]}`,
      }),
      0,
    ];
  },
});
export default defineComponent({
  components: {
    EditorContent,
    Icon,
  },
  props: {
    context: {
      type: String,
      default: "",
    },
    codeEditor: {
      type: String,
      default: "simple",
    },
  },
  data() {
    let editor: any;
    return {
      editor,
      editorSetting: {
        activeColor: "#0078FF",
        deActiveColor: "#8899B3",
      },
      showMenu: {
        type: Boolean,
        default: true,
      },
      showLinkSubmitor: true,
    };
  },

  mounted() {
    this.editor = new Editor({
      injectCSS: true,
      extensions: [
        StartKit,
        Heading,
        Link,
        Highlight,
        Typography,
        Placeholder,
        TextAlign.configure({
          types: ["heading", "paragraph"],
        }),
        this.codeEditor == "pro"
          ? CodeBlockLowlight.extend({
              addNodeView() {
                return VueNodeViewRenderer(CodeBlockComponent);
              },
            }).configure({ lowlight })
          : ("" as any),
      ],
      content: this.context as string,
    });
  },
  methods: {
    doShowLinkSubmitor() {
      this.showLinkSubmitor == false
        ? (this.showLinkSubmitor = !this.showLinkSubmitor)
        : "";
    },
    doClosLinkSubmitor() {
      this.showLinkSubmitor == true
        ? (this.showLinkSubmitor = !this.showLinkSubmitor)
        : "";
    },
    setLink() {
      const text = this.editor.state.doc.textBetween(
        this.editor.state.selection.from,
        this.editor.state.selection.to,
        " "
      );
      const linked = this.editor.isActive("link");

      if (!text) {
        return;
      } else {
        if (linked) {
          this.editor.chain().focus().extendMarkRange("link").unsetLink().run();
        } else {
          this.editor
            .chain()
            .focus()
            .extendMarkRange("link")
            .setLink({ href: "http://www.baidu.com" })
            .run();
        }
      }
    },
  },
  beforeUnmount() {
    this.editor.destroy();
  },
});
</script>

<style lang="less">
/* Basic editor styles */
.ProseMirror {
  select {
    border: 1px solid #8899b3;
    border-radius: 5px;
    float: right;
    margin: 5px;
  }
  p.is-editor-empty:first-child::before {
    content: attr(data-placeholder);
    float: left;
    color: #ced4da;
    pointer-events: none;
    height: 0;
  }
  min-height: 320px;
  overflow: scroll;
  padding: 0.55rem 0.75rem;
  ul,
  ol {
    padding: 0 1rem;
  }

  ul {
    list-style-type: square;
  }
  ol {
    list-style-type: decimal;
  }
  h1 {
    line-height: 2.75rem;
  }
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.75rem;
  }

  h1 {
    font-size: "6.25rem";
  }
  h2 {
    font-size: "6.875rem";
  }
  h3 {
    font-size: "1.5rem";
  }
  h4 {
    font-size: "1.125rem";
  }
  code {
    background-color: rgba(#616161, 0.1);
    color: #616161;
  }

  pre {
    background: #0d0d0d;
    color: #fff;
    font-family: "JetBrainsMono", monospace;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;

    code {
      color: inherit;
      padding: 0;
      background: none;
      font-size: 0.8rem;
    }

    .hljs-comment,
    .hljs-quote {
      color: #616161;
    }

    .hljs-variable,
    .hljs-template-variable,
    .hljs-attribute,
    .hljs-tag,
    .hljs-name,
    .hljs-regexp,
    .hljs-link,
    .hljs-name,
    .hljs-selector-id,
    .hljs-selector-class {
      color: #f98181;
    }

    .hljs-number,
    .hljs-meta,
    .hljs-built_in,
    .hljs-builtin-name,
    .hljs-literal,
    .hljs-type,
    .hljs-params {
      color: #fbbc88;
    }

    .hljs-string,
    .hljs-symbol,
    .hljs-bullet {
      color: #b9f18d;
    }

    .hljs-title,
    .hljs-section {
      color: #faf594;
    }

    .hljs-keyword,
    .hljs-selector-tag {
      color: #70cff8;
    }

    .hljs-emphasis {
      font-style: italic;
    }

    .hljs-strong {
      font-weight: 700;
    }
  }
  img {
    max-width: 100%;
    height: auto;
  }

  a {
    color: #0078ff;
    text-decoration: underline;
    cursor: pointer;
  }
  blockquote {
    padding-left: 1rem;
    border-left: 2px solid rgba(#0d0d0d, 0.1);
  }

  hr {
    border: none;
    border-top: 2px solid rgba(#0d0d0d, 0.1);
    margin: 2rem 0;
  }
}
</style>