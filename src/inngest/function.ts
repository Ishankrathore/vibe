import {openai,createAgent} from "@inngest/agent-kit"
import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event }) => {
    const summarizer = createAgent({
      name: "Summarizer",
      system: "You are a helpful assistant that summarizes text.",
      model:openai({model:"gpt-4o"}),
    });
    const {output}= await summarizer.run(`summarize the following text:${event.data.value}`);
    //console.log("Summary:", output);
    //return { message: `Hello ${event.data.value}!` };
    return {output}
  },
);