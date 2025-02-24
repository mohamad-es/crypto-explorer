import { PropsWithChildren, ReactNode } from "react";

type RenderStateProps<T> = PropsWithChildren<{
  isPending: boolean;
  error: Error | null;
  data: T;
  loadingRender?: ReactNode;
}>;

const RenderState = <T,>({ isPending, error, data, children, loadingRender }: RenderStateProps<T>) => {
  if (isPending) return loadingRender ? loadingRender : <div>Loading ...</div>;
  if (error) return <div>{error.message}</div>;
  if (!data) return <div>No data to show</div>;

  return children;
};

export default RenderState;
