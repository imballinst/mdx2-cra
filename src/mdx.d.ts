// Copyright (c) Tetrate, Inc 2021 All Rights Reserved.

declare module "*.mdx" {
  let MDXComponent: (props: any) => JSX.Element;
  export default MDXComponent;
}
