declare module '*.svg' {
  const ReactComponent: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  export { ReactComponent };
}
