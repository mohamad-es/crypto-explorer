import { PropsWithChildren, ReactNode } from "react";

type RenderStateProps<T> = PropsWithChildren<{
  isPending: boolean;
  error: Error | null;
  data: T;
  loadingRender?: ReactNode;
}>;

const RenderState = <T,>({ isPending, error, data, children, loadingRender }: RenderStateProps<T>) => {
  if (isPending) return loadingRender ? loadingRender : <div className="dark:text-light-subtitle">Loading ...</div>;
  if (error) return <div>{error.message}</div>;
  if (!data) return <div className="dark:text-light-subtitle">No data to show</div>;

  return children;
};

export default RenderState;
