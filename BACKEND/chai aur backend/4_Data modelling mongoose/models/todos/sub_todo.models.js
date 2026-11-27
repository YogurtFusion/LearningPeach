import mongoose from "mongoose";

const subTodoSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      // different models can have same names like Todoschema and subtodo schema bc they're totally differnt
      type: Boolean,
      default: false,
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    }
  },
  { timestamps: true },
);

export const SubTodo = mongoose.model("SubTodo", subTodoSchema);
