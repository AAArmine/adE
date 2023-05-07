declare module '*.html' {
  const content: string;
  export default content;
}

declare module '*.svg' {
  const content: {
    src: string;
  };
  export default content;
}

declare module '*.graphql' {
  const content: any;
  export default content;
}

declare module 'google' {
  const content: any;
  export default content;
}
