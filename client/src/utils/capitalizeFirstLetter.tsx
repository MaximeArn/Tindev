// export default (word: string) => `${word[0].toUpperCase()}${word.substring(1)}`

export default (string: string) =>
  String(
    string
      .split(" ")
      .map((word: string) => `${word[0].toUpperCase()}${word.substring(1)}`)
      .join(" ")
  );
