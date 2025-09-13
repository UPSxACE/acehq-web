export default function deleteById<T extends { id: unknown }>(old: T[] | undefined, id: unknown) {
    if (!old) return undefined;
    return old.filter(x => x.id !== id);
}