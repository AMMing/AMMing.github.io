declare module '*.less' {
  interface IClassNames {
    [className: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module "*.gif" {
  const content: any;
  export default content;
}