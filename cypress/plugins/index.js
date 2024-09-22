


on("task", {
    "gmail:get-messages": async (args) => {
      const messages = await gmailTester.get_messages(
        path.resolve(__dirname, "credentials.json"),
        path.resolve(__dirname, "token.json"),
        args.options
      );
      return messages;
    },
  });