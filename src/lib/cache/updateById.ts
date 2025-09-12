export default function updateById<T extends { id: unknown }>(old: T[] | undefined, id: unknown, newValue: T) {
    if (!old) return undefined;
    return old.map(x => x.id === id ? newValue : x);
}