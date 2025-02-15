import {PropsWithChildren} from "react";

type RenderStateProps<T> = PropsWithChildren<{
    isPending: boolean;
    error: Error | null;
    data: T
}>

const RenderState = <T, >({isPending, error, data, children}: RenderStateProps<T>) => {

    if (isPending) return <div>Loading ...</div>
    if (error) return <div>{error.message}</div>
    if (!data) return <div>No data to show</div>

    return children
};

export default RenderState;