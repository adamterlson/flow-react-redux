import type { Dispatch, Store } from "redux";

declare module "react-redux" {
    declare type Action = { type: string };
    declare type Dispatch = (arg: Action | Array<Action>) => mixed;
    declare type MapStateToProps<S, OP, SP> = (state: S, ownProps: OP) => SP;
    declare type MapDispatchToProps<OP, DP> = (
        dispatch: Dispatch,
        ownProps: OP
    ) => DP;
    declare type MergeProps<SP, DP, OP, MP> = (
        stateProps: SP,
        dispatchProps: DP,
        ownProps: OP
    ) => MP;
    declare type Connector<OP, T> = (
        wc: ComponentType<{ ...$Exact<OP>, ...$Exact<T> }>
    ) => ComponentType<OP>;

    // connect()
    declare function connect<S, OP>(): Connector<OP, { dispatch: Dispatch }>;

    // connect(fn, fn)
    // connect(fn, {})
    declare function connect<S, OP, SP, DP>(
        mapDispatchToProps: MapStateToProps<S, OP, SP>,
        mapDispatchToProps: MapDispatchToProps<OP, DP> | DP
    ): Connector<OP, { ...$Exact<SP>, ...$Exact<DP> }>;

    // connect(fn)
    declare function connect<S, OP, SP>(
        mapStateToProps: MapStateToProps<S, OP, SP>
    ): Connector<OP, SP>;

    // connect(null, fn)
    // connect(null, {})
    declare function connect<OP, DP>(
        mapStateToProps: null,
        mapDispatchToProps: MapDispatchToProps<OP, DP> | DP
    ): Connector<OP, DP>;

    // connect(fn, fn, fn)
    // connect(fn, {}, fn)
    declare function connect<S, OP, SP, DP, MP>(
        mapDispatchToProps: MapStateToProps<S, OP, SP>,
        mapDispatchToProps: MapDispatchToProps<OP, DP> | DP,
        mergeProps: MergeProps<SP, DP, OP, MP>
    ): Connector<OP, MP>;
}
