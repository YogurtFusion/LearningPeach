import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    subTodos: [
      // we're using arrays bc subtodos are array
      {
        // AGAIN givin another model's reference/ref
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubTodo",
      },
    ], // Array of sub-todos
  },
  { timestamps: true },
);

export const Todo = mongoose.model("Todo", todoSchema);
// export asks for two things model name and schema
// mongo db will make "Todo" todos it's name in the mongo db all lowrcase with s in the last or pural
// whenever passing the reference or ref always use model's name which you passes in database
