import adapter from "./adapter";
import bridge from "./bridge";

type Argument<T extends string> = {
  argument?: string;
  value?: T;
};

type Tag = {
  argument: string;
  callback: (argument: string, value?: string) => void;
};

const availableTags: Tag[] = [
  { argument: "adapter", callback: adapter },
  { argument: "bridge", callback: bridge },
];

function checkArgument<T extends string>(argument: string): Argument<T> {
  const args = process.argv;
  const argumentIndex = args.findIndex((arg) => arg.includes(`--${argument}`));

  if (argumentIndex === -1) {
    return {};
  }

  return {
    argument,
    value: args[argumentIndex + 1] as T | undefined,
  };
}

availableTags.map((tag) => {
  const { argument, value } = checkArgument(tag.argument);

  if (argument) {
    tag.callback(argument, value);
  }
});
