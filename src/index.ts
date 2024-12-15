export function node(tag: string | Function, props: object = {}, ...children: unknown[]) {
    return {
        tag,
        props,
        children
    }
}

export class Runtime {
    render() { }

    hydrate() { }
}
